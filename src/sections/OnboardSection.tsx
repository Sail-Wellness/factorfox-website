import { Timer, CloudDownload, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

const features = [
  {
    icon: Timer,
    title: '20-Minute Data Migration',
    description:
      'Compare our 20 minutes to the 6-12 month industry average. Fast-track your growth without the wait.',
  },
  {
    icon: CloudDownload,
    title: 'Zero Manual Overhead',
    description:
      'No need to divert internal resources. Our AI handles the heavy lifting automatically, letting your team focus on business.',
  },
  {
    icon: Zap,
    title: 'Instant Efficiency',
    description:
      'Get started on day one, not year two. Realize ROI the moment you sign up with our pre-configured environments.',
  },
]

const stats = [
  { label: 'Migration Time',   value: '20 Min', delta: '-99%',   barClassName: 'bg-muted dark:bg-foreground' },
  { label: 'Manual Effort',    value: '0%',     delta: '-100%',  barClassName: 'bg-muted dark:bg-foreground' },
  { label: 'Resource Savings', value: '100%',   delta: '+100%',  barClassName: 'bg-primary' },
]

function OnboardSection() {
  return (
    <SectionWrapper className="bg-[var(--set1-bg)]">
      {/* Header */}
      <AnimatedSection delay={0} className="mb-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary mb-3">
          Why Wait Months?
        </p>
        <h2 className="text-section-xl text-foreground mb-4">
          Onboard Instantly
        </h2>
        <p className="text-body text-muted-foreground max-w-3xl">
          Factor Fox is the only platform to migrate data in{' '}
          <strong className="text-foreground">under 20 minutes</strong>. Eclipsing the industry
          standard of <strong className="text-foreground">6-12 months</strong>.
        </p>
      </AnimatedSection>

      {/* Feature cards */}
      <div className="mb-[15px]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[15px]">
        {features.map(({ icon: Icon, title, description }, i) => (
          <AnimatedSection key={title} delay={i * 0.07}>
            <div className="h-full rounded-xl border border-[var(--set1-stroke)] bg-[var(--set1-box)] p-6 shadow-sm flex flex-col gap-[15px]">
              {/* Light mode: icon in circle */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 dark:hidden">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </div>
              {/* Dark mode: raw icon, left-aligned */}
              <Icon className="hidden dark:block h-6 w-6 text-primary" strokeWidth={1.75} />
              <div>
                <p className="text-card-title-sm text-foreground mb-2">{title}</p>
                <p className="text-body-xs text-muted-foreground">{description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      </div>

      {/* Stat cards */}
      <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {stats.map(({ label, value, delta, barClassName }, i) => (
          <AnimatedSection key={label} delay={0.2 + i * 0.07}>
            <div className="h-full rounded-xl border border-[var(--set1-stroke)] bg-[var(--set1-box)] p-8 shadow-sm flex flex-col gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-black text-foreground leading-none"
                    style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}
                  >
                    {value}
                  </span>
                  <span className="text-[12px] font-bold text-green-500 dark:text-[#4ADE80]">
                    {delta}
                  </span>
                </div>
                <div className={`h-1.5 rounded-full w-full mt-1 ${barClassName}`} />
              </div>
            </AnimatedSection>
        ))}
      </div>
      </div>
    </SectionWrapper>
  )
}

export { OnboardSection }
