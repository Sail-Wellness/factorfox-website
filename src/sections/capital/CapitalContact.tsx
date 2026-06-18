import { SectionWrapper } from '@/components/SectionWrapper'
import { AnimatedSection } from '@/components/AnimatedSection'
import { CapitalHeading } from './CapitalHeading'

const cards = [
  { label: 'Entity', value: 'FactorFox Capital', mono: false },
  { label: 'Network', value: 'FactorFox / FactorEvo', mono: false },
]

function CapitalContact() {
  return (
    <SectionWrapper id="contact" className="scroll-mt-24 bg-[var(--set2-bg)]">
      <CapitalHeading
        size="display"
        eyebrowTone="muted"
        eyebrow={
          <>
            Don&rsquo;t trust, <span className="text-primary">verify.</span>
          </>
        }
        title="Get in touch"
        intro="You already run on FactorFox. If you’d explore a capital relationship that fits your book, we’d welcome a conversation, the next step is small and non-binding."
      />

      <div className="mx-auto mt-12 grid max-w-lg gap-4 text-left sm:grid-cols-2">
        {cards.map(({ label, value, mono }, i) => (
          <AnimatedSection key={label} delay={0.06 + i * 0.05} className="h-full">
            <div className="h-full rounded-[16px] border border-[var(--set2-stroke)] bg-[var(--set2-box)] p-[22px]">
              <div className="text-label text-muted-foreground">{label}</div>
              <div
                className={
                  mono
                    ? 'mt-2 font-mono text-body-sm text-primary'
                    : 'mt-2 text-body-sm font-medium text-foreground'
                }
              >
                {value}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}

export { CapitalContact }
