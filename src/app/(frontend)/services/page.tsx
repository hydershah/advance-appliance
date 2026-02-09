import { Metadata } from 'next'

// Import static design pages for fallback when CMS is unavailable
import { Services as Design1Services } from '@/designs/design1/pages'

/**
 * Services Listing Page - Server Component
 */

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Professional appliance repair services for all major brands. Expert technicians, same-day service available.',
}

export default async function ServicesPage() {
  // TEMPORARY: Use static content directly for urgent client review
  // TODO: Switch back to Sanity CMS after credentials are configured
  // To revert: See git history for Sanity CMS version
  return <Design1Services />
}
