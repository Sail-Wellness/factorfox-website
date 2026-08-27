# factorfox.com

The FactorFox website. Next.js on the app router, TypeScript, Tailwind, MDX for articles.
Every page is rendered on the server, so what a crawler receives is what a person receives.

---

## Why this replaced what was there

The previous site was a client rendered single page application on GitHub Pages. Three
things followed from that, and they are the reason this repository exists:

1. Only the homepage was reachable. `/features`, `/about` and `/contact-sales` returned
   GitHub's own 404 page to any direct request, which means to every crawler and to
   every shared link.
2. The sitemap advertised seven URLs and six of them returned 404.
3. GitHub Pages cannot issue a redirect, so sixteen indexed legacy URLs, including the
   two legal PDFs the Apple App Store listing points at, had nowhere to go.

None of those can happen again by accident. `npm run verify` fails the build if they do.

---

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run verify       # types, routes, links, redirects, metadata
npm run build        # runs the route check first, then builds
npm start
```

## The guard rails

`npm run verify` chains three checks, and `npm run build` runs the first of them:

| Check | What it refuses to let through |
|---|---|
| `verify:routes` | A page in the register with no route on disk, a route missing from the register, a broken internal link, or a redirect pointing at nothing |
| `verify:meta` | A title over 48 characters, a description outside 140 to 158, or a duplicate of either |
| `typecheck` | The usual |

The page register is `src/lib/pages.ts`. It carries the path, the search intent and the
target query for every indexable page, and `src/app/sitemap.ts` is generated from it. A
URL cannot reach the sitemap unless a route exists for it.

---

## Publishing, without an engineer

**Articles.** Create `src/content/articles/<slug>.mdx`, fill in the frontmatter, open a
pull request. The index, the sitemap, the RSS feed and the related links are all derived
from that directory. The preview deployment is the review step and the merge is the
publish step.

```yaml
---
title: A title under 48 characters
description: One sentence, 140 to 158 characters, written for the search result.
published: 2026-08-27
modified: 2026-08-27
audience: Credit officers
cluster: Continuous underwriting
related: ["/platform/continuous-underwriting"]
legacyPath: /blog/old-url        # only when recovering an old URL
---
```

**Integration statuses.** `src/content/integrations.ts`. It is the single source of truth
for the directory and for every integration page. The status vocabulary is fixed:
available, controlled release, contract required, planned, ecosystem. The `NOT_CLAIMED`
list at the bottom is the set of names that must never appear on the site.

**Page metadata.** In the `pageMeta` call at the top of each page, then run
`npm run verify:meta`.

**Redirects.** `LEGACY_REDIRECTS` in `next.config.ts`. Every entry is a 301 and every
destination is checked by `verify:routes`.

Read `CONTENT-RULES.md` before writing anything. It is binding, and the claims section in
particular is not a style preference.

---

## Structure

```
src/app/            routes, one folder per URL
src/components/     layout primitives and page parts, no page specific code
src/content/        integrations register, roles, briefing contract, articles
src/lib/            page register, metadata and schema helpers, site config
public/product/     approved product screens, light and dark
scripts/            the verification scripts the build depends on
```

Fonts are vendored in `src/app/fonts` and served from our own origin. No request leaves a
visitor's browser for a third party, which keeps the privacy answer simple in a vendor
review and takes a render blocking round trip out of largest contentful paint.

---

## Environment

Copy `.env.example`. Everything in it is optional and the site runs without any of it.

- `NEXT_PUBLIC_GA_ID` unset means analytics stays completely dark, including the consent
  banner. Nothing is collected before a visitor says yes, and Consent Mode defaults are
  set to denied before any tag can run.
- The demonstration form writes every submission to the structured log before it attempts
  any delivery, so a lead is never lost because a webhook was down. Configure at least one
  of `LEAD_WEBHOOK_URL`, `LEAD_NOTIFY_TEAMS_WEBHOOK`, or `LEAD_MAIL_ENDPOINT` with
  `LEAD_NOTIFY_EMAIL`.

---

## Hosting

This site needs a host that can render on the server and issue a 301. GitHub Pages can do
neither, which is why the old site had the problems listed at the top of this file.

`staticwebapp.config.json` and `.github/workflows/deploy-azure.yml` are set up for Azure
Static Web Apps on the Standard plan, which keeps the marketing site in the same tenant
the platform deploys to. Vercel needs no configuration at all if that is the decision
instead.

The Azure workflow is `workflow_dispatch` only until the DNS cutover. Turn on the `push`
trigger in the same commit that moves the domain, not before.
