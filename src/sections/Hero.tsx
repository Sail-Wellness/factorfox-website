import { Link } from 'react-router-dom'
import { AnimatedSection } from '@/components/AnimatedSection'
import { HeroDashboardTabs } from '@/components/HeroDashboardTabs'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--set1-bg)]">
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
            <div className="mb-6 self-start inline-flex items-center gap-2 rounded-full border border-primary/25 dark:border-primary/30 bg-primary/5 dark:bg-primary/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                AI Automated Factoring
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-black text-foreground uppercase leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(52px, 6.5vw, 80px)' }}
            >
              Just Deploy<br />Capital
            </h1>

            {/* Subtitle */}
            <p className="text-[16.5px] leading-relaxed text-muted-foreground max-w-[430px] mb-10">
              We automate the entire factoring life-cycle so you reduce cost,
              eliminate fraud, and maximize turnover on every dollar deployed.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                to="/contact-sales"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-primary text-white font-semibold text-[15px] hover:bg-primary/90 transition-colors shadow-sm"
              >
                Request Demo
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl border border-border text-foreground hover:bg-muted font-semibold text-[15px] transition-colors"
              >
                View Platform
              </a>
            </div>
          </AnimatedSection>

          {/* Right: dashboard screenshot */}
          <AnimatedSection delay={0.12} className="relative w-full">
            <HeroDashboardTabs />
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}

export { Hero }
