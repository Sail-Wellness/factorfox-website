import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  PageHero,
  ProseSection,
  FeatureGrid,
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
import { INTEGRATIONS } from "@/content/integrations";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI native, and what it actually means",
  description:
    "Where the intelligence lives decides what the software can do. The architecture behind FactorFox, and why it stays independent of any one model.",
  path: "/platform/ai-native",
  intent: "commercial",
  target: "AI native factoring software",
});

/* Counted from the register at build time. A number in body copy that a reader
   can check against the table two pages away is worth more than a rounder one
   that cannot be checked at all. */
const ACCOUNTING = INTEGRATIONS.filter((i) => i.category === "accounting");
const AVAILABLE_ACCOUNTING = ACCOUNTING.filter((i) => i.status === "available");

const FAQS = [
  {
    q: "Is model independent the same as saying you do not use AI models?",
    a: "The opposite. It means the platform is built to use them and to keep using better ones. The intelligence is part of the operating architecture: it reasons against the ledger, the policy version that applied and the evidence underneath, and a model is the engine it uses to do that. Swapping the engine does not change the vehicle. What it means in practice is that the model doing the reasoning is a configuration decision rather than an architectural one, and that decision can be revisited whenever a better option ships.",
  },
  {
    q: "Why does it matter which model you use if the answers look the same?",
    a: "Because the answers do not stay the same, and neither do the models. Model families specialise, get retired, change price, change licensing terms and occasionally go down for an afternoon. Software written for one specific model inherits every one of those events. Software written to route across models treats them as supply. The test to apply to any vendor, including us, is simple: ask what happens the week a materially better model ships, and listen for whether the answer sounds like a configuration change or a project.",
  },
  {
    q: "How do you decide which model handles which job?",
    a: "By what the job actually is. Adjudicating a funding decision against a policy is not the same task as reading a scanned bill of lading, and neither is the same as ranking a collections queue by exposure. Different classes of model are better at different classes of work, and the platform routes on the shape of the task rather than on a single default. Routing decisions are recorded with the rest of the evidence, so a conclusion can always be traced to what produced it.",
  },
  {
    q: "Does an AI native architecture mean the software makes decisions on its own?",
    a: "No, and the asymmetry is deliberate. The platform can stop money on its own authority. Only a named human can let money through. Four eyes applies by default, certain gates cannot be made advisory by any role or configuration, and every conclusion opens onto the evidence that produced it. Intelligence being part of the architecture is what makes that enforceable rather than procedural.",
  },
  {
    q: "How would I tell the difference from the outside?",
    a: "Ask where the intelligence sits relative to the ledger. Software with AI connected to it can summarise, draft and answer, because it has been handed a question and some context. Software with intelligence in the architecture can adjudicate, because it reads the same records the ledger reads, applies the policy version in force at the time, and refuses to display a change it cannot prove. The second is harder to build and easier to verify: ask for the evidence behind a conclusion and see whether the system can open it.",
  },
];

export default function AiNativePage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox AI native architecture",
          description:
            "The architecture behind FactorFox: intelligence inside the operating system rather than attached to it, and independent of any single model.",
          path: "/platform/ai-native",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "AI native", path: "/platform/ai-native" },
        ]}
        eyebrow="Architecture"
        title="Where does the intelligence live?"
        lede={
          <>
            <p>
              The question the industry has been asking vendors is whether their software has AI. It is
              the wrong question, and it is answerable by almost anybody. Connecting a model to software
              is a week of work. It is a different exercise from architecting software around one.
            </p>
            <p>
              The question that separates them is where the intelligence sits relative to the ledger. This
              page is the honest answer for FactorFox, including the parts that are architecture rather
              than magic, and the test you can run on any vendor who tells you the same thing.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/platform/evidence", label: "See how evidence works" }}
        aside={<TwoArchitectures />}
      />

      {/* ── the definition ─────────────────────────────────────────────── */}
      <ProseSection
        eyebrow="The distinction"
        title="Two architectures that look the same from the outside."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The test</Eyebrow>
            <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              Ask any vendor to show you the evidence behind a conclusion the software reached on its own.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              Software with a model attached will show you the answer again, worded differently. Software
              with intelligence in the architecture will open the records, the policy version that applied
              and the reason it was reached.
            </p>
          </Card>
        }
      >
        <p>
          <strong>AI enabled means a model is connected to the software.</strong> The model sits beside
          the system and is handed a question along with whatever context the integration passes it. It
          can summarise, it can draft, it can answer. What it cannot do is see the ledger the way the
          ledger sees itself, because it was never given that seat.
        </p>
        <p>
          <strong>AI native means the intelligence is part of the operating system.</strong> It reads the
          same records, applies the policy version that was in force at the time, writes its observations
          append only so an audit trail cannot be rewritten afterwards, and refuses to display a change it
          cannot prove. That is a different build, and it is the reason a conclusion here opens onto its
          own evidence rather than onto a restatement of itself.
        </p>
        <p>
          Both are real products. Both will demonstrate well for twenty minutes. The difference shows up
          in week five of an implementation, when somebody asks the software why it reached a conclusion
          and needs an answer that will survive an examiner.
        </p>
      </ProseSection>

      {/* ── the precedent ──────────────────────────────────────────────── */}
      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="We have read this shape before"
            title="The same architectural bet, twice."
            lede="This industry has already lived through one shift of exactly this kind, and the lesson from it is not about technology. It is about what you allow your software to depend on."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Card>
              <Eyebrow>Then &middot; the cloud</Eyebrow>
              <h3 className="text-card-title mt-3">
                Software was written for an operating system.
              </h3>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                You did not buy factoring software. You bought factoring software for Windows, and you
                inherited the upgrade cycle, the hardware and the migration that came with it. What the
                cloud actually did, underneath the marketing, was make the application independent of the
                operating system underneath it.
              </p>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                FactorFox moved on that in 2002.
              </p>
            </Card>

            <Card accent="accent">
              <Eyebrow tone="signal">Now &middot; AI native</Eyebrow>
              <h3 className="text-card-title mt-3">
                Software is being written for a model.
              </h3>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                A platform built around one model family inherits that family&rsquo;s roadmap, its pricing,
                its licensing terms, its deprecations and its outages. The dependency is invisible while
                the model is good and expensive the moment it is not.
              </p>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                FactorFox is built to be independent of any single model. Same architectural bet, made
                twice, twenty four years apart.
              </p>
            </Card>
          </div>

          <div className="mt-10 rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-7 sm:p-9" style={{ boxShadow: "var(--shadow-card)" }}>
            <Eyebrow>Worth remembering</Eyebrow>
            <h3 className="text-section-sm mt-3 max-w-[34ch]">
              Nobody could have picked the winner in 1999.
            </h3>
            <p className="mt-5 max-w-[74ch] text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
              Lycos, AltaVista, Excite and Infoseek all looked permanent at the time. Anyone who had bet
              their business on the leader of that moment would have spent the following decade migrating
              off it. What made the web survivable was that it never asked anyone to choose, so the churn
              happened underneath the applications instead of inside them.
            </p>
            <p className="mt-5 max-w-[74ch] text-[16.5px] leading-[1.7] text-[var(--fg)]">
              <strong>
                We are not betting on which model wins. We are betting there will always be a better one.
              </strong>
            </p>
          </div>
        </Container>
      </Section>

      {/* ── what independence buys ─────────────────────────────────────── */}
      <FeatureGrid
        eyebrow="What independence actually buys"
        title="Three ordinary operating events, and what they cost you"
        lede="This is an operations argument rather than a technology one. The value of not being tied to a single model shows up on ordinary days, not in a keynote."
        columns={3}
        items={[
          {
            title: "A model has an outage",
            body: "Model providers have bad afternoons like every other piece of infrastructure. A platform with one path has an outage too, and it lands on the day your team is trying to fund. A platform that can route continues on another path, and records that it did.",
          },
          {
            title: "A materially better model ships",
            body: "The interesting question to put to any vendor, including us, is what happens that week. Where the model is a configuration decision, the answer is an evaluation and a change. Where it is an architectural one, the answer is a roadmap item and eventually a migration.",
          },
          {
            title: "Terms, pricing or licensing change",
            body: "Commercial terms move. So does what a provider will permit for a given class of data. Independence keeps that a commercial decision you can make on the merits, rather than an ultimatum arriving inside a product you already depend on.",
          },
        ]}
      />

      {/* ── model classes ─────────────────────────────────────────────── */}
      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="The best model for the job"
            title="Models are specialising. That is the opportunity, not the risk."
            lede="Adjudicating a funding decision against a policy is a different task from reading a scanned proof of delivery, and neither resembles ranking a collections queue by exposure. The platform routes on the shape of the work."
          />
          <div className="mt-12">
            <DataTable
              caption="Classes of model and the work each does inside the platform"
              head={["Class", "What it is good at", "Where it does work here"]}
              rows={[
                ["Reasoning", "Multi step judgement, and stating why rather than only what", "Underwriting narrative, covenant interpretation, the briefing itself"],
                ["Decision", "Applying a written policy consistently to a specific case", "Funding adjudication, gate evaluation, exception routing"],
                ["Behavioural", "Patterns across time, and how a party acts rather than presents", "Fraud signals, promise history, debtor deterioration"],
                ["Document", "Extraction, classification, verification and tamper detection", "Intake, near duplicate detection, contract reading"],
                ["Quantitative", "Arithmetic that has to be right, at portfolio scale", "Exposure, concentration, dilution, borrowing base"],
                ["Agentic", "Carrying out a sequence of work rather than answering about it", "Collections drafting, reconciliation preparation, packet assembly"],
                [<span key="n" className="text-[var(--fg-subtle)]">Whatever ships next</span>, <span key="n2" className="text-[var(--fg-subtle)]">Not released yet, and that is the point</span>, <span key="n3" className="text-[var(--fg-subtle)]">Evaluated when it exists, adopted if it earns it</span>],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[74ch] text-[14px] leading-[1.6] text-[var(--fg-subtle)]">
            Routing is recorded with the rest of the evidence. A conclusion can always be traced back to
            what produced it, including which class of model did the work.
          </p>
        </Container>
      </Section>

      {/* ── the proof ─────────────────────────────────────────────────── */}
      <Section tone="sunken" bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div>
              <Eyebrow tone="signal">What it looks like when it is real</Eyebrow>
              <h2 className="text-section-lg mt-4 max-w-[22ch]">
                A factoring agreement is a configuration file nobody has read that way.
              </h2>
              <div className="mt-6 space-y-4 text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  Every client agreement you sign already contains the operating rules for that
                  relationship. The advance rate is in there. So is the fee schedule, the discount terms,
                  the reserve, the concentration limit and what happens when an invoice ages past its
                  window. Then somebody types all of it into a system by hand, and a transcription error
                  becomes a funding error four months later.
                </p>
                <p>
                  <strong>
                    Give the platform the executed agreement and it reads the terms, including the fees and
                    the discount schedule, and sets the client up against them.
                  </strong>{" "}
                  Not a summary of the agreement. The terms themselves, configured, with the clause each
                  one came from attached to it.
                </p>
                <p>
                  That is what intelligence being part of the architecture buys. A model connected to the
                  software can tell you what an agreement says. A system with intelligence inside it can
                  turn what the agreement says into the rules it will hold you to, and show you the
                  sentence behind every one of them.
                </p>
              </div>
              <Link href="/demo" className="btn-primary mt-8 inline-flex">
                Bring an agreement to the demonstration
              </Link>
            </div>

            <ContractCard />
          </div>
        </Container>
      </Section>

      {/* ── the register ──────────────────────────────────────────────── */}
      <ProseSection
        eyebrow="How to check any of this"
        title="Architecture claims are easy to make. These are the ones you can verify."
      >
        <p>
          Every claim on this page is checkable, and the checks are the same ones we would apply to
          anybody. Start with the{" "}
          <InlineLink href="/integrations">integration register</InlineLink>, where every connection
          carries one of five status words and eight vendors are named as connections we do{" "}
          <em>not</em> claim. A register that records absences is a register you can trust about presences.
        </p>
        <p>
          On accounting specifically, FactorFox holds{" "}
          <strong>
            {AVAILABLE_ACCOUNTING.length} accounting integrations, {AVAILABLE_ACCOUNTING.map((i) => i.name).join(" and ")}
          </strong>
          , both recorded as available, sitting on a true double entry core that has carried this
          business since 2002. Ask any vendor how many accounting packages they connect to, then ask them
          to show you the general ledger underneath. The two answers together tell you most of what you
          need to know about how deep the accounting really goes.
        </p>
        <p>
          On security, we publish where we actually are rather than a badge. A SOC 2 programme is under
          way, targeted for completion at the end of 2026, and until a report exists there is no
          certification claim anywhere on this site. Ask for the report, not the badge, and note whether a
          vendor separates their own posture from their cloud provider&rsquo;s. Our{" "}
          <InlineLink href="/platform/security">security position</InlineLink> states both plainly, and{" "}
          <InlineLink href="/compare/how-to-choose">how to choose</InlineLink> sets out the rest of the
          questions worth asking.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What operators ask about the architecture" />

      <RelatedPages
        links={[
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "What sits behind every conclusion, and how to open it." },
          { href: "/platform/briefings", label: "Briefings", note: "Six questions, answered for what you are responsible for." },
          { href: "/platform/document-intelligence", label: "Document intelligence", note: "Extraction, verification and near duplicate detection." },
          { href: "/integrations", label: "Integrations", note: "Every connection, what moves, and the status it holds." },
          { href: "/platform/security", label: "Security", note: "The control surface, and the certification position stated plainly." },
          { href: "/compare/how-to-choose", label: "How to choose", note: "Including how to check a claim rather than accept it." },
        ]}
      />

      <CtaBand
        title="Bring your own book, and your own agreement."
        body="Send a slice of open receivables and a client agreement. We will show you what the first briefing says about your book, read the agreement into terms in front of you, and tell you plainly what we could not see and why."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "Tour the platform" }}
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

/* ------------------------------------------------------------------ asides */

function TwoArchitectures() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <p className="u-label text-[var(--fg-subtle)]">Two architectures</p>
          <Status kind="info" label="Same demo, different build" />
        </div>

        <div className="divide-y divide-[var(--line)]">
          <div className="px-5 py-4">
            <p className="u-label text-[var(--fg-subtle)]">AI enabled</p>
            <p className="mt-1.5 text-[14.5px] font-semibold leading-[1.45]">
              A model is connected to the software.
            </p>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
              It is handed a question and some context. It can summarise, draft and answer.
            </p>
          </div>

          <div className="px-5 py-4">
            <p className="u-label text-[var(--signal)]">AI native</p>
            <p className="mt-1.5 text-[14.5px] font-semibold leading-[1.45]">
              The intelligence is part of the operating system.
            </p>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
              It reads the ledger, applies the policy version in force, writes append only, and refuses to
              show a change it cannot prove.
            </p>
          </div>

          <div className="bg-[var(--bg-sunken)] px-5 py-4">
            <p className="u-label text-[var(--fg-subtle)]">And underneath both</p>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
              The model is the engine. It should be replaceable without replacing the vehicle.
            </p>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[12px] leading-[1.5] text-[var(--fg-subtle)]">
        Both demonstrate well. The difference appears when somebody asks the software to prove a
        conclusion it reached on its own.
      </figcaption>
    </figure>
  );
}

function ContractCard() {
  const rows: [string, string][] = [
    ["Advance rate", "Clause 3.1"],
    ["Discount schedule", "Clause 4.2, schedule A"],
    ["Fee structure", "Clause 4.4"],
    ["Reserve percentage", "Clause 5.1"],
    ["Concentration limit", "Clause 7.3"],
    ["Ageing and recourse window", "Clause 9.2"],
  ];
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <p className="u-label text-[var(--fg-subtle)]">Agreement read into terms</p>
          <Status kind="available" label="In the product" />
        </div>
        <ul className="divide-y divide-[var(--line)]">
          {rows.map(([term, clause]) => (
            <li key={term} className="flex items-center justify-between gap-4 px-5 py-3">
              <span className="text-[14.5px] font-medium">{term}</span>
              <span className="u-label whitespace-nowrap text-[var(--fg-subtle)]">{clause}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-4">
          <p className="text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
            Every configured term keeps a link to the sentence it came from, so a disagreement about what
            was agreed is settled by opening the clause rather than by memory.
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[12px] leading-[1.5] text-[var(--fg-subtle)]">
        Clause references are illustrative of the structure. Yours are read from your own agreement.
      </figcaption>
    </figure>
  );
}
