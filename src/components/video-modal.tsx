"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* A play affordance that opens the film in a modal over a darkened page.
   Built on the native dialog element on purpose: showModal gives us the focus
   trap, the inert background and Escape handling from the platform rather than
   from a thousand lines of our own that will be subtly wrong on a screen reader.
   What the platform does not give us is scroll lock or a paused video on close,
   so those two are handled here. */

type Props = {
  src: string;
  poster: string;
  /** Shown in the dialog above the film, and used as its accessible name. */
  title: string;
  /** One line under the title. */
  caption: string;
  /** Label on the trigger. */
  label: string;
  /** Second line on the trigger, usually the running time. */
  sublabel: string;
  /** Small still for the trigger. Falls back to the poster. */
  thumb?: string;
};

export function VideoModal({ src, poster, title, caption, label, sublabel, thumb }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    dialogRef.current?.close();
  }, []);

  function openDialog() {
    const d = dialogRef.current;
    if (!d) return;
    d.showModal();
    setOpen(true);
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      /* The click is the user gesture, so sound is allowed. If the browser
         refuses anyway, the controls are right there. */
      void v.play().catch(() => {});
    }
  }

  /* Scroll lock. showModal makes the page inert but does not stop it scrolling
     underneath, which looks broken on a long homepage. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  /* Fires for Escape and for close(), so the video stops however it was dismissed. */
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => {
      setOpen(false);
      const v = videoRef.current;
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
    };
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  return (
    <>
      <button type="button" onClick={openDialog} className="ff-video-trigger" aria-haspopup="dialog">
        <span className="ff-video-thumb">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={thumb ?? poster} alt="" aria-hidden="true" width={44} height={60} decoding="async" />
          <span className="ff-video-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" focusable="false">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </span>
        <span className="ff-video-text">
          <span className="ff-video-label">{label}</span>
          <span className="ff-video-sub">{sublabel}</span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="ff-video-dialog"
        aria-label={title}
        onClick={(e) => {
          /* The dialog fills the viewport and centers the film inside it, so
             anything that is not within the shell is the darkened area around
             it. Testing containment rather than comparing to the dialog itself
             is what makes this hold when the click lands on padding. */
          const shell = shellRef.current;
          if (shell && !shell.contains(e.target as Node)) close();
        }}
      >
        <div ref={shellRef} className="ff-video-shell">
          <div className="ff-video-head">
            <div>
              <p className="ff-video-title">{title}</p>
              <p className="ff-video-caption">{caption}</p>
            </div>
            <button type="button" onClick={close} className="ff-video-close" aria-label="Close the film">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" focusable="false">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <video
            ref={videoRef}
            className="ff-video-player"
            src={src}
            // Only asked for once the dialog opens. A poster on a closed dialog
            // is still downloaded, and nobody sees it.
            poster={open ? poster : undefined}
            controls
            playsInline
            preload="none"
          />
        </div>
      </dialog>
    </>
  );
}
