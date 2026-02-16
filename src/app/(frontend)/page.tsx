import { Metadata } from 'next'

// Import static design pages for fallback when no CMS content exists
import { Home as Design1Home } from '@/designs/design1/pages'

/**
 * Homepage - Server Component
 * Renders the home page with content from Sanity CMS
 */

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Advanced Appliance Repair Service | Expert Repair in NJ',
    description: 'Professional high-end appliance repair services in Monmouth & Middlesex Counties, NJ. Expert technicians, reliable service.',
  }
}

export default async function HomePage() {
  // TEMPORARY: Use static content directly for urgent client review
  // TODO: Switch back to Sanity CMS after credentials are configured
  // To revert: See git history for Sanity CMS version
  return <Design1Home />
}
