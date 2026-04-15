import { Link } from 'react-router-dom'
import { AnimatedSection } from '@/components/AnimatedSection'

function AboutMoreThanSoftware() {
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center justify-center py-24 md:py-32">
        <AnimatedSection delay={0} className="flex flex-col items-center text-center gap-6">
          <h2
            className="font-black text-foreground leading-[1.05]"
            style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
          >
            More than Software
          </h2>

          <p className="text-[16.5px] leading-relaxed text-muted-foreground max-w-md">
            Join the institutions re-engineering their core with FactorFox.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Link
              to="/contact-sales"
              className="px-7 py-3 text-[15px] font-semibold rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm"
            >
              Experience FactorFox
            </Link>
            <a
              href="#"
              className="px-7 py-3 text-[15px] font-semibold text-foreground hover:text-primary transition-colors"
            >
              View Platform
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export { AboutMoreThanSoftware }
