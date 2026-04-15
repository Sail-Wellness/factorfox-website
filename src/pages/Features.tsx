import { SEO } from '@/components/SEO'
import { FeaturesHero } from '@/sections/FeaturesHero'
import { FeaturesQuickbooksXero } from '@/sections/FeaturesQuickbooksXero'
import { FeaturesLiveRiskEngine } from '@/sections/FeaturesLiveRiskEngine'
import { FeaturesDocumentIntelligence } from '@/sections/FeaturesDocumentIntelligence'
import { FeaturesCapabilities } from '@/sections/FeaturesCapabilities'
import { FeaturesEventLedger } from '@/sections/FeaturesEventLedger'
import { FeaturesPortfolioMonitoring } from '@/sections/FeaturesPortfolioMonitoring'
import { FeaturesCta } from '@/sections/FeaturesCta'

function Features() {
  return (
    <>
      <SEO
        title="Features — FactorFox | AI Factoring Software"
        description="Automate everything: Document Intelligence, QuickBooks & Xero integration, Live Risk Engine, Portfolio Monitoring, and Event Ledger. Built for modern factoring operators."
        path="/features"
      />

      <main>
        <FeaturesHero />
        <FeaturesQuickbooksXero />
        <FeaturesLiveRiskEngine />
        <FeaturesDocumentIntelligence />
        <FeaturesCapabilities />
        <FeaturesEventLedger />
        <FeaturesPortfolioMonitoring />
        <FeaturesCta />
      </main>
    </>
  )
}

export { Features }
