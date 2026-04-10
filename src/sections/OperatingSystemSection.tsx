import { CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

const features = [
  'True Multi-Entity Support',
  'Bespoke Workflow Customization',
  'Enterprise-Grade Security',
]

function ComparisonCard() {
  return (
    <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-5 flex flex-col gap-3 w-full max-w-sm">
      {/* Manual Process */}
      <div
        className="flex items-center justify-between rounded-xl px-4 py-3"
        style={{ backgroundColor: '#fff1f2' }}
      >
        <span className="text-[14px] font-medium text-gray-700">Manual Process</span>
        <span className="text-[14px] font-bold text-red-500">8 hrs</span>
      </div>

      {/* FactorFox OS */}
      <div
        className="flex items-center justify-between rounded-xl px-4 py-3"
        style={{ backgroundColor: '#f0fdf4' }}
      >
        <span className="text-[14px] font-medium text-gray-700">FactorFox OS</span>
        <span className="text-[14px] font-bold text-green-500">12 mins</span>
      </div>

      {/* Progress bar — FactorFox fraction of Manual time */}
      <div className="h-1 rounded-full bg-gray-100 overflow-hidden mt-1">
        <div
          className="h-full rounded-full bg-green-400"
          style={{ width: '2.5%' }}
        />
      </div>

      {/* Label */}
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
        Efficiency Gain: +97.5%
      </p>
    </div>
  )
}

function OperatingSystemSection() {
  return (
    <SectionWrapper className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: text */}
        <AnimatedSection delay={0} className="flex flex-col">
          <h2
            className="font-black leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(28px, 3.6vw, 48px)' }}
          >
            <span className="text-gray-900">Not Just Software</span><br />
            <span className="text-primary">An Operating System</span>
          </h2>

          <p className="text-[15px] leading-relaxed text-gray-500 mb-8">
            Generic factoring software manages records. FactorFox manages your entire business.
            We provide a centralized brain that connects your front-office origination with your
            back-office funding and risk controls at scale.
          </p>

          <ul className="flex flex-col gap-3.5">
            {features.map(f => (
              <li key={f} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                <span className="text-[14px] font-medium text-gray-700">{f}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Right: comparison card */}
        <AnimatedSection delay={0.12} className="flex justify-center lg:justify-end">
          <ComparisonCard />
        </AnimatedSection>

      </div>
    </SectionWrapper>
  )
}

export { OperatingSystemSection }
