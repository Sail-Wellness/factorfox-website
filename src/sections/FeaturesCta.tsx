import { Link } from 'react-router-dom'
import { AnimatedSection } from '@/components/AnimatedSection'

function FeaturesCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--set1-bg)]">
      {/* Light mode overlay + blur glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dark:hidden"
        style={{
          width: '60%',
          height: '55%',
          background: 'rgba(120, 160, 255, 0.55)',
          borderRadius: '50%',
          mixBlendMode: 'overlay',
          filter: 'blur(120px)',
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <AnimatedSection delay={0} className="flex flex-col items-center text-center gap-5">
          <h2 className="text-section-xl text-foreground">
            Factoring Infrastructure for the AI Era
          </h2>

          <p className="text-body-lg text-muted-foreground">
            Join the institutions re-vitalizing their operations with FactorFox.
          </p>

          <Link to="/contact-sales" className="btn-primary-lg mt-6">
            Experience the Platform
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

export { FeaturesCta }
