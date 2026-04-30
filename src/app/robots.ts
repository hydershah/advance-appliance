import { MetadataRoute } from 'next'

/**
 * Robots.txt configuration for Advanced Appliance Repair
 * Controls search engine crawler access
 */
export default function robots(): MetadataRoute.Robots {
  // Three-way fallback so prod robots.txt never references localhost or a
  // preview-deploy hostname. Sitemap directive must point at the canonical
  // domain — Google merges or splits indexation based on this URL.
  const baseUrl =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    (process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://www.appliancenj.com')

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
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
      // AI crawlers — explicitly allowed for citability in AI Overviews,
      // ChatGPT search, Perplexity, Claude, etc.
      {
        userAgent: 'GPTBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin', '/admin/*', '/api/*', '/private/*'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin', '/admin/*', '/api/*', '/private/*'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin', '/admin/*', '/api/*', '/private/*'],
      },
      {
        userAgent: 'Perplexity-User',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin', '/admin/*', '/api/*', '/private/*'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin', '/admin/*', '/api/*', '/private/*'],
      },
      {
        userAgent: 'Claude-Web',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin', '/admin/*', '/api/*', '/private/*'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin', '/admin/*', '/api/*', '/private/*'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
