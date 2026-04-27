import { MetadataRoute } from 'next'
import { client } from '@/sanity/client'
import { groq } from 'next-sanity'
import { serviceAreas as staticAreas, brands as staticBrands } from '@/designs/design1/data/content'
import { brandAreaCombos } from '@/designs/design1/data/brandAreaCombos'
import { serviceAreaCombos } from '@/designs/design1/data/serviceAreaCombos'

/**
 * Dynamic sitemap generation for Advanced Appliance Repair
 * Automatically includes all pages, services, blog posts, and service areas from Sanity CMS
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.appliancenj.com'
  const sitemap: MetadataRoute.Sitemap = []
  // Track every emitted URL so we never duplicate (combo slug colliding
  // with a CMS page slug, etc.). Combos win precedence at runtime, so
  // they should also win in the sitemap.
  const seenUrls = new Set<string>()
  const pushUrl = (entry: MetadataRoute.Sitemap[number]) => {
    if (seenUrls.has(entry.url)) return
    seenUrls.add(entry.url)
    sitemap.push(entry)
  }

  // Static pages - highest priority (always include these)
  pushUrl({
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
      pushUrl({
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
      pushUrl({
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
      pushUrl({
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
    pushUrl({
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
      pushUrl({
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
    pushUrl({
      url: `${baseUrl}/${brand.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      // Featured brands and parent-of-combo brands sit above non-featured.
      // Parent priority should not drop below child combo priority (0.65).
      priority: brand.featured ? 0.7 : 0.65,
    })
  })

  // Brand × Area combo pages (70) — premium brand × core area landing pages
  brandAreaCombos.forEach((combo) => {
    pushUrl({
      url: `${baseUrl}/${combo.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    })
  })

  // Service × Area combo pages (56) — top services × core area landing pages
  serviceAreaCombos.forEach((combo) => {
    pushUrl({
      url: `${baseUrl}/${combo.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  // Fetch pages from Sanity (excluding home which is already added).
  // pushUrl dedups against any combo slug already emitted above so a CMS
  // page slug that collides with a combo cannot duplicate.
  try {
    const pages = await client.fetch<Array<{ slug: { current: string }; _updatedAt: string }>>(
      groq`*[_type == "page" && status == "published" && slug.current != "home"]{ slug, _updatedAt }`
    )

    ;(pages || []).forEach((page) => {
      pushUrl({
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
