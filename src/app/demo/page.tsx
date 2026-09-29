import type { Metadata } from "next";
import { Container, Section, Eyebrow, JsonLd } from "@/components/primitives";
import { FaqBlock, RelatedPages, StepList } from "@/components/page-parts";
import { DemoForm } from "@/components/demo-form";
import { ProductShot } from "@/components/product-shot";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "See your business on FactorFox AI before you buy",
  description:
    "Send your FMS reports, policies, client agreements and banking documents. See your own business running on FactorFox AI, reconciled, before you commit.",
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
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <Eyebrow tone="signal">Demonstration</Eyebrow>
              <h1 className="mt-4 text-[clamp(1.9rem,3.2vw,2.5rem)] leading-[1.12]">
                See your business running on FactorFox AI before you buy it.
              </h1>
              <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  Send us your existing FMS reports, your operating policies, your client agreements and your
                  banking documents. FactorFox AI prepares your financial environment from them, interprets
                  your operating requirements and organizes your institutional controls.
                </p>
                <p>
                  Then you review your own business inside the platform: your clients, your debtors and your
                  balances, reconciled to your own report totals, with every configured term traced to the
                  clause it came from. You make the purchasing decision after that, not before.
                </p>
                <p className="text-[var(--fg)]">
                  <strong>No blind migration. No generic demonstration. No commitment based on promises.</strong>
                </p>
              </div>

              <dl className="mt-10 space-y-0">
                {[
                  ["Your FMS reports", "The standard reports from your current system, as far back as they go and all as of one cutoff date: invoice level aging, purchases, payments, reserves, fees, and chargebacks and adjustments, plus client and debtor lists. Excel or CSV preferred, PDF workable."],
                  ["Your documents", "Operating policies and procedures, executed client agreements, and your bank facility agreement."],
                  ["What you see", "Your own book in FactorFox AI, reconciled to your source totals, configured from your own documents, and briefed on the way your team will be briefed every morning."],
                  ["While it is prepared", "Your data sits in its own isolated environment, and nothing is sent to your clients, your debtors or your staff."],
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

              <div className="mt-4 border border-[var(--line)] bg-[var(--bg-sunken)] p-6">
                <Eyebrow>Or just call</Eyebrow>
                <p className="mt-3 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
                  A person answers, and it is somebody who can talk about how your book is actually run
                  rather than book a call to arrange a call.
                </p>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="mt-4 inline-block text-[1.35rem] font-semibold tracking-[-0.01em] text-[var(--accent)] hover:underline underline-offset-4"
                >
                  {SITE.phone}
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
              alt="FactorFox workspace with document, risk, workflow and collections surfaces in the sidebar, a pending invoices list, and an empty intake area waiting for documents to be dropped in."
              caption="The workspace as it stands before a book is loaded. What fills it for your review is your own business, not a sample portfolio we prepared earlier."
            />
          </div>
        </Container>
      </Section>

      <StepList
        eyebrow="How it works"
        title="Your reports and documents in. Your own business, running, out."
        lede="The migration is not something that happens after you sign. It is how you evaluate the platform."
        steps={[
          {
            label: "01",
            title: "You send what you already have",
            body: "The standard reports from your current FMS, your policies and procedures, your executed client agreements and your bank facility agreement. No data entry, and no new forms to fill in.",
          },
          {
            label: "02",
            title: "FactorFox AI rebuilds your book",
            body: "Clients, debtors, open invoices, reserves and history are reconstructed from your reports and reconciled against their own totals. Anything that does not tie is named, not smoothed over.",
          },
          {
            label: "03",
            title: "Your operating rules are set up from your documents",
            body: "Client agreements become terms, fees and gates. Policies become the approvals and controls your team works under. Your facility covenants are recorded and tracked against the live book. Every setting links back to the document it came from.",
          },
          {
            label: "04",
            title: "You review your own business inside the platform",
            body: "Your morning briefing on your own book, the evidence behind every line, and the controls, including the ones that refuse. Pick the account that always gives you trouble and watch what it does with it.",
          },
          {
            label: "05",
            title: "You decide with the evidence in front of you",
            body: "In writing, you also get what could not be reconciled or configured and why. If you go ahead, the work is not repeated: the reconstruction you reviewed is the starting point for your migration.",
          },
        ]}
      />

      <FaqBlock
        title="Before you fill anything in"
        items={[
          {
            q: "Do we have to send everything at once?",
            a: "No. The invoice level aging and one executed client agreement are enough to start, and the rest can follow. The more of your operation you send, the more of it you see running before you decide.",
          },
          {
            q: "Is our data safe while you prepare it?",
            a: "Your data sits in its own isolated environment, and nothing is sent to your clients, your debtors or your staff while it is prepared. If your compliance team wants an agreement in place first, we sign it before anything is sent.",
          },
          {
            q: "Who will we actually be talking to?",
            a: "People who have run a factoring operation. You will not be handed to a sales engineer reading from a deck, and you will not be told that something is available when it is in controlled release.",
          },
          {
            q: "We are on FactorSoft. Is this a waste of time?",
            a: "It is the opposite. Send the standard reports FactorSoft already produces and you will see your own book running on FactorFox AI. Our working guide to a FactorSoft conversion sets out what moves and what needs a decision.",
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