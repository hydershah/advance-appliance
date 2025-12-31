import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import sharp from 'sharp'

import { Media, Users, Pages, Services, ServiceAreas, BlogPosts, Testimonials, TeamMembers } from './collections'
import { Settings } from './globals'
import { blogEndpoints } from './endpoints'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' | Advance Appliance CMS',
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  collections: [
    Pages,
    Services,
    ServiceAreas,
    BlogPosts,
    Testimonials,
    TeamMembers,
    Media,
    Users,
  ],
  endpoints: blogEndpoints,
  globals: [Settings],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'default-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ['pages', 'services', 'service-areas', 'blog-posts'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => {
        const title = (doc as { title?: string; name?: string })?.title ||
                      (doc as { title?: string; name?: string })?.name ||
                      'Advance Appliance Repair'
        return `${title} | Advance Appliance Repair`
      },
      generateDescription: ({ doc }) => {
        const excerpt = (doc as { excerpt?: string })?.excerpt
        if (excerpt) return excerpt
        return 'Professional luxury appliance repair services. Expert technicians, same-day service available.'
      },
      generateURL: ({ doc, collectionSlug }) => {
        const slug = (doc as { slug?: string })?.slug || ''
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

        if (!collectionSlug) {
          return `${baseUrl}/${slug}`
        }

        if (collectionSlug === 'pages') {
          return slug === 'home' ? baseUrl : `${baseUrl}/${slug}`
        }

        const collectionPaths: Record<string, string> = {
          'services': 'services',
          'service-areas': 'service-areas',
          'blog-posts': 'blog',
        }

        const pathPrefix = collectionPaths[collectionSlug] || collectionSlug
        return `${baseUrl}/${pathPrefix}/${slug}`
      },
    }),
  ],
  cors: [
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  ].filter(Boolean),
  csrf: [
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  ].filter(Boolean),
})
