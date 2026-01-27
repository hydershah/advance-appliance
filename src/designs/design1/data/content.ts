// Content Data for Design 1 - Elegant Minimalist Theme

import { Service, Testimonial, TeamMember, BlogPost, ServiceArea, Brand, Certification, FAQ } from '../types';

// Business Information
export const businessInfo = {
  name: 'Advanced Appliance Repair Service',
  tagline: 'Factory-Authorized Appliance Repair in Monmouth & Middlesex Counties, NJ',
  phone: '(732) 416-7430',
  tollFree: '(800) 664-0650',
  email: 'service@appliancenj.com',
  address: '23 Reids Hill Road, Morganville, NJ 07751',
  city: 'Morganville',
  state: 'NJ',
  zip: '07751',
  hours: {
    weekdays: '8:00 AM - 9:00 PM',
    saturday: '8:00 AM - 9:00 PM',
    sunday: '8:00 AM - 9:00 PM',
    liveOperators: '24/7',
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/profile.php?id=61555650040922',
    instagram: 'https://www.instagram.com/advancedappliance/?hl=en',
    twitter: 'https://twitter.com/advappliancenj?lang=en',
    youtube: 'https://www.youtube.com/channel/UC3FgNm3NMvks81yUBLOYhKw',
  },
  founded: 1992,
  yearsInBusiness: 30,
};

// Images - from live site
export const images = {
  logo: 'https://appliancenj.com/wp-content/uploads/2016/05/logo.png',
  favicon: 'https://appliancenj.com/wp-content/uploads/2016/05/favicon.png',
  hero: '/njhero-opt.webp',
  hero2: 'https://appliancenj.com/wp-content/uploads/2016/04/slider2.jpg',
  hero3: 'https://appliancenj.com/wp-content/uploads/2016/04/slider3.jpg',
  kitchen: 'https://appliancenj.com/wp-content/uploads/2016/05/repair-nj.jpg',
  living: 'https://images.pexels.com/photos/19689230/pexels-photo-19689230.jpeg',
  about: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg',
  team: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
  contact: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
  // Process icons
  iconBook: 'https://appliancenj.com/wp-content/uploads/2016/04/note-2.png',
  iconRepair: 'https://appliancenj.com/wp-content/uploads/2016/04/repair-2.png',
  iconRelax: 'https://appliancenj.com/wp-content/uploads/2016/04/relax-2.png',
  // Appliance images
  oven: 'https://appliancenj.com/wp-content/uploads/2016/04/oven.png',
  cooktop: 'https://appliancenj.com/wp-content/uploads/2016/04/cooker-2.jpg',
  dishwasher: 'https://appliancenj.com/wp-content/uploads/2016/04/dishwasher-1.png',
  refrigerator: 'https://appliancenj.com/wp-content/uploads/2016/04/refrigerator.jpg',
  washer: 'https://appliancenj.com/wp-content/uploads/2016/04/ge-washer-metallic-silver.jpg',
  dryer: 'https://appliancenj.com/wp-content/uploads/2016/04/Dispatcher-dry-mini-main.jpg',
};

// Services
export const services: Service[] = [
  {
    id: '1',
    name: 'Refrigerator Repair',
    slug: 'refrigerator-repair',
    icon: 'refrigerator',
    shortDescription: 'Expert repair for all premium refrigerator brands including Sub-Zero, Viking, and more.',
    description: 'Our certified technicians specialize in repairing high-end refrigerators from the worlds most prestigious brands. From temperature regulation issues to compressor failures, we diagnose and resolve problems with precision and care.',
    features: [
      'Same-day service availability',
      'Factory-trained technicians',
      'Genuine OEM replacement parts',
      '90-180 day warranty on all repairs',
      'Sub-Zero, Viking, Thermador specialists',
    ],
    faqs: [
      {
        question: 'How long does a refrigerator repair typically take?',
        answer: 'Most refrigerator repairs are completed within 1-2 hours. Complex issues may require additional visits for parts or diagnostics.',
      },
      {
        question: 'Do you repair built-in refrigerators?',
        answer: 'Yes, we specialize in built-in and integrated refrigerators from all major luxury brands.',
      },
      {
        question: 'What brands do you service?',
        answer: 'We service Sub-Zero, Viking, Wolf, Thermador, Miele, Bosch, Liebherr, and many other premium brands.',
      },
    ],
    image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg',
  },
  {
    id: '2',
    name: 'Washer Repair',
    slug: 'washer-repair',
    icon: 'washer',
    shortDescription: 'Professional washing machine repair for residential and high-capacity units.',
    description: 'From front-load to top-load washers, our experts handle all types of washing machine repairs. We understand the intricacies of luxury laundry appliances and provide meticulous service.',
    features: [
      'All washer types serviced',
      'Leak detection and repair',
      'Motor and pump replacement',
      'Electronic control board repair',
      'Miele, Bosch, Speed Queen specialists',
    ],
    faqs: [
      {
        question: 'Why is my washer leaking?',
        answer: 'Leaks can be caused by damaged door seals, faulty water inlet valves, or drain hose issues. Our technicians will identify and fix the source.',
      },
      {
        question: 'My washer won\'t spin. Can you fix it?',
        answer: 'Yes, spin cycle issues are commonly caused by lid switch problems, motor coupling failures, or belt issues. We repair all of these.',
      },
    ],
    image: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg',
  },
  {
    id: '3',
    name: 'Dryer Repair',
    slug: 'dryer-repair',
    icon: 'dryer',
    shortDescription: 'Fast, reliable dryer repair services for gas and electric units.',
    description: 'Whether your dryer is not heating, making unusual noises, or failing to start, our technicians have the expertise to restore it to optimal performance.',
    features: [
      'Gas and electric dryer repair',
      'Heating element replacement',
      'Thermal fuse repair',
      'Drum and belt service',
      'Ventilation inspection included',
    ],
    faqs: [
      {
        question: 'Why is my dryer not heating?',
        answer: 'Common causes include a faulty heating element, broken thermal fuse, or gas igniter issues. We diagnose and repair all heating problems.',
      },
      {
        question: 'How often should I clean my dryer vent?',
        answer: 'We recommend professional dryer vent cleaning at least once a year to prevent fire hazards and improve efficiency.',
      },
    ],
    image: 'https://images.pexels.com/photos/5591464/pexels-photo-5591464.jpeg',
  },
  {
    id: '4',
    name: 'Dishwasher Repair',
    slug: 'dishwasher-repair',
    icon: 'dishwasher',
    shortDescription: 'Expert dishwasher repair for premium brands like Miele, Bosch, and Thermador.',
    description: 'Our dishwasher repair services cover everything from drainage issues to electronic control failures. We ensure your dishes come out spotless every time.',
    features: [
      'All major brands serviced',
      'Pump and motor repair',
      'Door latch replacement',
      'Spray arm and rack repair',
      'Water inlet valve service',
    ],
    faqs: [
      {
        question: 'Why are my dishes still dirty after washing?',
        answer: 'This could be due to clogged spray arms, a faulty wash pump, or water temperature issues. We will diagnose and resolve the problem.',
      },
      {
        question: 'My dishwasher won\'t drain. What should I do?',
        answer: 'Contact us immediately. Drainage issues can be caused by clogged filters, pump failures, or drain hose problems.',
      },
    ],
    image: 'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg',
  },
  {
    id: '5',
    name: 'Oven & Range Repair',
    slug: 'oven-range-repair',
    icon: 'oven',
    shortDescription: 'Comprehensive oven and range repair for Wolf, Viking, and Thermador.',
    description: 'From temperature calibration to igniter replacement, our technicians are trained to service the most sophisticated cooking appliances on the market.',
    features: [
      'Gas and electric oven repair',
      'Igniter and burner service',
      'Temperature calibration',
      'Door seal replacement',
      'Self-cleaning system repair',
    ],
    faqs: [
      {
        question: 'My oven is not heating evenly. Can you fix it?',
        answer: 'Yes, uneven heating is often caused by a faulty heating element, temperature sensor, or convection fan. We repair all of these issues.',
      },
      {
        question: 'Do you repair commercial-style ranges?',
        answer: 'Absolutely. We specialize in Viking, Wolf, and other professional-grade ranges.',
      },
    ],
    image: 'https://images.pexels.com/photos/6996086/pexels-photo-6996086.jpeg',
  },
  {
    id: '6',
    name: 'Cooktop Repair',
    slug: 'cooktop-repair',
    icon: 'cooktop',
    shortDescription: 'Professional cooktop repair for gas, electric, and induction models.',
    description: 'Our cooktop repair services cover all types including gas, electric, and induction cooktops from premium manufacturers.',
    features: [
      'Gas burner repair',
      'Induction cooktop service',
      'Electric element replacement',
      'Control panel repair',
      'Glass top replacement',
    ],
    faqs: [
      {
        question: 'My gas burner won\'t ignite. What\'s wrong?',
        answer: 'This is typically caused by a faulty igniter, clogged burner ports, or spark module issues. Our technicians can diagnose and repair it.',
      },
      {
        question: 'Can you repair cracked cooktop glass?',
        answer: 'Yes, we can replace damaged glass cooktop surfaces for most major brands.',
      },
    ],
    image: 'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg',
  },
  {
    id: '7',
    name: 'Freezer Repair',
    slug: 'freezer-repair',
    icon: 'freezer',
    shortDescription: 'Fast freezer repair to prevent food loss and restore optimal performance.',
    description: 'Freezer problems require immediate attention. Our technicians respond quickly to diagnose and repair issues before your food is compromised.',
    features: [
      'Emergency service available',
      'Compressor repair',
      'Thermostat replacement',
      'Defrost system repair',
      'Door seal service',
    ],
    faqs: [
      {
        question: 'My freezer is running but not freezing. What should I do?',
        answer: 'This could indicate a refrigerant leak, compressor issue, or thermostat failure. Call us for immediate diagnosis.',
      },
      {
        question: 'How do I know if my freezer needs repair?',
        answer: 'Signs include frost buildup, unusual noises, temperature fluctuations, or the unit running constantly.',
      },
    ],
    image: 'https://images.pexels.com/photos/5824884/pexels-photo-5824884.jpeg',
  },
  {
    id: '8',
    name: 'Ice Maker Repair',
    slug: 'ice-maker-repair',
    icon: 'iceMaker',
    shortDescription: 'Expert ice maker repair for built-in units and refrigerator ice makers.',
    description: 'From standalone ice machines to refrigerator-integrated units, we repair all types of ice makers with precision and expertise.',
    features: [
      'Built-in ice maker repair',
      'Refrigerator ice maker service',
      'Water line repair',
      'Bin and dispenser service',
      'Commercial ice machine repair',
    ],
    faqs: [
      {
        question: 'Why is my ice maker not making ice?',
        answer: 'Common causes include frozen water lines, faulty water inlet valves, or thermostat issues. We diagnose and fix all ice maker problems.',
      },
      {
        question: 'My ice tastes bad. What should I do?',
        answer: 'Bad-tasting ice is usually caused by a dirty water filter or contaminated water line. We can clean and service your ice maker.',
      },
    ],
    image: 'https://images.pexels.com/photos/5824885/pexels-photo-5824885.jpeg',
  },
  {
    id: '9',
    name: 'Stove Repair',
    slug: 'stove-repair',
    icon: 'stove',
    shortDescription: 'Complete stove repair services for all premium brands and models.',
    description: 'Our stove repair services ensure your cooking appliance operates safely and efficiently. We handle everything from burner issues to complete overhauls.',
    features: [
      'Gas and electric stove repair',
      'Burner replacement',
      'Thermostat calibration',
      'Safety valve service',
      'Complete diagnostics',
    ],
    faqs: [
      {
        question: 'I smell gas from my stove. What should I do?',
        answer: 'If you smell gas, turn off the stove, ventilate the area, and call us immediately. Do not use any electrical switches.',
      },
      {
        question: 'Can you convert my stove from natural gas to propane?',
        answer: 'Yes, we offer gas conversion services for most stove models.',
      },
    ],
    image: 'https://images.pexels.com/photos/6489116/pexels-photo-6489116.jpeg',
  },
];

// Brands - from live site (with repair page slugs)
// Premium/Featured Brands (with logos)
export const brands: Brand[] = [
  { name: 'Sub-Zero', slug: 'sub-zero-appliance-repair-service-nj', logo: 'https://appliancenj.com/wp-content/uploads/2021/06/Sub-zero-logo.jpg', featured: true },
  { name: 'Viking', slug: 'viking-appliance-repair-service-nj', logo: 'https://appliancenj.com/wp-content/uploads/2021/06/Viking-logo.jpg', featured: true },
  { name: 'Thermador', slug: 'thermador-appliance-repair-service-nj', logo: 'https://appliancenj.com/wp-content/uploads/2021/06/Thermador.png', featured: true },
  { name: 'Miele', slug: 'miele-appliance-repair-service-nj', logo: 'https://appliancenj.com/wp-content/uploads/2021/06/Miele-logo.png', featured: true },
  { name: 'Wolf', slug: 'wolf-appliance-repair-service-nj', logo: 'https://appliancenj.com/wp-content/uploads/2021/06/Wolf-logo.jpg', featured: true },
  // Major Brands
  { name: 'Samsung', slug: 'samsung-appliance-repair-service-nj' },
  { name: 'LG', slug: 'lg-appliance-repair-service-nj' },
  { name: 'Bosch', slug: 'bosch-appliance-repair-service-nj' },
  { name: 'KitchenAid', slug: 'kitchenaid-appliance-repair-service-nj' },
  { name: 'Jenn-Air', slug: 'jenn-air-appliance-repair-service-nj' },
  { name: 'Electrolux', slug: 'electrolux-appliance-repair-service-nj' },
  { name: 'Kenmore', slug: 'kenmore-appliance-repair-service-nj' },
  { name: 'GE', slug: 'general-electric-ge-appliance-repair-service-nj' },
  { name: 'GE Profile', slug: 'ge-profile-appliance-repair-service-nj' },
  { name: 'GE Monogram', slug: 'ge-monogram-appliance-repair-service-nj' },
  { name: 'GE Cafe', slug: 'ge-cafe-appliance-repair-service-nj' },
  { name: 'Maytag', slug: 'maytag-appliance-repair-service-nj' },
  { name: 'Whirlpool', slug: 'whirlpool-appliance-repair-service-nj' },
  { name: 'Frigidaire', slug: 'frigidaire-appliance-repair-service-nj' },
  // Additional Brands from live site
  { name: 'Admiral', slug: 'admiral-appliance-repair-service-nj' },
  { name: 'Amana', slug: 'amana-appliance-repair-service-nj' },
  { name: 'Americana', slug: 'americana-appliance-repair-service-nj' },
  { name: 'Asko', slug: 'asko-appliance-repair-service-nj' },
  { name: 'Avanti', slug: 'avanti-appliance-repair-service-nj' },
  { name: 'Caloric', slug: 'caloric-appliance-repair-service-nj' },
  { name: 'Dacor', slug: 'dacor-appliance-repair-service-nj' },
  { name: 'DCS', slug: 'dcs-appliance-repair-service-nj' },
  { name: 'Fisher & Paykel', slug: 'fisher-paykel-appliance-repair-service-nj' },
  { name: 'Gaggenau', slug: 'gaggenau-appliance-repair-service-nj' },
  { name: 'Hotpoint', slug: 'hotpoint-appliance-repair-service-nj' },
  { name: 'Kelvinator', slug: 'kelvinator-appliance-repair-service-nj' },
  { name: 'Kenmore 90 Series', slug: 'kenmore-90-series-appliance-repair-service-nj' },
  { name: 'Kenmore Oasis', slug: 'kenmore-oasis-appliance-repair-service-nj' },
  { name: 'Kenmore Galaxy', slug: 'kenmore-galaxy-appliance-repair-service-nj' },
  { name: 'Kenmore Superba', slug: 'kenmore-superba-appliance-repair-service-nj' },
  { name: 'LG Tromm', slug: 'lg-tromm-appliance-repair-service-nj' },
  { name: 'Magic Chef', slug: 'magic-chef-appliance-repair-service-nj' },
  { name: 'Maytag Performa', slug: 'maytag-perfoma-appliance-repair-service-nj' },
  { name: 'Maytag Neptune', slug: 'maytag-neptune-appliance-repair-service-nj' },
  { name: 'Maytag Atlantis', slug: 'maytag-atlantis-appliance-repair-service-nj' },
  { name: 'Maytag Bravos', slug: 'maytag-bravos-appliance-repair-service-nj' },
  { name: 'Maytag Centennial', slug: 'maytag-centennial-appliance-repair-service-nj' },
  { name: 'Maytag Gemini', slug: 'maytag-gemini-appliance-repair-service-nj' },
  { name: 'Roper', slug: 'roper-appliance-repair-service-nj' },
  { name: 'Speed Queen', slug: 'speed-queen-appliance-repair-service-nj' },
  { name: 'Tappan', slug: 'tappan-appliance-repair-service-nj' },
  { name: 'U Line', slug: 'u-line-appliance-repair-service-nj' },
  { name: 'Westinghouse', slug: 'westinghouse-appliance-repair-service-nj' },
  { name: 'Whirlpool Duet', slug: 'whirlpool-duet-appliance-repair-service-nj' },
  { name: 'Whirlpool Cabrio', slug: 'whirlpool-carbio-appliance-repair-service-nj' },
  { name: 'Whirlpool Gold', slug: 'whirlpool-gold-appliance-repair-service-nj' },
];

// Testimonials - from live site reviews
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ira K.',
    location: 'Monmouth County, NJ',
    rating: 5,
    text: 'Ilya was very punctual, friendly, and caring. That\'s rare. Highly recommend for laundry maintenance work.',
    service: 'Frigidaire Washer & Dryer Repair',
    date: '2024-11-15',
  },
  {
    id: '2',
    name: 'Marcus J.',
    location: 'Middlesex County, NJ',
    rating: 5,
    text: 'Recently lost your number and hired another company from the internet. So sorry I did.',
    service: 'Maytag Washer Repair',
    date: '2024-11-10',
  },
  {
    id: '3',
    name: 'Brian C.',
    location: 'Monmouth County, NJ',
    rating: 5,
    text: 'I called and was able to schedule an appointment right away. The technician arrived on time, identified the problem quickly, and fixed it on the spot.',
    service: 'LG Dishwasher Repair',
    date: '2024-11-05',
  },
  {
    id: '4',
    name: 'Frederick M.',
    location: 'Middlesex County, NJ',
    rating: 5,
    text: 'Came out the next day. Demonstrated knowledge of their craft. Repaired 3 appliances all at once.',
    service: 'Electrolux Multiple Appliance Repair',
    date: '2024-10-28',
  },
  {
    id: '5',
    name: 'Lisa C.',
    location: 'Monmouth County, NJ',
    rating: 5,
    text: 'Very good company. Fixed my stove through them. Very happy with the service and technician.',
    service: 'Bosch Stove Repair',
    date: '2024-10-20',
  },
  {
    id: '6',
    name: 'Natasha S.',
    location: 'Monmouth County, NJ',
    rating: 5,
    text: 'The technician, Josh was very knowledgeable. I would recommend this company to anyone needing refrigerator work.',
    service: 'Maytag Refrigerator Repair',
    date: '2024-10-15',
  },
  {
    id: '7',
    name: 'Alex K.',
    location: 'Middlesex County, NJ',
    rating: 5,
    text: 'Did a fine job, clean and reliable. I would hire them again.',
    service: 'Frigidaire Dishwasher Repair',
    date: '2024-10-10',
  },
  {
    id: '8',
    name: 'Tom M.',
    location: 'Monmouth County, NJ',
    rating: 5,
    text: 'I was impressed with the punctuality, professionalism and low fees. Great job.',
    service: 'Whirlpool Refrigerator Repair',
    date: '2024-10-05',
  },
  {
    id: '9',
    name: 'Anthony Z.',
    location: 'Middlesex County, NJ',
    rating: 5,
    text: 'I am so happy to have found your company. I will continue to use you and recommend your services to my friends.',
    service: 'GE Washer & Dryer Repair',
    date: '2024-09-28',
  },
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Michael Richardson',
    role: 'Founder & Master Technician',
    bio: 'With over 25 years of experience in luxury appliance repair, Michael founded Advanced Appliance Repair Service to bring premium service to discerning homeowners. He holds factory certifications from Sub-Zero, Wolf, and Viking.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
  },
  {
    id: '2',
    name: 'David Thompson',
    role: 'Senior Service Technician',
    bio: 'David specializes in refrigeration systems and has been with our team for 15 years. His expertise in Sub-Zero and Miele appliances is unparalleled in the region.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
  },
  {
    id: '3',
    name: 'James Wilson',
    role: 'Cooking Appliance Specialist',
    bio: 'James is our Wolf and Viking expert with specialized training in high-end cooking appliances. He brings 12 years of dedicated experience to every repair.',
    image: 'https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg',
  },
  {
    id: '4',
    name: 'Sarah Mitchell',
    role: 'Customer Service Manager',
    bio: 'Sarah ensures every client receives the white-glove service they deserve. She coordinates our scheduling to minimize wait times and maximize convenience.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
  },
];

// Service Areas - All 38 locations from live site (Monmouth & Middlesex Counties)
export const serviceAreas: ServiceArea[] = [
  { id: '1', name: 'Aberdeen', slug: 'appliance-repair-in-aberdeen-nj', county: 'Monmouth', state: 'NJ', description: 'Professional appliance repair services in Aberdeen, NJ. Same-day service available for all major kitchen and laundry appliances.', zipCodes: ['07747'] },
  { id: '2', name: 'Belford', slug: 'appliance-repair-belford-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Belford, NJ. Factory-authorized service for all major brands.', zipCodes: ['07718'] },
  { id: '3', name: 'Colts Neck', slug: 'appliance-repair-colts-neck-nj', county: 'Monmouth', state: 'NJ', description: 'Premium appliance repair services in Colts Neck, NJ. Serving luxury homes with expert care.', zipCodes: ['07722'] },
  { id: '4', name: 'Deal', slug: 'appliance-repair-in-deal-nj', county: 'Monmouth', state: 'NJ', description: 'Trusted appliance repair in Deal, NJ. Over 30 years of experience serving the shore community.', zipCodes: ['07723'] },
  { id: '5', name: 'Eatontown', slug: 'appliance-repair-eatontown-nj', county: 'Monmouth', state: 'NJ', description: 'Fast, reliable appliance repair in Eatontown, NJ. All major brands serviced.', zipCodes: ['07724'] },
  { id: '6', name: 'Edison', slug: 'appliance-repair-in-edison-nj', county: 'Middlesex', state: 'NJ', description: 'Professional appliance repair services in Edison, NJ. Same-day appointments available.', zipCodes: ['08817', '08818', '08820', '08837'] },
  { id: '7', name: 'Englishtown', slug: 'appliance-repair-in-englishtown-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Englishtown, NJ. Serving residential and commercial customers.', zipCodes: ['07726'] },
  { id: '8', name: 'Fair Haven', slug: 'appliance-repair-in-fair-haven-nj', county: 'Monmouth', state: 'NJ', description: 'Quality appliance repair in Fair Haven, NJ. Licensed, bonded, and insured technicians.', zipCodes: ['07704'] },
  { id: '9', name: 'Farmingdale', slug: 'appliance-repair-in-farmingdale-nj', county: 'Monmouth', state: 'NJ', description: 'Reliable appliance repair services in Farmingdale, NJ. Factory-authorized parts and service.', zipCodes: ['07727'] },
  { id: '10', name: 'Fords', slug: 'appliance-repair-in-fords-nj', county: 'Middlesex', state: 'NJ', description: 'Trusted appliance repair in Fords, NJ. Same-day service for most repairs.', zipCodes: ['08863'] },
  { id: '11', name: 'Freehold', slug: 'appliance-repair-in-freehold-nj', county: 'Monmouth', state: 'NJ', description: 'Comprehensive appliance repair in Freehold, NJ. Serving the historic downtown and surrounding areas.', zipCodes: ['07728'] },
  { id: '12', name: 'Hazlet', slug: 'appliance-repair-in-hazlet-nj', county: 'Monmouth', state: 'NJ', description: 'Professional appliance repair in Hazlet, NJ. Over 30 years of experience.', zipCodes: ['07730'] },
  { id: '13', name: 'Holmdel', slug: 'appliance-repair-in-holmdel-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Holmdel, NJ. Specializing in high-end appliances.', zipCodes: ['07733'] },
  { id: '14', name: 'Keansburg', slug: 'appliance-repair-in-keansburg-nj', county: 'Monmouth', state: 'NJ', description: 'Reliable appliance repair in Keansburg, NJ. Fast turnaround times.', zipCodes: ['07734'] },
  { id: '15', name: 'Keyport', slug: 'appliance-repair-in-keyport-nj', county: 'Monmouth', state: 'NJ', description: 'Quality appliance repair in Keyport, NJ. All major brands serviced.', zipCodes: ['07735'] },
  { id: '16', name: 'Leonardo', slug: 'appliance-repair-in-leonardo-nj', county: 'Monmouth', state: 'NJ', description: 'Trusted appliance repair in Leonardo, NJ. Factory-authorized service center.', zipCodes: ['07737'] },
  { id: '17', name: 'Lincroft', slug: 'appliance-repair-in-lincroft-nj', county: 'Monmouth', state: 'NJ', description: 'Premium appliance repair in Lincroft, NJ. Serving luxury homes with care.', zipCodes: ['07738'] },
  { id: '18', name: 'Little Silver', slug: 'appliance-repair-in-little-silver-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Little Silver, NJ. Same-day appointments available.', zipCodes: ['07739'] },
  { id: '19', name: 'Manalapan', slug: 'appliance-repair-in-manalapan-nj', county: 'Monmouth', state: 'NJ', description: 'Professional appliance repair in Manalapan, NJ. All appliances serviced.', zipCodes: ['07726'] },
  { id: '20', name: 'Marlboro', slug: 'appliance-repair-marlboro-nj', county: 'Monmouth', state: 'NJ', description: 'Comprehensive appliance repair in Marlboro, NJ. Licensed and insured technicians.', zipCodes: ['07746'] },
  { id: '21', name: 'Matawan', slug: 'appliance-repair-in-matawan-nj', county: 'Monmouth', state: 'NJ', description: 'Reliable appliance repair in Matawan, NJ. Over 30 years serving the community.', zipCodes: ['07747'] },
  { id: '22', name: 'Metuchen', slug: 'appliance-repair-in-metuchen-nj', county: 'Middlesex', state: 'NJ', description: 'Quality appliance repair in Metuchen, NJ. Same-day service for most repairs.', zipCodes: ['08840'] },
  { id: '23', name: 'Middletown', slug: 'appliance-repair-in-middletown-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Middletown, NJ. All major brands and appliances.', zipCodes: ['07748'] },
  { id: '24', name: 'Morganville', slug: 'appliance-repair-in-morganville-nj', county: 'Monmouth', state: 'NJ', description: 'Our home base! Premium appliance repair services in Morganville, NJ. Factory-authorized for all major brands.', zipCodes: ['07751'] },
  { id: '25', name: 'Neptune', slug: 'appliance-repair-in-neptune-nj', county: 'Monmouth', state: 'NJ', description: 'Professional appliance repair in Neptune, NJ. Serving the shore community.', zipCodes: ['07753', '07754'] },
  { id: '26', name: 'Ocean', slug: 'appliance-repair-in-ocean-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Ocean Township, NJ. All major brands serviced with same-day availability.', zipCodes: ['07712'] },
  { id: '27', name: 'Oceanport', slug: 'appliance-repair-in-oceanport-nj', county: 'Monmouth', state: 'NJ', description: 'Trusted appliance repair in Oceanport, NJ. Fast, reliable service.', zipCodes: ['07757'] },
  { id: '28', name: 'Old Bridge', slug: 'appliance-repair-in-old-bridge-nj', county: 'Middlesex', state: 'NJ', description: 'Comprehensive appliance repair in Old Bridge, NJ. Same-day appointments available.', zipCodes: ['08857'] },
  { id: '29', name: 'Parlin', slug: 'appliance-repair-in-parlin-nj', county: 'Middlesex', state: 'NJ', description: 'Expert appliance repair in Parlin, NJ. All appliances and brands serviced.', zipCodes: ['08859'] },
  { id: '30', name: 'Perth Amboy', slug: 'appliance-repair-in-perth-amboy-nj', county: 'Middlesex', state: 'NJ', description: 'Reliable appliance repair in Perth Amboy, NJ. Over 30 years of experience.', zipCodes: ['08861', '08862'] },
  { id: '31', name: 'Port Monmouth', slug: 'appliance-repair-in-port-monmouth-nj', county: 'Monmouth', state: 'NJ', description: 'Quality appliance repair in Port Monmouth, NJ. Licensed and insured.', zipCodes: ['07758'] },
  { id: '32', name: 'Red Bank', slug: 'appliance-repair-in-red-bank-nj', county: 'Monmouth', state: 'NJ', description: 'Premium appliance repair in Red Bank, NJ. Serving downtown and surrounding areas.', zipCodes: ['07701', '07702'] },
  { id: '33', name: 'Rumson', slug: 'appliance-repair-in-rumson-nj', county: 'Monmouth', state: 'NJ', description: 'Luxury appliance repair in Rumson, NJ. Specializing in high-end brands.', zipCodes: ['07760'] },
  { id: '34', name: 'Sayreville', slug: 'appliance-repair-in-sayreville-nj', county: 'Middlesex', state: 'NJ', description: 'Professional appliance repair in Sayreville, NJ. All major brands serviced.', zipCodes: ['08871', '08872'] },
  { id: '35', name: 'Shrewsbury', slug: 'appliance-repair-in-shrewsbury-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Shrewsbury, NJ. Same-day service available.', zipCodes: ['07702'] },
  { id: '36', name: 'South Amboy', slug: 'appliance-repair-in-south-amboy-nj', county: 'Middlesex', state: 'NJ', description: 'Trusted appliance repair in South Amboy, NJ. Over 30 years of experience.', zipCodes: ['08879'] },
  { id: '37', name: 'Tinton Falls', slug: 'appliance-repair-in-tinton-falls-nj', county: 'Monmouth', state: 'NJ', description: 'Reliable appliance repair in Tinton Falls, NJ. Factory-authorized service.', zipCodes: ['07724', '07753'] },
  { id: '38', name: 'West Long Branch', slug: 'appliance-repair-in-west-long-branch-nj', county: 'Monmouth', state: 'NJ', description: 'Quality appliance repair in West Long Branch, NJ. All appliances and brands.', zipCodes: ['07764'] },
  { id: '39', name: 'Woodbridge', slug: 'appliance-repair-in-woodbridge-nj', county: 'Middlesex', state: 'NJ', description: 'Comprehensive appliance repair in Woodbridge, NJ. Same-day appointments available.', zipCodes: ['07095'] },
];

// Blog Posts - from live site
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'emergency-washer-repair-guide',
    title: 'Emergency Washer Repair: What to Do First',
    excerpt: 'Your washing machine just broke down mid-cycle. Water everywhere. Clothes soaking wet. What do you do first?',
    content: `A washer emergency can be stressful, but knowing what to do first can save you time, money, and prevent further damage to your home.

## Step 1: Turn Off the Water Supply

The first thing you should do is locate the water shut-off valves behind your washing machine and turn them off. This prevents flooding and water damage.

## Step 2: Unplug the Machine

Safety first! Unplug your washer from the electrical outlet to prevent any electrical hazards while you assess the situation.

## Step 3: Remove Standing Water

If there's water in the drum, you'll need to manually drain it. Most washers have a drain filter at the bottom front that you can access.

## Step 4: Call a Professional

While some issues can be DIY fixes, most washer problems require professional diagnosis. Our technicians can usually provide same-day service.

## Common Washer Emergencies

- Water not draining
- Excessive vibration or shaking
- Burning smell
- Error codes displayed
- Water leaking from bottom

Don't wait for small problems to become big ones. Contact Advanced Appliance for fast, reliable service.`,
    author: 'Advanced Appliance Team',
    date: '2024-11-20',
    image: 'https://appliancenj.com/wp-content/uploads/2016/04/ge-washer-metallic-silver.jpg',
    category: 'Tips',
    tags: ['Washer', 'Emergency', 'Repair', 'Tips'],
    readTime: 4,
  },
  {
    id: '2',
    slug: 'dryer-not-heating-guide',
    title: 'Dryer Not Heating? A 5-Step Troubleshooting Guide',
    excerpt: 'Is your dryer running but not producing heat? Here are 5 things to check before calling for service.',
    content: `A dryer that runs but doesn't heat is one of the most common appliance problems we see. Here's what you can check before calling us.

## Step 1: Check the Power

Electric dryers require 240V power. If one leg of power is out, the dryer will run but won't heat. Check your circuit breaker.

## Step 2: Clean the Lint Filter

A clogged lint filter restricts airflow and can cause heating issues. Clean it before every load.

## Step 3: Inspect the Vent

A blocked dryer vent is a common cause of heating problems. Check for lint buildup and kinks in the vent hose.

## Step 4: Check Gas Supply (Gas Dryers)

If you have a gas dryer, ensure the gas valve is fully open and the pilot light is lit (on older models).

## Step 5: Listen for the Igniter

On gas dryers, you should hear a clicking sound when the igniter activates. No click might mean a faulty igniter.

## When to Call a Pro

If these steps don't solve the problem, you likely have a faulty heating element, thermal fuse, or thermostat. These repairs require professional service.`,
    author: 'Advanced Appliance Team',
    date: '2024-11-15',
    image: 'https://appliancenj.com/wp-content/uploads/2016/04/Dispatcher-dry-mini-main.jpg',
    category: 'Tips',
    tags: ['Dryer', 'Heating', 'Troubleshooting', 'Tips'],
    readTime: 5,
  },
  {
    id: '3',
    slug: 'dishwasher-not-draining-fix',
    title: 'How to Fix a Dishwasher Not Draining: A DIY Guide',
    excerpt: 'Standing water in your dishwasher? Before you call for service, try these simple fixes.',
    content: `A dishwasher that won't drain is frustrating, but many drainage problems have simple solutions you can try yourself.

## Check the Filter

Most dishwashers have a removable filter at the bottom of the tub. Remove it and clean out any food debris or buildup.

## Inspect the Drain Hose

The drain hose connects your dishwasher to your garbage disposal or sink drain. Check for kinks, clogs, or damage.

## Clear the Garbage Disposal

If your dishwasher drains through a garbage disposal, make sure the disposal is clear. Run it with water to ensure proper drainage.

## Check the Air Gap

If you have an air gap (the chrome cylinder on your sink), remove the cap and clean out any debris that might be blocking it.

## Run Hot Water First

Before starting your dishwasher, run hot water in your sink until it's hot. This ensures your dishwasher starts with hot water.

## When DIY Won't Work

If these steps don't solve your drainage problem, you may have a faulty drain pump, clogged drain valve, or other mechanical issue. That's when you need our expert technicians.`,
    author: 'Advanced Appliance Team',
    date: '2024-11-10',
    image: 'https://appliancenj.com/wp-content/uploads/2016/04/dishwasher-1.png',
    category: 'Tips',
    tags: ['Dishwasher', 'Draining', 'DIY', 'Tips'],
    readTime: 4,
  },
  {
    id: '4',
    slug: 'kitchen-appliance-repair-guide',
    title: 'Kitchen Appliance Repair: A Complete Homeowner\'s Guide',
    excerpt: 'Everything you need to know about maintaining and repairing your kitchen appliances.',
    content: `Your kitchen appliances are some of the most important and heavily used items in your home. Here's your complete guide to keeping them running smoothly.

## Refrigerator Care

- Clean condenser coils every 6-12 months
- Check door seals regularly
- Keep temperature between 35-38°F
- Don't overfill - air needs to circulate

## Dishwasher Maintenance

- Clean the filter monthly
- Run an empty cycle with vinegar quarterly
- Check spray arms for clogs
- Use the right detergent

## Oven & Range Tips

- Clean spills promptly
- Check igniter performance
- Calibrate temperature annually
- Replace worn seals

## When to Call a Professional

Some repairs are best left to the experts:
- Gas line issues
- Electrical problems
- Compressor failures
- Electronic control boards

Advanced Appliance has been serving Monmouth and Middlesex counties for over 30 years. We're factory-authorized for all major brands.`,
    author: 'Advanced Appliance Team',
    date: '2024-11-05',
    image: 'https://appliancenj.com/wp-content/uploads/2016/04/oven.png',
    category: 'Guide',
    tags: ['Kitchen', 'Appliances', 'Maintenance', 'Guide'],
    readTime: 6,
  },
];

// Certifications
export const certifications: Certification[] = [
  { name: 'Sub-Zero Certified', issuer: 'Sub-Zero Group', year: '2024' },
  { name: 'Wolf Factory Trained', issuer: 'Wolf Appliance', year: '2024' },
  { name: 'Viking Authorized Service', issuer: 'Viking Range', year: '2024' },
  { name: 'Thermador Certified', issuer: 'BSH Home Appliances', year: '2024' },
  { name: 'Miele Premier Partner', issuer: 'Miele', year: '2024' },
  { name: 'EPA 608 Certified', issuer: 'EPA', year: '2023' },
];

// Trust Badges - matching live site
export const trustBadges = [
  { title: '$100 Diagnostic Fee', description: 'Plus parts and labor. No hidden fees' },
  { title: '24/7 Assistance', description: 'Live operators available around the clock' },
  { title: 'Same Day Service', description: 'Schedule today, service tomorrow' },
  { title: '90-180 Day Warranty', description: 'Coverage on parts with matching labor warranty' },
  { title: '30+ Years Experience', description: 'Factory-authorized since 1992' },
  { title: 'Genuine OEM Parts', description: 'We use only manufacturer parts' },
];

// Specials/Offers - from live site
export const specials = [
  {
    title: '$100 Diagnostic Fee',
    description: 'Plus parts and labor. No other hidden fees.',
    icon: 'diagnostic'
  },
  {
    title: '10% OFF Special',
    description: 'Submit a Google review for 10% off your next appointment.',
    icon: 'discount'
  },
  {
    title: '$129 Appliance Tune-Up',
    description: 'Regular maintenance recommended every 4 years.',
    icon: 'maintenance'
  },
];

// How It Works - 3 step process from live site
export const howItWorks = [
  {
    step: 1,
    title: 'Book',
    description: 'Schedule an appointment for a convenient time that works for you.',
    icon: 'book'
  },
  {
    step: 2,
    title: 'Repair',
    description: 'We diagnose the issue, explain the problem, and repair your appliance.',
    icon: 'repair'
  },
  {
    step: 3,
    title: 'Relax',
    description: 'Our 90-180 day warranty covers all repairs on parts and labor.',
    icon: 'relax'
  },
];

// FAQs - matching live site
export const generalFaqs: FAQ[] = [
  {
    question: 'What areas do you serve?',
    answer: 'We provide appliance repair services throughout Monmouth and Middlesex counties in Central New Jersey, including Morganville, Marlboro, Holmdel, Red Bank, Freehold, Old Bridge, Edison, and 30+ other communities.',
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes! Schedule your appointment today, and we can often provide service tomorrow. For emergencies, same-day service may be available.',
  },
  {
    question: 'What brands do you repair?',
    answer: 'We are factory-authorized for Sub-Zero, Viking, Thermador, Miele, and Wolf. We also service Samsung, LG, Bosch, KitchenAid, Whirlpool, GE, Maytag, Kenmore, Jenn-Air, Electrolux, and many more.',
  },
  {
    question: 'Do you provide warranties on repairs?',
    answer: 'Yes, all our repairs come with a 90-180 day warranty on parts with matching labor warranty coverage.',
  },
  {
    question: 'How much does a service call cost?',
    answer: 'Our diagnostic fee is $100, plus parts and labor. No hidden fees. We provide a complete estimate before beginning any work.',
  },
  {
    question: 'Are your technicians factory trained?',
    answer: 'Yes! Our technicians receive continuous factory training from major manufacturers. We have been in business since 1992 - over 30 years of experience.',
  },
  {
    question: 'What appliances do you repair?',
    answer: 'We repair all major kitchen and laundry appliances including refrigerators, washers, dryers, dishwashers, ovens, ranges, cooktops, freezers, and stoves - both gas and electric.',
  },
  {
    question: 'Do you use genuine parts?',
    answer: 'Yes, we use only genuine OEM (Original Equipment Manufacturer) parts for all repairs to ensure quality and reliability.',
  },
];
