import { Helmet } from 'react-helmet-async'
import { Hero } from '@/sections/Hero'
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
      <Helmet>
        <title>FactorFox | AI Factoring Software &amp; Financial Intelligence Platform for Capital Deployment</title>
        <meta
          name="description"
          content="FactorFox is an AI-powered financial intelligence platform for invoice factoring and receivables financing, automating underwriting, onboarding, and capital deployment."
        />
        <meta property="og:title" content="FactorFox – Intelligent Infrastructure for Capital Deployment" />
        <meta property="og:description" content="FactorFox is an AI-powered financial intelligence platform for invoice factoring and receivables financing, automating underwriting, onboarding, and capital deployment." />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <Hero />
        <FeatureCards />
        <IncreaseROI />
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
