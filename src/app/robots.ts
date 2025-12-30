import { MetadataRoute } from 'next'

/**
 * Robots.txt configuration for Advanced Appliance Repair
 * Controls search engine crawler access
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/*',
          '/api/*',
          '/_next/*',
          '/private/*',
          '/*.json',
          '/search',
          '/temp/*',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin', '/admin/*', '/api/*', '/private/*'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: ['/admin', '/private/*'],
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: ['/admin', '/admin/*', '/api/*', '/private/*'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
