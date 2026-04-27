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

    const areaRedirects = retiredAreas.flatMap(({ from, to }) => [
      { source: `/areas/${from}`, destination: `/areas/${to}`, permanent: true },
      { source: `/${from}`, destination: `/areas/${to}`, permanent: true },
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
      permanent: true,
    }))

    return [
      {
        source: '/admin',
        destination: '/studio',
        permanent: false,
      },
      ...areaRedirects,
      ...morganvilleComboRedirects,
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
