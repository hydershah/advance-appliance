// Document types
import { pageType } from './documents/page'
import { serviceType } from './documents/service'
import { serviceAreaType } from './documents/serviceArea'
import { blogPostType } from './documents/blogPost'
import { testimonialType } from './documents/testimonial'
import { teamMemberType } from './documents/teamMember'

// Singletons
import { settingsType } from './singletons/settings'

// Object types
import { seoType } from './objects/seo'

// Block types
import { heroBlockType } from './blocks/heroBlock'
import { contentBlockType } from './blocks/contentBlock'
import { ctaBlockType } from './blocks/ctaBlock'
import { featuredServicesBlockType } from './blocks/featuredServicesBlock'
import { testimonialsBlockType } from './blocks/testimonialsBlock'
import { teamMembersBlockType } from './blocks/teamMembersBlock'
import { blogPostsBlockType } from './blocks/blogPostsBlock'
import { serviceAreasBlockType } from './blocks/serviceAreasBlock'
import { faqBlockType } from './blocks/faqBlock'

export const schemaTypes = [
  // Documents
  pageType,
  serviceType,
  serviceAreaType,
  blogPostType,
  testimonialType,
  teamMemberType,
  // Singletons
  settingsType,
  // Objects
  seoType,
  // Blocks
  heroBlockType,
  contentBlockType,
  ctaBlockType,
  featuredServicesBlockType,
  testimonialsBlockType,
  teamMembersBlockType,
  blogPostsBlockType,
  serviceAreasBlockType,
  faqBlockType,
]
