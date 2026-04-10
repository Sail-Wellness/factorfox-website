import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

const members = [
  { initials: 'FF', name: 'FactorFox',       role: 'THE CORE OS' },
  { initials: 'FE', name: 'FactorEvo',       role: 'INTELLIGENCE NETWORK' },
  { initials: 'TC', name: 'Trucker Copilot', role: 'LOGISTICS AI' },
  { initials: 'FC', name: 'Factor Copilot',  role: 'AI DECISION ENGINE' },
]

function EcosystemSection() {
  return (
    <SectionWrapper className="bg-white">
      {/* Heading */}
      <AnimatedSection delay={0} className="text-center mb-14">
        <h2
          className="font-black text-gray-900 leading-[1.05] mb-3"
          style={{ fontSize: 'clamp(26px, 3.6vw, 48px)' }}
        >
          Part of a Larger Intelligence Ecosystem
        </h2>
        <p className="text-[16px] text-gray-400">
          Integrated synergy across the FactorEvo network.
        </p>
      </AnimatedSection>

      {/* 4-item row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
        {members.map(({ initials, name, role }, i) => (
          <AnimatedSection key={initials} delay={i * 0.08} className="flex flex-col items-center text-center">
            {/* Circle */}
            <div
              className="flex items-center justify-center rounded-full mb-4"
              style={{
                width: 100,
                height: 100,
                backgroundColor: '#f1f3f5',
              }}
            >
              <span
                className="font-black text-gray-700 leading-none"
                style={{ fontSize: 28 }}
              >
                {initials}
              </span>
            </div>
            <p className="text-[15px] font-bold text-gray-900 mb-1">{name}</p>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: '#6b7280' }}
            >
              {role}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}

export { EcosystemSection }
