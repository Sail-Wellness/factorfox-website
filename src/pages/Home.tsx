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
        <title>FactorFox — Financial Intelligence for Funding Operations</title>
        <meta
          name="description"
          content="The FactorFox Intelligence Core connects factoring, capital, and client workflows into one AI-driven operating system. Built for transportation. Rebuilt for everything else."
        />
        <meta property="og:title" content="FactorFox — Financial Intelligence for Funding Operations" />
        <meta property="og:description" content="AI-powered factoring software that accelerates your funding operations." />
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
