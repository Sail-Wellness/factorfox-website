"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { buildMailto, openMailto } from "@/lib/lead-handoff";

type Status = "idle" | "sending" | "sent" | "handoff";

const ROLES = [
  "Owner or principal",
  "President or executive",
  "Credit officer",
  "Underwriter",
  "Operations",
  "Account executive",
  "Collections",
  "Treasury or accounting",
  "Technology",
  "Other",
];

const BOOKS = [
  "Under $5M outstanding",
  "$5M to $25M",
  "$25M to $100M",
  "$100M to $500M",
  "Over $500M",
  "Starting a new operation",
];

const INTERESTS = [
  "Factoring",
  "Asset based lending",
  "Purchase order funding",
  "Reverse factoring",
  "Transportation",
  "Microsoft Teams",
  "Migrating from another system",
  "Covenant and bank reporting",
];

/** First touch is written once and never overwritten. Last touch is written every visit. */
function readAttribution() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const now = new Date().toISOString();

  const lastTouch = {
    source: params.get("utm_source") ?? "",
    medium: params.get("utm_medium") ?? "",
    campaign: params.get("utm_campaign") ?? "",
    term: params.get("utm_term") ?? "",
    content: params.get("utm_content") ?? "",
    gclid: params.get("gclid") ?? "",
    referrer: document.referrer ?? "",
    landingPath: window.location.pathname,
    at: now,
  };

  let firstTouch = lastTouch;
  try {
    const stored = window.localStorage.getItem("ffx_first_touch");
    if (stored) {
      firstTouch = JSON.parse(stored) as typeof lastTouch;
    } else {
      window.localStorage.setItem("ffx_first_touch", JSON.stringify(lastTouch));
    }
    window.sessionStorage.setItem("ffx_last_touch", JSON.stringify(lastTouch));
  } catch {
    // Private browsing or blocked storage. Attribution degrades, the lead does not.
  }

  return { firstTouch, lastTouch };
}

export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [mailHref, setMailHref] = useState<string>("");
  const [attribution, setAttribution] = useState<object>({});
  const [startedAt] = useState<number>(() => Date.now());

  useEffect(() => {
    setAttribution(readAttribution());
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      company: String(form.get("company") ?? "").trim(),
      role: String(form.get("role") ?? ""),
      book: String(form.get("book") ?? ""),
      currentSystem: String(form.get("currentSystem") ?? "").trim(),
      interests: form.getAll("interests").map(String),
      message: String(form.get("message") ?? "").trim(),
      // Spam controls: an unfilled honeypot and a minimum time on form.
      website: String(form.get("website") ?? ""),
      elapsedMs: Date.now() - startedAt,
      attribution,
      pagePath: typeof window !== "undefined" ? window.location.pathname : "",
    };

    // The site is statically hosted, so there is no server of ours to post to.
    // The endpoint is configuration: any URL that accepts JSON works, and a
    // Power Automate "when an HTTP request is received" flow inside the
    // existing Microsoft tenant is the shortest path to one.
    const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || SITE.leadEndpoint;

    /* No endpoint, or an endpoint that fails, both hand off to a mail draft
       carrying every answer. A submission never dead ends. */
    const handOff = () => {
      const href = buildMailto(`Demonstration request: ${payload.company || payload.name}`, [
        ["Name", payload.name],
        ["Company", payload.company],
        ["Email", payload.email],
        ["Role", payload.role],
        ["Size of book", payload.book],
        ["System they run today", payload.currentSystem],
        ["Wants to see", payload.interests],
        ["Notes", payload.message],
      ]);
      setMailHref(href);
      setStatus("handoff");
      openMailto(href);
    };

    if (!endpoint) {
      handOff();
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "demo_request", receivedAt: new Date().toISOString(), ...payload }),
      });
      if (!res.ok) throw new Error("Endpoint refused the request.");
      setStatus("sent");
      if (typeof window !== "undefined" && "dataLayer" in window) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
          event: "demo_request_submitted",
          role: payload.role,
          book: payload.book,
          interests: payload.interests,
        });
      }
    } catch {
      handOff();
    }
  }

  if (status === "handoff") {
    return (
      <div
        className="rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-7"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <p className="text-card-title">Your answers are in a mail draft.</p>
        <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
          It should have opened in your mail application already, addressed to us and carrying
          everything you filled in. Send it and we will pick it up from there.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={mailHref} className="btn-primary">
            Open the draft again
          </a>
          <a href={SITE.bookingUrl} rel="noopener" className="btn-secondary">
            Or take a slot in the calendar
          </a>
        </div>
        <p className="mt-6 border-t border-[var(--line)] pt-5 text-[14px] leading-[1.6] text-[var(--fg-subtle)]">
          No mail application on this machine? Write to{" "}
          <a href={`mailto:${SITE.contactEmail}`} className="text-[var(--accent)] underline underline-offset-4">
            {SITE.contactEmail}
          </a>{" "}
          or call{" "}
          <a href={`tel:${SITE.phoneHref}`} className="whitespace-nowrap text-[var(--accent)] underline underline-offset-4">
            {SITE.phone}
          </a>
          . A person answers either one.
        </p>
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="border border-[var(--line)] bg-[var(--bg-raised)] p-8" style={{ boxShadow: "var(--shadow-card)" }}>
        <p className="u-eyebrow" style={{ color: "var(--color-ok-600)" }}>
          Received
        </p>
        <h2 className="mt-3 text-[1.5rem]">Thank you. Your demonstration request has been received.</h2>
        <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
          Someone from FactorFox will contact you shortly, and it will be somebody who has actually run a
          factoring operation. If you would rather put time in the calendar now, use the scheduler below.
        </p>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-[var(--line-strong)] bg-[var(--bg-raised)] px-3.5 py-2.5 text-[0.9375rem] text-[var(--fg)] placeholder:text-[var(--fg-subtle)] focus:border-[var(--accent)]";
  const label = "block text-[0.8125rem] font-semibold text-[var(--fg)]";

  return (
    <form
      onSubmit={onSubmit}
      className="border border-[var(--line)] bg-[var(--bg-raised)] p-6 sm:p-8"
      style={{ boxShadow: "var(--shadow-card)" }}
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            className={field}
            aria-describedby="email-help"
          />
          <p id="email-help" className="mt-1.5 text-[0.75rem] text-[var(--fg-subtle)]">
            Use your company address so we can route this to the right person.
          </p>
        </div>
        <div>
          <label className={label} htmlFor="company">
            Company
          </label>
          <input id="company" name="company" required autoComplete="organization" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="role">
            Your role
          </label>
          <select id="role" name="role" required defaultValue="" className={field}>
            <option value="" disabled>
              Select one
            </option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="book">
            Size of book
          </label>
          <select id="book" name="book" defaultValue="" className={field}>
            <option value="">Prefer not to say</option>
            {BOOKS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="currentSystem">
            System you run today
          </label>
          <input
            id="currentSystem"
            name="currentSystem"
            className={field}
            placeholder="FactorSoft, CADENCE, spreadsheets, something in house"
          />
        </div>
      </div>

      <fieldset className="mt-7 border-0 p-0">
        <legend className={label}>What should we show you?</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {INTERESTS.map((i) => (
            <label key={i} className="flex items-center gap-2.5 text-[0.875rem] text-[var(--fg-muted)]">
              <input
                type="checkbox"
                name="interests"
                value={i}
                className="h-4 w-4 shrink-0 accent-[var(--accent)]"
              />
              {i}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-7">
        <label className={label} htmlFor="message">
          Anything specific you want to see
        </label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>

      {/* Honeypot. Real people never see it, and it is not announced to screen readers. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-[var(--accent)] px-6 py-3 text-[0.9375rem] font-semibold text-[var(--accent-fg)] transition-colors hover:bg-[var(--color-navy-800)] disabled:opacity-60 dark:hover:bg-[var(--color-navy-300)]"
        >
          {status === "sending" ? "Sending" : "Request a demonstration"}
        </button>
        <p className="text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
          We use this to prepare the demonstration and to reply. Nothing is sold or shared.{" "}
          <a href="/legal/privacy" className="underline underline-offset-2">
            Privacy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
