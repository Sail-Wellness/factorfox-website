# Known Issues

Tracked drift and tech debt that doesn't block shipping but should be addressed
in a focused cleanup pass. Each entry should describe the issue, why it matters,
and a rough plan for resolution.

---

## Dark-mode color scheme is inconsistent across sections

**Status:** Open
**Surfaced:** 2026-04-14 while building `ContactSales.tsx`

### The problem

The `--background` and `--card` tokens defined in `src/index.css` exist but
section files mostly ignore them. Each section hardcodes its own dark-mode hex
literal instead of going through `bg-background` / `bg-card`. The result is
~8 different "dark navy" values across the site for what should be 2–3 semantic
surfaces (page bg, card, elevated card).

### Inventory of literals (as of 2026-04-14)

**Page / section backgrounds — 5 different values:**
- `#0d0d0f` — `Hero.tsx`, `EcosystemSection.tsx`, `IntelligenceCore.tsx`,
  `IncreaseROI.tsx`, `OnboardSection.tsx`, `PrecisionModules.tsx`,
  `DocumentsToDecisions.tsx`
- `#0a0f19` — `IntegrationsSection.tsx`
- `#0d0f14` — `FeatureCards.tsx`
- `#040a15` — `ContactSales.tsx` (`<main>`)
- `#090f19` — `Navbar.tsx` (added 2026-04-14 to match Figma; was previously
  using `bg-background` token)

The `--background` token in `index.css` is `#0b1120` and is no longer
referenced anywhere — Navbar used to be the sole consumer.

**Card surfaces — 4 different values:**
- `#111827` — `PrecisionModules.tsx` (cards), `FeatureCards.tsx` (cards),
  `OperatingSystemSection.tsx` (cards)
- `#0c121d` — `CtaSection.tsx`, `OnboardSection.tsx` (cards), AND the current
  value of `--card` in dark mode (set on 2026-04-14 to match the contact-sales
  Figma)
- `#0f1520` — `IntelligenceCore.tsx` (inner card)
- `#1a2235` — `IntelligenceCore.tsx` (innermost), `DocumentsToDecisions.tsx`

### Why it matters

- Visual inconsistency between pages — navigating between sections shifts the
  background tone in ways that aren't intentional.
- The `--card` token currently agrees with two files and disagrees with three
  others, so changing the token doesn't actually unify the site.
- New work has to guess which hex to use, which compounds the drift.
- Future design system work (themes, brand refresh) will require touching every
  section file individually instead of one token.

### Proposed fix

A focused refactor pass, ideally after the contact-sales work is signed off:

1. Pick canonical values for: page bg, card bg, elevated card bg, input bg.
2. Update the tokens in `src/index.css` accordingly. Add new tokens if needed
   (`--surface-soft` and `--input-soft` already exist and can serve as the
   pattern).
3. Sweep all section files and replace `dark:bg-[#xxxxxx]` literals with the
   appropriate `dark:bg-background` / `dark:bg-card` / etc.
4. Verify each section in dark mode in the browser before committing — this is
   the part that needs careful manual checking.
5. Same exercise for borders (`dark:border-gray-700`, `dark:border-gray-800`,
   `dark:border-white/10` are all in use for what's probably one semantic
   "subtle border").

Estimated effort: ~1 hour, mostly verification time. Touches ~10 section files.
