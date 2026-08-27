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
  Card,
  Eyebrow,
  Status,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Explainable AI for lenders, evidence attached",
  description:
    "Open any conclusion into the records behind it. Observations are append only, evidence is captured at run time, and coverage is stated apart from confidence.",
  path: "/platform/evidence",
  intent: "product",
  target: "explainable AI for lenders",
});

const FAQS = [
  {
    q: "What actually counts as evidence?",
    a: "A record inside FactorFox that a human can open and read: an invoice, a schedule, a supporting document, an aging observation, a payment history, a verification run, a communication or remittance, a credit result, a policy version, a covenant clause, or a prior decision on the same party. A model output is never evidence for another model output. If the chain of references ends at something a person cannot open, the conclusion is not shown as proven.",
  },
  {
    q: "What happens when the underlying record changes after a decision was made?",
    a: "The decision keeps the evidence as it stood. Verification runs capture their evidence at the moment they execute and are never re fetched, and a certification signs over the gate snapshot as it was. That is why a card raised yesterday cannot execute against a book that has moved since, and why an approval three years old still shows the facts the approver actually saw rather than today's version of them.",
  },
  {
    q: "What is the difference between confidence and coverage, and why keep them apart?",
    a: "Confidence is how sure the platform is given what it can see. Coverage is how much it can see. A conclusion drawn from two of nine possible sources can be highly confident and badly covered at the same time, and collapsing the two into one score is how a credit committee gets told a thin file is a strong one. FactorFox reports them separately on every surface, and names which sources answered and which are unconfigured.",
  },
  {
    q: "Can an audit packet be changed after it is sealed?",
    a: "No. Sealing is enforced at the database level by a trigger that refuses mutation, not by an application rule somebody can route around. Risk observations are append only for the same reason. If a correction is needed, it is recorded as a new observation with its own timestamp and author, so the sequence of what was known and when survives intact.",
  },
  {
    q: "Do the models learn from your outcomes?",
    a: "Not today, and we are not going to tell you otherwise. Every weight in the current risk logic is a pinned constant. What does exist is the raw material a calibration loop needs: every dismissal is recorded with a written reason and the name of the person who dismissed it, every run is versioned, and every conclusion carries the evidence it used. Calibration built on that record is the next thing we ship.",
  },
  {
    q: "Where does this matter commercially, rather than philosophically?",
    a: "Three places. A bank asking why you funded a deal that later went bad. An examiner sampling files three years after the officer who wrote them left. And an internal argument about whether a decision was reasonable at the time, which is far easier to win with the snapshot the approver saw than with a reconstruction assembled afterwards.",
  },
];

export default function EvidencePage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox evidence and explainability",
          description:
            "Evidence backed intelligence for factoring and asset based lending: append only observations, run time evidence capture, sealed audit packets, and coverage reported separately from confidence.",
          path: "/platform/evidence",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Evidence", path: "/platform/evidence" },
        ]}
        eyebrow="Intelligence with evidence"
        title="A score you cannot open is a score you cannot defend."
        lede={
          <>
            <p>
              Credit officers, risk managers and the people who answer to a rediscount lender do not need
              a model to be clever. They need to be able to show, later, exactly what was known at the
              moment somebody decided to fund.
            </p>
            <p>
              Every conclusion FactorFox states carries a reference into the records that produced it. Not
              a footnote and not a citation to a source name. The record itself, one click away, captured
              when the decision was made and never quietly refreshed underneath it.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Open an evidence trail with us" }}
        secondaryCta={{ href: "/platform/continuous-underwriting", label: "See what produces the conclusions" }}
        aside={<EvidenceTrailScene />}
      />

      <ProseSection
        eyebrow="The principle"
        title="The document is not the control. The documented decision is the control."
      >
        <p>
          Most compliance effort in specialty finance is spent collecting documents. Collecting documents
          is necessary and it is not the same thing as being able to prove a decision was reasonable.
          A folder full of certificates tells an examiner what you held. It says nothing about what the
          officer was looking at when they released the money, which is the only question that matters
          when the file goes wrong.
        </p>
        <p>
          <strong>So the unit of record in FactorFox is the decision, not the document.</strong> A decision
          carries who made it, under which policy version, on which evidence, with what confidence, and
          what the alternative recommendation was if the machine and the human disagreed. The documents
          hang off it as references rather than sitting in a drive somewhere hoping to be found.
        </p>
        <p>
          This changes an unpleasant conversation into a short one. When the bank asks why a deal was
          funded, the answer is not an assurance that due diligence was performed. It is the packet: the
          gate snapshot as it stood, the aging observation from that night, the verification run with its
          captured evidence, the concentration policy in force that week, and the name of the second
          officer who approved it.
        </p>
        <p>
          It also changes how much a departure costs you. When the underwriter who knew the file leaves,
          the reasoning leaves with them in most operations. Here the reasoning was written down at the
          time, by the system, as a side effect of the work rather than as an extra task nobody had time
          for.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="What can sit behind a conclusion"
            title="Twelve kinds of evidence, and what each one is good for."
            lede="Which of these are available depends on what you have connected. Where a source is not connected, the platform says so on the surface and lowers coverage rather than presenting the gap as a clean result."
          />
          <div className="mt-11">
            <DataTable
              caption="Evidence types and what each proves"
              head={["Evidence", "What it establishes"]}
              rows={[
                ["Invoices and schedules", "The obligation itself: amount, terms, obligor, assignment status and the batch it was purchased in."],
                ["Supporting documents", "That the work happened. Bills of lading, proofs of delivery, timesheets, rate confirmations, signed acceptances."],
                ["Payment behaviour", "How this debtor actually pays this client, measured against its own history rather than an industry average."],
                ["Debtor activity across the network", "Exposure to one debtor held under several client relationships, which is invisible from inside any single client file."],
                ["Communications and remittances", "What was said and what arrived. The original message is preserved as evidence rather than summarised into a note."],
                ["Commercial credit results", "The external view at the moment it was pulled, with the pull timestamped, not a live lookup that answers differently tomorrow."],
                ["Financial statement data", "Trend and capacity where statements exist, with coverage stated plainly where they do not."],
                ["Verification runs", "That the invoice was confirmed, by whom, through which channel, with the evidence captured at run time."],
                ["Historical patterns", "The client's own median invoice size, submission timing and dilution behaviour, which is what makes a deviation meaningful."],
                ["Contract and covenant clauses", "The obligation as written. The clause is quoted as the evidence rather than paraphrased into a threshold."],
                ["Operating activity", "Who did what inside the platform, with the origin recorded, including actions taken from Microsoft Teams or a phone."],
                ["Prior decisions on the same party", "What your own institution concluded about this debtor before, and on what basis, across every client that touches it."],
              ]}
            />
          </div>
        </Container>
      </Section>

      <StepList
        eyebrow="How the record is protected"
        title="Four mechanics that make the trail hold up."
        lede="These are database level behaviours rather than policies, because a policy is only as durable as the next person who is in a hurry."
        steps={[
          {
            label: "Append only",
            title: "Risk observations are never overwritten",
            body: "Each observation is a new row with its own timestamp. Yesterday's view of a client stays exactly as it was recorded, which is what makes a delta meaningful rather than decorative. Corrections are added as further observations, so the sequence of what was known and when stays readable years later.",
          },
          {
            label: "Refusal",
            title: "A delta it cannot prove is not shown",
            body: "If there is no prior observation, there is no comparison, and the platform will not manufacture one. It says so and offers to take a first observation instead. Software that fabricates a baseline to make a chart look complete is the reason people stop trusting the chart.",
          },
          {
            label: "Run time capture",
            title: "Verification evidence is captured once and never re fetched",
            body: "A verification run stores what it saw at the moment it executed. Re fetching would quietly replace the evidence behind a decision with a newer version of the world, which is exactly the substitution an auditor is looking for. Certifications sign over the gate snapshot as it stood when the certificate was issued.",
          },
          {
            label: "Sealing",
            title: "Audit packets are sealed and the database refuses to change them",
            body: "A sealed packet is protected by a trigger that rejects mutation, not by an application check that somebody with administrator rights can bypass. Assembling the examiner's file becomes retrieval rather than reconstruction, and the packet contains what was there rather than what today's system would produce if you asked it again.",
          },
        ]}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <SectionHead
                eyebrow="Confidence and coverage"
                title="Being sure and being able to see are two different numbers."
                lede="Collapsing them into one score is the most common dishonesty in risk software, and it is usually not deliberate. It is just easier to draw one dial."
              />
              <div className="mt-7 space-y-4 text-[1rem] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  A conclusion drawn from two of nine possible sources can be entirely confident within
                  what it saw and still be a thin file. FactorFox reports the two separately, everywhere,
                  and names which sources answered, which are unconfigured and which returned nothing.
                </p>
                <p>
                  Confidence also moves with the baseline. An invoice measured against a client that has
                  submitted a handful of invoices carries lower confidence than the same measurement
                  against two years of history, and the item says that in the same sentence as the finding
                  rather than in a tooltip.
                </p>
                <p>
                  There are sources we declare and do not yet reach. Several external credit and legal
                  feeds are configured as available rails that answer not configured until you hold the
                  contract and the keys. On those, the platform reports itself blind. It does not average
                  a missing source into a comfortable middle.
                </p>
              </div>
            </div>
            <Card accent="signal">
              <Eyebrow tone="signal">What a thin file looks like on screen</Eyebrow>
              <dl className="mt-4 space-y-4">
                {[
                  ["Confidence", "45%", "Baseline holds few invoices for this client."],
                  ["Coverage", "62%", "Five of nine sources answered. Two unconfigured, two dark."],
                  ["Sources answered", "5", "Invoices, aging, payment history, documents, network activity."],
                  ["Sources unavailable", "4", "Named individually on the item, never averaged away."],
                ].map(([k, v, note]) => (
                  <div key={k} className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-t border-[var(--line)] pt-3">
                    <dt className="u-eyebrow">{k}</dt>
                    <dd className="u-tabular m-0 font-mono text-[1.125rem] font-semibold text-[var(--fg)]">{v}</dd>
                    <dd className="col-span-2 m-0 mt-1 text-[0.8125rem] leading-[1.5] text-[var(--fg-muted)]">{note}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
                Illustration. The separation of confidence from coverage and the naming of unavailable
                sources are the platform&rsquo;s own behaviour. The percentages are from a seeded demonstration
                book.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="Where the trail shows up"
        title="Evidence is not a screen you visit. It is attached to the work."
        columns={3}
        tone="sunken"
        items={[
          {
            title: "On every briefing item",
            body: "The finding, the reason, the references and the permissioned actions arrive together. Opening a reference takes you into the record, not into a summary of it.",
          },
          {
            title: "On the approval card",
            body: "A release waiting on a second officer carries the gates it passed and the evidence behind each one, including in Microsoft Teams and on a phone.",
          },
          {
            title: "In the credit memo packet",
            body: "The underwriting file assembles as the work happens, so the memo is collated rather than written from memory at the end.",
          },
          {
            title: "On the covenant position",
            body: "The clause is quoted as the evidence for the test. A modelled threshold and a contractual obligation are never shown as the same kind of thing.",
          },
          {
            title: "In the audit packet",
            body: "Sealed, immutable, and assembled from the snapshots as they stood. Built for the examiner window rather than for a quarterly screenshot.",
          },
          {
            title: "On the dismissal",
            body: "Turning off a signal is itself a recorded decision, with a written reason and a name. It is the only honest way to switch something off.",
          },
        ]}
      />

      <SealedPacketScene />

      <FaqBlock items={FAQS} title="What auditors and credit committees ask" />

      <RelatedPages
        links={[
          { href: "/platform/briefings", label: "Briefings", note: "Where most people meet the evidence trail first." },
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "Immutable run versions and the gate policy behind them." },
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "Signals that must be defensible before anyone acts on them." },
          { href: "/platform/security", label: "Security and controls", note: "Authority, audit immutability and tenant isolation in detail." },
          { href: "/platform/covenant-monitoring", label: "Covenant monitoring", note: "Where a quoted clause becomes the evidence for a test." },
          { href: "/resources/glossary", label: "Glossary", note: "Plain definitions for the terms used across these pages." },
        ]}
      />

      <CtaBand
        title="Pick a conclusion and make us open it."
        body="In the demonstration, choose any number on any screen and ask what produced it. That is the entire test, and it is the one most platforms in this category quietly fail."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "See the whole platform" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visuals */

function EvidenceTrailScene() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
            Conclusion &middot; expanded
          </p>
          <Status kind="critical" label="Critical" />
        </div>
        <div className="px-5 py-5">
          <p className="text-[0.9375rem] font-semibold leading-[1.35]">
            Bluewater Foods now holds 95.5% of book exposure
          </p>
          <p className="mt-2 text-[0.8125rem] leading-[1.55] text-[var(--fg-muted)]">
            Share of the book rose 52.3 points since the last observation. Paper past 60 days against this
            debtor rose 96.4 points in the same window.
          </p>

          <p className="u-eyebrow mt-5 mb-2">Produced by</p>
          <ul className="space-y-px bg-[var(--line)]">
            {[
              ["snapshot", "Risk observation, prior night", "Append only. Timestamped 23:04."],
              ["aging", "Aging movement by bucket", "Computed from the observation pair, not from today alone."],
              ["invoice", "14 open invoices", "Each openable. Assignment status carried on every one."],
              ["policy", "Concentration limit, 40%", "Policy version in force at the time of the finding."],
            ].map(([kind, label, note]) => (
              <li key={label} className="bg-[var(--bg-raised)] py-2.5">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">
                    {kind}
                  </span>
                  <span className="text-[0.8125rem] font-semibold text-[var(--fg)]">{label}</span>
                </div>
                <p className="mt-0.5 text-[0.75rem] leading-[1.45] text-[var(--fg-muted)]">{note}</p>
              </li>
            ))}
          </ul>

          <p className="mt-5 border-t border-[var(--line)] pt-4 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
            Coverage 62% &middot; confidence 71% &middot; reported separately, never combined
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[52ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of one conclusion opened into its references. The evidence kinds, the append only
        observation model and the separation of coverage from confidence are the platform&rsquo;s own. Names and
        figures come from a seeded demonstration book.
      </figcaption>
    </figure>
  );
}

function SealedPacketScene() {
  return (
    <Section>
      <Container width="narrow">
        <figure className="m-0">
          <div
            className="overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-raised)]"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
                Audit packet &middot; PKT-4471 &middot; sealed
              </p>
              <Status kind="available" label="Immutable" />
            </div>
            <dl className="grid gap-px bg-[var(--line)] sm:grid-cols-2">
              {[
                ["Decision", "Release approved, schedule SCH-2214"],
                ["Policy version", "credit.concentration v14, in force at approval"],
                ["Requested by", "R. Vasquez, 10:22"],
                ["Approved by", "M. Chen, second officer, 10:41"],
                ["Gate snapshot", "8 of 8, captured at run time, not re fetched"],
                ["Evidence references", "31 records across 6 kinds"],
                ["Confidence", "71%, coverage 62%, reported separately"],
                ["Mutation attempts", "Refused at the database. 0 successful"],
              ].map(([k, v]) => (
                <div key={k} className="bg-[var(--bg-raised)] px-5 py-3.5">
                  <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">{k}</dt>
                  <dd className="m-0 mt-1 text-[0.875rem] leading-[1.45] text-[var(--fg)]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figcaption className="mt-3 text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
            Illustration of a sealed audit packet. Sealing, the database level refusal to mutate, the
            captured gate snapshot and the recorded policy version are the platform&rsquo;s own behaviour. The
            names, identifiers and figures are from a seeded demonstration book.
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}
