import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://factorfox.com'
const SITE_NAME = 'FactorFox'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}

function SEO({
  title,
  description,
  path = '',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
}: SEOProps) {
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph — Facebook, LinkedIn, Slack, iMessage */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export { SEO }
