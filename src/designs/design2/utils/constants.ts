// Design 2 - Bold Modern Theme Constants

export const COLORS = {
  primary: '#0A1628',
  secondary: '#3B82F6',
  accent: '#60A5FA',
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
  },
};

export const BUSINESS_INFO = {
  name: 'Advanced Appliance Repair Service',
  tagline: 'Your trusted partner for all appliance repair needs.',
  phone: '(732) 416-7430',
  phoneClean: '7324167430',
  email: 'service@advancedappliancerepair.com',
  address: '123 Main Street, Edison, NJ 08817',
  hours: {
    weekday: '7:00 AM - 9:00 PM',
    weekend: '8:00 AM - 6:00 PM',
  },
};

export const STATS = [
  { value: 30, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: 'K+', label: 'Happy Customers' },
  { value: 89, suffix: '%', label: 'First-Visit Fix Rate' },
  { value: 24, suffix: '/7', label: 'Emergency Service' },
];

export const SERVICES = [
  {
    id: 'refrigerator',
    name: 'Refrigerator Repair',
    description: 'Expert repair for all refrigerator brands including Samsung, LG, Whirlpool, and Sub-Zero.',
    icon: 'snowflake',
    commonIssues: ['Not cooling', 'Ice maker problems', 'Water leakage', 'Strange noises', 'Door seal issues'],
    features: ['Same-day service', 'Factory-trained technicians', '90-day warranty'],
    price: 'From $89',
  },
  {
    id: 'washer',
    name: 'Washer Repair',
    description: 'Professional washing machine repair services for top-load and front-load washers.',
    icon: 'droplet',
    commonIssues: ['Not draining', 'Excessive vibration', 'Not spinning', 'Water leaks', 'Door latch issues'],
    features: ['All brands serviced', 'Genuine parts', 'Fast turnaround'],
    price: 'From $79',
  },
  {
    id: 'dryer',
    name: 'Dryer Repair',
    description: 'Fast and reliable dryer repair for gas and electric dryers of all brands.',
    icon: 'wind',
    commonIssues: ['Not heating', 'Takes too long', 'Noisy operation', 'Not tumbling', 'Burning smell'],
    features: ['Gas & electric', 'Vent cleaning', 'Safety inspection'],
    price: 'From $79',
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    description: 'Complete dishwasher repair services to get your dishes sparkling clean again.',
    icon: 'dish',
    commonIssues: ['Not cleaning well', 'Not draining', 'Leaking', 'Not starting', 'Door problems'],
    features: ['All major brands', 'Pump repair', 'Door latch fix'],
    price: 'From $79',
  },
  {
    id: 'oven',
    name: 'Oven & Range Repair',
    description: 'Expert oven, stove, and range repair for gas and electric models.',
    icon: 'flame',
    commonIssues: ['Not heating', 'Uneven cooking', 'Burner issues', 'Temperature problems', 'Self-clean issues'],
    features: ['Gas & electric', 'Temperature calibration', 'Igniter repair'],
    price: 'From $89',
  },
  {
    id: 'microwave',
    name: 'Microwave Repair',
    description: 'Professional microwave repair for countertop and built-in units.',
    icon: 'circle',
    commonIssues: ['Not heating', 'Turntable issues', 'Sparking', 'Display problems', 'Door latch issues'],
    features: ['Built-in & countertop', 'Magnetron repair', 'Display fix'],
    price: 'From $69',
  },
];

export const BRANDS = [
  'Samsung', 'LG', 'Whirlpool', 'GE', 'Maytag', 'KitchenAid',
  'Frigidaire', 'Bosch', 'Sub-Zero', 'Viking', 'Miele', 'Thermador',
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Edison, NJ',
    rating: 5,
    text: 'Incredible service! The technician arrived on time, diagnosed the problem quickly, and had my refrigerator running perfectly within an hour. Highly recommend!',
    service: 'Refrigerator Repair',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Woodbridge, NJ',
    rating: 5,
    text: 'Called them for an emergency washer repair on a Saturday and they came out same day. Fair pricing and excellent work. Will definitely use again.',
    service: 'Washer Repair',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Metuchen, NJ',
    rating: 5,
    text: 'Professional, knowledgeable, and honest. They could have easily oversold me on parts but instead gave me the most economical solution. Rare to find such integrity.',
    service: 'Dishwasher Repair',
  },
];

export const SERVICE_AREAS = [
  'Edison', 'Woodbridge', 'Metuchen', 'South Plainfield', 'Piscataway',
  'New Brunswick', 'Highland Park', 'Sayreville', 'Old Bridge', 'East Brunswick',
  'North Brunswick', 'Franklin Township', 'Somerset', 'Bridgewater', 'Hillsborough',
];

export const IMAGES = {
  hero: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1920',
  technician: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800',
  kitchen: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
  appliance1: 'https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=800',
  appliance2: 'https://images.pexels.com/photos/5825573/pexels-photo-5825573.jpeg?auto=compress&cs=tinysrgb&w=800',
  team: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
};
