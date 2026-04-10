import { Helmet } from 'react-helmet-async'

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
        <div className="flex min-h-[80vh] items-center justify-center">
          <p className="text-muted-foreground text-sm">Features page — coming soon.</p>
        </div>
      </main>
    </>
  )
}

export { Features }
