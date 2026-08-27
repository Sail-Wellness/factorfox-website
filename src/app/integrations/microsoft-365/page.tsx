import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
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
  CTA,
  Status,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Microsoft 365 integration for lenders",
  description:
    "Turn Graph mail into cash application proposals, project collections work into Outlook, and let Entra ID prove identity while FactorFox grants authority.",
  path: "/integrations/microsoft-365",
  intent: "integration",
  target: "Microsoft 365 lending integration",
});

const FAQS = [
  {
    q: "Do you read our whole mailbox?",
    a: "No, and the fence is enforced by Microsoft rather than promised by us. Application permissions are least privilege and scoped to the features you enable, and an Exchange application access policy can restrict the application to a single shared mailbox so it is technically incapable of reading anything else in the tenant. The capabilities screen in FactorFox shows what the token actually carries, because the roles on the token are the truth and the documentation is only a description of it.",
  },
  {
    q: "What happens to the original remittance email?",
    a: "It is preserved as evidence and attached to the proposal it produced. Anything the platform extracts from it is marked as a derivative of that message, so an officer reviewing the cash application six months later can open the message the numbers came from rather than trusting a field somebody typed. The same message is never ingested twice, so a forwarded copy does not become a second payment.",
  },
  {
    q: "Someone deleted a calendar event. Did that close the collections case?",
    a: "No. The case is the record and the calendar entry is a projection of it. Delete the entry and the case still stands, still ages, still appears in the collections queue and still reaches the briefing. The projection ledger keeps what was written and when, so the difference between the calendar and the case is visible rather than mysterious.",
  },
  {
    q: "Does an email that says our client changed bank accounts change anything?",
    a: "It changes one thing: a verification requirement appears. Content of that kind is classified as requiring verification and is never applied, on any channel, because it is the single most expensive message a factoring company receives. A named human verifies it out of band against a contact established before the request arrived, and no payment on any rail can reference the account while the hold stands.",
  },
  {
    q: "Do you copy our directory into FactorFox?",
    a: "No directory data is copied. Entra ID federation carries an identity assertion at sign in and nothing else. FactorFox holds its own record of what a person may do, and that record is created by an explicit, audited linking step performed once by the user. Nobody is auto provisioned by being present in your tenant.",
  },
  {
    q: "Our directory is down. Can anyone get in?",
    a: "Break glass access exists precisely for that morning, and it is deliberately uncomfortable to use. It is time boxed, it alarms, and using it creates a record somebody has to explain afterwards. Federated sign in can also be disabled per tenant without affecting local access, so a directory problem is an inconvenience rather than an outage of your own operation.",
  },
  {
    q: "Can we run Microsoft 365 features without Teams?",
    a: "Yes. Mail, calendar, tasks, scheduling and federation are separate switches from the Teams surface, and none of the platform depends on any adapter. Turning one off removes that one. Most institutions turn on Graph mail first, because remittance handling pays for itself before anybody has installed anything into Teams.",
  },
];

export default function Microsoft365Page() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox for Microsoft 365",
          description:
            "Graph mail remittance capture, calendar projection, task assignment, Bookings and Entra ID federation for factoring and asset based lending operations.",
          path: "/integrations/microsoft-365",
        })}
      />

      <PageHero
        trail={[
          { name: "Integrations", path: "/integrations" },
          { name: "Microsoft 365", path: "/integrations/microsoft-365" },
        ]}
        eyebrow="Microsoft 365"
        status="controlled"
        title="The mailbox is already your intake channel. It just was not treated like one."
        lede={
          <>
            <p>
              Written for the operations and accounting side of a factoring company, where the day is shaped
              by what arrived in a shared mailbox overnight. Remittances, delivery confirmations, disputes,
              and one message a quarter asking you to pay somewhere new.
            </p>
            <p>
              FactorFox connects to Microsoft Graph so that mail, calendar, tasks, scheduling and sign in all
              run inside the tenant your institution already governs. Approvals and briefings live on a page
              of their own.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/integrations/microsoft-teams", label: "Explore Microsoft Teams integration" }}
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Approvals and briefings live next door</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Everything about receiving your briefing in Teams, acknowledging a signal from a card, and being
              refused by name when you try to approve your own release is on the Teams page. This page does not
              repeat it.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Read this one for the quieter half of Microsoft: what happens to mail, to the calendar, to
              assigned work, and to who is allowed to sign in at all.
            </p>
            <div className="mt-6">
              <CTA href="/integrations/microsoft-teams" variant="secondary">
                Explore Microsoft Teams integration
              </CTA>
            </div>
          </Card>
        }
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="A remittance is a payment instruction that arrived as prose."
        lede="It carries a debtor, a set of invoice references, deductions somebody applied without asking, and a total that does not match any of them. Then it gets printed."
        rows={[
          {
            problem:
              "The remittance is opened, read, keyed into the ledger, and the email is left in a folder that is not the ledger. Six months later the cash application is a number with no message behind it.",
            response:
              "The message becomes a cash application proposal with the original preserved as evidence and bound to it. The proposal names the invoices it would apply against and the deduction it cannot explain.",
          },
          {
            problem:
              "The same advice arrives twice, once direct and once forwarded by the account executive, and gets applied twice.",
            response:
              "The same message is never ingested twice. Duplicate and near duplicate detection is the same machinery that catches the same invoice submitted under two clients.",
          },
          {
            problem:
              "An email says the client has changed banks. It is polite, it has the right logo, and somebody helpful updates the record before funding.",
            response:
              "Bank change content is classified as requiring verification and is never applied. No payment on any rail can reference an account under hold, and automated approval of the change is refused outright.",
          },
          {
            problem:
              "A collections promise is diarised in one officer's calendar, and when they are on leave the case ages silently.",
            response:
              "The case projects its next contact into the calendar. The case remains the record, so the follow up survives the calendar, the officer and the leave.",
          },
        ]}
      />

      <StepList
        eyebrow="Graph mail"
        title="From an unopened message to a proposal a person applies"
        lede="Five steps, none of which is a silent posting. The platform is allowed to propose and a named human is the only thing that can move money onto your book."
        steps={[
          {
            label: "Receive",
            title: "A shared mailbox is the door, not an inbox somebody watches",
            body: "Mail arrives in the mailbox your accounting team already uses. FactorFox reads it under application permissions that can be fenced to that mailbox alone, so the connection cannot reach a private inbox even if somebody wanted it to.",
          },
          {
            label: "Classify",
            title: "What kind of message this is decides what happens next",
            body: "Remittance advice, dispute, delivery confirmation, or a request to change payment details. The classification is recorded with the message rather than inferred again later by whoever opens it.",
          },
          {
            label: "Preserve",
            title: "The original is kept as the original",
            body: "The message and its attachments are stored as evidence. Extraction is a derivative and the platform knows which is which, which matters the day a debtor disputes what their own remittance said.",
          },
          {
            label: "Propose",
            title: "A cash application proposal, with its uncertainty stated",
            body: "Invoice references matched, deductions identified, and anything that does not reconcile named rather than absorbed into a rounding difference. A short payment with no explanation is presented as a short payment with no explanation.",
          },
          {
            label: "Apply",
            title: "A person applies it, and the audit record says who",
            body: "The proposal is an offer. Applying it is a decision, made by somebody with the authority to make it, recorded with the actor, the evidence and the origin. That boundary is why a connector cannot quietly rewrite your ledger.",
          },
        ]}
      />

      <ProseSection
        eyebrow="Outbound"
        title="Nothing leaves through Graph that would not leave through any other channel."
        aside={
          <Card>
            <Eyebrow>The delivery wall</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              One wall, in front of every channel. Notices, demands, verification requests and statements pass
              the same checks whether they leave by Graph, by the platform&rsquo;s own sender, or through a
              document run.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Including in sandbox. A test environment that can reach a real debtor is not a test environment,
              and the number of factoring companies who have learned that from their own outbox is higher than
              anybody admits publicly.
            </p>
          </Card>
        }
      >
        <p>
          Sending mail through a customer&rsquo;s own tenant is good for deliverability and dangerous for
          everything else, because the message now carries your institution&rsquo;s domain and your
          institution&rsquo;s reputation. So the outbound path is the more carefully controlled half of this
          integration, not the easier one.
        </p>
        <p>
          <strong>Every send crosses the delivery wall.</strong> There is no path from a workflow to Graph that
          skips it, because the wall is not implemented at the Graph adapter. It is implemented underneath every
          channel, and Graph is simply one of the things on the far side of it.
        </p>
        <p>
          <strong>Revocation is one call and it is audited.</strong> Graph access is revoked per tenant, the
          revocation is stored, and the platform behaves correctly afterwards rather than throwing errors into a
          queue. Turning the integration off is a supported state, not an incident.
        </p>
        <p>
          <strong>Permissions are visible rather than described.</strong> The capabilities screen reads the
          roles on the token and shows what the application can actually do in your tenant today. If somebody in
          your IT team granted less than the documentation asked for, the screen tells you that, and the
          affected features report themselves unavailable instead of failing at the worst moment.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Surface by surface"
            title="What each Microsoft surface moves, and in which direction"
            lede="Status is published per surface rather than averaged into one badge for the whole of Microsoft. Two of these are in controlled release with named customers. Two are available."
          />
          <div className="mt-11">
            <DataTable
              caption="Microsoft 365 surfaces"
              head={["Surface", "Status", "What moves and which way", "The control that matters"]}
              rows={[
                [
                  "Outlook and Graph mail",
                  <Status key="mail" kind="controlled" />,
                  "Inbound mail and attachments in, classified and preserved. Notices, demands and statements out.",
                  "Least privilege application permissions, mailbox fencing, no duplicate ingestion, and no send that has not passed the delivery wall.",
                ],
                [
                  "Outlook Calendar",
                  <Status key="cal" kind="controlled" />,
                  "FactorFox writes the next contact for a collections case into the officer's calendar. Nothing about the calendar writes back into the case.",
                  "Deleting the event does not close the case. The projection ledger records what was written and when.",
                ],
                [
                  "Microsoft Bookings",
                  <Status key="bookings" kind="available" />,
                  "Availability out, confirmed appointments back, for reviews and demonstrations.",
                  "Runs inside your own Microsoft tenant, so no third party scheduling tool holds your client list.",
                ],
                [
                  "Entra ID",
                  <Status key="entra" kind="available" />,
                  "Identity assertions in over OIDC or SAML, configured per tenant. No directory data is copied into FactorFox.",
                  "Microsoft proves identity. FactorFox grants authority. Identity linking is explicit and audited, and nobody is auto provisioned.",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Assigned work also appears in Microsoft To Do, alongside the rest of a person&rsquo;s day, with the
            permission each action needs shown against it. The list entry is a rendering. The work is still done
            in FactorFox, where the state change is real and the audit record names who made it.
          </p>
        </Container>
      </Section>

      <ProseSection
        eyebrow="Identity federation"
        title="Two decisions that look like one, and cost you money when they are conflated."
      >
        <p>
          Your directory answers a question about a person: are they who they say they are, and do they still
          work here. It is very good at that question and it should keep owning it, because your joiner and
          leaver process already runs through it and every other answer in your institution decays the moment
          it stops.
        </p>
        <p>
          FactorFox answers a different question: what is this person allowed to do to a book. Whether they may
          approve a release, override a gate, change a credit limit, or countersign as the second officer under
          four eyes. That question has nothing to do with employment and everything to do with authority, and
          an institution that answers it with a directory group has quietly moved a lending control into a
          system administered by whoever administers groups.
        </p>
        <p>
          <strong>So the two stay separate on purpose.</strong> Sign in federates. Authority does not. A person
          who appears in your tenant tomorrow can sign in and see nothing, because being in the directory is
          not a grant. Someone with FactorFox authority who leaves the company loses access the moment the
          directory says so, because the identity half is exactly where it should be.
        </p>
        <p>
          <strong>Linking is a deliberate act.</strong> A user links their Microsoft identity to their FactorFox
          account once, with their FactorFox credentials, and the link is recorded in an audited table. Nothing
          is provisioned automatically, and an unlinked account is refused by name rather than being helpfully
          created.
        </p>
        <p>
          <strong>Break glass exists and it is loud.</strong> If federation fails, an operation that funds every
          day cannot wait for a directory to come back. Break glass access is time boxed, it alarms, and it
          leaves a record that has to be explained afterwards. Federated sign in can also be disabled per tenant
          without touching local access, which turns a bad morning into an inconvenience.
        </p>
      </ProseSection>

      <FeatureGrid
        eyebrow="Who benefits"
        title="The people who feel this on a Tuesday"
        columns={3}
        items={[
          {
            title: "Cash application",
            body: "The morning starts with proposals carrying their evidence rather than with a folder of unopened advices and a spreadsheet.",
          },
          {
            title: "Collections",
            body: "Next contact appears in the calendar the officer already lives in, and the case survives whatever happens to the calendar.",
          },
          {
            title: "Accounting",
            body: "Nothing posts silently. Every application on the book was applied by a named person against a preserved original.",
          },
          {
            title: "IT and security",
            body: "One joiner and leaver process, scopes you can read off the token, mailbox fencing, and revocation that is a single audited call.",
          },
          {
            title: "Client success",
            body: "Scheduling for reviews runs inside your own tenant instead of through a tool that holds your client list on somebody else's terms.",
          },
          {
            title: "Whoever answers the auditor",
            body: "The message, the proposal, the person who applied it and the policy version in force at the time are one chain rather than four systems.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="What an IT reviewer asks before approving this" />

      <RelatedPages
        links={[
          { href: "/integrations/microsoft-teams", label: "Microsoft Teams", note: "Briefings, signal cards and approvals with four eyes intact." },
          { href: "/platform/accounting", label: "Accounting", note: "Where a cash application proposal ends up once a person applies it." },
          { href: "/platform/collections", label: "Collections", note: "The case that projects a follow up into the calendar." },
          { href: "/platform/security", label: "Security and controls", note: "Scopes, revocation, break glass and immutable audit in full." },
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "Why a bank change email becomes a hold instead of an update." },
          { href: "/integrations", label: "All integrations", note: "The register, organised by business purpose, with a status column." },
        ]}
      />

      <CtaBand
        title="Send us a remittance and watch it become a proposal."
        body="Bring one of your own awkward advices to the demonstration. The interesting part is not the invoices that match. It is what the platform says about the deduction that does not."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/integrations", label: "Review our integrations" }}
      />
    </>
  );
}
