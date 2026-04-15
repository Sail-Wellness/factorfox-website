import { Link } from 'react-router-dom'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

const PLATFORM_URL = '#'

function CtaSection() {
  return (
    <SectionWrapper className="bg-[var(--set2-bg)]">
      <AnimatedSection delay={0} className="flex flex-col items-center text-center gap-6">
        <h2
          className="font-black text-foreground leading-[1.05]"
          style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
        >
          See FactorFox in Action
        </h2>

        <p className="text-[16px] text-muted-foreground max-w-md">
          Join hundreds of modern factors who have automated their growth.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            to="/contact-sales"
            className="px-10 py-4 text-[15px] font-bold rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Request Demo
          </Link>
          <a
            href={PLATFORM_URL}
            className="px-10 py-4 text-[15px] font-bold rounded-xl border border-border text-foreground hover:bg-muted transition-colors"
          >
            View Platform
          </a>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  )
}

export { CtaSection }
