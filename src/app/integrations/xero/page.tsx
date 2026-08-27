import type { Metadata } from "next";
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
  CTA,
  Status,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Xero factoring integration for lenders",
  description:
    "Give lenders in Australia, New Zealand and the UK a read only Xero connection per client, feeding the same intake rail and never writing to a ledger.",
  path: "/integrations/xero",
  intent: "integration",
  target: "Xero factoring integration",
});

const FAQS = [
  {
    q: "Is this the same integration as QuickBooks with a different name on it?",
    a: "It is the same rail and a different connector. The proposal path, the gates, the normalised receivable and the audit are shared deliberately, because a client who migrates ledgers should not become a different kind of client. What differs is the vendor relationship, the consent flow, the shape of what Xero returns, and the fact that most books it reads sit outside the United States.",
  },
  {
    q: "Can FactorFox raise an invoice or apply a credit in our client's Xero?",
    a: "No. The scopes are read only and there is no code path that writes. That matters more in a Xero market than it sounds, because your client's accountant works in that file, often weekly, and a funder that mutates it becomes part of every reconciliation argument and eventually part of a dispute about who changed what.",
  },
  {
    q: "What happens when a client disconnects us from inside Xero?",
    a: "The connection ends and FactorFox says so. Connection state is held per client, so one client revoking changes nothing for any other. Receivables already applied to your book stay exactly where they are, because they were applied by a person through the intake rail rather than mirrored from a live feed. Nothing rolls back, nothing vanishes, and the last successful sync is dated on the client record.",
  },
  {
    q: "We fund Australian and United States clients from one operation. Does that work?",
    a: "Yes, and the ledger is the least of it. Australian direct entry files are produced in APCA CS2 format with one hundred and twenty character records while United States funding produces NACHA PPD at ninety four, and PPSR search, registration and verification statements cover the security position with expiry watched rather than diarised. The release control, four eyes and audit are identical on both sides, because the discipline should not depend on which country the money leaves from.",
  },
  {
    q: "Our debtors are in New Zealand and the United Kingdom. What credit data can we get?",
    a: "Probity network answers immediately and costs nothing, because it reads how a debtor has actually paid across the FactorFox network rather than buying an opinion about them. Creditsafe covers commercial credit in those markets and its rail is built, but it answers not configured until you hold a contract and keys with Creditsafe. The screen shows it greyed with the vendor named, so an underwriter knows a source exists and is switched off.",
  },
  {
    q: "Does the client need a particular Xero plan or an adviser relationship with us?",
    a: "The connection is authorised by the client from their own Xero session against the organisation you are funding, and no adviser or partner relationship is required for it. What you do need is your own application credentials with Xero, the same posture as every other accounting connector on this site. Your name is on the consent screen and the vendor relationship is yours.",
  },
];

export default function XeroPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox Xero integration",
          description:
            "Per client, read only Xero connections feeding contacts and accounting transactions into the FactorFox intake rail for factoring and asset based lending operations.",
          path: "/integrations/xero",
        })}
      />

      <PageHero
        trail={[
          { name: "Integrations", path: "/integrations" },
          { name: "Xero", path: "/integrations/xero" },
        ]}
        eyebrow="Xero"
        status="available"
        title="In Sydney, Auckland and Manchester, the client's ledger question has one answer."
        lede={
          <>
            <p>
              Written for factors and asset based lenders funding businesses in Australia, New Zealand and the
              United Kingdom, where a request for a client&rsquo;s accounting file is a request for a Xero
              organisation nine times out of ten.
            </p>
            <p>
              FactorFox connects to it read only, per client, on the client&rsquo;s own consent, and feeds the
              same intake rail everything else in the platform feeds. Nothing is ever written back.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/integrations/quickbooks", label: "Connect QuickBooks" }}
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">What crosses, and which way</Eyebrow>
            <dl className="mt-4">
              {[
                ["Inbound", "Contacts and accounting transactions, read only, on the client's consent"],
                ["Outbound", "Nothing. There is no write path to a client ledger"],
                ["Held per", "Client. One connection, one consent, one revocation"],
                ["Applied by", "A named person, through the intake rail, after the gates"],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 border-t border-[var(--line)] py-3 first:border-t-0 first:pt-0 sm:grid-cols-[7rem_1fr] sm:gap-5">
                  <dt className="u-eyebrow pt-1">{k}</dt>
                  <dd className="m-0 text-[0.9375rem] leading-[1.55] text-[var(--fg-muted)]">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[0.8125rem] leading-[1.55] text-[var(--fg-subtle)]">
              Available today. Requires your own Xero application credentials.
            </p>
          </Card>
        }
      />

      <ProseSection
        eyebrow="The market this is written for"
        title="A funder outside the United States spends the first meeting explaining what they can accept."
      >
        <p>
          Ask an Australian or British operator what their intake looks like and you will hear about emailed
          debtor listings, PDFs exported at the end of a month, and a client who is genuinely confused about
          why the funder cannot simply look at the same screen their bookkeeper looks at. The client is not
          being difficult. They keep their entire financial life in one place and they expect their funder to
          meet them there.
        </p>
        <p>
          The reason most platforms cannot is that they were built around a United States accounting stack and
          treated everywhere else as a configuration. So the Xero connector arrived late, kept its own shape,
          and produced a second class receivable that the analytics did not fully understand.
        </p>
        <p>
          <strong>Here the connector is late to nothing.</strong> Xero receivables land in the same normalised
          shape as every other channel, which means concentration under one debtor name across several clients
          works whether those clients are in Brisbane or Birmingham, and dilution movement means the same thing
          in both. A client who switches ledger next year changes how their data arrives and changes nothing
          about how they are underwritten.
        </p>
        <p>
          <strong>The rest of the local stack is present too.</strong> PPSR search, registration and
          verification statements with expiry watched rather than remembered. APCA direct entry files in CS2
          format for Australian banks. The security position and the payment rail are not add ons bolted onto a
          United States product, and neither is the ledger.
        </p>
      </ProseSection>

      <FeatureGrid
        eyebrow="What moves"
        title="Contacts and accounting transactions, and what the platform makes of them"
        lede="Consent is given once by the client, against one organisation, for reading. Everything below happens on the FactorFox side of that boundary."
        columns={3}
        items={[
          {
            title: "Contacts to parties",
            body: "A client's customer list resolves into debtors as parties. The same debtor funding two of your clients is one party with one exposure, which is the only way concentration under one name is visible at all.",
          },
          {
            title: "Transactions to receivables",
            body: "Open invoices with their amounts, issue dates, due dates and credit notes, mapped into the same receivable structure paper and portal submissions land in.",
          },
          {
            title: "Idempotent on re run",
            body: "Records are keyed on the identifiers Xero assigns, so a second sync updates and inserts rather than duplicating. Running it twice is uneventful, which is the correct outcome for a sync.",
          },
          {
            title: "A proposal, not a posting",
            body: "The sync raises a proposal in the intake rail describing what it would add, change and retire. Nothing reaches your book until an operator with the authority applies it.",
          },
          {
            title: "The gates still run",
            body: "Duplicate and near duplicate detection, cross portfolio fingerprinting, size deviation against the client's own median, submission timing. Arriving through an API makes an invoice convenient, not verified.",
          },
          {
            title: "Dated and reversible",
            body: "The last successful sync is dated on the client record, and the connection can be ended from either side at any time without disturbing what is already on your book.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The read only rule"
        title="Never writing to a client ledger is a commercial position, not a technical limitation."
        aside={
          <Card>
            <Eyebrow>What a write path would cost you</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Their accountant reconciles that file. Their bank reads it. Their tax position is filed from it.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              A funder with a write path is one integration bug away from being the reason a client&rsquo;s
              accounts are wrong, and no advance rate compensates for that conversation.
            </p>
          </Card>
        }
      >
        <p>
          It would be straightforward to write assignment notices, apply payments or mark invoices as factored
          inside a client&rsquo;s Xero organisation. Several products do. We decline, and the reason is worth
          stating plainly because it is the kind of thing buyers only think about after it has gone wrong.
        </p>
        <p>
          <strong>The scopes are read only and there is no write path behind them.</strong> This is not enforced
          by a setting somebody could change during an implementation. There is nothing to enable.
        </p>
        <p>
          <strong>Consent is held per client and revocable from either side.</strong> Your client can disconnect
          from inside Xero without calling you, and that is intentional. A connection a client cannot end is a
          connection they will hesitate to start, and hesitation at onboarding is expensive for both of you.
        </p>
        <p>
          <strong>Revocation does not rewrite history.</strong> Receivables already applied stay on your book,
          because a person applied them after the gates rather than a feed mirroring them in. The difference
          matters on the day a relationship ends badly: your record of what you funded is yours, and it does not
          depend on continued access to somebody else&rsquo;s accounting system.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Around the ledger"
            title="What else an Australian, New Zealand or British operation runs on"
            lede="A Xero connection is one row. These are the rows next to it, with the status each one actually holds."
          />
          <div className="mt-11">
            <DataTable
              caption="Regional integrations alongside Xero"
              head={["Row", "Status", "What it gives you"]}
              rows={[
                [
                  "PPSR",
                  <Status key="ppsr" kind="available" />,
                  "Australian registered security interests: search, registration and verification statements, with priority and expiry watched rather than assumed.",
                ],
                [
                  "APCA direct entry",
                  <Status key="apca" kind="available" />,
                  "ABA files in CS2 format with one hundred and twenty character records, generated from released items only, with the same release control in front of them as every other rail.",
                ],
                [
                  "Probity network",
                  <Status key="probity" kind="available" />,
                  "Debtor payment behaviour from across the FactorFox network. No vendor, no contract, no per check charge, and nothing about your book leaves your tenant.",
                ],
                [
                  "Creditsafe",
                  <Status key="creditsafe" kind="contract" />,
                  "Commercial credit on debtors in your markets. The rail is built and answers not configured until you hold a contract and keys.",
                ],
                [
                  "AML and sanctions screening",
                  <Status key="aml" kind="available" />,
                  "Screening at onboarding and daily rescreening afterwards, with results kept as versioned evidence rather than overwritten.",
                ],
                [
                  "Microsoft 365",
                  <Status key="ms" kind="controlled" />,
                  "Graph mail, calendar projection and Entra ID federation, for operations running on a Microsoft tenant, which in this market is most of them.",
                ],
              ]}
            />
          </div>
          <div className="mt-7">
            <CTA href="/integrations" variant="secondary">
              Review our integrations
            </CTA>
          </div>
        </Container>
      </Section>

      <FaqBlock items={FAQS} title="What a funder outside the United States asks" />

      <RelatedPages
        links={[
          { href: "/integrations/quickbooks", label: "QuickBooks", note: "The same rail for clients keeping books in QuickBooks Online." },
          { href: "/integrations/banking-and-payments", label: "Banking and payments", note: "APCA CS2, NACHA PPD, Fedwire and EDI, with a status on each." },
          { href: "/integrations/credit-and-risk", label: "Credit and risk", note: "Probity network, bureau rails and lien position at party creation." },
          { href: "/platform/client-onboarding", label: "Client onboarding", note: "Where the ledger connection sits in the first two weeks." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "What a synced receivable does to availability once it is applied." },
          { href: "/solutions/asset-based-lending", label: "Asset based lending", note: "Where a client ledger feed matters more than a schedule ever did." },
        ]}
      />

      <CtaBand
        title="Bring a real Xero organisation to the demonstration."
        body="A sandbox proves the connection works. A client's actual file, with its duplicated contacts and its optimistic due dates, proves what the intake rail does about it."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/integrations/quickbooks", label: "Connect QuickBooks" }}
      />
    </>
  );
}
