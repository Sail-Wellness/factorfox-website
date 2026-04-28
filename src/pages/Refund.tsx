import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { LegalHero } from '@/components/legal/LegalHero'
import { LegalSection } from '@/components/legal/LegalSection'
import { LegalCallout } from '@/components/legal/LegalCallout'
import { LegalCta } from '@/components/legal/LegalCta'
import { QuickRefStrip } from '@/components/legal/QuickRefStrip'

function Refund() {
  return (
    <>
      <SEO
        title="Refund Policy — FactorFox"
        description="FactorFox refund and cancellation policy. Learn how to cancel your subscription and what to expect."
        path="/refund"
      />

      <LegalHero
        eyebrow="Legal · Refunds"
        title="Refund Policy."
        lede="We hope you love using FactorFox. If for any reason you wish to cancel, here's exactly how it works — no fine print, no runaround. One phone call and we'll handle the rest."
        contacts={[
          { type: 'phone', label: 'Call support', value: '1-800-616-3897', href: 'tel:18006163897' },
          { type: 'email', label: 'Email support', value: 'support@factorfox.com', href: 'mailto:support@factorfox.com' },
        ]}
        meta={[
          { label: 'Last updated', value: 'Apr 12, 2026' },
          { label: 'Effective', value: 'Feb 1, 2014' },
          { label: 'Cancellation', value: 'By phone' },
          { label: 'Read time', value: '~2 min' },
        ]}
      />

      <QuickRefStrip
        items={[
          { num: '01', label: 'Cancel by phone or email', value: 'Phone · Email' },
          { num: '02', label: 'Termination window', value: '7 business days' },
          { num: '03', label: 'Future payments', value: 'Stopped immediately' },
          { num: '04', label: 'Pro-rated refunds', value: 'Not offered', muted: true },
        ]}
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <LegalSection id="cancel" num="01" title="How to cancel">
          <p>
            We hope that you love using FactorFox.com (the &ldquo;Site&rdquo;), provided by FactorFox Software LLC (&ldquo;we&rdquo; or &ldquo;us&rdquo;). If for any reason you wish to cancel, please contact us through our customer support number at{' '}
            <a href="tel:18006163897">1-800-616-3897</a> or by email at{' '}
            <a href="mailto:support@factorfox.com">support@factorfox.com</a>.
          </p>
          <p>
            After we receive your request to cancel, we will terminate your account and you will not be responsible for any future payments.
          </p>
        </LegalSection>

        <LegalSection id="refunds" num="02" title="No other refunds">
          <p>
            We&rsquo;re sorry, but no other refunds will be offered or made available, even if you were not using the Site.
          </p>
          <LegalCallout variant="warn" title="No pro-rated or partial refunds">
            <p>
              Cancellation stops future charges, but any payment already made for the current billing cycle is non-refundable — including any unused time remaining in that cycle.
            </p>
          </LegalCallout>
        </LegalSection>

        <LegalSection id="processing" num="03" title="Processing time & data access">
          <p>
            Please allow seven business days for us to terminate your account. Once your account is terminated, you will not be able to access it or retrieve any data saved on the account.
          </p>
          <LegalCallout variant="info" title="Export your data first">
            <p>
              If you need a copy of anything in your account, export it before you call. Once termination is complete, the data is gone — see{' '}
              <Link to="/terms#retention">Data Retention</Link> in the User Agreement for details on how long inactive databases are kept.
            </p>
          </LegalCallout>
        </LegalSection>

        <LegalSection id="relationship" num="04" title="Relationship to other terms">
          <p>
            This Refund Policy is in addition to, and not in lieu of, our{' '}
            <Link to="/terms">User Agreement</Link>. This Refund Policy is subject to change at any time.
          </p>
        </LegalSection>
      </div>

      <LegalCta
        heading="Need to cancel?"
        description="Reach our team by phone or email and we'll terminate the account, stop future payments, and confirm the timeline."
        actions={[
          { label: 'Call 1-800-616-3897', href: 'tel:18006163897' },
          { label: 'Email support@factorfox.com', href: 'mailto:support@factorfox.com', variant: 'ghost' },
        ]}
      />
    </>
  )
}

export { Refund }
