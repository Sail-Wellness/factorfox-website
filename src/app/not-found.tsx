import Link from "next/link";
import type { Metadata } from "next";
import { Container, Section, Eyebrow, CTA } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not here. The most useful places to go instead are listed below.",
  robots: { index: false, follow: true },
};

/**
 * The site this replaced answered every unknown URL with GitHub's own unbranded
 * error page, including the URLs its own sitemap advertised. This page is the
 * opposite of that: it says what happened, it is ours, and it sends people
 * somewhere useful instead of into a dead end.
 */
export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="max-w-[46rem]">
          <Eyebrow tone="signal">404</Eyebrow>
          <h1 className="mt-4 text-[clamp(2rem,4.4vw,3rem)]">That page is not here.</h1>
          <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)]">
            The address may be out of date, or we may have moved something and missed a redirect.
            If you followed a link from somewhere on this site, tell us and we will fix it, because
            a broken link on our own site is our problem rather than yours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA href="/platform">Tour the platform</CTA>
            <CTA href="/demo" variant="secondary">
              Request a demonstration
            </CTA>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["/platform/briefings", "Briefings", "The six questions, answered for your responsibility."],
            ["/solutions/factoring", "Factoring", "For the factoring company, not for the business selling the invoice."],
            ["/solutions/asset-based-lending", "Asset based lending", "Borrowing base, collateral and covenant reporting."],
            ["/integrations", "Integrations", "Organised by business purpose, with a status on every row."],
            ["/migrate", "Migrating to FactorFox", "What moves, what breaks, and what your old system never stored."],
            ["/resources/glossary", "Operator glossary", "The vocabulary, as the funding side actually uses it."],
          ].map(([href, label, note]) => (
            <Link
              key={href}
              href={href}
              className="group bg-[var(--bg-raised)] p-6 transition-colors hover:bg-[var(--bg-sunken)]"
            >
              <h2 className="text-[1rem] group-hover:text-[var(--accent)]">{label}</h2>
              <p className="mt-2 text-[0.8125rem] leading-[1.55] text-[var(--fg-muted)]">{note}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
