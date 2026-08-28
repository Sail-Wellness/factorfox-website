import type { Metadata } from "next";
import { SITE } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Search intent this page is built for. Recorded here so it stays visible in review. */
  intent?: "product" | "category" | "integration" | "migration" | "comparison" | "informational" | "commercial" | "brand" | "conversion" | "legal";
  /** Primary query the page is written to answer. */
  target?: string;
  noIndex?: boolean;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Every page builds its metadata here so titles, canonicals and social cards
 * cannot drift apart. Titles are written for the search result, not the page.
 */
/** Canonical URLs match how the static host serves them: every path a directory. */
export function canonicalPath(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

/** Social cards are pre generated into /public/og by scripts/build-og.mjs. */
export function ogPath(path: string) {
  const slug = path === "/" ? "home" : path.replace(/^\//, "").replace(/\/$/, "").replace(/\//g, "-");
  return `/og/${slug}.png`;
}

function ogEyebrow(intent?: PageMetaInput["intent"], target?: string) {
  if (target) return target;
  switch (intent) {
    case "integration":
      return "Integration";
    case "migration":
      return "Migration";
    case "comparison":
      return "Comparison";
    case "conversion":
      return "Demonstration";
    case "legal":
      return "Legal";
    default:
      return "FactorFox";
  }
}

export function pageMeta({
  title,
  description,
  path,
  intent,
  target,
  noIndex = false,
  ogImage,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetaInput): Metadata {
  const url = new URL(canonicalPath(path), SITE.url).toString();
  // Generated per page at build time from the title below, so a card cannot
  // drift away from the page it belongs to. See scripts/build-og.mjs.
  const image = ogImage ?? new URL(ogPath(path), SITE.url).toString();
  void ogEyebrow;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE.name,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(canonicalPath(path), SITE.url).toString();
}

/* ------------------------------------------------------------------
   Structured data. Only ever describes content that is visible on the
   page that emits it.
   ------------------------------------------------------------------ */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    foundingDate: SITE.founded,
    description: SITE.tagline,
    logo: { "@type": "ImageObject", url: absoluteUrl("/brand/factorfox-logo.svg") },
    sameAs: [...SITE.profiles],
    email: SITE.contactEmail,
    knowsAbout: [
      "Invoice factoring",
      "Asset based lending",
      "Purchase order funding",
      "Reverse factoring",
      "Transportation factoring",
      "Borrowing base monitoring",
      "Covenant monitoring",
      "Commercial finance underwriting",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "en",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function softwareSchema(opts: { name: string; description: string; path: string; category?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    applicationCategory: opts.category ?? "BusinessApplication",
    applicationSubCategory: "Specialty finance operating platform",
    operatingSystem: "Web browser, Microsoft Teams",
    url: absoluteUrl(opts.path),
    description: opts.description,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: absoluteUrl(t.path),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  published: string;
  modified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: absoluteUrl(opts.path),
    datePublished: opts.published,
    dateModified: opts.modified ?? opts.published,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(opts.path) },
  };
}

export function definedTermSetSchema(terms: { term: string; definition: string; slug: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "FactorFox specialty finance glossary",
    url: absoluteUrl("/resources/glossary"),
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: absoluteUrl(`/resources/glossary#${t.slug}`),
    })),
  };
}
