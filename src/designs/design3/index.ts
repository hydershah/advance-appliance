// Design 3: Classic Premium Theme
// A timeless, trustworthy design for luxury appliance repair services

// Components
export {
  Navigation,
  Footer,
  OrnamentDivider,
  ClassicCard,
  TestimonialCard,
  AwardBadge,
  FormInput,
  FormTextarea,
  FormSelect,
  ImageGallery,
  Breadcrumb,
  Button,
} from './components';

// Pages
export {
  Home,
  Services,
  ServiceDetail,
  About,
  Contact,
  Blog,
  BlogPost,
  AreaPage,
} from './pages';

// Hooks
export {
  useScrollAnimation,
  useDebounce,
  useMediaQuery,
  useLockBodyScroll,
  useClickOutside,
} from './hooks/useScrollAnimation';

// Types
export type {
  Service,
  Testimonial,
  BlogPost as BlogPostType,
  Award,
  TeamMember,
  ServiceArea,
  ContactFormData,
  NavItem,
} from './types';
