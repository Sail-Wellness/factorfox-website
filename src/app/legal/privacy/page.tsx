import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero, Card, Section, Container, Eyebrow } from "@/components/page-parts";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy policy",
  description:
    "Read how FactorFox Software LLC handles personal information from this website: what we collect, why, how long we keep it, and the rights you can use.",
  path: "/legal/privacy",
});

/*
  COUNSEL REVIEW REQUIRED BEFORE LAUNCH.

  This document is drafted by the product team as a complete and accurate
  description of what the factorfox.com website actually does. It has not been
  reviewed by qualified legal counsel and must not go live until it has.

  Specific items counsel must settle before publication:
    1. The controller entity name, registered address and any establishment or
       representative required in the United Kingdom or the European Union.
    2. Whether a data protection officer is required and, if so, their contact.
    3. The correct lawful basis analysis for business contact data collected
       through the demonstration form, and whether legitimate interests requires
       a documented balancing test to be recorded and referenced here.
    4. The transfer mechanism actually relied on for each processor, including
       standard contractual clauses and any United Kingdom addendum.
    5. Named retention periods. The periods described here are stated as
       principles and must be replaced with defined durations.
    6. Whether United States state privacy statutes apply to this business at
       its current scale, and which additional disclosures and rights notices
       they require.
    7. The dedicated privacy contact address and postal address to publish.
    8. Confirmation of the processor categories listed, against the deployed
       infrastructure at the time of launch.
*/

const UPDATED = "27 August 2026";

export default function PrivacyPage() {
  return (
    <>
      {/* COUNSEL REVIEW REQUIRED BEFORE LAUNCH. This policy is an accurate description of what
          the website does, drafted by the product team. It has not been reviewed by qualified
          legal counsel and must not be published until it has. See the block comment above this
          component for the specific items counsel must settle. */}
      <PageHero
        trail={[{ name: "Privacy policy", path: "/legal/privacy" }]}
        eyebrow="Legal"
        title="Privacy policy"
        lede={
          <>
            <p>
              How {SITE.legalName} handles personal information collected through this website. Written to
              describe what the site actually does rather than to cover every possibility, because a policy
              that describes something other than the software it sits on is not worth reading.
            </p>
            <p className="font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">
              Last updated {UPDATED}
            </p>
          </>
        }
      />

      <Section bordered>
        <Container width="narrow">
          <Card accent="accent">
            <Eyebrow tone="signal">Scope of this policy</Eyebrow>
            <p className="mt-3 text-[1rem] leading-[1.65] text-[var(--fg)]">
              <strong>This policy covers the factorfox.com website only.</strong> It describes information
              collected when you browse these pages, request a demonstration or write to us.
            </p>
            <p className="mt-4 text-[1rem] leading-[1.65] text-[var(--fg-muted)]">
              It does <strong>not</strong> govern the FactorFox platform. Information that a customer
              institution loads into or generates within the platform, including data about that
              customer&rsquo;s own clients and debtors, is processed under the customer agreement and the
              data processing terms that form part of it. In that relationship the customer is the
              controller and FactorFox acts as a processor on its documented instructions. If you are an
              employee of a FactorFox customer asking how your institution&rsquo;s data is handled, the
              answer is in your institution&rsquo;s agreement with us, not on this page.
            </p>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container width="narrow">
          <div className="space-y-14">
            <Clause n="1" title="Who we are">
              <p>
                {SITE.legalName} operates this website and decides why and how the personal information
                described here is processed, which makes us the controller of it. Our registered details and
                any representative appointed for the United Kingdom or the European Union are set out in the
                contact section below.
              </p>
              <p>
                We sell software to institutions, not to individuals. Almost all of the personal information
                we collect through this site is business contact information about people acting in a
                professional capacity.
              </p>
            </Clause>

            <Clause n="2" title="What we collect, and how">
              <p>
                <strong>Information you give us in the demonstration request form.</strong> Your name,
                business email address, company, your role, an optional indication of the size and shape of
                the book you fund, the system you run today if you tell us, which capabilities you would like
                to see, and any message you write. The form also carries the page you submitted it from and
                a timing value used to identify automated submissions. A hidden field is present for the same
                purpose and must be left empty.
              </p>
              <p>
                <strong>Information in correspondence.</strong> If you email us, book time with us, or reply
                to something we send, we hold that correspondence and whatever you choose to put in it.
                Meetings booked through our scheduling page are handled in the Microsoft environment we
                operate.
              </p>
              <p>
                <strong>Technical information created by visiting.</strong> Our hosting infrastructure
                records ordinary web server information for each request, which can include an internet
                protocol address, the requested address, a timestamp, a referring address and a browser user
                agent string. This is created by the act of serving a page and is used for delivery,
                security and diagnosing faults.
              </p>
              <p>
                <strong>Attribution information stored in your own browser.</strong> If you arrive with
                campaign parameters in the web address, the site records the first and most recent of those
                in your browser under the keys <Mono>ffx_first_touch</Mono> and <Mono>ffx_last_touch</Mono>,
                together with the referring address, the landing page and the time. It stays in your browser
                and is transmitted to us only if you choose to submit the demonstration form, at which point
                it is attached to that submission so we know which piece of writing brought you here. It
                contains no identifier we assign to you. Clearing your browser storage for this site removes
                it.
              </p>
              <p>
                We do not ask for and do not want special category information, financial account details or
                anything about consumers. Please do not put confidential information about your own clients
                or debtors into the message field.
              </p>
            </Clause>

            <Clause n="3" title="Cookies, storage and consent">
              <p>
                This website sets no advertising cookies, no cross site tracking cookies and no third party
                analytics cookies. It loads no third party scripts. Typefaces are served from our own origin
                rather than from a font network, so viewing a page here does not cause a request to another
                company.
              </p>
              <p>
                The only client side storage the site uses is the attribution information described above,
                held in local and session storage rather than in cookies. We treat it as non essential and
                it is never used to build a profile, to target advertising or to identify you across other
                websites.
              </p>
              <p>
                If we introduce measurement or advertising technology that requires consent, we will publish
                a consent mechanism before it is enabled, and this section will be updated and dated on the
                same day. We would rather tell you there is nothing to consent to than show you a banner
                that implies otherwise.
              </p>
            </Clause>

            <Clause n="4" title="Why we process it, and our lawful basis">
              <p>
                <strong>To answer a demonstration request and pursue the discussion that follows.</strong>{" "}
                Where you are asking us to take steps before entering into an agreement, that processing is
                necessary for those steps. Otherwise we rely on our legitimate interest in responding to a
                business enquiry made to us by a professional acting for their employer, which is an interest
                we consider you share, since you asked us to get in touch.
              </p>
              <p>
                <strong>To send you material you asked for.</strong> Where consent is the appropriate basis
                for a particular communication, we obtain it separately and you may withdraw it at any time
                without affecting anything else.
              </p>
              <p>
                <strong>To keep the site available, secure and working.</strong> Our legitimate interest in
                operating our own infrastructure, preventing abuse and diagnosing faults.
              </p>
              <p>
                <strong>To understand which writing brings operators to us.</strong> Our legitimate interest
                in knowing which pages are useful, using the attribution information described above.
              </p>
              <p>
                <strong>To meet legal, accounting and regulatory obligations.</strong> Where we are required
                to retain records, compliance with a legal obligation.
              </p>
              <p>
                We do not sell personal information, we do not share it for cross context behavioural
                advertising, and we do not make decisions producing legal effects about you by automated
                means through this website.
              </p>
            </Clause>

            <Clause n="5" title="How long we keep it">
              <p>
                Demonstration requests and the correspondence attached to them are retained while the
                commercial discussion is live and for a defined period afterwards, so that a conversation
                picked up again later starts from what was actually said rather than from nothing. Where a
                relationship becomes a customer relationship, the record moves under the agreement between
                our institutions.
              </p>
              <p>
                Server request logs are retained for a short operational period sufficient for security and
                fault diagnosis, then discarded on a rolling basis. Attribution information in your browser
                persists until you clear your browser storage, because it is held by your browser rather
                than by us.
              </p>
              <p>
                Where we are required to keep records for legal, tax or accounting purposes, we keep them for
                the period the relevant law requires and no longer. Ask us and we will tell you what we hold
                about you and how long it is scheduled to be kept.
              </p>
            </Clause>

            <Clause n="6" title="Who we share it with">
              <p>
                We do not sell or rent personal information and we do not disclose it to anyone for their own
                marketing. We share it only with service providers acting on our instructions, and only to
                the extent each one needs to perform its function. The categories are:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Hosting and content delivery infrastructure, which serves these pages and holds the request logs described above.</li>
                <li>Email delivery and mailbox services, used to send and receive correspondence with you.</li>
                <li>Scheduling services within the Microsoft environment we operate, where you book a meeting with us.</li>
                <li>Customer relationship and workflow tools that receive a demonstration request so that a person is assigned to answer it.</li>
                <li>Professional advisers, auditors and insurers, where they need the information to advise us.</li>
              </ul>
              <p>
                Each provider is engaged under a written contract requiring it to act only on our
                instructions, to keep the information confidential and to apply appropriate security. We may
                also disclose information where we are legally required to, or where it is necessary to
                establish, exercise or defend legal claims. If our business or part of it is transferred to
                another party, information may transfer with it, and we would tell you before that changed
                how it is used.
              </p>
            </Clause>

            <Clause n="7" title="International transfer">
              <p>
                We are established in the United States and our customers are in North America, Latin
                America, Europe, Australia and South Africa. Information collected through this site will
                therefore be processed in the United States and may be processed elsewhere by the service
                providers described above.
              </p>
              <p>
                Where personal information is transferred out of the United Kingdom or the European Economic
                Area to a country that has not been found to provide an adequate level of protection, we rely
                on an appropriate safeguard for that transfer, which for our providers is normally the
                European Commission standard contractual clauses together with the United Kingdom addendum
                where relevant. Ask us and we will tell you which mechanism applies to a specific transfer
                and provide the relevant information about it.
              </p>
            </Clause>

            <Clause n="8" title="Your rights">
              <p>
                Depending on where you are, you have some or all of the following rights over personal
                information we hold about you. We do not charge for exercising them and we do not treat
                anyone differently for having done so.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Access.</strong> A copy of the personal information we hold about you and an explanation of what we do with it.</li>
                <li><strong>Correction.</strong> Rectification of anything inaccurate or incomplete.</li>
                <li><strong>Deletion.</strong> Erasure, where we no longer have a lawful reason to keep it.</li>
                <li><strong>Objection.</strong> An objection to processing carried out on the basis of legitimate interests, including any direct marketing, which we stop on request without needing a reason.</li>
                <li><strong>Restriction.</strong> A pause on processing while a dispute about accuracy or lawful basis is resolved.</li>
                <li><strong>Portability.</strong> A copy in a structured, commonly used and machine readable form, where the right applies.</li>
                <li><strong>Withdrawal of consent.</strong> Where we relied on consent, withdrawal at any time, without affecting processing already carried out.</li>
                <li><strong>Complaint.</strong> A complaint to your supervisory authority. We would rather you came to us first, but that is your choice and not a condition.</li>
              </ul>
              <p>
                To exercise any of these, write to us using the contact details below. We will ask for enough
                information to be confident who you are, and we will answer within the period the applicable
                law allows.
              </p>
            </Clause>

            <Clause n="9" title="Security">
              <p>
                The site is served over an encrypted connection with strict transport security, and it sets
                content type, framing, referrer and permissions policy headers to reduce the ways a page can
                be misused. Demonstration requests are validated on receipt and recorded so that an enquiry
                is never lost silently, even when a downstream delivery fails.
              </p>
              <p>
                Access to the information described here is limited to the people who need it to do their
                jobs. The controls that protect the FactorFox platform itself, which are a different and
                larger subject, are described on our{" "}
                <InlineLink href="/platform/security">security and controls</InlineLink> page.
              </p>
            </Clause>

            <Clause n="10" title="Children">
              <p>
                This website is for people acting on behalf of financial institutions. It is not directed at
                children, and we do not knowingly collect personal information from anyone under the age at
                which consent for information services applies in their country. If you believe a child has
                sent us information, tell us and we will delete it.
              </p>
            </Clause>

            <Clause n="11" title="Changes to this policy">
              <p>
                When this policy changes, the date at the top changes with it, and we will describe what
                changed rather than only saying that something did. Where a change materially affects how we
                use information already collected from you, we will tell you directly before it takes effect.
              </p>
            </Clause>

            <Clause n="12" title="Contact us">
              <p>
                Write to{" "}
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="text-[var(--accent)] underline underline-offset-4 hover:no-underline"
                >
                  {SITE.contactEmail}
                </a>{" "}
                with anything about this policy, including a request to exercise one of the rights above.
                Put the word privacy in the subject line so it reaches the right person quickly.
              </p>
              <p>
                Our registered entity is {SITE.legalName}. Our postal address, and the details of any
                representative appointed in the United Kingdom or the European Union, are published here on
                publication of the reviewed version of this policy.
              </p>
              <p>
                If you are in the United Kingdom or the European Economic Area and you are not satisfied with
                how we have handled a request, you may complain to your national supervisory authority.
              </p>
            </Clause>
          </div>

          <p className="mt-16 border-t border-[var(--line)] pt-7 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">
            {SITE.legalName} &middot; Privacy policy &middot; Last updated {UPDATED} &middot;{" "}
            <Link href="/legal/terms" className="hover:text-[var(--fg)]">
              Terms of use
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}

/* ------------------------------------------------------------------ pieces */

function Clause({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section>
      <div className="flex items-baseline gap-4">
        <span className="u-tabular font-mono text-[0.75rem] uppercase tracking-[0.14em] text-[var(--signal)]">
          {n}
        </span>
        <h2 className="text-[1.375rem] leading-[1.3]">{title}</h2>
      </div>
      <div className="mt-5 space-y-4 pl-0 text-[1rem] leading-[1.7] text-[var(--fg-muted)] sm:pl-10 [&_strong]:font-semibold [&_strong]:text-[var(--fg)]">
        {children}
      </div>
    </section>
  );
}

function Mono({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-[2px] bg-[var(--bg-sunken)] px-1.5 py-0.5 font-mono text-[0.8125rem] text-[var(--fg)]">
      {children}
    </code>
  );
}

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-[var(--accent)] underline underline-offset-4 hover:no-underline">
      {children}
    </Link>
  );
}
