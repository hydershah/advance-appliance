import { groq } from 'next-sanity'

// ============================================================
// Settings
// ============================================================

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    ...,
    logo{..., asset->},
    seo{
      ...,
      defaultImage{..., asset->}
    }
  }
`

// ============================================================
// Pages
// ============================================================

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug && status == "published"][0]{
    ...,
    layout[]{
      ...,
      _type == "featuredServicesBlock" => {
        ...,
        services[]->{
          _id, name, slug, excerpt, image{..., asset->}, icon, status
        }
      },
      _type == "testimonialsBlock" => {
        ...,
        testimonials[]->{
          _id, customerName, content, rating, location, date, status
        }
      },
      _type == "teamMembersBlock" => {
        ...,
        featuredMembers[]->{
          _id, name, position, photo{..., asset->}, shortBio, order
        }
      },
      _type == "blogPostsBlock" => {
        ...,
        featuredPosts[]->{
          _id, title, slug, excerpt, featuredImage{..., asset->}, publishedDate, author
        }
      },
      _type == "serviceAreasBlock" => {
        ...,
        featuredAreas[]->{
          _id, name, slug, excerpt, image{..., asset->}
        }
      },
      _type == "heroBlock" => {
        ...,
        backgroundImage{..., asset->}
      },
      _type == "contentBlock" => {
        ...
      }
    },
    seo{
      ...,
      image{..., asset->}
    }
  }
`

export const allPagesQuery = groq`
  *[_type == "page" && status == "published"] | order(_createdAt desc) [0...100]{
    _id, title, slug, status, _updatedAt
  }
`

// ============================================================
// Services
// ============================================================

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug && status == "published"][0]{
    ...,
    image{..., asset->},
    relatedServices[]->{
      _id, name, slug, excerpt, image{..., asset->}, icon
    },
    seo{..., image{..., asset->}}
  }
`

export const allServicesQuery = groq`
  *[_type == "service" && status == "published"] | order(name asc) [0...100]{
    _id, name, slug, status, excerpt, image{..., asset->}, icon,
    longDescription, commonProblems, warningSigns, repairProcess,
    preventionTips, features, faqs, _updatedAt
  }
`

// ============================================================
// Service Areas
// ============================================================

export const serviceAreaBySlugQuery = groq`
  *[_type == "serviceArea" && slug.current == $slug && status == "published"][0]{
    ...,
    image{..., asset->},
    services[]->{
      _id, name, slug, excerpt, image{..., asset->}, icon
    },
    seo{..., image{..., asset->}}
  }
`

export const allServiceAreasQuery = groq`
  *[_type == "serviceArea" && status == "published"] | order(name asc) [0...100]{
    _id, name, slug, status, excerpt, county, state, zipCodes,
    image{..., asset->}, _updatedAt
  }
`

// ============================================================
// Blog Posts
// ============================================================

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug && status == "published"][0]{
    ...,
    featuredImage{..., asset->},
    relatedPosts[]->{
      _id, title, slug, excerpt, featuredImage{..., asset->}, publishedDate, author
    },
    seo{..., image{..., asset->}}
  }
`

export const allBlogPostsQuery = groq`
  *[_type == "blogPost" && status == "published"] | order(publishedDate desc) [0...$limit]{
    _id, title, slug, status, excerpt, author, publishedDate,
    featuredImage{..., asset->}, categories, tags, _updatedAt
  }
`

export const blogPostsByCategoryQuery = groq`
  *[_type == "blogPost" && status == "published" && $category in categories] | order(publishedDate desc) [0...$limit]{
    _id, title, slug, status, excerpt, author, publishedDate,
    featuredImage{..., asset->}, categories, tags, _updatedAt
  }
`

// ============================================================
// Testimonials
// ============================================================

export const allTestimonialsQuery = groq`
  *[_type == "testimonial" && status == "published"] | order(date desc) [0...50]{
    _id, customerName, rating, content, date, location, featured, status,
    service->{_id, name, slug}
  }
`

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && status == "published" && featured == true] | order(date desc) [0...50]{
    _id, customerName, rating, content, date, location, featured, status,
    service->{_id, name, slug}
  }
`

// ============================================================
// Team Members
// ============================================================

export const allTeamMembersQuery = groq`
  *[_type == "teamMember" && status == "published"] | order(order asc) [0...50]{
    _id, name, position, photo{..., asset->}, shortBio, specialties,
    certifications, yearsOfExperience, order
  }
`

// ============================================================
// Brands
// ============================================================

export const allBrandsQuery = groq`
  *[_type == "brand" && status == "published"] | order(order asc, name asc) [0...200]{
    _id, name, slug, logo{..., asset->}, logoUrl, description, featured, order
  }
`

export const featuredBrandsQuery = groq`
  *[_type == "brand" && status == "published" && featured == true] | order(order asc, name asc) [0...20]{
    _id, name, slug, logo{..., asset->}, logoUrl, description, featured, order
  }
`

export const brandBySlugQuery = groq`
  *[_type == "brand" && slug.current == $slug && status == "published"][0]{
    ...,
    logo{..., asset->},
    seo{..., image{..., asset->}}
  }
`

// ============================================================
// Certifications
// ============================================================

export const allCertificationsQuery = groq`
  *[_type == "certification" && status == "published"] | order(order asc) [0...50]{
    _id, name, issuer, year, order
  }
`

// ============================================================
// Trust Badges
// ============================================================

export const allTrustBadgesQuery = groq`
  *[_type == "trustBadge" && status == "published"] | order(order asc) [0...20]{
    _id, title, description, icon, order
  }
`

// ============================================================
// Specials & Offers
// ============================================================

export const allSpecialsQuery = groq`
  *[_type == "special" && status == "published"] | order(order asc) [0...20]{
    _id, title, description, icon, order, validUntil
  }
`

// ============================================================
// How It Works
// ============================================================

export const allHowItWorksQuery = groq`
  *[_type == "howItWorksStep" && status == "published"] | order(step asc) [0...10]{
    _id, step, title, description, icon
  }
`

// ============================================================
// General FAQs
// ============================================================

export const allGeneralFaqsQuery = groq`
  *[_type == "generalFaq" && status == "published"] | order(order asc) [0...50]{
    _id, question, answer, category, order
  }
`

// ============================================================
// Search
// ============================================================

export const searchPagesQuery = groq`
  *[_type == "page" && status == "published" && title match $searchTerm + "*"][0...10]{
    _id, title, slug
  }
`

export const searchServicesQuery = groq`
  *[_type == "service" && status == "published" && name match $searchTerm + "*"][0...10]{
    _id, name, slug, excerpt
  }
`

export const searchBlogPostsQuery = groq`
  *[_type == "blogPost" && status == "published" && title match $searchTerm + "*"][0...10]{
    _id, title, slug, excerpt
  }
`
