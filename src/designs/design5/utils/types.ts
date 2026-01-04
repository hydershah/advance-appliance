// Design 5 - Warm Sophistication TypeScript Interfaces

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  commonIssues?: string[];
  features?: string[];
  price?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface TrustBadge {
  icon: string;
  text: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneClean: string;
  email: string;
  address: string;
  hours: {
    weekday: string;
    weekend: string;
  };
}
