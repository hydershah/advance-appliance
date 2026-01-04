// Design 2 - Modern Professional Luxury Theme
// Main entry point for all exports

// Pages
export { Home } from './pages/Home';
export { Services } from './pages/Services';
export { ServiceDetail } from './pages/ServiceDetail';
export { About } from './pages/About';
export { Contact } from './pages/Contact';
export { Blog } from './pages/Blog';
export { BlogPost } from './pages/BlogPost';
export { AreaPage } from './pages/AreaPage';

// Components
export { Header } from './components/Header';
export { Footer } from './components/Footer';
export { MegaMenu } from './components/MegaMenu';
export { AnimatedCounter, StatsGrid } from './components/AnimatedCounter';
export { ServiceFilterTabs } from './components/ServiceFilterTabs';
export { BrandCarousel } from './components/BrandCarousel';
export { MultiStepForm } from './components/MultiStepForm';
export { ToastProvider, useToast, StandaloneToast } from './components/Toast';
export { Skeleton, CardSkeleton, PageLoadingSkeleton } from './components/LoadingSkeleton';

// Hooks
export {
  useAnimatedCounter,
  useIntersectionObserver,
  useScrollEffect,
  useParallax,
  useSmoothScroll,
} from './hooks';

// Constants
export {
  COLORS,
  BUSINESS_INFO,
  STATS,
  SERVICES,
  BRANDS,
  TESTIMONIALS,
  SERVICE_AREAS,
  IMAGES,
} from './utils/constants';
