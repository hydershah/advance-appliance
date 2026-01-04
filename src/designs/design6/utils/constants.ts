// Design 6 - Villa Vista Magnifika Luxury Minimal Constants

import { Service, Stat, Testimonial, BusinessInfo } from './types';

// Villa Vista Color Palette
export const COLORS = {
  cream: '#fcfbf8',        // Background
  black: '#000000',        // Headlines
  gray: '#6b7280',         // Body text
  terracotta: '#722f10',   // Accent/Buttons
  border: '#E5E5E5',       // Subtle borders
  white: '#ffffff',        // Cards
};

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Advanced Appliance',
  tagline: 'Exceptional Service for Discerning Homes',
  phone: '(732) 416-7430',
  phoneClean: '7324167430',
  email: 'service@advancedappliancerepair.com',
  address: '120 Morganville Rd, Morganville, NJ 07751',
};

export const STATS: Stat[] = [
  { value: 30, suffix: '+', label: 'Years' },
  { value: 89, suffix: '%', label: 'Same Day' },
  { value: 100, suffix: 'K+', label: 'Repairs' },
];

export const SERVICES: Service[] = [
  {
    id: 'refrigerator',
    name: 'Refrigeration',
    description: 'Precision cooling systems for luxury appliances. Sub-Zero certified technicians.',
    icon: 'snowflake',
    features: ['Sub-Zero certified', 'Temperature calibration', 'OEM parts only'],
    price: 'From $185',
  },
  {
    id: 'washer',
    name: 'Laundry Care',
    description: 'Expert service for premium washing systems. Same-day diagnostics.',
    icon: 'droplet',
    features: ['Miele & Bosch specialists', 'Advanced diagnostics', 'Warranty protection'],
    price: 'From $165',
  },
  {
    id: 'dryer',
    name: 'Drying Systems',
    description: 'Professional repair for gas and electric dryers. Safety inspections included.',
    icon: 'wind',
    features: ['Safety certified', 'Vent optimization', 'Energy efficiency'],
    price: 'From $165',
  },
  {
    id: 'oven',
    name: 'Cooking Suites',
    description: 'Specialized care for Wolf, Viking, and premium ranges. Precision calibration.',
    icon: 'flame',
    features: ['Wolf & Viking certified', 'Precision calibration', 'Gas & electric'],
    price: 'From $195',
  },
];

export const TRUST_ITEMS = [
  { icon: 'shield', label: 'Licensed' },
  { icon: 'checkCircle', label: 'Certified' },
  { icon: 'clock', label: 'Same Day' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Catherine Reynolds',
    location: 'Colts Neck, NJ',
    rating: 5,
    text: 'Exceptional service and attention to detail. They understand the value of quality appliances and treat them with the respect they deserve.',
  },
  {
    id: 2,
    name: 'James Whitfield',
    location: 'Rumson, NJ',
    rating: 5,
    text: 'The only service we trust with our Sub-Zero and Wolf appliances. Professional, discreet, and thoroughly knowledgeable.',
  },
  {
    id: 3,
    name: 'Alexandra Morrison',
    location: 'Holmdel, NJ',
    rating: 5,
    text: 'Impeccable craftsmanship. They diagnosed and repaired our Viking range with remarkable precision. Truly exceptional expertise.',
  },
];

export const BRANDS = [
  'Sub-Zero', 'Wolf', 'Miele', 'Viking', 'Thermador', 'Bosch',
  'Samsung', 'LG', 'GE', 'Whirlpool', 'KitchenAid', 'Frigidaire',
];

// Luxury Mediterranean lifestyle images - elegant and sophisticated
// Using premium Pexels photos for Villa Vista aesthetic
export const IMAGES = {
  hero: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1920', // Elegant luxury kitchen interior
  kitchen: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920', // Modern kitchen with marble and premium finishes
  technician: 'https://images.pexels.com/photos/5691551/pexels-photo-5691551.jpeg?auto=compress&cs=tinysrgb&w=1920', // Professional service technician
  appliance: 'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=1920', // Luxury modern kitchen with high-end appliances
};
