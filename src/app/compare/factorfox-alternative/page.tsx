import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  ProblemSolution,
  FeatureGrid,
  StepList,
  ProseSection,
  FaqBlock,
  RelatedPages,
  CtaBand,
  Card,
  Section,
  Container,
  Eyebrow,
} from "@/components/page-parts";
import { pageMeta } from "@/lib/seo";

/* Written for the person typing "FactorFox alternative" into a search box.
   Two people type it: somebody evaluating us against a shortlist, and somebody
   already running us who is wondering about leaving. A page that only speaks to
   the first one reads as marketing and loses to a directory listing. The bet
   here is that the most useful page wins the query, which means the honest
   section about who we are wrong for has to be real, and near the top. */

export const metadata: Metadata = pageMeta({
  title: "FactorFox alternative: the honest version",
  description:
    "Comparing FactorFox against a shortlist, or thinking about leaving. What we are, who we are the wrong answer for, and the questions to ask every platform.",
  path: "/compare/factorfox-alternative",
  intent: "brand",
  target: "FactorFox alternative",
});

/* Breadcrumbs prepends the FactorFox root itself and emits the schema, so this
   trail starts at the section and the page does not repeat either. */
const TRAIL = [
  { name: "How we compare", path: "/compare" },
  { name: "FactorFox alternative", path: "/compare/factorfox-alternative" },
];

const FAQS = [
  {
    q: "Who are the main alternatives to FactorFox?",
    a: "They fall into four groups rather than a list. Long established recording platforms with the largest installed bases in North America. Enterprise asset based lending and receivables platforms sold to banks and large non bank lenders. Transportation specialists built around freight, carriers and rate confirmations. And newer cloud entrants, some only a few years old. Each group is the right answer for a different kind of operation, and this page says which is which rather than pretending we win every comparison.",
  },
  {
    q: "When is FactorFox the wrong choice?",
    a: "When you want a consumer facing loan origination front door, when you are a business seeking funding rather than an institution providing it, when your decision rests on something we mark as planned rather than available, when you need an application listed on a public marketplace rather than a controlled release, and when you want a system that will let one person move money alone. That last one is not a gap we intend to close.",
  },
  {
    q: "What does FactorFox actually do differently?",
    a: "The intelligence is part of the architecture rather than a model attached to the outside of it, and it is not tied to any one model, so a model can be evaluated, routed around during an outage or replaced without a migration project. Underneath it is a real double entry general ledger rather than a transaction table, which is what lets a conclusion open onto the evidence that produced it. We have been building for this industry since 2002.",
  },
  {
    q: "How much does FactorFox cost?",
    a: "Pricing is published as a model rather than as a number, because the number depends on your book, your volume and your modules. What we will say on a first call is the shape of it and the range you are likely to land in, rather than making you sit through two meetings before anybody mentions money. The pricing page sets out what factoring software actually costs and what tends to be missing from a quoted figure.",
  },
  {
    q: "Can I get my data out of FactorFox?",
    a: "Ask us that question directly, and ask every vendor on your shortlist the same one, in the first meeting rather than the fifth. What you want is the answer in your contract rather than on a marketing page, including what format, on what notice and at what cost. The speed and specificity of the answer tells you more about a platform than any feature comparison will.",
  },
  {
    q: "Is FactorFox only for transportation factoring?",
    a: "No. FactorFox serves general factoring across multiple verticals, including transportation, staffing, healthcare, construction, manufacturing and distribution, as well as asset based lending, purchase order funding and reverse factoring. Transportation is a strong vertical for us rather than the whole of it.",
  },
];

export default function FactorFoxAlternativePage() {
  return (
    <>
      <PageHero
        trail={TRAIL}
        eyebrow="FactorFox alternative"
        title="Looking for a FactorFox alternative. Here is the honest version."
        lede={
          <>
            <p>
              Two people type that into a search box. Somebody weighing us against a shortlist, and
              somebody already running FactorFox who is wondering whether to stay. This page is written
              for both, and it does not pretend those are the same question.
            </p>
            <p>
              We are not going to tell you that we are the right answer for everybody, because it is not
              true and you would know it by the second paragraph. So: what we are, who we are the wrong
              answer for, and the five questions that actually separate one platform in this category
              from another. Ask them of us too.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Bring your own book" }}
        secondaryCta={{ href: "/compare/how-to-choose", label: "How to run the selection" }}
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The short version</Eyebrow>
            <dl className="mt-5 divide-y divide-[var(--line)]">
              {[
                ["Building since", "2002, for the institutions that fund"],
                ["Architecture", "AI native and model agnostic, not tied to one model"],
                ["The core", "A real double entry general ledger"],
                ["Accounting", "QuickBooks Online and Xero, both available"],
                ["Footprint", "Customers on five continents"],
                ["How you evaluate it", "A demonstration on a slice of your own book"],
              ].map(([t, d]) => (
                <div key={t} className="py-3 first:pt-0 last:pb-0">
                  <dt className="u-label text-[var(--fg-subtle)]">{t}</dt>
                  <dd className="mt-1 text-[14.5px] leading-[1.5]">{d}</dd>
                </div>
              ))}
            </dl>
          </Card>
        }
      />

      {/* The honest section, deliberately before any pitch. */}
      <ProblemSolution
        eyebrow="Start here"
        title="Six situations where FactorFox is the wrong answer."
        lede="Every vendor has a list like this. Most of them will only read it to you in the third meeting, once you have spent a month. Ours is on the page that people who are shopping alternatives actually land on."
        problemHeading="If this is you"
        responseHeading="Then we are not your answer"
        rows={[
          {
            problem: "You want a consumer facing loan origination front door",
            response:
              "We build for the institution doing the funding, not for the business seeking it. If your requirement is an applicant portal with a credit decision at the end, that is a different product category and you should buy from it.",
          },
          {
            problem: "You are a business looking to factor your invoices",
            response:
              "We are not a factoring company and we do not compete with our customers for their clients. If you need funding, you want a factor, and several of them run on FactorFox.",
          },
          {
            problem: "Your decision rests on something we call planned",
            response:
              "Our integrations register marks every connection as available, supported, planned or in development, and the words mean what they say. If the thing that closes the deal is marked planned, do not buy on it. Buy on what is available today.",
          },
          {
            problem: "You need an application listed on a public marketplace",
            response:
              "Several of our integrations are controlled release, which means a contract and a conversation rather than a button in an app store. If procurement requires a public listing, that is a real constraint and it is ours, not yours.",
          },
          {
            problem: "You want one person to be able to move money alone",
            response:
              "The platform can stop money on its own authority. Only a named human can let it through, and nobody approves their own release. Some operations find that friction. It is deliberate, it is not configurable away, and it is the main reason to choose us or to rule us out.",
          },
          {
            problem: "You are buying purely on the lowest line item",
            response:
              "There is cheaper software in this market and there always will be. If the evaluation ends at the monthly number, somebody else wins it, and we would rather you found that out in week one than in week nine.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="What we are"
        title="The four things that are actually different"
        lede="Not a feature list. These are the claims that separate us, each one written so you can go and check it rather than take it."
        columns={2}
        items={[
          {
            title: "The intelligence is part of the architecture",
            body: "Almost anyone can connect a model to software now. The question that separates anything is where the intelligence sits relative to the ledger. Attached to the software it can summarise and draft. Inside the operating system it can adjudicate, because it reads the same records and applies the policy version that was in force.",
          },
          {
            title: "Model agnostic, on purpose",
            body: "We are not built around any one model. When a model has an outage the platform routes and records that it did. When a better one ships it is evaluated and adopted rather than migrated to. We are not betting on which model wins. We are betting there will always be a better one.",
          },
          {
            title: "A real double entry general ledger",
            body: "Fundings, fee accruals, reserve movements and releases, chargebacks, repurchases and cash application all post as balanced entries against the client, the schedule and the obligor. That is why the client statement agrees with your ledger and why an audit packet assembles from the entries rather than from a report.",
          },
          {
            title: "Every conclusion carries its evidence",
            body: "A score you cannot open is a score you cannot defend, to a credit committee, a lender or an examiner. Each briefing answer links to the invoices, documents, payment behaviour and contract clauses behind it, with the policy version and the confidence stated.",
          },
        ]}
      />

      <StepList
        eyebrow="How to judge any of them"
        title="Five questions that separate one platform from another"
        lede="These work on us and on everybody else on your shortlist. None of them can be answered with a slide, which is the point of asking them."
        steps={[
          {
            label: "One",
            title: "Where does the intelligence live?",
            body: "Ask whether the AI reads the ledger or reads a copy of it. A system that reads an export can describe. A system inside the ledger can decline. The follow up that settles it: show me a conclusion, then open the records behind it without leaving the screen.",
          },
          {
            label: "Two",
            title: "What happens the week a better model ships?",
            body: "Ask which model they use. If the answer is a specific named model, ask what changes for you when it is superseded, and whether that is an evaluation or a roadmap item. Ask what the platform does during an outage at that provider, and whether it records that it routed.",
          },
          {
            label: "Three",
            title: "What does the ledger actually record?",
            body: "Ask to see a reserve release, a chargeback and a misapplied payment being corrected. Ask whether each one is a balanced entry with an actor beside it, or a field being overwritten. This is the question that separates a general ledger from a transaction table, and almost nobody asks it.",
          },
          {
            label: "Four",
            title: "Who can release money, and what will the system refuse?",
            body: "Ask somebody to approve their own funding request during the demonstration. Ask what happens when an external credit source is unavailable, and whether the platform reports a stale number or names the source as dark. The interesting part of any of these systems is what it declines to do.",
          },
          {
            label: "Five",
            title: "How do you get your data out?",
            body: "Ask in the first meeting rather than the fifth, and ask for the answer in the contract rather than on a web page. In what format, on what notice, at what cost, and does it include the documents and the audit trail or only the tables. Ask us the same question. How fast a vendor answers it tells you what kind of relationship you are entering.",
          },
        ]}
      />

      <ProseSection
        eyebrow="If you are already on FactorFox"
        title="You are reading this because something is not working. Say so."
        tone="sunken"
        aside={
          <Card>
            <Eyebrow>Before you go to market</Eyebrow>
            <ul className="mt-4 space-y-3 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
              <li>Write down the three things that are actually costing you time, not the feature you were told about.</li>
              <li>Ask us what it would take to fix them, and how long, in writing.</li>
              <li>Ask for your data export terms, in writing, whatever you decide.</li>
              <li>Then run the same five questions on us and on whoever else you are looking at.</li>
            </ul>
          </Card>
        }
      >
        <p>
          A customer who is searching for an alternative to their own system has usually stopped raising
          it internally, which means the problem has already been true for a while. We would rather hear
          it directly, and we would rather hear it early enough to do something about it than read it in
          a notice letter.
        </p>
        <p>
          We are not going to promise you on a marketing page what your contract has to say about your
          data. What we will say is that the question belongs in the first conversation, ours included,
          and that a vendor who is slow to answer it is telling you something.
        </p>
        <p>
          If the answer at the end is still that you should be somewhere else, that is a legitimate
          outcome. A conversion done properly beats a renewal done resentfully, and we publish the
          conversion guides for the other direction too.
        </p>
      </ProseSection>

      {/* The hub. Somebody comparing us against a named system gets sent to the
          page written for that system, which is also what carries link weight
          to the four conversion guides that already rank. */}
      <Section bordered>
        <Container>
          <Eyebrow tone="signal">Comparing us with something specific</Eyebrow>
          <h2 className="text-section-lg mt-4 max-w-[28ch]">
            If you already know what you are weighing us against.
          </h2>
          <p className="mt-6 max-w-[62ch] text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
            These are written for somebody planning a conversion in either direction: what the data model
            on the other side actually carries, what it does not, what breaks in the move, and what to
            settle before anybody gives notice. They are conversion guides rather than sales pages, which
            is why they are useful even if you do not end up here.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {[
              ["FactorSoft", "/migrate/factorsoft", "The largest installed base in North America, mapped field by field."],
              ["WinFactor", "/migrate/winfactor", "Where your book sits, and what the published terms commit to."],
              ["FactorCloud", "/migrate/factorcloud", "Which plan tier holds your export path, and what the ledger structure implies."],
              ["FactorView", "/migrate/factorview", "Who holds the database, and what to establish before you give notice."],
              ["FactorAvenue", "/migrate/factoravenue", "What the published terms commit to on exit, and what they leave to you."],
            ].map(([name, href, note]) => (
              <Link key={href} href={href} className="group bg-[var(--bg-raised)] p-6 transition-colors hover:bg-[var(--bg)]">
                <h3 className="flex items-center gap-2 text-[16px] leading-[1.3]">
                  <span>{name}</span>
                  <span aria-hidden="true" className="text-[var(--signal)] opacity-0 transition-opacity group-hover:opacity-100">
                    &rsaquo;
                  </span>
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--fg-muted)]">{note}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-[14px] leading-[1.6] text-[var(--fg-subtle)]">
            Running something not listed here, tell us on the demonstration request and we will map it
            before the call rather than during it.
          </p>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="The four kinds of alternative"
        title="Which group is genuinely right for you"
        lede="Categories rather than a scored table, because a table built by one vendor about other vendors is an argument dressed as research. Test these against whatever shortlist you already have."
        tone="sunken"
        columns={2}
        items={[
          {
            title: "Established recording platforms",
            body: "The largest installed bases, decades of accumulated process, and the deepest bench of people who already know them. Right for you if your operation is stable, your team is trained, and your problem is not that the software cannot tell you anything, only that it is dated. They record accurately. They will not decide.",
          },
          {
            title: "Enterprise receivables and ABL platforms",
            body: "Sold to banks and large non bank lenders, with the governance, procurement posture and price to match. Right for you if you are inside a regulated institution with a formal vendor process and an engineering function to own the integration. Overbuilt and overpriced for an operation of ten people.",
          },
          {
            title: "Transportation specialists",
            body: "Built around freight, carriers, rate confirmations and load boards, and genuinely deeper than a general platform inside that lane. Right for you if you fund nothing but trucking and never intend to. A constraint rather than a feature if you already run staffing or healthcare paper alongside it.",
          },
          {
            title: "Newer cloud entrants",
            body: "Modern interfaces, quick to demonstrate, and often the best looking thing on your shortlist. Ask how long the accounting core has existed, ask the ledger question above, and ask who has been running it at your volume for two years. Sometimes the answer is good. Ask anyway.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="Questions people ask when they are shopping" />

      <RelatedPages
        links={[
          { href: "/compare", label: "How we compare", note: "Recording systems against decision systems, in categories" },
          { href: "/compare/how-to-choose", label: "How to choose", note: "Running the selection, start to signature" },
          { href: "/platform/ai-native", label: "AI native", note: "Where the intelligence lives, and why it is model independent" },
          { href: "/platform/pricing", label: "Pricing", note: "What factoring software actually costs" },
          { href: "/migrate", label: "Migrating to FactorFox", note: "What moves, what breaks, how long it takes" },
          { href: "/platform/security", label: "Security and control", note: "Who can do what, and what the platform refuses" },
        ]}
      />

      <CtaBand
        title="Test it on your own book, not on a demonstration set."
        body="A demonstration on generic sample data tells you nothing about any platform, ours included. Show us a slice of your portfolio and we will show you what the first briefing says about it, with the evidence attached, and you can run the five questions on us in the same hour."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/compare/how-to-choose", label: "Run the selection properly" }}
      />
    </>
  );
}
