// Design 1 - Elegant Minimalist Theme
// A high-end appliance repair website with clean, sophisticated design

export * from './components';
export * from './pages';
// Re-export types explicitly to avoid BlogPost name conflict with the page component
export type { Service, Testimonial, TeamMember, BlogPost as BlogPostType, ServiceArea, Brand, Certification, NavItem, Award, FAQ } from './types';
export * from './data/content';

export const design1Metadata = {
  name: 'Elegant Minimalist',
  version: '1.0.0',
  description: 'A clean, sophisticated theme with high-end aesthetics',
  colorPalette: {
    primary: '#D4AF37',
    secondary: '#000000',
    background: '#FFFFFF',
    backgroundAlt: '#F9FAFB',
    text: '#000000',
    textMuted: '#6B7280',
  },
  typography: {
    headingFont: 'Playfair Display',
    bodyFont: 'Inter',
  },
  features: [
    'Full-bleed hero images with parallax effects',
    'Generous whitespace and breathing room',
    'Thin gold borders and subtle shadows',
    'Refined hover states and transitions',
    'Responsive design for all screen sizes',
    'SEO-optimized schema markup',
    'Accessible navigation and forms',
  ],
};
