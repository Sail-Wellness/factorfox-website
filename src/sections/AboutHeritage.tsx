import { AnimatedSection } from '@/components/AnimatedSection'

const STATS = [
  { value: '2002', label: 'Founded' },
  { value: '$40B+', label: 'Funded' },
  { value: '2k+', label: 'Operators' },
  { value: '99.9%', label: 'Uptime' },
]

function AboutHeritage() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0C121D]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        <AnimatedSection delay={0} className="flex flex-col items-center text-center">
          {/* Tag */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 dark:border-primary/30 bg-primary/5 dark:bg-primary/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
              Heritage of Performance
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-black text-gray-900 dark:text-white leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
          >
            Founded by Factors
          </h2>

          {/* Subtitle */}
          <p className="text-[16.5px] leading-relaxed text-gray-500 dark:text-gray-400 max-w-[640px]">
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
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#161c2a] py-10 px-6 flex flex-col items-center text-center"
              >
                <span className="text-[42px] md:text-[48px] font-black text-gray-900 dark:text-white leading-none mb-3">
                  {value}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-500">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}

export { AboutHeritage }
