import Link from "next/link";
import type { Metadata } from "next";
import {
  PageHero,
  ProseSection,
  StepList,
  FeatureGrid,
  FaqBlock,
  RelatedPages,
  CtaBand,
  DataTable,
  Section,
  Container,
  SectionHead,
  Eyebrow,
  Status,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "A factoring platform for the operating day",
  description:
    "One platform for the operating day: briefings, evidence, underwriting, risk, covenants, borrowing base, documents, fraud, collections and treasury.",
  path: "/platform",
  intent: "product",
  target: "factoring platform",
});

const FAQS = [
  {
    q: "Is FactorFox a system of record, or an intelligence layer on top of one?",
    a: "Both, and that is the point. The ledger underneath holds schedules, purchases, reserves, fees, cash application and payables, and it has been built for this industry for more than twenty years. The layer above reads that ledger continuously and decides what deserves a person's attention. An intelligence layer bolted onto somebody else's database can only see what that database chose to expose. Ours sees the transaction as it is written.",
  },
  {
    q: "Do we have to adopt all of it at once?",
    a: "No. Most operators start with the part of the day that hurts, usually intake and verification or the morning brief, and widen from there. The capabilities share one record, so adding a second one does not mean a second implementation. What you cannot do is take the conclusions without the records behind them, because a conclusion with no evidence is exactly the thing this platform exists to stop shipping.",
  },
  {
    q: "What happens when a data source we depend on is not connected?",
    a: "The platform says so on the surface where it matters and reports coverage separately from confidence. A covenant that needs data FactorFox does not hold reads awaiting a live source and names the source rather than reporting zero. A verification gate that cannot reach a register refuses to assert the fact instead of implying it was checked. Reporting itself blind is a feature, and it is the one that keeps the rest of the screen believable.",
  },
  {
    q: "Who in a factoring company actually opens the platform every day?",
    a: "Operations and collections live in it. Credit officers and underwriters arrive on events. Owners, executives and treasury are often briefed without opening it at all, in Microsoft Teams or on a phone, and only come in when they follow a link into the evidence. Scope follows responsibility, so the person who owns forty clients is briefed on the forty rather than on the whole book.",
  },
  {
    q: "Does the same platform run asset based lending, not just factoring?",
    a: "Yes. Factoring, asset based lending, purchase order funding and reverse factoring run on the same records with different eligibility, advance and reserve behaviour. A borrowing base with ineligibles and reserves is the asset based lending surface. A schedule of purchased invoices is the factoring surface. Operators running more than one product get one book, one covenant position and one brief across all of it.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox platform",
          description:
            "Operating and intelligence platform for factoring, asset based lending, purchase order funding and reverse factoring, covering briefings, underwriting, risk, covenants, documents, collections, treasury and accounting.",
          path: "/platform",
        })}
      />

      <PageHero
        trail={[{ name: "Platform", path: "/platform" }]}
        eyebrow="The platform"
        title="The whole operating day, in one system that explains itself."
        lede={
          <>
            <p>
              FactorFox is built for the institution that funds. Factors, asset based lenders, purchase
              order funders and reverse factoring providers. Not for the business looking for money.
              Everything on this page is written for the people who decide whether money moves today.
            </p>
            <p>
              What follows is not a feature list with twelve boxes on it. It is a day, in the order a
              funding company actually lives it, from the brief that lands before the first coffee to the
              packet that is sealed after the last release.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/platform/briefings", label: "See how briefings work" }}
        aside={<OperatingDayScene />}
      />

      <ProseSection
        eyebrow="How to read this"
        title="Two layers, and only one of them is new."
      >
        <p>
          Underneath, FactorFox is a system of record. Schedules, purchases, advances, reserves, fees,
          cash application, payables, the ledger that has to reconcile. That layer has to be correct and
          it has to be dull. We have been building it for this industry since 2002, and the parts of it
          you will not think about are the parts we spent the longest on.
        </p>
        <p>
          On top sits the layer people notice. It reads the record as it changes, decides what deserves a
          named person&rsquo;s attention today, and hands that person the reason, the evidence and the action
          in the same breath. It is not a reporting module. It never asks you to go looking.
        </p>
        <p>
          The distinction matters when you are comparing platforms, because every system in this category
          can store an invoice. The question is what happens in the four hours after the invoice is
          stored, when concentration under one debtor name has quietly moved across three clients and
          nobody has run the report that would show it.
        </p>
        <p>
          <strong>The unifying rule is simple.</strong> Nothing in FactorFox states a conclusion it cannot
          open. Every signal, exception, recommendation and proposed action carries a reference into the
          records that produced it, captured when the decision was made rather than refreshed underneath
          it later.
        </p>
      </ProseSection>

      <StepList
        eyebrow="The operating day"
        title="Seven moments, and what the platform is doing in each one."
        lede="Read this as the shape of a day at a funding company. Every capability below belongs to a moment, and the links in the next section take you to how each one works."
        steps={[
          {
            label: "07:00",
            title: "The brief lands before anyone opens the platform",
            body: "Six fixed questions, answered against the scope each person actually carries. Where is risk and why. Which decisions require me now. What changed since the last brief. Where is cash and what can move safely. What is likely to happen next. Am I within covenant. The second brief of the day states the difference rather than repeating the book, and the same answers reach web, Microsoft Teams and a phone from one endpoint.",
          },
          {
            label: "Intake",
            title: "Documents arrive and become facts, or become named gaps",
            body: "Invoices, schedules, bills of lading, rate confirmations, assignment notices and remittances land by email, portal or SFTP. Extraction produces structured fields with a confidence on each one. Duplicates and near duplicates are fingerprinted within the client and across the whole portfolio, because the second submission of the same load is rarely an accident on the day it matters. A document that fails extraction is reported as failed. It is never quietly guessed.",
          },
          {
            label: "Pre funding",
            title: "Every schedule meets its gates before anyone talks about releasing money",
            body: "Verification status, invoice size against the client's own median, submission timing against the client's own pattern, credit limit utilisation on both sides, and the specific gate that is holding a schedule with the reason written out. A bank account change sits under a human only hold and automated approval of it is refused outright, not merely discouraged.",
          },
          {
            label: "Release",
            title: "Money moves, or a named person is told exactly why it did not",
            body: "Availability is computed, the release is proposed, four eyes applies and the approval is recorded with the actor, the evidence, the policy version and the origin. Payment files are built by rail and by bank. If the requester tries to approve their own release, the platform refuses them by name. That refusal survives every surface, including the phone.",
          },
          {
            label: "Through the day",
            title: "The book is re underwritten as it changes, not on an annual cycle",
            body: "Every material event triggers a fresh run, each run is versioned immutably, and confidence and coverage are reported separately so nobody confuses being sure with being able to see. Payment velocity, dilution movement, concentration migration and aging tipping are measured against the book's own history rather than an industry average that describes nobody.",
          },
          {
            label: "Afternoon",
            title: "Collections works a list ordered by exposure, not by age alone",
            body: "Promises that lapsed overnight, cases that reopened themselves with the reason stamped on them, contact history and the last verified balance in one place. A follow up projects into the officer's calendar, and deleting the calendar entry does not close the case, because the case is the record and the calendar is a projection of it.",
          },
          {
            label: "Close",
            title: "The day is finished, and can still be proven three years later",
            body: "Cash applied, proposed and unapplied with the source of each proposal named. Reserve movement and fee accrual with the entries behind them. Covenant position with days to breach on the current trajectory. Audit packets sealed, with a database trigger that refuses mutation, so the examiner window is a retrieval rather than a reconstruction.",
          },
        ]}
      />

      <CapabilityMap />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Refusals"
            title="The most useful thing to know about a platform is what it will not say."
            lede="Anything can produce a number. A number produced when the underlying facts are missing is worse than no number, because somebody will fund against it. These are the refusals built into the product."
          />
          <div className="mt-11">
            <DataTable
              caption="Behaviour the platform refuses"
              head={["FactorFox will not", "Why that is deliberate"]}
              rows={[
                [
                  "Show a delta it cannot prove",
                  "If there is no prior observation, it offers to take a first observation rather than reconstructing a yesterday that was never recorded. Risk observations are append only at the database level.",
                ],
                [
                  "Assert that a carrier's operating authority, insurance or safety score was verified",
                  "Those fields are captured, never verified, and the relevant gate is explicitly forbidden from asserting them. The refusal is what stops a credit memo from carrying a fact nobody checked.",
                ],
                [
                  "Approve a bank account change automatically",
                  "It is the single most expensive email a factoring company receives. The change sits under a human only hold and the automated path is closed, not configurable.",
                ],
                [
                  "Report a covenant as compliant when the data is missing",
                  "It reads awaiting a live source and names the source. Zero is a value. Absence is not, and reporting one as the other is how a certificate gets signed against nothing.",
                ],
                [
                  "Let the requester approve their own release",
                  "Four eyes lives underneath every surface, so it cannot be avoided by moving to Teams or to a phone. In solo mode an AI counter review is logged where the second officer's name would sit, and it refuses outright when any underlying fact has changed since the request was raised.",
                ],
                [
                  "Pretend a dark source is a live one",
                  "Several external credit and legal sources are declared and unconfigured. The platform reports itself blind on those and lowers coverage rather than presenting an empty result as a clean one.",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Every dismissal of a signal is recorded with a written reason and the name of the person who
            dismissed it. That record is the raw material a calibration loop needs, and calibration is the
            next thing we build. We are not going to tell you the models already learn from outcomes,
            because today every weight is a pinned constant.
          </p>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="Where it runs"
        title="One endpoint, four places you meet it."
        lede="There is no second brain and no separate mobile product. An answer on a phone and an answer on screen cannot disagree, because they are the same answer."
        columns={4}
        items={[
          {
            title: "Web",
            body: "The full operating surface. Queues, files, gates, the borrowing base, the ledger and every evidence trail behind them.",
          },
          {
            title: "Microsoft Teams",
            body: "Briefing tab, chat dialogue with sources named, signal cards that change real state, and approvals with four eyes enforced.",
            status: "controlled",
          },
          {
            title: "Mobile",
            body: "The same surfaces, phone sized, with the same controls. Built for the person who is in a car when the release needs a second officer.",
          },
          {
            title: "Country packs",
            body: "Local credit sources, payment rails and invoicing requirements, rather than a United States product with the spelling changed.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="What operators ask before the first demonstration" />

      <RelatedPages
        links={[
          { href: "/solutions/factoring", label: "Factoring", note: "The platform framed for a factoring book specifically." },
          { href: "/solutions/asset-based-lending", label: "Asset based lending", note: "Borrowing base, ineligibles, reserves and field exams." },
          { href: "/integrations/microsoft-teams", label: "Microsoft Teams", note: "Briefings and approvals where your team already works." },
          { href: "/platform/security", label: "Security and controls", note: "Authority model, audit immutability and tenant isolation." },
          { href: "/platform/pricing", label: "Pricing", note: "How the commercial model is put together." },
          { href: "/migrate/factorsoft", label: "Moving from FactorSoft", note: "What a migration off a legacy book actually involves." },
        ]}
      />

      <CtaBand
        title="Bring your hardest morning to the demonstration."
        body="Tell us the day that went wrong: the concentration nobody saw, the duplicate that funded, the covenant certificate signed against a number you could not open. We will show you where the platform would have stopped it and what evidence it would have carried."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/compare", label: "Compare the alternatives" }}
      />
    </>
  );
}

/* ------------------------------------------------------------- capability map */

const GROUPS: { key: string; blurb: string; links: { href: string; label: string; note: string }[] }[] = [
  {
    key: "Intelligence",
    blurb: "The layer that decides what a named person needs to know today, and proves it.",
    links: [
      {
        href: "/platform/briefings",
        label: "Role based briefings",
        note: "Six fixed questions answered against the scope a person actually carries, with an escalation lane for anything material outside it.",
      },
      {
        href: "/platform/evidence",
        label: "Intelligence with evidence",
        note: "What sits behind a conclusion, how it is captured at run time, and why sealed packets cannot be edited later.",
      },
      {
        href: "/platform/continuous-underwriting",
        label: "Continuous underwriting",
        note: "Re underwriting on every material event, immutable run versions, gate policy and asymmetric automation.",
      },
    ],
  },
  {
    key: "Exposure",
    blurb: "Where the money is at risk, measured as movement rather than as a static bucket.",
    links: [
      {
        href: "/platform/risk-monitoring",
        label: "Debtor and client risk",
        note: "Concentration migration under one debtor name, dilution movement, payment velocity and aging tipping.",
      },
      {
        href: "/platform/covenant-monitoring",
        label: "Covenant monitoring",
        note: "Facility limits, eligibility, advance rates, reserves and reporting obligations, with days to breach.",
      },
      {
        href: "/platform/borrowing-base",
        label: "Borrowing base",
        note: "Eligibility rules, ineligibles, reserves and availability, computed from the same records the brief quotes.",
      },
    ],
  },
  {
    key: "Intake and integrity",
    blurb: "Everything that happens between a document arriving and a schedule being fundable.",
    links: [
      {
        href: "/platform/document-intelligence",
        label: "Document intelligence",
        note: "Extraction with per field confidence, near duplicate fingerprinting, and failures reported as failures.",
      },
      {
        href: "/platform/fraud-detection",
        label: "Fraud detection",
        note: "Invoice size deviation, unusual submission timing, duplicate paper across the portfolio, bank account change holds.",
      },
      {
        href: "/platform/client-onboarding",
        label: "Client onboarding",
        note: "The file assembled with checks already run, gaps named, and the credit memo packet built as you go.",
      },
    ],
  },
  {
    key: "Cash and books",
    blurb: "What moves the money and what proves the money moved correctly.",
    links: [
      {
        href: "/platform/collections",
        label: "Collections",
        note: "A worklist ordered by exposure and promise history, with cases that reopen themselves and say why.",
      },
      {
        href: "/platform/treasury",
        label: "Treasury",
        note: "What can move safely today, payment files by rail and by bank, and net availability with days to zero.",
      },
      {
        href: "/platform/accounting",
        label: "Accounting and close",
        note: "Cash applied, proposed and unapplied, reserve movement, fee accrual, and audit packets sealed for the examiner.",
      },
    ],
  },
];

function CapabilityMap() {
  return (
    <Section>
      <Container>
        <SectionHead
          eyebrow="Every capability"
          title="Twelve capabilities, one record underneath all of them."
          lede="Grouped by the moment in the day they belong to rather than by the department that owns them, because the department boundary is where most operations lose an exception."
        />
        <div className="mt-12 space-y-12">
          {GROUPS.map((g) => (
            <div key={g.key}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-[var(--line-strong)] pb-3">
                <Eyebrow tone="signal">{g.key}</Eyebrow>
                <p className="text-[0.875rem] leading-[1.5] text-[var(--fg-muted)]">{g.blurb}</p>
              </div>
              <div className="mt-px grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
                {g.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group bg-[var(--bg-raised)] p-6 transition-colors hover:bg-[var(--bg-sunken)]"
                  >
                    <h3 className="text-[1rem] group-hover:text-[var(--accent)]">{l.label}</h3>
                    <p className="mt-2 text-[0.8125rem] leading-[1.55] text-[var(--fg-muted)]">{l.note}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------- visual */

const DAY: { time: string; label: string; detail: string; kind?: "critical" | "attention" | "available" }[] = [
  {
    time: "07:00",
    label: "Owner brief, whole book",
    detail: "Two items require you. One approval is blocked because you raised it.",
    kind: "critical",
  },
  {
    time: "08:12",
    label: "Intake, 41 documents",
    detail: "Two near duplicates held. One extraction failed and is named, not guessed.",
    kind: "attention",
  },
  {
    time: "10:30",
    label: "Schedule SCH-2214 at the gate",
    detail: "Eight of eight gates passed. Awaiting a second officer.",
    kind: "attention",
  },
  {
    time: "11:05",
    label: "Re underwrite triggered",
    detail: "Material event on Bluewater Foods. Run versioned, coverage 62%, confidence 71%.",
  },
  {
    time: "14:40",
    label: "Collections worklist",
    detail: "Two promises lapsed overnight. Ordered by exposure, not by age.",
  },
  {
    time: "17:15",
    label: "Close and seal",
    detail: "Covenant position within every threshold. Concentration reaches its limit in eleven days.",
    kind: "available",
  },
];

function OperatingDayScene() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
            Operating day &middot; one book &middot; one record
          </p>
          <Status kind="info" label="Illustration" />
        </div>
        <ul className="divide-y divide-[var(--line)]">
          {DAY.map((d) => (
            <li key={d.time} className="grid gap-1 px-5 py-4 sm:grid-cols-[4.25rem_minmax(0,1fr)] sm:gap-4">
              <span className="u-tabular font-mono text-[0.75rem] font-semibold text-[var(--fg-subtle)]">{d.time}</span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[0.875rem] font-semibold leading-[1.35]">{d.label}</p>
                  {d.kind ? <Status kind={d.kind} label={d.kind === "available" ? "Clear" : undefined} /> : null}
                </div>
                <p className="mt-1 text-[0.8125rem] leading-[1.5] text-[var(--fg-muted)]">{d.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 max-w-[52ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of one operating day. The sequence, the gate model, the run versioning and the way
        coverage and confidence are reported separately are the platform&rsquo;s own. Names, times and figures
        are from a seeded demonstration book, not from a customer.
      </figcaption>
    </figure>
  );
}
