import { AnimatedSection } from '@/components/AnimatedSection'
import mobileSrc from '@/assets/mobile_ss.svg'

const stats = [
  { value: '90%',  label: 'Reduced Intake Errors' },
  { value: '2min', label: 'Avg. Mobile Upload Time' },
]

function MobileSection() {
  return (
    <section className="w-full overflow-hidden bg-[var(--brand)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <AnimatedSection delay={0} className="flex flex-col">
            <h2
              className="font-black text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(28px, 3.8vw, 52px)' }}
            >
              Built for the Field<br />and the Back Office
            </h2>

            <p className="text-[16px] leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Empower your clients with a seamless mobile experience. FactorFox's
              mobile-first portal allows borrowers to manage their cash flow from anywhere.
            </p>

            {/* Stats */}
            <div className="flex items-start gap-12">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p
                    className="font-black text-white leading-none mb-1.5"
                    style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: phone mockup */}
          <AnimatedSection delay={0.12} className="flex justify-center lg:justify-end">
            {/* Phone frame */}
            <div
              className="relative"
              style={{ width: 280, height: 560 }}
            >
              {/* Outer bezel */}
              <div
                className="absolute inset-0 rounded-[44px]"
                style={{
                  backgroundColor: '#1a1a1a',
                  boxShadow: '0 32px 64px rgba(0,0,0,0.35)',
                }}
              />
              {/* Screen area */}
              <div
                className="absolute overflow-hidden bg-white"
                style={{ inset: '10px', borderRadius: '36px' }}
              >
                <img
                  src={mobileSrc}
                  alt="FactorFox mobile app — Credit Check screen"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Dynamic island */}
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: 18, width: 90, height: 26, backgroundColor: '#1a1a1a', borderRadius: 20, zIndex: 10 }}
              />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}

export { MobileSection }
