import { Link } from 'react-router-dom'
import { DollarSign, TrendingUp, ShieldCheck } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'

const stats = [
  { icon: DollarSign, label: 'Operational Efficiency', value: 'More Book Per Operator' },
  { icon: TrendingUp, label: 'Capital Velocity',       value: 'Faster Turns' },
  { icon: ShieldCheck, label: 'Fraud Control',         value: 'Fewer Losses' },
]

function IncreaseROI() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-[var(--set1-bg)]">
      {/* Light mode — dual edge gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background: `
            radial-gradient(ellipse 50% 100% at 0% 50%, rgba(147,197,253,0.5) 0%, rgba(255,255,255,0) 70%),
            radial-gradient(ellipse 50% 100% at 100% 50%, rgba(147,197,253,0.5) 0%, rgba(255,255,255,0) 70%)
          `,
        }}
      />
      {/* Dark mode — subtle top-center glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(30,64,175,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Tag pill */}
        <AnimatedSection delay={0}>
          <div className="inline-flex items-center rounded-full border border-border bg-white dark:bg-transparent px-4 py-1.5 mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Operational Excellence
            </span>
          </div>
        </AnimatedSection>

        {/* Heading */}
        <AnimatedSection delay={0.05}>
          <h2 className="text-section-xl text-foreground mb-6">
            Increase ROI by <span className="text-primary">50%</span>
          </h2>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection delay={0.1}>
          <p className="text-body-lg text-muted-foreground max-w-[620px] mb-12">
            Achieved through 3 levers: more capital per operator, faster turns through AI
            automation, and near-zero fraud through centralized, cross-system intelligence.
          </p>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection delay={0.15} className="w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-12">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-primary/20">
                  <Icon className="h-4 w-4 text-primary" strokeWidth={2} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-0.5">
                    {label}
                  </p>
                  <p className="text-[14px] font-bold text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.2}>
          <Link to="/features" className="btn-primary">
            Learn More
          </Link>
        </AnimatedSection>

      </div>
    </section>
  )
}

export { IncreaseROI }
