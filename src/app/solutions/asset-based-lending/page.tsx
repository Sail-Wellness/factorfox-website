import type { Metadata } from "next";
import {
  PageHero,
  StepList,
  ProseSection,
  ProblemSolution,
  FeatureGrid,
  FaqBlock,
  RelatedPages,
  CtaBand,
  DataTable,
  Section,
  Container,
  SectionHead,
  Card,
  Eyebrow,
  Status,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Asset based lending software for ABL teams",
  description:
    "Run borrowing base, ineligibles, advance rates by collateral class, field exam findings and covenant reporting to the bank behind your asset based book.",
  path: "/solutions/asset-based-lending",
  intent: "category",
  target: "asset based lending software",
});

const FAQS = [
  {
    q: "How often is the borrowing base recomputed?",
    a: "On every material event, not on a monthly cycle. A borrowing base certificate becomes a moment you sign rather than a moment you calculate, because the position has been maintained continuously since the last one. Each run is versioned immutably, so the availability as it stood on any past date can be opened rather than reconstructed from a backup and an argument.",
  },
  {
    q: "Our ineligible rules are unusual. Can they be expressed without a developer?",
    a: "The rule families are configuration: aged receivables, cross age or taint, concentration caps applied per debtor or per class, contras and offsets, foreign and government obligors, credit balances, disputed items, related party sales, unbilled or pre billed amounts and retainage. Each exclusion carries the rule that produced it, so a client arguing about their availability is shown the reason rather than a total. Where a rule needs an input the platform does not hold, it says awaiting a live source and names the source instead of quietly passing.",
  },
  {
    q: "Does this handle inventory and equipment, or only receivables?",
    a: "Collateral classes are held separately with their own advance rates, their own eligibility treatment and their own appraisal or valuation reference. What differs by class is the confidence you can place in the number and how quickly it goes stale, so the platform reports confidence and coverage separately rather than blending them into a single figure that implies more certainty than exists. Receivables move daily. An appraisal does not, and the surface says how old it is.",
  },
  {
    q: "What does the platform do with a field exam?",
    a: "It holds the findings as conditions rather than as a filed report. An exam that recommends a lower advance rate on one class, adds an ineligible category or sets a follow up date becomes something the borrowing base and the monitoring surface honour, with the exam cited as the evidence. The next exam then has a defensible record of what was done about the last one, which is usually the question the examiner opens with.",
  },
  {
    q: "We are the borrower on our own facility as well as a lender. Does the platform handle both directions?",
    a: "Yes, and they are labelled as different categories of obligation everywhere they appear. The tests your borrower owes you are one surface. The covenants you owe your own bank on a rediscount line or a corporate facility are another, and a covenant recorded from your credit agreement is never blended with a modelled FactorFox standard into one compliance score. Breaching a standard is a management problem. Breaching a contract may be an event of default.",
  },
  {
    q: "Is asset based finance the same thing as asset based lending?",
    a: "In South Africa and parts of the Commonwealth the market says asset based finance, and in North America it says asset based lending. The mechanics are the same argument about collateral, eligibility and advance rate, though the security instruments and registries differ by jurisdiction. FactorFox serves both, and the terminology on screen follows the market you operate in rather than forcing a North American vocabulary onto a South African book.",
  },
];

export default function AssetBasedLendingPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox asset based lending",
          description:
            "Asset based lending and asset based finance platform covering borrowing base computation, ineligibles, advance rates by collateral class, collateral monitoring, field exam findings, availability and covenant reporting.",
          path: "/solutions/asset-based-lending",
        })}
      />

      <PageHero
        trail={[
          { name: "Solutions", path: "/solutions" },
          { name: "Asset based lending", path: "/solutions/asset-based-lending" },
        ]}
        eyebrow="Asset based lending"
        title="Availability is the only number your borrower reads. It should be the one you can defend."
        lede={
          <>
            <p>
              This is written for the lender: the asset based lending group, the independent finance
              company, the factor who has grown into revolving collateral facilities. Not for a company
              looking to borrow against its own assets.
            </p>
            <p>
              In North America the market calls it asset based lending. In South Africa, where we have
              customers, it is asset based finance. The argument is identical, and FactorFox serves both
              with the vocabulary each market actually uses.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/platform/borrowing-base", label: "See the borrowing base in detail" }}
        aside={<AvailabilityScene />}
      />

      <StepList
        eyebrow="The monitoring cycle"
        title="What actually happens between one certificate and the next."
        lede="An ABL facility is not underwritten once. It is underwritten continuously and formalised periodically, and most systems only model the formalising."
        steps={[
          {
            label: "Structuring",
            title: "Collateral classes, advance rates and the eligibility regime are recorded as rules",
            body: "Each class carries its own advance rate, its own eligibility treatment, its own sublimit and its own valuation reference. The rules are recorded with the clause of the loan agreement that imposes them, so the surface enforcing a cap can quote the sentence that created it.",
          },
          {
            label: "Reporting",
            title: "Collateral reports arrive and are held to an evidence standard",
            body: "Aging schedules, inventory reports and payable listings arrive by email, portal or SFTP, are extracted under a strict schema and are revalidated in ordinary code before touching the base. A report that does not conform is rejected rather than repaired, because a repaired collateral report is a fabricated one.",
          },
          {
            label: "Computation",
            title: "Ineligibles are applied in an order somebody can argue with",
            body: "Aging, cross age, concentration caps, contras, credit balances, disputes, foreign and government obligors, related party sales and retainage each produce a reasoned exclusion rather than a single netted deduction. The borrower sees why, which turns most availability disputes into a short conversation.",
          },
          {
            label: "Availability",
            title: "Availability, reserves and the position against the line, continuously",
            body: "Availability compression is reported with days to zero on the current trajectory, so a borrower heading for an overadvance is a conversation this week rather than a decision made under pressure next week. Every figure opens onto the records that produced it.",
          },
          {
            label: "Examination",
            title: "Field exam findings become live conditions, not a filed report",
            body: "A lowered advance rate, a new ineligible category, a required follow up or an unresolved reconciliation is honoured by the base and cited to the exam. At the next exam you have a record of what was done about the last one, which is the question examiners tend to open with.",
          },
          {
            label: "Reporting up",
            title: "What you owe your own lender is computed from the same book",
            body: "Facility utilisation, concentration, dilution, eligibility movement and the reporting obligations in your own credit agreement are computed continuously and assembled into sealed packets, so signing a compliance certificate is a review rather than an assembly exercise.",
          },
        ]}
      />

      <ProseSection
        eyebrow="Collateral confidence"
        title="The base tells you what you may lend. It does not tell you how stale the number is."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Confidence and coverage, reported separately</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Continuous underwriting reports how confident the conclusion is and how much of the required
              evidence was actually present, as two different numbers. Blending them produces a single
              reassuring score that hides which half is weak.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              On an ABL book that distinction is the whole game. High confidence on nearly complete
              evidence is a facility. The same confidence on half the evidence is a facility nobody has
              looked at since March.
            </p>
          </Card>
        }
      >
        <p>
          Receivable collateral revalues itself every day through payment behaviour. Inventory revalues on
          a count. Equipment revalues on an appraisal that may be two years old and was performed by
          somebody who has since retired. Treating those three as equally current, because they all appear
          as numbers in the same column, is how a base that looks fine becomes a workout that was
          predictable.
        </p>
        <p>
          <strong>Every class carries the age of its own evidence.</strong> The last aging, the last count,
          the last appraisal, the last exam, each with its date visible next to the value it supports. An
          input the platform does not hold is named as missing rather than reported as zero, because a
          missing input and a zero balance are different facts and only one of them is good news.
        </p>
        <p>
          <strong>Behaviour is watched between reports.</strong> Payment velocity by obligor, dilution
          movement against the borrower&rsquo;s own history, concentration change including exposure under one
          obligor name across several borrowers, credit limit utilisation and missed promises. These move
          long before a certificate does, and they are the reason a monthly reporting cadence is not the
          same thing as monthly monitoring.
        </p>
        <p>
          <strong>Nothing is asserted that cannot be shown.</strong> Risk observations are append only at
          the database level, and where there is no prior observation the platform offers to take a first
          one rather than inventing a yesterday to compare against.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Ineligibles"
            title="The categories that decide the number, and the reason attached to each one."
            lede="A borrower who disputes availability is almost never disputing the arithmetic. They are disputing a rule nobody showed them."
          />
          <div className="mt-11">
            <DataTable
              caption="Ineligible categories and how they are applied"
              head={["Category", "What it removes", "Why the reason matters"]}
              rows={[
                [
                  "Aging",
                  "Receivables past the eligibility period in the agreement",
                  "The threshold is quoted from the clause, so a borderline invoice is settled by the document rather than by custom",
                ],
                [
                  "Cross age",
                  "The whole obligor balance once a stated proportion of it has aged",
                  "The most misunderstood exclusion in ABL. Showing the trigger obligor stops the argument in one screen",
                ],
                [
                  "Concentration",
                  "The excess above a cap on any single obligor or class",
                  "Computed under one obligor name across every borrower selling to it, which is where the exposure actually sits",
                ],
                [
                  "Contras and offsets",
                  "Amounts owed back to an obligor that is also a supplier",
                  "Netting is a legal position, not a courtesy. The offset is named with the payable that creates it",
                ],
                [
                  "Credit balances",
                  "Negative aging buckets that would otherwise inflate the pool",
                  "Silent inclusion of credit balances is a common source of an availability figure nobody can reproduce",
                ],
                [
                  "Disputes and deductions",
                  "Items flagged as disputed, short paid or under deduction",
                  "Ties directly into dilution measurement, so the same event is not counted twice or missed entirely",
                ],
                [
                  "Foreign and government obligors",
                  "Obligors excluded or capped by the agreement absent credit support",
                  "Support instruments are recorded so a covered foreign obligor is not treated as an uncovered one",
                ],
                [
                  "Retainage and unbilled",
                  "Amounts not yet billable or held back under contract",
                  "Critical on construction collateral, where retainage is the difference between an availability figure and a fiction",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <ProblemSolution
        eyebrow="Why this exists"
        title="The facility is monitored by one person, and the file lives in their head."
        lede="Every ABL shop has the analyst who knows why that borrower's base looks odd. That knowledge is an operational risk, not an asset."
        rows={[
          {
            problem:
              "The base is a workbook with linked tabs, and the only person who can explain the ineligible column is the person who built it.",
            response:
              "The computation is the platform's, the rules are recorded with the clause behind them, and any officer can open the exclusion and read the reason.",
          },
          {
            problem:
              "Between reporting dates the facility is monitored by hoping the borrower calls.",
            response:
              "Payment velocity, dilution, concentration and utilisation are measured continuously, and material movement reaches the responsible officer's briefing the morning it happens.",
          },
          {
            problem:
              "Field exam findings are filed, remembered for a quarter, and gradually stop being honoured by the base.",
            response:
              "Findings become conditions the base enforces and cites, so the next exam sees what was actually done rather than what was intended.",
          },
          {
            problem:
              "Your own compliance certificate is assembled in the last four days of the month from four sources.",
            response:
              "The position is already computed and the supporting records are already sealed, so the certificate becomes a review and a signature.",
          },
          {
            problem:
              "An overadvance is discovered after it exists, and the approval is retrofitted to make the file look right.",
            response:
              "An advance above the permitted rate is a gate rather than a warning. It holds, it names the authority required, and the approval is recorded before the money moves.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="Around the base"
        title="The rest of the ABL operation, on the same records."
        items={[
          {
            title: "Loan and revolver accounting",
            body: "Advances, paydowns, interest and fee accrual carried continuously across period boundaries, so close is a review rather than a reconstruction.",
          },
          {
            title: "Collateral monitoring",
            body: "Obligor payment behaviour, dilution movement, concentration change and credit limit utilisation measured against the borrower's own history rather than a portfolio average.",
          },
          {
            title: "Covenant reporting",
            body: "Tests computed continuously with the clause quoted as the evidence and days to breach on the current trajectory. FactorFox standards and contractual covenants are labelled separately, always.",
          },
          {
            title: "Exception and approval flow",
            body: "Overadvances, rate exceptions and eligibility waivers approved by named people under four eyes, with the reason recorded in the approver's own words.",
          },
          {
            title: "Evidence packets",
            body: "Sealed for the period they describe, with a database trigger refusing mutation. What you knew and when, without a reconstruction exercise.",
          },
          {
            title: "Briefings for the officer",
            body: "Six fixed questions answered against the book each person is responsible for, including whether you are within covenant, delivered on the web, in Microsoft Teams or on a phone.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="What an ABL credit officer asks first" />

      <RelatedPages
        links={[
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "The five layer computation, ineligibles and certificate production." },
          { href: "/platform/covenant-monitoring", label: "Covenant monitoring", note: "Eight families of test, with the clause quoted as evidence." },
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "Re underwriting on every material event, with confidence and coverage separate." },
          { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "Obligor behaviour, dilution and aggregated concentration between reports." },
          { href: "/platform/treasury", label: "Treasury", note: "Availability, release control and days to zero on the current burn." },
          { href: "/solutions/factoring", label: "Factoring", note: "Where the same book buys receivables outright instead of lending against them." },
          { href: "/platform/accounting", label: "Accounting and close", note: "Accrual, reserve movement and the sealed packets behind a certificate." },
        ]}
      />

      <CtaBand
        title="Bring a borrowing base you have argued about."
        body="We will rebuild it against a demonstration book, apply your ineligible rules with the reasons attached, and show you the availability figure with every exclusion opened."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/solutions", label: "See every funding structure" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

const CLASSES: { name: string; gross: string; ineligible: string; rate: string; note: string; kind: "available" | "attention" | "info" }[] = [
  {
    name: "Trade receivables",
    gross: "$8,412,000",
    ineligible: "$1,163,400",
    rate: "85%",
    note: "Cross age triggered on one obligor. Aging as of yesterday.",
    kind: "attention",
  },
  {
    name: "Finished inventory",
    gross: "$3,100,000",
    ineligible: "$402,000",
    rate: "50%",
    note: "Last count 41 days old. Sublimit applies.",
    kind: "info",
  },
  {
    name: "Equipment",
    gross: "$1,850,000",
    ineligible: "$0",
    rate: "60%",
    note: "Appraisal 19 months old. Age shown next to the value.",
    kind: "info",
  },
];

function AvailabilityScene() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
              Borrowing base &middot; Halvorsen Fabricating &middot; revolver
            </p>
            <p className="mt-0.5 text-[0.875rem] font-semibold">
              3 collateral classes <span className="font-normal text-[var(--fg-muted)]">&middot; evidence age on every row</span>
            </p>
          </div>
          <Status kind="attention" label="Compressing" />
        </div>

        <ul className="divide-y divide-[var(--line)]">
          {CLASSES.map((c) => (
            <li key={c.name} className="px-5 py-3.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="text-[0.875rem] font-semibold leading-[1.35]">{c.name}</span>
                <span className="u-tabular font-mono text-[0.75rem] text-[var(--fg-muted)]">
                  {c.gross} <span className="text-[var(--fg-subtle)]">less {c.ineligible}</span>
                </span>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[var(--color-navy-100)] px-1.5 py-0.5 font-mono text-[0.5625rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-navy-800)]">
                  Advance {c.rate}
                </span>
                <Status kind={c.kind} label={c.kind === "attention" ? "Rule fired" : "Evidence age"} />
              </div>
              <p className="mt-1.5 text-[0.75rem] leading-[1.5] text-[var(--fg-muted)]">{c.note}</p>
            </li>
          ))}
        </ul>

        <div className="border-t border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-4">
          <dl className="grid grid-cols-3 gap-4 text-[0.8125rem]">
            {[
              ["Availability", "$1,046,300"],
              ["Outstanding", "$7,930,000"],
              ["Days to zero", "22"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">{k}</dt>
                <dd className="u-tabular m-0 mt-0.5 font-semibold text-[var(--fg)]">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
            Field exam FE-2025-03 &middot; advance rate on inventory reduced &middot; condition honoured by the base
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[52ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of a borrowing base by collateral class. Per class advance rates, reasoned ineligibles,
        the age of the evidence behind each class, days to zero on the current trajectory and field exam
        findings enforced as conditions are the platform&rsquo;s own behaviour. Borrower name and figures come
        from a seeded demonstration book.
      </figcaption>
    </figure>
  );
}
