import { MetadataRoute } from 'next'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

/**
 * Dynamic sitemap generation for Advanced Appliance Repair
 * Automatically includes all pages, services, blog posts, and service areas
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayloadHMR({ config })
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const sitemap: MetadataRoute.Sitemap = []

  // Static pages - highest priority
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  })

  sitemap.push({
    url: `${baseUrl}/about`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  })

  sitemap.push({
    url: `${baseUrl}/contact`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  })

  sitemap.push({
    url: `${baseUrl}/services`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  })

  sitemap.push({
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  })

  sitemap.push({
    url: `${baseUrl}/service-areas`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  })

  // Fetch services from PayloadCMS
  try {
    const servicesData = await payload.find({
      collection: 'services',
      where: {
        _status: {
          equals: 'published',
        },
      },
      limit: 100,
    })

    servicesData.docs.forEach((service) => {
      sitemap.push({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(service.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  } catch (error) {
    console.warn('Could not fetch services for sitemap:', error)
  }

  // Fetch blog posts from PayloadCMS
  try {
    const postsData = await payload.find({
      collection: 'posts',
      where: {
        _status: {
          equals: 'published',
        },
      },
      limit: 1000,
      sort: '-publishedDate',
    })

    postsData.docs.forEach((post) => {
      sitemap.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  } catch (error) {
    console.warn('Could not fetch blog posts for sitemap:', error)
  }

  // Fetch service areas from PayloadCMS
  try {
    const areasData = await payload.find({
      collection: 'service-areas',
      where: {
        _status: {
          equals: 'published',
        },
      },
      limit: 100,
    })

    areasData.docs.forEach((area) => {
      sitemap.push({
        url: `${baseUrl}/service-areas/${area.slug}`,
        lastModified: new Date(area.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  } catch (error) {
    console.warn('Could not fetch service areas for sitemap:', error)
  }

  // Fetch brands/manufacturers
  try {
    const brandsData = await payload.find({
      collection: 'brands',
      where: {
        _status: {
          equals: 'published',
        },
      },
      limit: 100,
    })

    brandsData.docs.forEach((brand) => {
      sitemap.push({
        url: `${baseUrl}/brands/${brand.slug}`,
        lastModified: new Date(brand.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  } catch (error) {
    console.warn('Could not fetch brands for sitemap:', error)
  }

  // Fetch pages (if you have a pages collection)
  try {
    const pagesData = await payload.find({
      collection: 'pages',
      where: {
        _status: {
          equals: 'published',
        },
      },
      limit: 100,
    })

    pagesData.docs.forEach((page) => {
      // Skip if it's a homepage or already added
      if (page.slug && page.slug !== 'home') {
        sitemap.push({
          url: `${baseUrl}/${page.slug}`,
          lastModified: new Date(page.updatedAt),
          changeFrequency: 'monthly',
          priority: 0.7,
        })
      }
    })
  } catch (error) {
    console.warn('Could not fetch pages for sitemap:', error)
  }

  // Add category pages if you have them
  const categories = [
    'refrigerator-repair',
    'washer-repair',
    'dryer-repair',
    'dishwasher-repair',
    'oven-repair',
    'range-repair',
    'cooktop-repair',
    'microwave-repair',
  ]

  categories.forEach((category) => {
    sitemap.push({
      url: `${baseUrl}/services/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  })

  return sitemap
}
