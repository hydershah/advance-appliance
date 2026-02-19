// Document types
import { pageType } from './documents/page'
import { serviceType } from './documents/service'
import { serviceAreaType } from './documents/serviceArea'
import { blogPostType } from './documents/blogPost'
import { testimonialType } from './documents/testimonial'
import { teamMemberType } from './documents/teamMember'
import { brandType } from './documents/brand'
import { certificationType } from './documents/certification'
import { trustBadgeType } from './documents/trustBadge'
import { specialType } from './documents/special'
import { howItWorksStepType } from './documents/howItWorksStep'
import { generalFaqType } from './documents/generalFaq'

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
  brandType,
  certificationType,
  trustBadgeType,
  specialType,
  howItWorksStepType,
  generalFaqType,
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
