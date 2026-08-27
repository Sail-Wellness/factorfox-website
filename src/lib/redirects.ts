/**
 * The legacy URL map.
 *
 * factorfox.com has run three generations: WordPress through mid 2025
 * (trailing slashes, /blog/), Wix into early 2026 (/post/), and a React single
 * page application on GitHub Pages. The current site inherited none of those
 * URLs and until recently every one of them returned a hard 404.
 *
 * Sixteen are still in Google's index and five carry inbound links, including
 * the Apple App Store listing for the FactorFox Client App.
 *
 * HOW THESE ARE SERVED
 *
 * GitHub Pages cannot issue a 301. It serves static files and nothing else.
 * So `scripts/postbuild.mjs` writes a small HTML document at each legacy path
 * carrying a zero delay meta refresh, a rel=canonical pointing at the
 * destination, and a visible link for anyone with scripting or refresh
 * disabled. This is the same technique the official jekyll-redirect-from
 * plugin generates, and it is what every redirect on GitHub Pages actually is.
 *
 * It is weaker than a real 301 and we should be honest about that. The moment
 * the site moves to a host that can answer with a status code, these become
 * genuine 301s by moving this same list back into next.config.ts. Nothing else
 * has to change, which is why the list lives here rather than in the config.
 */

export type Redirect = { source: string; destination: string };

export const LEGACY_REDIRECTS: Redirect[] = [
  // Apple App Store legal links. Highest priority, compliance not search.
  // These two are served as real PDF files rather than redirects, because a
  // meta refresh at a .pdf path would not satisfy Apple. See postbuild.
  { source: "/privacy-policy", destination: "/legal/privacy" },
  { source: "/terms-of-service", destination: "/legal/terms" },
  { source: "/terms-of-use", destination: "/legal/terms" },
  { source: "/refund", destination: "/legal/terms" },
  { source: "/privacy", destination: "/legal/privacy" },
  { source: "/terms", destination: "/legal/terms" },

  // Industry pages. Rebuilt as real pages, then pointed one to one, because
  // sending an article to a hub is read as a soft 404 and loses the ranking.
  { source: "/factoring-services", destination: "/solutions/factoring" },
  { source: "/factoring-services/medical", destination: "/solutions/healthcare" },
  { source: "/factoring-services/manufacturing", destination: "/solutions/manufacturing" },
  { source: "/factoring-services/construction", destination: "/solutions/construction" },
  { source: "/factoring-services/transportation", destination: "/solutions/transportation" },
  { source: "/factoring-services/staffing", destination: "/solutions/staffing" },

  // Blog, WordPress generation.
  { source: "/blog", destination: "/resources" },
  { source: "/blog/what-is-ocr", destination: "/resources/ocr-invoice-scanning" },
  { source: "/blog/invoice-factoring-requirements", destination: "/resources/invoice-factoring-requirements" },
  { source: "/blog/how-to-choose-a-factoring-company", destination: "/resources/how-to-choose-a-factoring-company" },
  { source: "/blog/the-top-factoring-industry-trends-of-2021", destination: "/resources" },
  { source: "/blog/we-are-thrilled-to-be-winners", destination: "/company" },

  // Blog, Wix generation.
  { source: "/post/ai-in-specialty-finance", destination: "/resources/ai-in-specialty-finance" },
  { source: "/post/factoring-workflows-to-automate", destination: "/resources/factoring-workflows-to-automate" },

  // Company and conversion.
  { source: "/about-us", destination: "/company" },
  { source: "/about", destination: "/company" },
  { source: "/contact-us", destination: "/demo" },
  { source: "/contact-sales", destination: "/demo" },
  { source: "/registration", destination: "/demo" },
  { source: "/ifa2025", destination: "/demo" },
  { source: "/pricing", destination: "/platform/pricing" },

  // Routes the current site serves today, which must not break.
  { source: "/features", destination: "/platform" },

  // Infrastructure.
  { source: "/sitemap", destination: "/sitemap.xml" },
  { source: "/feed", destination: "/resources/feed.xml" },
];
