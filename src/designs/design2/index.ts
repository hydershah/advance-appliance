// Design 2 - Modern Heritage Theme
// A modern luxury appliance repair website with bold typography and navy-cream palette

export * from './components';
export * from './pages';
export type {
  Service,
  Testimonial,
  TeamMember,
  BlogPost as BlogPostType,
  ServiceArea,
  Brand,
  Certification,
  NavItem,
  Award,
  FAQ,
} from './types';
export * from './data/content';

export const design2Metadata = {
  name: 'Modern Heritage',
  version: '1.0.0',
  description: 'A bold, modern theme with navy, cream, and gold accents',
  colorPalette: {
    primary: '#07203f',
    secondary: '#ebded4',
    accent: '#116dff',
    highlight: '#efc07b',
    text: '#07203f',
  },
  typography: {
    headingFont: 'Bebas Neue',
    bodyFont: 'Poppins',
  },
  features: [
    'Split hero layouts with layered imagery',
    'Navy and cream palette with gold accents',
    'Rounded cards with soft shadows',
    'Strong typographic hierarchy',
    'Responsive layouts for all screen sizes',
    'SEO-friendly schema markup',
  ],
};
