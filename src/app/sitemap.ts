import { MetadataRoute } from 'next'
import { client } from '@/sanity/client'
import { groq } from 'next-sanity'
import { serviceAreas as staticAreas, brands as staticBrands } from '@/designs/design1/data/content'

/**
 * Dynamic sitemap generation for Advanced Appliance Repair
 * Automatically includes all pages, services, blog posts, and service areas from Sanity CMS
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  const sitemap: MetadataRoute.Sitemap = []

  // Static pages - highest priority (always include these)
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
    url: `${baseUrl}/our-service-area`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  })

  // Fetch services from Sanity
  try {
    const services = await client.fetch<Array<{ slug: { current: string }; _updatedAt: string }>>(
      groq`*[_type == "service" && status == "published"]{ slug, _updatedAt }`
    )

    ;(services || []).forEach((service) => {
      sitemap.push({
        url: `${baseUrl}/services/${service.slug.current}`,
        lastModified: new Date(service._updatedAt),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  } catch (error) {
    console.warn('Could not fetch services for sitemap:', error)
  }

  // Fetch blog posts from Sanity
  try {
    const posts = await client.fetch<Array<{ slug: { current: string }; _updatedAt: string }>>(
      groq`*[_type == "blogPost" && status == "published"] | order(publishedDate desc){ slug, _updatedAt }`
    )

    ;(posts || []).forEach((post) => {
      sitemap.push({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: new Date(post._updatedAt),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  } catch (error) {
    console.warn('Could not fetch blog posts for sitemap:', error)
  }

  // Service areas: merge Sanity + static list (static is authoritative fallback)
  const areaSlugs = new Set<string>()
  try {
    const areas = await client.fetch<Array<{ slug: { current: string }; _updatedAt: string }>>(
      groq`*[_type == "serviceArea" && status == "published"]{ slug, _updatedAt }`
    )

    ;(areas || []).forEach((area) => {
      areaSlugs.add(area.slug.current)
      sitemap.push({
        url: `${baseUrl}/areas/${area.slug.current}`,
        lastModified: new Date(area._updatedAt),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  } catch (error) {
    console.warn('Could not fetch service areas for sitemap:', error)
  }

  staticAreas.forEach((area) => {
    if (areaSlugs.has(area.slug)) return
    sitemap.push({
      url: `${baseUrl}/areas/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Brands: merge Sanity + static list
  const brandSlugs = new Set<string>()
  try {
    const brands = await client.fetch<Array<{ slug: { current: string }; _updatedAt: string }>>(
      groq`*[_type == "brand" && status == "published"]{ slug, _updatedAt }`
    )

    ;(brands || []).forEach((brand) => {
      brandSlugs.add(brand.slug.current)
      sitemap.push({
        url: `${baseUrl}/brands/${brand.slug.current}`,
        lastModified: new Date(brand._updatedAt),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  } catch (error) {
    console.warn('Could not fetch brands for sitemap:', error)
  }

  staticBrands.forEach((brand) => {
    if (!brand.slug || brandSlugs.has(brand.slug)) return
    sitemap.push({
      url: `${baseUrl}/${brand.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: brand.featured ? 0.7 : 0.5,
    })
  })

  // Fetch pages from Sanity (excluding home which is already added)
  try {
    const pages = await client.fetch<Array<{ slug: { current: string }; _updatedAt: string }>>(
      groq`*[_type == "page" && status == "published" && slug.current != "home"]{ slug, _updatedAt }`
    )

    ;(pages || []).forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${page.slug.current}`,
        lastModified: new Date(page._updatedAt),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  } catch (error) {
    console.warn('Could not fetch pages for sitemap:', error)
  }

  return sitemap
}
