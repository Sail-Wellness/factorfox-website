import type { Metadata } from "next";
import {
  PageHero,
  FeatureGrid,
  StepList,
  ProseSection,
  DataTable,
  FaqBlock,
  RelatedPages,
  CtaBand,
  Card,
  Section,
  Container,
  SectionHead,
  Eyebrow,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Factoring fraud detection across the book",
  description:
    "Catch duplicate paper, invoice size deviation against a client median, odd submission timing and bank change holds, scored as combinations not flags.",
  path: "/platform/fraud-detection",
  intent: "product",
  target: "factoring fraud detection",
});

const FAQS = [
  {
    q: "Does the system learn from the frauds we catch?",
    a: "No, and we will not tell you otherwise. There is no confirmed fraud label in the platform today, no false positive tracking and no threshold tuning. Every weight is a pinned constant that a person chose and that you can read. What the platform does do is record every dismissal with a written reason and the name of the person who wrote it, which is precisely the raw material a calibration loop needs. Calibration is the next build, and it will be announced when it exists rather than before.",
  },
  {
    q: "How many alerts will this generate on a two hundred client book?",
    a: "We will not guess at your book, and any vendor who does is selling you a number they invented. What we can tell you is the design intent: combinations fire far less often than single conditions, because requiring three unusual things at once is a much narrower filter than requiring one. Run it against your own history and count. That is the only honest answer available before you have.",
  },
  {
    q: "Can an operator approve a bank account change if they are senior enough?",
    a: "No. Seniority is not the control. A bank account change sits under a hold that only a named human can release, and automated approval is refused outright rather than being an option that is switched off by default. There is no role, no configuration and no integration path that turns this into a machine decision.",
  },
  {
    q: "What counts as unusual submission timing?",
    a: "Unusual against this client's own established pattern, not against a clock. A client whose schedules have always arrived on Thursday afternoons for two years submitting at three on a Sunday morning is a deviation. A client who has always worked nights is not. Time of day, day of week and the interval since the previous submission are all measured against that client's own history.",
  },
  {
    q: "What happens to a signal an officer dismisses?",
    a: "It closes, with the officer's name, the timestamp, and the reason they typed. A dismissal without a reason is not accepted. If the same combination fires again on the same party, the previous dismissal and its reason are shown alongside the new signal, so the second person is not deciding blind and a pattern of repeated dismissals on one client is visible rather than buried.",
  },
  {
    q: "Does cross portfolio detection mean you look at other lenders' data?",
    a: "It means we look across your own portfolio, inside your own tenant. Tenant isolation is enforced at the database level. Debtor payment behaviour drawn from the FactorFox network is a separate and deliberately narrow thing: it tells you how a debtor has actually paid across the network, and nothing about your book leaves it.",
  },
];

export default function FraudDetectionPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox fraud detection",
          description:
            "Behavioural fraud signals for factoring: duplicate and near duplicate documents, invoice size deviation, submission timing, bank account change holds and cross portfolio detection.",
          path: "/platform/fraud-detection",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Fraud detection", path: "/platform/fraud-detection" },
        ]}
        eyebrow="Fraud detection"
        title="One unusual thing is a Tuesday. Three at once is a phone call."
        lede={
          <>
            <p>
              Written for whoever in your shop gets called when a schedule looks wrong. Fraud in factoring is
              almost never a single anomaly, because a single anomaly is exactly what a legitimate client
              produces every week. It is a combination that arrives together and that nobody was positioned to
              see as one thing.
            </p>
            <p>
              FactorFox watches for the combinations, holds the movements that cannot be undone, and hands a
              named person a decision with the evidence already assembled.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Test it against your own history" }}
        secondaryCta={{ href: "/platform/document-intelligence", label: "See document verification" }}
      />

      <ProseSection
        eyebrow="The design decision"
        title="Single flag systems get switched off, and the reason is arithmetic."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The combination that matters</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              An invoice well above this client&rsquo;s own median. Submitted outside the hours this client has
              ever submitted in. To a debtor with no payment history on the network. In the same week as a
              request to change the remittance account.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Every one of those, alone, is a normal Tuesday somewhere on your book. Together they are the
              week you will spend the next year explaining.
            </p>
          </Card>
        }
      >
        <p>
          A large invoice is not a fraud signal. Neither is a new debtor, a weekend submission, a corrected
          document or a change of bank details. Each one of them happens dozens of times a month in a healthy
          book, and a system that raises them individually produces a queue that a competent operator learns,
          entirely correctly, to clear without reading.
        </p>
        <p>
          That is how alert fatigue actually works. It is not a failure of discipline. It is a rational
          response to a signal whose base rate is dominated by ordinary business. And the cost is not the
          wasted time. The cost is that on the day the real one arrives, it lands in a queue somebody stopped
          reading eight months earlier.
        </p>
        <p>
          <strong>So the platform scores combinations.</strong> Conditions are evaluated together, on the same
          party, inside a window, and a signal is raised when the combination clears the threshold rather than
          when any individual condition does. The signal states which conditions contributed and what each one
          observed, so the officer opens a case, not a mystery.
        </p>
        <p>
          <strong>And the comparison is always to the client itself.</strong> Deviation is measured against
          this client&rsquo;s own median invoice, this client&rsquo;s own submission rhythm and this client&rsquo;s own debtor
          set. A portfolio average would flag every small client in your book as unusual and every large one
          as normal, which is worse than useless in an industry where the same lender funds a two person
          trucking company and a staffing firm with four hundred people on assignment.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The conditions"
            title="What the platform observes, and what each observation is worth alone"
            lede="Read the right hand column carefully. It is the part most fraud pages leave out, and it is the part that determines whether anyone will still be using the queue in a year."
          />
          <div className="mt-11">
            <DataTable
              caption="Fraud conditions and their standalone value"
              head={["Condition", "What it observes", "Alone, it means"]}
              rows={[
                [
                  "Duplicate document",
                  "The same document content already present against this client or elsewhere in the portfolio.",
                  "Often a resubmission of a corrected copy. Strong when paired with anything else.",
                ],
                [
                  "Near duplicate",
                  "The same commercial facts under a different invoice number, a fresh scan or a changed layout.",
                  "Occasionally legitimate rebilling. Rarely innocent twice in one month.",
                ],
                [
                  "Invoice size deviation",
                  "An invoice far from this client's own median, in either direction.",
                  "Usually a genuine large order. A client's biggest month is a normal event.",
                ],
                [
                  "Submission timing",
                  "Time of day, day of week and interval since the last schedule, against this client's established pattern.",
                  "People work odd hours. Meaningless in isolation and useful in company.",
                ],
                [
                  "New or unpaid debtor",
                  "A debtor with no payment history on the network, or one whose payment velocity has collapsed.",
                  "Every debtor is new once. Weight comes from what arrives with it.",
                ],
                [
                  "Concentration shift",
                  "Sudden gathering of exposure under one debtor name, including across several of your clients.",
                  "A growing account, or the shape of a receivable that does not exist.",
                ],
                [
                  "Bank account change",
                  "A request to change where money is sent.",
                  "Handled separately and never scored away. See the hold below.",
                ],
                [
                  "Verification exception",
                  "A debtor contact that cannot be reached, a confirmation that contradicts the document, a delivery that cannot be corroborated.",
                  "Bad contact data is common. A pattern of it against one client is not.",
                ],
                [
                  "Dilution movement",
                  "Credits, short pays and deductions rising against this client's own history.",
                  "Commercial trouble far more often than fraud. Both matter to you.",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="Cross portfolio"
        title="The patterns that are invisible one client at a time"
        lede="A client level check is blind to anything that spans two clients, by construction. Some of the most expensive events in this industry live in exactly that blind spot."
        items={[
          {
            title: "The same paper, two clients",
            body: "One receivable funded twice through two related entities. Content and commercial fingerprints run against the whole book at verification, not just against the submitting client's own history.",
          },
          {
            title: "One debtor, several clients",
            body: "Exposure under a single debtor name gathering across your portfolio, where no individual client file looks concentrated. This is the concentration that never appears on any one borrowing base.",
          },
          {
            title: "Shared contact identity",
            body: "The debtor contact for verification resolving to the same person or the same number as a party already on your book. Verification that loops back to the client is not verification.",
          },
          {
            title: "Synchronised behaviour",
            body: "Two clients whose submission patterns, invoice shapes and debtor sets move together in a way unrelated businesses do not.",
          },
          {
            title: "Recycled debtors",
            body: "A debtor that stopped paying under one client reappearing as a fresh obligor under another, with the payment history that made it a problem still attached to it.",
          },
          {
            title: "Post dismissal recurrence",
            body: "A combination raised again on a party where a previous one was dismissed. The earlier dismissal and its written reason are shown with the new signal, so nobody clears the same thing twice without seeing that they are.",
          },
        ]}
      />

      <StepList
        eyebrow="Bank account changes"
        title="The one movement that is never automated"
        lede="The most expensive email a factoring company receives is a polite note asking that remittances go to a new account. This path is deliberately slow."
        steps={[
          {
            label: "Detect",
            title: "The request is recognised wherever it arrives",
            body: "Through the portal, in a mailbox, inside a document, or as an edit somebody attempts on a party record. Mail content that looks like a bank change is classified as requiring verification rather than applied, whatever channel it came through.",
          },
          {
            label: "Hold",
            title: "A hold goes on immediately",
            body: "Payments that would reference the changed account cannot proceed while the hold stands. The hold sits in front of every rail, so no wire, no ACH file and no manual instruction routes around it.",
          },
          {
            label: "Refuse",
            title: "Automated approval is refused outright",
            body: "Not disabled by default, not gated behind a role, not available as a configuration option for a large customer. There is no path in the platform by which a machine releases a bank account change. This gate can never be made advisory.",
          },
          {
            label: "Verify",
            title: "A person checks it out of band",
            body: "Against a contact and a method established before the request arrived, never against the details supplied in the request itself. The verification and its evidence are captured at the time they happen and are never refetched afterwards.",
          },
          {
            label: "Release",
            title: "A named human lets it through",
            body: "With four eyes where policy requires it. In solo mode an AI counter review is logged where the second officer's name would sit, and it refuses outright when any underlying fact has changed since the request was raised.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The honest boundary"
        title="What this does not do, stated plainly, because you will find out anyway."
        tone="sunken"
      >
        <p>
          <strong>The models do not learn from outcomes.</strong> There is no confirmed fraud label in the
          platform, no false positive tracking and no automatic threshold tuning. Nothing about a case you
          closed last quarter changes what fires next quarter. Any vendor telling you their factoring fraud
          model improves itself should be asked, in order, what the label is, who applies it, how many
          confirmed cases the model has seen, and what happened to the weights last month. The answers are
          usually informative.
        </p>
        <p>
          <strong>The weights are pinned constants.</strong> A person chose them, they are readable, and they
          only change when a person changes them and records that they did. That is a smaller claim than a
          learning system and a much easier one to defend to an examiner, because a constant can be shown and
          a drifting weight has to be reconstructed.
        </p>
        <p>
          <strong>Every dismissal is recorded with a reason and a name.</strong> An officer cannot clear a
          signal by closing a window. They write why, and the record keeps their name against it permanently.
          This is the discipline that makes the queue trustworthy today, and it is also the exact raw material
          a calibration loop requires: a labelled corpus of what experienced people judged, and why.
        </p>
        <p>
          <strong>Calibration is the next build, not a current feature.</strong> We are saying so here rather
          than describing it in the present tense on a marketing page. When it ships, the page will change,
          and the change will be dated.
        </p>
        <p>
          <strong>And the platform does not decide.</strong> It stops money, it organises evidence, it raises
          exceptions and it buys a decision maker time. Whether this client is committing a fraud is a
          judgement a person makes, with their name on it, and no version of this product will make it for
          you.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="The questions we would ask a fraud vendor" />

      <RelatedPages
        links={[
          { href: "/platform/document-intelligence", label: "Document intelligence", note: "Where duplicate and near duplicate blocking actually runs." },
          { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "Velocity, dilution and concentration as continuous signals." },
          { href: "/platform/treasury", label: "Treasury", note: "The release control that a hold sits in front of." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "Why a signal arrives with its reasoning attached." },
          { href: "/platform/security", label: "Security and controls", note: "Asymmetric automation and the gates that cannot be made advisory." },
          { href: "/solutions/transportation", label: "Transportation factoring", note: "Double brokering, recycled debtors and the freight specific patterns." },
        ]}
      />

      <CtaBand
        title="Run it over the case that cost you money."
        body="Bring the file. We will show you which conditions were present, in what order they appeared, and how many days before the loss the combination would have raised a signal."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform/risk-monitoring", label: "See risk monitoring" }}
      />
    </>
  );
}
