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
          <h1
            className="font-black text-gray-900 dark:text-white leading-[1.05]"
            style={{ fontSize: 'clamp(44px, 6vw, 76px)' }}
          >
            25+ Years of<br />Factoring Experience
          </h1>

          <p className="text-[16.5px] leading-relaxed text-gray-500 dark:text-gray-400 max-w-md">
            Turned into faster capital, lower risk, and higher returns.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

export { AboutHero }
