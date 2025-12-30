/**
 * Design Component Mapper
 * Returns the appropriate component set based on the selected design theme
 */

import type { ComponentType } from 'react'

// Design 1 Components
import * as Design1 from '@/designs/design1/components'

// Design 2 Components
import * as Design2 from '@/designs/design2/components'

// Design 3 Components
import * as Design3 from '@/designs/design3/components'

export type DesignTheme = '1' | '2' | '3'

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
export function getDesignComponents(theme: DesignTheme): DesignComponents {
  switch (theme) {
    case '1':
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
    case '2':
      return {
        Header: Design2.Header,
        Footer: Design2.Footer,
        Hero: Design1.Hero, // Fallback to Design1 if not available
        ServiceCard: Design1.ServiceCard, // Fallback
        TestimonialCard: Design1.TestimonialCard, // Fallback
        ContactForm: Design1.ContactForm, // Fallback
        CTAButton: Design1.CTAButton, // Fallback
        SectionHeading: Design1.SectionHeading, // Fallback
        FAQAccordion: Design1.FAQAccordion, // Fallback
      }
    case '3':
      return {
        Header: Design3.Navigation as any,
        Footer: Design3.Footer,
        Hero: Design1.Hero, // Fallback to Design1 if not available
        ServiceCard: Design3.ClassicCard as any,
        TestimonialCard: Design3.TestimonialCard as any,
        ContactForm: Design1.ContactForm, // Fallback
        CTAButton: Design1.CTAButton, // Fallback
        SectionHeading: Design1.SectionHeading, // Fallback
        FAQAccordion: Design1.FAQAccordion, // Fallback
      }
    default:
      // Default to Design 1
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
}

/**
 * Get the current active design theme from environment or config
 */
export function getCurrentDesignTheme(): DesignTheme {
  // Check environment variable first
  const envTheme = process.env.NEXT_PUBLIC_DESIGN_THEME

  if (envTheme === '1' || envTheme === '2' || envTheme === '3') {
    return envTheme
  }

  // Default to Design 1
  return '1'
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
    name: 'Bold Modern',
    description: 'Dynamic, energetic design with strong visual impact',
    colorScheme: {
      primary: '#FF6B35',
      secondary: '#1A1A1A',
      background: '#FFFFFF',
    },
    fonts: {
      heading: 'var(--font-bebas)',
      body: 'var(--font-poppins)',
    },
  },
  '3': {
    name: 'Classic Premium',
    description: 'Timeless, traditional design with refined elegance',
    colorScheme: {
      primary: '#1E3A5F',
      secondary: '#8B7355',
      background: '#FAF9F6',
    },
    fonts: {
      heading: 'var(--font-cormorant)',
      body: 'var(--font-source)',
    },
  },
} as const

/**
 * Get metadata for a specific design theme
 */
export function getDesignMetadata(theme: DesignTheme) {
  return designMetadata[theme]
}
