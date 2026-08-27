import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
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
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "FMCSA integration for freight factoring",
  description:
    "Capture carrier and broker registration identity on both sides of the load, with a gate that refuses to assert operating authority, insurance or safety.",
  path: "/integrations/transportation",
  intent: "integration",
  target: "FMCSA integration for freight factoring",
});

const FAQS = [
  {
    q: "Does FactorFox tell us whether a carrier's authority is active?",
    a: "No, and it will not pretend to. Registration identity is captured and attached to the party file. Operating authority currency, insurance currency and safety scores are not asserted, and the gate that would assert them is explicitly forbidden from guessing. It says so on screen rather than producing a green tick that an underwriter would reasonably read as a verified fact.",
  },
  {
    q: "Then what is the FMCSA lookup for?",
    a: "Identity, on both sides of the load. Confirming that the party in front of you corresponds to a registration, that the broker your client is invoicing is the broker they say it is, and that the same registration is not appearing under two client names in your portfolio. Identity is a genuinely useful answer. It is simply a smaller answer than the one most software implies it is giving you.",
  },
  {
    q: "Why does the debtor side matter as much as the client side?",
    a: "In transportation the client is the carrier and the debtor is usually the broker, so a check offered only on the client throws away half of what you needed. Broker payment behaviour is the risk in freight factoring far more often than carrier registration is, and the broker is the party whose conduct across your whole portfolio you can actually observe.",
  },
  {
    q: "What does Tessera Network verification add that a rate confirmation does not?",
    a: "Corroboration from a party other than the one asking to be paid. A rate confirmation is a document the client supplied. A verified claim carries the provenance behind the verdict, and the verdict without its provenance does not count. Verification runs capture their evidence at run time and are never re fetched, so a load verified in March still shows what was known in March.",
  },
  {
    q: "Is TriumphPay a FactorFox integration?",
    a: "It is not a current integration. Not partially, not through a partner, not by an import built once for one customer. If it matters to your operation, raise it during the evaluation and you will get a straight answer about what building it would involve, which is a better position for you than finding out after signing.",
  },
  {
    q: "Where does FactorEvo fit?",
    a: "It is a sibling product in the FactorEvo network rather than a connector: the transportation specialty finance surface, built on the same intelligence layer, with separate product and separate tenancy. Operations that need a dedicated freight management surface run there. Operations that fund freight alongside other industries run FactorFox.",
  },
];

export default function TransportationPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox transportation integrations",
          description:
            "FMCSA carrier and broker identity on both the client and debtor side, and Tessera Network freight claim verification with provenance, for transportation factoring operations.",
          path: "/integrations/transportation",
        })}
      />

      <PageHero
        trail={[
          { name: "Integrations", path: "/integrations" },
          { name: "Transportation", path: "/integrations/transportation" },
        ]}
        eyebrow="Transportation"
        title="The most valuable thing this integration does is refuse to answer a question."
        lede={
          <>
            <p>
              Written for freight factors and the underwriters who look at both ends of a load. FMCSA lookup on
              the carrier you are funding and on the broker who owes the money, and Tessera Network claim
              verification for the load itself.
            </p>
            <p>
              What it will not do is tell you that a carrier&rsquo;s authority is current, that their insurance
              is in force, or what their safety score means. It captures. It does not verify, and it says which
              is which.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/solutions/transportation", label: "See transportation factoring" }}
        aside={<RefusalScene />}
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="Freight fraud does not usually involve a fake carrier. It involves a real one."
        lede="A registration that exists, a load that was really moved, and an invoice that has already been paid to somebody else. The screens that look most reassuring are the ones that were never asked to be right."
        rows={[
          {
            problem:
              "A platform shows a green authority indicator, an underwriter reads it as verified, and nobody knows what date the underlying data was pulled or from where.",
            response:
              "Registration identity is captured, dated and attached. Authority currency, insurance currency and safety scores are not asserted at all, and the interface says so where a green tick would otherwise sit.",
          },
          {
            problem:
              "The check runs on the carrier because the carrier is the client, and the broker who actually owes the money is entered as a name somebody typed.",
            response:
              "The lookup runs on both sides. The broker becomes a resolved party, which is what makes exposure under one debtor name across several clients visible in the first place.",
          },
          {
            problem:
              "The only evidence a load happened is a rate confirmation and a bill of lading, both supplied by the party asking to be paid.",
            response:
              "Tessera Network verification brings back a verdict with the provenance behind it, from a party other than the one submitting the invoice.",
          },
          {
            problem:
              "The same load is invoiced twice under two carrier names, or re submitted a month later with a different reference.",
            response:
              "Near duplicate detection blocks at verification, and cross portfolio fingerprinting catches the same paper submitted under two clients rather than only within one.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The refusal"
        title="A gate that is not allowed to guess, and is not allowed to be made advisory."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">What the gate is forbidden from saying</Eyebrow>
            <ul className="mt-4 space-y-3 text-[0.9375rem] leading-[1.55] text-[var(--fg-muted)]">
              <li className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
                That operating authority is current
              </li>
              <li className="border-t border-[var(--line)] pt-3">That insurance is in force</li>
              <li className="border-t border-[var(--line)] pt-3">What a safety score implies about a carrier</li>
            </ul>
            <p className="mt-5 text-[0.8125rem] leading-[1.55] text-[var(--fg-subtle)]">
              It is captured data, presented as captured data, with the date it was captured. An underwriter can
              act on it. Nobody can point at it afterwards and say the software said it was fine.
            </p>
          </Card>
        }
      >
        <p>
          Somewhere in every transportation lending stack there is a screen with a tick on it, and somewhere
          downstream there is an underwriter who has learned to read that tick as a verified assertion. Nobody
          decided this would happen. It happened because the interface offered certainty that the data behind it
          never supported.
        </p>
        <p>
          <strong>FactorFox refuses to produce that tick.</strong> The relevant gate is explicitly forbidden from
          asserting authority currency, insurance currency or safety scores, and it states its refusal on screen
          rather than quietly omitting the field. A refusal an operator can see is a control. An omission is a
          gap they will fill with an assumption.
        </p>
        <p>
          <strong>The reason is liability, and it is yours rather than ours.</strong> An advance made against a
          load moved by a carrier whose authority had lapsed is a conversation with your insurer, and the
          strength of your position in that conversation depends on what your own systems told your own people.
          A system that said nothing leaves your officer&rsquo;s judgement intact. A system that said fine has
          quietly transferred the error to you.
        </p>
        <p>
          <strong>This is the same asymmetry that governs money in the platform.</strong> Automation may stop
          something. It may not wave something through. A gate that protects a decision is either enforced or it
          is not present, and there is no configuration that turns this one into a suggestion during a busy
          quarter.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The rows"
            title="What is connected here, and what each one is entitled to claim"
            lede="Two integrations and one sibling product. The third is not a connector and is not described as one."
          />
          <div className="mt-11">
            <DataTable
              caption="Transportation integrations"
              head={["Row", "Status", "What moves", "What it does not claim"]}
              rows={[
                [
                  "FMCSA",
                  <Status key="fmcsa" kind="available" />,
                  "Registration identity in, on the carrier client and on the broker debtor, attached to the party file with the date it was captured.",
                  "Operating authority currency, insurance currency and safety scores are not asserted, and the gate that would assert them is forbidden from guessing.",
                ],
                [
                  "Tessera Network",
                  <Status key="tessera" kind="available" />,
                  "A claim goes out for verification. A verdict comes back with the provenance behind it, captured at run time.",
                  "A verdict without provenance does not count as verification, and a run is never re fetched underneath the decision that used it.",
                ],
                [
                  "FactorEvo",
                  <Status key="factorevo" kind="ecosystem" />,
                  "A shared intelligence layer, not a connector. The transportation specialty finance sibling with its own product surface.",
                  "Separate product, separate tenancy. It is not an integration and is not counted as one.",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            TriumphPay is not a current integration. It is named here because it is asked about often enough
            that silence would be its own kind of answer, and because a buyer deserves to know that before an
            implementation rather than during one.
          </p>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="Verification"
        title="What corroboration looks like when the only witness is the party being paid"
        lede="Freight has one advantage over most receivable classes: a load involves several parties, and they do not all have the same interest in what you believe."
        columns={3}
        items={[
          {
            title: "Cross validation",
            body: "A claim is verified against parties other than the one submitting the invoice. That is the entire value. A document supplied by the client corroborates the client.",
          },
          {
            title: "Provenance or nothing",
            body: "The verdict carries the provenance behind it. A verification result you cannot trace back is a rumour with a timestamp, and it will not survive a dispute.",
          },
          {
            title: "Pinned at run time",
            body: "Verification runs capture their evidence when they run and are never re fetched. A load verified in March still shows March, next to the decision March produced.",
          },
          {
            title: "Both parties resolved",
            body: "Carrier and broker each become a party with an exposure, so the broker funding four of your clients is one concentration rather than four unrelated names.",
          },
          {
            title: "Duplicate paper caught",
            body: "Near duplicate detection blocks at verification, across the portfolio rather than within one client, which is where the same load invoiced twice actually shows up.",
          },
          {
            title: "Exceptions reach the briefing",
            body: "A verification exception is a signal, so it arrives in the morning brief with its severity, its reason and the actions available, rather than waiting in a queue somebody opens on Thursday.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="What a freight underwriter asks about these checks" />

      <RelatedPages
        links={[
          { href: "/solutions/transportation", label: "Transportation factoring", note: "The whole operation, not just the two integrations underneath it." },
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "Duplicate paper, submission timing and the signals around a load." },
          { href: "/platform/document-intelligence", label: "Document intelligence", note: "Rate confirmations and bills of lading, and what extraction is allowed to be." },
          { href: "/integrations/credit-and-risk", label: "Credit and risk", note: "Broker payment behaviour from the network, at no per check cost." },
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "What happens to a decision when a verification exception lands." },
          { href: "/integrations", label: "All integrations", note: "The register, with a status column and a published absence list." },
        ]}
      />

      <CtaBand
        title="Ask what the carrier screen refuses to tell you."
        body="Bring a real MC number to the demonstration. The instructive moment is the field that stays empty and explains why, next to the ones that are filled in and dated."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/integrations", label: "Review our integrations" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

function RefusalScene() {
  return (
    <figure className="m-0">
      <div className="border border-[var(--line-strong)] bg-[var(--bg-raised)]" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
            Party &middot; Kestrel Logistics &middot; FMCSA
          </p>
          <Status kind="info" label="Captured 09:02" />
        </div>

        <div className="space-y-4 p-5">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-[0.8125rem]">
            {[
              ["Registration", "Matched"],
              ["Legal name", "Matched"],
              ["Role", "Carrier, client side"],
              ["Also seen as", "Debtor on 0 files"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">{k}</dt>
                <dd className="u-tabular m-0 text-[var(--fg)]">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="border border-[var(--line)] p-4">
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">
              Not asserted
            </p>
            <ul className="mt-2 space-y-1.5 text-[0.8125rem] leading-[1.5] text-[var(--fg-muted)]">
              <li>Operating authority currency</li>
              <li>Insurance currency</li>
              <li>Safety score interpretation</li>
            </ul>
            <p
              className="mt-3 border-l-2 pl-3 text-[0.8125rem] leading-[1.5]"
              style={{ borderColor: "var(--color-warn-600)", color: "var(--color-warn-600)" }}
            >
              This gate is forbidden from asserting these. Captured identity only, with the date it was captured.
            </p>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of the carrier identity panel. The refusal, its wording and the run time capture are the
        platform&rsquo;s own behaviour. The party name comes from a seeded demonstration book.
      </figcaption>
    </figure>
  );
}
