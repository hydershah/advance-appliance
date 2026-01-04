// Design 2 - Modern Professional Luxury Theme Constants

export const COLORS = {
  primary: '#07203f', // Modern navy
  secondary: '#116dff', // Professional blue (CTAs)
  accent: '#efc07b', // Gold highlight
  cream: '#ebded4', // Background cream
  tan: '#d9aa90', // Accent tan
  charcoal: '#2c3e50', // Text charcoal
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
  tagline: 'White-glove appliance repair for premium homes and culinary spaces.',
  phone: '(732) 416-7430',
  phoneClean: '7324167430',
  email: 'service@advancedappliancerepair.com',
  address: '120 Morganville Rd, Morganville, NJ 07751',
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
    description: 'Certified care for Sub-Zero, Miele, Thermador, and all premium refrigeration systems.',
    icon: 'snowflake',
    commonIssues: ['Not cooling', 'Ice maker problems', 'Water leakage', 'Warm spots', 'Door seal issues'],
    features: ['Same-day concierge scheduling', 'Factory-trained technicians', 'Luxury panel handling'],
    price: 'From $185',
  },
  {
    id: 'washer',
    name: 'Washer Repair',
    description: 'Professional care for laundry systems with drum balancing, seal replacement, and control board repair.',
    icon: 'droplet',
    commonIssues: ['Not draining', 'Excessive vibration', 'Not spinning', 'Water leaks', 'Door latch issues'],
    features: ['All brands serviced', 'Genuine OEM parts', 'Protective floor coverings'],
    price: 'From $165',
  },
  {
    id: 'dryer',
    name: 'Dryer Repair',
    description: 'Gas and electric dryer diagnostics with venting, heat, and drum performance optimization.',
    icon: 'wind',
    commonIssues: ['Not heating', 'Takes too long', 'Noisy operation', 'Not tumbling', 'Burning smell'],
    features: ['Gas & electric', 'Vent cleaning', 'Safety inspection'],
    price: 'From $165',
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    description: 'Panel-ready and stainless dishwasher repairs with leak tracing and quiet-operation tuning.',
    icon: 'dish',
    commonIssues: ['Not cleaning well', 'Not draining', 'Leaking', 'Not starting', 'Door problems'],
    features: ['All major brands', 'Pump rebuilds', 'Door & seal restoration'],
    price: 'From $155',
  },
  {
    id: 'oven',
    name: 'Oven & Range Repair',
    description: 'Precision calibration for gas and electric cooking suites including Wolf and Viking ranges.',
    icon: 'flame',
    commonIssues: ['Not heating', 'Uneven cooking', 'Burner issues', 'Temperature problems', 'Self-clean issues'],
    features: ['Gas & electric', 'Temperature calibration', 'Igniter & sensor repair'],
    price: 'From $195',
  },
  {
    id: 'microwave',
    name: 'Microwave Repair',
    description: 'Built-in and drawer microwave service with quiet-close and control system expertise.',
    icon: 'circle',
    commonIssues: ['Not heating', 'Turntable issues', 'Sparking', 'Display problems', 'Door latch issues'],
    features: ['Built-in & countertop', 'Magnetron repair', 'Display restoration'],
    price: 'From $145',
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
  hero: 'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=1920',
  technician: 'https://images.pexels.com/photos/4792491/pexels-photo-4792491.jpeg?auto=compress&cs=tinysrgb&w=1200',
  kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1400',
  appliance1: 'https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=1200',
  appliance2: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
  team: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200',
};
