import { SEO } from '@/components/SEO'
import { LegalHero } from '@/components/legal/LegalHero'
import { LegalLayout } from '@/components/legal/LegalLayout'
import { LegalSection } from '@/components/legal/LegalSection'
import { LegalCallout } from '@/components/legal/LegalCallout'
import { LegalDataTable } from '@/components/legal/LegalDataTable'
import { LegalCta } from '@/components/legal/LegalCta'

const tocItems = [
  { id: 'application', num: '01', label: 'Application' },
  { id: 'child', num: '02', label: 'Child privacy' },
  { id: 'collect', num: '03', label: 'Information collected' },
  { id: 'use', num: '04', label: 'Sharing & use of information' },
  { id: 'third-party', num: '05', label: 'Third party links' },
  { id: 'security', num: '06', label: 'Security' },
  { id: 'international', num: '07', label: 'International privacy practices' },
  { id: 'account', num: '08', label: 'Account information' },
  { id: 'california', num: '09', label: 'California privacy rights' },
  { id: 'transfer', num: '10', label: 'Transfer of information' },
  { id: 'retention', num: '11', label: 'Retention' },
  { id: 'gdpr', num: '12', label: 'Your rights under GDPR' },
  { id: 'contact', num: '13', label: 'Contact us' },
]

function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy — FactorFox"
        description="Learn how FactorFox collects, uses, shares and protects information about our website and mobile application users."
        path="/privacy"
      />

      <LegalHero
        eyebrow="Legal · Privacy"
        title="Privacy Policy."
        lede="Your privacy is extremely important to us at FactorFox Software, LLC. This policy explains how we collect, use, share and protect information about our website and mobile application Users — and the rights you have over that information."
        meta={[
          { label: 'Last updated', value: 'Apr 12, 2026' },
          { label: 'Effective', value: 'Apr 12, 2026' },
          { label: 'Controller', value: 'FactorFox Software, LLC' },
          { label: 'Read time', value: '~10 min' },
        ]}
      />

      <LegalLayout tocItems={tocItems}>
        <LegalSection id="application" num="01" title="Application">
          <p className="text-body-lg font-semibold text-foreground">
            FactorFox Software, LLC (&ldquo;Company,&rdquo; &ldquo;We,&rdquo; &ldquo;Us,&rdquo; or &ldquo;Our&rdquo;) collects some personal data (&ldquo;Personal Information&rdquo;) from its Users when they view, access, use or register through the Company&rsquo;s websites, mobile applications, and products and services (collectively, &ldquo;Services&rdquo;).
          </p>
          <p>
            This Privacy Policy applies to persons and businesses anywhere in the world that use our Services. By using the Services we offer, you are agreeing to be bound by this policy in respect of the information collected about you. If you do not agree to this Privacy Policy in full and without modification, then you may not access, view, use, or register for any portion of the Services.
          </p>
          <p>
            The provision of Information is contractually required based on your use of the Services. If you do not wish to provide the Information, you may not use the Services.
          </p>
          <LegalCallout variant="info" title="Updates to this policy">
            <p>
              The Company reserves the right to modify, change, or replace this Privacy Policy at any time by updating this document on the Service. You agree to be bound by the most recent version available on the Service. The date of the last modification is displayed at the top of this document.
            </p>
          </LegalCallout>
        </LegalSection>

        <LegalSection id="child" num="02" title="Child privacy">
          <p>
            Our Services are intended for users who are 18 years old or older. Furthermore, we do not knowingly market the Services to, or collect Personal Information from, children under the age of 13. If we become aware that we have inadvertently received Personal Information from a child under the age of 13, we will delete such information from our records.
          </p>
        </LegalSection>

        <LegalSection id="collect" num="03" title="Information collected">
          <p>
            Our legal basis for collecting and processing your Personal Information is (i) your explicit consent when accessing the Services and (ii) a legitimate interest for website traffic analysis and software functionality. We may collect the following Personal Information when you use the Services:
          </p>
          <LegalDataTable
            headers={['Category', 'Examples', 'Source']}
            columnWidths="1fr 1.4fr 1fr"
            rows={[
              [
                { main: 'Automatically collected', sub: 'Cookies & analytics' },
                { main: 'Cookies, log files, clear .gifs, and other analytics tools that track site usage to help us analyze and improve the Services' },
                { main: 'You or your device' },
              ],
              [
                { main: 'Registration', sub: 'Account creation' },
                { main: 'Name, email address, physical address, banking information, telephone number, content you post (including comments)' },
                { main: 'You' },
              ],
              [
                { main: 'Information you submit', sub: 'Uploads & support' },
                { main: 'User content uploaded to the Services or transmitted for customer or technical support purposes' },
                { main: 'You' },
              ],
              [
                { main: 'Client & factoring', sub: 'Operational data' },
                { main: "Information inputted about your clients' accounts and information when using the Service to provide factoring services" },
                { main: 'You' },
              ],
              [
                { main: 'Device & usage', sub: 'Telemetry' },
                { main: 'Hardware models and IDs, device type, OS version, request type and content, basic usage information, application-level events' },
                { main: 'You or your device' },
              ],
            ]}
          />
          <p>
            You may be able to disable cookies in your web browser or mobile device. However, please note that disabling cookies may prevent you from taking full advantage of the Services. For more information about the use of cookies and how to block or disable them, you may visit{' '}
            <a href="https://allaboutcookies.org" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a> or{' '}
            <a href="https://youronlinechoices.eu" target="_blank" rel="noopener noreferrer">youronlinechoices.eu</a>.
          </p>
          <p>
            We may also collect and store information locally on your device using mechanisms such as browser web storage and application data caches. We may collect information regarding application-level events and associate that with your account to provide customer service.
          </p>
        </LegalSection>

        <LegalSection id="use" num="04" title="Sharing & use of Personal Information">
          <p>We may use your Personal Information in the following ways:</p>
          <ul>
            <li><strong>Provide the Services.</strong> To provide you with all of the features and tools of the Services, including our factoring software. You may opt out of emails by following the instructions in the emails or cancelling your user account.</li>
            <li><strong>Enable collaboration.</strong> To allow you to collaborate with other Users as you request.</li>
            <li><strong>Communicate with you.</strong> To contact you about the Services or the Company or to provide customer or technical support.</li>
            <li><strong>Analyze and improve.</strong> To analyze and improve the features and performance of the Services and to analyze usage patterns.</li>
            <li><strong>Inform you of offers.</strong> To inform Users about offers from the Company.</li>
            <li><strong>Comply with law.</strong> We may disclose your Personal Information if required to do so by a request or requirement of law.</li>
          </ul>
          <LegalCallout variant="shield" title="We care about your privacy">
            <p>
              We will not sell or share your Personal Information with third parties other than as expressly provided for in this Privacy Policy.
            </p>
          </LegalCallout>
        </LegalSection>

        <LegalSection id="third-party" num="05" title="Third party links">
          <p>
            You may encounter links to third party websites, videos, pictures, and applications (&ldquo;Third Party Links&rdquo;) when using the Services. We cannot control the content on these Third Party Links and we can make no guarantees as to the protection and privacy of any information which you submit to these Third Party Links. Please exercise caution when accessing Third Party Links.
          </p>
        </LegalSection>

        <LegalSection id="security" num="06" title="Security">
          <p>
            The Company protects your Personal Information using commercially reasonable technical and administrative security measures to reduce the risks of loss, misuse, unauthorized access, disclosure and alteration. Some of the safeguards we use are:
          </p>
          <ul>
            <li><strong>Firewalls and data encryption.</strong> To protect data in transit and at rest.</li>
            <li><strong>Physical access controls.</strong> Restricted access to our data centers.</li>
            <li><strong>Information access authorization.</strong> Role-based controls over who can view what.</li>
          </ul>
          <p>
            We cannot guarantee the security of our information storage, nor can we guarantee that the information you supply will not be intercepted while being transmitted to and from us over the Internet, including, without limitation, email transmissions.
          </p>
        </LegalSection>

        <LegalSection id="international" num="07" title="International privacy practices">
          <p>
            The Company is primarily operated and managed on servers located and operated within the United States. In order to provide our products and services to you, we may send and store your Personal Information outside of the country where you reside or are located, including to the United States.
          </p>
          <p>
            Accordingly, if you reside or are located outside of the United States, your Personal Information may be transferred outside of the country where you reside or are located, including countries that may not or do not provide the same level of protection for your Personal Information. We are committed to protecting the privacy and confidentiality of Personal Information when it is transferred.
          </p>
          <p>
            If you reside or are located within the European Economic Area and such transfers occur, we take appropriate steps to provide the same level of protection for the processing carried out in any such countries as you would have within the European Economic Area to the extent feasible under applicable law. By using and accessing our Services, Users who reside or are located in countries outside of the United States agree and consent to the transfer to and processing of Personal Information on servers located outside of the country where they reside, and that the protection of such information may be different than required under the laws of their residence or location.
          </p>
        </LegalSection>

        <LegalSection id="account" num="08" title="Account information">
          <p>You may correct your account information at any time by logging into your online account.</p>
          <p>
            We will comply with any User&rsquo;s requests regarding access, correction, and/or deletion of the Personal Information we store in accordance with applicable law, including the EU General Data Protection Regulation (GDPR).
          </p>
        </LegalSection>

        <LegalSection id="california" num="09" title="Your California privacy rights">
          <p>
            California Civil Code Section 1798.83 entitles California customers to request information concerning whether a business has disclosed Personal Information to any third parties for their direct marketing purposes. California residents may request and obtain from us once a year, free of charge, information about the personal information, if any, we disclosed to third parties for direct marketing purposes within the immediately preceding calendar year.
          </p>
          <p>
            If applicable, this information would include a list of the categories of personal information that was shared and the names and addresses of all third parties with which we shared information within the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request as described in the Contact section.
          </p>
        </LegalSection>

        <LegalSection id="transfer" num="10" title="Transfer of Personal Information">
          <p>
            We have offices in the United States and your Personal Information will be processed in the United States. The hosting facilities for your Personal Information are in the United States. Transfers of Personal Information to the United States will be protected by internal Company privacy protection policies which may be requested from the Company.
          </p>
        </LegalSection>

        <LegalSection id="retention" num="11" title="Retention of Personal Information">
          <p>
            Personal Information that we process shall not be kept for longer than is necessary for the relevant purpose. We will retain your Personal Information as follows:
          </p>
          <ul>
            <li><strong>Standard retention.</strong> Personal Information will be retained for a minimum period of one day following receipt and for a maximum period of (i) the time you are a User with an account or (ii) ten years, whichever is longer.</li>
            <li><strong>Legal obligations.</strong> Notwithstanding the above, we may retain your Personal Information when such retention is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.</li>
          </ul>
          <p>
            You may contact us (as described in the Contact section) to request any correction, deletion, or copies of your Personal Information.
          </p>
        </LegalSection>

        <LegalSection id="gdpr" num="12" title="Your rights under GDPR">
          <p>Your principal rights under the EU General Data Protection Regulation (GDPR) are as follows:</p>
          <ul>
            <li><strong>Right of Access.</strong> You have the right to be informed of, and request access to, the Personal Information we process about you.</li>
            <li><strong>Right to Rectification.</strong> You have the right to request that we amend or update your personal data where it is inaccurate or incomplete.</li>
            <li><strong>Right to Erasure.</strong> You have the right to have the Company delete your Personal Information.</li>
            <li><strong>Right to Restrict.</strong> You have the right to request that we temporarily or permanently stop processing your Personal Information.</li>
            <li><strong>Right to Object.</strong> You have the right to object to us processing your Personal Information on grounds relating to your particular situation or for direct marketing purposes.</li>
            <li><strong>Right to Data Portability.</strong> You have the right to request a copy of your Personal Information in electronic format and the right to transmit that personal data for use in another party&rsquo;s service.</li>
            <li><strong>Right not to be Subject to Automated Decision Making.</strong> You have the right to not be subject to a decision based solely on automated decision making, including profiling, where the decision would have a legal effect on you or produce a similarly significant effect.</li>
          </ul>
        </LegalSection>

        <LegalSection id="contact" num="13" title="Contact us">
          <p>
            The Personal Information we collect and process is controlled by FactorFox Software, LLC, a Washington state limited liability company in the United States. You may contact us to make a request under this Privacy Policy:
          </p>
          <ul>
            <li><strong>Email</strong> <a href="mailto:support@factorfox.com">support@factorfox.com</a></li>
            <li><strong>Entity</strong> FactorFox Software, LLC — a Washington state limited liability company</li>
          </ul>
        </LegalSection>
      </LegalLayout>

      <LegalCta
        heading="Questions about your data?"
        description="Reach our team directly to make a request, ask a question, or follow up on anything in this policy."
        actions={[{ label: 'support@factorfox.com', href: 'mailto:support@factorfox.com' }]}
      />
    </>
  )
}

export { Privacy }
