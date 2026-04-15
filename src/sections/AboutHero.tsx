import { AnimatedSection } from '@/components/AnimatedSection'

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--set1-bg)]">
      {/* Light mode overlay + blur glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dark:hidden"
        style={{
          width: '75%',
          height: '70%',
          background: '#EBF6FF',
          borderRadius: '50%',
          filter: 'blur(90px)',
        }}
      />
      {/* Dark mode overlay + blur glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden dark:block"
        style={{
          width: '55%',
          height: '50%',
          background: '#041324',
          borderRadius: '50%',
          mixBlendMode: 'screen',
          filter: 'blur(120px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[88vh] flex items-center justify-center py-24 md:py-32">
        <AnimatedSection delay={0} className="flex flex-col items-center text-center gap-6">
          <h1 className="text-hero text-foreground">
            <span className="block">25+ Years of</span>
            <span className="block">Factoring Experience</span>
          </h1>

          <p className="text-body-lg text-muted-foreground max-w-md">
            Turned into faster capital, lower risk, and higher returns.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

export { AboutHero }
