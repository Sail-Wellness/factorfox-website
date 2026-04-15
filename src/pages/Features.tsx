import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>Features — FactorFox</title>
        <meta
          name="description"
          content="Explore FactorFox's AI-powered features: Document Intelligence, Collections Engine, Credit & Risk Intelligence, and more."
        />
      </Helmet>

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
