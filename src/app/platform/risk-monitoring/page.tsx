import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  ProseSection,
  FeatureGrid,
  RelatedPages,
  CtaBand,
  DataTable,
  Section,
  Container,
  SectionHead,
  Card,
  Eyebrow,
} from "@/components/page-parts";
import { ProductShot } from "@/components/product-shot";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Debtor risk monitoring software for factors",
  description:
    "Watch concentration migrate under one debtor name across clients, dilution move and payment velocity drift, with exposure counted once per account.",
  path: "/platform/risk-monitoring",
  intent: "product",
  target: "debtor risk monitoring software",
});

export default function RiskMonitoringPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox debtor risk monitoring",
          description:
            "Continuous debtor and client risk monitoring for factoring and asset based lending: concentration migration, dilution movement, payment velocity and aging tipping, with exposure counted once per account.",
          path: "/platform/risk-monitoring",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Risk monitoring", path: "/platform/risk-monitoring" },
        ]}
        eyebrow="Debtor and client risk"
        title="You are not lending to your client. You are collecting from their customer."
        lede={
          <>
            <p>
              Every experienced factor knows this and almost no software is built around it. The credit
              file sits under the client. The exposure sits under the debtor. The two are reconciled by
              somebody who keeps the whole book in their head, and that person is on holiday next week.
            </p>
            <p>
              FactorFox monitors the debtor as the counterparty it actually is: across every client that
              sells to it, against its own payment record, and as a share of your book that moves. This
              page is written for the credit officer and the risk manager inside a funding company.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Monitor a demonstration book with us" }}
        secondaryCta={{ href: "/platform/continuous-underwriting", label: "See what it re underwrites on" }}
        aside={
          <ProductShot
            name="intelligence"
            width={2000}
            height={1168}
            priority
            alt="FactorFox Intelligence screen showing ranked risk signals, among them a concentration breaching its threshold and a payment behaviour shift on one debtor, beside a concentration panel measuring each debtor's share of the portfolio against the policy threshold."
            caption="The Intelligence screen. Signals are ranked with the movement written out rather than a status colour, and the concentration panel measures each debtor's share of the book against the policy threshold."
          />
        }
      />

      <ProseSection
        eyebrow="The blind spot"
        title="Three clients, one debtor, and nobody holding the total."
      >
        <p>
          A factoring book grows client by client. Each file is opened, underwritten and monitored on its
          own, which is correct as far as it goes. Then a regional distributor starts buying from your
          third client as well as your first, an account executive brings in a fourth who sells to the
          same distributor, and the exposure that everyone believes is spread across four relationships
          is really sitting on one company&rsquo;s ability to pay.
        </p>
        <p>
          Nothing on a client screen shows this, because it is not a fact about any client. It is a fact
          about the debtor, and it only exists when you look across the book from the debtor&rsquo;s side. In
          most operations that view is assembled by hand, quarterly at best, and usually because somebody
          already had a bad feeling.
        </p>
        <p>
          <strong>FactorFox holds both sides of every relationship continuously.</strong> Concentration is
          computed under the debtor name across every client that touches it, not per client, and the
          finding says which clients contributed the movement. When the share of your book held by one
          debtor moves, it moves in the morning brief with the reason and the clients named, and it can
          hold further purchases against that debtor before the next schedule is bought.
        </p>
        <p>
          The same logic runs on the client side. A client whose paper is drifting into later buckets and
          whose dilution has started climbing is a different credit than the one you underwrote, whether
          or not anyone has opened the file this quarter.
        </p>
      </ProseSection>

      <FeatureGrid
        eyebrow="What is watched"
        title="Four movements that precede almost every loss in this business."
        lede="None of these is a threshold on a static value. Each one is a comparison against a baseline drawn from your own book, because that is the only baseline that describes your book."
        columns={2}
        tone="sunken"
        items={[
          {
            title: "Concentration migration",
            body: "Share of the book under one debtor name, now against then, aggregated across every client that sells to it. The finding names which clients moved the number and by how much, so the conversation starts with a fact instead of a suspicion. Crossing policy can hold further purchases against that debtor.",
          },
          {
            title: "Dilution movement",
            body: "Dilution tracked as movement rather than reported as a ratio. A client sitting steadily at a known dilution level is a priced risk. A client whose dilution has moved two quarters running is an unpriced one, and the difference is invisible on a report that shows only the current figure.",
          },
          {
            title: "Payment velocity",
            body: "Days to pay by obligor, measured against that debtor's own record with your book. A debtor who has always paid at the slower end of terms is not a finding. The same debtor drifting past its own pattern is, and it usually arrives weeks before the aging report notices anything.",
          },
          {
            title: "Aging tipping",
            body: "Movement between buckets, not the bucket population itself. Paper crossing from current into the first late bucket in volume tells you something is happening at the debtor now. Waiting for it to reach the bucket where your policy triggers means waiting a further month to learn it.",
          },
        ]}
      />

      <Section>
        <Container>
          <SectionHead
            eyebrow="The counting rule"
            title="Exposure at risk is counted once, and the two sides are never added together."
            lede="This sounds like an accounting detail. It is the difference between a risk report an operator believes and one they quietly stop opening."
          />
          <div className="mt-11 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div className="space-y-4 text-[1rem] leading-[1.7] text-[var(--fg-muted)]">
              <p>
                One invoice can be flagged by the client side and by the debtor side at the same time. The
                client&rsquo;s dilution is moving and the debtor&rsquo;s payment velocity has drifted. Both findings
                are true. Both are worth knowing. If the platform adds them, the same money appears twice
                and the total is wrong in the direction that causes panic.
              </p>
              <p>
                So exposure at risk is counted once per account. An invoice contributes its balance to the
                figure a single time, no matter how many signals touch it. The client side view and the
                debtor side view are both available, both complete, and never summed into a combined
                number that describes nothing.
              </p>
              <p>
                <strong>What you get instead is attribution.</strong> The total says how much of your book
                is currently under a live risk finding. Underneath it, each account shows which signals
                touched it and from which side. A credit committee can then argue about the right thing,
                which is whether a given account belongs in the number at all.
              </p>
              <p>
                The same discipline applies to reporting the movement. If there is no prior observation to
                compare against, the platform does not synthesise one to make the change look measurable.
                It offers to take a first observation and says plainly that the baseline starts today.
              </p>
            </div>
            <Card accent="signal">
              <Eyebrow tone="signal">How the total is assembled</Eyebrow>
              <div className="mt-4">
                <DataTable
                  caption="Exposure at risk counting rules"
                  head={["Rule", "Behaviour"]}
                  rows={[
                    ["One account, one count", "An invoice contributes its balance once, however many signals flag it."],
                    ["Sides kept apart", "Client side and debtor side totals are shown separately and never added."],
                    ["Attribution kept", "Each account carries the signals that touched it and the side each came from."],
                    ["No prior, no delta", "Without an earlier observation the platform reports a first observation, not a movement."],
                    ["Coverage stated", "Where a source is unconfigured the account says so and coverage falls."],
                  ]}
                />
              </div>
              <p className="mt-4 text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
                These are the platform&rsquo;s counting rules. Any figures shown elsewhere on this page come from
                a seeded demonstration book.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <ProblemSolution
        eyebrow="Day to day"
        title="What changes on a Tuesday morning."
        lede="Risk monitoring earns its place in the small moments, not in the annual review. These are the ones operators mention first."
        rows={[
          {
            problem:
              "The concentration report is run monthly, so a debtor that took over the book in the first week is discovered in the fourth.",
            response:
              "Concentration is observed every night and the movement is in the morning brief, with the contributing clients named and the policy limit quoted.",
          },
          {
            problem:
              "A debtor is slowing down, but it is only visible to the collector who happens to work those accounts.",
            response:
              "Payment velocity against the debtor's own history is a portfolio signal. It reaches credit as a finding and reaches collections as a reordered worklist.",
          },
          {
            problem:
              "The aging report shows what is late. It does not show what is moving, so the trend is read from memory.",
            response:
              "Bucket movement is measured between observations. The finding is the migration itself, with the volume and the direction stated.",
          },
          {
            problem:
              "Risk totals from two screens disagree because the same invoice is counted on both, and nobody trusts either number.",
            response:
              "Exposure at risk is counted once per account, with the client and debtor views kept separate and fully attributed.",
          },
          {
            problem:
              "A signal is dismissed as noise, and three months later nobody can say who dismissed it or on what basis.",
            response:
              "Every dismissal carries a written reason and a name. It is a recorded decision, which is the only defensible way to switch something off.",
          },
        ]}
      />

      <ProseSection
        eyebrow="What this is not"
        title="Monitoring buys you time. It does not make the decision."
        tone="sunken"
      >
        <p>
          FactorFox does not replace your credit judgement, your counsel or your lender. It watches
          conditions continuously, organises the evidence, identifies the exceptions and gets them in
          front of the person with the authority to act while there is still something to do about it.
          The decision stays where it belongs.
        </p>
        <p>
          It is also honest about what it cannot see. Several external credit and legal sources are
          declared rails that answer not configured until you hold the contract and the keys with that
          vendor. Where a source is dark, the account says so and coverage falls. Nothing is presented as
          checked because it would look better checked.
        </p>
        <p>
          And the risk logic does not tune itself. Every weight in it today is a pinned constant. What the
          platform does hold is the record a calibration loop needs: every finding versioned, every
          dismissal reasoned and named, every conclusion carrying the evidence it used. That is the
          groundwork, and we would rather describe it accurately than sell you a learning loop that does
          not exist yet.
        </p>
      </ProseSection>

      <RelatedPages
        links={[
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "What re underwrites the file when a risk signal moves." },
          { href: "/platform/covenant-monitoring", label: "Covenant monitoring", note: "Where a concentration movement becomes a facility question." },
          { href: "/platform/collections", label: "Collections", note: "The worklist that reorders when payment velocity drifts." },
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "The signals that hold paper before it is ever funded." },
          { href: "/platform/briefings", label: "Briefings", note: "How the first briefing question gets answered each morning." },
          { href: "/solutions/factoring", label: "Factoring", note: "The whole platform framed for a factoring book." },
        ]}
      />

      <CtaBand
        title="Ask us who your largest debtor really is."
        body="Most operators name a client. Run the debtor side view across a demonstration book and see what the aggregation under one name looks like when three client files are read together."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform/covenant-monitoring", label: "See covenant monitoring" }}
      />
    </>
  );
}
