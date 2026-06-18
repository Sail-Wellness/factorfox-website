import { SectionWrapper } from '@/components/SectionWrapper'
import { AnimatedSection } from '@/components/AnimatedSection'
import { CapitalHeading } from './CapitalHeading'

const stats = [
  { value: '7.5M', label: 'Invoices funded since 2010' },
  { value: '~89%', label: 'Average realized advance' },
  { value: '0.3%', label: 'Write-offs across the corpus' },
  { value: '25 yrs', label: 'Platform history' },
]

function CapitalTrackRecord() {
  return (
    <SectionWrapper id="track" className="scroll-mt-24 bg-[var(--set1-bg)]">
      <CapitalHeading
        size="display"
        eyebrow="Track record"
        title="Verified, not estimated."
        intro="Realized figures from the platform, the system of record across the FactorFox network, read straight from the data."
      />

      <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map(({ value, label }, i) => (
          <AnimatedSection key={label} delay={i * 0.06} className="h-full">
            <div className="h-full rounded-[20px] border border-[var(--set1-stroke)] bg-[var(--set1-box)] px-7 py-8">
              <div
                className="text-[clamp(40px,4.6vw,58px)] font-extrabold leading-none tracking-[-0.03em] text-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {value}
              </div>
              <div className="text-body text-muted-foreground mt-3">{label}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <p className="mx-auto mt-7 max-w-[880px] text-center font-mono text-[12.5px] leading-[1.7] text-muted-foreground">
        Born-audited and hash-chained, the same machine that originates, funds, and
        reconciles the book today. These are the corpus, not projections.
      </p>
    </SectionWrapper>
  )
}

export { CapitalTrackRecord }
