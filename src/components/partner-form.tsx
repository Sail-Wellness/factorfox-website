"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const TRACKS = [
  "Referral or introduction",
  "Implementation and consulting",
  "Technology or integration",
  "Reseller or white label",
  "Something else",
];

/**
 * Partner enquiries post to the same endpoint as a demonstration request and are
 * separated by kind, so both land in one place and neither has to wait for its
 * own plumbing. Attribution is read the same way, because knowing which page
 * produced a partner is worth as much as knowing which page produced a lead.
 */
function readAttribution() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const now = new Date().toISOString();

  const lastTouch = {
    source: params.get("utm_source") ?? "",
    medium: params.get("utm_medium") ?? "",
    campaign: params.get("utm_campaign") ?? "",
    referrer: document.referrer ?? "",
    landingPath: window.location.pathname,
    at: now,
  };

  let firstTouch = lastTouch;
  try {
    const stored = window.localStorage.getItem("ffx_first_touch");
    if (stored) firstTouch = JSON.parse(stored);
    else window.localStorage.setItem("ffx_first_touch", JSON.stringify(lastTouch));
  } catch {
    // Storage can be unavailable. Attribution is useful, not load bearing.
  }
  return { firstTouch, lastTouch };
}

export function PartnerForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [startedAt, setStartedAt] = useState(0);

  useEffect(() => setStartedAt(Date.now()), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      email: String(form.get("email") ?? ""),
      track: String(form.get("track") ?? ""),
      detail: String(form.get("detail") ?? ""),
      // Spam controls: an unfilled honeypot and a minimum time on form.
      website: String(form.get("website") ?? ""),
      elapsedMs: Date.now() - startedAt,
      ...readAttribution(),
    };

    const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;
    if (!endpoint) {
      setStatus("error");
      setError("This form is not connected to an inbox yet, so we would rather tell you than swallow it. Write to sales@factorfox.com and it will reach the same person.");
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "partner_enquiry", receivedAt: new Date().toISOString(), ...payload }),
      });
      if (!res.ok) throw new Error("We could not record that enquiry.");
      setStatus("sent");
      if (typeof window !== "undefined" && "dataLayer" in window) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
          event: "partner_enquiry_submitted",
          track: payload.track,
        });
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "We could not record that enquiry.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-7" style={{ boxShadow: "var(--shadow-card)" }}>
        <p className="text-card-title">Received.</p>
        <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
          A person reads these rather than a sequence, and you will hear back from someone who can answer
          commercial questions rather than book you a call to arrange a call.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-7"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" required />
        <Field id="company" label="Company" required />
        <Field id="email" label="Work email" type="email" required />
        <div>
          <label htmlFor="track" className="u-label block text-[var(--fg-subtle)]">
            What kind of partnership
          </label>
          <select
            id="track"
            name="track"
            required
            className="mt-2 w-full rounded-lg border border-[var(--line-strong)] bg-[var(--bg)] px-3 py-2.5 text-[15px]"
          >
            {TRACKS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="detail" className="u-label block text-[var(--fg-subtle)]">
          What do you have in mind
        </label>
        <textarea
          id="detail"
          name="detail"
          rows={4}
          className="mt-2 w-full rounded-lg border border-[var(--line-strong)] bg-[var(--bg)] px-3 py-2.5 text-[15px] leading-[1.6]"
          placeholder="Who you work with, and what you think the two of us would do together."
        />
      </div>

      {/* Honeypot. Present for a bot, hidden from a person and from a screen reader. */}
      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0" style={{ clip: "rect(0 0 0 0)" }}>
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 rounded-lg border border-[var(--color-crit-600)] px-4 py-3 text-[14px] leading-[1.55] text-[var(--color-crit-600)]">
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={status === "sending"} className="btn-primary mt-6 w-full sm:w-auto">
        {status === "sending" ? "Sending" : "Send the enquiry"}
      </button>

      <p className="mt-4 text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
        No sequence, no drip. One person reads it and replies.
      </p>
    </form>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="u-label block text-[var(--fg-subtle)]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={id === "email" ? "email" : id === "name" ? "name" : "organization"}
        className="mt-2 w-full rounded-lg border border-[var(--line-strong)] bg-[var(--bg)] px-3 py-2.5 text-[15px]"
      />
    </div>
  );
}
