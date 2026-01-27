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
    _id, name, slug, status, excerpt, image{..., asset->}, icon, _updatedAt
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
    _id, name, slug, status, excerpt, image{..., asset->}, _updatedAt
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
