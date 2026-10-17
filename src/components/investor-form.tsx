"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import {
  CATEGORY_EVENT,
  INQUIRY_CATEGORIES,
  INVESTOR_ACK_VERSION,
  INVESTOR_ACKNOWLEDGMENT,
  INVESTOR_CONFIRMATION,
  isCategoryId,
  type InquiryCategoryId,
} from "@/lib/investors";

type Status = "idle" | "sending" | "sent" | "failed";
type Errors = Partial<Record<string, string>>;

/* Lengths match what the intake service accepts. The browser check is a
   courtesy to the person typing; the service repeats every check. */
const LIMITS = {
  fullName: 120,
  email: 254,
  organization: 160,
  jobTitle: 120,
  message: 4000,
  phone: 40,
  companyWebsite: 200,
  country: 80,
  capitalInterest: 200,
} as const;

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;
const PHONE_RE = /^[+()0-9 .x]{7,40}$/;
/* Control characters other than tab and newline never belong in a message. */
const CONTROL_RE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;

function clean(v: FormDataEntryValue | null, max: number) {
  return String(v ?? "")
    .replace(/\r\n?/g, "\n")
    .trim()
    .slice(0, max);
}

function validWebsite(v: string) {
  if (!v) return true;
  try {
    const u = new URL(/^https?:\/\//i.test(v) ? v : `https://${v}`);
    return (u.protocol === "https:" || u.protocol === "http:") && u.hostname.includes(".");
  } catch {
    return false;
  }
}

function categoryFromUrl(): InquiryCategoryId | "" {
  if (typeof window === "undefined") return "";
  const c = new URLSearchParams(window.location.search).get("category");
  return isCategoryId(c) ? c : "";
}

/**
 * The investor and strategic partnership inquiry.
 *
 * It posts to the same intake service as the demonstration and partner forms,
 * separated by kind, and sends a routeKey with the category so the service can
 * route it to the right people from its own configuration. Nothing here holds
 * an address, a key or a secret. Marketing consent is recorded as a flag only:
 * this form never subscribes anyone to a mailing list, and the analytics event
 * carries the category and nothing a person typed.
 */
export function InvestorForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [startedAt, setStartedAt] = useState(0);
  const [category, setCategory] = useState<InquiryCategoryId | "">("");
  const [errors, setErrors] = useState<Errors>({});
  const selectRef = useRef<HTMLSelectElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStartedAt(Date.now());
    const fromUrl = categoryFromUrl();
    if (fromUrl) setCategory(fromUrl);

    const onPick = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (isCategoryId(id)) {
        setCategory(id);
        window.setTimeout(() => selectRef.current?.focus({ preventScroll: true }), 50);
      }
    };
    window.addEventListener(CATEGORY_EVENT, onPick);
    return () => window.removeEventListener(CATEGORY_EVENT, onPick);
  }, []);

  useEffect(() => {
    if (status === "sent" || status === "failed") resultRef.current?.focus();
  }, [status]);

  function validate(form: FormData) {
    const e: Errors = {};
    const need = (k: keyof typeof LIMITS, label: string) => {
      const v = clean(form.get(k), LIMITS[k]);
      if (!v) e[k] = `Enter your ${label}.`;
      return v;
    };
    const fullName = need("fullName", "full name");
    const email = need("email", "business email");
    const organization = need("organization", "organization");
    const jobTitle = need("jobTitle", "job title");
    const message = need("message", "message");
    const phone = clean(form.get("phone"), LIMITS.phone);
    const companyWebsite = clean(form.get("companyWebsite"), LIMITS.companyWebsite);
    const country = clean(form.get("country"), LIMITS.country);
    const capitalInterest = clean(form.get("capitalInterest"), LIMITS.capitalInterest);
    const cat = String(form.get("category") ?? "");

    if (email && !EMAIL_RE.test(email)) e.email = "Enter a valid business email address.";
    if (!isCategoryId(cat)) e.category = "Choose an inquiry category.";
    if (message && message.length < 20) e.message = "Tell us a little more, in at least 20 characters.";
    if (phone && !PHONE_RE.test(phone)) e.phone = "Use digits, spaces and an optional leading plus sign.";
    if (!validWebsite(companyWebsite)) e.companyWebsite = "Enter a website address such as example.com.";
    for (const [k, v] of Object.entries({ fullName, organization, jobTitle, message, country, capitalInterest })) {
      if (CONTROL_RE.test(v)) e[k] = "Remove the unsupported characters.";
    }
    if (form.get("acknowledgment") !== "on") e.acknowledgment = "Confirm the acknowledgment to send your inquiry.";

    return {
      errors: e,
      values: { fullName, email, organization, jobTitle, message, phone, companyWebsite, country, capitalInterest, category: cat },
    };
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formEl = ev.currentTarget;
    const form = new FormData(formEl);
    const { errors: found, values } = validate(form);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formEl.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    const cat = INQUIRY_CATEGORIES.find((c) => c.id === values.category)!;
    const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || SITE.leadEndpoint;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "omit",
        body: JSON.stringify({
          kind: "investor_inquiry",
          receivedAt: new Date().toISOString(),
          ...values,
          categoryLabel: cat.label,
          routeKey: cat.routeKey,
          acknowledgment: { accepted: true, version: INVESTOR_ACK_VERSION, text: INVESTOR_ACKNOWLEDGMENT },
          // A flag for the record only. No list subscription happens from this form.
          marketingConsent: form.get("marketingConsent") === "on",
          // Spam controls: an unfilled honeypot and a minimum time on form.
          website: String(form.get("website") ?? ""),
          elapsedMs: Date.now() - startedAt,
          landingPath: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error("Endpoint refused the request.");
      setStatus("sent");
      if ("dataLayer" in window) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
          event: "investor_inquiry_submitted",
          inquiry_category: cat.id,
        });
      }
    } catch {
      setStatus("failed");
    }
  }

  const panel = "self-start rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-6 sm:p-8";

  if (status === "sent") {
    return (
      <div ref={resultRef} tabIndex={-1} role="status" className={panel} style={{ boxShadow: "var(--shadow-card)" }}>
        <p className="text-card-title">Inquiry received.</p>
        <p className="mt-3 max-w-[60ch] text-[15px] leading-[1.65] text-[var(--fg-muted)]">{INVESTOR_CONFIRMATION}</p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div ref={resultRef} tabIndex={-1} role="alert" className={panel} style={{ boxShadow: "var(--shadow-card)" }}>
        <p className="text-card-title">We could not send that just now.</p>
        <p className="mt-3 max-w-[60ch] text-[15px] leading-[1.65] text-[var(--fg-muted)]">
          Nothing was recorded. You can try again, or write to us and mention that your note is a strategic
          relationship inquiry.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          <button type="button" className="btn-secondary" onClick={() => setStatus("idle")}>
            Try again
          </button>
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="text-[1rem] font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
          >
            {SITE.contactEmail}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={panel} style={{ boxShadow: "var(--shadow-card)" }} aria-describedby="inv-form-note">
      <p id="inv-form-note" className="text-[14px] leading-[1.6] text-[var(--fg-muted)]">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">required</span> are required. Please do not include account numbers, financial
        statements, personal identification or other confidential information. Documents are not accepted
        through this form.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full name" required autoComplete="name" max={LIMITS.fullName} error={errors.fullName} />
        <Field id="email" label="Business email" type="email" required autoComplete="email" max={LIMITS.email} error={errors.email} />
        <Field id="organization" label="Organization" required autoComplete="organization" max={LIMITS.organization} error={errors.organization} />
        <Field id="jobTitle" label="Job title" required autoComplete="organization-title" max={LIMITS.jobTitle} error={errors.jobTitle} />

        <div className="sm:col-span-2">
          <Label htmlFor="category" required>
            Inquiry category
          </Label>
          <select
            ref={selectRef}
            id="category"
            name="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value as InquiryCategoryId)}
            aria-invalid={errors.category ? true : undefined}
            aria-describedby={errors.category ? "category-error" : undefined}
            className={inputCls(Boolean(errors.category))}
          >
            <option value="" disabled>
              Choose a category
            </option>
            {INQUIRY_CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
          <ErrorText id="category-error" text={errors.category} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="message" required>
            Message
          </Label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            maxLength={LIMITS.message}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputCls(Boolean(errors.message))} leading-[1.6]`}
            placeholder="Who you are, what you have in mind, and the right person to speak with."
          />
          <ErrorText id="message-error" text={errors.message} />
        </div>
      </div>

      <fieldset className="mt-8 border-t border-[var(--line)] pt-6">
        <legend className="u-label pr-3 text-[var(--fg-subtle)]">Optional</legend>
        <div className="mt-3 grid gap-5 sm:grid-cols-2">
          <Field id="phone" label="Phone" type="tel" autoComplete="tel" max={LIMITS.phone} error={errors.phone} />
          <Field id="companyWebsite" label="Company website" type="url" autoComplete="url" max={LIMITS.companyWebsite} error={errors.companyWebsite} inputMode="url" />
          <Field id="country" label="Country" autoComplete="country-name" max={LIMITS.country} error={errors.country} />
          <Field
            id="capitalInterest"
            label="Estimated capital capacity or financing interest"
            max={LIMITS.capitalInterest}
            error={errors.capitalInterest}
            hint="A range or a short description is enough."
          />
        </div>
      </fieldset>

      {/* Honeypot. Present for a bot, hidden from a person and from a screen reader. */}
      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0" style={{ clip: "rect(0 0 0 0)" }}>
        <label htmlFor="inv-website">Leave this field empty</label>
        <input id="inv-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 space-y-4 border-t border-[var(--line)] pt-6">
        <div>
          <label className="flex items-start gap-3 text-[14px] leading-[1.6] text-[var(--fg)]">
            <input
              type="checkbox"
              name="acknowledgment"
              required
              aria-invalid={errors.acknowledgment ? true : undefined}
              aria-describedby={errors.acknowledgment ? "acknowledgment-error" : undefined}
              className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]"
            />
            <span>
              {INVESTOR_ACKNOWLEDGMENT.replace("FactorFox Privacy Policy.", "")}
              <a href="/legal/privacy/" className="underline underline-offset-2" target="_blank" rel="noopener">
                FactorFox Privacy Policy
              </a>
              . <span aria-hidden="true">*</span>
            </span>
          </label>
          <ErrorText id="acknowledgment-error" text={errors.acknowledgment} />
        </div>
        <label className="flex items-start gap-3 text-[14px] leading-[1.6] text-[var(--fg-muted)]">
          <input type="checkbox" name="marketingConsent" className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]" />
          <span>Optional: I would like to receive occasional FactorFox company news and product updates by email.</span>
        </label>
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary mt-7 w-full sm:w-auto">
        {status === "sending" ? "Sending" : "Submit inquiry"}
      </button>
    </form>
  );
}

function inputCls(invalid: boolean) {
  return `mt-2 w-full rounded-lg border ${
    invalid ? "border-[var(--color-crit-600)]" : "border-[var(--line-strong)]"
  } bg-[var(--bg)] px-3 py-2.5 text-[15px]`;
}

function Label({ htmlFor, required, children }: { htmlFor: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="u-label block text-[var(--fg-subtle)]">
      {children}
      {required ? <span aria-hidden="true"> *</span> : null}
    </label>
  );
}

function ErrorText({ id, text }: { id: string; text?: string }) {
  if (!text) return null;
  return (
    <p id={id} className="mt-1.5 text-[13px] leading-[1.5] text-[var(--color-crit-600)]">
      {text}
    </p>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
  max,
  error,
  hint,
  inputMode,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  max: number;
  error?: string;
  hint?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  const describedBy = [hint ? `${id}-hint` : "", error ? `${id}-error` : ""].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={max}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={inputCls(Boolean(error))}
      />
      {hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-[12.5px] leading-[1.5] text-[var(--fg-subtle)]">
          {hint}
        </p>
      ) : null}
      <ErrorText id={`${id}-error`} text={error} />
    </div>
  );
}

/**
 * A link that opens the inquiry form with a category chosen. Without script it
 * is an ordinary link that carries the category in the address, which the form
 * reads on load. With script it preselects in place and scrolls, with no reload.
 */
export function InquiryLink({
  category,
  className,
  children,
}: {
  category: InquiryCategoryId;
  className?: string;
  children: React.ReactNode;
}) {
  const href = `/investors/?category=${category}#inquiry`;
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        try {
          window.history.replaceState(null, "", href);
        } catch {
          // History can be unavailable in some embedded views. Preselection still happens.
        }
        window.dispatchEvent(new CustomEvent(CATEGORY_EVENT, { detail: category }));
        document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {children}
    </a>
  );
}
