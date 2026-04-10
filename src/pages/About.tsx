import { Helmet } from 'react-helmet-async'

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
        <div className="flex min-h-[80vh] items-center justify-center">
          <p className="text-muted-foreground text-sm">About page — coming soon.</p>
        </div>
      </main>
    </>
  )
}

export { About }
