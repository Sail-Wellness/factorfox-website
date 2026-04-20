# Backlog — Post-Demo Feedback (2026-04-20)

Notes captured from Rob's review. Revisit when picking this back up.

## 1. Small design fixes from Figma

- **Source:** https://www.figma.com/design/DzHHJDgVSTYQdrkXdjpSlC/Factor-Websites?node-id=291-6910
- **Scope:** Small design fixes across the site.
- **Important:** Fixes should apply to dark mode too — verify each change in both themes before closing.
- **Action when resuming:** Open the Figma node above, walk through each flagged item, compare against current site in light + dark, and list concrete diffs before editing.

## 2. Updated color palette

- **Source:** https://docs.google.com/document/d/1bIuKhZOQSGVftb6lQJUqnDINyBd1U__bd-GW2vs9W5w/edit?usp=sharing
- **Scope:** Color palette updated; doc marks which colors changed.
- **Action when resuming:**
  - Diff the updated palette against current tokens in `tailwind.config.ts` / CSS vars.
  - Update design tokens first, then spot-check pages that use the changed colors in both themes.

## 3. Calendly load latency

- **Observation (Rob):** Calendly widget is slow to load on `/contact-sales`.
- **Idea:** Preload Calendly assets earlier — e.g., warm it up when a user lands on the home page so it's cached by the time they reach `/contact-sales`.
- **Options to evaluate:**
  - `<link rel="preconnect">` / `<link rel="dns-prefetch">` to `assets.calendly.com` and `calendly.com` in the app shell.
  - `<link rel="preload">` for the Calendly widget script.
  - Lazy-mount `InlineWidget` on home-page idle (`requestIdleCallback`) so the script+iframe are warm in the browser cache.
  - Measure before/after with Lighthouse + network waterfall to confirm actual improvement.
- **Risk:** Preloading on every home-page visit costs bandwidth for users who never reach the demo page — weigh against observed latency gain.

## 4. Custom scheduler UI with Calendly backend

- **Ask (Rob):** How much work to use Rob's custom-designed scheduling interface, with Calendly still powering availability/booking underneath?
- **Approach to investigate:**
  - Calendly Scheduling API (v2) exposes event types, availability, and booking endpoints — a custom UI can call these directly instead of embedding the iframe.
  - Requires a Calendly API token (server-side, not exposed to client).
  - Need a small backend / serverless function to proxy requests (keep token secret, handle CORS).
  - Replace `InlineWidget` with a custom flow: date picker → time slot list → contact form → POST booking.
- **Open questions:**
  - Does Rob's custom design cover the full flow (date select, time select, confirm, success) or just the entry screen?
  - Are we OK maintaining our own booking form vs. Calendly's hosted GDPR / validation / reminders?
  - Does the Calendly plan tier include the Scheduling API? (Some features are Teams/Enterprise only.)
- **Rough effort guess (refine after reviewing the custom design):** 3–5 days for a clean implementation incl. backend proxy, error states, and dark-mode styling.

## Resume checklist

- [ ] Pull latest `main`, branch from it.
- [ ] Walk Figma fixes in light + dark.
- [ ] Apply updated color tokens, spot-check.
- [ ] Spike Calendly preload; measure.
- [ ] Review Rob's custom scheduler design; scope API-backed rebuild.
