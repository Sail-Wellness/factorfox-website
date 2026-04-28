import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";

const members = [
  { initials: "FF", name: "FactorFox", role: "THE CORE OS" },
  { initials: "FE", name: "FactorEvo", role: "DEDICATED TRANSPORTATION FMS" },
  { initials: "TC", name: "Trucker Copilot", role: "LOGISTICS AI" },
  { initials: "FC", name: "Factor Copilot", role: "AI DECISION ENGINE" },
];

function EcosystemSection() {
  return (
    <SectionWrapper className="bg-[var(--set1-bg)]">
      {/* Heading */}
      <AnimatedSection delay={0} className="text-center mb-14">
        <h2 className="text-section-lg text-foreground mb-3">
          Part of a Larger Intelligence Ecosystem
        </h2>
        <p className="text-body-lg text-muted-foreground">
          Integrated synergy across the FactorEvo network.
        </p>
      </AnimatedSection>

      {/* 4-item row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
        {members.map(({ initials, name, role }, i) => (
          <AnimatedSection
            key={initials}
            delay={i * 0.08}
            className="flex flex-col items-center text-center"
          >
            {/* Circle */}
            <div
              className="flex items-center justify-center rounded-full mb-4 bg-[var(--set1-box)]"
              style={{ width: 100, height: 100 }}
            >
              <span
                className="font-black text-foreground leading-none"
                style={{ fontSize: 28 }}
              >
                {initials}
              </span>
            </div>
            <p className="text-card-title-sm text-foreground mb-1">{name}</p>
            <p className="text-eyebrow text-muted-foreground">{role}</p>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}

export { EcosystemSection };
