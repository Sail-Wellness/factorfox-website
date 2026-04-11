import { AnimatedSection } from '@/components/AnimatedSection'
import intelligenceImg from '@/assets/images/intelligence.png'
import intelligenceDarkImg from '@/assets/images/intelligence_dark.png'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0d0d0f]">
      {/* Light mode gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background:
            'radial-gradient(ellipse 65% 75% at 82% 35%, rgba(186, 230, 253, 0.45) 0%, rgba(255,255,255,0) 70%)',
        }}
      />
      {/* Dark mode gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 55% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left: text */}
          <AnimatedSection delay={0} className="flex flex-col">
            {/* Tag */}
            <div className="mb-6 flex items-center gap-2">
              <span className="text-primary text-base leading-none select-none">●</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                AI Automated Factoring
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-black text-gray-900 dark:text-white uppercase leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(52px, 6.5vw, 80px)' }}
            >
              Just Deploy<br />Capital
            </h1>

            {/* Subtitle */}
            <p className="text-[16.5px] leading-relaxed text-gray-500 dark:text-gray-400 max-w-[430px] mb-10">
              We automate the entire factoring life-cycle so you reduce cost,
              eliminate fraud, and maximize turnover on every dollar deployed.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-primary text-white font-semibold text-[15px] hover:bg-primary/90 transition-colors shadow-sm"
              >
                Request Demo
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 dark:bg-gray-800 font-semibold text-[15px] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                View Platform
              </a>
            </div>
          </AnimatedSection>

          {/* Right: dashboard screenshot */}
          <AnimatedSection delay={0.12} className="relative w-full">
            <img
              src={intelligenceImg}
              alt="FactorFox Intelligence dashboard"
              className="w-full rounded-xl shadow-2xl border border-gray-200 dark:hidden"
            />
            <img
              src={intelligenceDarkImg}
              alt="FactorFox Intelligence dashboard"
              className="w-full rounded-xl shadow-2xl border border-gray-800 hidden dark:block"
            />
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}

export { Hero }
