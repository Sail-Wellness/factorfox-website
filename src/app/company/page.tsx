import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  PageHero,
  StepList,
  ProseSection,
  FeatureGrid,
  RelatedPages,
  CtaBand,
  Card,
  Section,
  Container,
  SectionHead,
  Eyebrow,
} from "@/components/page-parts";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "The company behind FactorFox",
  description:
    "Founded in 2002, sold to private equity in 2020, reacquired by the founder, and rebuilt as an AI native platform for the institutions that fund.",
  path: "/company",
  intent: "brand",
  target: "FactorFox company",
});

export default function CompanyPage() {
  return (
    <>
      <PageHero
        trail={[{ name: "Company", path: "/company" }]}
        eyebrow="Company"
        title="Built by someone who was the customer first."
        lede={
          <>
            <p>
              FactorFox has been making software for this industry since 2002. It started because its
              founder, a developer who ran a business in the late 1990s and factored his own invoices to
              fund it, spent that period on the other side of the desk: submitting schedules, chasing
              verifications, waiting on advances and wondering why the answers took so long.
            </p>
            <p>
              He knew what the operator was actually doing, and he knew it was mostly clerical. That
              observation is still the whole product thesis, more than two decades later.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Meet the team behind it" }}
        secondaryCta={{ href: "/platform", label: "See what we built" }}
      />

      <StepList
        eyebrow="How we got here"
        title="Four chapters, including the one most companies leave out."
        steps={[
          {
            label: "Origin",
            title: "A borrower who could write code",
            body:
              "In the late 1990s the founder was running a business and using invoice factoring to fund it. He saw the process from the client side first: what a factor asks for, how long it takes, and how much of the delay is not credit judgement at all but people moving paper between each other. He built software for factoring companies because he had been on the receiving end of the version that did not exist yet.",
          },
          {
            label: "2002",
            title: "FactorFox begins",
            body:
              "A platform for factoring companies, built by someone who had been a client of one. Over the following years it grew into an operating system for factoring and asset based lending businesses across several markets, most of them small and mid sized institutions where one person wears four hats and nobody has an engineering department to call.",
          },
          {
            label: "2020",
            title: "Sold to private equity, then bought back",
            body:
              "In 2020 the company was sold to private equity. The founder later reacquired it. We put that on a public page rather than smoothing it out of the history, because the reason it matters is what happened next: a company that has been through that and come back out under its founder is not run to a three year exit clock, and its roadmap is not set by anyone who has never watched a funding run.",
          },
          {
            label: "Now",
            title: "Rebuilt from zero, not bolted onto",
            body:
              "The current platform is not the old one with a language model attached. It was rebuilt from nothing as an AI native system, because the thing we wanted to build needs data structures the previous generation never captured: observations stored append only, conclusions versioned with their evidence, and an explicit record of what the system could not see. You cannot retrofit a history that was never written down.",
          },
        ]}
      />

      <ProseSection
        eyebrow="Where we operate"
        title="Five continents, one industry vocabulary, several sets of local words."
        tone="sunken"
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Same operation, different name</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Invoice finance in the United Kingdom. Debtor finance in Australia. Invoice discounting in
              South Africa. Factoraje in Mexico. Fomento mercantil in Brazil.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Different legal shapes, different disclosure conventions, the same underlying question about a
              receivable. Our{" "}
              <InlineLink href="/resources/glossary">operator glossary</InlineLink> keeps the cross market
              synonyms in one place, because the confusion is real and it costs people time.
            </p>
          </Card>
        }
      >
        <p>
          FactorFox is used by funding institutions across North America, Latin America, Europe, Australia
          and South Africa. We are not going to tell you how many, or how much they fund, because we do not
          publish a number we cannot source and a number on a marketing page is not the same thing as a
          reference call. Ask us for one of those instead. That is the useful version.
        </p>
        <p>
          <strong>Operating in several markets changes what you build.</strong> A platform that only ever ran
          in one jurisdiction quietly assumes one set of conventions about assignment, notification,
          disclosure and enforcement. Running across markets forces those assumptions to become
          configuration, which is a harder engineering problem and a better product for everyone including
          the customers who never leave their own country.
        </p>
        <p>
          <strong>Most of our customers are small and mid sized institutions.</strong> Businesses where the
          principal is also the credit committee, where the controller is also the treasury function, and
          where nobody has an engineering team on standby. That shapes every decision we make about what has
          to work without configuration, what has to be explainable to a bank without a consultant, and what
          must never require a support ticket to understand.
        </p>
      </ProseSection>

      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="Doctrine"
            title="Three rules we do not trade away."
            lede="Not values. Rules, in the sense that they are implemented in the platform and they constrain what we are able to ship. Each one costs us something, which is how you can tell they are real."
          />
          <div className="mt-11 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] lg:grid-cols-3">
            {[
              {
                n: "01",
                title: "Asymmetric automation",
                lead: "The machine may stop money. Only a named human may let it through.",
                body:
                  "Automation in specialty finance is not symmetric and should never be built as though it were. Declining to release funds while a question is open is reversible and cheap. Releasing them is neither. So the platform is allowed to halt, hold, flag and refuse on its own, and it is never allowed to advance money on its own. Four eyes applies by default. Certain gates can never be made advisory, by any role or configuration. In solo mode an AI counter review is logged where the second officer's name would sit, and it refuses outright when any underlying fact has changed since the request was raised.",
                cost: "What it costs us: deals where the buyer wanted the controls to be optional.",
              },
              {
                n: "02",
                title: "Evidence over assertion",
                lead: "A conclusion that cannot be opened is an opinion with a font.",
                body:
                  "Every conclusion the platform reaches carries severity, the reason, references into the FactorFox records that produce it, and a recommended action with the permission that action requires. Risk observations are append only at the database level. Verification runs capture their evidence at run time and are never re fetched, so a later change cannot rewrite what was true when someone relied on it. Certifications sign over the gate snapshot as it stood. Audit packets are sealed and a database trigger refuses mutation. A credit officer has to be able to defend a number to a bank, an auditor and a client, and that is only possible if the proof travels with the number.",
                cost: "What it costs us: a slower, heavier build than a scoring engine would have been.",
              },
              {
                n: "03",
                title: "Honest degradation",
                lead: "When a source is missing, the platform says so and names it.",
                body:
                  "The most expensive element in specialty finance software is a zero that looks like a measurement. Several external sources are declared and dark, and the platform reports itself blind rather than filling the space. A covenant that needs data FactorFox does not hold says it is awaiting a live source and names the source, rather than reporting compliance against nothing. Carrier operating authority, insurance currency and safety information are captured and never asserted as verified, and the relevant gate is explicitly forbidden from claiming them. Where the platform has no prior observation it offers to take a first one rather than reconstructing a yesterday it did not witness.",
                cost: "What it costs us: screens that look emptier than a competitor's in a side by side.",
              },
            ].map((d) => (
              <div key={d.n} className="bg-[var(--bg-raised)] p-6 sm:p-7">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--signal)]">{d.n}</p>
                <h3 className="mt-3 text-[1.125rem]">{d.title}</h3>
                <p className="mt-3 text-[0.9375rem] font-semibold leading-[1.5] text-[var(--fg)]">{d.lead}</p>
                <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">{d.body}</p>
                <p className="mt-5 border-t border-[var(--line)] pt-4 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">
                  {d.cost}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ProseSection
        eyebrow="How we write"
        title="This website has rules, and they are stricter than the ones we had before."
      >
        <p>
          The site this replaced published quantified claims that no source supported, advertised connectors
          that did not exist, and rendered a hard coded funding counter with a badge saying it was live. We
          removed all of it, wrote down why, and made the rules binding on ourselves.
        </p>
        <p>
          <strong>No number appears on this site without a source.</strong> Not a statistic, not a customer
          count, not a funded volume, not an uptime figure, not an accuracy rate, not a time saving. Three
          things count as a source: the platform repository, a dated proof run against a deployed service,
          or a document the owner has approved in writing. A plausible industry figure is not a source. A
          number from an earlier version of this website is definitely not a source.
        </p>
        <p>
          <strong>Integration statuses cannot be promoted by marketing.</strong> Available, controlled
          release, contract required, planned and ecosystem each have a definition, and a row only moves when
          engineering moves it. That is why the{" "}
          <InlineLink href="/integrations/microsoft-teams">Microsoft Teams surface</InlineLink> is described
          as controlled release on a page that could easily have said available.
        </p>
        <p>
          <strong>We publish where we are the wrong choice.</strong> There is a section on the{" "}
          <InlineLink href="/compare">comparison page</InlineLink> listing the situations in which you should
          buy something else, and each item on it has cost us a real opportunity. A comparison page without
          one is a brochure.
        </p>
        <p>
          <strong>We do not claim the models learn from your outcomes.</strong> Every weight is a pinned
          constant today. What is true, and stronger, is that every dismissal is recorded with a written
          reason and a name, which is exactly the raw material a calibration loop needs. Calibration is the
          next build, and when it ships this page will say so with a date on it.
        </p>
      </ProseSection>

      <FeatureGrid
        eyebrow="What we are building toward"
        title="The operating thesis, in four sentences"
        lede="Nothing here is a forecast about the industry. It is what we think the software has to become for a small institution to keep competing with a large one."
        columns={2}
        tone="sunken"
        items={[
          {
            title: "The bottleneck is attention, not capital",
            body: "Small and mid sized funders rarely lose to a bigger balance sheet. They lose to not knowing something in time, because the person who would have spotted it was doing clerical work that day.",
          },
          {
            title: "The clerical layer should have been gone already",
            body: "Keying documents, rebuilding a borrowing base by hand every morning, assembling an answer from four screens. None of it is judgement, all of it consumes the people who hold the judgement.",
          },
          {
            title: "Intelligence without evidence does not survive contact with a bank",
            body: "A score nobody can defend gets ignored the first time it is inconvenient. The evidence is not decoration on the conclusion. It is the thing that makes the conclusion usable.",
          },
          {
            title: "Control is what makes automation acceptable",
            body: "An operation adopts automation at the speed it trusts the refusals. That is why the gates came before the intelligence, and why some of them can never be turned off.",
          },
        ]}
      />

      <Section bordered>
        <Container width="narrow">
          <Eyebrow tone="signal">Talking to us</Eyebrow>
          <h2 className="mt-3 text-[clamp(1.7rem,3.2vw,2.4rem)]">We would rather have the difficult conversation early.</h2>
          <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)]">
            <p>
              A first call with us is not a presentation. It is a working session about your book: what you
              fund, where your exposure concentrates, what you find out too late, and which of that we can
              actually help with. If the answer is that we cannot, we will say it in that call.
            </p>
            <p>
              If you are evaluating a move from another platform, bring your extract or your list of what you
              would need to see reconciled, and read{" "}
              <InlineLink href="/migrate">the migration pages</InlineLink> first so we can skip the parts you
              already know. If you are comparing us against a shortlist, bring the shortlist.
            </p>
            <p>
              Reach us at{" "}
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="text-[var(--accent)] underline underline-offset-4 hover:no-underline"
              >
                {SITE.contactEmail}
              </a>
              , or ask for a reference call with an institution that runs a book shaped like yours.
            </p>
          </div>
        </Container>
      </Section>

      <RelatedPages
        links={[
          { href: "/platform", label: "The platform", note: "What it observes, concludes and refuses." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "Doctrine two, implemented." },
          { href: "/platform/security", label: "Security and controls", note: "Written for vendor review, without borrowed logos." },
          { href: "/compare", label: "How we compare", note: "Including where you should buy something else." },
          { href: "/resources", label: "Writing", note: "Operator to operator, on the work itself." },
          { href: "/resources/glossary", label: "Operator glossary", note: "The vocabulary, including the cross market synonyms." },
        ]}
      />

      <CtaBand
        title="Ask us the question you have not been able to get a straight answer to."
        body="From any vendor, including the one you run today. If we do not know, we will tell you that. If the honest answer is that another product fits you better, you will hear that in the first call rather than the third."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "Read what the platform does" }}
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
