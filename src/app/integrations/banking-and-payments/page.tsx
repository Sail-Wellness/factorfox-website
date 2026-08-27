import type { Metadata } from "next";
import {
  PageHero,
  StepList,
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
  title: "ACH NACHA file generation for factors",
  description:
    "Generate NACHA PPD and Australian APCA CS2 files, Fedwire instructions and EDI remittance, then certify each dialect with your originating bank first.",
  path: "/integrations/banking-and-payments",
  intent: "integration",
  target: "ACH NACHA file generation for factors",
});

const FAQS = [
  {
    q: "Does FactorFox connect directly to our bank?",
    a: "No, and that is a design decision rather than a gap. FactorFox produces files and instructions and your bank executes them, which keeps your banking relationship, your entitlements and your bank's own fraud controls exactly where they are. It also means the platform never holds a credential capable of moving funds on its own, which is the sentence your risk committee actually wants to hear.",
  },
  {
    q: "Our bank rejected a file from our last platform. Why would this be different?",
    a: "It might not be, on the first attempt, and any vendor who promises otherwise has not sent enough files. The specification is fixed. Your bank's interpretation of it is not, and the variation lives in batch headers, company identification, discretionary data, addenda handling and blocking. That is why the correct sequence is to generate one file, send it, get it certified, and only then trust the rest.",
  },
  {
    q: "What is actually in the file?",
    a: "Released items only. There is no assembly step between the release record and the formatting, which removes the place where an amount can change without anyone knowing. If an item is not released it is not in the file, and if it was released the record naming the actor, the approvals and the origin already exists.",
  },
  {
    q: "Can we run Australian and United States funding from one operation?",
    a: "Yes. APCA direct entry in CS2 format with one hundred and twenty character records for Australian banks, NACHA PPD at ninety four characters for United States originating banks, and identical controls in front of both. The bank formats differ because the countries differ. Nothing about the authority model changes.",
  },
  {
    q: "What do you do with an EDI 820 that does not reconcile?",
    a: "It becomes a proposal that names what it cannot explain. Structured remittance is better raw material than a scanned cheque stub, but it is still an assertion by a debtor about their own deductions. A short payment with an unexplained difference is presented as exactly that rather than absorbed, and duplicates are refused before they can be applied twice.",
  },
  {
    q: "Is the bank feed for lockbox reconciliation available?",
    a: "No. It is planned, which on this site means named and designed and not built. The underwriting engine declares it as a source that is not wired, and covenants depending on controlled collection percentage report that they are awaiting a live source and name it, rather than reporting a zero that would look like compliance. When it is built this row will change and the change will be dated.",
  },
];

export default function BankingAndPaymentsPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox banking and payment rails",
          description:
            "NACHA PPD and APCA CS2 payment file generation, Fedwire instruction export and EDI 820 and 214 remittance handling for factoring and asset based lending operations.",
          path: "/integrations/banking-and-payments",
        })}
      />

      <PageHero
        trail={[
          { name: "Integrations", path: "/integrations" },
          { name: "Banking and payments", path: "/integrations/banking-and-payments" },
        ]}
        eyebrow="Banking and payments"
        title="The specification is public. Your bank's opinion of it is not."
        lede={
          <>
            <p>
              Written for whoever builds the funding file and then waits to see whether it is accepted. NACHA
              PPD credits, Australian APCA direct entry, Fedwire instructions for the movements that cannot
              wait for a batch, and EDI remittance coming the other way.
            </p>
            <p>
              FactorFox generates files and instructions. Your bank executes them. Everything below is about
              what goes into the file and what has to be true before it can be built.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/platform/treasury", label: "See release control" }}
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The honest operational note</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Every originating bank certifies its own dialect. Generate one file, send it, have it certified,
              and then trust the rest.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              We would rather say that on a marketing page than let you discover it on your first funding day.
              A vendor claiming their file works at every institution without certification is telling you how
              few institutions they have sent files to.
            </p>
            <p className="mt-5 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
              PPD &middot; 94 characters &middot; blocked correctly &middot; released items only
            </p>
          </Card>
        }
      />

      <ProseSection
        eyebrow="Why file generation is not a solved problem"
        title="Fixed width formats have not changed in decades. That is not the same as being easy."
      >
        <p>
          A NACHA file is ninety four character fixed records, blocked correctly, with a file header, batch
          headers, entry detail records, addenda where relevant, and control records whose totals have to agree
          with what precedes them. None of that is difficult. All of it is unforgiving, and an operation
          discovers the unforgiving part at a cutoff on a Friday.
        </p>
        <p>
          <strong>The specification is not where implementations fail.</strong> They fail on the institution
          specific interpretation sitting on top of it. One bank wants company identification populated a
          particular way. Another has views about discretionary data. A third silently truncates and calls it
          accepted, which is the worst of the three because you find out from a returned entry rather than a
          rejection.
        </p>
        <p>
          <strong>Australian direct entry has the same shape and different numbers.</strong> APCA CS2 files run
          one hundred and twenty character records, and the fact that both formats exist in one platform is
          worth something specific: an operation funding in both countries runs one release process and gets
          two correctly formed files, rather than running an Australian book on a spreadsheet because the
          platform was built for the United States.
        </p>
        <p>
          <strong>Wires are a different risk, not a different discipline.</strong> Fedwire instructions exist
          for large single releases that should not wait for a batch, and they are irreversible in a way ACH is
          not. So the account a wire references cannot be one that is sitting under a bank account change hold.
          That check lives underneath every rail rather than being remembered by whoever is sending the wire.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The rails"
            title="What is produced, what comes back, and the status of each"
            lede="Four rails are available today. One row is planned, and it is on this page because the platform already names it on screen as something it does not have."
          />
          <div className="mt-11">
            <DataTable
              caption="Banking and payment rails"
              head={["Rail", "Status", "What moves and which way", "Detail that matters"]}
              rows={[
                [
                  "NACHA ACH",
                  <Status key="nacha" kind="available" />,
                  "A PPD credit file out to your originating bank. Nothing about your bank relationship moves in.",
                  "Ninety four character fixed records, blocked correctly, generated from released items only.",
                ],
                [
                  "APCA direct entry",
                  <Status key="apca" kind="available" />,
                  "An ABA direct entry file out, in the format Australian banks accept.",
                  "One hundred and twenty character records, CS2 format, with the same release control in front of it.",
                ],
                [
                  "Fedwire",
                  <Status key="fedwire" kind="available" />,
                  "Wire instructions out, formatted for your bank's upload, for same day movement.",
                  "A bank account under a human only hold cannot be referenced by any wire while the hold stands.",
                ],
                [
                  "EDI 820 and 214",
                  <Status key="edi" kind="available" />,
                  "Remittance detail and shipment delivery status in, from trading partners.",
                  "Proposals, never silent postings. Duplicates refused before anything can be applied twice.",
                ],
                [
                  "Plaid",
                  <Status key="plaid" kind="planned" />,
                  "Not built. Declared in the underwriting engine as a source that is not wired.",
                  "Named here because the platform names it on screen. Nothing about it is described as working.",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <StepList
        eyebrow="Certification"
        title="How to get a new file accepted without betting a funding day on it"
        lede="This sequence is not FactorFox specific. It is what experienced treasury teams do with any new originating relationship, and it is written here because too many implementations skip it."
        steps={[
          {
            label: "Generate",
            title: "Produce one real file from released items",
            body: "Not a sample from a documentation page. A file built from your own releases, with your own company identification, your own batch structure and your own item volumes, because the edge cases live in your data rather than in a specimen.",
          },
          {
            label: "Send",
            title: "Give it to your bank as a certification file",
            body: "Every originating institution has a process for this and most of them are quietly relieved when a new customer asks for it. It is a short conversation early instead of a long one at a cutoff.",
          },
          {
            label: "Reconcile",
            title: "Read what comes back, including the silence",
            body: "An accepted file that produces unexpected returns is more dangerous than a rejected one. Check the entries settled where you expected, in the amounts you expected, against the addenda you sent.",
          },
          {
            label: "Adjust",
            title: "Fix the dialect once, in configuration",
            body: "Company identification, discretionary data, batch descriptors and blocking behaviour are settings rather than code. The point of getting them right once is that nobody has to remember them afterwards.",
          },
          {
            label: "Then trust",
            title: "Run the rest of your volume through it",
            body: "After a certified file, the rail is boring, which is the correct state for a payment rail. Repeat the exercise for each additional originating bank rather than assuming the second one behaves like the first.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="Inbound"
        title="EDI 820 and 214, and what structured remittance is actually worth"
        lede="Getting remittance as data instead of as a scanned stub removes the keying. It does not remove the judgement, and a platform that pretends otherwise creates a quieter kind of error."
        columns={3}
        items={[
          {
            title: "820 remittance detail",
            body: "Invoice references, amounts and deductions arrive structured from the trading partner, which means the cash application proposal starts from an assertion rather than from an interpretation of an image.",
          },
          {
            title: "214 shipment status",
            body: "Delivery status from the transportation partner, which is corroboration from a party other than the one asking to be paid. That distinction is the whole of verification.",
          },
          {
            title: "Proposals only",
            body: "Nothing posts because it arrived in a well formed envelope. A person applies it, and the audit record names them, exactly as it does for a remittance that came by email.",
          },
          {
            title: "Duplicates refused",
            body: "The same advice sent twice, or sent and then forwarded, is caught by the same machinery that catches the same invoice submitted under two clients.",
          },
          {
            title: "Unexplained differences named",
            body: "A short payment with no stated reason is presented as a short payment with no stated reason. It is not rounded into a write off that nobody reviews.",
          },
          {
            title: "One cash application queue",
            body: "EDI, Graph mail and lockbox files all converge on the same proposals. The channel a remittance arrived through does not decide how carefully it is examined.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The planned row"
        title="What a bank feed would give you, and what the platform says while it does not have one."
        aside={
          <Card>
            <Eyebrow>Plaid</Eyebrow>
            <div className="mt-3">
              <Status kind="planned" />
            </div>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Bank feed for lockbox flow and client cash verification. Not built. Declared in the underwriting
              engine as a source that is not wired.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              It is named here because the platform names it on screen. Nothing about it is described as
              working.
            </p>
          </Card>
        }
      >
        <p>
          A covenant on controlled collection percentage asks a question that only a bank feed can answer
          honestly: what proportion of a client&rsquo;s collections actually landed in the account you control.
          Without that feed, a platform has three options. It can guess from what it has, it can report zero, or
          it can say it does not know and name what it is missing.
        </p>
        <p>
          <strong>The first two are how covenant monitoring quietly becomes theatre.</strong> A guess reads like
          a measurement. A zero reads like compliance. Both survive right up until somebody tests them, and by
          then the covenant has been reported green for a quarter.
        </p>
        <p>
          <strong>So FactorFox takes the third option.</strong> A covenant that depends on data the platform does
          not hold states that it is awaiting a live source and names the source, and the agreement clause it is
          measuring is quoted alongside as the evidence. An officer reading that knows precisely what is
          unmeasured, which is a usable fact.
        </p>
        <p>
          When the feed is built, this row moves from planned to a status it has earned, and it will read that
          way here on the same day it reads that way in the product. That is the entire promise of publishing a
          register instead of a logo grid.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What a treasury team asks before the first file" />

      <RelatedPages
        links={[
          { href: "/platform/treasury", label: "Treasury", note: "Release control, availability at execution and the bank account change hold." },
          { href: "/platform/covenant-monitoring", label: "Covenant monitoring", note: "Why a covenant says awaiting a live source instead of reporting zero." },
          { href: "/platform/accounting", label: "Accounting", note: "Where an applied remittance lands on your own ledger." },
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "Bank account changes, and the signals that put one under hold." },
          { href: "/integrations/xero", label: "Xero", note: "APCA funding alongside a ledger most Australian clients already keep." },
          { href: "/integrations", label: "All integrations", note: "The full register, including the rows we do not have." },
        ]}
      />

      <CtaBand
        title="Bring your bank's file specification to the demonstration."
        body="The useful conversation is not whether a file can be produced. It is which of your bank's particular opinions are configuration and which ones need a call."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/integrations", label: "Review our integrations" }}
      />
    </>
  );
}
