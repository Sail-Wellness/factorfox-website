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
  title: "How to choose factoring software",
  description:
    "Running a software selection for a factoring or lending book: who decides, how to write the requirements, what to test, and the clauses that matter.",
  path: "/compare/how-to-choose",
  intent: "commercial",
  target: "how to choose factoring software",
});

const FAQS = [
  {
    q: "How long should a selection take?",
    a: "For a book under a few hundred clients, six to ten weeks from first call to signature is realistic if the decision makers are named at the start and given standing time. It stretches when nobody owns it, when the requirements are written after the demonstrations rather than before, and when the extract from the incumbent is requested late. The extract request is the one item with a turnaround you do not control, so it goes first regardless of where you are in the process.",
  },
  {
    q: "Should we write a formal RFP?",
    a: "For most books in this industry, no. A formal RFP invites a formal answer, and formal answers are written by people whose job is to make every box green. What works better is a two page requirements note, the same six demonstration tests put to every vendor in identical words, and a written answer to the contract questions. That gives you comparable evidence instead of comparable marketing, and it takes an afternoon rather than a month.",
  },
  {
    q: "How many vendors should we look at?",
    a: "Three is usually right and five is the practical maximum. Beyond that the comparison stops being a comparison, because nobody on your side has the attention left to hold five sets of answers in their head. Do the narrowing on published evidence before you sit through a single demonstration: who serves books your size, who serves your asset class, who publishes a status on the things you need. That reading is faster than a call and nobody is selling to you while you do it.",
  },
  {
    q: "Who should not be in the room?",
    a: "Anybody who cannot be overruled and anybody who will not be affected. A selection with too many observers produces consensus rather than a decision, and consensus in software selection reliably picks the option that offends nobody. The people who must be there are the ones whose day changes: the operator, the credit officer, the collector, the controller. The people who must be consulted are your auditor and your lender, because both will have an opinion later whether or not you asked for one now.",
  },
  {
    q: "What is the most common mistake?",
    a: "Comparing feature lists. Every platform in this category records the same nouns, and a feature list will tell you that all three finalists do document management, risk monitoring and reporting. It will not tell you that one of them detects duplicates only within a single client file, or that one of them shows a zero when a credit source is unavailable. The distinctions that matter are all at the level of how a capability behaves, and they only surface when you test the behaviour.",
  },
  {
    q: "Should price be part of the shortlist decision?",
    a: "Not for the shortlist, and firmly yes for the final one. Price at the shortlist stage narrows on the wrong axis, because the cheapest option and the most expensive option in this market can be within a rounding error once you count the person whose job exists because the software cannot do something. Get the three year picture at the end, including implementation, the internal time, the reporting somebody rebuilds and any tier you would need to upgrade to in order to leave.",
  },
  {
    q: "What if we are not sure we should move at all?",
    a: "Then run the first two weeks anyway and stop there. Requesting your extract, testing whether it answers three basic questions, and writing down what your operation actually requires costs you nothing but time and leaves you better informed about your own book than you were. Plenty of operations run that exercise and decide to stay. The ones who do at least now know what their incumbent holds and what it does not, which is worth having before the next renewal conversation.",
  },
];

export default function HowToChoosePage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "How to choose factoring software",
          description:
            "A working method for selecting factoring, asset based lending or purchase order funding software: the committee, the requirements, the tests, the contract clauses and the scoring.",
          path: "/compare/how-to-choose",
        })}
      />

      <PageHero
        trail={[
          { name: "How we compare", path: "/compare" },
          { name: "How to choose", path: "/compare/how-to-choose" },
        ]}
        eyebrow="Running the selection"
        title="How to choose factoring software."
        lede={
          <>
            <p>
              Written for the principal, controller or operations lead of a funding business who has been
              told to pick a platform and has never run a software selection before. Most people in this
              industry do this once or twice in a career, against vendors who do it every week. That
              asymmetry is the whole problem, and it is fixable in an afternoon.
            </p>
            <p>
              This is the method: who has to be in the room, how to write down what you need before anybody
              demonstrates anything, what to test rather than what to ask, the contract language that
              decides how much your next move costs, and how to score answers without a spreadsheet
              flattering the vendor with the best presenter. Use it on us as readily as on anyone else.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Put the tests to us" }}
        secondaryCta={{ href: "/compare", label: "What to compare on" }}
        aside={<FirstFortnightCard />}
      />

      <ProseSection
        eyebrow="Before anything else"
        title="You are not choosing features. You are choosing what your operators do at nine in the morning."
        aside={
          <Card accent="accent">
            <Eyebrow tone="signal">The framing that saves a quarter</Eyebrow>
            <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              Write one sentence before you speak to anybody: what has to be different in twelve months for
              this to have been worth doing.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              If the honest answer is that the incumbent is expensive, you are running a renegotiation and
              not a selection. Both are legitimate. They are different projects and they should not be
              confused for each other.
            </p>
          </Card>
        }
      >
        <p>
          Every platform in this market records the same facts. Clients, debtors, invoices, schedules,
          advances, reserves, cash, chargebacks. A feature list will tell you that all three of your
          finalists handle those, and it will be true, and it will be useless.
        </p>
        <p>
          <strong>The differences are one level down, in how a capability behaves.</strong> Two systems both
          say they detect duplicate invoices. One does it within a client file. One does it across the whole
          book, under several spellings of the same debtor name. Both rows say duplicate detection. Only one
          of them describes what you are actually exposed to, and no feature comparison will separate them.
        </p>
        <p>
          <strong>So the object of a selection is not to collect claims. It is to produce evidence.</strong>{" "}
          Six tests, put to every vendor in identical words, run live rather than described. That is the
          entire method and everything below is scaffolding around it.
        </p>
        <p>
          <strong>Decide what you are actually optimising for.</strong> More book with the same headcount is
          a different requirement from finding out about a problem sooner, which is different again from
          satisfying a lender who has started asking harder questions. Most operations want all three and
          rank them differently under pressure. Rank them now, in writing, while nobody is in the room
          selling to you.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The committee"
            title="Five people, and what each of them will block."
            lede="Software selections in this industry fail at the people layer far more often than the technical one. Name these five in week one and give each of them a standing slot, because every one of them can stop the project late and expensively."
          />
          <div className="mt-12">
            <DataTable
              caption="Who belongs on a factoring software selection, and what each one decides"
              head={["Who", "What they decide, and what they will block"]}
              rows={[
                [
                  "The operator who funds",
                  "Decides whether the day is faster or slower. Blocks late, quietly, by not using it. This is the person whose keystroke habits change, and no amount of executive sponsorship survives their verdict in month three. Put them in every demonstration and let them drive the mouse.",
                ],
                [
                  "The credit officer",
                  "Decides whether a conclusion is defensible. Blocks anything they cannot explain to a lender. Their test is the evidence one: pick a number on a screen and ask what proves it, then count the movements to get there.",
                ],
                [
                  "The controller",
                  "Decides whether the book ties. Blocks at the reconciliation, which is the most expensive place to be blocked because it is the last gate before cutover. Bring them in at requirements, not at parallel running, and give them the reconciliation template before you sign anything.",
                ],
                [
                  "The collector",
                  "Decides whether the notes and the promise history survive. Blocks by keeping a private spreadsheet, which is invisible until the day they leave. Ask them what they keep outside the system today and why. The answer is a requirement.",
                ],
                [
                  "Whoever owns the lender relationship",
                  "Decides what your facility reporting has to look like on the first Monday after cutover. Blocks by discovering in week nine that a covenant certificate has a prescribed layout. Ask them for the external reporting deadlines before you set a cutover date.",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[14px] leading-[1.6] text-[var(--fg-subtle)]">
            Your auditor and your counsel are consulted rather than seated. Both will have a view later
            whether or not you invite one now, and the cheap version of that conversation is a short call in
            week two rather than a finding in month six.
          </p>
        </Container>
      </Section>

      <StepList
        eyebrow="The requirements note"
        title="Write it in an afternoon, before anybody demonstrates anything."
        lede="Not a request for proposal. A two page note you write for yourselves, which exists so that four people can disagree about what matters before a vendor is in the room to resolve the disagreement in their own favour."
        steps={[
          {
            label: "Today",
            title: "Describe your operation as it actually runs, including the parts that embarrass you",
            body: "The spreadsheet that rebuilds the borrowing base. The verbal fee arrangement nobody wrote down. The report one person runs every Monday that nobody else understands. These are requirements whether or not they are documented, and a selection that pretends they do not exist discovers them during implementation at ten times the cost.",
          },
          {
            label: "Volume",
            title: "State the shape of your book, not just the size",
            body: "Client count, invoice count, average invoice size, asset classes, whether you run recourse, non recourse or both, how much is transportation, whether you carry purchase order funding or reverse factoring. A platform that is excellent at two thousand small freight invoices a day and a platform that is excellent at forty large manufacturing schedules are not the same platform, and both will tell you they handle your book.",
          },
          {
            label: "Must",
            title: "Separate what you must have from what you would like, and be ruthless",
            body: "Most requirements lists are ninety percent would like. The must column is usually short: the things a regulator, a lender or an auditor requires, and the things without which somebody cannot do their job on the first day. Everything else is a preference, and preferences should never decide a shortlist.",
          },
          {
            label: "Never",
            title: "Write down what would disqualify a vendor outright",
            body: "This is the column nobody writes and the one that saves the most time. Automation that can release funds without a named human. A platform that cannot produce your facility reporting. A contract with no export clause. Write your disqualifiers down before you meet anybody charming.",
          },
          {
            label: "Extract",
            title: "Request your data from the incumbent, in writing, on the day you start",
            body: "This is the only step with a turnaround you do not control, so it goes first and runs in parallel with everything else. Ask what you receive, in what format, on what timetable and under which clause. The answer shapes every date in your plan, and it is a different answer when you ask as a customer in good standing than when you ask during a notice period.",
          },
          {
            label: "Owner",
            title: "Name one person who decides, and give them the authority to overrule the committee",
            body: "Not a steering group. One name. Selections run by consensus converge on the option that offends nobody, which in this category means the one with the best presenter and the least uncomfortable answers. The owner's job is to hold the disqualifier list when the demonstrations get persuasive.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="The demonstrations"
        title="Six things to run, not to ask about"
        lede="Put these to every vendor in identical words, in a live environment, with your own people driving. Each one takes a few minutes and each one is difficult to fake without the underlying capability. These are set out in full on the comparison page."
        tone="sunken"
        columns={3}
        items={[
          {
            title: "Show me what changed",
            body: "On a book the system saw for the first time this morning. A platform that produces a confident change figure from a single snapshot has invented a yesterday, and it will do that on your book too.",
          },
          {
            title: "Turn a source off",
            body: "Ask what appears when a credit source or a bank feed is unavailable. You want the source named and the state declared. You do not want a zero, a blank, or yesterday's number presented as current.",
          },
          {
            title: "Approve your own request",
            body: "Live, on the presenter's own account. Watch whether the refusal names the policy and whether the attempt is recorded. Then ask which roles can configure that rule away.",
          },
          {
            title: "Prove a number",
            body: "Pick any figure on any screen and ask what supports it. Count the movements to reach the underlying records and note whether you lose the conclusion on the way.",
          },
          {
            title: "One obligor, several clients",
            body: "Within a client file every platform can do this. Across the book, under multiple spellings of the same debtor name, is the question that describes your actual exposure.",
          },
          {
            title: "Re price our settled invoices",
            body: "The most informative request in this category and the one most often deflected. It tests the conversion process, the fee engine and the willingness to show you a difference list before you sign.",
          },
        ]}
      />

      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="Claims"
            title="Four things every vendor asserts, and how to check each one."
            lede="Assertions in this category are cheap to make and rarely checked, so they accumulate. None of what follows is an accusation about anybody. It is the set of questions that separates a claim from a fact, and it should be put to every vendor on your list in the same words, including us."
          />
          <div className="mt-12">
            <DataTable
              caption="How to verify the four claims vendors make most often"
              head={["The claim", "What to ask for"]}
              rows={[
                [
                  "A security certification, or a badge on the website",
                  "Ask for the report, not the logo. Then ask three questions about it: what is in scope, what period does it cover, and who signed it. A badge is a picture. A report is a document with a scope section, and the scope section is the part that matters.",
                ],
                [
                  "Certification inherited from the cloud provider",
                  "The most common misunderstanding in this category, and it is worth stating plainly: a hosting provider's certification covers the hosting provider's infrastructure. It says nothing about the application running on it, who at the vendor can reach your data, or how access is controlled. If a vendor's certification answer is the name of a cloud platform, they have answered a different question. Ask again for a report in the vendor's own name.",
                ],
                [
                  "A customer count or a daily volume figure",
                  "Ask for three references you can telephone, in your asset class and near your size, and ask to speak to the controller rather than the person who signed. A number on a website costs nothing to write. A reference who will take a call from a stranger is the only version of that claim that carries information.",
                ],
                [
                  "Years of experience in the industry",
                  "Ask two separate questions: when was the company formed, and when did this product first process a live invoice. Those are different dates and both are different from how long any individual has worked in the field. All three are legitimate things to have. Combining them into one number is where it stops being legitimate.",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[14px] leading-[1.6] text-[var(--fg-subtle)]">
            Our own answers, so you can run the same test here. We hold no security certification today and
            the{" "}
            <InlineLink href="/platform/security">security page</InlineLink> says so with the programme and
            the target date stated. We publish no customer count and no daily volume figure anywhere on this
            site. The company was formed in 2002 and has been building software for this industry since. Ask us
            for references and we will give you names.
          </p>
        </Container>
      </Section>

      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="The contract"
            title="Six clauses that decide what your next move costs."
            lede="We read the published terms of three competitors while writing the migration pages on this site. None of them contained an export obligation, and one of them did not mention customer data at all. That is the normal state of this industry, which is exactly why these questions belong in your process rather than your lawyer's inbox in week eleven."
          />
          <div className="mt-12">
            <DataTable
              caption="Contract questions to settle before signature, and why each one matters"
              head={["Ask for the clause", "Why it decides the cost of your next move"]}
              rows={[
                [
                  "Who owns the data you put in",
                  "Some agreements say plainly that you do. Many say nothing at all. A silent contract is not the same as a bad one, but you should know which you are signing, and the answer takes thirty seconds to find once you look.",
                ],
                [
                  "What you receive on exit, in what format, by when",
                  "Ownership without a delivery mechanism is a principle rather than a plan. Ask specifically whether it includes closed history, cash application detail, notes, documents with their linkage, and the audit trail, or only open balances and master data.",
                ],
                [
                  "Which plan tier your export sits on",
                  "This is not hypothetical. At least one platform in this market publishes programmatic access as a higher tier entitlement, which means the route to your own records can be a commercial conversation. Establish it before you are visibly leaving rather than after.",
                ],
                [
                  "How long you keep read access after termination",
                  "Disputes reopen and examiners ask about periods that predate whatever you move to. On a hosted platform you cannot keep a copy running yourself, so continued read access is a term to negotiate while you still hold negotiating position.",
                ],
                [
                  "What happens if the vendor is acquired or ceases trading",
                  "A fair question at any size, and one to put to large vendors as readily as small ones. Products get discontinued by companies with a thousand staff. The answer belongs in the contract rather than in a reassurance, and headcount is not the answer.",
                ],
                [
                  "What the price does at renewal",
                  "Ask for the escalation mechanism in writing, and ask what happens to your rate if your volume falls as well as if it rises. A book that shrinks in a downturn and a subscription that does not is a combination people discover at the worst possible moment.",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <ProseSection
        eyebrow="Scoring"
        title="How to compare answers without the spreadsheet lying to you."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The weighting trap</Eyebrow>
            <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              A hundred row scoring matrix with weights feels rigorous and is mostly theatre. Rows are
              easier to score when they are trivial, so trivial rows accumulate and the total drifts toward
              whoever has the longest feature list.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              Score few things, score them from what you watched rather than what you were told, and keep
              the disqualifier list outside the arithmetic entirely.
            </p>
          </Card>
        }
      >
        <p>
          <strong>Disqualifiers are not scored. They are gates.</strong> A vendor either clears your never
          list or they are out, and no amount of strength elsewhere buys a pass. Putting a disqualifier into
          a weighted matrix is how it gets outvoted by nine rows about reporting.
        </p>
        <p>
          <strong>Score the six tests, out of what you observed.</strong> Not the answer to a question, the
          behaviour on a screen. Three points if it did the thing cleanly, one if it did it with help from
          the presenter, zero if it was described rather than shown. Do it in the room, before the
          impression fades, and have each attendee score independently before anybody speaks.
        </p>
        <p>
          <strong>Record the shape of the answer, not just its content.</strong> The most useful signal in a
          vendor process is what happens when you ask something inconvenient. An answer that arrives as a
          document is worth more than a better sounding answer that arrives as reassurance, and a vendor who
          says a thing is planned rather than available has told you something important about every other
          claim they have made.
        </p>
        <p>
          <strong>Write down what each vendor refused to do.</strong> Then compare those lists rather than
          the capability lists. A vendor with nothing on it either has an unusually complete product or has
          not been asked a hard enough question, and you will find out which within a fortnight of signing.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Cost"
            title="The three year number, and the four things people leave out of it."
            lede="Ask for it at the end, never at the shortlist. Comparing licence cost early narrows on the wrong axis, because the cheapest and the most expensive option in this market can converge once the rest of the picture is in."
          />
          <div className="mt-12">
            <DataTable
              caption="What belongs in a three year cost comparison"
              head={["Line", "What people miss"]}
              rows={[
                ["Subscription", "Straightforward, and the only line most comparisons contain. Ask how it is metered: per user, per client, by volume, and what happens at each threshold."],
                ["Implementation and conversion", "Whether it is included, capped or on time and materials. A free migration is a real commercial position and it is worth asking what it covers, because entire book means different things to different vendors."],
                ["Your own people's time", "The largest omitted line by a distance. The controller's reconciliation, the discovery interviews, the parallel period, the retraining. It is not invoiced, and it is the reason projects overrun."],
                ["The reports somebody rebuilds", "Report definitions do not convert on any platform. Sorting them into read, required by a third party, and abandoned is a half day exercise that tells you the real number."],
                ["The headcount the incumbent requires", "The line that runs the other way. Count the person whose job exists because the current system cannot do something. That cost is already being paid and it belongs in the comparison."],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[14px] leading-[1.6] text-[var(--fg-subtle)]">
            Our own position on what drives cost is written out on the{" "}
            <InlineLink href="/platform/pricing">pricing page</InlineLink> rather than held back for a call.
            Ask every vendor for the equivalent.
          </p>
        </Container>
      </Section>

      <FaqBlock items={FAQS} title="What people ask when they have never run one of these" />

      <RelatedPages
        links={[
          { href: "/compare", label: "How we compare", note: "Recording systems against decision systems, by capability." },
          { href: "/migrate", label: "Migration overview", note: "What a conversion involves once the choice is made." },
          { href: "/platform/pricing", label: "Pricing", note: "What drives cost, including the cost of the system you run today." },
          { href: "/platform/briefings", label: "Briefings", note: "What the nine in the morning question actually looks like answered." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "The test a credit officer should run in every demonstration." },
          { href: "/demo", label: "Request a demonstration", note: "Run the six tests on us, in your own words." },
        ]}
      />

      <CtaBand
        title="Run the tests on us first, while nothing is at stake."
        body="We will sit through the six demonstrations with your own people driving, answer the contract questions in writing, and tell you where we are not the right answer. If that produces a list you take to another vendor, the list is still yours."
        primary={{ href: "/demo", label: "Book a working session" }}
        secondary={{ href: "/compare", label: "Read the comparison first" }}
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

/* ------------------------------------------------------------------ visual */

function FirstFortnightCard() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <p className="u-label text-[var(--fg-subtle)]">Weeks one and two &middot; Before any vendor</p>
          <Status kind="info" label="Costs nothing" />
        </div>

        <div className="p-5">
          <p className="text-[15px] leading-[1.6] text-[var(--fg-muted)]">
            Everything here is worth doing even if you decide to stay exactly where you are.
          </p>

          <ol className="mt-4 space-y-4">
            {[
              [
                "01",
                "Request your extract from the incumbent, in writing.",
                "The only step with a turnaround you do not control. Start it before you have a shortlist.",
              ],
              [
                "02",
                "Write the two page requirements note, including the never column.",
                "Four people disagreeing now is far cheaper than four people disagreeing in front of a vendor.",
              ],
              [
                "03",
                "Name the one person who decides.",
                "Not a steering group. Selections run by consensus pick the option that offends nobody.",
              ],
            ].map(([tag, q, note]) => (
              <li key={tag} className="border-l-2 border-[var(--line-strong)] pl-4">
                <p className="u-label text-[var(--signal)]">{tag}</p>
                <p className="mt-1 text-[14px] font-semibold leading-[1.45]">{q}</p>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-[var(--fg-subtle)]">{note}</p>
              </li>
            ))}
          </ol>

          <p className="u-label mt-5 border-t border-[var(--line)] pt-4 text-[var(--fg-subtle)]">
            Whatever you decide, the note is yours
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[12px] leading-[1.5] text-[var(--fg-subtle)]">
        The first fortnight of a selection, in the order that makes the rest of it cheap. It is a checklist,
        not a product screen.
      </figcaption>
    </figure>
  );
}
