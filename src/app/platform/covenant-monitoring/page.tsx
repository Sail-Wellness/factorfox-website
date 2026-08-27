import type { Metadata } from "next";
import {
  PageHero,
  ProseSection,
  StepList,
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
  title: "Covenant monitoring software for funders",
  description:
    "Track facility limits, concentration, eligibility, advance rates and reporting duties, with the agreement clause quoted as evidence behind each test.",
  path: "/platform/covenant-monitoring",
  intent: "product",
  target: "covenant monitoring software",
});

const FAQS = [
  {
    q: "We do not have a rediscount line yet. Is any of this useful?",
    a: "That is the situation the default pack was built for. A factor without a facility has no covenants to monitor, so the compliance surface sits empty until the week a bank hands over a credit agreement and asks for a history nobody was keeping. FactorFox ships a covenant pack modelled on how bank rediscount facilities are actually written, so you are measuring against realistic tests from the first month and arrive at the conversation with a record instead of a promise.",
  },
  {
    q: "How does the platform keep your covenants and our lender's apart?",
    a: "Every surface labels which is which, and the two are never blended into one compliance score. A FactorFox standard is a modelled recommendation and breaching it is a management problem you decide what to do about. A covenant recorded from your credit agreement is a contractual obligation and breaching it may be an event of default. Keeping that line bright is more important than any feature on this page.",
  },
  {
    q: "What happens when a covenant depends on data FactorFox does not hold?",
    a: "It reads awaiting a live source and names the source. It does not report zero, and it does not quietly drop the test out of the pack so the screen looks green. A missing input is a different state from a passing test, and a compliance certificate signed against a covenant nobody could actually compute is the specific accident this behaviour exists to prevent.",
  },
  {
    q: "Where does the number on the screen come from?",
    a: "From the same records the rest of the platform quotes. Eligibility, ineligibles, reserves and advance rates come out of the borrowing base. Concentration comes from the debtor side view, aggregated under one debtor name across every client that sells to it. Collateral performance comes from dilution and payment behaviour measured against your own book. Each test opens into those records, and the agreement clause is quoted alongside as the evidence for the test itself.",
  },
  {
    q: "Does this replace our compliance certificate process?",
    a: "No. It changes the certificate from an assembly exercise into a review. The position is already computed, the evidence is already attached and the clause is already quoted, so the work becomes checking and signing rather than gathering. Your counsel still reads the agreement, your lender still approves what your lender approves, and your executives still decide what to do when a test tightens.",
  },
  {
    q: "How far ahead does days to breach look?",
    a: "It projects the current trajectory of each test rather than forecasting the market. If concentration has been moving in one direction and continues at that rate, it says how many days until the threshold is met. It is a warning device and it is stated as one. The value is not precision, it is that somebody hears about a tightening test while there is still time to buy differently, hold a purchase or call the bank first.",
  },
];

export default function CovenantMonitoringPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox covenant monitoring",
          description:
            "Covenant and facility monitoring for factoring and asset based lending, covering limits, concentration, eligibility, advance rates, reserves, collateral performance and reporting obligations, with days to breach.",
          path: "/platform/covenant-monitoring",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Covenant monitoring", path: "/platform/covenant-monitoring" },
        ]}
        eyebrow="Covenant and facility monitoring"
        title="The certificate is due on the fifth. The breach happened on the twelfth."
        lede={
          <>
            <p>
              Compliance in specialty finance is usually measured on the day the certificate is signed,
              against a position that has been drifting for three weeks. By then the only remaining
              question is how the conversation with the bank goes.
            </p>
            <p>
              FactorFox measures the position continuously, quotes the clause as the evidence for each
              test, and reports days to breach on the current trajectory. It is written for the operator
              who owes the covenants: the factor, the asset based lender, the specialty finance company
              drawing on a rediscount line.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Review your covenant pack with us" }}
        secondaryCta={{ href: "/platform/borrowing-base", label: "See where the numbers come from" }}
        aside={<CovenantPositionScene />}
      />

      <ProseSection
        eyebrow="What is measured"
        title="Eight families of test, computed from the records you already keep."
      >
        <p>
          A credit agreement is not one covenant. It is a set of obligations that live in different parts
          of your operation, which is exactly why they get monitored in different spreadsheets by
          different people and reconciled once a month by whoever drew the short straw.
        </p>
        <p>
          FactorFox computes all of them from the same book. Facility limits and utilisation against the
          line. Concentration, on the debtor side, aggregated under one debtor name across every client
          that sells to it. Eligibility criteria and the ineligibles they produce. Advance rates by
          collateral class. Reserve requirements and how much of each reserve is currently consumed.
          Collateral performance, meaning dilution and payment behaviour measured against your own
          history. Reporting obligations with their due dates. And the financial tests your agreement
          carries, computed on the schedule the agreement specifies.
        </p>
        <p>
          <strong>Each test opens.</strong> The number is not asserted, it is produced, and the records
          behind it are one click away. Alongside the number sits the clause itself, quoted from the
          agreement you recorded, because a threshold typed into a settings screen loses the exact wording
          that decides borderline cases. When a test is close, the wording is usually the argument.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The covenant surface"
            title="Every test, where its inputs come from, and what happens when it moves."
          />
          <div className="mt-11">
            <DataTable
              caption="Covenant families, inputs and behaviour"
              head={["Test family", "Computed from", "Behaviour as it tightens"]}
              rows={[
                [
                  "Facility limits and utilisation",
                  "Outstanding advances against the committed line, by facility and by tranche",
                  "Availability compression is reported with days to zero, and treasury is warned before a release window rather than during it",
                ],
                [
                  "Concentration",
                  "The debtor side view, aggregated under one debtor name across every client",
                  "Days to breach on the current trajectory, with the contributing clients named. Can hold further purchases against that debtor",
                ],
                [
                  "Eligibility",
                  "Eligibility rules applied to the receivable population, with each exclusion reasoned",
                  "Movement in the eligible pool is reported as movement, and the specific rules driving it are named",
                ],
                [
                  "Advance rates",
                  "Advance rate by collateral class against what the agreement permits",
                  "An advance above the permitted rate is a gate, not a warning. It holds and names the authority required",
                ],
                [
                  "Reserves",
                  "Required reserves against reserves actually held and consumed",
                  "Reserve movement is reported with the entries behind it, so a shortfall is traceable rather than inferred",
                ],
                [
                  "Collateral performance",
                  "Dilution movement and payment behaviour measured against your own book's history",
                  "A performance test drifting reaches credit as a finding before it reaches the certificate as a number",
                ],
                [
                  "Reporting obligations",
                  "Due dates recorded from the agreement, with the deliverable named",
                  "Appears in the responsible person's brief ahead of the due date, with the packet assembled from sealed records",
                ],
                [
                  "Financial tests",
                  "The tests your agreement carries, on the schedule your agreement specifies",
                  "Where an input is not held by the platform, the test reads awaiting a live source and names it. It never reports zero",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <ProseSection
        eyebrow="The bright line"
        title="Ours is a standard. Theirs is a contract. Never the same colour on the screen."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The default covenant pack</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              FactorFox ships a covenant pack modelled on how bank rediscount facilities are actually
              written. It exists so a factor without a line is still measuring something real, and still
              accumulating the track record a lender will ask for.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Every surface that renders one of these says plainly that it is a FactorFox standard and not
              anyone&rsquo;s agreement. When your own credit agreement arrives, its covenants are recorded
              alongside, with their clauses, and the shipped pack keeps running underneath as an internal
              discipline.
            </p>
          </Card>
        }
      >
        <p>
          Any platform can put a threshold on a screen. The part that matters, and the part that is easy
          to get wrong, is whether the person reading it knows what breaching it costs.
        </p>
        <p>
          <strong>A FactorFox standard is a recommendation.</strong> It is modelled, we chose it, and
          breaching it is a management problem. You look at it, you decide it was the right trade this
          month, you write down why, and the record of that decision sits with the finding.
        </p>
        <p>
          <strong>A covenant from your credit agreement is an obligation.</strong> You did not choose it,
          your lender did, and breaching it may be an event of default with consequences that have nothing
          to do with how reasonable the trade looked. That is a different category of fact and it is
          labelled as one everywhere it appears, in the brief, on the covenant surface, in Microsoft Teams
          and in the packet.
        </p>
        <p>
          The two are never blended into a single compliance score, because a single score would let a
          comfortable internal standard offset a tightening contractual test. Operators who have lived
          through a covenant conversation understand immediately why that arithmetic is not offered.
        </p>
      </ProseSection>

      <StepList
        eyebrow="Getting there"
        title="From an empty compliance screen to a defensible position."
        lede="Most of this happens once. What happens continuously is the measurement."
        steps={[
          {
            label: "Day one",
            title: "The default pack starts measuring",
            body: "Modelled tests, clearly labelled as FactorFox standards, running against your live book from the first month. You are building a record before anybody asks you for one, and you learn how your own book behaves against realistic thresholds while the stakes are still internal.",
          },
          {
            label: "On signing",
            title: "Your agreement is recorded, clause by clause",
            body: "Each covenant is entered with its wording, its threshold, its test frequency and its reporting obligation. The clause becomes the evidence attached to the test. Where a covenant needs an input the platform does not hold, it is recorded honestly as awaiting a live source with the source named.",
          },
          {
            label: "Continuously",
            title: "The position is computed as the book moves",
            body: "Not on the certificate date and not on a monthly cycle. Every material event that touches an input recomputes the tests it affects, and the run is versioned like any other underwriting run, so the position as it stood on any past date can be opened rather than reconstructed.",
          },
          {
            label: "Ahead of the line",
            title: "Days to breach reaches a person who can act",
            body: "A tightening test appears in the sixth briefing question for whoever carries the responsibility, and escalates to the owner where the scope requires it. The finding names which movement is driving it, so the response can be specific: hold purchases against one debtor, adjust what you buy, or call the bank before the bank calls you.",
          },
          {
            label: "Certificate",
            title: "Signing becomes a review rather than an assembly",
            body: "The position is already computed, the evidence is already attached, the clause is already quoted and the supporting records are already sealed. The remaining work is the part that should always have been the work: a person reading it, deciding it is right, and putting their name to it.",
          },
        ]}
      />

      <Section>
        <Container width="narrow">
          <SectionHead
            eyebrow="Limits"
            title="What this does not do, stated plainly."
            lede="You will be asked this in the room, so here it is before you have to ask."
          />
          <div className="mt-9 space-y-4 text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)]">
            <p>
              <strong>FactorFox does not replace your lender&rsquo;s approval.</strong> Nothing on the covenant
              surface constitutes a waiver, a consent or an amendment. If a test is tightening and you need
              relief, that is a conversation with your bank and the platform&rsquo;s job is to make sure you have
              it early and with evidence in hand.
            </p>
            <p>
              <strong>It does not replace legal review.</strong> The clause you record is the clause we
              quote. We do not interpret it, we do not advise on it, and a covenant recorded incorrectly
              will be monitored incorrectly. Your counsel reads the agreement. The platform holds you to
              what they tell you it says.
            </p>
            <p>
              <strong>It does not replace executive judgement.</strong> Deciding what to do about a
              tightening test is a commercial decision involving relationships, timing and appetite that no
              platform holds. What the platform removes is the excuse that nobody knew, and what it buys
              you is the time to make the decision rather than announce it.
            </p>
            <p>
              What it does, precisely, is monitor conditions continuously, organise the evidence,
              identify the exceptions and put them in front of a named person while there is still
              something useful to do.
            </p>
          </div>
        </Container>
      </Section>

      <FaqBlock items={FAQS} title="What a CFO asks about covenant monitoring" />

      <RelatedPages
        links={[
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "Eligibility, ineligibles, reserves and availability underneath the tests." },
          { href: "/platform/risk-monitoring", label: "Debtor risk monitoring", note: "Where the concentration figure is produced and attributed." },
          { href: "/platform/treasury", label: "Treasury", note: "Availability, release windows and days to zero on the current burn." },
          { href: "/platform/accounting", label: "Accounting and close", note: "Reserve movement, fee accrual and the sealed packets behind a certificate." },
          { href: "/platform/briefings", label: "Briefings", note: "The sixth question, answered every morning for whoever owns it." },
          { href: "/solutions/asset-based-lending", label: "Asset based lending", note: "How the same surface behaves on an ABL book." },
        ]}
      />

      <CtaBand
        title="Bring your credit agreement to the demonstration."
        body="We will record two or three of its covenants against a demonstration book, quote the clauses, and show you the position with days to breach. It is the fastest way to see whether the surface matches the document you actually signed."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "See the whole platform" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

const TESTS: {
  name: string;
  source: "FactorFox standard" | "Credit agreement";
  position: string;
  limit: string;
  note: string;
  kind: "critical" | "attention" | "available" | "info";
}[] = [
  {
    name: "Debtor concentration",
    source: "Credit agreement",
    position: "95.5%",
    limit: "40.0%",
    note: "Clause 7.3(b) quoted as evidence. Days to breach: exceeded.",
    kind: "critical",
  },
  {
    name: "Advance rate, trade receivables",
    source: "Credit agreement",
    position: "84.0%",
    limit: "85.0%",
    note: "Clause 5.1(a). Within threshold. Movement flat over the last ten observations.",
    kind: "available",
  },
  {
    name: "Dilution, trailing",
    source: "FactorFox standard",
    position: "4.8%",
    limit: "5.0%",
    note: "Modelled standard, not your agreement. Days to breach: 11 on the current trajectory.",
    kind: "attention",
  },
  {
    name: "Reporting: borrowing base certificate",
    source: "Credit agreement",
    position: "Due in 4 days",
    limit: "Monthly",
    note: "Clause 6.2. Packet assembled from sealed records, awaiting a named signature.",
    kind: "info",
  },
  {
    name: "Tangible net worth",
    source: "Credit agreement",
    position: "Awaiting a live source",
    limit: "Per clause 8.1",
    note: "Requires the accounting feed. Named, not reported as zero.",
    kind: "info",
  },
];

function CovenantPositionScene() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
              Covenant position &middot; rediscount facility
            </p>
            <p className="mt-0.5 text-[0.875rem] font-semibold">
              5 tests <span className="font-normal text-[var(--fg-muted)]">&middot; source labelled on every row</span>
            </p>
          </div>
          <Status kind="critical" label="1 breached" />
        </div>

        <ul className="divide-y divide-[var(--line)]">
          {TESTS.map((t) => (
            <li key={t.name} className="px-5 py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="text-[0.875rem] font-semibold leading-[1.35]">{t.name}</span>
                <span className="u-tabular font-mono text-[0.875rem] font-semibold text-[var(--fg)]">
                  {t.position}
                  <span className="text-[var(--fg-subtle)]"> / {t.limit}</span>
                </span>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                <span
                  className="rounded-[2px] px-1.5 py-0.5 font-mono text-[0.5625rem] font-semibold uppercase tracking-[0.1em]"
                  style={
                    t.source === "Credit agreement"
                      ? { background: "var(--color-navy-100)", color: "var(--color-navy-700)" }
                      : { background: "var(--color-ink-100)", color: "var(--color-ink-500)" }
                  }
                >
                  {t.source}
                </span>
                <Status kind={t.kind} label={t.kind === "available" ? "Within" : undefined} />
              </div>
              <p className="mt-1.5 text-[0.75rem] leading-[1.5] text-[var(--fg-muted)]">{t.note}</p>
            </li>
          ))}
        </ul>

        <p className="border-t border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
          A standard is a management problem &middot; a contract may be an event of default
        </p>
      </div>
      <figcaption className="mt-3 max-w-[52ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of the covenant surface. The labelling of every test by source, the quoted clause as
        evidence, days to breach and the awaiting a live source state are the platform&rsquo;s own behaviour.
        Clause references and figures come from a seeded demonstration book, not from any real agreement.
      </figcaption>
    </figure>
  );
}
