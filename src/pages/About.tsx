import { Helmet } from 'react-helmet-async'
import { AboutHero } from '@/sections/AboutHero'
import { AboutDoctrine } from '@/sections/AboutDoctrine'
import { AboutMission } from '@/sections/AboutMission'
import { AboutHeritage } from '@/sections/AboutHeritage'
import { AboutPillars } from '@/sections/AboutPillars'

function About() {
  return (
    <>
      <Helmet>
        <title>About — FactorFox</title>
        <meta
          name="description"
          content="Learn about FactorFox, the team behind the AI-driven factoring operating system."
        />
      </Helmet>

      <main>
        <AboutHero />
        <AboutDoctrine />
        <AboutMission />
        <AboutHeritage />
        <AboutPillars />
        {/* More sections will be added here as Figma designs are shared */}
      </main>
    </>
  )
}

export { About }
