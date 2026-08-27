import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero, Card, Section, Container, Eyebrow } from "@/components/page-parts";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Terms of use",
  description:
    "Read the terms on which FactorFox Software LLC offers this website: acceptable use, intellectual property, liability limits, links and governing law.",
  path: "/legal/terms",
});

/*
  COUNSEL REVIEW REQUIRED BEFORE LAUNCH.

  Drafted by the product team to describe the site accurately and to be readable.
  It has not been reviewed by qualified legal counsel and must not go live until
  it has.

  Specific items counsel must settle before publication:
    1. Governing law and exclusive jurisdiction. Section 10 carries a marked
       placeholder and must not be published with the placeholder in place.
    2. Whether a dispute resolution, arbitration or class action waiver clause is
       wanted, and whether it is enforceable in the chosen forum.
    3. The liability cap and the carve outs from it, tested against the
       jurisdictions our visitors are actually in, including consumer protection
       law in the European Union, the United Kingdom and Australia.
    4. The correct entity name, registered address and any notice address.
    5. Whether the App Store end user terms previously published as a PDF, which
       now redirect to this page, need to be preserved as a separate document for
       the FactorFox Client App rather than folded into website terms.
    6. Whether an accessibility statement should be linked from here.
*/

const UPDATED = "27 August 2026";

export default function TermsPage() {
  return (
    <>
      {/* COUNSEL REVIEW REQUIRED BEFORE LAUNCH. Section 10 contains a deliberate governing law
          placeholder that must be replaced. See the block comment above this component for the
          full list of items counsel must settle. */}
      <PageHero
        trail={[{ name: "Terms of use", path: "/legal/terms" }]}
        eyebrow="Legal"
        title="Terms of use"
        lede={
          <>
            <p>
              The terms on which {SITE.legalName} makes this website available. Written to be read rather
              than to be survived, and kept as short as the subject allows.
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
            <Eyebrow tone="signal">What these terms cover</Eyebrow>
            <p className="mt-3 text-[1rem] leading-[1.65] text-[var(--fg)]">
              <strong>These terms govern your use of the factorfox.com website.</strong> They apply to
              reading these pages, submitting the demonstration form and any other use of the site.
            </p>
            <p className="mt-4 text-[1rem] leading-[1.65] text-[var(--fg-muted)]">
              They do <strong>not</strong> govern use of the FactorFox platform. Access to the platform is
              provided under a separate written agreement between {SITE.legalName} and the customer
              institution, and where anything in these website terms conflicts with that agreement, the
              agreement prevails for platform use. How we handle personal information is described in our{" "}
              <InlineLink href="/legal/privacy">privacy policy</InlineLink>, which forms part of these terms.
            </p>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container width="narrow">
          <div className="space-y-14">
            <Clause n="1" title="Agreement to these terms">
              <p>
                By using this website you accept these terms. If you do not accept them, please do not use
                the site. If you are using it on behalf of an organisation, you confirm you are authorised to
                accept these terms for that organisation, and references to you include it.
              </p>
              <p>
                This site is intended for people acting in a business capacity on behalf of financial
                institutions and their advisers. It is not intended for consumers and nothing on it is an
                offer of credit to anyone.
              </p>
            </Clause>

            <Clause n="2" title="Acceptable use">
              <p>You may read, print and share pages from this site for your own business purposes. You may not:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>use the site for any unlawful purpose, or in a way that breaches any applicable law or regulation;</li>
                <li>attempt to gain access to any part of the site, any server, or any system or network connected to it, that you are not authorised to access;</li>
                <li>probe, scan or test the vulnerability of the site, or breach or circumvent any security or authentication measure;</li>
                <li>interfere with the site or impose an unreasonable load on it, including by denial of service activity or by automated requests at a rate a person could not generate;</li>
                <li>scrape, harvest or systematically extract content from the site to build or train a competing product or service, or to create a substitute for it;</li>
                <li>submit anything through our forms that is false, that impersonates another person, or that contains malicious code;</li>
                <li>submit confidential information belonging to a third party, including information about your own clients or debtors, which our forms are not designed to receive;</li>
                <li>remove, obscure or alter any proprietary notice on the site.</li>
              </ul>
              <p>
                If you find a security issue on this site, please tell us rather than exploiting it. Write to
                us at the address in section 12 and we will respond.
              </p>
            </Clause>

            <Clause n="3" title="Intellectual property">
              <p>
                The site and everything on it, including text, page structure, design, graphics, logos,
                typefaces as arranged here, illustrations, code and the selection and arrangement of all of
                it, is owned by {SITE.legalName} or licensed to us, and is protected by copyright, trade mark
                and other intellectual property law.
              </p>
              <p>
                We grant you a limited, revocable, non exclusive and non transferable right to access and use
                the site for your own internal business purposes. Nothing here transfers ownership of
                anything or grants any right to use our name, logo or trade marks without our prior written
                permission.
              </p>
              <p>
                You may quote short extracts from our writing with attribution and a link to the page quoted.
                You may not reproduce a substantial part of any page, republish our material as your own, or
                use it as source material for a competing publication or product.
              </p>
              <p>
                Anything you send us through this site, including a message in the demonstration form or
                feedback about the product, may be used by us to respond to you and to improve what we build,
                without obligation or payment. Do not send us anything you are not free to share.
              </p>
            </Clause>

            <Clause n="4" title="No warranty for site content">
              <p>
                The content of this site is provided for general information about our products and about
                the practice of receivables finance. It is not advice. It is not legal, accounting, tax,
                regulatory or credit advice, and it must not be relied on as a substitute for advice from a
                qualified professional who knows your circumstances.
              </p>
              <p>
                We write carefully and we hold ourselves to a published standard about claims and sourcing.
                We still do not warrant that the site is accurate, complete, current or uninterrupted.
                Descriptions of the platform and its capabilities are general descriptions of what the
                software does. They are not a specification, and they do not vary or add to any warranty
                given in a written agreement for use of the platform. Where a capability is described as
                planned or as being in controlled release, that word is doing real work and should be read
                as written.
              </p>
              <p>
                To the fullest extent permitted by law, the site is provided as it is and as available, and
                we exclude all warranties, conditions and representations that would otherwise be implied by
                law, including any implied warranty of merchantability, fitness for a particular purpose and
                non infringement.
              </p>
            </Clause>

            <Clause n="5" title="Availability of the site">
              <p>
                We may change, suspend or withdraw all or any part of this site at any time without notice.
                We do not guarantee that it will always be available or that access will be uninterrupted,
                and we are not liable to you if it is not.
              </p>
              <p>
                We may also restrict access to some parts of the site, or to the whole of it, to users who
                have registered with us.
              </p>
            </Clause>

            <Clause n="6" title="Limitation of liability">
              <p>
                Nothing in these terms limits or excludes our liability for death or personal injury caused
                by our negligence, for fraud or fraudulent misrepresentation, or for anything else that
                cannot lawfully be limited or excluded. If you are a consumer, you have statutory rights that
                these terms do not affect.
              </p>
              <p>
                Subject to that, and to the fullest extent permitted by law, we are not liable to you for any
                loss of profit, loss of revenue, loss of business, loss of anticipated saving, loss of
                goodwill, loss or corruption of data, or for any indirect or consequential loss, arising out
                of or in connection with your use of this site or your reliance on anything published on it.
              </p>
              <p>
                Our total aggregate liability to you arising out of or in connection with your use of this
                site, whether in contract, tort including negligence, statute or otherwise, is limited to the
                greater of the amount you have paid us for access to this site, which is normally nothing,
                and one hundred United States dollars.
              </p>
              <p>
                This section does not apply to any liability under a written agreement for use of the
                FactorFox platform, which contains its own liability provisions and is not varied by this
                page.
              </p>
            </Clause>

            <Clause n="7" title="Links to third party sites">
              <p>
                Where this site links to a website or resource operated by someone else, the link is provided
                for information only. We do not control those sites, we do not endorse them, and we are not
                responsible for their content, their availability, their security or their handling of your
                information.
              </p>
              <p>
                Following an external link takes you outside our control and outside this policy set. Read
                the terms and privacy notice of any site you go on to use. Our scheduling and sign in
                destinations are operated within environments we or our providers control, and are still
                subject to the terms of those providers.
              </p>
              <p>
                You may link to our home page or to any page on this site, provided you do so in a way that
                is fair and lawful, that does not damage our reputation or take advantage of it, and that
                does not suggest an association, approval or endorsement that does not exist. You may not
                frame our pages on another site or present our content as though it were someone else&rsquo;s.
              </p>
            </Clause>

            <Clause n="8" title="Changes to these terms">
              <p>
                We may amend these terms from time to time. The date at the top of this page shows when they
                were last changed, and the version in force is the one published here when you use the site.
                Where a change is material we will make that clear rather than leaving you to compare
                versions.
              </p>
              <p>
                Continuing to use the site after a change takes effect means you accept the amended terms.
              </p>
            </Clause>

            <Clause n="9" title="Suspension and termination">
              <p>
                We may withdraw your right to use this site immediately if you breach these terms. Where we
                do, you must stop using the site, and the sections that by their nature should survive,
                including intellectual property, limitation of liability and governing law, continue to
                apply.
              </p>
            </Clause>

            <Clause n="10" title="Governing law and jurisdiction">
              <div className="border border-dashed border-[var(--line-strong)] bg-[var(--bg-sunken)] p-5">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--signal)]">
                  Placeholder for counsel
                </p>
                <p className="mt-3 text-[1rem] leading-[1.65] text-[var(--fg)]">
                  These terms, and any dispute or claim arising out of or in connection with them or their
                  subject matter, are governed by the laws of{" "}
                  <strong>[governing law to be confirmed by counsel]</strong>, without regard to its conflict
                  of law rules. The courts of{" "}
                  <strong>[exclusive jurisdiction to be confirmed by counsel]</strong> have exclusive
                  jurisdiction to settle any such dispute or claim.
                </p>
                <p className="mt-3 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
                  This clause is deliberately unfinished and must be completed before publication. If you are
                  reading this on a live site, tell us and we will fix it.
                </p>
              </div>
              <p>
                If you are a consumer resident in a jurisdiction whose law gives you the protection of
                mandatory local rules, nothing in this section deprives you of that protection.
              </p>
            </Clause>

            <Clause n="11" title="General">
              <p>
                These terms, together with the privacy policy, are the entire agreement between you and us
                about your use of this site. If any provision is found to be unenforceable, the rest
                continues to apply. Our failure to enforce a provision is not a waiver of it.
              </p>
              <p>
                You may not assign or transfer your rights under these terms. We may assign ours to an
                affiliate or in connection with a transfer of our business.
              </p>
            </Clause>

            <Clause n="12" title="Contact">
              <p>
                Questions about these terms, notices under them, and reports of anything wrong with this
                site should go to{" "}
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="text-[var(--accent)] underline underline-offset-4 hover:no-underline"
                >
                  {SITE.contactEmail}
                </a>
                . The site is operated by {SITE.legalName}, whose registered details and notice address are
                published here on publication of the reviewed version of these terms.
              </p>
            </Clause>
          </div>

          <p className="mt-16 border-t border-[var(--line)] pt-7 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">
            {SITE.legalName} &middot; Terms of use &middot; Last updated {UPDATED} &middot;{" "}
            <Link href="/legal/privacy" className="hover:text-[var(--fg)]">
              Privacy policy
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

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-[var(--accent)] underline underline-offset-4 hover:no-underline">
      {children}
    </Link>
  );
}
