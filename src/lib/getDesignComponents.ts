/**
 * Design Component Mapper
 * Returns the appropriate component set based on the selected design theme
 */

import type { ComponentType } from 'react'

// Design 1 Components - direct imports to avoid barrel re-export issues
import Header from '@/designs/design1/components/Header'
import Footer from '@/designs/design1/components/Footer'
import Hero from '@/designs/design1/components/Hero'
import ServiceCard from '@/designs/design1/components/ServiceCard'
import TestimonialCard from '@/designs/design1/components/TestimonialCard'
import ContactForm from '@/designs/design1/components/ContactForm'
import CTAButton from '@/designs/design1/components/CTAButton'
import SectionHeading from '@/designs/design1/components/SectionHeading'
import FAQAccordion from '@/designs/design1/components/FAQAccordion'

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
    Header,
    Footer,
    Hero,
    ServiceCard,
    TestimonialCard,
    ContactForm,
    CTAButton,
    SectionHeading,
    FAQAccordion,
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
    description: 'Clean, sophisticated design with premier aesthetics',
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
