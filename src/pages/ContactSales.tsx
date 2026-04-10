import { Helmet } from 'react-helmet-async'

function ContactSales() {
  return (
    <>
      <Helmet>
        <title>Contact Sales — FactorFox</title>
        <meta
          name="description"
          content="Get in touch with the FactorFox sales team to learn how we can accelerate your funding operations."
        />
      </Helmet>

      <main>
        <div className="flex min-h-[80vh] items-center justify-center">
          <p className="text-muted-foreground text-sm">Contact Sales page — coming soon.</p>
        </div>
      </main>
    </>
  )
}

export { ContactSales }
