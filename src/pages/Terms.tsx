import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { LegalHero } from '@/components/legal/LegalHero'
import { LegalLayout } from '@/components/legal/LegalLayout'
import { LegalSection } from '@/components/legal/LegalSection'
import { LegalCallout } from '@/components/legal/LegalCallout'
import { LegalDataTable } from '@/components/legal/LegalDataTable'
import { LegalCta } from '@/components/legal/LegalCta'

const tocItems = [
  { id: 'agreement', num: '01', label: 'Agreement to terms' },
  { id: 'eligibility', num: '02', label: 'Membership eligibility' },
  { id: 'fees', num: '03', label: 'Fees & services' },
  { id: 'licenses', num: '04', label: 'User licenses' },
  { id: 'payments', num: '05', label: 'Payments & guarantee' },
  { id: 'identity', num: '06', label: 'Identity verification' },
  { id: 'your-info', num: '07', label: 'Your Information' },
  { id: 'retention', num: '08', label: 'Data retention' },
  { id: 'restricted', num: '09', label: 'Restricted activities' },
  { id: 'license', num: '10', label: 'License & access' },
  { id: 'breach', num: '11', label: 'Breach' },
  { id: 'privacy', num: '12', label: 'Privacy' },
  { id: 'warranty', num: '13', label: 'No warranty & liability' },
  { id: 'indemnity', num: '14', label: 'Indemnity & legal' },
  { id: 'notices', num: '15', label: 'Notices' },
  { id: 'disputes', num: '16', label: 'Resolution of disputes' },
  { id: 'general', num: '17', label: 'General' },
]

function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service — FactorFox"
        description="Terms and conditions applicable to your use of FactorFox services available under factorfox.com."
        path="/terms"
      />

      <LegalHero
        eyebrow="Legal · Terms"
        title="Terms of Service."
        lede="This User Agreement describes the terms and conditions applicable to your use of our FactorFox services available under the domain and sub-domains of factorfox.com and the general principles for the websites of our subsidiaries and international affiliates. If you do not agree to be bound by these terms, do not use or access our services."
        meta={[
          { label: 'Last updated', value: 'Apr 12, 2026' },
          { label: 'Effective', value: 'Feb 1, 2014' },
          { label: 'Counterparty', value: 'FactorFox Software, LLC' },
          { label: 'Read time', value: '~14 min' },
        ]}
      />

      <LegalLayout tocItems={tocItems}>
        <LegalSection id="agreement" num="01" title="Agreement to terms">
          <p className="text-body-lg text-muted-foreground">
            If you reside outside of the United States, the party with whom you are contracting is FactorFox Software, LLC. This Agreement describes the terms and conditions applicable to your use of our FactorFox services available under the domain and sub-domains of factorfox.com and the general principles for the websites of our subsidiaries and international affiliates.
          </p>
          <p>
            You must read, agree with and accept all of the terms and conditions contained in this User Agreement and the Privacy Policy, which include those terms and conditions expressly set out below and those incorporated by reference, before you may utilize FactorFox software. We strongly recommend that, as you read this User Agreement, you also access and read the information contained in the other pages and websites referred to in this document, as they may contain further terms and conditions that apply to you as a FactorFox user. By accepting this User Agreement, you also agree that your use of other FactorFox websites will be governed by the User Agreement and Privacy Policy posted on those websites.
          </p>
          <LegalCallout variant="info" title="Amendments to this Agreement">
            <p>
              We may amend this Agreement at any time by posting the amended terms on the Site. Except as stated below, all amended terms shall automatically be effective 30 days after they are initially posted. We will notify you in accordance with your Notification Preferences. This Agreement may not otherwise be amended except in writing signed by FactorFox Software, LLC. This Agreement is effective upon acceptance in registration for new users, and is otherwise effective on February 1, 2014 for all users.
            </p>
          </LegalCallout>
        </LegalSection>

        <LegalSection id="eligibility" num="02" title="Membership eligibility">
          <p>
            Our services are available only to, and may only be used by, individuals who can form legally binding contracts under applicable law. Without limiting the foregoing, our services are not available to children (persons under the age of 18) or to temporarily or indefinitely suspended FactorFox users. If you are under the age of 18, you may use this service only in conjunction with, and under the supervision of, your parents or guardians. If you do not qualify, please do not use our Site.
          </p>
          <p>
            Further, no FactorFox account (including feedback) or User ID may be transferred or sold to another party. If you are registering as a business entity, you represent that you have the authority to bind the entity to this Agreement.
          </p>
        </LegalSection>

        <LegalSection id="fees" num="03" title="Fees & services">
          <p>
            We charge fees for using the FactorFox software on our site. Our Fees and Credits Policy is available and is incorporated into this Agreement by reference. We may change our Fees and Credits Policy and the fees for our services from time to time. Our changes to the policy are effective after we provide you with at least fourteen (14) days&rsquo; notice of the changes by posting the changes on the Site.
          </p>
          <p>
            However, we may choose to temporarily change our Fees and Credits Policy and the fees for our services for promotional events (for example, free 30 day trials) and such changes are effective when we post the temporary promotional event on the Site. We may in our sole discretion change some or all of our services at any time. In the event we introduce a new service, the fees for that service are effective at the launch of the service.
          </p>
          <p>
            Unless otherwise stated, all fees are quoted in U.S. Dollars. You are responsible for paying all fees associated with using our service, software and the Site and all applicable taxes.
          </p>
        </LegalSection>

        <LegalSection id="licenses" num="04" title="One-, five- or ten-user licenses">
          <p>
            Standard user licenses are for either one user, or up to five or up to ten users, and priced accordingly. Those companies with two to five users will ordinarily utilize the five user license, and those with six to ten users will ordinarily utilize the ten user license. For subscribers with more than ten users, pricing arrangements will be made on a case-by-case basis.
          </p>
          <LegalDataTable
            headers={['License', 'Factor module users', 'Other modules']}
            rows={[
              [
                { main: 'One user', sub: 'Solo' },
                { main: 'One primary user only' },
                { main: 'Unlimited in Clients, Customers, Consultants, Lenders, Accountant' },
              ],
              [
                { main: 'Five users', sub: 'Small team' },
                { main: 'One primary plus up to four staff' },
                { main: 'Unlimited in Clients, Customers, Consultants, Lenders, Accountant' },
              ],
              [
                { main: 'Ten users', sub: 'Larger team' },
                { main: 'One primary plus up to nine staff' },
                { main: 'Unlimited in Clients, Customers, Consultants, Lenders, Accountant' },
              ],
              [
                { main: '10+ users', sub: 'Custom' },
                { main: 'Pricing arranged case-by-case' },
                { main: 'Contact us to scope' },
              ],
            ]}
          />
          <p>
            Users are defined as staff, employees, companies or others appointed by the FactorFox subscriber company to create, edit, and/or view entries into the Factors module of their database. A user will be either the primary user of the subscription, or additional parties entered on the Setup-Company-Staff tab page in the Factors module.
          </p>
          <p>
            Parties entering, editing or viewing data only in the Clients, Customers, Consultants, Lenders, or Accountant modules are not considered Factor module users, and a subscriber may have any number of people entered as one of these designations.
          </p>
          <p>
            When a subscriber is found to have more users than allowed in the license for which they are subscribing, we reserve the right to (a) increase their subscription payments to reflect the number of users, (b) deactivate their database until the subscription charges properly reflect the number of users and are being paid, and/or (c) terminate their subscription if in our sole judgment the subscriber&rsquo;s abuse of their license justifies this action.
          </p>
        </LegalSection>

        <LegalSection id="payments" num="05" title="Payments & guarantee">
          <p>
            At the conclusion of a free trial period, the annual paid subscription begins. Subscribers choose to make recurring monthly, quarterly, semiannual, or annual payments for their subscriptions. If at any time payments received are declined by the subscriber&rsquo;s credit card company or bank, we reserve the right to temporarily deactivate access to a subscriber&rsquo;s database until the full payment due is received.
          </p>
          <p>
            Payments are due at the beginning of each billing period. At any time during the paid subscription, a subscriber may cancel the subscription without penalty. This cancellation results in (1) removal of access to the user&rsquo;s database by all users from the company, and its clients, consultants, and others with database access; and (2) removal of future charges for payment periods following the cancellation.
          </p>
          <p>
            No charges will be made for pending billings; the previous payment made is the last one. However, no refund will be made for unused time remaining in the current payment cycle. A subscriber is guaranteed to be charged only through the current payment period chosen by the subscriber at the beginning of the paid subscription.
          </p>
          <p>
            If a subscriber later chooses to reactivate an inactive account, a normal monthly, quarterly, semi-annual, or annual charge will be made to cover the new first period of use, and will thereafter recur. Please see Data Retention below for more information on account reactivation.
          </p>
        </LegalSection>

        <LegalSection id="identity" num="06" title="Identity verification">
          <p>
            We use many techniques to verify the accuracy of the information our users provide us when they register on the Site. However, because user verification on the Internet is difficult, FactorFox cannot and does not confirm each user&rsquo;s purported identity.
          </p>
        </LegalSection>

        <LegalSection id="your-info" num="07" title="Your Information">
          <p>
            Your Information is defined as any information you provide to us or other users in the registration process, in any public message area (including the discussion group or feedback area) or through any email feature. You are solely responsible for Your Information, and we act as a passive conduit for your online distribution and publication of Your Information.
          </p>
        </LegalSection>

        <LegalSection id="retention" num="08" title="Data retention">
          <p>
            If your database is placed on Inactive status, either at your request or due to nonpayment or other breach of this contract, all data held therein shall be retained on our servers for a period of 12 months. After 12 months on Inactive status, all your data will be purged, after which time it will no longer be accessible.
          </p>
          <p>
            If you wish to reactivate your database during this 12 month period, your data will remain intact and a new subscription can begin with the old data available. However, once data is purged it cannot be retrieved, even if you wish to renew your subscription.
          </p>
        </LegalSection>

        <LegalSection id="restricted" num="09" title="Restricted activities">
          <p>Your Information (or any items listed) and your activities on the Site shall not:</p>
          <ul>
            <li><strong>(a) Be false, inaccurate or misleading.</strong> Information must be truthful and verifiable.</li>
            <li><strong>(b) Be fraudulent.</strong> No fraudulent listings, claims, or activity.</li>
            <li><strong>(c) Infringe rights of others.</strong> No third party&rsquo;s copyright, patent, trademark, trade secret or other proprietary rights or rights of publicity or privacy.</li>
            <li><strong>(d) Violate law.</strong> Including consumer protection, unfair competition, antidiscrimination or false advertising.</li>
            <li><strong>(e) Be defamatory or harassing.</strong> No trade libel, unlawful threats, or unlawful harassment.</li>
            <li><strong>(f) Be obscene or harmful to minors.</strong> No child pornography or otherwise adult-in-nature content.</li>
            <li><strong>(g) Contain malicious code.</strong> No viruses, Trojan horses, worms, time bombs, cancel bots, easter eggs or other programming routines that may damage, interfere with, intercept or expropriate any system, data or personal information.</li>
            <li><strong>(h) Create liability for us.</strong> Or cause us to lose (in whole or in part) the services of our ISPs or other suppliers.</li>
          </ul>
        </LegalSection>

        <LegalSection id="license" num="10" title="License & access">
          <h3>License</h3>
          <p>
            Solely to enable FactorFox to use the information you supply us, so that we are not violating any rights you might have in that information, you agree to grant us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, sub-licensable (through multiple tiers) right to exercise the copyright, publicity, and database rights (but no other rights) you have in Your Information, in any media now known or not currently known, with respect to Your Information. FactorFox will only use Your Information in accordance with our Privacy Policy.
          </p>
          <h3>Access and interference</h3>
          <p>You agree that you will not use any robot, spider, scraper or other automated means to access the Site for any purpose without our express written permission. Additionally, you agree that you will not:</p>
          <ul>
            <li><strong>(i) Overload our infrastructure.</strong> Take any action that imposes, or may impose in our sole discretion, an unreasonable or disproportionately large load on our infrastructure.</li>
            <li><strong>(ii) Copy our content.</strong> Reproduce, modify, create derivative works from, distribute or publicly display any content (except for Your Information) from the Site without prior expressed written permission of FactorFox Software, LLC and the appropriate third party.</li>
            <li><strong>(iii) Interfere with operations.</strong> Interfere or attempt to interfere with the proper working of the Site or any activities conducted on the Site.</li>
          </ul>
        </LegalSection>

        <LegalSection id="breach" num="11" title="Breach">
          <p>Without limiting other remedies, we may limit your activity, temporarily suspend, indefinitely suspend or terminate your membership and refuse to provide our services to you if:</p>
          <ul>
            <li><strong>(a) Breach.</strong> You breach this Agreement or the documents it incorporates by reference.</li>
            <li><strong>(b) Unverifiable information.</strong> We are unable to verify or authenticate any information you provide us.</li>
            <li><strong>(c) Risk of harm.</strong> We believe that your actions may cause financial loss or legal liability for you, our users or us.</li>
          </ul>
        </LegalSection>

        <LegalSection id="privacy" num="12" title="Privacy">
          <p>
            We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent and we only use your information as described in the{' '}
            <Link to="/privacy">Privacy Policy</Link>. We view protection of users&rsquo; privacy as a very important community principle.
          </p>
          <p>
            We understand clearly that you and your information are our most important assets. We store and process your information on computers located in the United States that are protected by physical as well as technological security devices.
          </p>
        </LegalSection>

        <LegalSection id="warranty" num="13" title="No warranty & liability limit">
          <h3>No warranty</h3>
          <p>
            WE, OUR SUBSIDIARIES, OFFICERS, DIRECTORS, EMPLOYEES AND OUR SUPPLIERS PROVIDE OUR WEB SITE AND SERVICES WITHOUT ANY WARRANTY OR CONDITION, EXPRESS, IMPLIED OR STATUTORY. WE, OUR SUBSIDIARIES, OFFICERS, DIRECTORS, EMPLOYEES AND OUR SUPPLIERS SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
          </p>
          <p>
            Some states do not allow the disclaimer of implied warranties, so the foregoing disclaimer may not apply to you. This warranty gives you specific legal rights and you may also have other legal rights that vary from state to state.
          </p>
          <h3>Liability limit</h3>
          <p>
            IN NO EVENT SHALL WE, OUR SUBSIDIARIES, OFFICERS, DIRECTORS, EMPLOYEES OR OUR SUPPLIERS BE LIABLE FOR LOST PROFITS OR ANY SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH OUR SITE, OUR SERVICES OR THIS AGREEMENT (HOWEVER ARISING, INCLUDING NEGLIGENCE).
          </p>
          <p>
            OUR LIABILITY, AND THE LIABILITY OF OUR SUBSIDIARIES, OFFICERS, DIRECTORS, EMPLOYEES, AND SUPPLIERS, TO YOU OR ANY THIRD PARTIES IN ANY CIRCUMSTANCE IS LIMITED TO THE AMOUNT OF FEES YOU PAY TO US IN THE 12 MONTHS PRIOR TO THE ACTION GIVING RISE TO LIABILITY. Some States do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you.
          </p>
        </LegalSection>

        <LegalSection id="indemnity" num="14" title="Indemnity, legal compliance & agency">
          <h3>Indemnity</h3>
          <p>
            You agree to indemnify and hold us and (as applicable) our parent, subsidiaries, affiliates, officers, directors, agents, and employees, harmless from any claim or demand, including reasonable attorneys&rsquo; fees, made by any third party due to or arising out of your breach of this Agreement or the documents it incorporates by reference, or your violation of any law or the rights of a third party.
          </p>
          <h3>Legal compliance</h3>
          <p>
            You shall comply with all applicable domestic and international laws, statutes, ordinances and regulations regarding your use of our service and your bidding on, listing, purchase, solicitation of offers to purchase, and sale of items.
          </p>
          <h3>No agency</h3>
          <p>
            You and FactorFox Software, LLC are independent contractors, and no agency, partnership, joint venture, employee-employer or franchiser-franchisee relationship is intended or created by this Agreement.
          </p>
        </LegalSection>

        <LegalSection id="notices" num="15" title="Notices">
          <p>
            Except as explicitly stated otherwise, any notices shall be given by postal mail to FactorFox Software, LLC, PO Box 25591, Federal Way, WA 98093-2591 (in the case of FactorFox) or to the email address you provide us during the registration process (in your case).
          </p>
          <p>
            Notice shall be deemed given 24 hours after email is sent, unless the sending party is notified that the email address is invalid. Alternatively, we may give you notice by certified mail, postage prepaid and return receipt requested, to the address provided during the registration process. In such case, notice shall be deemed given 3 days after the date of mailing.
          </p>
        </LegalSection>

        <LegalSection id="disputes" num="16" title="Resolution of disputes">
          <p className="text-body-lg text-muted-foreground">
            In the event a dispute arises between you and FactorFox Software, LLC, our goal is to provide you with a neutral and cost effective means of resolving the dispute quickly.
          </p>
          <p>
            You and FactorFox Software, LLC agree that any claim or controversy at law or equity that arises out of this Agreement or our services shall be resolved in accordance with one of the subsections below or as otherwise mutually agreed upon in writing by the parties. Before resorting to these alternatives, we strongly encourage you to first contact us directly to seek a resolution and we will consider reasonable requests to resolve the dispute through alternative dispute resolution procedures, such as mediation, as an alternative to litigation.
          </p>
          <h3>Binding arbitration</h3>
          <p>
            For any Claim (excluding Claims for injunctive or other equitable relief) where the total amount of the award sought is less than $10,000, you or FactorFox Software, LLC may elect to resolve the dispute through binding arbitration conducted by telephone, on-line and/or based solely upon written submissions where no in-person appearance is required. The arbitration shall be administered by the American Arbitration Association in accordance with their applicable rules, or any other established ADR provider mutually agreed upon by the parties. Any judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof.
          </p>
          <h3>Court</h3>
          <p>
            Alternatively, any Claim may be adjudicated by a court of competent jurisdiction located in Dade County, Florida. You and FactorFox Software, LLC agree to submit to the personal jurisdiction of the courts located within Dade County, FL.
          </p>
          <h3>Alternative dispute resolution</h3>
          <p>
            Alternatively, FactorFox Software, LLC will consider use of other alternative forms of dispute resolution, such as binding arbitration to be held in Miami, FL or another location mutually agreed upon by the parties.
          </p>
          <p>
            All Claims (excluding requests for injunctive or equitable relief) between the parties must be resolved using the dispute resolution mechanism that is selected in accordance with this Section by the first party to file a Claim. Should either party file an action contrary to this Alternative Dispute Resolution, the other party may recover attorneys&rsquo; fees and costs up to $1,000, provided that the party seeking the award has notified the other party in writing of the improperly filed Claim, and the other party has failed to withdraw the Claim.
          </p>
        </LegalSection>

        <LegalSection id="general" num="17" title="General">
          <p>
            This Agreement shall be governed in all respects by the laws of the State of Florida as such laws are applied to agreements entered into and to be performed entirely within Florida between Florida residents.
          </p>
          <LegalCallout variant="warn" title="Service availability">
            <p>
              WE DO NOT GUARANTEE CONTINUOUS, UNINTERRUPTED OR SECURE ACCESS TO OUR SERVICES, AND OPERATION OF THE SITE MAY BE INTERFERED WITH BY NUMEROUS FACTORS OUTSIDE OUR CONTROL.
            </p>
          </LegalCallout>
          <p>
            If any provision of this Agreement is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced. You agree that this Agreement and all incorporated agreements may be automatically assigned by FactorFox Software, LLC, in our sole discretion.
          </p>
          <p>
            Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. Our failure to act with respect to a breach by you or others does not waive our right to act with respect to subsequent or similar breaches. This Agreement sets forth the entire understanding and agreement between us with respect to the subject matter hereof.
          </p>
        </LegalSection>
      </LegalLayout>

      <LegalCta
        heading="Ready to get started?"
        description="Reach our team to ask a question, scope a custom license, or follow up on anything in this Agreement."
        actions={[{ label: 'support@factorfox.com', href: 'mailto:support@factorfox.com' }]}
      />
    </>
  )
}

export { Terms }
