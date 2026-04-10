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
  { label: 'Migration Time',   value: '20 Min', delta: '-99%',   bar: false },
  { label: 'Manual Effort',    value: '0%',     delta: '-100%',  bar: false },
  { label: 'Resource Savings', value: '100%',   delta: '+100%',  bar: true  },
]

function OnboardSection() {
  return (
    <SectionWrapper className="bg-white">
      {/* Header */}
      <AnimatedSection delay={0} className="mb-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary mb-3">
          Why Wait Months?
        </p>
        <h2
          className="font-black text-gray-900 leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
        >
          Onboard Instantly
        </h2>
        <p className="text-[15px] text-gray-500 leading-relaxed max-w-2xl">
          Factor Fox is the only platform to migrate data in{' '}
          <strong className="text-gray-900">under 60 minutes</strong>. Eclipsing the industry
          standard of <strong className="text-gray-900">6-12 months</strong>.
        </p>
      </AnimatedSection>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {features.map(({ icon: Icon, title, description }, i) => (
          <AnimatedSection key={title} delay={i * 0.07}>
            <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[14px] font-bold text-gray-900 mb-2">{title}</p>
                <p className="text-[13px] leading-relaxed text-gray-500">{description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map(({ label, value, delta, bar }, i) => (
          <AnimatedSection key={label} delay={0.2 + i * 0.07}>
            <div className="relative h-full rounded-2xl border border-gray-100 bg-white px-6 pt-5 pb-5 shadow-sm overflow-hidden flex flex-col gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                {label}
              </p>
              <div className="flex items-baseline gap-2">
                <span
                  className="font-black text-gray-900 leading-none"
                  style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}
                >
                  {value}
                </span>
                <span className="text-[12px] font-bold text-green-500">
                  {delta}
                </span>
              </div>
              {bar && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-b-2xl" />
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}

export { OnboardSection }
