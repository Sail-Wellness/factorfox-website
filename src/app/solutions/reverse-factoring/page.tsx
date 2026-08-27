import type { Metadata } from "next";
import {
  PageHero,
  ProseSection,
  FeatureGrid,
  StepList,
  ProblemSolution,
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
  title: "Reverse factoring software for buyer programmes",
  description:
    "Run buyer approved payables, onboard suppliers at scale, price early payment offers and settle at maturity, underwriting the buyer not the supplier.",
  path: "/solutions/reverse-factoring",
  intent: "category",
  target: "reverse factoring software",
});

const FAQS = [
  {
    q: "Reverse factoring, supply chain finance, payables finance, confirming. Are these the same thing?",
    a: "Close enough that arguing about it wastes a meeting, and different enough that the words matter in a contract. Reverse factoring is the mechanism: a buyer approves an invoice, and a funder pays the supplier early against the buyer's promise. Supply chain finance is the wider category the mechanism sits inside. Payables finance is what a corporate treasury calls it, because the programme lives on their payables side. Confirming is what it is called across Spanish speaking Latin America, where the confirming line is a mature product and the vocabulary on screen should be the local one.",
  },
  {
    q: "Whose credit is actually being underwritten?",
    a: "The buyer's, and that single fact reorganises the whole operation. In classic factoring you underwrite the supplier and monitor a fragmented debtor population. Here you underwrite one obligor deeply, monitor them continuously, and then onboard hundreds of suppliers who each represent an operational and compliance question rather than a credit question. The concentration risk is total and deliberate, which is exactly why the buyer needs to be re underwritten on every material event rather than annually.",
  },
  {
    q: "How is dilution risk different in this product?",
    a: "It is largely removed, and that is the commercial point. Once the buyer has approved the payable, the amount is confirmed and the ordinary sources of dilution in factoring, disputes, short pays, credit notes and returns, have already been resolved on the buyer's side before the funding decision exists. What replaces dilution risk is approval integrity: whether the approval is genuine, whether it can be withdrawn, and what the programme agreement says about set off. The platform holds the approval as the evidence and keeps the agreement terms alongside it.",
  },
  {
    q: "Can suppliers be onboarded without a queue forming?",
    a: "Onboarding is the operational bottleneck in every programme, so it is treated as a pipeline with states rather than as a folder of applications. Identity, bank details, tax documentation, sanctions posture and the programme agreement each hold their own state, and the file moves when its next requirement is satisfied. Bank details specifically sit under a human only hold, in onboarding as everywhere else. A supplier who has stalled for eleven days is visible as a stalled file with a named reason, not as an absence somebody notices later.",
  },
  {
    q: "Does every supplier have to take the early payment offer?",
    a: "No, and the economics of a programme depend on which ones do. Suppliers choose per invoice, and the platform holds the offer, the discount at the date of acceptance, the acceptance itself and the settlement as one linked record. Uptake, by supplier and by tenor, is measurable, which is what tells you whether the programme is working or whether you have onboarded three hundred suppliers who never use it.",
  },
  {
    q: "What happens at maturity if the buyer does not pay?",
    a: "It is the event the whole product is exposed to, so it is monitored rather than assumed away. Buyer payment velocity is measured continuously, an approved payable that has not settled is an exception with an owner, and utilisation of the programme limit is reported against the facility. FactorFox does not replace your legal position or your recovery decision. It makes sure the deterioration reached a named person early, with the approval, the invoice and the agreement clause already assembled.",
  },
];

export default function ReverseFactoringPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox reverse factoring",
          description:
            "Reverse factoring and supply chain finance platform for funders: buyer approved payables, supplier onboarding at scale, early payment offers, discount handling and settlement at maturity.",
          path: "/solutions/reverse-factoring",
        })}
      />

      <PageHero
        trail={[
          { name: "Solutions", path: "/solutions" },
          { name: "Reverse factoring", path: "/solutions/reverse-factoring" },
        ]}
        eyebrow="Reverse factoring and supply chain finance"
        title="One buyer you underwrite deeply. Three hundred suppliers you have to onboard without a queue."
        lede={
          <>
            <p>
              This is written for the funder running the programme: the bank desk, the specialty finance
              company, the factor whose largest debtor asked whether their suppliers could be paid early.
              Not for a corporate treasury shopping for a payables tool, and not for a supplier looking to
              join somebody else&rsquo;s programme.
            </p>
            <p>
              Called payables finance by treasuries, supply chain finance by the market, and confirming
              across Spanish speaking Latin America, where we have customers and where the local word is
              the one that belongs on the screen.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/platform/continuous-underwriting", label: "How the buyer is monitored" }}
        aside={<ProgrammeScene />}
      />

      <ProseSection
        eyebrow="The inversion"
        title="Everything you learned in factoring points the wrong way here."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Concentration is the product</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              In factoring, exposure under one debtor name across several clients is a warning. In a
              confirming programme it is the design. The whole book leans on one obligor and that is what
              you sold.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Which changes what monitoring has to do. Deep and continuous on one name, with payment
              velocity, utilisation against the programme limit and every material event triggering a
              fresh underwriting run that is versioned and openable, rather than an annual review and a
              hope.
            </p>
          </Card>
        }
      >
        <p>
          The mechanism is simple to describe and unforgiving to operate. A buyer approves a supplier
          invoice for payment at its ordinary maturity. That approval converts a trade payable into
          something close to a confirmed obligation of a creditworthy company. The funder offers the
          supplier payment now, at a discount priced off the buyer&rsquo;s credit rather than the supplier&rsquo;s,
          and is repaid by the buyer at maturity.
        </p>
        <p>
          <strong>The credit question collapses to one name.</strong> You are not assessing three hundred
          small suppliers. You are assessing one large buyer, repeatedly, and every supplier you add
          increases operational and compliance load rather than credit exposure.
        </p>
        <p>
          <strong>The operational question expands to three hundred.</strong> Identity, bank details, tax
          documentation, sanctions posture, agreement execution, and a support relationship in whatever
          language the supplier works in. A programme fails at onboarding far more often than it fails at
          credit.
        </p>
        <p>
          <strong>Dilution mostly disappears, and approval integrity replaces it.</strong> The disputes and
          short pays that make factoring dilution difficult have already been settled inside the
          buyer&rsquo;s own approval process. What matters now is that the approval is genuine, that its
          withdrawal conditions are understood, and that the set off terms in the programme agreement are
          recorded rather than remembered.
        </p>
      </ProseSection>

      <FeatureGrid
        eyebrow="Programme operations"
        title="Six things a programme lives or dies on."
        items={[
          {
            title: "Buyer approval as evidence",
            body: "The approval that converts a payable is held as the evidence for the funding, with its source, its timestamp and its amount. Every downstream figure opens back onto it.",
          },
          {
            title: "Supplier onboarding as a pipeline",
            body: "States rather than folders. Identity, bank details, tax documents, sanctions posture and agreement execution each carry their own state and their own blocking reason.",
          },
          {
            title: "Bank details under a human hold",
            body: "The single most expensive detail in the programme. The machine may stop the payment and never release it. A named person releases, under four eyes, with the reason recorded.",
          },
          {
            title: "Early payment offers",
            body: "Offer, discount at the date of acceptance, acceptance and settlement held as one linked record per invoice, so uptake by supplier and by tenor is a measurement rather than an impression.",
          },
          {
            title: "Programme limit and utilisation",
            body: "Utilisation against the buyer's limit and against your own facility, reported continuously with availability compression and days to zero on the current trajectory.",
          },
          {
            title: "Settlement at maturity",
            body: "Buyer settlement reconciled against the approved payables it discharges, with an unsettled approved payable becoming an exception that has an owner rather than an aging line nobody watches.",
          },
        ]}
      />

      <StepList
        eyebrow="The cycle"
        title="From an approved payable to a settled programme."
        lede="The same five movements, repeated at whatever volume the buyer's payables run at."
        steps={[
          {
            label: "Approval",
            title: "The buyer approves, and the payable becomes financeable",
            body: "Approved payables arrive from the buyer's environment and are held with the approval as evidence rather than as a data load. An amount that does not match the invoice it references is an exception before it is an offer, because a discrepancy discovered after a supplier has been paid is a conversation with your largest client.",
          },
          {
            label: "Offer",
            title: "The supplier is offered payment now, priced off the buyer",
            body: "The discount is computed from the tenor remaining to maturity and the programme pricing, and the offer is presented in the supplier's own language and currency where the programme runs across borders. What the supplier sees is what the platform recorded.",
          },
          {
            label: "Acceptance",
            title: "Acceptance is per invoice, and it is a decision the supplier owns",
            body: "Some suppliers take every offer, some take one in five at quarter end, and the difference is the economics of your programme. Acceptance is linked to the offer that produced it, at the price that stood on the day, so nothing is repriced retrospectively.",
          },
          {
            label: "Payment",
            title: "Funds are released to the supplier under the ordinary controls",
            body: "Payment files are generated for the rails your bank accepts, release control sits in front of them and the delivery wall stops a test from reaching a real supplier. Every release records the actor, the evidence and the policy version into an audit record that cannot be mutated.",
          },
          {
            label: "Maturity",
            title: "The buyer settles, and the programme reconciles itself",
            body: "Settlement is matched against the approved payables it discharges, with the original remittance preserved as evidence and never posted silently. Buyer payment velocity feeds straight back into the underwriting run on the one name the whole programme depends on.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Against classic factoring"
            title="Same platform, opposite assumptions."
            lede="If your team runs both products, this is the table worth putting in front of them, because the habits do not transfer."
          />
          <div className="mt-11">
            <DataTable
              caption="Reverse factoring compared with classic factoring"
              head={["Dimension", "Classic factoring", "Reverse factoring"]}
              rows={[
                ["Credit assessed", "The client, plus a fragmented debtor population", "The buyer, one name, continuously and deeply"],
                ["Concentration", "A warning to be managed and reported", "The intended design of the programme"],
                ["Dilution", "A live risk measured against the client's own history", "Largely settled inside the buyer's approval before funding exists"],
                ["Verification", "Prove the receivable is real and undisputed", "The buyer's approval is the proof. Approval integrity replaces verification"],
                ["Onboarding volume", "A handful of clients, underwritten carefully", "Hundreds of suppliers, onboarded operationally at pace"],
                ["Notification", "Sometimes withheld, and constrained everywhere when it is", "Inherent. The buyer created the programme and the supplier joined it"],
                ["Failure mode", "A client that deteriorates, or a debtor that disputes", "The buyer fails, or the onboarding queue stalls and uptake never arrives"],
              ]}
            />
          </div>
        </Container>
      </Section>

      <ProblemSolution
        eyebrow="What goes wrong"
        title="Programmes rarely fail loudly. They stall."
        rows={[
          {
            problem:
              "Two hundred suppliers were onboarded and forty use the programme, and nobody can say why the other hundred and sixty do not.",
            response:
              "Uptake is measured per supplier and per tenor against offers made, so a programme that has been sold but not adopted is visible as a number rather than as a feeling.",
          },
          {
            problem:
              "A supplier file sits waiting on one tax document for three weeks because it was nobody's item.",
            response:
              "Every stalled onboarding carries the requirement blocking it and the person who owns it, and appears in that person's briefing with the age of the stall.",
          },
          {
            problem:
              "The buyer's payment behaviour changes and the first anybody hears is a settlement that arrives four days late.",
            response:
              "Payment velocity on the buyer is monitored continuously and a change triggers a fresh underwriting run, versioned immutably, with the movement stated rather than re baselined.",
          },
          {
            problem:
              "A supplier emails new bank details during a payment run and someone helpful updates them.",
            response:
              "Bank account changes are held for a named human in every product on the platform. Nothing about a payment run relaxes that.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="What a programme owner asks first" />

      <RelatedPages
        links={[
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "One buyer, re underwritten on every material event and versioned." },
          { href: "/platform/client-onboarding", label: "Onboarding", note: "Intake, checks, gates and the states a stalled file sits in." },
          { href: "/platform/treasury", label: "Treasury", note: "Supplier payment files, release control and reconciliation at maturity." },
          { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "Payment velocity, utilisation and concentration on a single obligor." },
          { href: "/solutions/purchase-order-funding", label: "Purchase order funding", note: "The same buyer financed earlier in the chain, before the invoice exists." },
          { href: "/solutions/factoring", label: "Factoring", note: "The receivable side product, with the assumptions the other way around." },
          { href: "/platform/security", label: "Security and controls", note: "Tenant isolation, four eyes, delivery controls and revocation." },
        ]}
      />

      <CtaBand
        title="Bring us a programme that is not converting."
        body="We will model the buyer, the onboarding pipeline and the offer to acceptance chain against a demonstration book, and show you where uptake is actually being lost."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/solutions", label: "See every funding structure" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

const PIPELINE: { stage: string; count: string; note: string; kind: "available" | "attention" | "critical" | "info" }[] = [
  { stage: "Invited", count: "312", note: "Programme agreement sent in the supplier's own language", kind: "info" },
  { stage: "Identity cleared", count: "268", note: "Sanctions posture recorded, evidence captured at run time", kind: "available" },
  { stage: "Bank details held", count: "41", note: "Human only hold. No machine may release these", kind: "attention" },
  { stage: "Stalled", count: "17", note: "Oldest 11 days. Blocking requirement named on every file", kind: "critical" },
  { stage: "Active on offers", count: "204", note: "Uptake measured per supplier and per tenor", kind: "available" },
];

function ProgrammeScene() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
              Programme CONF-04 &middot; buyer Astilla Comercial &middot; confirming
            </p>
            <p className="mt-0.5 text-[0.875rem] font-semibold">
              Supplier pipeline <span className="font-normal text-[var(--fg-muted)]">&middot; every state carries its blocking reason</span>
            </p>
          </div>
          <Status kind="critical" label="17 stalled" />
        </div>

        <ul className="divide-y divide-[var(--line)]">
          {PIPELINE.map((p) => (
            <li key={p.stage} className="px-5 py-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="text-[0.875rem] font-semibold leading-[1.35]">{p.stage}</span>
                <span className="u-tabular font-mono text-[0.875rem] font-semibold">{p.count}</span>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                <Status kind={p.kind} label={p.kind === "attention" ? "Held" : p.kind === "critical" ? "Stalled" : undefined} />
                <span className="text-[0.75rem] leading-[1.5] text-[var(--fg-muted)]">{p.note}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="border-t border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
          Buyer limit utilisation 71% &middot; approved payables unsettled 0 &middot; last underwriting run 2 days ago
        </p>
      </div>
      <figcaption className="mt-3 max-w-[52ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of the supplier onboarding pipeline in a confirming programme. Onboarding as states with
        a named blocking requirement, the human only hold on bank details, uptake measurement and limit
        utilisation are the platform&rsquo;s own behaviour. Buyer name and figures come from a seeded demonstration
        book.
      </figcaption>
    </figure>
  );
}
