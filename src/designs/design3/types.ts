// Design 3 - Classic Premium Theme Type Definitions

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name?: string;
  title?: string;
  slug?: string;
  icon?: string;
  shortDescription?: string;
  description?: string;
  features?: string[];
  faqs?: FAQ[];
  image?: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service?: string;
  date?: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  slug?: string;
  county?: string;
  state?: string;
  description?: string;
  zipCodes?: string[];
}

export interface BlogPost {
  id: string;
  slug?: string;
  title: string;
  excerpt?: string;
  content?: string;
  author?: string;
  date?: string;
  image?: string;
  category?: string;
  tags?: string[];
  readTime?: number | string;
}

export interface Brand {
  name: string;
  logo?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Award {
  id?: string;
  title: string;
  year: string;
  issuer: string;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  brand?: string;
  appliance?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}
