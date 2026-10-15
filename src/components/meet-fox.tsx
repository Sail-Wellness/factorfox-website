"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/components/analytics";
import { MEET_FOX, webinarHasEnded } from "@/lib/meet-fox";

/* ------------------------------------------------------------ the banner */

export function MeetFoxBanner({ priority = false, sizes = "100vw" }: { priority?: boolean; sizes?: string }) {
  const b = MEET_FOX.banner;
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={b.src1200}
        srcSet={`${b.src800} 800w, ${b.src1200} 1200w, ${b.src2000} 2000w`}
        sizes={sizes}
        alt={b.alt}
        width={b.width}
        height={b.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="block h-auto w-full"
      />
    </>
  );
}

/* --------------------------------------------------- registration link */

/**
 * A click here is registration intent, never a registration. Teams completes
 * the registration on Microsoft's page and FactorFox cannot see that happen,
 * so nothing in the browser is marked as registered.
 */
export function RegisterLink({
  placement,
  className = "btn-primary-lg",
  children = "Register for the Live Webinar",
}: {
  placement: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [ended, setEnded] = useState(false);
  useEffect(() => setEnded(webinarHasEnded()), []);

  if (ended) {
    return (
      <a href="/demo/" className={className} onClick={() => track("meetfox_ended_demo_click", { placement })}>
        The live webinar has ended. Request a demonstration
      </a>
    );
  }
  return (
    <a
      href={MEET_FOX.registrationUrl}
      target="_blank"
      rel="noopener"
      className={className}
      onClick={() => track("meetfox_register_click", { placement })}
    >
      {children}
      <span className="sr-only"> (opens Microsoft Teams in a new tab)</span>
    </a>
  );
}

/* ------------------------------------------------- marketing opt in */

/**
 * Marketing consent, separate from webinar registration and never a condition
 * of it. The box starts unticked and the form cannot be sent without it, so a
 * submission is the consent. Mailchimp's own endpoint receives it in a new tab,
 * where Mailchimp runs its confirmation step and records the opt in.
 */
export function MarketingOptIn({ source }: { source: string }) {
  const [agreed, setAgreed] = useState(false);
  const mc = MEET_FOX.mailchimp;
  const field =
    "mt-1.5 block w-full rounded-lg border border-[var(--line-strong)] bg-[var(--bg)] px-3.5 py-2.5 text-[0.9375rem] focus:border-[var(--accent)] focus:outline-none";
  const label = "text-[0.8125rem] font-semibold text-[var(--fg)]";

  return (
    <form
      action={mc.action}
      method="post"
      target="_blank"
      noValidate={false}
      onSubmit={(e) => {
        if (!agreed) {
          e.preventDefault();
          return;
        }
        track("meetfox_marketing_optin_submit", { source, consent_version: MEET_FOX.consentVersion });
      }}
      className="border border-[var(--line)] bg-[var(--bg-sunken)] p-6 sm:p-8"
    >
      <input type="hidden" name="u" value={mc.u} />
      <input type="hidden" name="id" value={mc.id} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={`mf-first-${source}`}>First name</label>
          <input id={`mf-first-${source}`} name="FNAME" autoComplete="given-name" className={field} />
        </div>
        <div>
          <label className={label} htmlFor={`mf-last-${source}`}>Last name</label>
          <input id={`mf-last-${source}`} name="LNAME" autoComplete="family-name" className={field} />
        </div>
      </div>
      <div className="mt-4">
        <label className={label} htmlFor={`mf-email-${source}`}>Business email</label>
        <input
          id={`mf-email-${source}`}
          name="EMAIL"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          className={field}
        />
      </div>
      {/* Mailchimp's bot trap: real people never see it. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <input type="text" name={`b_${mc.u}_${mc.id}`} tabIndex={-1} defaultValue="" />
      </div>
      <label className="mt-5 flex items-start gap-3 text-[0.875rem] leading-[1.55] text-[var(--fg-muted)]">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
        />
        <span>{MEET_FOX.consentText}</span>
      </label>
      <button type="submit" disabled={!agreed} className="btn-secondary mt-5 disabled:cursor-not-allowed disabled:opacity-50">
        Subscribe to FactorFox updates
      </button>
      <p className="mt-3 text-[0.8125rem] leading-[1.55] text-[var(--fg-subtle)]">
        Optional, and separate from webinar registration. Mailchimp opens in a new tab to confirm your
        subscription. See our <a href="/privacy/" className="underline underline-offset-2">privacy policy</a>.
      </p>
    </form>
  );
}

/* ------------------------------------------------------- the promotion */

const DISMISS_KEY = "ffx_meetfox_dismissed_until";
const SESSION_KEY = "ffx_meetfox_shown";
const DELAY_MS = 5000;
const SNOOZE_MS = 7 * 24 * 60 * 60 * 1000;

/* Public pages where an invitation would interrupt something the visitor is
   doing: the webinar page itself, and the pages built around a form. */
const EXCLUDED = ["/meet-fox", "/demo", "/partners", "/contact"];

/* Survives client side navigation, so the invitation can never chase a
   visitor from page to page even when storage is blocked. */
let shownThisPageLife = false;

function storageGet(store: "local" | "session", key: string): string | null {
  try {
    return (store === "local" ? window.localStorage : window.sessionStorage).getItem(key);
  } catch {
    return null;
  }
}
function storageSet(store: "local" | "session", key: string, value: string) {
  try {
    (store === "local" ? window.localStorage : window.sessionStorage).setItem(key, value);
  } catch {
    // Storage blocked: the in memory flag still holds for this visit.
  }
}

function eligible(pathname: string) {
  if (webinarHasEnded()) return false;
  if (shownThisPageLife) return false;
  const path = pathname.replace(/\/$/, "") || "/";
  if (EXCLUDED.some((p) => path === p || path.startsWith(p + "/"))) return false;
  if (storageGet("session", SESSION_KEY)) return false;
  const until = Number(storageGet("local", DISMISS_KEY) ?? 0);
  if (until && Date.now() < until) return false;
  return true;
}

/* The visitor is mid task: typing in a field, or another dialog is open. */
function busy() {
  const a = document.activeElement;
  if (a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.tagName === "SELECT" || (a as HTMLElement).isContentEditable)) {
    return true;
  }
  return Boolean(document.querySelector("dialog[open]"));
}

export function MeetFoxPromo() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!eligible(pathname)) return;
    let timer = window.setTimeout(function attempt() {
      if (!eligible(pathname)) return;
      if (busy()) {
        timer = window.setTimeout(attempt, 4000);
        return;
      }
      shownThisPageLife = true;
      storageSet("session", SESSION_KEY, "1");
      setMounted(true);
    }, DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!mounted) return;
    const d = dialogRef.current;
    if (!d || d.open) return;
    d.showModal();
    track("meetfox_popup_impression", { path: pathname });
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onClose = () => {
      document.body.style.overflow = previous;
      setMounted(false);
    };
    d.addEventListener("close", onClose);
    return () => {
      d.removeEventListener("close", onClose);
      document.body.style.overflow = previous;
    };
    // pathname is read for the impression only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  function snooze(reason: string) {
    storageSet("local", DISMISS_KEY, String(Date.now() + SNOOZE_MS));
    track(reason === "register" ? "meetfox_popup_register_click" : "meetfox_popup_dismiss", { path: pathname, how: reason });
    dialogRef.current?.close();
  }

  if (!mounted) return null;

  return (
    <dialog
      ref={dialogRef}
      className="ff-promo-dialog"
      aria-labelledby="ff-promo-title"
      aria-describedby="ff-promo-desc"
      onCancel={() => snooze("escape")}
      onClick={(e) => {
        if (e.target === dialogRef.current) snooze("backdrop");
      }}
    >
      <div className="ff-promo-shell" tabIndex={-1} autoFocus>
        <button type="button" className="ff-promo-close" aria-label="Close the webinar invitation" onClick={() => snooze("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <MeetFoxBanner sizes="(max-width: 760px) 100vw, 720px" />
        <div className="ff-promo-body">
          <h2 id="ff-promo-title" className="ff-promo-title">
            First to the Cloud. First to AI Native.<span className="sr-only"> Meet Fox.</span>
          </h2>
          <p id="ff-promo-desc" className="ff-promo-desc">
            Bring Your A/R. See How Intelligent Migration Works.
          </p>
          <p className="ff-promo-when">
            November 19, 2026 <span aria-hidden="true">&middot;</span> 1:00 PM Eastern
          </p>
          <div className="ff-promo-actions">
            <a
              href={MEET_FOX.registrationUrl}
              target="_blank"
              rel="noopener"
              className="btn-primary-lg"
              onClick={() => snooze("register")}
            >
              Register for the Live Webinar
              <span className="sr-only"> (opens Microsoft Teams in a new tab)</span>
            </a>
            <button type="button" className="ff-promo-later" onClick={() => snooze("later")}>
              Maybe Later
            </button>
          </div>
          <p className="ff-promo-more">
            <a href="/meet-fox/" onClick={() => snooze("details")}>What the webinar covers</a>
          </p>
        </div>
      </div>
    </dialog>
  );
}
