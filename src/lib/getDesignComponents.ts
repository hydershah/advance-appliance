/**
 * Design Component Mapper
 * Returns the appropriate component set based on the selected design theme
 */

import type { ComponentType } from 'react'

// Design 1 Components
import * as Design1 from '@/designs/design1/components'

export type DesignTheme = '1'

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
export function getDesignComponents(_theme: DesignTheme = '1'): DesignComponents {
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
  return '1'
}

/**
 * Design theme metadata for each design
 */
export const designMetadata = {
  '1': {
    name: 'Elegant Minimalist',
    description: 'Clean, sophisticated design with high-end aesthetics',
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
} as const

/**
 * Get metadata for a specific design theme
 */
export function getDesignMetadata(theme: DesignTheme) {
  return designMetadata[theme]
}
