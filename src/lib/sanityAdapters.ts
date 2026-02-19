/**
 * Adapter functions to transform Sanity CMS types → Design1 component types.
 * This allows CMS data to be passed directly to Design1 components
 * which expect the shapes defined in src/designs/design1/types.ts
 */

import { urlFor } from '@/sanity/image'
import type {
  Service as SanityService,
  ServiceArea as SanityServiceArea,
  BlogPost as SanityBlogPost,
  Testimonial as SanityTestimonial,
  TeamMember as SanityTeamMember,
  Brand as SanityBrand,
  Certification as SanityCertification,
  TrustBadge as SanityTrustBadge,
  Special as SanitySpecial,
  GeneralFaq as SanityGeneralFaq,
  HowItWorksStep as SanityHowItWorksStep,
} from '@/sanity/types'
import type {
  Service as D1Service,
  ServiceArea as D1ServiceArea,
  BlogPost as D1BlogPost,
  Testimonial as D1Testimonial,
  TeamMember as D1TeamMember,
  Brand as D1Brand,
  Certification as D1Certification,
  FAQ as D1FAQ,
} from '@/designs/design1/types'

function resolveSlug(slug: string | { _type: string; current: string }): string {
  return typeof slug === 'object' ? slug.current : slug
}

function resolveImageUrl(image: unknown): string {
  if (!image) return ''
  try {
    return urlFor(image).url()
  } catch {
    return ''
  }
}

export function adaptService(s: SanityService): D1Service {
  return {
    id: s._id,
    name: s.name,
    slug: resolveSlug(s.slug),
    icon: s.icon || '',
    shortDescription: s.excerpt || '',
    description: s.excerpt || '',
    longDescription: s.longDescription || '',
    features: s.features || [],
    commonProblems: (s.commonProblems || []).map(p => ({
      title: p.title,
      description: p.description,
    })),
    warningSigns: s.warningSigns || [],
    repairProcess: s.repairProcess || [],
    preventionTips: s.preventionTips || [],
    faqs: (s.faqs || []).map(f => ({
      question: f.question,
      answer: f.answer,
    })),
    image: resolveImageUrl(s.image),
  }
}

export function adaptServiceArea(a: SanityServiceArea): D1ServiceArea {
  return {
    id: a._id,
    name: a.name,
    slug: resolveSlug(a.slug),
    county: a.county || '',
    state: a.state || 'NJ',
    description: a.excerpt || '',
    zipCodes: a.zipCodes || [],
  }
}

export function adaptBlogPost(p: SanityBlogPost): D1BlogPost {
  const plainText = portableTextToPlain(p.content)
  return {
    id: p._id,
    slug: resolveSlug(p.slug),
    title: p.title,
    excerpt: p.excerpt || '',
    content: plainText,
    author: p.author || '',
    date: p.publishedDate || p._createdAt,
    image: resolveImageUrl(p.featuredImage),
    category: p.categories?.[0] || '',
    tags: p.tags || [],
    readTime: Math.max(1, Math.ceil(plainText.split(/\s+/).length / 200)),
  }
}

export function adaptTestimonial(t: SanityTestimonial): D1Testimonial {
  return {
    id: t._id,
    name: t.customerName,
    location: t.location || '',
    rating: t.rating,
    text: t.content,
    service: typeof t.service === 'object' && t.service?.name ? t.service.name : '',
    date: t.date || t._createdAt,
  }
}

export function adaptTeamMember(m: SanityTeamMember): D1TeamMember {
  return {
    id: m._id,
    name: m.name,
    role: m.position,
    bio: m.shortBio || '',
    image: resolveImageUrl(m.photo),
  }
}

export function adaptBrand(b: SanityBrand): D1Brand {
  return {
    name: b.name,
    slug: resolveSlug(b.slug),
    logo: resolveImageUrl(b.logo) || b.logoUrl,
    description: b.description,
    featured: b.featured,
  }
}

export function adaptCertification(c: SanityCertification): D1Certification {
  return {
    name: c.name,
    issuer: c.issuer,
    year: c.year || '',
  }
}

export function adaptTrustBadge(b: SanityTrustBadge): { title: string; description: string } {
  return {
    title: b.title,
    description: b.description || '',
  }
}

export function adaptSpecial(s: SanitySpecial): { title: string; description: string; icon: string } {
  return {
    title: s.title,
    description: s.description,
    icon: s.icon || '',
  }
}

export function adaptHowItWorks(h: SanityHowItWorksStep): { step: number; title: string; description: string; icon: string } {
  return {
    step: h.step,
    title: h.title,
    description: h.description,
    icon: h.icon || '',
  }
}

export function adaptGeneralFaq(f: SanityGeneralFaq): D1FAQ {
  return {
    question: f.question,
    answer: f.answer,
  }
}

// Helper: convert portable text blocks to plain text
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function portableTextToPlain(blocks: any[] | undefined): string {
  if (!blocks) return ''
  return blocks
    .filter(b => b._type === 'block')
    .map(b =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      b.children?.map((c: any) => c.text).join('') || ''
    )
    .join('\n\n')
}
