import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  FeatureGrid,
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

/* The destination for the press release and for anything that needs one stable
   link to the film. A homepage is the wrong place to send a journalist: they
   land, see a headline, and have to hunt. This page opens on the film. */

export const metadata: Metadata = pageMeta({
  title: "See FactorFox AI in action",
  description:
    "Watch a morning briefing happen, then read what the platform did underneath it: the evidence, the ledger, and why it is not tied to any single AI model.",
  path: "/ai-in-action",
  intent: "product",
  target: "FactorFox AI in action",
});

const TRAIL = [{ name: "FactorFox AI in action", path: "/ai-in-action" }];

const FAQS = [
  {
    q: "Is that a real customer's book?",
    a: "No. The figures, the client names and the debtor names in the film are seeded on a demonstration book. We do not put a customer's portfolio on the internet, and we would not put yours there either. When you ask for a demonstration we run it on a slice of your own data, in your own environment, and nobody outside your team sees it.",
  },
  {
    q: "Is this a mock up or the actual product?",
    a: "It is the product. The conversation, the evidence links and the action at the end are the platform behaving the way it behaves, on seeded data rather than on a customer's.",
  },
  {
    q: "Can it act on its own?",
    a: "Asymmetrically, and deliberately. The platform can stop money on its own authority. Only a named human can let money through, four eyes applies by default, and nobody approves their own release. In the film you are watching a recommendation with its evidence attached, and a person deciding.",
  },
  {
    q: "Which AI model is behind it?",
    a: "That question has a different answer this year than last, which is the point. FactorFox is model agnostic: the intelligence is part of the architecture rather than a model attached to the outside of it, and a model can be evaluated, routed around during an outage, or replaced with a better one without a migration project. Every conclusion records which model produced it, on which policy version, with the evidence attached.",
  },
  {
    q: "What happens after I ask for a demonstration?",
    a: "We ask what you would need to see tie, you send a slice of your portfolio, and we show you what the first briefing says about it with the evidence behind every line. A demonstration on generic sample data tells you nothing about any platform, ours included.",
  },
];

export default function AiInActionPage() {
  return (
    <>
      <PageHero
        trail={TRAIL}
        eyebrow="FactorFox AI in action"
        title="Watch a morning briefing happen."
        lede={
          <>
            <p>
              Eighty five seconds, no form. An owner opens the day, the platform states what changed and
              what it means, the evidence is attached to every line, and the exchange ends with four
              invoices held and assigned to a named person.
            </p>
            <p>
              Then read what was happening underneath it, because the conversation is the surface and the
              ledger is the reason it can be trusted.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a private demonstration" }}
        secondaryCta={{ href: "/platform/ai-native", label: "How it is built" }}
      />

      <Section tone="sunken" bordered>
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-16">
            <figure className="m-0">
              <video
                className="w-full rounded-xl border border-[var(--line)] bg-[#0b1017]"
                style={{ aspectRatio: "9 / 16", boxShadow: "var(--shadow-card)" }}
                src="/media/factorfox-briefing.mp4"
                poster="/media/factorfox-briefing-poster.jpg"
                controls
                playsInline
                preload="none"
              />
              <figcaption className="mt-3 text-[12.5px] leading-[1.55] text-[var(--fg-subtle)]">
                Recorded on a demonstration book. The figures, clients and debtors are seeded and are not a
                customer&rsquo;s.
              </figcaption>
            </figure>

            <div className="lg:pt-2">
              <Eyebrow tone="signal">What you are watching</Eyebrow>
              <h2 className="text-section-lg mt-4 max-w-[22ch]">
                Six questions, one of which needed a decision.
              </h2>
              <div className="mt-6 space-y-4 text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  The briefing opens on a number that is already reconciled: what was collected yesterday,
                  and what part of it has not been matched. Not a chart of it. The number, and the gap.
                </p>
                <p>
                  Then a concentration moves past its limit. The platform does not raise an alert and leave
                  it there. It states the position, shows the clause it is measured against, and offers the
                  action to the person whose permission covers it.
                </p>
                <p>
                  The exchange ends with four invoices held and assigned, with the reason and the evidence
                  attached to the assignment. That is the whole argument in one sentence: the conversation
                  is only worth something because everything under it is recorded properly.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/platform/briefings" className="btn-secondary inline-flex">
                  How a briefing is assembled
                </Link>
                <Link href="/platform/evidence" className="btn-secondary inline-flex">
                  What sits behind a conclusion
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="Underneath the conversation"
        title="Three things that make the film more than a demonstration"
        lede="Any platform can put a chat box in front of a database. These are the parts that decide whether what it says can be relied on."
        columns={3}
        items={[
          {
            title: "A real double entry ledger",
            body: "Fundings, fee accruals, reserve movements and releases, chargebacks, repurchases and cash application all post as balanced entries against the client, the schedule and the obligor. That is why the number at the start of the film is a fact rather than a query result.",
          },
          {
            title: "Evidence on every line",
            body: "A conclusion opens onto the records that produced it, the policy version that applied and the confidence it carried. A score you cannot open is a score you cannot defend, to a credit committee, a lender or an examiner.",
          },
          {
            title: "Not tied to one model",
            body: "The intelligence is part of the architecture rather than a model bolted to the side of it. A model can be evaluated, routed around during an outage, or replaced with a better one without a migration project.",
          },
        ]}
      />

      <ProseSection
        eyebrow="What it is not"
        title="The film is short because the argument is short."
        tone="sunken"
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Building since 2002</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              FactorFox has been making software for the institutions that fund since 2002, and customers
              run it across five continents. The ledger underneath the film is the part that took the
              longest and the part nobody demonstrates.
            </p>
            <div className="mt-5">
              <Link href="/company" className="btn-secondary inline-flex">
                The company behind it
              </Link>
            </div>
          </Card>
        }
      >
        <p>
          It is not a product tour, and it deliberately does not show you every module. Eighty five seconds
          buys one honest look at how a morning actually goes when the system understands the book rather
          than storing it.
        </p>
        <p>
          It is also not an argument that the software should decide for you. The platform can stop money on
          its own authority, and only a named person can let money through. The film ends with a human
          making the call, which is the only ending we would put on film.
        </p>
        <p>
          If you want the architecture rather than the demonstration, that is written out in full on{" "}
          <Link href="/platform/ai-native">the AI native page</Link>, including where we are the wrong
          answer.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What people ask after watching" />

      <RelatedPages
        links={[
          { href: "/platform/ai-native", label: "AI native", note: "Where the intelligence lives, and why it is model independent." },
          { href: "/platform/briefings", label: "Briefings", note: "The six questions, and how scope is decided." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "What sits behind every conclusion on a screen." },
          { href: "/platform/accounting", label: "Accounting", note: "The double entry core, and what it means at period close." },
          { href: "/compare/factorfox-alternative", label: "FactorFox alternative", note: "The honest version, including where we are the wrong answer." },
          { href: "/company", label: "The company", note: "Who builds it, and since when." },
        ]}
      />

      <CtaBand
        title="Now watch it do that to your book."
        body="Send us a slice of your portfolio and we will show you what the first briefing says about it, with the evidence attached. A demonstration on generic sample data tells you nothing about any platform, ours included."
        primary={{ href: "/demo", label: "Request a private demonstration" }}
        secondary={{ href: "/platform", label: "Tour the platform" }}
      />
    </>
  );
}
