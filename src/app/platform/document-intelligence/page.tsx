import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
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
  title: "Invoice verification software for factors",
  description:
    "Extract invoices and rate confirmations under a strict schema, revalidate every model output in plain code, and keep the original document as evidence.",
  path: "/platform/document-intelligence",
  intent: "product",
  target: "invoice verification software",
});

const FAQS = [
  {
    q: "What is your extraction accuracy?",
    a: "We do not publish one, and you should treat any vendor number of that kind carefully. An accuracy percentage is only meaningful against a stated document population, a stated field set and a stated definition of correct, and none of those travel between two factoring companies. What we will do is run your own documents, including the bad ones, and show you field by field what was read, what was refused and what a human had to touch.",
  },
  {
    q: "What happens when the model returns something that does not fit the schema?",
    a: "It is rejected. Not repaired, not coerced, not best guessed into shape. A response that does not conform to the strict schema never reaches the book, and the document goes to a person with the reason attached. Silent repair is how a wrong number acquires the appearance of having been read carefully.",
  },
  {
    q: "Why block near duplicates at verification rather than at upload?",
    a: "Because blocking at upload punishes the ordinary and innocent act of resending a corrected copy, and operations teams learn to route around anything that does that. Verification is the moment money is about to be committed, so it is the moment worth defending. The check runs there, against the client's own history and across the portfolio.",
  },
  {
    q: "Does our document text leave our tenant?",
    a: "Document text goes to the extraction endpoint that is configured for your tenant, and the endpoint and model are configuration rather than a fixed dependency. Nothing else about a document leaves. The stored original, the extraction, the corrections and the evidence chain stay inside your tenant, and tenant isolation is enforced at the database level.",
  },
  {
    q: "Can it read a handwritten proof of delivery photographed on a phone in a truck cab?",
    a: "Sometimes, and it will tell you when it could not. The design decision that matters here is that a field the platform could not read is recorded as unread rather than left blank, because blank looks like absent and absent is a different fact. Unread fields route to a person. Blank fields quietly become zero somewhere downstream, which is the failure mode we built against.",
  },
  {
    q: "What does cross portfolio fingerprinting see that a duplicate check does not?",
    a: "The same paper submitted under two different client names. A within client duplicate check is blind to it by construction, because the two submissions never appear in the same list. Fingerprints are computed on document content and on the commercial facts inside it, so the match survives a new logo, a fresh scan and a changed invoice number.",
  },
];

export default function DocumentIntelligencePage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox document intelligence",
          description:
            "Classification, schema constrained extraction with deterministic revalidation, near duplicate and cross portfolio detection, and preserved original documents for factoring and asset based lending.",
          path: "/platform/document-intelligence",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Document intelligence", path: "/platform/document-intelligence" },
        ]}
        eyebrow="Document intelligence"
        title="A document is evidence. What a model read out of it is an opinion about evidence."
        lede={
          <>
            <p>
              Written for the operations manager whose team verifies schedules. Invoices, bills of lading,
              rate confirmations, proofs of delivery, assignment notices and remittance advice arrive by
              email, portal and SFTP, in every condition paper arrives in, and somebody has to decide what
              each one says before money moves against it.
            </p>
            <p>
              FactorFox never confuses the two objects. The original is kept exactly as it arrived. The
              extraction is a derivative of it, marked as one, and it has to survive a deterministic check
              before it is allowed anywhere near your book.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Run your own documents through it" }}
        secondaryCta={{ href: "/platform/fraud-detection", label: "See fraud detection" }}
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="Verification does not fail on the hard documents. It fails on the ordinary ones."
        lede="Nobody funds a schedule against a document they could not read. The expensive events come from documents that read perfectly and were still wrong."
        rows={[
          {
            problem:
              "A model reads a total of 48,200 from an invoice whose lines sum to 4,820, and the number looks entirely reasonable on a screen full of numbers.",
            response:
              "Extracted lines are summed and checked against the extracted total. An arithmetic contradiction stops the document at verification and names the two figures that disagree.",
          },
          {
            problem:
              "The same invoice is submitted twice, three weeks apart, with a different invoice number and a fresh scan, and the second one funds.",
            response:
              "Fingerprints are computed on content and on the commercial facts inside it, so the second submission matches the first at verification even though nothing about it looks identical.",
          },
          {
            problem:
              "A document is filed as an invoice, is actually a purchase order, and is discovered to be a purchase order by the debtor rather than by you.",
            response:
              "Classification happens before extraction and the class decides which schema applies. A purchase order that arrived in the invoice queue is named as one and routed, not parsed as if it were something else.",
          },
          {
            problem:
              "Somebody corrects a bad extraction by editing the record, and the original meaning of the document is now unrecoverable.",
            response:
              "Corrections are recorded against the extraction with the person who made them. The stored original is never touched, so the document a court would look at is the document you still hold.",
          },
        ]}
      />

      <StepList
        eyebrow="The path a document takes"
        title="Six stages, and the point of most of them is refusal"
        lede="Every stage can stop a document. That is the design. A pipeline that only ever moves things forward is a conveyor belt, not a control."
        steps={[
          {
            label: "Arrive",
            title: "Intake through any door, held to one standard",
            body: "Email, client portal and SFTP land in the same rail. The submission channel stops deciding how carefully a document is examined, which matters because the channel a fraudster picks is the one with the least friction.",
          },
          {
            label: "Preserve",
            title: "The original is stored before anything reads it",
            body: "Byte for byte, with its arrival metadata and its sender. Everything that happens afterwards is a derivative that points back at this object, and the platform always knows which of the two it is holding.",
          },
          {
            label: "Classify",
            title: "Decide what the document is",
            body: "Invoice, bill of lading, rate confirmation, proof of delivery, remittance advice, assignment notice, bank letter. The class selects the schema. A document whose class is uncertain goes to a person rather than to the nearest plausible parser.",
          },
          {
            label: "Extract",
            title: "Structured data under a strict schema",
            body: "The configured model returns fields the schema describes and nothing else. Extra fields, missing required fields and wrong types are conformance failures. The response is rejected rather than coerced into shape.",
          },
          {
            label: "Revalidate",
            title: "Deterministic checks on every field",
            body: "Ordinary code, no model involved. Line items summed against the total. Dates parsed and range checked against the schedule. Currency and amount formats. Debtor and client names matched to the party register rather than accepted as text. Invoice numbers checked against the client's own observed format.",
          },
          {
            label: "Verify",
            title: "Duplicate and near duplicate blocking, then the human",
            body: "Fingerprints run within the client and across the portfolio at the moment of verification. What survives all of it reaches an operator with the original on one side, the extraction on the other, and every refusal explained in the middle.",
          },
        ]}
      />

      <ProseSection
        eyebrow="Original and derivative"
        title="The distinction that decides what you can prove eighteen months later."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Read as unread</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              A field the platform could not read is recorded as unread, with the reason. It is never left
              empty.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Empty and unreadable look the same on a screen and behave completely differently in a
              calculation. One of them becomes zero. The other one has to become a question for a person.
            </p>
          </Card>
        }
      >
        <p>
          Most document systems in this industry treat extraction as an upgrade. The scan gets read, the data
          goes into the record, and the file becomes an attachment that nobody opens again. That works until
          the day the record and the paper disagree, and on that day the paper wins, in front of a debtor, an
          auditor or a court.
        </p>
        <p>
          FactorFox holds the original as the fact and the extraction as a claim about the fact. The claim
          carries what produced it: the model and endpoint configured for your tenant, the schema version, the
          deterministic checks that passed, the checks that failed and the corrections a named person made
          afterwards. Nothing in that chain overwrites anything earlier in it.
        </p>
        <p>
          <strong>This is what makes verification exceptions worth having.</strong> When an operator overrides
          an extracted value, the override sits beside the machine reading rather than erasing it. Over a
          book, the pattern of what people keep correcting is one of the most useful things you own. It tells
          you which client submits documents that never quite parse, which is occasionally a scanning problem
          and occasionally the first quiet sign of something else.
        </p>
        <p>
          <strong>Verification runs capture their evidence at the moment they run, and are never refetched.</strong>{" "}
          A verification that was true on Tuesday is a Tuesday fact. If the platform quietly refreshed it on
          Thursday under a decision that had already been made, the decision would appear to have been taken
          on evidence that did not exist at the time. That is a small technical choice with a large audit
          consequence.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Deterministic revalidation"
            title="Every model output faces ordinary code before it faces your book"
            lede="This is the layer that makes model based extraction safe to use in a lending operation. None of it involves a model, which is the point."
          />
          <div className="mt-11">
            <DataTable
              caption="Deterministic checks applied to extracted fields"
              head={["Check", "What it refuses"]}
              rows={[
                ["Schema conformance", "Any response with missing required fields, unexpected fields or wrong types. The response is rejected, never repaired."],
                ["Arithmetic", "Line items that do not sum to the stated total, tax and freight that do not reconcile, credits applied in the wrong direction."],
                ["Date coherence", "Invoice dates after the submission date, due dates preceding invoice dates, service periods that fall outside the schedule being funded."],
                ["Party resolution", "A debtor or client name that does not resolve to a party in the register. Text that looks like a company is not a company until it matches one."],
                ["Amount and currency", "Amounts outside the plausible range for the client, currency mismatches against the client's facility, and figures whose formatting is ambiguous rather than assumed."],
                ["Identifier format", "Invoice numbers that do not match the format this client has actually used, which is learned from that client's own submitted history rather than a rule someone typed."],
                ["Schedule agreement", "An invoice on the document that does not correspond to the schedule line it was submitted under."],
                ["Completeness", "A required field the model could not read. Recorded as unread with a reason and routed to a person, never silently emitted as empty."],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            We do not publish an extraction accuracy figure. Any such number depends entirely on the document
            population, the field set and the definition of correct, and none of those are the same in two
            factoring companies. The offer we make instead is to run your own documents, including the ones
            that give your team trouble, and show you exactly what was read, what was refused and where a
            person was needed.
          </p>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="Duplicate and near duplicate"
        title="Four ways the same receivable gets funded twice"
        lede="Duplicate funding is rarely a barefaced photocopy. It is usually a document that has been changed just enough to look new."
        columns={2}
        items={[
          {
            title: "The same document, resubmitted later",
            body: "Content fingerprints match even after a fresh scan, a different file format, a new page order or a compressed image. The match is on what the document says, not on the bytes of the file.",
          },
          {
            title: "The same receivable, a different invoice number",
            body: "The commercial fingerprint uses debtor, amount, date proximity and line item structure. Changing the number on the top of the page does not change what is being sold to you.",
          },
          {
            title: "The same paper under two clients",
            body: "Cross portfolio fingerprinting compares against the whole book, not just the submitting client's history. Two related entities submitting one receivable to you separately is a pattern a within client check cannot see.",
          },
          {
            title: "The split invoice",
            body: "One receivable presented as several smaller ones, or several presented as one. Line item structure and amount reconciliation against the debtor's own purchase pattern surface it at verification, where the exception can still be cheap.",
          },
        ]}
      />

      <ProseSection eyebrow="Where it sits" title="Verification is a gate, and gates report to people.">
        <p>
          Everything on this page exists to serve one moment: an operator deciding whether a schedule is good.
          The platform is built so that moment arrives with the work already done and the exceptions already
          argued. What reaches the operator is the original, the extraction, the checks that ran, the ones
          that failed, the duplicate candidates with the reason each one was raised, and the recommended
          action with the permission it needs.
        </p>
        <p>
          Documents that come from a connector do not get a side door. A receivable synchronised from a
          client&rsquo;s QuickBooks or Xero ledger still faces every ingestion gate, because a connector is a
          submission channel like any other and a clean import is not the same thing as a verified one.
        </p>
        <p>
          What the platform will not do is decide. Verification exceptions raise questions and organise the
          evidence behind them. A person answers them, and the answer is recorded with their name on it.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What an operations manager asks" />

      <RelatedPages
        links={[
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "What the duplicate signals combine with before anyone is called." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "Why every answer carries a reference into a record." },
          { href: "/integrations/quickbooks", label: "QuickBooks", note: "Ledger sync that proposes into the same gates, never around them." },
          { href: "/platform/accounting", label: "Accounting", note: "Where a verified schedule becomes ledger movement." },
          { href: "/integrations/transportation", label: "Transportation integrations", note: "Rate confirmations, proofs of delivery and freight claim verification." },
          { href: "/solutions/transportation", label: "Transportation factoring", note: "The document volume problem at its most extreme." },
        ]}
      />

      <CtaBand
        title="Send us the documents your team argues about."
        body="The messy ones, the handwritten ones, the ones that come in at eleven at night. We will show you what was read, what was refused and where the platform insisted on a person."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/integrations", label: "See how documents arrive" }}
      />
    </>
  );
}
