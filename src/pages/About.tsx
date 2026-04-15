import { SEO } from '@/components/SEO'
import { AboutHero } from '@/sections/AboutHero'
import { AboutDoctrine } from '@/sections/AboutDoctrine'
import { AboutMission } from '@/sections/AboutMission'
import { AboutHeritage } from '@/sections/AboutHeritage'
import { AboutPillars } from '@/sections/AboutPillars'
import { AboutMoreThanSoftware } from '@/sections/AboutMoreThanSoftware'

function About() {
  return (
    <>
      <SEO
        title="About FactorFox | 25+ Years of Factoring Experience, Rebuilt for the AI Era"
        description="Learn about FactorFox — built by factoring operators for factoring operators. 25+ years of experience turned into faster capital, lower risk, and higher returns."
        path="/about"
      />

      <main>
        <AboutHero />
        <AboutDoctrine />
        <AboutMission />
        <AboutHeritage />
        <AboutPillars />
        <AboutMoreThanSoftware />
        {/* More sections will be added here as Figma designs are shared */}
      </main>
    </>
  )
}

export { About }
