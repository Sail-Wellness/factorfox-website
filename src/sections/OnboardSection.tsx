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
  { label: 'Migration Time',   value: '20 Min', delta: '-99%',   bar: true, darkBarWhite: true },
  { label: 'Manual Effort',    value: '0%',     delta: '-100%',  bar: true, darkBarWhite: true },
  { label: 'Resource Savings', value: '100%',   delta: '+100%',  bar: true, darkBarWhite: false },
]

function OnboardSection() {
  return (
    <SectionWrapper className="bg-white dark:bg-[#0d0d0f]">
      {/* Header */}
      <AnimatedSection delay={0} className="mb-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary mb-3">
          Why Wait Months?
        </p>
        <h2
          className="font-black text-gray-900 dark:text-white leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
        >
          Onboard Instantly
        </h2>
        <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
          Factor Fox is the only platform to migrate data in{' '}
          <strong className="text-gray-900 dark:text-white">under 20 minutes</strong>. Eclipsing the industry
          standard of <strong className="text-gray-900 dark:text-white">6-12 months</strong>.
        </p>
      </AnimatedSection>

      {/* Feature cards */}
      <div className="max-w-[942px] mx-auto w-full mb-[15px]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[15px]">
        {features.map(({ icon: Icon, title, description }, i) => (
          <AnimatedSection key={title} delay={i * 0.07}>
            <div className="h-full rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0C121D] p-6 shadow-sm flex flex-col gap-[15px]">
              {/* Light mode: icon in circle */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 dark:hidden">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </div>
              {/* Dark mode: raw icon, left-aligned */}
              <Icon className="hidden dark:block h-6 w-6 text-primary" strokeWidth={1.75} />
              <div>
                <p className="text-[14px] font-bold text-gray-900 dark:text-white mb-2">{title}</p>
                <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">{description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      </div>

      {/* Stat cards */}
      <div className="max-w-[942px] mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {stats.map(({ label, value, delta, bar, darkBarWhite }, i) => (
          <AnimatedSection key={label} delay={0.2 + i * 0.07}>
            <div className="h-full rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0C121D] p-8 shadow-sm flex flex-col gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400 dark:text-white">
                  {label}
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-black text-gray-900 dark:text-white leading-none"
                    style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}
                  >
                    {value}
                  </span>
                  <span className="text-[12px] font-bold text-green-500 dark:text-[#4ADE80]">
                    {delta}
                  </span>
                </div>
                {bar && (
                  <div className={`h-1.5 rounded-full w-full mt-1 ${darkBarWhite ? 'bg-gray-200 dark:bg-white' : 'bg-primary'}`} />
                )}
              </div>
            </AnimatedSection>
        ))}
      </div>
      </div>
    </SectionWrapper>
  )
}

export { OnboardSection }
