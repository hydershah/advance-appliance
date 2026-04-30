import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',

  // Experimental features
  experimental: {
    reactCompiler: false,
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'appliancenj.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            // Content Security Policy — defense in depth against XSS.
            // 'unsafe-inline' on script/style is required for Next.js
            // hydration markers and Tailwind's runtime style injection.
            // Allowlists: Retell widget (chat), Google Maps (map iframe),
            // Sanity CDN (CMS images), Pexels/Unsplash/Cloudinary/AWS
            // (next/image remote patterns from next.config.ts).
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://dashboard.retellai.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://cdn.sanity.io https://images.pexels.com https://images.unsplash.com https://*.cloudinary.com https://*.amazonaws.com https://www.google.com https://maps.gstatic.com",
              "frame-src 'self' https://www.google.com https://maps.google.com https://dashboard.retellai.com",
              "connect-src 'self' https://*.sanity.io https://api.retellai.com wss://*.retellai.com https://retellai.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
      {
        source: '/:path*.(webp|jpg|jpeg|png|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // OG image generator is deterministic for a given query string —
        // cache it aggressively. Override the catchall /api/:path* rule
        // below which sets no-store. Order matters: more specific first.
        source: '/api/og',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ]
  },

  // Redirects
  async redirects() {
    const retiredAreas: Array<{ from: string; to: string }> = [
      { from: 'appliance-repair-belford-nj', to: 'appliance-repair-in-middletown-nj' },
      { from: 'appliance-repair-in-leonardo-nj', to: 'appliance-repair-in-middletown-nj' },
      { from: 'appliance-repair-in-port-monmouth-nj', to: 'appliance-repair-in-middletown-nj' },
      { from: 'appliance-repair-in-keansburg-nj', to: 'appliance-repair-in-middletown-nj' },
      { from: 'appliance-repair-in-keyport-nj', to: 'appliance-repair-in-matawan-nj' },
      { from: 'appliance-repair-in-farmingdale-nj', to: 'appliance-repair-in-freehold-nj' },
      { from: 'appliance-repair-in-englishtown-nj', to: 'appliance-repair-in-manalapan-nj' },
      { from: 'appliance-repair-in-deal-nj', to: 'appliance-repair-in-ocean-nj' },
      { from: 'appliance-repair-in-west-long-branch-nj', to: 'appliance-repair-in-ocean-nj' },
      { from: 'appliance-repair-in-oceanport-nj', to: 'appliance-repair-in-red-bank-nj' },
      { from: 'appliance-repair-in-parlin-nj', to: 'appliance-repair-in-sayreville-nj' },
    ]

    // Use `statusCode: 301` instead of `permanent: true` (which yields 308).
    // 308 is technically a permanent redirect but its method-preserving
    // semantics make older bots, link-checkers, and aggregator tools mis-
    // handle it for page redirects. 301 is the broadly-compatible standard
    // and is what an SEO audit tool flags as the correct value for
    // permanent page redirects.
    const areaRedirects = retiredAreas.flatMap(({ from, to }) => [
      { source: `/areas/${from}`, destination: `/areas/${to}`, statusCode: 301 as const },
      { source: `/${from}`, destination: `/areas/${to}`, statusCode: 301 as const },
    ])

    // Morganville brand×area combos were intentionally dropped — Morganville
    // is a Marlboro Township section and brand-level content is duplicative.
    // Redirect any inbound links/crawl hits to the equivalent Marlboro combo.
    const droppedMorganvilleCombos = [
      'sub-zero-appliance-repair-in-morganville-nj',
      'viking-appliance-repair-in-morganville-nj',
      'miele-appliance-repair-in-morganville-nj',
      'wolf-appliance-repair-in-morganville-nj',
      'thermador-appliance-repair-in-morganville-nj',
    ]
    const morganvilleComboRedirects = droppedMorganvilleCombos.map((slug) => ({
      source: `/${slug}`,
      destination: `/${slug.replace('-in-morganville-nj', '-in-marlboro-nj')}`,
      statusCode: 301 as const,
    }))

    // Legacy URL redirects from the old site that still appear in SERPs.
    // Without these, old Google/Bing results land on the 404 page and lose
    // customers. Both with-trailing-slash and without are covered by Next's
    // matcher which is already trailingSlash-agnostic by default.
    const legacyPageRedirects: Array<{ source: string; destination: string }> = [
      { source: '/contact-us', destination: '/contact' },
      { source: '/contact-us/', destination: '/contact' },
      { source: '/service-request', destination: '/contact' },
      { source: '/service-request/', destination: '/contact' },
      // Common legacy variants worth catching defensively
      { source: '/contactus', destination: '/contact' },
      { source: '/request-service', destination: '/contact' },
      { source: '/schedule-service', destination: '/contact' },
      { source: '/book-appointment', destination: '/contact' },
      { source: '/services-old', destination: '/services' },
      { source: '/our-services', destination: '/services' },
      { source: '/brands', destination: '/our-brands' },
      { source: '/reviews', destination: '/our-reviews' },
      { source: '/testimonials', destination: '/our-reviews' },
      { source: '/service-area', destination: '/our-service-area' },
      { source: '/service-areas', destination: '/our-service-area' },
      { source: '/locations', destination: '/our-service-area' },
    ]

    return [
      {
        source: '/admin',
        destination: '/studio',
        permanent: false,
      },
      ...areaRedirects,
      ...morganvilleComboRedirects,
      ...legacyPageRedirects.map((r) => ({ ...r, statusCode: 301 as const })),
    ]
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Environment variables available to the client
  env: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  },
}

export default nextConfig
