import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

const DEMO_URL = '#'
const PLATFORM_URL = '#'

function CtaSection() {
  return (
    <SectionWrapper className="bg-white">
      <AnimatedSection delay={0} className="flex flex-col items-center text-center gap-6">
        <h2
          className="font-black text-gray-900 leading-[1.05]"
          style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
        >
          See FactorFox in Action
        </h2>

        <p className="text-[16px] text-gray-400 max-w-md">
          Join hundreds of modern factors who have automated their growth.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href={DEMO_URL}
            className="px-10 py-4 text-[15px] font-bold rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Request Demo
          </a>
          <a
            href={PLATFORM_URL}
            className="px-10 py-4 text-[15px] font-bold rounded-xl border border-gray-200 text-gray-900 bg-white hover:bg-gray-50 transition-colors"
          >
            View Platform
          </a>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  )
}

export { CtaSection }
