import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
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
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { BriefingPanel } from "@/components/briefing-panel";
import { pageMeta, softwareSchema } from "@/lib/seo";
import { ROLES } from "@/content/roles";
import { BRIEF_QUESTIONS } from "@/content/briefing";

export const metadata: Metadata = pageMeta({
  title: "Role based operations briefings for lenders",
  description:
    "Answer six fixed questions for each person by the scope they carry, with severity, reasons, evidence references and actions that name the permission.",
  path: "/platform/briefings",
  intent: "product",
  target: "role based operations briefing",
});

const FAQS = [
  {
    q: "Why are the six questions fixed rather than configurable?",
    a: "Because a configurable brief becomes a report, and a report becomes something nobody reads. The six questions are the ones a funding company answers every morning whether or not it has software: where is risk, what needs me, what changed, where is cash, what happens next, am I within covenant. Fixing them means the brief has a shape you learn once and can scan in forty seconds. What is configurable is scope, cadence, thresholds and the evidence sources behind each answer.",
  },
  {
    q: "Who decides what each person is briefed on?",
    a: "Responsibility does, not job title. Two credit officers with the same title and different books get different briefs. Someone who owns forty clients is briefed on those forty, even though they may be permitted to view three hundred. Permission to see something is not the same as being accountable for it, and briefing on everything a person may view is how a brief turns back into a dashboard.",
  },
  {
    q: "What happens to something serious that falls outside my scope?",
    a: "It reaches you through the escalation lane and it arrives labelled as escalated, with the scope it came from named. It is never blended into your own items as though it were yours. Owners and directors carry book wide escalation scope, so severity can always find a person with the authority to act, and the record shows who was reached and when.",
  },
  {
    q: "How is the second briefing of the day different from the first?",
    a: "It states the difference rather than restating the book. If nothing material moved, it says so in a line. The delta is computed against the last recorded observation, and where no prior observation exists the platform refuses to invent one. It offers to take a first observation instead, which is the honest version of a chart that would otherwise show a change nobody can prove.",
  },
  {
    q: "Do briefings reach people who never open the platform?",
    a: "That is the usual case for owners and treasury. The same endpoint serves the web application, Microsoft Teams and mobile, so a brief read on a phone is not a summary of the real brief. It is the brief. Actions taken from it cross the ordinary application surface, which is why four eyes, role checks and audit still apply to a tap made in a car park.",
  },
];

export default function BriefingsPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox role based briefings",
          description:
            "Role aware operations briefings for factoring and asset based lending, answering six fixed questions with severity, evidence references and permissioned actions.",
          path: "/platform/briefings",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Briefings", path: "/platform/briefings" },
        ]}
        eyebrow="Briefings"
        title="Nine people, nine different mornings, one system underneath."
        lede={
          <>
            <p>
              A credit officer, a collector and an owner do not need the same screen and never did. They
              need the same book, read three different ways, by something that knows what each of them is
              accountable for this morning.
            </p>
            <p>
              A FactorFox briefing answers six fixed questions against the scope a person actually
              carries, states what moved since the last one, and puts the evidence and the next action in
              the same place as the finding. It is written for the operator running the funding company,
              never for the business being funded.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "See a briefing on your own book" }}
        secondaryCta={{ href: "/platform/evidence", label: "Open the evidence behind it" }}
        aside={<BriefingPanel />}
      />

      <ProblemSolution
        eyebrow="Why briefings and not dashboards"
        title="The information was always there. Finding it was the job."
        lede="Nothing on this list is a software failure in the narrow sense. Every one of these systems recorded the truth correctly. They just never told anybody."
        rows={[
          {
            problem:
              "The morning starts with four screens, three saved reports and a spreadsheet somebody maintains by hand.",
            response:
              "The morning starts with one page of six answers, ordered by severity, scoped to you, with the numbers linked to the records that produced them.",
          },
          {
            problem:
              "The alert fires on a threshold with no explanation, so it gets dismissed, and after a month nobody reads the alerts at all.",
            response:
              "Every item carries why it fired in plain language, and every dismissal is recorded with a written reason and the name of the person who dismissed it.",
          },
          {
            problem:
              "Everyone sees the same portfolio view, so the collector wades through credit items and the owner wades through queue noise.",
            response:
              "Scope follows responsibility. Anything material outside your scope arrives through the escalation lane, marked as escalated rather than mixed into your own work.",
          },
          {
            problem:
              "The second look at the book restates the same aging buckets, so it takes ten minutes to work out whether anything actually moved.",
            response:
              "The second briefing states the difference. If nothing material changed, it says so and stops, rather than filling the page to look busy.",
          },
          {
            problem:
              "The finding is on one screen and the action is on another, so the person who spots the problem is not the person who fixes it.",
            response:
              "The action sits on the finding, labelled with the permission it needs, and it is only offered to somebody who holds that permission.",
          },
        ]}
      />

      <Section>
        <Container>
          <SectionHead
            eyebrow="The six questions"
            title="Fixed questions, because the questions were never the variable."
            lede="These are the six a funding company answers every day whether or not it owns software. What changes between people is the scope they are answered over, not which questions get asked."
          />
          <div className="mt-11">
            <DataTable
              caption="The six briefing questions and what each one is watching"
              head={["The question", "What produces the answer"]}
              rows={[
                [
                  BRIEF_QUESTIONS[0].question,
                  "Concentration migration, dilution movement, payment velocity against each debtor's own history, aging tipping between buckets, and invoice patterns that sit outside the client's own baseline.",
                ],
                [
                  BRIEF_QUESTIONS[1].question,
                  "Approvals, overrides and exceptions waiting on your authority, including the ones you are blocked from giving because you raised them yourself.",
                ],
                [
                  BRIEF_QUESTIONS[2].question,
                  "The delta against the last recorded observation. Where no prior observation exists, it offers to take a first one rather than inventing a yesterday.",
                ],
                [
                  BRIEF_QUESTIONS[3].question,
                  "Net availability, releases clear of every gate, payment files ready by rail and by bank, and anything sitting inside the human only hold window.",
                ],
                [
                  BRIEF_QUESTIONS[4].question,
                  "Promises due and promises lapsing, days to pay drifting against a debtor's own record, availability compression with days to zero, and covenant trajectory.",
                ],
                [
                  BRIEF_QUESTIONS[5].question,
                  "Facility limits, concentration, eligibility, advance rates, reserves and reporting obligations, measured against the covenants you record, with days to breach on the current path.",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <ProseSection
        eyebrow="Scope"
        title="Scope follows responsibility, and permission is not responsibility."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The escalation lane</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Narrow scope has one obvious failure: something serious happens just outside it and nobody
              hears. So severity has a second route. A material event outside a person&rsquo;s book travels the
              escalation lane to somebody whose scope covers it, and it arrives labelled, with the scope it
              came from named.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Escalated items are never blended into your own findings, because an item you are being told
              about and an item you are accountable for demand different responses. Owners and directors
              carry book wide escalation scope, so there is always a person with the authority to act.
            </p>
          </Card>
        }
      >
        <p>
          The tempting design is to brief people by job title. It is also wrong, and it fails on the first
          day a company has two credit officers with different books.
        </p>
        <p>
          FactorFox briefs against responsibility. An account executive with forty clients is briefed on
          the forty, not the three hundred their role allows them to open. A collector is briefed on the
          debtors assigned to them, ordered by exposure and promise history rather than by age alone. A
          treasury officer is briefed on cash and the rails, not on onboarding files. The owner is briefed
          on the whole book, because the whole book is what an owner is accountable for.
        </p>
        <p>
          <strong>Cadence follows scope as well.</strong> An owner gets a morning brief, exception alerts
          through the day and a closing view. A credit officer is briefed continuously, gated by
          materiality, because an event that does not change a decision is not worth interrupting anybody
          for. Operations lives in a queue that updates as the queue moves. Nine role shapes ship with the
          platform and every one of them is a starting point rather than a fixed template.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Nine roles"
            title="What each person is handed, and how often."
            lede="These are the shipped role shapes. Read them as the scope and cadence a real operation ends up with, not as a permissions matrix."
          />
          <div className="mt-11">
            <DataTable
              caption="Briefing scope and cadence by role"
              head={["Role", "Scope", "Cadence", "What the brief carries"]}
              rows={ROLES.map((r) => [
                r.title,
                r.scope,
                r.cadence,
                <ul key={r.slug} className="space-y-1.5">
                  {r.gets.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>,
              ])}
            />
          </div>
        </Container>
      </Section>

      <StepList
        eyebrow="One day, four contacts"
        title="Morning brief, movement, exceptions, close."
        lede="The briefing is not a single email at seven. It is a rhythm, and the rhythm is what stops the day from being interrupted by everything at once."
        steps={[
          {
            label: "Morning",
            title: "The brief that decides the shape of your day",
            body: "Six questions answered over your scope, ordered by severity, with the count of items that require you specifically shown before you read a word. The owner sees whole book exposure and the approvals only they can give. Operations sees what is blocking today's funding, ordered by dollars. Both are looking at the same records.",
          },
          {
            label: "Through the day",
            title: "Movement, gated by materiality",
            body: "Not every change deserves an interruption. A signal reaches you when it crosses materiality for your scope, and it arrives with its severity, its reason and the action it wants. Everything below that line waits for the next brief instead of training you to ignore notifications.",
          },
          {
            label: "On event",
            title: "Exceptions and approvals, wherever you are",
            body: "An approval that needs you arrives in the web application, in Microsoft Teams and on your phone from the same endpoint. Acting on it crosses the ordinary application surface, so role checks, four eyes, counter review and facility guards run identically to a browser click, and the audit record names the origin.",
          },
          {
            label: "Close",
            title: "What moved, and what is carried into tomorrow",
            body: "The closing brief states the difference against the morning rather than repeating it. Promises lapsing overnight, releases that did not clear a gate and why, covenant position with days to breach on the current trajectory, and anything the escalation lane carried up during the day.",
          },
        ]}
      />

      <Section>
        <Container>
          <SectionHead
            eyebrow="Anatomy of an answer"
            title="Four things, on every single item, without exception."
            lede="This is the contract. If an item cannot carry all four, it is not shown as a finding, because a finding you cannot open is a rumour with a number attached."
          />
          <div className="mt-11">
            <DataTable
              caption="What every briefing item carries"
              head={["Part", "What it is", "Why it is there"]}
              rows={[
                [
                  "Severity",
                  "Critical, attention, clear or nothing, applied consistently across every surface.",
                  "So a scan of the page in ten seconds produces the same ordering that a careful read would. Severity is assigned by the platform, not chosen by whoever wrote the rule.",
                ],
                [
                  "The reason",
                  "Plain language: what moved, from what to what, over which window, and against which baseline.",
                  "An alert without a reason gets dismissed, and once people start dismissing they stop reading. The reason is also what makes a dismissal defensible when somebody asks about it later.",
                ],
                [
                  "Evidence references",
                  "Links into the actual FactorFox records. Invoices, aging observations, documents, payment behaviour, policy versions, contract clauses.",
                  "So the person deciding can open what produced the number instead of taking it on faith, and so the same references sit in the packet three years later.",
                ],
                [
                  "Actions with permissions",
                  "The next steps, each labelled with the permission it requires, offered only to somebody holding it.",
                  "The finding and the fix belong in one place. Showing an action to somebody who cannot take it is how work gets forwarded four times before anything happens.",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Where a conclusion rests on a source that is not connected, the item says so and reports
            coverage separately from confidence. A thin baseline lowers confidence and the item says that
            too, in the same sentence as the finding.
          </p>
        </Container>
      </Section>

      <FaqBlock items={FAQS} title="What people ask about briefings" />

      <RelatedPages
        links={[
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "What sits behind every number the brief quotes." },
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "The engine that produces most of what the brief reports." },
          { href: "/platform/risk-monitoring", label: "Debtor risk monitoring", note: "How the first question gets its answer each morning." },
          { href: "/platform/covenant-monitoring", label: "Covenant monitoring", note: "The sixth question, and where days to breach comes from." },
          { href: "/integrations/microsoft-teams", label: "Microsoft Teams", note: "The same briefing, delivered where your team already is." },
          { href: "/platform", label: "Platform overview", note: "How briefings sit inside the rest of the operating day." },
        ]}
      />

      <CtaBand
        title="Ask for the briefing your own role would receive."
        body="Tell us the seat you sit in and the size of book you carry. We will run the brief for that scope against a demonstration portfolio, and you can open every reference on it."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "See the whole platform" }}
      />
    </>
  );
}
