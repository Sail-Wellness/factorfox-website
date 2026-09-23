import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  FeatureGrid,
  StepList,
  ProseSection,
  FaqBlock,
  RelatedPages,
  CtaBand,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

/*
  Owner confirmed, 23 September 2026: the Capital Network is live in production, it launches
  factor to factor only, and pricing stays off the site. Every mechanic described here is in
  the platform code (CapitalNetworkCore, Allocation, Wire, Signals, Endpoints). Legal
  characterization is deliberately not asserted: the platform stores the governing legal and
  accounting configuration per transaction, and the page says exactly that and no more.
*/

export const metadata: Metadata = pageMeta({
  title: "Participation and syndication for factors",
  description:
    "Sell and buy participations in receivables with other FactorFox factors, with the ledger, disclosure, documents and settlement handled inside the platform.",
  path: "/platform/capital-network",
  intent: "product",
  target: "participation and syndication software for factors",
});

const FAQS = [
  {
    q: "Who can take part today?",
    a: "FactorFox customers, on both sides. A factor can originate an opportunity from its own book, take a participation in another factor's, or both. Banks, funds and other outside capital providers are coming next, and the identity and permission model was built for them from the start. If you are one and want to be early, say so on the demonstration request.",
  },
  {
    q: "Does the participant see my client list?",
    a: "No. An opportunity lists anonymized. Nothing on the card names the client or the debtor, and you can choose to mask your own name as well. More is revealed in levels, and each level is a dual party record both sides agreed to. A participant sees the client only once that level has been reached, and the screens are built so that a response can never carry more than the disclosure level allows.",
  },
  {
    q: "Is this treated as a participation or as secured financing?",
    a: "That depends on the transaction and on your counsel's view, and we do not give legal advice on how yours should be characterized. What FactorFox does is store the governing legal and accounting configuration with each transaction and book it accordingly, including sale treatment where that is the configuration. The treatment a deal was booked under is therefore on the record, not reconstructed later.",
  },
  {
    q: "Does anything move money automatically?",
    a: "No. Funding is approved and then confirmed by people, and settlements are calculated, approved, confirmed against the bank and reconciled as separate steps. What is automatic is the arithmetic: when a receipt posts, the participant's share is worked out and booked without anyone recalculating a waterfall in a spreadsheet.",
  },
  {
    q: "How is it priced?",
    a: "Per transaction, and we walk through it on a call rather than publishing a rate card, because negotiated schedules exist and a public number would misstate them. Every fee is charged against a versioned schedule, so any fee ever charged can be recomputed against the schedule that governed it at the time.",
  },
  {
    q: "What about opportunities in another country?",
    a: "They sit side by side. Opportunities carry their own currency, with US dollars, Australian and New Zealand dollars, Canadian dollars, pounds sterling and Mexican pesos supported, and FX rates are recorded rather than assumed. A US factor and an Australian factor can see each other's opportunities under local rules.",
  },
];

export default function CapitalNetworkPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox Capital Network",
          description:
            "Participation and syndication in receivables between factoring companies, booked on both ledgers from one canonical asset, with anonymized listings, staged disclosure, generated documents, an automatic waterfall and approved settlement.",
          path: "/platform/capital-network",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Capital Network", path: "/platform/capital-network" },
        ]}
        eyebrow="Capital Network"
        title="Participation inside the ledger, not beside it."
        lede={
          <>
            <p>
              For the factor with more good paper than capital, and the one with capital and not enough
              paper. The Capital Network lets FactorFox factors sell and buy participations in each
              other's receivables, as a transaction the platform lists, documents, books and settles
              itself.
            </p>
            <p>
              Available today between FactorFox customers. Outside capital providers are on the way.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "See the Capital Network" }}
        secondaryCta={{ href: "/platform/accounting", label: "How the ledger works" }}
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="Participations usually live in a spreadsheet, an inbox and two sets of books that disagree."
        lede="The credit is the easy part. The expensive part is everything that happens after the handshake."
        rows={[
          {
            problem:
              "The participant works from a copy of the originator's schedule, and the copy starts drifting from the real invoices the day it is sent.",
            response:
              "One canonical asset. A participation references the originator's invoices and never duplicates them, and cash application happens once, against the real invoice.",
          },
          {
            problem:
              "Each side keeps its own books and they reconcile at month end, if anyone gets to it.",
            response:
              "Both books post from the same event, each on its own ledger: the participation sold and the servicing on the originator's side, the asset and the accrued income on the participant's. A reversal reverses the same entries on both.",
          },
          {
            problem:
              "Showing a deal to a potential participant means showing them your client list.",
            response:
              "Opportunities list anonymized, with every figure on the card carrying its calculation. More is disclosed in levels, and each level is agreed by both parties and recorded.",
          },
          {
            problem:
              "Every payment means recalculating the waterfall by hand, and a reversed receipt means doing it again backwards.",
            response:
              "When a receipt posts, FactorFox runs the contractual waterfall: the participant's share of principal and income, the originator's servicing, and what is payable. The same receipt can never be counted twice, and a reversal unwinds exactly what it created.",
          },
        ]}
      />

      <StepList
        eyebrow="From listing to settlement"
        title="Six stages, and people approve the ones that move money"
        steps={[
          {
            label: "01",
            title: "List",
            body: "The originator lists an opportunity from its own book and decides who can see it and on what offering rules. The list of who it was offered to never leaves the originator.",
          },
          {
            label: "02",
            title: "Discover",
            body: "Capital providers set mandates for what they want to buy, and the network signals fits to both sides. A signal is computed from each party's own book and the anonymized listing, never from anyone else's.",
          },
          {
            label: "03",
            title: "Simulate and commit",
            body: "The participant models the position before anything is binding, registers interest, moves through disclosure, and commits.",
          },
          {
            label: "04",
            title: "Document",
            body: "The participation documents are generated from the commitment, executed, and stored beside it, so the paper and the booking can never describe two different deals.",
          },
          {
            label: "05",
            title: "Fund",
            body: "Funding is approved and then confirmed by people. The confirmation posts on both books, each on a connection bound to that book.",
          },
          {
            label: "06",
            title: "Service and settle",
            body: "Receipts run the waterfall as they post. Settlements are calculated, approved, confirmed against the bank and reconciled, each as its own recorded step.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="What is underneath it"
        title="Built as financial infrastructure, not as a marketplace"
        columns={3}
        items={[
          {
            title: "A participation passport",
            body: "Measured facts about a participant rather than a questionnaire: liquidity read from its own general ledger and exposure read from the participation subledger.",
          },
          {
            title: "A ledger both sides read",
            body: "Every action is written to a dual party audit record that both counterparties see, and mirrored into each firm's own log.",
          },
          {
            title: "Treatment on the record",
            body: "The legal and accounting configuration that governs a transaction is stored with it, so the treatment a deal was booked under is never a matter of memory.",
          },
          {
            title: "Multi currency",
            body: "Opportunities carry their own currency, FX rates are recorded, and US and Australian opportunities sit side by side under local rules.",
          },
          {
            title: "Signals",
            body: "The network tells an originator when its paper fits a mandate and tells a capital provider when an opportunity fits what it asked for, and records what it said.",
          },
          {
            title: "Compliance view",
            body: "Participations appear in the compliance view with everything else, rather than in a side system your examiner has never heard of.",
          },
        ]}
      />

      <ProseSection eyebrow="Why inside the operating system" title="The ledger is the reason it works.">
        <p>
          A participation marketplace that sits beside your software has to be told what happened. It
          learns about a payment when someone uploads a file, and it learns about a reversal when someone
          remembers. Two books drift, and the drift is found by an auditor.
        </p>
        <p>
          The Capital Network is inside the same operating system that holds the invoices, applies the
          cash and keeps the double entry ledger. So a participation is not a report about your book. It
          is a transaction in it, and the participant's position moves because the underlying receivable
          moved, not because a spreadsheet was updated.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What a credit committee asks" />

      <RelatedPages
        links={[
          { href: "/platform/accounting", label: "Accounting", note: "The double entry core every participation posts into." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "Availability computed from the same live collateral." },
          { href: "/platform/covenant-monitoring", label: "Covenant monitoring", note: "Concentration and facility limits watched as the book moves." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "Why every figure on a listing carries its calculation." },
        ]}
      />

      <CtaBand
        title="Bring the paper you would sell, or the capital you would deploy."
        body="We will walk through a listing, a disclosure and a settlement on the platform, and go through pricing for your volume."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "Tour the platform" }}
      />
    </>
  );
}
