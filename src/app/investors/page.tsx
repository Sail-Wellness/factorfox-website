import type { Metadata } from "next";
import { PageHero } from "@/components/page-parts";
import { Card, CTA, Container, Eyebrow, JsonLd, Section, SectionHead, Status } from "@/components/primitives";
import { ProductShot } from "@/components/product-shot";
import { InquiryLink, InvestorForm } from "@/components/investor-form";
import { INQUIRY_CATEGORIES, INVESTOR_LEGAL_NOTICE } from "@/lib/investors";
import { ANNOUNCEMENTS, STORIES } from "@/lib/news";
import { absoluteUrl, pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

/*
  Investor relations and strategic partnerships, per the website engineering
  directive of October 17, 2026.

  This page informs and takes inquiries. It is not an offering: no share price,
  valuation, returns, projections or available investments appear here, and the
  categories below are areas of discussion only. Counsel approves the legal
  notice and every public claim on this page before it is deployed, and again
  before any of them changes.

  Product status follows Commercial Truth. Microsoft Teams is in certification,
  and reading policies and facility agreements into rules and covenants is in
  development; both are labeled. The Capital Network is described as developing,
  in the directive's own words, until its production status is verified.
*/

export const metadata: Metadata = pageMeta({
  title: "Investor Relations | Strategic Partnerships",
  description:
    "Explore FactorFox investor relations, strategic partnerships, AI native specialty finance technology, and institutional capital opportunities.",
  path: "/investors",
  intent: "brand",
  target: "FactorFox investor relations",
});

const HIGHLIGHTS: { figure: string; body: string }[] = [
  { figure: "20+ Years", body: "Serving factoring and specialty finance." },
  { figure: "107 Customers", body: "Onboarded into the FactorFox AI SANDBOX as of October 2026." },
  { figure: "AI Native", body: "An entirely new operating system built for specialty finance." },
  { figure: "Microsoft Marketplace", body: "Commercial marketplace presence." },
];

type Capability = { title: string; body: string; status?: { kind: "controlled" | "planned"; label: string } };

const CAPABILITIES: Capability[] = [
  {
    title: "Intelligent document ingestion",
    body: "Invoices, schedules and supporting documents are read on intake and matched to the record they belong to, so operators review exceptions rather than keying data.",
  },
  {
    title: "Conversational operating intelligence through Fox",
    body: "Fox answers questions about the portfolio in plain language and shows the evidence behind each answer. Fox recommends; authorized people approve.",
  },
  {
    title: "Policy and covenant interpretation",
    body: "Reading credit policies and facility agreements into the rules and covenants the platform monitors.",
    status: { kind: "planned", label: "In development" },
  },
  {
    title: "Operational and funding controls",
    body: "The platform can hold, flag and refuse on its own. It never advances money on its own: releases require named, authorized people.",
  },
  {
    title: "Receivables management",
    body: "Clients, debtors, aging, verification and collections in one record, with concentration measured across the whole book.",
  },
  {
    title: "Invoice processing",
    body: "Invoices move from submission through verification and eligibility to funding with each step recorded.",
  },
  {
    title: "Funding schedules",
    body: "Schedules are assembled, checked against eligibility and policy, and approved before any funds are released.",
  },
  {
    title: "Treasury and ledger integration",
    body: "Funding, collections and fees post to a double entry general ledger, with integrations to the accounting systems clients already use.",
  },
  {
    title: "AI powered Reporting Studio",
    body: "Reports are described in plain language and built against the live record, so a new view does not wait on a developer.",
  },
  {
    title: "Microsoft Teams integration",
    body: "Briefings, alerts and approvals inside Microsoft Teams, where many operators already work.",
    status: { kind: "controlled", label: "In certification" },
  },
  {
    title: "Progressive Web App access",
    body: "Installable on desktop and mobile devices from the browser, with no separate app store download.",
  },
  {
    title: "White labeled client experiences",
    body: "A client portal under the factor's own brand, so clients see their funder rather than their funder's software vendor.",
  },
];

type NewsItem = { headline: string; date: string; display: string; summary: string; url: string; source: string; linkLabel: string };

function newsItems(): NewsItem[] {
  const own: NewsItem[] = ANNOUNCEMENTS.map((a) => ({
    headline: a.headline,
    date: a.date,
    display: a.display,
    summary: a.summary,
    url: a.url,
    source: SITE.name,
    linkLabel: a.linkLabel,
  }));
  const coverage: NewsItem[] = STORIES.map((s) => ({
    headline: s.headline,
    date: s.date,
    display: s.display,
    summary: s.summary,
    url: s.url,
    source: s.outlet,
    linkLabel: `Read on ${s.outlet}`,
  }));
  return [...own, ...coverage].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

function schema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl("/investors")}#page`,
    url: absoluteUrl("/investors"),
    name: "FactorFox Investor Relations and Strategic Partnerships",
    about: { "@id": `${SITE.url}/#organization` },
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}

export default function InvestorsPage() {
  const news = newsItems();

  return (
    <>
      <JsonLd data={schema()} />

      <PageHero
        trail={[
          { name: "Company", path: "/company" },
          { name: "Investor relations", path: "/investors" },
        ]}
        eyebrow="FactorFox | Investor Relations"
        title="Investing in the Future of Specialty Finance."
        lede={
          <p>
            More than two decades of industry experience. An entirely new AI native operating system. A connected
            financial ecosystem designed to transform how specialty finance companies operate, access capital, and
            manage risk.
          </p>
        }
        primaryCta={{ href: "#inquiry", label: "Submit an Investor Inquiry" }}
        secondaryCta={{ href: "/platform", label: "Explore FactorFox AI" }}
      />

      {/* ------------------------------------------------ company overview */}
      <Section>
        <Container>
          <SectionHead eyebrow="Company overview" title="An Established Company. An Entirely New Operating System." />
          <div className="mt-8 max-w-[46rem] space-y-4 text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
            <p>
              FactorFox has served factoring and specialty finance companies for more than two decades, supporting
              financial operations across multiple international markets.
            </p>
            <p>
              Today, FactorFox is introducing FactorFox AI, an entirely new AI native operating system designed
              around intelligent document ingestion, operational controls, receivables management, funding,
              treasury, and financial reporting.
            </p>
            <p>The company is actively transitioning its existing customer base to the new platform.</p>
            <p>
              As of October 2026, 107 existing customers have been onboarded into the FactorFox AI SANDBOX
              environment, with customer training underway and initial customers operating in production.
            </p>
            <p>
              FactorFox AI is also listed on{" "}
              <a href={SITE.marketplaceUrl} rel="noopener" className="font-semibold text-[var(--accent)] underline underline-offset-4">
                Microsoft Marketplace
              </a>
              .
            </p>
          </div>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <li key={h.figure} className="bg-[var(--bg-raised)] p-6 sm:p-7">
                <p className="text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--fg)]">{h.figure}</p>
                <p className="mt-3 text-[15px] leading-[1.6] text-[var(--fg-muted)]">{h.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ---------------------------------------------- technology platform */}
      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Technology platform"
            title="Technology Built Around Financial Operations."
            lede="FactorFox AI brings the work of a specialty finance company into one operating system and one financial record. Capabilities still in certification or development are labeled as such."
          />
          <div className="mt-11 grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {CAPABILITIES.map((c) => (
                <li key={c.title} className="border-t border-[var(--line-strong)] pt-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-[16px] font-semibold leading-[1.35] text-[var(--fg)]">{c.title}</h3>
                    {c.status ? <Status kind={c.status.kind} label={c.status.label} /> : null}
                  </div>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--fg-muted)]">{c.body}</p>
                </li>
              ))}
            </ul>
            <div className="lg:sticky lg:top-28">
              <ProductShot
                name="intelligence"
                width={2000}
                height={1168}
                alt="FactorFox Intelligence screen showing ranked risk signals, among them a concentration breaching its threshold and a payment behavior shift on one debtor, beside a concentration panel measuring each debtor's share of the portfolio against the policy threshold."
                caption="The Intelligence screen in FactorFox AI. Signals are ranked with the movement written out, and the concentration panel measures each debtor's share of the book against the policy threshold."
              />
              <div className="mt-8">
                <CTA href="/platform" variant="secondary">
                  Explore the FactorFox AI platform
                </CTA>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------- capital network */}
      <Section bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <SectionHead eyebrow="Capital Network" title="Connecting Capital With Opportunity." />
              <div className="mt-8 space-y-4 text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  FactorFox is developing a connected environment designed to help factoring companies evaluate
                  participation financing opportunities and access additional liquidity.
                </p>
                <p>
                  The Capital Network is intended to support controlled information sharing, transaction
                  transparency, documented participation agreements, and ongoing financial reporting.
                </p>
                <p>
                  The objective is to connect factors with available capital to factors seeking additional funding
                  capacity, while preserving appropriate confidentiality, financial controls, and contractual
                  protections.
                </p>
              </div>
              <div className="mt-9">
                <InquiryLink category="strategic_capital" className="btn-primary">
                  Explore Strategic Capital Partnerships
                </InquiryLink>
              </div>
            </div>
            <Card accent="signal" className="self-start">
              <Eyebrow tone="signal">Technology, not financing</Eyebrow>
              <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                FactorFox provides the software. Any financing is arranged between separate participating
                entities under their own agreements, subject to their own eligibility requirements, due
                diligence, and definitive documentation.
              </p>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                FactorFox does not offer investments, returns, or yields through this page, and no liquidity is
                guaranteed.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------ strategic relationships */}
      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Strategic relationships"
            title="Explore a Strategic Relationship."
            lede="These are areas of potential discussion, not currently available investment offerings."
          />
          <ul className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INQUIRY_CATEGORIES.filter((c) => c.card).map((c) => (
              <li key={c.id} className="flex">
                <div
                  className="flex w-full flex-col rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-6 sm:p-7"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <h3 className="text-card-title">{c.label}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-[var(--fg-muted)]">{c.description}</p>
                  <InquiryLink
                    category={c.id}
                    className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    Start an inquiry<span className="sr-only"> about {c.label}</span>
                    <span aria-hidden="true">&rsaquo;</span>
                  </InquiryLink>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ---------------------------------------------------- inquiry form */}
      <Section id="inquiry" bordered className="scroll-mt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <SectionHead eyebrow="Inquiries" title="Submit an Investor Inquiry." />
              <div className="mt-6 space-y-4 text-[16px] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  Tell us who you are and what you would like to discuss. Each inquiry is reviewed by the
                  appropriate team.
                </p>
                <p>
                  Submitting this form is an inquiry only. It is not an investment application, an offer, or a
                  commitment by either party.
                </p>
                <p>
                  Looking for the product rather than a strategic relationship?{" "}
                  <a href="/demo/" className="font-semibold text-[var(--accent)] underline underline-offset-4">
                    Request a demonstration
                  </a>
                  .
                </p>
              </div>
            </div>
            <InvestorForm />
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ news */}
      <Section tone="sunken" bordered>
        <Container>
          <SectionHead eyebrow="News" title="Company News and Announcements." />
          <ol className="mt-10 grid gap-4">
            {news.map((n) => (
              <li key={n.url}>
                <article
                  className="rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-6 sm:p-7"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <p className="u-label text-[var(--fg-subtle)]">
                    {n.source} &middot; <time dateTime={n.date}>{n.display}</time>
                  </p>
                  <h3 className="text-card-title mt-3">{n.headline}</h3>
                  <p className="mt-3 max-w-[74ch] text-[15px] leading-[1.65] text-[var(--fg-muted)]">{n.summary}</p>
                  <a
                    href={n.url}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 inline-block text-[14px] font-semibold text-[var(--accent)] underline underline-offset-4 hover:no-underline"
                  >
                    {n.linkLabel}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </article>
              </li>
            ))}
          </ol>
          <p className="mt-8">
            <CTA href="/news" variant="quiet">
              All news and press coverage
            </CTA>
          </p>
        </Container>
      </Section>

      {/* ----------------------------------------------------- legal notice */}
      <section className="border-t border-[var(--line)] bg-[var(--bg)] py-12 md:py-14">
        <Container>
          <div className="max-w-[60rem]">
            <h2 className="u-eyebrow">Legal notice</h2>
            <p className="mt-4 text-[14px] leading-[1.7] text-[var(--fg-muted)]">{INVESTOR_LEGAL_NOTICE}</p>
            <p className="mt-3 text-[14px] leading-[1.7] text-[var(--fg-muted)]">
              {SITE.legalName} is a privately held company. Its securities are not publicly traded.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
