// Design 1 - Elegant Minimalist Theme Type Definitions

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  description: string;
  features: string[];
  faqs: FAQ[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
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
  slug: string;
  county: string;
  state: string;
  description: string;
  zipCodes: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  readTime: number;
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
  title: string;
  year: string;
  issuer: string;
  image?: string;
}
