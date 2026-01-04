// Design 4 - Bamo Luxury Minimal Theme Constants
// Inspired by Bamo.com: Warm off-white, massive whitespace, pill buttons, no borders

export const BUSINESS_INFO = {
  name: 'Advanced Appliance',
  tagline: 'Premium appliance repair for discerning homeowners',
  phone: '(732) 416-7430',
  phoneClean: '7324167430',
  email: 'service@advancedappliancerepair.com',
  address: '120 Morganville Rd, Morganville, NJ 07751',
  hours: {
    weekday: '7:00 AM - 9:00 PM',
    weekend: '8:00 AM - 6:00 PM',
  },
};

// Minimal services array - luxury focused
export const SERVICES = [
  {
    id: 'refrigerator',
    name: 'Refrigeration',
    description: 'Expert service for Sub-Zero, Miele, and luxury cooling systems',
    icon: 'snowflake',
  },
  {
    id: 'washer',
    name: 'Laundry',
    description: 'Specialized care for high-end washing machines and dryers',
    icon: 'droplet',
  },
  {
    id: 'dishwasher',
    name: 'Dishwashers',
    description: 'Professional repair for Miele, Bosch, and panel-ready units',
    icon: 'dish',
  },
  {
    id: 'oven',
    name: 'Cooking',
    description: 'Wolf, Viking, and Thermador precision calibration',
    icon: 'flame',
  },
];

// Minimal testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Edison, NJ',
    text: 'Exceptional service. Fixed our Sub-Zero same day. Highly professional.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Woodbridge, NJ',
    text: 'Saturday emergency handled perfectly. Fair pricing, outstanding work.',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    location: 'Metuchen, NJ',
    text: 'Rare integrity and honesty. They recommended what we actually needed.',
  },
];

export const STATS = [
  { value: '30+', label: 'Years Experience' },
  { value: '100K+', label: 'Clients Served' },
  { value: '24/7', label: 'Emergency Service' },
];

export const BRANDS = [
  'Sub-Zero',
  'Wolf',
  'Viking',
  'Miele',
  'Thermador',
  'Bosch',
];

// Luxury, elegant images for sophisticated visual storytelling
// Using high-quality Pexels photos for Bamo minimal aesthetic
export const IMAGES = {
  hero: 'https://images.pexels.com/photos/1350585/pexels-photo-1350585.jpeg?auto=compress&cs=tinysrgb&w=1920', // Bright modern minimalist white kitchen
  kitchen: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=1920', // Modern kitchen with stainless steel appliances
  technician: 'https://images.pexels.com/photos/5691551/pexels-photo-5691551.jpeg?auto=compress&cs=tinysrgb&w=1920', // Professional service technician
};
