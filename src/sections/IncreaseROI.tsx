import { DollarSign, TrendingUp, ShieldCheck } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'

const stats = [
  { icon: DollarSign, label: 'Operational Efficiency', value: '$8M+ Per Staff Member' },
  { icon: TrendingUp, label: 'Capital Velocity', value: '11.5x Annual Turns' },
  { icon: ShieldCheck, label: 'Fraud Control', value: 'Lower Loss Rates' },
]

function IncreaseROI() {
  return (
    <section
      className="relative w-full py-20 md:py-28 overflow-hidden bg-white"
      style={{
        background: `
          radial-gradient(ellipse 50% 100% at 0% 50%, rgba(147, 197, 253, 0.5) 0%, rgba(255,255,255,0) 70%),
          radial-gradient(ellipse 50% 100% at 100% 50%, rgba(147, 197, 253, 0.5) 0%, rgba(255,255,255,0) 70%)
        `,
        backgroundColor: '#ffffff',
      }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Tag pill */}
        <AnimatedSection delay={0}>
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
              Operational Excellence
            </span>
          </div>
        </AnimatedSection>

        {/* Heading */}
        <AnimatedSection delay={0.05}>
          <h2 className="font-black text-gray-900 leading-[1.05] mb-6" style={{ fontSize: 'clamp(40px, 5.5vw, 68px)' }}>
            Increase ROI by <span className="text-primary">3x</span>
          </h2>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection delay={0.1}>
          <p className="text-[16.5px] leading-relaxed text-gray-500 max-w-[620px] mb-12">
            Achieved through 3 levers: more capital per operator, faster turns through AI
            automation, and near-zero fraud through centralized, cross-system intelligence.
          </p>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection delay={0.15} className="w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-12">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-4 w-4 text-primary" strokeWidth={2} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-0.5">{label}</p>
                  <p className="text-[14px] font-bold text-gray-900">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.2}>
          <a href="#" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-white font-semibold text-[15px] hover:bg-primary/90 transition-colors">
            Learn More
          </a>
        </AnimatedSection>

      </div>
    </section>
  )
}

export { IncreaseROI }
