import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

const STATS = [
  { value: '2002', label: 'Founded' },
  { value: '$40B+', label: 'Funded' },
  { value: '2k+', label: 'Operators' },
  { value: '99.9%', label: 'Uptime' },
]

function AboutHeritage() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-[var(--set2-bg)]" innerClassName="relative">

        <AnimatedSection delay={0} className="flex flex-col items-center text-center">
          {/* Tag */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 dark:border-primary/30 bg-primary/5 dark:bg-primary/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
              Heritage of Performance
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-section-xl text-foreground mb-6">
            Founded by Factors
          </h2>

          {/* Subtitle */}
          <p className="text-body-lg text-muted-foreground max-w-[640px]">
            Founded in 2002, FactorFox has been the silent engine behind
            billions in financing. We are moving beyond legacy systems to define
            the next quarter-century of working capital.
          </p>
        </AnimatedSection>

        {/* Stats grid */}
        <AnimatedSection delay={0.12} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-[var(--set2-stroke)] bg-[var(--set2-box)] py-10 px-6 flex flex-col items-center text-center"
              >
                <span className="text-[42px] md:text-[48px] font-black text-foreground leading-none mb-3">
                  {value}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

    </SectionWrapper>
  )
}

export { AboutHeritage }
