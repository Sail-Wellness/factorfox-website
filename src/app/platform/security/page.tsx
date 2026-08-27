import type { Metadata } from "next";
import {
  PageHero,
  FeatureGrid,
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
  title: "Factoring software security and controls",
  description:
    "Give vendor reviewers the detail they ask for: tenant isolation, immutable audit, four eyes, least privilege scopes, revocation and break glass access.",
  path: "/platform/security",
  intent: "brand",
  target: "factoring software security",
});

const FAQS = [
  {
    q: "Which security certifications do you hold?",
    a: "None that we are claiming on this page. We would rather be the vendor whose trust page you can verify line by line than the one whose logos you have to take on faith. The controls described here are implemented in the platform and can be demonstrated against a running environment during your review. Where our certification position changes, this page will change with it, and the change will be dated.",
  },
  {
    q: "How is one customer's data kept away from another's?",
    a: "Tenant isolation is enforced at the database level rather than in application code. That distinction is the one worth probing in any multi tenant platform, because isolation implemented in application code is one forgotten filter away from a disclosure, and every team believes their filters are complete until one is not.",
  },
  {
    q: "Can a FactorFox administrator read our book?",
    a: "Support access is not ambient. It is requested, scoped, time boxed and audited, and the access record is visible to you rather than only to us. Break glass exists for the situation where normal access paths have failed, and it is deliberately noisy: it alarms, it is time limited, and using it creates a record that has to be explained afterwards.",
  },
  {
    q: "What can your integrations reach in our Microsoft tenant?",
    a: "Only what the enabled features require, as application permissions, and the capabilities screen shows what the token actually carries rather than what any document claims it should. An Exchange application access policy can fence the application to a single shared mailbox instead of the whole tenant. Access is revoked per tenant with one call, and the revocation is stored and audited.",
  },
  {
    q: "What happens to our data if we leave?",
    a: "You take it. Export is a supported operation rather than a negotiation, and the audit history and sealed packets come with it, because a record you cannot take with you was never really yours. Deletion follows on your instruction and the timetable is contractual rather than something this page should be making up.",
  },
  {
    q: "Does any customer data go to a language model?",
    a: "Document text goes to the extraction endpoint configured for your tenant, and the endpoint and model are configuration rather than a fixed dependency. Extraction output is never trusted on its own: it faces deterministic revalidation in ordinary code before it touches your book, and a response that does not conform to the strict schema is rejected rather than repaired.",
  },
  {
    q: "Can your automation move money on its own?",
    a: "No. The machine may stop money and only a named human may let it through. Certain gates can never be made advisory, by any role or configuration. Four eyes applies by default, and in solo mode an AI counter review is logged where the second officer's name would sit and refuses outright when any underlying fact has changed.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox security and controls",
          description:
            "Tenant isolation, immutable audit, four eyes approval, least privilege integration scopes, delivery controls, token encryption, revocation and break glass access.",
          path: "/platform/security",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Security and controls", path: "/platform/security" },
        ]}
        eyebrow="Security and controls"
        title="Written for the person filling in the questionnaire, not the person buying the software."
        lede={
          <>
            <p>
              If you are reviewing FactorFox on behalf of a bank, an auditor or an information security
              function, this page is for you. It describes what is implemented, in the terms a review asks
              about, and it is deliberately short on adjectives.
            </p>
            <p>
              Everything below can be demonstrated against a running environment. Ask for the demonstration.
              A control that cannot be shown working is a paragraph, not a control.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Book a controls walkthrough" }}
        secondaryCta={{ href: "/integrations/microsoft-teams", label: "See the Teams control surface" }}
      />

      <ProseSection
        eyebrow="Certification"
        title="Where we are, stated plainly."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Why it reads like this</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              A trust page that overstates a certification position is the fastest way to fail the review it
              was written for. Assessors check.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              We would rather hand you a page where every line survives being checked than one that looks
              more impressive for a fortnight.
            </p>
          </Card>
        }
      >
        {/*
          ==========================================================================
          PLACEHOLDER. MUST BE REPLACED BEFORE LAUNCH.

          The paragraph immediately below is a holding statement. The specific
          certification programme wording, the named standard, any audit period and
          any report availability language are PENDING OWNER APPROVAL and must not be
          written here by anyone else.

          Do not add a standard name, a framework name, a certification body, a date,
          a status such as "in progress" or "audit underway", or a badge or logo to
          this page until the owner has supplied the approved sentence in writing.
          Replace this entire block, comment included, with that approved sentence.
          ==========================================================================
        */}
        <p>
          FactorFox is working toward formal security certification. The specific programme wording is pending
          owner approval and will be published here once it is confirmed, rather than described in advance. We
          claim no certification today. What we do claim is the set of controls described on the rest of this
          page, each of which is implemented in the platform and can be demonstrated to your reviewers against
          a running environment.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The control surface"
            title="What is implemented, in questionnaire order"
            lede="Copy any row of this into your review document. If a row raises a follow up question, that is the right outcome, and we would rather have the conversation now than during implementation."
          />
          <div className="mt-11">
            <DataTable
              caption="Implemented security and operational controls"
              head={["Control", "How it is implemented"]}
              rows={[
                [
                  "Tenant isolation",
                  "Enforced at the database level, not in application code. Application level isolation depends on every query being written correctly forever, which is a promise no team can keep. Enforcement below the application does not depend on that promise.",
                ],
                [
                  "Immutable audit",
                  "Every action records the actor, the evidence, the policy version, confidence where applicable, and the origin surface. Audit records cannot be mutated. Risk observations are append only at the database level.",
                ],
                [
                  "Sealed packets",
                  "Audit packets are sealed when produced and a database trigger refuses any attempt to mutate one. Corrections are restatements that stand beside the original and name what changed.",
                ],
                [
                  "Four eyes",
                  "Enforced beneath every surface rather than in any one of them. A requester cannot approve their own release from the web application, from a phone or from Microsoft Teams, because the rule is implemented once, below all three.",
                ],
                [
                  "Counter review",
                  "In solo mode an AI counter review is logged where the second officer's name would sit. It refuses outright when any underlying fact has changed since the request was raised, so it is a check with the ability to say no rather than a formality.",
                ],
                [
                  "Asymmetric automation",
                  "The machine may stop money. Only a named human may let it through. Certain gates can never be made advisory, by any role, any configuration flag or any customer request.",
                ],
                [
                  "Bank account change hold",
                  "A human only hold in front of every payment rail. Automated approval is refused outright rather than disabled by default, so there is no setting that a pressured week can turn into a habit.",
                ],
                [
                  "Identity and access",
                  "Federated sign in over OIDC and SAML through Microsoft Entra ID, configured per tenant. Your directory decides who somebody is. FactorFox decides what they may do. Nobody is auto provisioned and identity linking is explicit and audited.",
                ],
                [
                  "Least privilege integration scopes",
                  "Integration permissions are limited to the features you have enabled, and the capabilities screen shows what a token actually carries rather than what documentation says it should. The roles list on the token is treated as the truth.",
                ],
                [
                  "Credential handling",
                  "Connector tokens are encrypted at rest, are never logged and are never returned by any interface, including to the administrator who created the connection.",
                ],
                [
                  "The delivery wall",
                  "No outbound message escapes it, on any channel, including Microsoft Graph mail. Non production environments carry allowlist and sink behaviour, so a test can never reach a real debtor, client or bank.",
                ],
                [
                  "Revocation",
                  "Integration access is revoked per tenant with a single call, and the revocation is stored and audited. Teams is disabled by clearing one setting, at which point the door answers 501.",
                ],
                [
                  "Blast radius",
                  "Nothing in the platform depends on the adapters. Removing an integration removes that integration and changes nothing else about how the platform operates.",
                ],
                [
                  "Break glass",
                  "Emergency access exists for the case where normal paths have failed, including a directory outage. It is time boxed, alarmed and audited, and using it produces a record that has to be explained afterwards.",
                ],
                [
                  "Support access",
                  "Not ambient. Requested, scoped, time limited and recorded, with the access record visible to the customer rather than only to us.",
                ],
                [
                  "Model output handling",
                  "Extraction runs against the endpoint configured for your tenant under a strict schema, and every output faces deterministic revalidation in ordinary code before it reaches your book. Non conforming responses are rejected, never repaired.",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <ProseSection eyebrow="The principle underneath" title="Refusal is a feature, and it is the one worth testing.">
        <p>
          Most of what a security review is really trying to establish is not whether a system can do things.
          It is whether the system can be made to do things it should not. So the controls in FactorFox are
          built as refusals, and the refusals are the part we ask you to try during evaluation.
        </p>
        <p>
          <strong>Try to approve your own release.</strong> The platform refuses you by name and explains that
          four eyes applies. Try it from Microsoft Teams instead, because changing surface is how this control
          is usually defeated in practice. It refuses there too, for the same reason, from the same code.
        </p>
        <p>
          <strong>Try to release a bank account change automatically.</strong> There is no path. Not a
          disabled option, not a permission an administrator can grant. The gate cannot be made advisory.
        </p>
        <p>
          <strong>Try to have an unlinked directory account do something.</strong> Being in the Teams channel
          is not authorisation. An unlinked Microsoft account is refused by name and nothing is created for
          it: no user, no tenant, no shadow record.
        </p>
        <p>
          <strong>Try to edit a sealed packet.</strong> The database refuses the write. Not the interface, and
          not a validation rule somebody could bypass with a different client.
        </p>
        <p>
          <strong>Try to make the platform show you a change it cannot prove.</strong> It will not. Where
          there is no comparable prior observation, it offers to take a first observation rather than
          reconstructing a plausible yesterday, and where a data source is declared but not wired it reports
          itself blind and names the source instead of reporting zero.
        </p>
      </ProseSection>

      <FeatureGrid
        eyebrow="What we do not claim"
        title="The absences, listed on purpose"
        lede="An assessor learns more from what a vendor declines to claim than from what it does. Here is our list, in the same place as everything else."
        items={[
          {
            title: "No certifications asserted",
            body: "We hold no certification claim on this site. See the statement above, which will be updated when there is something confirmed to say.",
          },
          {
            title: "No outcome learning",
            body: "Risk and fraud weights are pinned constants that a person chose and can be read. There is no confirmed fraud label, no false positive tracking and no automatic threshold tuning. Calibration is the next build.",
          },
          {
            title: "No asserted carrier compliance",
            body: "Operating authority currency, insurance currency and safety scores are captured, never verified. The gate that would assert them is explicitly forbidden from guessing and says so on screen.",
          },
          {
            title: "No automatic legal or credit events",
            body: "Several external sources are declared and dark. Where one is not wired, the platform reports itself blind and names the source rather than presenting an absence as a clean result.",
          },
          {
            title: "No replacement of judgement",
            body: "FactorFox does not replace legal review, lender approval or executive judgement. It monitors conditions, organises evidence, identifies exceptions and buys decision makers time to act.",
          },
          {
            title: "No numbers without a source",
            body: "There is no accuracy percentage, no uptime figure, no funded volume and no customer count anywhere on this site, because none of those exist in a form we can source. When they do, they will appear with their source.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="Vendor review questions, answered directly" />

      <RelatedPages
        links={[
          { href: "/integrations/microsoft-teams", label: "Microsoft Teams", note: "The full control table for the surface reviewers ask about most." },
          { href: "/integrations/microsoft-365", label: "Microsoft 365", note: "Graph scopes, mailbox fencing and Entra ID federation." },
          { href: "/platform/treasury", label: "Treasury", note: "Where asymmetric automation is doing its most expensive work." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "Why every figure carries a reference into a record." },
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "Pinned weights, recorded dismissals and the honest boundary." },
          { href: "/company", label: "The company", note: "Who owns FactorFox and how long it has been doing this." },
        ]}
      />

      <CtaBand
        title="Send us your questionnaire."
        body="We will answer it against the running platform rather than from a template, and we will tell you plainly which rows we cannot answer yet."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "See the whole platform" }}
      />
    </>
  );
}
