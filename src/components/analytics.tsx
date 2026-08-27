"use client";

import Script from "next/script";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

/**
 * Measurement, with consent as the gate rather than as a notice.
 *
 * Nothing that is not strictly necessary loads until the visitor says yes.
 * Google Consent Mode defaults are set to denied before the tag ever runs, so
 * even the moment between load and choice is not a quiet collection. If no
 * measurement id is configured the whole thing stays dark and the banner does
 * not appear, which is the state the site launches in until the owner supplies
 * a property.
 */

const STORAGE_KEY = "ffx_consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

type Choice = "granted" | "denied" | null;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readChoice(): Choice {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function writeChoice(choice: Exclude<Choice, null>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage blocked. The choice holds for this page view and is asked again later.
  }
}

/** Fire a conversion or engagement event. Safe to call whether or not analytics loaded. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function Analytics() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Consent Mode defaults, set before any tag can run.
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    window.gtag = window.gtag ?? gtag;
    gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
      wait_for_update: 500,
    });

    const stored = readChoice();
    setChoice(stored);
    setReady(true);
    if (stored === "granted") {
      gtag("consent", "update", { analytics_storage: "granted" });
    }
  }, []);

  const decide = useCallback((next: Exclude<Choice, null>) => {
    writeChoice(next);
    setChoice(next);
    window.gtag?.("consent", "update", {
      analytics_storage: next === "granted" ? "granted" : "denied",
    });
  }, []);

  // Route changes are page views only once analytics is actually on.
  useEffect(() => {
    if (choice === "granted" && GA_ID) {
      track("page_view", { page_path: pathname });
    }
  }, [pathname, choice]);

  if (!GA_ID) return null;

  return (
    <>
      {choice === "granted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:true,anonymize_ip:true});`}
          </Script>
        </>
      ) : null}

      {ready && choice === null ? <ConsentBanner onDecide={decide} /> : null}
    </>
  );
}

function ConsentBanner({ onDecide }: { onDecide: (c: "granted" | "denied") => void }) {
  return (
    <div
      role="dialog"
      aria-label="Analytics consent"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-[var(--line-strong)] bg-[var(--bg-raised)] p-4 sm:p-5"
      style={{ boxShadow: "0 -8px 32px -24px rgba(7,11,17,0.5)" }}
    >
      <div className="mx-auto flex max-w-[1180px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[68ch] text-[0.875rem] leading-[1.55] text-[var(--fg-muted)]">
          We would like to measure which pages help people decide. Analytics only, no advertising and no
          third party tracking, and nothing loads until you say yes.{" "}
          <a href="/legal/privacy" className="underline underline-offset-2">
            What we collect
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => onDecide("denied")}
            className="rounded-[3px] border border-[var(--line-strong)] px-4 py-2.5 text-[0.875rem] font-semibold hover:border-[var(--fg)]"
          >
            No thanks
          </button>
          <button
            type="button"
            onClick={() => onDecide("granted")}
            className="rounded-[3px] bg-[var(--accent)] px-4 py-2.5 text-[0.875rem] font-semibold text-[var(--accent-fg)] hover:bg-[var(--color-navy-800)] dark:hover:bg-[var(--color-navy-300)]"
          >
            Allow analytics
          </button>
        </div>
      </div>
    </div>
  );
}
