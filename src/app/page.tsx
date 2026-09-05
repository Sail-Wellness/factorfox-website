import Link from "next/link";
import type { Metadata } from "next";
import { Container, Section, SectionHead, Eyebrow, CTA, JsonLd, Status } from "@/components/primitives";
import { BriefingPanel } from "@/components/briefing-panel";
import { HeroDeck } from "@/components/hero-animation";
import { pageMeta, softwareSchema, faqSchema } from "@/lib/seo";
import { ROLES } from "@/content/roles";
import { INTEGRATIONS } from "@/content/integrations";

/* Read from the register at build time so the page cannot drift from what the
   platform actually supports. */
const AVAILABLE_ACCOUNTING = INTEGRATIONS.filter(
  (i) => i.category === "accounting" && i.status === "available",
);

/* The fast pass across the platform. One line each, every one a door. */
const CAPABILITIES: { title: string; line: string; href: string }[] = [
  { title: "Intelligence with evidence", line: "Every conclusion opens onto the records that produced it.", href: "/platform/evidence" },
  { title: "Briefings", line: "Six questions, answered for the job you actually do.", href: "/platform/briefings" },
  { title: "Continuous underwriting", line: "Re underwrite on every material event, not once a quarter.", href: "/platform/continuous-underwriting" },
  { title: "Risk monitoring", line: "Debtor behaviour, concentration and dilution, watched as they move.", href: "/platform/risk-monitoring" },
  { title: "Covenant monitoring", line: "Days to breach on the current trajectory, before it is a phone call.", href: "/platform/covenant-monitoring" },
  { title: "Borrowing base", line: "Availability, ineligibles and reserves, recomputed as the book moves.", href: "/platform/borrowing-base" },
  { title: "Document intelligence", line: "Agreements, invoices, remittances and near duplicates, read and verified.", href: "/platform/document-intelligence" },
  { title: "Accounting and treasury", line: "Cash application, fee accrual, payment files and release control.", href: "/platform/accounting" },
  { title: "Microsoft Teams", line: "Briefings, signals and approvals where your team already works.", href: "/integrations/microsoft-teams" },
];

export const metadata: Metadata = pageMeta({
  title: "Factoring software built on briefings, not dashboards",
  description:
    "FactorFox gives factors, asset based lenders and purchase order funders role aware briefings, evidence behind every conclusion and approvals in Teams.",
  path: "/",
  intent: "product",
  target: "factoring software",
});

const FAQS = [
  {
    q: "Is FactorFox software for factoring companies or a factoring company itself?",
    a: "FactorFox builds software for the institutions that fund. Our customers are factors, asset based lenders, purchase order funders and specialty finance companies. We do not compete with them for their clients.",
  },
  {
    q: "What is the difference between a briefing and a dashboard?",
    a: "A dashboard waits for you to go looking. It shows the same charts to everyone and leaves the interpretation to you. A briefing answers six fixed questions for your specific responsibility, states what changed since the last one, links each answer to the evidence behind it, and offers only the actions you have the permission to take.",
  },
  {
    q: "Does FactorFox automate funding decisions?",
    a: "The machine may recommend broadly and execute narrowly. It can stop money on its own. Only a named human can let money through. Every automated conclusion records the evidence it used, the policy version, its confidence and the approver.",
  },
  {
    q: "Can FactorFox monitor our bank covenants?",
    a: "It monitors facility limits, concentration, eligibility, advance rates, reserves, collateral performance and reporting obligations against the covenants you record, and reports days to breach on the current trajectory. It does not replace your lender, your counsel or your judgement. It gives you the time to use all three.",
  },
  {
    q: "Is FactorFox tied to one AI model?",
    a: "No. FactorFox is model agnostic by design. The intelligence is part of the architecture rather than a model bolted to the side of it, so a model can be evaluated, routed around during an outage or replaced with a better one without a migration project. Every conclusion records which model produced it, on which policy version, with the evidence attached.",
  },
  {
    q: "Does FactorFox have real double entry accounting?",
    a: "Yes. Fundings, fee accruals, reserve movements and releases, chargebacks, repurchases and cash application all post as balanced double entry against the client, the schedule and the obligor. The client statement is generated from that ledger, and audit packets assemble from the entries and the documents behind them. Client receivables also synchronise from QuickBooks Online and Xero.",
  },
  {
    q: "Which markets does FactorFox operate in?",
    a: "Customers run FactorFox across North America, Latin America, Europe, Australia and South Africa. Country packs carry the local credit sources, payment rails and invoicing requirements rather than translating a United States product.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          softwareSchema({
            name: "FactorFox",
            description:
              "Intelligence and operating platform for factoring, asset based lending, purchase order funding and reverse factoring.",
            path: "/",
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* ============================================ HERO */}
      <section className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--bg)] pb-20 pt-14 sm:pt-20">
        <span className="u-glow-edges pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container width="wide" className="relative">
          <div className="mx-auto max-w-[52rem] text-center">
            <Eyebrow tone="signal">
              Factoring &middot; Asset based lending &middot; Purchase order funding &middot; Reverse factoring
            </Eyebrow>

            <h1 className="text-hero mt-6">
              Your business does not need another dashboard. It needs a{" "}
              <span className="text-[var(--accent)]">briefing</span>.
            </h1>

            <p className="text-body-lg mx-auto mt-7 max-w-[44rem] text-balance text-[var(--fg-muted)] sm:text-[19px]">
              Legacy systems record what already happened, then leave you to find it. FactorFox tells each
              person what changed, what it means, what proves it and what to do about it.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <CTA href="/demo" size="lg">Request a FactorFox AI demonstration</CTA>
              <CTA href="/platform/briefings" variant="secondary" size="lg">
                See how briefings work
              </CTA>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-[1000px]">
            <HeroDeck />
          </div>

          <dl className="mx-auto mt-16 grid max-w-[1000px] grid-cols-2 gap-x-6 gap-y-8 border-t border-[var(--line)] pt-10 sm:grid-cols-4">
            {[
              ["2002", "Building for this industry since"],
              ["6", "Questions every briefing answers"],
              ["5", "Continents where customers run"],
              ["0", "Conclusions without evidence"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="u-tabular font-display text-[2rem] font-extrabold leading-none tracking-[-0.03em] text-[var(--accent)]">
                  {n}
                </dt>
                <dd className="u-eyebrow mt-2.5">{l}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ============================================ THE STRIP */}
      {/* The fast pass. Somebody who will not read a paragraph gets the whole
          product here in about eight seconds, and every tile is a door. */}
      <Section tone="sunken" bordered>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow tone="signal">The platform</Eyebrow>
              <h2 className="text-section-lg mt-4 max-w-[20ch]">Everything, in one pass.</h2>
            </div>
            <p className="max-w-[38ch] text-[15px] leading-[1.6] text-[var(--fg-muted)]">
              Nine capabilities, one ledger underneath them. Open any of them for the detail.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group bg-[var(--bg-raised)] p-6 transition-colors hover:bg-[var(--bg)]"
              >
                <h3 className="flex items-center gap-2 text-[16px] leading-[1.3]">
                  <span>{c.title}</span>
                  <span
                    aria-hidden="true"
                    className="translate-x-0 text-[var(--signal)] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    &rsaquo;
                  </span>
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--fg-muted)]">{c.line}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================ MODEL AGNOSTIC */}
      <Section bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div>
              <Eyebrow tone="signal">The architecture</Eyebrow>
              <h2 className="text-section-lg mt-4 max-w-[22ch]">Model agnostic, and it has to be.</h2>
              <div className="mt-6 space-y-4 text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  Almost anyone can connect a model to software now, so asking whether a platform has AI no
                  longer separates anything. Two questions do. Where does the intelligence sit relative to
                  the ledger, and what happens to you when the model underneath it changes.
                </p>
                <p>
                  When the cloud arrived, the shift that mattered was that an application stopped depending
                  on the operating system underneath it. This is that shift one layer up. The model is an
                  engine, and it should be replaceable without replacing the vehicle.
                </p>
                <p className="text-[var(--fg)]">
                  <strong>
                    We are not betting on which model wins. We are betting there will always be a better
                    one.
                  </strong>
                </p>
              </div>
              <Link href="/platform/ai-native" className="btn-secondary mt-8 inline-flex">
                Read the architecture
              </Link>
            </div>

            <div
              className="rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-7 sm:p-8 lg:sticky lg:top-28"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Eyebrow>The difference, on an ordinary day</Eyebrow>
              <dl className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["A model has an outage", "The platform routes, and records that it did."],
                  ["A better model ships", "It is evaluated and adopted. Not a migration project."],
                  ["An examiner asks why", "The conclusion opens onto the evidence that produced it."],
                ].map(([t, d]) => (
                  <div key={t} className="py-3.5 first:pt-0 last:pb-0">
                    <dt className="text-[15px] font-semibold leading-[1.4]">{t}</dt>
                    <dd className="mt-1 text-[14px] leading-[1.55] text-[var(--fg-muted)]">{d}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-[var(--line)] pt-5 text-[13.5px] leading-[1.55] text-[var(--fg-subtle)]">
                Building software for this industry since 2002, on a true double entry core.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================ DOCUMENTS AS CONFIGURATION */}
      <Section tone="sunken" bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div>
              <Eyebrow tone="signal">Documents as configuration</Eyebrow>
              <h2 className="text-section-lg mt-4 max-w-[23ch]">
                Your agreements already contain the setup. So why is anyone still typing it in?
              </h2>
              <div className="mt-6 space-y-4 text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  Every client agreement carries the advance rate, the fee schedule, the discount terms, the
                  reserve, the concentration limit and the ageing window. Then somebody types all of it in by
                  hand, where a transcription error becomes a funding error four months later.
                </p>
                <p className="text-[var(--fg)]">
                  <strong>
                    In a live demonstration we handed FactorFox an executed client factoring agreement and it
                    did the setup from the document, including the fees and the discount terms.
                  </strong>{" "}
                  The terms themselves, configured, with the clause each one came from still attached.
                </p>
                <p>
                  One level up it is worth more. Your facility agreement carries the covenants you operate
                  under, your client agreements carry the ones you pass down, and read as configuration the
                  two connect. A lender prices what it cannot see, and a book that can walk that chain on
                  demand is a different thing to put in front of one.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/platform/covenant-monitoring" className="btn-secondary inline-flex">
                  Covenant monitoring
                </Link>
                <Link href="/platform/document-intelligence" className="btn-secondary inline-flex">
                  Document intelligence
                </Link>
              </div>
            </div>

            <CovenantChain />
          </div>
        </Container>
      </Section>

      {/* ============================================ DOUBLE ENTRY CORE */}
      <Section bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <Eyebrow tone="signal">The core underneath it</Eyebrow>
              <h2 className="text-section-lg mt-4 max-w-[20ch]">
                A real double entry general ledger, not a transaction table.
              </h2>
              <div className="mt-6 space-y-4 text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  Intelligence is only worth what the record underneath it is worth. Fundings, fee accruals,
                  reserve movements and releases, chargebacks, repurchases and cash application all post as
                  balanced double entry against the client, the schedule and the obligor. Nothing is a column
                  on a row somebody can quietly overwrite.
                </p>
                <p>
                  That is why the client statement agrees with your ledger and why an audit packet assembles
                  from the entries themselves. It is also the part nobody demonstrates, because it takes
                  years rather than a quarter. Client receivables synchronise from{" "}
                  {AVAILABLE_ACCOUNTING.map((i) => i.name).join(" and ")}, both available today.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/platform/accounting" className="btn-secondary inline-flex">
                  How the ledger works
                </Link>
                <Link href="/integrations" className="btn-secondary inline-flex">
                  Integrations register
                </Link>
              </div>
            </div>

            <div className="grid gap-px self-start overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {[
                ["Advance and reserve", "A funding splits into what the client receives now and what is held back, both sides recorded."],
                ["Fee accrual", "Discount and factoring fees accrue on the facility terms, on the days they are earned."],
                ["Reserve release", "Recorded with its own authority, never as an adjustment with no actor beside it."],
                ["The audit packet", "Assembled from the entries and the documents behind them, rather than from a report that has to tie."],
              ].map(([t, d]) => (
                <div key={t} className="bg-[var(--bg-raised)] p-6">
                  <h3 className="text-[15.5px] leading-[1.35]">{t}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[var(--fg-muted)]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================ THE BRIEFING */}
      <Section tone="sunken" bordered>
        <Container width="wide">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <Eyebrow tone="signal">The briefing</Eyebrow>
              <h2 className="text-section-lg mt-4 max-w-[20ch]">
                Six questions, answered for your job, every morning.
              </h2>
              <p className="mt-6 text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
                The same six every time, so the shape is familiar and only the content changes. Each answer
                carries the evidence that produced it, and only the actions your permissions allow. Scope
                follows responsibility rather than job title, so somebody who owns forty clients is briefed
                on the forty, not on the three hundred they are allowed to view.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {ROLES.map((r) => (
                  <li
                    key={r.slug}
                    className="rounded-full border border-[var(--line)] bg-[var(--bg-raised)] px-3 py-1.5 text-[13px] leading-none text-[var(--fg-muted)]"
                  >
                    {r.title}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/platform/briefings" className="btn-secondary inline-flex">
                  How the briefing is assembled
                </Link>
              </div>
            </div>
            <BriefingPanel />
          </div>
        </Container>
      </Section>

      {/* ============================================ MIGRATION */}
      <Section bordered>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <Eyebrow tone="signal">Switching</Eyebrow>
              <h2 className="text-section-lg mt-4 max-w-[26ch]">
                Everyone tells you migration is the hard part. They are right, and it is the part we do
                first.
              </h2>
            </div>
            <div className="space-y-4 self-center">
              <p className="text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
                A conversion is not a data copy. We tell you what moves cleanly, what needs a decision from
                you, and what your current system never stored in the first place, and we reconcile against
                your existing book before you are asked to trust anything.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/migrate/factorsoft" className="btn-secondary inline-flex">
                  Moving off FactorSoft
                </Link>
                <Link href="/migrate" className="btn-secondary inline-flex">
                  Coming from something else
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>


      {/* ============================================ FAQ */}
      <Section tone="sunken" bordered>
        <Container width="narrow">
          <SectionHead eyebrow="Straight answers" title="Questions we get in the first ten minutes" />
          <div className="mt-10 border-t border-[var(--line-strong)]">
            {FAQS.map((f) => (
              <details key={f.q} className="group border-b border-[var(--line)] py-5">
                <summary className="cursor-pointer list-none text-[1.0625rem] font-semibold leading-[1.4] marker:hidden">
                  <span className="mr-3 font-mono text-[0.75rem] text-[var(--signal)] group-open:opacity-40">+</span>
                  {f.q}
                </summary>
                <p className="mt-3 pl-7 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================ CTA */}
      <Section tone="deep">
        <Container width="narrow">
          <div className="text-center">
            <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] text-[var(--color-ink-50)]">
              Bring your own book. We will brief you on it.
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-[1.0625rem] leading-[1.65] text-[var(--color-ink-300)]">
              A demonstration on generic sample data tells you nothing. Show us a slice of your portfolio
              and we will show you what the first briefing says about it, with the evidence attached.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <CTA href="/demo">Request a FactorFox AI demonstration</CTA>
              <CTA
                href="/platform"
                variant="secondary"
                className="border-[var(--color-ink-700)] text-[var(--color-ink-50)] hover:border-[var(--color-ink-400)] hover:bg-[var(--color-ink-900)]"
              >
                Tour the platform
              </CTA>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/* ============================================ covenant chain */
/* One funded invoice, walked back to both agreements. The point of the visual is
   the direction of travel: a number in the ledger resolves to a clause, and a
   clause resolves to every number it governs. */

function CovenantChain() {
  const links: { label: string; source: string; line: string }[] = [
    {
      label: "Your facility agreement",
      source: "Credit agreement, section 6.2",
      line: "Advance rate not to exceed 85 percent of eligible receivables",
    },
    {
      label: "Your client agreement",
      source: "Factoring agreement, clause 3.1",
      line: "Advance rate 80 percent, reserve 20 percent, single debtor cap 25 percent",
    },
    {
      label: "The advance you made",
      source: "Invoice 44192, funded 14 August",
      line: "80 percent advanced, inside both limits, and it says which ones",
    },
  ];

  return (
    <figure className="m-0 lg:sticky lg:top-28">
      <div
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <p className="u-label text-[var(--fg-subtle)]">The covenant chain</p>
          <Status kind="info" label="One advance" />
        </div>

        <ol className="divide-y divide-[var(--line)]">
          {links.map((l, i) => (
            <li key={l.label} className="flex gap-4 px-5 py-4">
              <span
                aria-hidden="true"
                className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--bg-sunken)] text-[11px] font-bold text-[var(--fg-subtle)]"
              >
                {i + 1}
              </span>
              <div>
                <p className="text-[14.5px] font-semibold leading-[1.4]">{l.label}</p>
                <p className="u-label mt-1 text-[var(--fg-subtle)]">{l.source}</p>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--fg-muted)]">{l.line}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="space-y-3 border-t border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-4">
          <p className="text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
            A book that can walk that chain on demand is a book that audits itself, which is a different
            thing to present to a lender than a certificate somebody rebuilt at month end.
          </p>
          <p className="flex flex-wrap items-center gap-2 text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
            <Status kind="available" label="In the product" />
            <span>Client agreements read into terms, and covenants you record monitored continuously.</span>
          </p>
          <p className="flex flex-wrap items-center gap-2 text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
            <Status kind="planned" label="In development" />
            <span>Reading the facility agreement into those covenants the same way.</span>
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[52ch] text-[12px] leading-[1.5] text-[var(--fg-subtle)]">
        Clause references are illustrative of the structure. Yours are read from your own documents.
      </figcaption>
    </figure>
  );
}
