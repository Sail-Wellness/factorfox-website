import { ArrowRight } from 'lucide-react'
import { SectionWrapper } from '@/components/SectionWrapper'
import { AnimatedSection } from '@/components/AnimatedSection'
import { BOOKING_URL } from '@/lib/booking'

function CapitalPartnersCta() {
  return (
    <SectionWrapper className="bg-[var(--set1-bg)]">
      <AnimatedSection className="mx-auto max-w-[1100px]">
        {/* Fixed dark-navy band — the export keeps this dark in both themes. */}
        <div className="flex flex-wrap items-center gap-10 rounded-[24px] bg-[#0a0f19] p-10 md:p-12">
          <div className="min-w-[300px] flex-1">
            <div
              className="text-eyebrow text-primary/85"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              For capital partners
            </div>
            <p className="text-body-lg mt-3.5 text-slate-300">
              The same glass box, pointed up: FactorFox Capital offers institutions
              asset-backed, downside-protected exposure to a granular pool of freight
              receivables, with loan-level visibility, lockbox cash control, and a
              lender-held kill switch.
            </p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-7 py-4 font-bold text-white transition-colors hover:bg-primary/90"
          >
            Get in touch
            <ArrowRight className="size-4" />
          </a>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  )
}

export { CapitalPartnersCta }
