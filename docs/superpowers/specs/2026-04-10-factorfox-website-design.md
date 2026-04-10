# FactorFox Website — Design Spec

**Date:** 2026-04-10
**Status:** Draft

## Context

FactorFox is an AI-powered financial intelligence platform for factoring operations, primarily serving the transportation industry. The current marketing site at factorfox.com needs a full rebuild using a modern React stack. Figma designs are already complete and will be provided section-by-section during implementation.

**Goal:** Rebuild factorfox.com as a modern, performant React SPA with light/dark mode, matching the existing Figma designs.

---

## Tech Stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** TailwindCSS (latest stable) + shadcn/ui components
- **Animations:** Framer Motion (subtle scroll-triggered reveals)
- **Routing:** React Router
- **SEO:** react-helmet-async for meta tags; vite-plugin-prerender optional later
- **Font:** Inter (Google Fonts), 400 weight base, 18px base size, 29.25px line-height

---

## Project Structure

```
factorfox-website/
  src/
    main.tsx                    → App entry point
    App.tsx                     → Router setup, theme provider
    styles/
      index.css                 → Tailwind directives, Inter font import, CSS variables
    components/
      Navbar.tsx                → Sticky nav: logo left, links center, Login + Request Demo + ThemeToggle right
      Footer.tsx                → Links, social icons, copyright
      ThemeToggle.tsx            → Light/dark mode toggle button
      ui/                       → shadcn components (Button, Card, etc.)
    sections/                   → All 14 home page sections as individual components
      Hero.tsx
      FeatureCards.tsx
      ... (remaining sections named as Figma designs are shared)
    pages/
      Home.tsx                  → Assembles the 14 section components
      Features.tsx
      About.tsx
      ContactSales.tsx
    hooks/
      useTheme.ts               → Dark mode state + localStorage persistence
    lib/
      utils.ts                  → cn() helper (classname merge via clsx + tailwind-merge)
    assets/
      images/                   → Screenshots, product images
      logos/                    → Client logos, FactorFox logo
  public/
    favicon, og-image, etc.
```

---

## Routing

| Route | Page | Content |
|-------|------|---------|
| `/` | `Home.tsx` | 14 sections assembled in order |
| `/features` | `Features.tsx` | Detailed feature breakdowns |
| `/about` | `About.tsx` | Company/team/story |
| `/contact-sales` | `ContactSales.tsx` | Contact info (no form currently) |

- Navigation between pages via React Router `<Link>`
- "Login" → external link to Nimbus platform
- "Request Demo" → external link (URL TBD)

---

## Design Foundation

### Typography Scale (Inter)

All values are starting points — will be refined as Figma sections are shared.

| Token | Size | Weight | Use |
|-------|------|--------|-----|
| `display` | 56-64px | 800 | Hero heading |
| `h1` | 40-48px | 700 | Section headings |
| `h2` | 28-32px | 600 | Sub-headings |
| `h3` | 20-24px | 600 | Card titles |
| `body` | 18px | 400 | Body text (base) |
| `body-sm` | 14-16px | 400 | Card descriptions, captions |
| `label` | 12-13px | 600 | Tags, uppercase tracking |

### Color Palette

Approximate values — will be refined against Figma as sections are built.

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| Background | `#FFFFFF` | `~#0B1120` |
| Surface (cards) | White + shadow | Dark + subtle border/glow |
| Text primary | `~#0F172A` | `#FFFFFF` |
| Text secondary | `~#64748B` | `~#94A3B8` |
| Primary (CTA) | `~#2563EB` | Same blue |
| Accent tag | Red/brown | Blue |
| Card border | Light gray | Subtle lighter border |

### Spacing

Tailwind's default 4px-based scale. No custom overrides unless Figma demands specific values.

### Dark Mode

- **Approach:** Manual toggle in the navbar
- **Mechanism:** CSS custom properties on `:root` (light) and `.dark` (dark)
- **Tailwind config:** `darkMode: 'class'`
- **Persistence:** `useTheme` hook stores choice in localStorage
- **Default:** Light mode

### Component Primitives

- **Button** — Two variants: `primary` (blue filled, white text, pill shape) and `outline` (border, transparent bg, pill shape). Sizes: `md`, `lg`.
- **Card** — Light: white bg + subtle shadow. Dark: dark surface + border. Rounded-xl.
- **SectionWrapper** — Consistent max-width, horizontal padding, vertical spacing. Every section wraps in this.
- **AnimatedSection** — Framer Motion wrapper. Fade-up on scroll into view. Configurable delay for staggered children.

---

## Pages

### Home Page (~14 sections)

Sections will be built one at a time as Figma designs are shared. From the hero screenshot, the first two visible sections are:

1. **Hero** — Left: uppercase label tag, bold display heading ("JUST DEPLOY CAPITAL"), subtitle paragraph, two CTAs (Request Demo filled, View Platform outlined). Right: product screenshot with tabbed interface.
2. **Feature Cards** — 4 cards in a row: Accelerated Funding, Document Intelligence, Fraud & Risk Signals, Unified Operations. Each with icon, title, short description.
3. Sections 3-14 — TBD, will be designed as Figma is shared.

### Features Page
Detailed breakdown of platform capabilities. Content TBD from Figma.

### About Page
Company story, team, mission. Content TBD from Figma.

### Contact Sales Page
Contact information, no form currently. Content TBD from Figma.

---

## Animations

- **Style:** Subtle and polished — not flashy
- **Library:** Framer Motion
- **Default entrance:** Fade-up with slight Y translation on scroll into viewport
- **Stagger:** Child elements within a section animate sequentially with configurable delay
- **Performance:** `will-change` hints, `IntersectionObserver`-based triggering, animations only fire once

---

## SEO

- `react-helmet-async` for per-page `<title>`, `<meta description>`, Open Graph tags
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Image alt text on all product screenshots and logos
- Optional: `vite-plugin-prerender` for static pre-rendering of 4 pages (can add later)

---

## Interactive Elements

- Interactive product demos/showcases embedded in sections (details TBD from Figma)
- Product screenshots throughout
- No backend API integration
- No forms currently

---

## Build Workflow

**Phase 1 — Scaffold:**
Set up Vite project, install dependencies, configure Tailwind + dark mode + Inter font, create file structure, build Navbar + Footer + ThemeToggle, set up React Router. Result: working app with nav, empty pages, theme toggle functional.

**Phase 2 — Section-by-section (Home):**
User shares Figma section → build matching component. One at a time across all 14. Refine design tokens as each section reveals new patterns.

**Phase 3 — Inner pages:**
Build Features, About, Contact Sales pages. Reuse components and patterns from homepage sections.

**Phase 4 — Polish:**
Animations, responsive breakpoints, SEO meta tags, performance (image optimization, lazy loading), final dark mode audit across all sections.

---

## Flexibility Notes

- All design tokens (colors, typography, spacing) are intentionally approximate and will be refined as Figma sections are shared
- Component primitives are minimal — new variants added only when needed
- Section components are fully independent — can be reordered, removed, or added without affecting others
- No premature abstractions — patterns extracted only when repeated across 3+ sections

---

## Verification

1. `npm run dev` — site loads, all 4 routes work
2. Theme toggle switches between light and dark mode, choice persists on reload
3. Navbar is sticky, all links work (internal routes + external Login/Demo)
4. Each section matches its Figma design in both light and dark mode
5. Sections animate on scroll
6. Responsive: looks correct on mobile, tablet, desktop
7. Lighthouse: performance score >90, accessibility score >90
