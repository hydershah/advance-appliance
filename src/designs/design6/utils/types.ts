// Design 6 - Modern Minimalism TypeScript Types

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: IconType;
  features: string[];
  price?: string;
}

export type IconType =
  | 'wrench'
  | 'clock'
  | 'shield'
  | 'checkCircle'
  | 'phone'
  | 'calendar'
  | 'snowflake'
  | 'droplet'
  | 'wind'
  | 'flame'
  | 'circle';

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneClean: string;
  email: string;
  address: string;
}
