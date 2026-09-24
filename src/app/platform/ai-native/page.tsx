import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  PageHero,
  ProseSection,
  FaqBlock,
  RelatedPages,
  CtaBand,
  Card,
  Section,
  Container,
  SectionHead,
  Eyebrow,
  Status,
} from "@/components/page-parts";
import { JsonLd, type StatusKind } from "@/components/primitives";
import { INTEGRATIONS } from "@/content/integrations";
import { pageMeta, softwareSchema } from "@/lib/seo";

/*
  The category page. Built to own "AI native factoring software" and its close variants, in the
  language the September 2026 launch coverage used (AI native operating system, specialty finance,
  Actionable Intelligence, model agnostic, a real double entry general ledger), so the phrase the
  press pages rank for today resolves to the site itself as the news cycle ages.
  Rule for this page: say what the platform does, never how it does it.
*/

export const metadata: Metadata = pageMeta({
  title: "AI native factoring software and ABL platform",
  description:
    "AI native factoring software for factors, asset based lenders and PO funders: briefings, evidence behind every answer, model agnostic AI, a real ledger.",
  path: "/platform/ai-native",
  intent: "category",
  target: "AI native factoring software",
});

const ACCOUNTING = INTEGRATIONS.filter((i) => i.category === "accounting");
const AVAILABLE_ACCOUNTING = ACCOUNTING.filter((i) => i.status === "available");

type Capability = {
  eyebrow: string;
  title: string;
  body: ReactNode;
  href: string;
  linkLabel: string;
  status: StatusKind;
  statusLabel?: string;
};

const CAPABILITIES: Capability[] = [
  {
    eyebrow: "The first screen",
    title: "Briefings rather than dashboards",
    body: "A dashboard waits for somebody to know what to look for. A FactorFox briefing is written for the person reading it, from what that person is responsible for, and answers the questions a factoring operation asks every morning before anyone has to ask them.",
    href: "/platform/briefings",
    linkLabel: "How briefings work",
    status: "available",
  },
  {
    eyebrow: "Actionable Intelligence",
    title: "Intelligence that carries its evidence",
    body: "Every conclusion opens onto the records, the policy that applied and the reason it was reached, then points the person responsible to the next step. An answer that cannot show its evidence is not shown as an answer.",
    href: "/platform/evidence",
    linkLabel: "Intelligence with evidence",
    status: "available",
  },
  {
    eyebrow: "Every day, not every month",
    title: "Continuous risk and funding monitoring",
    body: "Debtor deterioration, concentration, dilution, aging and funding activity are watched as the book moves, and a change that matters reaches the person who owns it with the evidence attached.",
    href: "/platform/risk-monitoring",
    linkLabel: "Risk monitoring",
    status: "available",
  },
  {
    eyebrow: "Your lender's terms",
    title: "Operating within your bank covenants",
    body: "Facility limits, concentration, eligibility, advance rates, reserves and reporting obligations are monitored against the covenants you record, with days to breach on the current trajectory. It supports your judgment and your lender relationship. It does not replace either.",
    href: "/platform/covenant-monitoring",
    linkLabel: "Covenant monitoring",
    status: "available",
  },
  {
    eyebrow: "Where decisions already happen",
    title: "Approvals inside Microsoft Teams",
    body: "Briefings, signal cards and approvals arrive in Teams. Releases, overrides and exceptions are approved or refused from the card, with four eyes and facility guards enforced exactly as they are in the browser.",
    href: "/integrations/microsoft-teams",
    linkLabel: "Microsoft Teams",
    status: "controlled",
  },
  {
    eyebrow: "A book you can walk back",
    title: "Self auditing A/R",
    body: "Every advance resolves to the invoice it funded, the client agreement term it was made under and the facility limit it had to respect. A receivables book that can walk that chain on demand audits itself, which is a different thing to hand a lender than a certificate rebuilt at month end.",
    href: "/platform/borrowing-base",
    linkLabel: "Borrowing base",
    status: "available",
  },
  {
    eyebrow: "Underwriting that does not stop at onboarding",
    title: "Continuous Underwriting",
    body: "A client is re underwritten when something material happens, not once a year. Each run is versioned, and the platform can stop money on its own authority while only a named person can release it.",
    href: "/platform/continuous-underwriting",
    linkLabel: "Continuous Underwriting",
    status: "available",
  },
  {
    eyebrow: "The financial foundation",
    title: "A real double entry general ledger",
    body: "FactorFox runs on a true double entry general ledger that has carried this business since 2002, so every figure the intelligence reports is a figure the books already agree with.",
    href: "/platform/accounting",
    linkLabel: "Accounting",
    status: "available",
  },
  {
    eyebrow: "Independent of any one model",
    title: "Model agnostic AI",
    body: "FactorFox is model agnostic by design. The model doing the work is a configuration decision rather than an architectural one, so when a better model ships the platform can adopt it, and when a provider has a bad afternoon your funding day does not.",
    href: "#model-agnostic",
    linkLabel: "Why model agnostic matters",
    status: "available",
  },
];

const FAQS = [
  {
    q: "What is AI native factoring software?",
    a: "Factoring software where the intelligence is part of the operating system rather than a model connected to it afterwards. It reads the same records the ledger reads, applies the policy that was in force at the time, and shows the evidence behind every conclusion. FactorFox describes itself this way, and we are not aware of another factoring platform that does.",
  },
  {
    q: "Is FactorFox only for invoice factoring?",
    a: "No. The same platform runs invoice factoring, asset based lending and purchase order finance, including borrowing base monitoring and covenant monitoring for asset based lenders, on one ledger and one record.",
  },
  {
    q: "Is model agnostic the same as saying you do not use AI models?",
    a: "The opposite. The platform is built to use them and to keep using better ones. Which model does the work is a configuration decision that can be revisited whenever a better option ships, rather than a dependency the product inherits.",
  },
  {
    q: "Does AI native mean the software makes decisions on its own?",
    a: "No, and the asymmetry is deliberate. The platform can stop money on its own authority. Only a named person can let money through. Four eyes applies by default, and every conclusion opens onto the evidence that produced it.",
  },
  {
    q: "How would I tell AI native from AI enabled from the outside?",
    a: "Ask the software to show the evidence behind a conclusion it reached on its own. Software with a model attached will show you the answer again, worded differently. Software with intelligence in the architecture will open the records, the policy that applied and the reason it was reached.",
  },
];

export default function AiNativePage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox AI native specialty finance platform",
          description:
            "AI native factoring software and asset based lending software: briefings rather than dashboards, intelligence that carries its evidence, continuous risk, funding and covenant monitoring, Continuous Underwriting, a real double entry general ledger and model agnostic AI.",
          path: "/platform/ai-native",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "AI native", path: "/platform/ai-native" },
        ]}
        eyebrow="AI native specialty finance platform"
        title="AI native factoring software that answers with its evidence."
        lede={
          <>
            <p>
              FactorFox is an AI native operating system for specialty finance: invoice factoring, asset
              based lending and purchase order finance on one platform, built from more than twenty years
              of running factoring operations and on a real double entry general ledger.
            </p>
            <p>
              It briefs each person on what they are responsible for, shows the evidence behind every
              answer, watches risk, funding and covenants continuously, and stays model agnostic, so it
              keeps getting better as the models do.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/ai-in-action", label: "Watch the 85 second briefing" }}
        aside={<TwoArchitectures />}
      />

      {/* ── the nine things the category phrase has to mean ───────────── */}
      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="What AI native means here"
            title="What the platform does, in nine parts."
            lede="Each of these is in the product today, and each opens onto its own page. Integration status is stated where it applies."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <article
                key={c.title}
                className="flex flex-col rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-6"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="u-label text-[var(--fg-subtle)]">{c.eyebrow}</p>
                  <Status kind={c.status} label={c.statusLabel} />
                </div>
                <h2 className="text-card-title mt-3">{c.title}</h2>
                <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-[var(--fg-muted)]">{c.body}</p>
                <Link
                  href={c.href}
                  className="mt-5 text-[14px] font-semibold text-[var(--accent)] underline underline-offset-4 hover:no-underline"
                >
                  {c.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── the distinction ─────────────────────────────────────────────── */}
      <ProseSection
        eyebrow="AI native versus AI enabled"
        title="Two kinds of AI factoring software that look the same from the outside."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The test</Eyebrow>
            <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              Ask any vendor to show you the evidence behind a conclusion the software reached on its own.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              Software with a model attached will show you the answer again, worded differently. Software
              with intelligence in the architecture will open the records, the policy that applied and the
              reason it was reached.
            </p>
          </Card>
        }
      >
        <p>
          <strong>AI enabled means a model is connected to the software.</strong> It is handed a question
          and some context. It can summarize, draft and answer. What it cannot do is see the ledger the way
          the ledger sees itself.
        </p>
        <p>
          <strong>AI native means the intelligence is part of the operating system.</strong> It works from
          the same records as the ledger, applies the policy that was in force at the time, and refuses to
          display a change it cannot prove. That is why a conclusion here opens onto its own evidence rather
          than onto a restatement of itself.
        </p>
        <p>
          Read how the other platforms in this category describe themselves and you will find AI powered,
          AI assisted, AI enabled and AI automation. Those are accurate descriptions of capability added to
          a system designed before the capability existed. We are not aware of another factoring platform
          that describes itself as AI native.
        </p>
      </ProseSection>

      {/* ── variants: ABL and PO ───────────────────────────────────────── */}
      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="One platform, three kinds of lending"
            title="AI asset based lending software and AI purchase order finance software, on the same record."
            lede="The briefings, the evidence and the monitoring are not a factoring feature. They run the same way across every product a specialty finance company offers."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <VariantCard
              title="Invoice factoring"
              body="Funding, verification, collections and client reporting, with every advance traceable to the invoice and the agreement term behind it."
              href="/solutions/factoring"
            />
            <VariantCard
              title="Asset based lending"
              body="Borrowing base availability computed from live collateral, and covenants watched as the book moves rather than at the monthly certificate."
              href="/solutions/asset-based-lending"
            />
            <VariantCard
              title="Purchase order finance"
              body="Purchase orders, supplier payments and the receivables they become, held on one record so exposure is visible from order to collection."
              href="/solutions/purchase-order-funding"
            />
          </div>
        </Container>
      </Section>

      {/* ── model agnostic ─────────────────────────────────────────────── */}
      <Section bordered>
        <Container>
          <div id="model-agnostic" className="scroll-mt-28">
            <SectionHead
              eyebrow="Model agnostic by design"
              title="We are not betting on which model wins. We are betting there will always be a better one."
            />
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Card>
              <Eyebrow>Then &middot; the cloud</Eyebrow>
              <h3 className="text-card-title mt-3">Software was written for an operating system.</h3>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                You did not buy factoring software. You bought factoring software for Windows, and inherited
                the upgrade cycle and the migration that came with it. The cloud made the application
                independent of the operating system underneath it.
              </p>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                FactorFox moved on that in 2002, as the first cloud platform built specifically for
                factoring companies.
              </p>
            </Card>
            <Card accent="accent">
              <Eyebrow tone="signal">Now &middot; AI native</Eyebrow>
              <h3 className="text-card-title mt-3">Software is being written for a model.</h3>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                A platform built around one model family inherits that family&rsquo;s roadmap, pricing,
                licensing terms, deprecations and outages. The dependency is invisible while the model is
                good and expensive the moment it is not.
              </p>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                FactorFox is model agnostic. Same architectural bet, made twice, twenty four years apart.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ── the proof ─────────────────────────────────────────────────── */}
      <Section tone="sunken" bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div>
              <Eyebrow tone="signal">What it looks like when it is real</Eyebrow>
              <h2 className="text-section-lg mt-4 max-w-[22ch]">
                Your client agreement, read into the terms you will be held to.
              </h2>
              <div className="mt-6 space-y-4 text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  Every client agreement already contains the operating rules for that relationship: the
                  advance rate, the fee schedule, the discount terms, the reserve and the concentration
                  limit. Typed in by hand, a transcription error becomes a funding error four months later.
                </p>
                <p>
                  <strong>
                    Give FactorFox the executed agreement and it reads the terms, including the fees and the
                    discount schedule, and sets the client up against them,
                  </strong>{" "}
                  with the clause each term came from attached to it.
                </p>
              </div>
              <Link href="/demo" className="btn-primary mt-8 inline-flex">
                Bring an agreement to the demonstration
              </Link>
            </div>
            <ContractCard />
          </div>
        </Container>
      </Section>

      {/* ── checkable ─────────────────────────────────────────────────── */}
      <ProseSection eyebrow="How to check any of this" title="Claims you can verify rather than accept.">
        <p>
          Start with the <InlineLink href="/integrations">integration register</InlineLink>, where every
          connection carries a status word and the vendors we do <em>not</em> connect to are named as well.
          On accounting, FactorFox holds{" "}
          <strong>
            {AVAILABLE_ACCOUNTING.length} accounting integrations,{" "}
            {AVAILABLE_ACCOUNTING.map((i) => i.name).join(" and ")}
          </strong>
          , both available, on the double entry core underneath.
        </p>
        <p>
          On security, we publish where we actually are rather than a badge. A SOC 2 program is in progress,
          and there is no certification claim anywhere on this site until a report exists. Our{" "}
          <InlineLink href="/platform/security">security position</InlineLink> says so plainly, and{" "}
          <InlineLink href="/compare/how-to-choose">how to choose</InlineLink> sets out the questions worth
          putting to any vendor, including us.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What operators ask about AI native factoring software" />

      <RelatedPages
        links={[
          { href: "/ai-in-action", label: "AI in action", note: "An 85 second briefing on a real book shape." },
          { href: "/platform", label: "The platform", note: "Every capability, on one record." },
          { href: "/news", label: "Launch coverage", note: "What ABF Journal, IFA Commercial Factor and PR.com reported." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "What sits behind every conclusion." },
          { href: "/platform/studio", label: "FactorFox Studio", note: "Reports from plain English, with every figure explained." },
          { href: "/compare/how-to-choose", label: "How to choose", note: "Including how to check a claim rather than accept it." },
        ]}
      />

      <CtaBand
        title="Bring your own book, and your own agreement."
        body="Send a slice of open receivables and a client agreement. We will show you what the first briefing says about your book, read the agreement into terms in front of you, and tell you plainly what we could not see and why."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "Tour the platform" }}
      />
    </>
  );
}

function VariantCard({ title, body, href }: { title: string; body: string; href: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-6 hover:border-[var(--accent)]"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <h3 className="text-card-title group-hover:text-[var(--accent)]">{title}</h3>
      <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">{body}</p>
    </Link>
  );
}

/* ------------------------------------------------------------- inline link */

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-[var(--accent)] underline underline-offset-4 hover:no-underline">
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ asides */

function TwoArchitectures() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <p className="u-label text-[var(--fg-subtle)]">Two architectures</p>
          <Status kind="info" label="Same demo, different build" />
        </div>

        <div className="divide-y divide-[var(--line)]">
          <div className="px-5 py-4">
            <p className="u-label text-[var(--fg-subtle)]">AI enabled</p>
            <p className="mt-1.5 text-[14.5px] font-semibold leading-[1.45]">
              A model is connected to the software.
            </p>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
              It is handed a question and some context. It can summarize, draft and answer.
            </p>
          </div>

          <div className="px-5 py-4">
            <p className="u-label text-[var(--signal)]">AI native</p>
            <p className="mt-1.5 text-[14.5px] font-semibold leading-[1.45]">
              The intelligence is part of the operating system.
            </p>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
              It works from the ledger, applies the policy in force, and refuses to show a change it cannot
              prove.
            </p>
          </div>

          <div className="bg-[var(--bg-sunken)] px-5 py-4">
            <p className="u-label text-[var(--fg-subtle)]">And underneath both</p>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
              The model is the engine. It should be replaceable without replacing the vehicle.
            </p>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[12px] leading-[1.5] text-[var(--fg-subtle)]">
        Both demonstrate well. The difference appears when somebody asks the software to prove a
        conclusion it reached on its own.
      </figcaption>
    </figure>
  );
}

function ContractCard() {
  const rows: [string, string][] = [
    ["Advance rate", "Clause 3.1"],
    ["Discount schedule", "Clause 4.2, schedule A"],
    ["Fee structure", "Clause 4.4"],
    ["Reserve percentage", "Clause 5.1"],
    ["Concentration limit", "Clause 7.3"],
    ["Aging and recourse window", "Clause 9.2"],
  ];
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <p className="u-label text-[var(--fg-subtle)]">Agreement read into terms</p>
          <Status kind="available" label="In the product" />
        </div>
        <ul className="divide-y divide-[var(--line)]">
          {rows.map(([term, clause]) => (
            <li key={term} className="flex items-center justify-between gap-4 px-5 py-3">
              <span className="text-[14.5px] font-medium">{term}</span>
              <span className="u-label whitespace-nowrap text-[var(--fg-subtle)]">{clause}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-4">
          <p className="text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
            Every configured term keeps a link to the sentence it came from, so a disagreement about what
            was agreed is settled by opening the clause rather than by memory.
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[12px] leading-[1.5] text-[var(--fg-subtle)]">
        Clause references are illustrative of the structure. Yours are read from your own agreement.
      </figcaption>
    </figure>
  );
}
