import { SEO } from '@/components/SEO'
import { CapitalHero } from '@/sections/capital/CapitalHero'
import { CapitalWhatYouGet } from '@/sections/capital/CapitalWhatYouGet'
import { CapitalGlassBox } from '@/sections/capital/CapitalGlassBox'
import { CapitalComparison } from '@/sections/capital/CapitalComparison'
import { CapitalTrackRecord } from '@/sections/capital/CapitalTrackRecord'
import { CapitalNetwork } from '@/sections/capital/CapitalNetwork'
import { CapitalPartnersCta } from '@/sections/capital/CapitalPartnersCta'
import { CapitalContact } from '@/sections/capital/CapitalContact'

function Capital() {
  return (
    <>
      <SEO
        title="FactorFox Capital — A line that is your book"
        description="A software-native senior lender to freight-factoring companies, built on the system of record you already run on. Capital that deploys as you fund, sized to your receivables, with fraud caught across the network — no field exams."
        path="/capital"
      />

      <main>
        <CapitalHero />
        <CapitalWhatYouGet />
        <CapitalGlassBox />
        <CapitalComparison />
        <CapitalTrackRecord />
        <CapitalNetwork />
        <CapitalPartnersCta />
        <CapitalContact />
      </main>
    </>
  )
}

export { Capital }
