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
  Section,
  Container,
  SectionHead,
  Card,
  Eyebrow,
  Status,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Transportation factoring software for freight",
  description:
    "Fund carriers against brokers with rate confirmations, load level detail, quick pay, fuel advances and the double brokering checks a freight book needs.",
  path: "/solutions/transportation",
  intent: "category",
  target: "transportation factoring software",
});

const FAQS = [
  {
    q: "Do you verify a carrier's operating authority and insurance?",
    a: "No, and we will not say otherwise. FMCSA lookup is available on both the client side and the debtor side, and what it brings back is registration identity attached to the party file. Operating authority currency, insurance currency and safety scores are captured, never asserted. The gate that would assert them is explicitly forbidden from guessing and says so on screen. Any platform telling you it verifies insurance is telling you it read a field on a date it will not show you.",
  },
  {
    q: "Then what is the FMCSA lookup actually for?",
    a: "Identity and consistency. In freight the client is the carrier and the debtor is usually the broker, so both sides need looking at, and offering the check on one side only throws away half of it. The value is in what the identity contradicts: a name that does not match the party you were sent paperwork for, a party appearing under a second identity, an authority record that does not correspond to the entity that signed your agreement. That is a real finding. Insurance currency is not, and the platform keeps the difference visible.",
  },
  {
    q: "How do you handle double brokering?",
    a: "By cross validating the load against parties other than the one asking to be paid. Tessera Network claim verification sends a claim out and returns a verdict with the provenance behind it, and a verdict without its provenance does not count. Alongside that, duplicate and near duplicate documents are detected within the client and across the whole portfolio, which is what catches the same rate confirmation funded at two factors. The platform does not declare a load double brokered. It puts the contradiction, and where it came from, in front of an officer.",
  },
  {
    q: "Can the platform hold load level detail rather than just an invoice?",
    a: "Yes, and on a freight book it has to. A carrier's invoice is often a batch, and the useful unit of risk is the load: its origin and destination, its rate confirmation, its bill of lading and proof of delivery, its accessorials and its broker. Verification, aging, disputes and deductions all attach at the load, so a short pay on one load does not become an unexplained discrepancy across a batch of forty.",
  },
  {
    q: "How are fuel advances and quick pay treated?",
    a: "As advances that exist before the receivable is complete, which is the honest description and the reason they need their own treatment. A fuel advance is money out against a load that has not been delivered, so it belongs to that load and has to be recovered from it, with its fee accrued and its exposure visible while the load is still moving. Quick pay is a pricing decision on a receivable that does exist. Keeping them separate matters because a book where fuel advances are quietly folded into gross advances hides how much of your exposure has no delivered freight behind it.",
  },
  {
    q: "The same broker owes us money through six carriers. Do we see that?",
    a: "Yes, as one figure. Concentration is aggregated under one debtor name across every client that bills them, which in freight is the number that actually matters, because a mid sized broker can sit behind a quarter of a book without appearing large on any single client file. Payment velocity by obligor is measured the same way, so a broker slowing down is visible before six carriers separately mention it.",
  },
];

export default function TransportationPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox transportation factoring",
          description:
            "Freight factoring platform: carriers as clients and brokers as debtors, load level detail, rate confirmations and proofs of delivery, quick pay and fuel advances, misdirected payment tracking, and FMCSA lookup on both sides without asserting authority or insurance currency.",
          path: "/solutions/transportation",
        })}
      />

      <PageHero
        trail={[
          { name: "Solutions", path: "/solutions" },
          { name: "Transportation", path: "/solutions/transportation" },
        ]}
        eyebrow="Transportation factoring"
        title="Your client is the carrier. Your debtor is the broker. Almost nothing about that behaves like commercial factoring."
        lede={
          <>
            <p>
              Written for the freight factor. Not for a carrier looking to factor loads, though if that is
              why you are here, one of our customers is who you want.
            </p>
            <p>
              Freight has its own paperwork, its own advance types, its own fraud and its own way of losing
              a payment. It also has a data source everybody advertises and almost nobody handles honestly,
              which is where this page ends up.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/integrations/transportation", label: "See the transportation sources" }}
        aside={<CarrierScene />}
      />

      <ProblemSolution
        eyebrow="What freight does differently"
        title="High volume, low value, and every one of them a separate story."
        lede="A commercial factor funds a hundred invoices a week. A freight factor funds a hundred loads a day, most of them small, and the exceptions are buried in the volume."
        rows={[
          {
            problem:
              "An invoice covers forty loads, one gets short paid, and the discrepancy is chased at the batch level for a week.",
            response:
              "The load is the unit. Verification, aging, deductions and disputes attach to the load, so the short pay names the load, the broker and the reason.",
          },
          {
            problem:
              "Fuel advances are issued fast because that is the product, and the exposure against undelivered freight is only visible in somebody's spreadsheet.",
            response:
              "An advance issued before delivery is carried against the load it belongs to, with its fee accrued and its recovery tracked, so undelivered exposure is a number you can read.",
          },
          {
            problem:
              "A broker slows down, and it is noticed when six different carriers each mention it in the same week.",
            response:
              "Payment velocity is measured per obligor across every client billing them, so the broker slowing down is a signal before it is six phone calls.",
          },
          {
            problem:
              "The same rate confirmation is funded twice, at two factors, because nobody could see outside their own book.",
            response:
              "Near duplicate detection runs within the client and across the portfolio, and claim verification returns a verdict with the provenance behind it.",
          },
          {
            problem:
              "A broker pays the carrier directly, the carrier spends it, and the invoice still reads open.",
            response:
              "Misdirected payment is its own condition with its own aging and its own escalation on repetition, because in freight the second time means something.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The refusal"
        title="We will tell you what the registration says. We will not tell you the insurance is current."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Captured, never asserted</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Operating authority currency, insurance currency and safety scores are captured and shown as
              what they are: values read from a source at a moment in time.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              The gate that would turn them into an assertion is explicitly forbidden from doing so, and it
              says that on screen rather than passing silently. If your credit policy requires proof of
              insurance, the platform will hold the certificate you obtained and the date you obtained it.
              It will not manufacture the conclusion for you.
            </p>
          </Card>
        }
      >
        <p>
          Every transportation factoring platform advertises an FMCSA connection, and the implication
          carried along with it is that the software is watching authority and insurance on your behalf.
          Read the claim carefully and it usually resolves to this: a field was read on a date, stored, and
          displayed later as though it were still true.
        </p>
        <p>
          We are not doing that, and the refusal is worth more to you than the feature would be. A
          conclusion your platform asserts is a conclusion your officers stop checking. When it turns out
          the authority lapsed three weeks after the field was read, the loss is yours and the screen that
          reassured everybody is now an exhibit.
        </p>
        <p>
          <strong>What the lookup is genuinely good for is identity.</strong> It runs on both the client
          side and the debtor side, because in freight the carrier and the broker both need looking at, and
          it attaches registration identity to the party file. The findings that matter are
          contradictions: a party operating under a second identity, a name that does not match the
          paperwork you were sent, an entity that is not the one that signed your agreement. Those are
          real, checkable, and they are what a fraud actually looks like early.
        </p>
        <p>
          <strong>Cross validation comes from parties other than the one asking to be paid.</strong>{" "}
          Tessera Network claim verification returns a verdict with its provenance attached, and a verdict
          without provenance does not count. Verification runs capture their evidence at the moment they
          run and are never re fetched, so what an officer certified is what an officer saw.
        </p>
      </ProseSection>

      <FeatureGrid
        eyebrow="Freight specifics"
        title="The parts of the product that only exist in this vertical."
        items={[
          {
            title: "Load level detail",
            body: "Origin, destination, rate confirmation, bill of lading, proof of delivery, accessorials and the broker, held per load. Batched invoices resolve to loads rather than hiding them.",
          },
          {
            title: "Fuel advances",
            body: "Money out against a load that has not delivered. Carried against that load with its fee accrued and its recovery tracked, so exposure with no delivered freight behind it is measurable.",
          },
          {
            title: "Quick pay",
            body: "A pricing decision on a receivable that exists, kept distinct from an advance on one that does not. Confusing the two is how a freight book misreads its own risk.",
          },
          {
            title: "Broker aggregation",
            body: "One broker, every carrier billing them, one exposure and one payment velocity. A mid sized broker can carry a quarter of a book without looking large anywhere.",
          },
          {
            title: "Misdirected payment",
            body: "Tracked as an unremitted balance against the carrier with its own aging, escalating on repetition. In freight the first time is a mistake and the second is a pattern.",
          },
          {
            title: "Document intake at volume",
            body: "Email, portal and SFTP held to one evidence standard, extracted under a strict schema and revalidated in ordinary code. Non conforming output is rejected, never repaired.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The paperwork"
            title="Four documents, and what each one can and cannot prove."
            lede="Freight fraud is a documents problem long before it is a credit problem."
          />
          <div className="mt-11">
            <DataTable
              caption="Freight documents and their evidentiary value"
              head={["Document", "What it establishes", "What it does not establish"]}
              rows={[
                [
                  "Rate confirmation",
                  "That a broker agreed a rate with a carrier for a load, with the parties and the amount named",
                  "That the carrier hauled it. The same confirmation reappearing under another client is the classic double funding pattern",
                ],
                [
                  "Bill of lading",
                  "That freight was tendered, with shipper, consignee and description",
                  "That it was delivered, or that the party billing you is the party that moved it",
                ],
                [
                  "Proof of delivery",
                  "That the consignee received the freight, signed and dated",
                  "That the broker accepts the amount. Accessorials and detention are argued after delivery, routinely",
                ],
                [
                  "Accessorial and lumper receipts",
                  "Costs incurred against a load, chargeable under the confirmation",
                  "That the broker approved them. Unapproved accessorials are a leading source of freight dilution",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Each of these is extracted under a strict schema, revalidated in ordinary deterministic code
            before it touches your book, and matched against the load. Duplicates and near duplicates are
            detected within the client and across the whole portfolio, and what reaches an officer is the
            contradiction with the evidence attached.
          </p>
        </Container>
      </Section>

      <FaqBlock items={FAQS} title="What a freight factor asks first" />

      <RelatedPages
        links={[
          { href: "/integrations/transportation", label: "Transportation sources", note: "FMCSA and Tessera Network, with the controls stated on each row." },
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "Behavioural combinations, near duplicates and the bank change hold." },
          { href: "/platform/document-intelligence", label: "Document intelligence", note: "Rate confirmations and proofs of delivery under a strict schema." },
          { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "Payment velocity by broker and exposure aggregated across carriers." },
          { href: "/platform/collections", label: "Collections", note: "Prioritised by exposure and promise history, at freight volumes." },
          { href: "/solutions/factoring", label: "Factoring", note: "The commercial book, where the debtor is not a broker." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "Why a verdict without its provenance does not count." },
        ]}
      />

      <CtaBand
        title="Ask us to prove the insurance is current."
        body="We will refuse, on screen, and then show you what the platform will stand behind: registration identity on both sides, claim verification with provenance, and the contradictions that actually catch fraud."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/solutions", label: "See every funding structure" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

const CHECKS: { label: string; value: string; note: string; kind: "available" | "attention" | "critical" | "info" }[] = [
  { label: "Registration identity", value: "Matched", note: "Carrier name matches the party on your agreement", kind: "available" },
  { label: "Second identity", value: "Found", note: "Same address active under a second registration", kind: "critical" },
  { label: "Operating authority currency", value: "Not asserted", note: "Captured from the source. The gate refuses to conclude", kind: "info" },
  { label: "Insurance currency", value: "Not asserted", note: "Captured, never verified. Hold your own certificate", kind: "info" },
  { label: "Safety score", value: "Not asserted", note: "Displayed as read, with no claim attached to it", kind: "info" },
  { label: "Claim verification", value: "Verdict returned", note: "Tessera Network, provenance attached to the verdict", kind: "available" },
];

function CarrierScene() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
              Party check &middot; Redhawk Transit LLC &middot; client side
            </p>
            <p className="mt-0.5 text-[0.875rem] font-semibold">
              6 checks <span className="font-normal text-[var(--fg-muted)]">&middot; three of them refuse to conclude</span>
            </p>
          </div>
          <Status kind="critical" label="1 contradiction" />
        </div>

        <ul className="divide-y divide-[var(--line)]">
          {CHECKS.map((c) => (
            <li key={c.label} className="px-5 py-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="text-[0.8125rem] font-semibold leading-[1.35]">{c.label}</span>
                <span
                  className="font-mono text-[0.75rem] font-semibold"
                  style={{ color: c.value === "Not asserted" ? "var(--fg-subtle)" : undefined }}
                >
                  {c.value}
                </span>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                <Status kind={c.kind} label={c.kind === "info" ? "No claim made" : c.kind === "critical" ? "Finding" : "Evidenced"} />
                <span className="text-[0.75rem] leading-[1.5] text-[var(--fg-muted)]">{c.note}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="border-t border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
          Authority, insurance and safety are captured &middot; the gate is forbidden from asserting them
        </p>
      </div>
      <figcaption className="mt-3 max-w-[52ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of a carrier side party check. The refusal to assert operating authority currency,
        insurance currency and safety scores, the surfacing of a second registered identity as a
        contradiction, and claim verification returning a verdict with its provenance are the platform&rsquo;s own
        behaviour. The carrier name comes from a seeded demonstration book.
      </figcaption>
    </figure>
  );
}
