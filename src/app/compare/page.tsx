import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  PageHero,
  FeatureGrid,
  StepList,
  ProseSection,
  FaqBlock,
  RelatedPages,
  CtaBand,
  DataTable,
  Card,
  Section,
  Container,
  SectionHead,
  Eyebrow,
  Status,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Factoring software comparison for operators",
  description:
    "Compare recording systems against decision systems on capability, evidence and control, including an honest note on where FactorFox is the wrong answer.",
  path: "/compare",
  intent: "comparison",
  target: "factoring software comparison",
});

const FAQS = [
  {
    q: "What is the actual difference between a recording system and a decision system?",
    a: "A recording system answers what happened. It holds an accurate, ordered account of every transaction and it will reproduce that account faithfully whenever you ask. A decision system answers what should happen next and shows you why it thinks so. Both need to be correct about the past. Only one of them is organised around the question an operator is actually holding at nine in the morning, which is where the exposure is today and what needs a person right now.",
  },
  {
    q: "Why is there no vendor by vendor table on this page?",
    a: "Because we would have to describe other people's products from the outside, and a table built that way is an argument dressed as research. Every row would be written to be won. Categories are more useful and more honest: they describe how a class of system behaves, which is checkable against whatever you run today, and they do not go stale the month a competitor ships something. Bring your own shortlist and test each row against it.",
  },
  {
    q: "Does modern hosting make a platform a decision system?",
    a: "No, and this is the most common category error in the evaluation. Browser access, a clean interface and a public API are real improvements to how a recording system is used. They do not change what it is organised around. The test is not how the software is delivered. It is whether the platform can tell you what changed since yesterday, why that matters, what it recommends and what proves the recommendation, without a person assembling the answer first.",
  },
  {
    q: "Can we keep our current system and add intelligence on top?",
    a: "You can add analysis on top of anything, and for some operations that is the right first move. What you cannot add from outside is control. Four eyes, gate refusals, immutable evidence and the ability to stop a release are only meaningful where the money actually moves. A layer that reads a recording system can tell you a release looks wrong. It cannot decline to make it.",
  },
  {
    q: "What would make you tell us not to buy?",
    a: "Several things, and they are listed on this page rather than discovered in a third meeting. If your primary requirement is a consumer facing loan origination front door, if your decision rests on a capability we mark as planned, if you need a marketplace listed application rather than a controlled release one, or if you are a business seeking funding rather than an institution providing it, we are not the answer. Saying so early costs us a pipeline entry and saves you a quarter.",
  },
  {
    q: "How do we test any of this in a demonstration?",
    a: "Ask for the refusals rather than the features. Ask to see what the platform does when an external source is unavailable, whether it reports a stale number or names the source as dark. Ask it to show a change since yesterday on a book it has only just seen. Ask someone to approve their own funding request. The interesting part of any of these systems is what it declines to do, because that is the part that holds when a quarter is under pressure.",
  },
];

export default function ComparePage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox",
          description:
            "A decision system for factoring, asset based lending and specialty finance, compared against legacy and modern recording platforms on capability, workflow, evidence, control and operating consequence.",
          path: "/compare",
        })}
      />

      <PageHero
        trail={[{ name: "How we compare", path: "/compare" }]}
        eyebrow="Comparison"
        title="Every platform in this market records the same facts. They disagree about what to do with them."
        lede={
          <>
            <p>
              Written for the principal or credit officer of a funding business holding a shortlist and
              three demonstration invitations, trying to work out what actually separates the options when
              every feature list contains the same twenty nouns.
            </p>
            <p>
              It does not separate on features. Invoices, schedules, advances, reserves, ineligibles,
              chargebacks and aging exist everywhere, and they should. It separates on what the system is
              organised around: keeping an accurate account of what happened, or telling you what to do next
              and proving why.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Test these claims against your book" }}
        secondaryCta={{ href: "/migrate", label: "What a conversion involves" }}
      />

      <ProseSection
        eyebrow="The distinction"
        title="A recording system is not a worse decision system. It is a different thing."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The nine o&rsquo;clock test</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Open your current platform and ask it what changed since yesterday that you should care about,
              and why.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              If the answer requires a person to open four screens and form a view, you are running a
              recording system. That is a statement about category, not quality. Some of the most reliable
              books in this industry run on one.
            </p>
          </Card>
        }
      >
        <p>
          A recording system is judged on fidelity. Did the advance post correctly, did the fee calculate
          correctly, does the ledger tie, can it reproduce March. Those are the right questions to judge it
          on and the good ones answer them well for decades. Nothing on this page suggests otherwise.
        </p>
        <p>
          A decision system is judged on something else: whether the person responsible knew in time. It
          starts from a question rather than a record. Where is the pressure, what moved, what requires me
          now, what happens if I do nothing until Thursday. To answer that, a platform has to hold not only
          what is true but what was true yesterday, what it observed, what it could not observe, and what it
          concluded from each.
        </p>
        <p>
          <strong>The two are built differently underneath.</strong> A recording system stores current state
          and a posting history. A decision system has to store observations as append only facts, versions
          of every conclusion, the evidence behind each one, and an explicit position on the data it is
          missing. You cannot bolt the second onto the first from outside, because the history it needs was
          never captured.
        </p>
        <p>
          <strong>The consequence shows up in headcount and in losses.</strong> With a recording system, the
          work of turning records into a view of the book is done by people, every day, and it is done again
          from scratch tomorrow. That is why operations of this kind grow staff roughly in line with the
          book. The other consequence is quieter: the pattern that nobody had time to look for is the one
          that turns into a loss.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container width="wide">
          <SectionHead
            eyebrow="By category"
            title="Three kinds of system, sixteen capabilities."
            lede="Categories rather than vendors, because a vendor row written by a competitor is an argument and this needs to be usable. Take your shortlist and mark each column yourself. The rows are written so you can."
          />
          <div className="mt-11">
            <DataTable
              caption="Capability comparison across categories of factoring platform"
              head={["Capability", "Legacy recording platform", "Modern recording platform", "FactorFox"]}
              rows={[
                [
                  "Organising question",
                  "What happened, and does it tie.",
                  "What happened, available faster and from anywhere.",
                  "What requires a decision now, why, and what proves it.",
                ],
                [
                  "Start of the working day",
                  "A queue, a report run and a person forming a view.",
                  "A dashboard the operator interprets.",
                  "A briefing answering six fixed questions, scoped to what the reader is responsible for.",
                ],
                [
                  "Change since yesterday",
                  "Reconstructed by comparing two report runs, if anyone kept the first one.",
                  "Available where the platform stores history for the metric in question.",
                  "Stated as a difference, and refused where the platform cannot prove the prior observation rather than inventing a baseline.",
                ],
                [
                  "Underwriting cadence",
                  "Periodic. At onboarding, at review, and when someone raises a concern.",
                  "Periodic, with better data assembly.",
                  "Continuous. Re underwrites on every material event, versions each run immutably, reports confidence and coverage separately.",
                ],
                [
                  "Risk detection",
                  "Threshold reports and exception listings a person reads.",
                  "Configurable alerts on individual fields.",
                  "Behavioural combinations across the portfolio: payment velocity by obligor, dilution movement, invoice size deviation against a client's own median, unusual submission timing.",
                ],
                [
                  "Exposure across clients",
                  "Visible within a client file. Combining obligors across clients is a manual exercise.",
                  "Reportable where debtor records have been normalised.",
                  "Concentration read across the book, including exposure under one debtor name appearing through several clients.",
                ],
                [
                  "Duplicate documents",
                  "Caught when an operator recognises one.",
                  "Exact match detection on identifiers.",
                  "Duplicate and near duplicate detection within a client and across the whole portfolio.",
                ],
                [
                  "Evidence behind a conclusion",
                  "The underlying transactions, found by the person who needs them.",
                  "Drill through from a figure to its components.",
                  "Every conclusion carries severity, reason, references into the records that produce it, and a recommended action with the permission that action needs.",
                ],
                [
                  "Integrity of the record",
                  "Application controlled. Correction by adjustment.",
                  "Application controlled, with better change logging.",
                  "Risk observations append only at the database level. Audit packets sealed, with a database trigger refusing mutation.",
                ],
                [
                  "Missing or unavailable source",
                  "Usually a blank, a zero or a stale figure that looks current.",
                  "Often an empty state with no explanation of cause.",
                  "Reports itself blind and names the source. A covenant needing data the platform does not hold says it is awaiting a live source rather than reporting zero.",
                ],
                [
                  "Approval control",
                  "Role permissions, enforced in the application.",
                  "Role permissions, with mobile access.",
                  "Four eyes by default, gates that can never be made advisory, and an AI counter review logged in solo mode that refuses when an underlying fact has changed.",
                ],
                [
                  "Automation posture",
                  "Automates posting and calculation.",
                  "Automates posting, calculation and routing.",
                  "Asymmetric. The machine may stop money. Only a named human may let it through.",
                ],
                [
                  "Borrowing base and eligibility",
                  "Calculated, with the rules frequently maintained outside the system.",
                  "Calculated in system, configurable.",
                  "Calculated with availability compression and days to zero surfaced as a signal before it becomes a funding problem.",
                ],
                [
                  "Covenants",
                  "Tracked in a spreadsheet and a diary.",
                  "Tracked, usually as fields to be reported on.",
                  "Monitored continuously against a default pack modelled on how bank rediscount facilities are written, with the agreement clause quoted as the evidence and every surface stating these are FactorFox covenants rather than anyone's contract.",
                ],
                [
                  "Where the work happens",
                  "At a desk, in the application.",
                  "In a browser, on any device.",
                  "In the application, and in Microsoft Teams on desktop or phone with identity proved by Microsoft and authority granted by FactorFox, in controlled release.",
                ],
                [
                  "Operating consequence",
                  "Staff grow roughly in line with the book. Patterns nobody had time to look for become losses.",
                  "The same work, done more comfortably and from more places.",
                  "Operators carry more book with the same headcount, and the exceptions surface before they are expensive.",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[76ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            The FactorFox column describes capabilities implemented in the platform. Where a capability is in
            controlled release rather than general availability, the row says so. Nothing in this table is a
            quantified claim, because we do not publish figures we cannot source.
          </p>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="Five axes"
        title="What to compare on, if not features"
        lede="Feature lists converge. These do not, and each one is testable in a demonstration if you ask for it specifically."
        columns={3}
        items={[
          {
            title: "Capability",
            body: "Not whether the noun exists, but at what level it operates. Duplicate detection within a client is a different capability from duplicate detection across a portfolio, and both are called duplicate detection.",
          },
          {
            title: "Workflow",
            body: "Where a working day starts. A queue that has to be interpreted and a briefing that states what needs deciding are two different operating models, and the difference compounds every day for years.",
          },
          {
            title: "Evidence",
            body: "Whether a conclusion opens onto what proves it, in one movement, without leaving the conclusion. A number a credit officer cannot defend to a bank is a number they will not use.",
          },
          {
            title: "Control",
            body: "What the system refuses. Whether four eyes can be configured away under pressure, whether a gate can be made advisory, whether an approval can be self served by the requester.",
          },
          {
            title: "Operating consequence",
            body: "What changes about how many people you need and what you find out in time. This is the only axis the board cares about and the only one no feature list addresses.",
          },
          {
            title: "Honest degradation",
            body: "What appears when a source is missing. A zero that looks like a measurement is the most expensive interface element in specialty finance, and it is present in more systems than anyone admits.",
          },
        ]}
      />

      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="The honest part"
            title="Where FactorFox is not the right answer."
            lede="This section exists because the rest of the page is not credible without it. Every item here has cost us a real opportunity, and we would rather write them down than spend your quarter finding out together."
          />
          <div className="mt-11 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] lg:grid-cols-2">
            {[
              {
                title: "You want a loan origination front door",
                status: "Not what we are",
                body: "If the requirement is a consumer or small business facing application flow, decisioning engine and origination funnel, an institution should buy an origination platform. FactorFox runs a funding operation after the relationship exists: underwriting, funding, collateral, risk, collections, treasury and accounting. Some of that overlaps origination language. It is not the same product and we will say so on the first call.",
              },
              {
                title: "Your decision rests on a capability we mark as planned",
                status: "Wrong sequence",
                body: "We publish a status on every integration row and hold the wording: available, controlled release, contract required, planned, ecosystem. Planned means named and designed, not built. If a planned row is load bearing for your decision, the honest answer is to wait for it or to buy something that has it today. We will not soften the word to keep a deal alive.",
              },
              {
                title: "You need a marketplace listed application today",
                status: "Controlled release",
                body: "The Microsoft Teams surface is proven against a deployed service and is running with named customers, and it is installed into your tenant by custom upload rather than from the Teams store. If your policy requires a marketplace listing before anything reaches a tenant, that is a legitimate constraint and today we do not meet it.",
              },
              {
                title: "You want the controls to be optional",
                status: "By design",
                body: "Some gates can never be made advisory, by any role or configuration. Four eyes applies by default and solo mode logs an AI counter review rather than waiving the requirement. If your operating model depends on being able to switch that off when a quarter is tight, we are the wrong platform and you should believe us the first time.",
              },
              {
                title: "You want the model to learn from your outcomes now",
                status: "Not yet true",
                body: "Every weight in the platform is a pinned constant. There is no confirmed outcome label and no threshold tuning today. What is true is that every dismissal is recorded with a written reason and a name, which is exactly the raw material a calibration loop requires, and calibration is the next build. If adaptive scoring today is your requirement, this is not it yet.",
              },
              {
                title: "You are a business looking for funding",
                status: "Wrong audience",
                body: "FactorFox is bought by the institution that funds: factors, asset based lenders, purchase order funders, reverse factoring providers and specialty finance companies. If you are a company seeking to factor your own receivables, we do not sell to you and this site is not written for you. The industry associations are a better starting point.",
              },
            ].map((n) => (
              <div key={n.title} className="bg-[var(--bg-raised)] p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-[1.0625rem]">{n.title}</h3>
                  <Status kind="attention" label={n.status} />
                </div>
                <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">{n.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-[70ch] text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
            There is a longer version of the same discipline on{" "}
            <InlineLink href="/platform/security">security and controls</InlineLink>, where we decline to
            claim certifications we do not hold, and on{" "}
            <InlineLink href="/integrations">the integration register</InlineLink>, where a status cannot be
            promoted by anyone in marketing.
          </p>
        </Container>
      </Section>

      <StepList
        eyebrow="Diligence"
        title="Six things to ask for in every demonstration you sit through."
        lede="Not of us. Of everybody, in the same words, and then compare the answers side by side. Each of these takes a few minutes and each one is difficult to answer well without the underlying capability."
        steps={[
          {
            label: "Delta",
            title: "Show me what changed since yesterday, on a book you saw for the first time this morning",
            body:
              "This separates systems that store observations from systems that store state. A platform with no prior observation should say so and offer to take a first reading. A platform that produces a confident change figure from a single snapshot has invented a yesterday, and it will do that on your book too.",
          },
          {
            label: "Blind",
            title: "Turn off an external source and show me the screen",
            body:
              "Ask what appears when a credit source, a bank feed or a public record source is unavailable. The answer you want is the source named and the state declared. The answer you do not want is a zero, a blank, or yesterday's figure presented as though it were current.",
          },
          {
            label: "Refusal",
            title: "Have the person who requested a release try to approve it",
            body:
              "Do it live, on the demonstration environment, with the presenter's own account. Watch whether the refusal is specific, whether it names the policy, and whether the audit record captures the attempt. Then ask which roles can configure that rule away.",
          },
          {
            label: "Evidence",
            title: "Pick a number on any screen and ask what proves it",
            body:
              "Count the movements it takes to get from the conclusion to the underlying records, and note whether you lose the conclusion on the way. A credit officer who cannot defend a figure to a bank will not use the figure, whatever the software cost.",
          },
          {
            label: "Portfolio",
            title: "Ask for exposure to one obligor across several clients",
            body:
              "Within a client file, every platform can do this. Across the book, under multiple spellings of the same debtor name, is a different question, and it is the one that describes what you are actually exposed to.",
          },
          {
            label: "Conversion",
            title: "Ask them to re price a sample of your settled invoices",
            body:
              "The single most informative diligence request in this category, and the one most likely to be deflected. It tests the vendor's conversion process, their fee engine and their willingness to show you a difference list before you have signed anything. The detail is on the migration pages.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="What buyers ask when the shortlist is down to three" />

      <RelatedPages
        links={[
          { href: "/platform/briefings", label: "Briefings", note: "The six questions, and how scope is decided." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "What sits behind every conclusion on a screen." },
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "Re underwriting on every material event." },
          { href: "/migrate/factorsoft", label: "Moving off FactorSoft", note: "The data model, the decisions and the export list." },
          { href: "/platform/pricing", label: "Pricing", note: "What actually drives cost in this category." },
          { href: "/platform/security", label: "Security and controls", note: "Written for the person filling in the questionnaire." },
        ]}
      />

      <CtaBand
        title="Run the six diligence questions on us first."
        body="Bring the list, use your own book if you can, and start with the refusals. If we fail one of them we would rather you found out in the first hour than in the second quarter."
        primary={{ href: "/demo", label: "Book a working session" }}
        secondary={{ href: "/migrate", label: "See what a conversion involves" }}
      />
    </>
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
