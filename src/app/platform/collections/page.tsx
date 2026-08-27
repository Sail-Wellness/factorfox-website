import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
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
import { ProductShot } from "@/components/product-shot";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Factoring collections software by exposure",
  description:
    "Work the queue by exposure and promise history, with cases that reopen themselves, lapsed promises tracked and contact history kept beside the debtor.",
  path: "/platform/collections",
  intent: "product",
  target: "factoring collections software",
});

const FAQS = [
  {
    q: "Why not just work the aged trial balance like everybody else?",
    a: "Because age is a poor proxy for what you are actually trying to protect, which is money you can still recover. An eleven day balance of two hundred thousand from an obligor whose payment velocity just doubled deserves the morning far more than a ninety day balance of four thousand from a debtor who has always paid at ninety. Age still appears everywhere on the screen. It just stops deciding the order.",
  },
  {
    q: "What exactly is a promise here?",
    a: "A dated commitment to pay a stated amount, attributed to a named person at the debtor, captured on the contact that produced it. That is what makes it testable. When the date passes and the cash has not arrived, the promise lapses on its own, the case reopens with the reason stamped, and that debtor's promise history carries the lapse permanently.",
  },
  {
    q: "Can an officer close a case that should not be closed?",
    a: "They can close it, and it may well reopen without them. Closure is a judgement and the platform respects it. But a case reopens on the facts: a lapsed promise, a reversed payment, a dispute raised, a new invoice from the same obligor going past due. The reopen is stamped with the condition that caused it, so a case that has reopened four times reads as a pattern rather than as somebody's oversight.",
  },
  {
    q: "Does the calendar integration mean my collectors live in Outlook?",
    a: "It means the next contact appears where the rest of their day already is. The case remains the record. Deleting the calendar entry does not close the case, cancel the promise or remove the exposure, and the projection ledger records what was written and when. A calendar is a projection of the work, never the work itself.",
  },
  {
    q: "How does this handle a debtor we are collecting from on behalf of several clients?",
    a: "As one obligor. The officer sees total exposure under that debtor name across every client it touches, its payment velocity, its promise history and every contact anyone in your shop has had with it. Calling the same accounts payable department three times in a week from three different files is a good way to teach a debtor that you are disorganised.",
  },
  {
    q: "Do outbound demands and notices go straight out?",
    a: "They pass the same delivery wall as every other channel, including the sandbox rules that stop anything from a non production environment reaching a real debtor. What went out, to whom, when, and what it said, all sit on the case as contact history rather than in somebody's sent items.",
  },
];

export default function CollectionsPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox collections",
          description:
            "Collections for factoring and asset based lending: exposure ordered worklists, promise tracking, self reopening cases, calendar projection and complete contact history.",
          path: "/platform/collections",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Collections", path: "/platform/collections" },
        ]}
        eyebrow="Collections"
        title="Your collector has forty calls in them today. The question is which forty."
        lede={
          <>
            <p>
              Written for the collections manager and the officer working the list. In most factoring
              operations that list is an aged trial balance sorted by days, which means the day is spent in
              the order the calendar happened to produce rather than in the order the money justifies.
            </p>
            <p>
              FactorFox orders the work by what is at risk and by what this obligor has actually done when it
              promised before.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "See a worklist built from your book" }}
        secondaryCta={{ href: "/platform/risk-monitoring", label: "See risk monitoring" }}
        aside={
          <ProductShot
            name="collections"
            width={2000}
            height={1218}
            priority
            alt="FactorFox Collections screen showing a recovery pipeline that runs from reminder through soft touch, demand, workout and legal to recovered, a panel of recovery agent activity over the last day, and a promise to pay list marking each commitment as on track, partial or broken."
            caption="The Collections screen. Every balance sits at a named stage of the recovery pipeline, and the promise to pay list carries the date, the amount and whether the commitment is on track, partial or broken."
          />
        }
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="Collections systems mostly record what happened. They rarely decide what happens next."
        lede="The work in a collections shop is not the calling. It is knowing who to call, remembering what they said, and noticing when what they said stopped being true."
        rows={[
          {
            problem:
              "The queue is sorted by age, so the officer spends the first hour on small old balances that were always going to pay late and were never at risk.",
            response:
              "The worklist ranks by exposure at risk and by this obligor's own promise history, so the first hour goes where the recoverable money is.",
          },
          {
            problem:
              "A debtor promised to pay on the fifteenth. On the sixteenth nobody knows, because the note lives in a free text field somebody has to reread.",
            response:
              "A promise is a dated commitment with an amount and a person against it. When the date passes without cash, it lapses on its own and the case comes back with the reason stamped.",
          },
          {
            problem:
              "A case was closed in March. In April the same obligor is past due again, and nothing connects the two.",
            response:
              "Cases reopen themselves on the condition that reopened them, and the case carries its own reopen history, so a fourth reopen reads as a pattern rather than as bad luck.",
          },
          {
            problem:
              "Three officers have called the same accounts payable department this week from three different client files.",
            response:
              "Contact history is held against the obligor as well as the case, so anyone opening the file sees every conversation your shop has had with that debtor, whoever it was for.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The ordering"
        title="Age is a fact about a date. Exposure is a fact about your money."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">What moves a case up the list</Eyebrow>
            <ul className="mt-3 space-y-2 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
              <li>Exposure under this obligor, across every client it touches</li>
              <li>Promises this obligor has broken before, and how recently</li>
              <li>Payment velocity moving against its own baseline</li>
              <li>Concentration of one client&rsquo;s availability in this balance</li>
              <li>Verification exceptions already raised on the underlying invoices</li>
              <li>Whether the balance is inside or outside the eligible pool</li>
            </ul>
          </Card>
        }
      >
        <p>
          Sorting by age treats every dollar past due as equivalent, and they are not equivalent in any way
          that matters. Some past due balances are ordinary friction from an obligor whose accounts payable
          department has always run at seventy days and always pays. Others are the first visible edge of a
          client whose availability is about to compress, whose dilution is climbing, and whose single largest
          debtor stopped paying anyone three weeks ago.
        </p>
        <p>
          The second kind is frequently newer than the first. An aged list buries it near the bottom of page
          two until it has aged into visibility, by which point the useful window has closed and you are
          negotiating rather than collecting.
        </p>
        <p>
          <strong>So the list is ranked by what is at stake and what history suggests.</strong> Exposure is
          counted at the obligor level, across every client that sells to it, because that is where your real
          concentration lives. Promise history is the second axis, and it is the one collectors trust fastest,
          because a debtor who has lapsed twice in six months is telling you something a balance never will.
        </p>
        <p>
          Age is not hidden. It sits on every row, in every view, and any officer can sort by it in a second.
          What changes is only what the day defaults to, and defaults are what actually determine how a book
          gets worked.
        </p>
      </ProseSection>

      <StepList
        eyebrow="A day on the list"
        title="From the morning queue to a case that closed itself properly"
        steps={[
          {
            label: "Open",
            title: "The queue is already ordered and already explained",
            body: "Each row states why it is where it is: exposure, promise history, velocity movement, an availability consequence for the client. An officer who disagrees with the ranking can see what produced it, which is the difference between a worklist people trust and one they override every morning.",
          },
          {
            label: "Prepare",
            title: "The file opens with everything the last call produced",
            body: "Contact history against the case and against the obligor, the invoices in dispute, the verification exceptions, the documents, and what your colleagues were told by this same accounts payable department last month.",
          },
          {
            label: "Contact",
            title: "The call, the mail, the notice",
            body: "Logged as it happens with the outcome, not written up afterwards from memory. Outbound mail and notices leave through the same delivery wall as every other channel, so nothing from a test environment reaches a real debtor.",
          },
          {
            label: "Commit",
            title: "A promise becomes a dated object",
            body: "Amount, date, and the person at the debtor who gave it. That is what makes it testable later. A note saying they will look into it is a note. A promise is a commitment the system can check.",
          },
          {
            label: "Project",
            title: "The next contact lands in the officer's calendar",
            body: "Where the rest of their day already is. The case stays the record of truth, and deleting the calendar entry does not close it, because a projection cannot overrule the thing it is a projection of.",
          },
          {
            label: "Resolve",
            title: "Cash arrives, or the case comes back on its own",
            body: "Applied cash closes it against the invoices it settled. A lapsed promise, a reversed payment or a new dispute reopens it with the reason stamped, and the reopen joins the obligor's permanent history.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Self reopening cases"
            title="A closed case is a claim about the future, and the future gets checked"
            lede="Every reopen names the condition that caused it. Nobody has to remember to look."
          />
          <div className="mt-11">
            <DataTable
              caption="Conditions that reopen a collections case"
              head={["Condition", "What the platform observed", "What the case carries when it returns"]}
              rows={[
                [
                  "Lapsed promise",
                  "The promise date passed and the promised amount did not arrive, in whole or in part.",
                  "The original promise, who gave it, what was paid against it, and the shortfall.",
                ],
                [
                  "Partial payment",
                  "Cash applied against the case is materially short of what was promised.",
                  "The applied amount, the remaining balance and the promise it fell short of.",
                ],
                [
                  "Reversed payment",
                  "A payment that closed the case was returned or charged back.",
                  "The reversal, its date, and the invoices that returned to open status.",
                ],
                [
                  "Dispute raised",
                  "A deduction, credit request or short pay landed against an invoice in the case.",
                  "The dispute, the document that raised it, and the disputed amount now sitting outside the eligible pool.",
                ],
                [
                  "New delinquency, same obligor",
                  "Another invoice from the same debtor passed the past due threshold.",
                  "The obligor's total exposure across your clients and the new balance that triggered it.",
                ],
                [
                  "Velocity collapse",
                  "The obligor's payment velocity moved sharply against its own baseline.",
                  "The movement, the baseline it moved from, and every client of yours exposed to it.",
                ],
                [
                  "Verification exception",
                  "An invoice in the case failed or contradicted verification after the fact.",
                  "The exception, its evidence, and a link into the document that produced it.",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="What the officer has in front of them"
        title="The file, not the fragments"
        columns={2}
        items={[
          {
            title: "Contact history that outlives the case",
            body: "Calls, mail, notices and portal messages, with outcomes, held against both the case and the obligor. When a case reopens eight months later the conversation continues rather than restarting.",
          },
          {
            title: "Promise history as a track record",
            body: "Every promise this debtor has made you, kept or lapsed, with dates and amounts. It is the single most predictive thing in a collections file and it is usually the least well recorded.",
          },
          {
            title: "Exposure across clients",
            body: "One obligor, one total, whoever it is owed to. Working a debtor client by client hands the debtor an information advantage over you for no reason at all.",
          },
          {
            title: "The availability consequence",
            body: "What this balance is doing to the client's eligible collateral. A balance about to cross a cross age trigger is a different conversation from one that is not, and the officer should know which one they are having.",
          },
          {
            title: "Calendar projection",
            body: "Next contact written into the officer's own calendar, with the projection ledger recording what was written and when. The case never becomes something two systems disagree about.",
          },
          {
            title: "Documents in reach",
            body: "The invoice, the proof of delivery, the assignment notice and the verification record, opened from the case rather than searched for in a share drive while a debtor waits on the line.",
          },
        ]}
      />

      <ProseSection eyebrow="Where collections meets the rest of the book" title="A collections queue that knows nothing about credit is just a phone list.">
        <p>
          The reason to hold collections inside the platform that holds the collateral is that the two are the
          same conversation viewed from different ends. A debtor slowing down is a collections event on
          Monday, a payment velocity signal on Tuesday, a credit limit question on Wednesday and an
          availability movement on Thursday. In most operations those are four systems and four people, and
          the connection between them is made in a meeting, late.
        </p>
        <p>
          Here they are one record. The velocity movement that reopened the case is the same observation that
          appears in the credit officer&rsquo;s briefing and the same one that moves the obligor concentration on
          the borrowing base. An officer working a case can see what it is doing to the client&rsquo;s availability,
          and a portfolio manager watching availability compress can see the collections case behind it
          without asking anyone.
        </p>
        <p>
          What none of this does is chase for you. It orders the work, remembers what was said, notices when a
          commitment failed, and puts the officer in front of the right obligor with the file already open.
          The recovery is still the collector&rsquo;s.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What a collections manager wants to know" />

      <RelatedPages
        links={[
          { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "Payment velocity and the movements that reopen cases." },
          { href: "/platform/accounting", label: "Accounting", note: "Cash application, short pays and how a case actually closes." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "What a past due balance is doing to eligible collateral." },
          { href: "/integrations/microsoft-365", label: "Microsoft 365", note: "Calendar projection and mail through the delivery wall." },
          { href: "/platform/briefings", label: "Briefings", note: "Missed promises and exceptions in the morning brief." },
          { href: "/solutions/staffing", label: "Staffing factoring", note: "Weekly billing, high invoice counts and the collections load that follows." },
        ]}
      />

      <CtaBand
        title="Let us reorder one morning of your queue."
        body="Give us a day of your aged trial balance. We will show you the same day ranked by exposure and promise history, and you can tell us which order you would rather your team had worked."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/migrate", label: "See how migration works" }}
      />
    </>
  );
}
