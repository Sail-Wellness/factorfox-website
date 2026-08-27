"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Scroll reveal, carried over from the original site.
 *
 * The original used framer motion for this. One fade and one eight pixel
 * lift is not worth a hundred and twenty kilobytes of animation runtime on
 * a marketing site that is judged on largest contentful paint, so the same
 * movement is done with a transition in the stylesheet and one
 * IntersectionObserver here.
 *
 * It fires once, eighty pixels before the element reaches the viewport, so
 * the movement has finished by the time the reader's eye arrives. Anyone
 * who has asked their system to stop animation gets the content in place,
 * and a visitor without JavaScript gets it too, through the noscript rule
 * in the layout.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    // An element that is already on screen at load should not wait for a
    // scroll that may never happen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // One generic ref across four possible tags; the cast is the price of
      // letting callers pick the element that is correct for their markup.
      ref={ref as never}
      className={`u-reveal ${shown ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
