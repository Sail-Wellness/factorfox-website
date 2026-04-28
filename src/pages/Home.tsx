import { SEO } from '@/components/SEO'
import { HeroAnimation } from '@/sections/HeroAnimation'
import { FeatureCards } from '@/sections/FeatureCards'
import { IncreaseROI } from '@/sections/IncreaseROI'
import { DocumentsToDecisions } from '@/sections/DocumentsToDecisions'
import { IntelligenceCore } from '@/sections/IntelligenceCore'
import { PrecisionModules } from '@/sections/PrecisionModules'
import { MobileSection } from '@/sections/MobileSection'
import { EcosystemSection } from '@/sections/EcosystemSection'
import { IntegrationsSection } from '@/sections/IntegrationsSection'
import { OperatingSystemSection } from '@/sections/OperatingSystemSection'
import { OnboardSection } from '@/sections/OnboardSection'
import { CtaSection } from '@/sections/CtaSection'

function Home() {
  return (
    <>
      <SEO
        title="FactorFox | AI Factoring Software & Financial Intelligence Platform for Capital Deployment"
        description="FactorFox is an AI-powered financial intelligence platform for invoice factoring and receivables financing, automating underwriting, onboarding, and capital deployment."
        path="/"
      />

      <main>
        <HeroAnimation />
        <IncreaseROI />
        <FeatureCards />
        <DocumentsToDecisions />
        <IntelligenceCore />
        <PrecisionModules />
        <MobileSection />
        <EcosystemSection />
        <IntegrationsSection />
        <OperatingSystemSection />
        <OnboardSection />
        <CtaSection />
        {/* More sections will be added here as Figma designs are shared */}
      </main>
    </>
  )
}

export { Home }
