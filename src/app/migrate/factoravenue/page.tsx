import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  ProseSection,
  FeatureGrid,
  StepList,
  FaqBlock,
  RelatedPages,
  CtaBand,
  DataTable,
  Card,
  Section,
  Container,
  Eyebrow,
} from "@/components/page-parts";
import { pageMeta } from "@/lib/seo";

/* Everything on this page is read from FactorAvenue's own published pages and
   is checkable by anybody in a browser. Where a document is silent, the page
   says the document is silent rather than saying the thing does not exist.
   That distinction is the whole discipline here: an absent clause is a
   question to ask, not an accusation to make. Checked 6 September 2026. */

export const metadata: Metadata = pageMeta({
  title: "FactorAvenue alternative and conversion guide",
  description:
    "Planning a move off FactorAvenue: what the published terms commit to on exit, what the platform claims and does not claim, and what to settle before notice.",
  path: "/migrate/factoravenue",
  intent: "migration",
  target: "FactorAvenue alternative",
});

const TRAIL = [
  { name: "Migrating to FactorFox", path: "/migrate" },
  { name: "FactorAvenue", path: "/migrate/factoravenue" },
];

const FAQS = [
  {
    q: "Do we own our data on FactorAvenue?",
    a: "Their terms say so. Section 7 of the published terms and conditions states that you retain ownership of your business data and that the platform processes it solely to deliver the service. Ownership and retrieval are different questions though. Ownership tells you the data is yours. It does not tell you the format you will get it in, how long you have to collect it, or who does the work. Those are the ones to settle in writing.",
  },
  {
    q: "What happens to our data when we leave?",
    a: "The published terms say only that access to the platform will cease on termination. The separate refund and cancellation policy advises customers to export or retrieve their data prior to termination and states that FactorAvenue is not responsible for data loss after account deactivation. Neither document commits to a format, a retention window or any assistance. That is not unusual in this category, and it is exactly why the question belongs in writing before you give notice rather than after.",
  },
  {
    q: "Is there an API we can extract through?",
    a: "Their integrations page states that FactorAvenue offers REST based APIs with secure authentication, webhook support and structured request validation. We could not find developer documentation, an API reference or a published specification anywhere on the site as at 6 September 2026. So the API is claimed but its scope is not documented publicly. Ask specifically whether it supports bulk historical extraction, or whether it is built for live integration only. Those are very different things when you are leaving.",
  },
  {
    q: "Does FactorAvenue run a general ledger?",
    a: "We could not find a claim of a general ledger, double entry accounting or a dual ledger anywhere on their site. What is described is cash posting, allocation and reconciliation, and the one occurrence of the phrase ledger entries describes what is synchronised into QuickBooks rather than a ledger the platform maintains. Whether that matters depends on how you close your period today and where your statements come from.",
  },
  {
    q: "How long does a conversion off FactorAvenue take?",
    a: "The technical work is rarely what sets the date. Notice periods, period close, the completeness of the first data delivery and how much of your operation lives in undocumented practice are what actually drive it. A realistic range for a mid sized book is eight to sixteen weeks from decision to running in parallel, and the first extract is the milestone that tells you which end of that range you are at.",
  },
  {
    q: "Are you going to tell us FactorAvenue is bad software?",
    a: "No, and we would not be a useful source if we did. They are a credible operator with a broad feature surface and one of the better content operations in this category. This page is about what is published and what is not, because that is what determines how difficult your exit is, and it is the part nobody writes down until they need it.",
  },
];

export default function FactorAvenuePage() {
  return (
    <>
      <PageHero
        trail={TRAIL}
        eyebrow="FactorAvenue alternative"
        title="Moving off FactorAvenue starts with reading what you actually signed."
        lede={
          <>
            <p>
              Written for somebody who has decided to look, or who wants to know what leaving would
              involve before they need to. Everything here is read from FactorAvenue&rsquo;s own published
              pages and you can check every line of it in a browser.
            </p>
            <p>
              Where their documents are silent, this page says they are silent. An absent clause is a
              question to put to your vendor, not evidence of anything, and we are not going to dress one
              up as the other.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Plan your conversion with us" }}
        secondaryCta={{ href: "/compare/how-to-choose", label: "Run the selection properly" }}
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">What is published, as at 6 September 2026</Eyebrow>
            <dl className="mt-5 divide-y divide-[var(--line)]">
              {[
                ["Operating entity", "Pysar Financial Technologies LLC, per their terms"],
                ["Terms and conditions", "Published, effective 2 February 2026, thirteen sections"],
                ["Governing law", "No clause in the published terms"],
                ["Notice period", "Not stated in the published terms"],
                ["Data on termination", "Access ceases. No return obligation stated"],
                ["Named integrations", "Five"],
                ["Named customers", "None. One anonymous case study"],
              ].map(([t, d]) => (
                <div key={t} className="py-3 first:pt-0 last:pb-0">
                  <dt className="u-label text-[var(--fg-subtle)]">{t}</dt>
                  <dd className="mt-1 text-[14.5px] leading-[1.5]">{d}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 border-t border-[var(--line)] pt-4 text-[12.5px] leading-[1.5] text-[var(--fg-subtle)]">
              Read from factoravenue.com. Documents change. Re read yours before you rely on any of it.
            </p>
          </Card>
        }
      />

      <ProseSection
        eyebrow="The exit, in their own words"
        title="Two documents govern your departure, and only one of them mentions it."
      >
        <p>
          FactorAvenue publishes terms and conditions with an effective date of 2 February 2026, in
          thirteen numbered sections. Section 7 states that you retain ownership of your business data
          and that the platform processes it solely to deliver the service. That is a good clause and it
          is more than some vendors in this category put in writing.
        </p>
        <p>
          Section 9, on termination, says that access to the platform will cease. It does not say what
          happens to the data you own. There is no export obligation, no format, no retention window and
          no statement of who does the work. The published terms also carry no governing law clause, no
          venue and no dispute resolution mechanism, and they state no subscription term, no notice
          period and no renewal terms.
        </p>
        <p>
          The only exit language anywhere is in a separate refund and cancellation policy, which the terms
          never reference. It advises customers to export or retrieve their data prior to termination, and
          states that FactorAvenue is not responsible for data loss after account deactivation. It also
          states that all payments made are non refundable.
        </p>
        <p>
          Read those together and the position is that the data is yours, the retrieval is your problem,
          and the window is however long you have before you stop paying. None of that is unusual in this
          market. It is simply the thing to establish in writing, in your own agreement, before you give
          notice rather than in the week after.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <Eyebrow tone="signal">The questions their documents do not answer</Eyebrow>
          <h2 className="text-section-lg mt-4 max-w-[26ch]">
            Six things to get in writing before you tell anybody you are leaving.
          </h2>
          <p className="mt-6 max-w-[62ch] text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
            Ask your account manager, in an email, and keep the reply. Ask us the same six. A vendor who
            answers them quickly is telling you something, and so is one who does not.
          </p>
          <div className="mt-10">
            <DataTable
              head={["Ask this", "Why it decides your timetable"]}
              rows={[
                [
                  "In what format do we receive our data, and does it include documents and the audit trail or only the tables",
                  "A schedule and invoice export is not a conversion. The documents, the notes, the payment history and the record of who did what are what make the new system usable on day one.",
                ],
                [
                  "How long after termination can we still retrieve it",
                  "The published policy puts retrieval before termination. If the answer is zero days, your extract has to be complete and verified while you are still paying.",
                ],
                [
                  "Does the API support bulk historical extraction, or only live integration",
                  "Their integrations page claims REST APIs and webhooks. We could not find developer documentation anywhere on the site. An API built for live sync will not pull five years of history at a workable rate.",
                ],
                [
                  "What is the notice period, and does the subscription auto renew",
                  "Neither appears in the published terms. Whatever is in your own signed agreement is what governs, and it is what sets the earliest date you can actually leave.",
                ],
                [
                  "Which law governs the agreement and where is a dispute heard",
                  "The published terms contain no governing law clause. If yours does not either, that is worth putting to counsel before it matters rather than after.",
                ],
                [
                  "Which subprocessors handle our data, including any AI provider",
                  "Their privacy policy lists categories rather than names, and discloses no AI or machine learning processing at all, on a platform marketed as AI powered. Your own clients may have asked you the same question.",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <ProseSection
        eyebrow="What the platform claims"
        title="Read the capability claims the same way you read the contract."
        tone="sunken"
        aside={
          <Card>
            <Eyebrow>Named integrations</Eyebrow>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
              <li>QuickBooks</li>
              <li>Xero</li>
              <li>Credit Exchange</li>
              <li>Creditsafe</li>
              <li>Ansonia</li>
            </ul>
            <p className="mt-5 border-t border-[var(--line)] pt-4 text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
              Five, on their integrations page. Banking systems are described as a category with no partner
              named. Our own register is published with a status against every row.
            </p>
            <div className="mt-4">
              <Link href="/integrations" className="btn-secondary inline-flex">
                See the register
              </Link>
            </div>
          </Card>
        }
      >
        <p>
          On accounting, we could find no claim of a general ledger, double entry or a dual ledger anywhere
          on their site. What is described is cash posting, allocation and reconciliation. The single
          occurrence of the phrase ledger entries describes what is synchronised into QuickBooks, not a
          ledger the platform keeps. If your period close currently depends on statements generated from
          the factoring system rather than from your accounting package, establish which side of that line
          you are on before you shortlist anybody, including us.
        </p>
        <p>
          On AI, the platform is marketed as AI powered and names no model and no provider anywhere. There
          is no claim of model independence either. That is not a criticism, because most vendors in this
          category disclose nothing. It does mean the question of what happens to you when the model
          underneath changes has no published answer, and it is a fair one to ask of any vendor,{" "}
          <Link href="/platform/ai-native">including the answer we give</Link>.
        </p>
        <p>
          On security, the homepage says SOC 2 Ready Infrastructure and ISO 27001 Aligned Practices. Read
          those precisely. Ready and aligned are not certifications and no certification is claimed. We
          take the same position for the same reason: our security page says a SOC 2 programme is under way
          and that no report exists yet. Anyone claiming otherwise in this market should be asked for the
          report.
        </p>
        <p>
          One last thing that is easy to check and worth knowing. Their robots file blocks the AI crawlers,
          including GPTBot and ClaudeBot, while allowing the search engines. Ours allows them, deliberately.
          When a factor asks an assistant to compare factoring platforms, that setting decides who is in
          the answer.
        </p>
      </ProseSection>

      <FeatureGrid
        eyebrow="What does not come across"
        title="The parts of a conversion nobody puts on a plan"
        lede="These are the same on every conversion we run, and they are what turns a four week estimate into a twelve week one."
        items={[
          {
            title: "Report definitions",
            body: "Every report you rely on encodes a decision somebody made about what counts as eligible, what counts as past due and what gets excluded. None of that travels with the data. It has to be restated, and restating it is where you find the two definitions that disagreed with each other.",
          },
          {
            title: "Accounting mappings",
            body: "How fundings, fees, reserves and releases currently land in your books is a mapping that exists somewhere between the platform and your accountant. Write it down before you leave, because the person who remembers it may not be the person doing the conversion.",
          },
          {
            title: "Document history",
            body: "Invoices, agreements, remittances and correspondence attached to records over years. Ask explicitly whether an export includes the files or only the references to them. A reference to a file you no longer have is not evidence.",
          },
          {
            title: "The audit trail",
            body: "Who approved what, when, and on what basis. It is the part an examiner asks for and the part most exports leave behind. If it does not come across, say so openly in your own records rather than discovering the gap during a field exam.",
          },
          {
            title: "Undocumented practice",
            body: "The client everybody knows to treat differently. The debtor who always pays on the 45th. The three exceptions that live in one person's head. This is the real content of a conversion and it is the reason the first parallel run always surprises everybody.",
          },
          {
            title: "Portal habits",
            body: "Your clients have learned a screen. Changing it is a communications exercise with a date on it, not a technical task, and it is the piece most likely to generate calls in week one.",
          },
        ]}
      />

      <StepList
        eyebrow="What actually sets the date"
        title="Six things drive the timetable, and only one of them is technology"
        lede="If a vendor gives you a go live date before seeing your first extract, they are guessing. We will not."
        steps={[
          {
            label: "One",
            title: "Your notice period",
            body: "Not published in their terms, so it is whatever your own signed agreement says. Find it first, because everything else is scheduled backwards from it and it is the one date you cannot compress.",
          },
          {
            label: "Two",
            title: "How complete the first extract is",
            body: "The first delivery tells you whether this is a conversion or an archaeology project. We reconcile it against your existing book and show you the differences rather than reporting a success.",
          },
          {
            label: "Three",
            title: "How much of your operation is undocumented",
            body: "Every conversion discovers rules nobody wrote down. The question is whether they surface in the parallel run or in the first week live. We would rather spend the time finding them early.",
          },
          {
            label: "Four",
            title: "Your period close",
            body: "Nobody should cut over mid period. The close calendar usually moves the date more than any technical dependency does.",
          },
          {
            label: "Five",
            title: "Client communication",
            body: "Your clients need to be told, and told once, with a date. That is a calendar constraint and it belongs to you rather than to a vendor.",
          },
          {
            label: "Six",
            title: "Your own appetite for parallel running",
            body: "Running both for a period costs money and attention and it is almost always worth it. How long you are prepared to do it is a commercial decision, and it is yours.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="What FactorAvenue operators ask us first" />

      <RelatedPages
        links={[
          { href: "/migrate", label: "Migrating to FactorFox", note: "What moves, what breaks, and how a conversion actually runs." },
          { href: "/compare/factorfox-alternative", label: "FactorFox alternative", note: "The honest version, including where we are the wrong answer." },
          { href: "/compare/how-to-choose", label: "How to choose", note: "Running the selection, start to signature." },
          { href: "/platform/ai-native", label: "AI native", note: "Where the intelligence lives, and why it is model independent." },
          { href: "/platform/accounting", label: "Accounting", note: "The double entry core, and what it means at period close." },
          { href: "/integrations", label: "Integrations register", note: "Every connection with an explicit status against it." },
        ]}
      />

      <CtaBand
        title="Send us the reconciliation, not the requirements list."
        body="Tell us the categories you would need to see tie, and we will tell you which are straightforward, which will take work, and where your current data will not support what you want. That conversation is worth more than a demonstration, and it costs you an hour."
        primary={{ href: "/demo", label: "Plan your conversion with us" }}
        secondary={{ href: "/migrate", label: "How a conversion runs" }}
      />
    </>
  );
}
