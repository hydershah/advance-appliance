/**
 * Design Component Mapper
 * Returns the appropriate component set based on the selected design theme
 */

import type { ComponentType } from 'react'

// Design 1 Components
import * as Design1 from '@/designs/design1/components'
// Design 2 Components
import * as Design2 from '@/designs/design2/components'

export type DesignTheme = '1' | '2'

/**
 * Interface for design component structure
 * All designs must implement these components
 */
export interface DesignComponents {
  Header: ComponentType<any>
  Footer: ComponentType<any>
  Hero?: ComponentType<any>
  ServiceCard?: ComponentType<any>
  TestimonialCard?: ComponentType<any>
  ContactForm?: ComponentType<any>
  CTAButton?: ComponentType<any>
  SectionHeading?: ComponentType<any>
  FAQAccordion?: ComponentType<any>
}

/**
 * Get component set for a specific design theme
 */
export function getDesignComponents(theme: DesignTheme = '1'): DesignComponents {
  if (theme === '2') {
    return {
      Header: Design2.Header,
      Footer: Design2.Footer,
      Hero: Design2.Hero,
      ServiceCard: Design2.ServiceCard,
      TestimonialCard: Design2.TestimonialCard,
      ContactForm: Design2.ContactForm,
      CTAButton: Design2.CTAButton,
      SectionHeading: Design2.SectionHeading,
      FAQAccordion: Design2.FAQAccordion,
    }
  }

  return {
    Header: Design1.Header,
    Footer: Design1.Footer,
    Hero: Design1.Hero,
    ServiceCard: Design1.ServiceCard,
    TestimonialCard: Design1.TestimonialCard,
    ContactForm: Design1.ContactForm,
    CTAButton: Design1.CTAButton,
    SectionHeading: Design1.SectionHeading,
    FAQAccordion: Design1.FAQAccordion,
  }
}

/**
 * Get the current active design theme from environment or config
 */
export function getCurrentDesignTheme(): DesignTheme {
  const envTheme = process.env.NEXT_PUBLIC_DESIGN_THEME
  return envTheme === '2' ? '2' : '1'
}

/**
 * Design theme metadata for each design
 */
export const designMetadata = {
  '1': {
    name: 'Elegant Minimalist',
    description: 'Clean, sophisticated design with premium luxury aesthetics',
    colorScheme: {
      primary: '#D4AF37',
      secondary: '#000000',
      background: '#FFFFFF',
    },
    fonts: {
      heading: 'var(--font-playfair)',
      body: 'var(--font-inter)',
    },
  },
  '2': {
    name: 'Modern Heritage',
    description: 'Bold modern design with navy, cream, and gold accents',
    colorScheme: {
      primary: '#07203f',
      secondary: '#ebded4',
      background: '#fdfcfb',
    },
    fonts: {
      heading: 'var(--font-bebas)',
      body: 'var(--font-poppins)',
    },
  },
} as const

/**
 * Get metadata for a specific design theme
 */
export function getDesignMetadata(theme: DesignTheme) {
  return designMetadata[theme]
}
