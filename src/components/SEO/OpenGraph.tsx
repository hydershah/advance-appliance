/**
 * OpenGraph meta tags component
 * For use in pages that need custom OG tags beyond metadata API
 */

export interface OpenGraphProps {
  title: string
  description: string
  url: string
  image?: string
  type?: 'website' | 'article'
  siteName?: string
  locale?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function OpenGraph({
  title,
  description,
  url,
  image = '/og-image.jpg',
  type = 'website',
  siteName = 'Advanced Appliance Repair Service',
  locale = 'en_US',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: OpenGraphProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  return (
    <>
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' &&
        tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:creator" content="@advanceappliance" />
      <meta name="twitter:site" content="@advanceappliance" />
    </>
  )
}

/**
 * Generate OG Image URL for dynamic images
 */
export function generateOgImageUrl(params: {
  title: string
  subtitle?: string
  category?: string
}): string {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  const searchParams = new URLSearchParams({
    title: params.title,
    ...(params.subtitle && { subtitle: params.subtitle }),
    ...(params.category && { category: params.category }),
  })

  return `${baseUrl}/api/og?${searchParams.toString()}`
}
