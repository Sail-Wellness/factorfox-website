import type { MetadataRoute } from "next";
import { INDEXABLE } from "@/lib/pages";
import { ARTICLES } from "@/content/articles";
import { PARTNERS } from "@/content/partners";
import { SITE } from "@/lib/site";
import { canonicalPath } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Generated from the page register and the article index, never hand written.
 * A URL cannot appear here unless a route exists for it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = INDEXABLE.map((p) => ({
    url: new URL(canonicalPath(p.path), SITE.url).toString(),
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const articles = ARTICLES.map((a) => ({
    url: new URL(canonicalPath(`/resources/${a.slug}`), SITE.url).toString(),
    lastModified: new Date(a.modified ?? a.published),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const partners = PARTNERS.map((p) => ({
    url: new URL(canonicalPath(`/partners/${p.slug}`), SITE.url).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...articles, ...partners];
}
