// Design 5 - Luxury Minimal Theme (Rooof.com Inspired)

import type { Service, Testimonial, Stat, TrustBadge, BusinessInfo } from './types';

export const COLORS = {
  background: '#FFFFFF', // Pure white
  text: '#272727', // Dark gray
  accent: '#2FC4A7', // Teal - ONLY for buttons and links
  accentHover: '#24A88F', // Darker teal
  border: '#E5E5E5', // Barely visible
  buttonBg: '#32373C', // Dark charcoal for buttons
  buttonHover: '#272B2E', // Darker charcoal
};

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Advanced Appliance',
  tagline: 'Your Kitchen. Our Expertise.',
  phone: '(732) 416-7430',
  phoneClean: '7324167430',
  email: 'service@advancedappliancerepair.com',
  address: '120 Morganville Rd, Morganville, NJ 07751',
  hours: {
    weekday: '7:00 AM - 9:00 PM',
    weekend: '8:00 AM - 6:00 PM',
  },
};

export const STATS: Stat[] = [
  { value: 30, suffix: '+', label: 'Years Serving Families' },
  { value: 15, suffix: 'K+', label: 'Homes Served' },
  { value: 92, suffix: '%', label: 'Same-Day Repairs' },
  { value: 24, suffix: '/7', label: 'Available Support' },
];

export const SERVICES: Service[] = [
  {
    id: 'refrigerator',
    name: 'Refrigerator Repair',
    description: 'Keep your fresh food fresh. Expert repair for all major brands including Sub-Zero and built-in units.',
    icon: 'snowflake',
    price: 'From $185',
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    description: 'From panel-ready to portable, we restore your dishwasher to whisper-quiet performance.',
    icon: 'droplet',
    price: 'From $155',
  },
  {
    id: 'oven',
    name: 'Oven & Range Repair',
    description: 'Gas or electric, wall oven or range—precision calibration for perfect cooking every time.',
    icon: 'flame',
    price: 'From $195',
  },
  {
    id: 'washer',
    name: 'Washer Repair',
    description: 'Front-load, top-load, or high-efficiency washers. We handle leaks, noise, and spin issues.',
    icon: 'wind',
    price: 'From $165',
  },
  {
    id: 'dryer',
    name: 'Dryer Repair',
    description: 'Safe, efficient drying restored. Heating, venting, and drum issues resolved quickly.',
    icon: 'sun',
    price: 'From $165',
  },
  {
    id: 'microwave',
    name: 'Microwave Repair',
    description: 'Built-in or countertop, we repair heating, turntable, and control board issues.',
    icon: 'zap',
    price: 'From $145',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Jennifer Martinez',
    location: 'Edison, NJ',
    rating: 5,
    text: "Our refrigerator stopped cooling on a Friday night. They came Saturday morning, diagnosed it quickly, and had us back up and running before lunch. Such a relief!",
    service: 'Refrigerator Repair',
  },
  {
    id: 2,
    name: 'Robert Kim',
    location: 'Metuchen, NJ',
    rating: 5,
    text: "I've used them for years—dishwasher, oven, even our washer. They're always professional, fair, and get it right the first time.",
    service: 'Multiple Services',
  },
  {
    id: 3,
    name: 'Lisa Thompson',
    location: 'Woodbridge, NJ',
    rating: 5,
    text: 'The technician was so patient explaining what was wrong with our oven. Honest pricing, no surprises. Highly recommend.',
    service: 'Oven Repair',
  },
  {
    id: 4,
    name: 'David Chen',
    location: 'South Plainfield, NJ',
    rating: 5,
    text: 'Quick response, knowledgeable service, and our dryer works like new. These folks really know their stuff.',
    service: 'Dryer Repair',
  },
];

export const TRUST_BADGES: TrustBadge[] = [
  { icon: 'shield', text: 'Licensed & Insured' },
  { icon: 'certificate', text: 'Factory Certified' },
  { icon: 'clock', text: 'Same-Day Service' },
  { icon: 'star', text: '4.9 Star Rating' },
];

export const BRANDS = [
  'Sub-Zero', 'Wolf', 'Miele', 'Thermador', 'Viking', 'Bosch',
  'Samsung', 'LG', 'GE', 'Whirlpool', 'KitchenAid', 'Maytag',
];

export const SERVICE_AREAS = [
  'Edison', 'Woodbridge', 'Metuchen', 'South Plainfield', 'Piscataway',
  'New Brunswick', 'Highland Park', 'Old Bridge', 'East Brunswick',
];

// High-quality luxury images from Pexels for Rooof clean minimal aesthetic
export const IMAGES = {
  hero: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920', // Modern luxury kitchen with white cabinets
  kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920', // Modern kitchen island with elegant design
  technician: 'https://images.pexels.com/photos/5691551/pexels-photo-5691551.jpeg?auto=compress&cs=tinysrgb&w=1920', // Professional service technician
  family: 'https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1920', // Family lifestyle
  appliance: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1920', // Stainless steel appliances in modern kitchen
};
