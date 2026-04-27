import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";

const features = [
  "True Multi-Entity Support",
  "Bespoke Workflow Customization",
  "Enterprise-Grade Security",
];

function ComparisonCard() {
  return (
    <div className="rounded-2xl bg-white dark:bg-white/5 border border-blue-100 dark:border-white/10 shadow-[0_8px_40px_rgba(59,130,246,0.18)] p-5 flex flex-col gap-3 w-full max-w-sm">
      {/* Manual Process */}
      <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-[#fff1f2] dark:bg-white/[0.04]">
        <span className="text-[14px] font-medium text-foreground/80">
          Manual Process
        </span>
        <span className="text-[14px] font-bold text-red-500">8 hrs</span>
      </div>

      {/* FactorFox OS */}
      <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-[#f0fdf4] dark:bg-white/[0.08]">
        <span className="text-[14px] font-medium text-foreground">
          FactorFox OS
        </span>
        <span className="text-[14px] font-bold text-green-500">12 mins</span>
      </div>

      {/* Label then bar */}
      <div className="flex flex-col gap-1.5 mt-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Efficiency Gain: +97.5%
        </p>
        <div className="h-1 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: "97.5%" }}
          />
        </div>
      </div>
    </div>
  );
}

function OperatingSystemSection() {
  return (
    <SectionWrapper
      className="relative z-10 rounded-b-[32px] bg-[var(--set1-bg)]"
      style={{
        boxShadow: '0 8px 32px rgba(147,197,253,0.45), 0 2px 8px rgba(147,197,253,0.3)',
        clipPath: 'inset(0 0 -40px 0)',
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <AnimatedSection delay={0} className="flex flex-col">
          <h2 className="text-section-lg mb-5">
            <span className="block text-foreground">
              Not Just Software
            </span>
            <span className="block text-primary">An Operating System</span>
          </h2>

          <p className="text-body text-muted-foreground mb-8">
            Generic factoring software manages records. FactorFox manages your
            entire business. We provide a centralized brain that connects your
            front-office origination with your back-office funding and risk
            controls at scale.
          </p>

          <ul className="flex flex-col gap-3.5">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-primary"
                  strokeWidth={2}
                />
                <span className="text-[14px] font-medium text-foreground/80">
                  {f}
                </span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Right: comparison card */}
        <AnimatedSection
          delay={0.12}
          className="flex justify-center lg:justify-end"
        >
          <ComparisonCard />
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}

export { OperatingSystemSection };
