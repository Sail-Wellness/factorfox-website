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
  title: "Factoring software pricing and what drives it",
  description:
    "Compare per seat, per invoice and funds employed pricing, count what a migration really costs, and take sharper questions into your next vendor call.",
  path: "/platform/pricing",
  intent: "commercial",
  target: "factoring software pricing",
});

const FAQS = [
  {
    q: "Why is there no price on this page?",
    a: "Because any number we published would be wrong for most of the people reading it, and a wrong number is worse than no number. A twelve client operation funding weekly and a two hundred client operation funding four times a day are different products in every respect that drives cost. What we can do, and will do on a first call, is give you a real number for your book rather than a range designed to survive being quoted back at us.",
  },
  {
    q: "Is that not just the same demo gate everyone else uses?",
    a: "It would be if we gave you nothing until you sat through a presentation. That is why this page exists. Everything on it is what we would tell you in the first twenty minutes anyway: what drives cost in this category, what each pricing model rewards and punishes, what migration really costs, and what to ask us that we would find inconvenient. Come to the call already knowing all of it.",
  },
  {
    q: "Which pricing model is best for a growing factor?",
    a: "It depends entirely on which of your inputs is growing. If headcount is flat while invoice volume climbs, per seat protects you and per invoice punishes you. If you are hiring collectors and account executives while average invoice size rises, the opposite is true. The mistake is choosing a model that matches this year's shape and signing a term long enough to outlast it.",
  },
  {
    q: "How should we budget for migration?",
    a: "As a project with a people cost, not as a line item on a licence quote. The software side of a migration is rarely the expensive part. The expensive parts are extraction from the incumbent, reconciling balances that have to tie to the cent, the parallel period where your team runs two systems, and the historical archive nobody wants to talk about until an examiner asks for something from four years ago.",
  },
  {
    q: "What does the system we already run cost us?",
    a: "More than its invoice, and the gap is usually the argument. Add the people whose job exists because the software cannot do something: the clerk who keys what arrives as paper, the analyst who rebuilds the borrowing base every morning, the week of audit preparation, the officer who reconstructs an answer from four screens. Those salaries are part of the cost of the software, and they do not appear on the renewal.",
  },
  {
    q: "Do you charge for integrations?",
    a: "Ask us on the call, because the honest answer depends on which ones. Some rails carry no vendor cost at all: debtor payment behaviour drawn from the FactorFox network has no contract and no per check charge. Others require you to hold your own agreement and keys with the vendor, and that cost is theirs rather than ours. The register on our integrations page states which is which before you ask.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox",
          description:
            "An operating and intelligence platform for factoring, asset based lending and specialty finance, priced against the shape of the book it runs.",
          path: "/platform/pricing",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Pricing", path: "/platform/pricing" },
        ]}
        eyebrow="Pricing"
        title="Nobody in this category publishes a price. Here is everything else."
        lede={
          <>
            <p>
              Written for the principal or the chief operating officer of a funding business who has been
              asked to compare three platforms and has three demonstration requests instead of three numbers.
            </p>
            <p>
              We are not going to invent a price on a web page. What we will do is set out what actually
              drives cost in this category, what each pricing model rewards, what migration really costs, what
              your current system costs including the people it needs, and the questions that make a vendor
              uncomfortable in a useful way.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Get a number for your book" }}
        secondaryCta={{ href: "/compare", label: "Compare platforms" }}
      />

      <ProseSection
        eyebrow="What drives cost"
        title="Six variables, and invoice count is only one of them."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The question behind the question</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              What you are really pricing is not software. It is how many people it takes to run your book
              safely, and what a single avoidable loss would have cost.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Both of those are knowable for your operation. Neither of them is knowable from a price list.
            </p>
          </Card>
        }
      >
        <p>
          <strong>Transaction shape.</strong> Ten thousand small freight invoices a month and four hundred
          large manufacturing invoices are the same funded volume and completely different systems. Document
          volume, verification load and collections contact count all follow invoice count rather than
          dollars, and they are what determine how much work the platform is actually doing.
        </p>
        <p>
          <strong>Operator count and shape.</strong> How many people touch the system, in how many roles, and
          how many of them need approval authority rather than read access. This is the variable most seat
          based pricing is built on, and the one most likely to be distorted by the pricing model itself when
          a shop starts sharing logins to stay under a threshold.
        </p>
        <p>
          <strong>Product mix.</strong> Straight factoring, asset based lending with a borrowing base,
          purchase order funding, reverse factoring and payroll funding are different operating models with
          different gates, and running several at once costs more than running one.
        </p>
        <p>
          <strong>Jurisdictions and rails.</strong> One country and one originating bank is simple. Australia
          and the United States, direct entry files and NACHA files, PPSR and UCC, two sets of holidays and
          two funding calendars, is not.
        </p>
        <p>
          <strong>Integration surface.</strong> Which external rails you want live, which of those require you
          to hold your own vendor contract and keys, and which arrive with no vendor cost at all. Our
          integration register states the status of every row before you ask, which is deliberately unusual.
        </p>
        <p>
          <strong>Migration weight.</strong> How much history has to come across, in what condition, and how
          long you intend to run two systems side by side. This is the one people underestimate, and it is
          treated on its own further down this page.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Pricing models"
            title="Every model rewards something and punishes something else"
            lede="Before you compare quotes, work out which of these shapes your business will have in three years. A model that fits today and not then is a renegotiation you will be conducting from a weak position."
          />
          <div className="mt-11">
            <DataTable
              caption="Pricing models in specialty finance software"
              head={["Model", "What it rewards", "What it punishes", "Watch for"]}
              rows={[
                [
                  "Per seat",
                  "Growing funded volume with a stable team. Costs stay flat while the book grows, which is the whole economic argument for better software.",
                  "Bringing more people into the system. Collections assistants, junior underwriters and part time staff all cost the same as an officer.",
                  "Shared logins. If a pricing model makes credential sharing rational, it has quietly removed your ability to attribute any action to a person.",
                ],
                [
                  "Per invoice or per transaction",
                  "Small books and lumpy volume. You pay for activity, which feels fair and is easy to forecast in a flat year.",
                  "Exactly the growth you are trying to achieve, and specifically high count low value books such as freight and staffing.",
                  "What counts as a transaction. Credits, rebills, schedule amendments and resubmitted documents are where the definition earns its money.",
                ],
                [
                  "Funds employed or assets under management",
                  "Alignment. The vendor does better when you do better, and small operations start cheap.",
                  "Margin compression. Your rate per dollar funded falls as you scale, and the software cost does not.",
                  "Whether the measure is average funds employed, peak, or funded volume. Those three produce very different invoices from the same book.",
                ],
                [
                  "Tiered platform fee",
                  "Predictability. Finance can budget it, and it does not distort behaviour inside the system.",
                  "Anyone sitting just above a tier boundary, and anyone whose growth is uneven.",
                  "What happens at the boundary and whether you can move down again after a slow quarter, or only up.",
                ],
                [
                  "Module by module",
                  "Buying only what you use, and starting narrow.",
                  "Operations that later need the thing they did not buy, usually at the moment they can least afford a project.",
                  "Whether a module you did not buy is visible and marked as unconfigured, or invisible. Invisible is how an underwriter comes to believe a check ran.",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="Migration"
        title="What a platform change actually costs"
        lede="The licence quote is the part of a migration budget you can read. These are the parts that decide whether the project lands."
        items={[
          {
            title: "Extraction from the incumbent",
            body: "How much of your history you can get out, in what form, and what your current vendor charges to produce it. Ask that question before you sign anything, including before you sign with us.",
          },
          {
            title: "Balances that must tie",
            body: "Open invoices, advances, reserves, accrued fees and unapplied cash have to arrive correct to the cent. Reconciling them is skilled work by people who know your book, and those people have other jobs.",
          },
          {
            title: "The parallel period",
            body: "Most operations run both systems for a period. That is prudent and it is expensive, because for those weeks every entry is made twice by a team that is already fully occupied.",
          },
          {
            title: "The document archive",
            body: "Years of invoices, proofs of delivery and agreements. Nobody wants to move it, everybody needs it the first time an examiner asks for something from four years ago, and storage is the cheap part of that problem.",
          },
          {
            title: "Retraining and rebuilt habits",
            body: "Twenty year operators are fast in the system they know. The productivity dip is real, it is temporary, and pretending it will not happen is how implementations lose the trust of the people who have to use them.",
          },
          {
            title: "Configuration that carries judgement",
            body: "Eligibility rules, advance rates, reserve policy, gates and fee structures. This is the work that determines whether the new system reflects how you actually lend, and it cannot be done by someone who does not know your credit policy.",
          },
        ]}
      />

      <ProseSection eyebrow="The incumbent" title="Your current system is not free, and the invoice is not the cost.">
        <p>
          The most common error in this comparison is treating the existing platform as the zero point. It is
          not zero. It has a licence, it has hosting, it has support charges, it may have per user or per
          transaction elements that grew quietly, and it very probably has integration and report writing
          costs that arrive as small invoices nobody aggregates.
        </p>
        <p>
          <strong>Then there is the headcount the software requires.</strong> Not your headcount. The
          headcount that exists because of what the software cannot do. The person who keys documents that
          arrive as paper. The analyst who rebuilds the borrowing base every morning in a workbook only they
          understand. The officer who assembles an answer from four screens whenever the owner asks what
          changed overnight. The week before every field exam. Those salaries are as much a part of the cost
          of your platform as the licence, and they never appear on the renewal.
        </p>
        <p>
          <strong>Then the cost of what does not get done.</strong> The client who waited two days for a
          funding decision and went elsewhere. The concentration nobody saw gathering across three files under
          one debtor name. The duplicate that funded because the check ran within a client rather than across
          the book. These are not certainties and we are not going to attach a number to them for you. You
          have a number, though, because you have had at least one of them, and it is usually the largest
          figure in the whole comparison.
        </p>
        <p>
          <strong>The defensible claim, and the one we will stand behind, is qualitative.</strong> Operators
          carry more book with the same headcount when the evidence assembles itself. We are not going to
          decorate that with a percentage, because we cannot source one, and a number we cannot source is
          worth less to you than the sentence without it.
        </p>
      </ProseSection>

      <StepList
        eyebrow="Due diligence"
        title="Ten questions to put to any vendor in this category, including us"
        lede="Ask all of them in the first meeting. The answers you get, and how quickly, will tell you more than any feature comparison."
        steps={[
          {
            label: "Model",
            title: "Which variable does your price move with, and what happens when it doubles?",
            body: "Then ask what happens when it halves. A vendor whose pricing only ratchets in one direction is telling you what they expect the relationship to feel like in year three.",
          },
          {
            label: "Exit",
            title: "What does it cost to leave, and what exactly do I take with me?",
            body: "Ask specifically about audit history, sealed records and the document archive, not just the current balances. A record you cannot take with you was never really yours.",
          },
          {
            label: "Evidence",
            title: "When your system shows me a number, can I open it and see what produced it?",
            body: "Ask them to do it, live, on a figure you choose rather than one they choose. This is the question that separates a reporting layer from a system of record.",
          },
          {
            label: "Refusal",
            title: "Show me something your platform refuses to do.",
            body: "A vendor who cannot answer this quickly has built a system with no gates in it. Ask to see a requester refused their own approval, and ask whether that refusal survives changing surface to a phone.",
          },
          {
            label: "Absence",
            title: "What happens on screen when a check has not been configured?",
            body: "If the answer is that it is hidden, understand what that means: an operator can believe a check ran when it did not. A greyed row teaches. A hidden feature lies.",
          },
          {
            label: "Learning",
            title: "Do your risk models learn from our outcomes? Prove it.",
            body: "Ask what the label is, who applies it, how many confirmed cases the model has seen and what happened to the weights last month. Ours do not learn from outcomes, the weights are pinned constants, and we say so on the fraud page.",
          },
          {
            label: "Integrations",
            title: "Which of these connectors are live today, and which need my contract?",
            body: "Ask for it as a written register with a status against every row. Ask what a row says on screen when the keys are absent. Then ask which rows were named in the sales deck but are not on the register.",
          },
          {
            label: "Migration",
            title: "Who does the reconciliation, and what does the parallel period look like?",
            body: "Named people, a week by week plan, and an honest answer about how much of your own team's time it consumes. A vendor who says migration is painless has not done one recently.",
          },
          {
            label: "Audit",
            title: "What does your system give my examiner that mine does not?",
            body: "Ask whether records can be edited after the fact, who can edit them, and whether the prohibition is enforced by the interface or by the database. Those two answers are not equivalent.",
          },
          {
            label: "Numbers",
            title: "Where does that statistic on your website come from?",
            body: "Pick one from their site and ask for the source. It is a short question and the reaction to it is frequently the most useful thing you learn all meeting.",
          },
        ]}
      />

      <ProseSection eyebrow="What we will do" title="Bring us a book and we will price it." tone="sunken">
        <p>
          On a first call, tell us the shape rather than the story: how many clients, how many active debtors,
          roughly how many invoices a month and of what average size, which products you run, which countries
          you fund in, how many people touch the system and in which roles, and what you are running today.
          That is enough for a real number rather than a range.
        </p>
        <p>
          We will also tell you where FactorFox is a poor fit, because that conversation is cheaper for both
          of us now than in month four of an implementation. If your operation needs something we have not
          built, we will say so and name it. If a check you rely on requires a vendor contract you do not
          hold, we will tell you what the platform will show your operators on the day they look for it.
        </p>
        <p>
          Bring the borrowing base you argued about, the collections queue you would have ordered differently,
          or the fraud file that cost you money. Those produce a better conversation than a feature list, and
          they produce a better number too.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="Questions about how we price" />

      <RelatedPages
        links={[
          { href: "/compare", label: "Comparing platforms", note: "How to run an evaluation that survives its own second year." },
          { href: "/migrate", label: "Migration", note: "What moving a live book actually involves, week by week." },
          { href: "/migrate/factorsoft", label: "Moving from FactorSoft", note: "The specific path most of these conversations start on." },
          { href: "/integrations", label: "Integrations", note: "The register, with a status against every row and nothing hidden." },
          { href: "/platform", label: "The platform", note: "What you would actually be buying, module by module." },
          { href: "/demo", label: "A demonstration", note: "Against a seeded book, or against a file you bring with you." },
        ]}
      />

      <CtaBand
        title="Tell us the shape of your book."
        body="Clients, debtors, invoice count, products, countries and what you run today. That is a number on the first call rather than a proposal three weeks later."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/company", label: "Who you would be dealing with" }}
      />
    </>
  );
}
