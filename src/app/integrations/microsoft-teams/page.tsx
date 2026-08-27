import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  FeatureGrid,
  ProseSection,
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
  title: "Microsoft Teams approvals for lending teams",
  description:
    "Read your briefing, open the evidence, approve a release and assign work from Teams on desktop or phone, with four eyes enforced on every approval.",
  path: "/integrations/microsoft-teams",
  intent: "integration",
  target: "Microsoft Teams approvals for financial services",
});

const FAQS = [
  {
    q: "Is this a chatbot?",
    a: "No. It is the same application surface the web app calls, rendered as cards. When you press Approve in Teams, the request crosses the ordinary API with a short lived session minted for your resolved identity, so middleware, role checks, four eyes, counter review, facility guards and audit all run exactly as they would for a browser click.",
  },
  {
    q: "What happens if someone in our Microsoft tenant is not a FactorFox user?",
    a: "They get a friendly refusal card explaining that the account is not linked, and nothing is created. No user, no tenant, no shadow record. Being in the Teams channel is not authorisation. Microsoft proves identity, FactorFox grants authority, and those are two separate decisions.",
  },
  {
    q: "Can someone approve their own funding request from Teams?",
    a: "No. Four eyes is enforced in the platform, not in the Teams layer, so it cannot be bypassed by changing surface. If you requested the release, Teams refuses your approval and tells you why. A second officer approving from their own phone executes it, and the audit record names them and records the origin as Teams.",
  },
  {
    q: "What Microsoft permissions does this need?",
    a: "The Teams surface itself needs no Graph permissions. The mail, calendar and task features use application permissions scoped to what is enabled: Mail.Send, Mail.ReadWrite, Calendars.ReadWrite and Tasks.ReadWrite.All. The capabilities screen in FactorFox shows exactly what your token carries, because the roles list on the token is the truth rather than what the documentation claims.",
  },
  {
    q: "Can we turn it off?",
    a: "Yes, and nothing else changes. Clearing the Teams application id makes the door answer 501, or you delete the bot's Teams channel. Native FactorFox is unaffected because by design nothing in the platform depends on the adapters. Graph mail is revoked per tenant with a single call, and the revocation is stored and audited.",
  },
  {
    q: "Is it in the Microsoft Teams app store?",
    a: "Not yet. It is installed by custom upload into your tenant, and it is running in controlled release with named customers. We say controlled release rather than available because that is what it is. A marketplace listing is sequenced after the current validation programme.",
  },
];

export default function TeamsPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox for Microsoft Teams",
          description:
            "Briefings, signals, assigned work and approvals for factoring and asset based lending operations, delivered inside Microsoft Teams with the platform's authority controls intact.",
          path: "/integrations/microsoft-teams",
        })}
      />

      <PageHero
        trail={[
          { name: "Integrations", path: "/integrations" },
          { name: "Microsoft Teams", path: "/integrations/microsoft-teams" },
        ]}
        eyebrow="Microsoft Teams"
        status="controlled"
        title="Operate FactorFox from Microsoft Teams."
        lede={
          <>
            <p>
              Your briefing arrives in Teams. So do signals, exceptions, assigned work and the approvals
              waiting on you. You read what changed, open the evidence behind it, approve the release,
              assign the follow up, and never open a dashboard. It works the same on a phone.
            </p>
            <p>
              The reason to care is not convenience. It is that nothing loosens on the way out of the
              building.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Explore Microsoft Teams integration" }}
        secondaryCta={{ href: "/platform/briefings", label: "See how briefings work" }}
        aside={<TeamsScene />}
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="The owner is the bottleneck, and it is not because they are slow."
        lede="Funding stalls at the moment it needs a person who is in a car, in a meeting or in another city. The usual fix is to loosen the control. That is the wrong fix."
        rows={[
          {
            problem:
              "An approval waits until someone gets back to a desk, or gets granted to somebody who should not have it so the day can close.",
            response:
              "The approval arrives as a card with the evidence attached. The person who should approve it does, from wherever they are, and the control is unchanged.",
          },
          {
            problem:
              "Somebody screenshots a queue into a chat and the decision gets made in a thread nobody can audit later.",
            response:
              "The decision happens on the card. The state change is real, and the audit record carries the actor, the evidence, the policy version and the origin.",
          },
          {
            problem:
              "The owner asks what changed overnight and three people spend the morning assembling an answer from four screens.",
            response:
              "The briefing answered it at seven, in Teams, scoped to what the owner is responsible for, with the numbers linked to the records that produce them.",
          },
          {
            problem:
              "Adding people to the chat quietly becomes a way of granting access to information nobody decided to grant.",
            response:
              "Conversation is not authorisation. An unlinked Microsoft account is refused by name and nothing is created for it.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The authority boundary"
        title="Microsoft proves identity. FactorFox grants authority."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The refusal is the product</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Approve a release you requested yourself, from Teams, and the platform refuses you by name and
              explains that four eyes applies. It is not a Teams feature and it cannot be turned off by
              changing surface, because the rule lives underneath every surface.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Solo operators are not exempted. In solo mode an AI counter review is recorded where the second
              officer&rsquo;s name would sit, and it refuses outright when any underlying fact has changed since
              the request was raised.
            </p>
          </Card>
        }
      >
        <p>
          Every institution that has connected a chat tool to a system of record has had the same argument
          about what happens to the controls. Here is the answer, in the order the platform applies it.
        </p>
        <p>
          <strong>The door checks the envelope.</strong> The Teams endpoint validates that Microsoft signed
          the activity. An unsigned request gets a 401 and goes no further.
        </p>
        <p>
          <strong>The identity is resolved, never assumed.</strong> The Microsoft object identifier is matched
          against a FactorFox user by subject, never by email address, because email addresses change hands
          and subjects do not. An unknown identity is refused and nothing is provisioned.
        </p>
        <p>
          <strong>Every mutation crosses the real surface.</strong> A card action does not call domain logic.
          It calls the ordinary application interface under a short lived session minted for the resolved
          user, so role checks, four eyes, counter review, facility guards and audit all execute. Cards are
          renderings. Permission and current state are re checked on the server at the moment of execution,
          which means a card sitting in a channel from yesterday cannot execute against a book that has
          moved since.
        </p>
        <p>
          <strong>Nothing sends without passing the wall.</strong> Mail sent through Microsoft Graph is wrapped
          in the same delivery controls as every other channel, including the sandbox rules that stop a test
          from reaching a real debtor.
        </p>
      </ProseSection>

      <FeatureGrid
        eyebrow="What you can do"
        title="Six surfaces, one system underneath"
        lede="There is no second brain. Every one of these calls the same endpoints the web application calls, so an answer in Teams and an answer on screen can never disagree."
        items={[
          {
            title: "Briefing tab",
            body: "The six questions answered inside Teams, scoped to your responsibility. A second briefing states what moved since the first rather than restating the book.",
          },
          {
            title: "Dialogue in chat",
            body: "Ask what our open AR is, or why a client was flagged, and get an answer with its sources named. Not a canned reply, and not a different model from the one the platform runs.",
          },
          {
            title: "Signal cards",
            body: "A risk signal arrives with its reason and its evidence. Acknowledge from the card and the state change is real, audited, and stamped with origin Teams and your name.",
          },
          {
            title: "Approvals",
            body: "Releases, overrides and exceptions, approved or refused from the card, with four eyes and facility guards fully enforced.",
          },
          {
            title: "Assigned work",
            body: "What is yours, in the channel or in Microsoft To Do, with the permission each action needs shown against it.",
          },
          {
            title: "Mobile",
            body: "The same surfaces, phone sized. The point of the whole integration is the person who is not at a desk.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Security and controls"
            title="Written for the person who reviews vendors, not for the person who buys software."
            lede="If your bank or your auditor asks what this integration can reach, this is the list. Copy it into the questionnaire."
          />
          <div className="mt-11">
            <DataTable
              caption="Microsoft permissions and controls"
              head={["Control", "How it works"]}
              rows={[
                ["Inbound authentication", "Bot Connector signature validated on every activity. Unsigned requests are refused with 401 before any handler runs."],
                ["Identity resolution", "Microsoft object identifier matched to a FactorFox user by subject. Email is never used as the match key."],
                ["Provisioning", "None. Identity linking is explicit, performed once by the user with their FactorFox credentials, and recorded in an audited table."],
                ["Authorisation", "Role checks, four eyes, counter review and facility guards run on the server for every Teams initiated action, identically to the web path."],
                ["Graph scopes", "Application permissions, least privilege, limited to the features enabled: Mail.Send, Mail.ReadWrite, Calendars.ReadWrite, Tasks.ReadWrite.All. The capabilities screen shows what the token actually carries."],
                ["Mailbox scoping", "An Exchange application access policy can fence the application to a single shared mailbox rather than the whole tenant."],
                ["Outbound delivery", "Graph mail passes the same delivery wall as every other channel, including allowlist and sink behaviour in non production environments."],
                ["Audit", "Every action records actor, evidence, policy version, confidence where applicable, and origin. Audit records are immutable at the database level."],
                ["Revocation", "Graph access is revoked per tenant with one call and the revocation is stored and audited. Teams can be disabled by clearing one setting."],
                ["Blast radius", "Nothing in the platform depends on the adapters. Removing Teams removes Teams and changes nothing else."],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Status is controlled release. The interface has been proven against a deployed service, with
            sixteen of sixteen server side claims verified in a dated run, and it is installed into your
            tenant by custom upload rather than from the Teams store. We would rather tell you that than
            round it up to available.
          </p>
        </Container>
      </Section>

      <ProseSection
        eyebrow="Beyond Teams"
        title="The rest of the Microsoft environment, where it earns its place."
        tone="default"
      >
        <p>
          <strong>Outlook and Graph mail.</strong> A remittance lands in a shared mailbox and becomes a cash
          application proposal with the original message preserved as evidence. It is never posted silently.
          The same message is never ingested twice. Content that looks like a bank account change is
          classified as requiring verification rather than applied, because that is the single most
          expensive email a factoring company receives.
        </p>
        <p>
          <strong>Calendar.</strong> A collections case projects its next contact into the officer&rsquo;s calendar.
          Deleting the calendar entry does not close the case, because the case is the record and the
          calendar is a projection of it.
        </p>
        <p>
          <strong>Microsoft To Do.</strong> Assigned work appears where the rest of a person&rsquo;s work already is.
        </p>
        <p>
          <strong>Bookings.</strong> Scheduling for reviews and demonstrations runs inside your own tenant
          rather than through a third party calendar tool holding your data.
        </p>
        <p>
          <strong>Entra ID.</strong> Federated sign in over OIDC and SAML, configured per tenant. Your
          directory decides who someone is and when they stop being an employee. FactorFox decides what they
          may do. Break glass access survives a directory outage.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What a credit committee asks about this" />

      <RelatedPages
        links={[
          { href: "/integrations/microsoft-365", label: "Microsoft 365", note: "Outlook, Calendar, Bookings and Entra ID in detail." },
          { href: "/platform/briefings", label: "Briefings", note: "The six questions and how scope is decided." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "What sits behind the number on the card." },
          { href: "/platform/security", label: "Security and controls", note: "The whole control surface, not just this integration." },
          { href: "/platform/treasury", label: "Treasury", note: "What an approved release actually does next." },
          { href: "/integrations", label: "All integrations", note: "Organised by business purpose, with a status on every row." },
        ]}
      />

      <CtaBand
        title="See a briefing land in your own tenant."
        body="We will show you the approval that gets refused because the requester tried to approve it. That single moment explains the product better than any deck."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/integrations", label: "Review our integrations" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

function TeamsScene() {
  return (
    <figure className="m-0">
      <div className="border border-[var(--line-strong)] bg-[var(--bg-raised)]" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
            Teams &middot; FactorFox AI &middot; Approvals
          </p>
          <Status kind="critical" label="Action required" />
        </div>

        <div className="space-y-4 p-5">
          <div className="border border-[var(--line)] p-4">
            <p className="text-[0.9375rem] font-semibold leading-[1.35]">Release schedule SCH-2214 for funding</p>
            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.8125rem]">
              {[
                ["Client", "Sunline Packaging"],
                ["Amount", "$268,400"],
                ["Requested by", "R. Vasquez"],
                ["Gates", "8 of 8 passed"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">{k}</dt>
                  <dd className="u-tabular m-0 text-[var(--fg)]">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-[2px] bg-[var(--color-ink-100)] px-3 py-1.5 text-[0.75rem] font-semibold text-[var(--color-ink-500)] dark:bg-[var(--color-ink-800)] dark:text-[var(--color-ink-300)]">
                Approve
              </span>
              <span className="inline-flex items-center rounded-[2px] border border-[var(--line-strong)] px-3 py-1.5 text-[0.75rem] font-semibold">
                Open evidence
              </span>
              <span className="inline-flex items-center rounded-[2px] border border-[var(--line-strong)] px-3 py-1.5 text-[0.75rem] font-semibold">
                Refuse
              </span>
            </div>

            <p
              className="mt-4 border-l-2 pl-3 text-[0.8125rem] leading-[1.5]"
              style={{ borderColor: "var(--color-crit-600)", color: "var(--color-crit-600)" }}
            >
              You raised this request. Four eyes applies, so a second officer has to approve it. Sent to
              M. Chen, credit officer.
            </p>
          </div>

          <p className="font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
            Audit &middot; origin teams &middot; actor robert@factorfox.com &middot; refused by policy four_eyes
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of the approval card and the four eyes refusal. Card structure, the gate count, the
        permission model and the audit fields are the platform&rsquo;s own. Names and figures are from a seeded
        demonstration book.
      </figcaption>
    </figure>
  );
}
