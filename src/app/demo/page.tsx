import type { Metadata } from "next";
import { Container, Section, Eyebrow, JsonLd } from "@/components/primitives";
import { FaqBlock, RelatedPages, StepList } from "@/components/page-parts";
import { DemoForm } from "@/components/demo-form";
import { ProductShot } from "@/components/product-shot";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Request a FactorFox demonstration",
  description:
    "See FactorFox run against a slice of your own portfolio: briefings, evidence, underwriting, covenants and Teams approvals, on your book not a sample.",
  path: "/demo",
  intent: "conversion",
});

export default function DemoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "FactorFox", path: "/" },
          { name: "Request a demonstration", path: "/demo" },
        ])}
      />

      <Section className="!pb-10">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <div>
              <Eyebrow tone="signal">Demonstration</Eyebrow>
              <h1 className="mt-4 text-[clamp(2rem,4.4vw,3rem)]">
                Bring your own book. We will brief you on it.
              </h1>
              <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  A demonstration on generic sample data proves nothing. Give us a slice of your portfolio,
                  even an export of open receivables, and we will show you what the first briefing says
                  about it and open the evidence behind each line.
                </p>
                <p>
                  You will speak to people who have run a factoring operation, not to a sales engineer
                  reading a script. Expect direct answers, including about the things we have not built.
                </p>
              </div>

              <dl className="mt-10 space-y-0">
                {[
                  ["What we will ask for", "A slice of open receivables. Nothing that identifies a debtor is required to make the point."],
                  ["How long it takes", "Forty five minutes. Longer if you want to get into gates, covenants or the audit trail."],
                  ["What you get after", "The briefing we generated against your slice, and a written note on what we could not see and why."],
                  ["If you are migrating", "We will talk through your current data model before anyone talks about a contract."],
                ].map(([t, d]) => (
                  <div key={t} className="grid gap-1 border-t border-[var(--line)] py-4 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-8">
                    <dt className="u-eyebrow pt-1">{t}</dt>
                    <dd className="m-0 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">{d}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <DemoForm />

              <div className="mt-8 border border-[var(--line)] bg-[var(--bg-sunken)] p-6">
                <Eyebrow>Or put it straight in the calendar</Eyebrow>
                <p className="mt-3 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
                  If you would rather skip the form, open the scheduler and take a slot that suits you.
                </p>
                <a
                  href={SITE.bookingUrl}
                  rel="noopener"
                  className="mt-4 inline-block rounded-lg border border-[var(--line-strong)] px-4 py-2.5 text-[0.875rem] font-semibold hover:border-[var(--fg)]"
                >
                  Open the scheduler
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <ProductShot
              name="demo-canvas"
              format="svg"
              width={1228}
              height={550}
              alt="FactorFox workspace with document, risk, workflow and collections surfaces in the sidebar, a pending invoices list, and an empty intake area waiting for an invoice to be dropped in for extraction."
              caption="The workspace as it stands before a book is loaded. What fills it on the call is your export, not a sample portfolio we prepared earlier."
            />
          </div>
        </Container>
      </Section>

      <StepList
        eyebrow="What the session looks like"
        title="Forty five minutes, on your data, with the awkward questions welcome."
        lede="We would rather spend the time on your book than on a slide about ours. Nothing below requires a signature or a shortlist place."
        steps={[
          {
            label: "Before",
            title: "You send a slice of open receivables",
            body: "An export is enough. Client, debtor, invoice number, amount, date, status, and whatever aging you already produce. If your compliance team wants debtor names masked, mask them. The point survives.",
          },
          {
            label: "Minute 0",
            title: "We generate the first briefing against it",
            body: "You watch the six questions answer themselves on your own portfolio. Where the data does not support an answer, the platform says so instead of filling the gap, and that behaviour is worth seeing as much as the answers are.",
          },
          {
            label: "Minute 15",
            title: "You open the evidence behind whatever looks wrong",
            body: "Pick the line you least believe. We open what produced it. This is the part of the demonstration that tends to decide things.",
          },
          {
            label: "Minute 30",
            title: "We show you the controls, including the refusals",
            body: "Four eyes on a release, a bank change held for human review, a gate that refuses to assert something it cannot verify. If your bank or your auditor will ask, ask it here first.",
          },
          {
            label: "After",
            title: "You get the briefing and an honest list of what we could not see",
            body: "In writing. Including the sources that were not connected and what each one would have added. If a capability you need is planned rather than available, that list is where you find out.",
          },
        ]}
      />

      <FaqBlock
        title="Before you fill anything in"
        items={[
          {
            q: "Do we have to send real data?",
            a: "No. Masked debtor names and rounded amounts still produce a real briefing, because the movement and the relationships are what the platform reads. Some operators send a full export under an agreement instead. Either works.",
          },
          {
            q: "Who will we actually be talking to?",
            a: "People who have run a factoring operation. You will not be handed to a sales engineer reading from a deck, and you will not be told that something is available when it is in controlled release.",
          },
          {
            q: "We are on FactorSoft. Is this a waste of time?",
            a: "It is the opposite. Bring your data model questions. We publish a working guide to what a FactorSoft conversion involves, and the first call usually spends more time on your extract than on our screens.",
          },
          {
            q: "We are not ready to switch systems. Should we still book?",
            a: "Yes, if you want a straight read on what a modern platform does differently. Nobody is put on a nurture sequence. If the answer is not now, we will say so and leave you alone until it is.",
          },
          {
            q: "What if we need something you have not built?",
            a: "You will be told during the call rather than after a contract. Every integration on this site carries a status, and planned means planned. That is the same standard we apply on the call.",
          },
        ]}
      />

      <RelatedPages
        title="Look around first"
        links={[
          { href: "/platform/briefings", label: "Briefings", note: "The six questions and how scope is decided." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "What sits behind every conclusion." },
          { href: "/integrations/microsoft-teams", label: "Microsoft Teams", note: "Approvals and briefings where you already work." },
          { href: "/migrate/factorsoft", label: "Moving off FactorSoft", note: "The data model, in detail, before anyone talks contract." },
          { href: "/platform/pricing", label: "Pricing", note: "What this class of software actually costs." },
          { href: "/platform/security", label: "Security and controls", note: "The answers your vendor review will want." },
        ]}
      />
    </>
  );
}