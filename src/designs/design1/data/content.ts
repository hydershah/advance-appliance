// Content Data for Design 1 - Elegant Minimalist Theme

import { Service, Testimonial, TeamMember, BlogPost, ServiceArea, Brand, Certification, FAQ } from '../types';

// Business Information
export const businessInfo = {
  name: 'Advanced Appliance Repair Service',
  tagline: 'Premium Appliance Care for Discerning Homes',
  phone: '(732) 416-7430',
  email: 'service@advancedappliancerepair.com',
  address: '123 Main Street, Millburn, NJ 07041',
  hours: {
    weekdays: '7:00 AM - 8:00 PM',
    saturday: '8:00 AM - 6:00 PM',
    sunday: '9:00 AM - 4:00 PM',
  },
  socialMedia: {
    facebook: 'https://facebook.com/advancedappliancerepair',
    instagram: 'https://instagram.com/advancedappliancerepair',
    twitter: 'https://twitter.com/advapprepair',
    linkedin: 'https://linkedin.com/company/advancedappliancerepair',
  },
};

// Images
export const images = {
  hero: 'https://images.pexels.com/photos/19227216/pexels-photo-19227216.jpeg',
  kitchen: 'https://images.pexels.com/photos/10099318/pexels-photo-10099318.jpeg',
  living: 'https://images.pexels.com/photos/19689230/pexels-photo-19689230.jpeg',
  about: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg',
  team: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
  contact: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
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
      '90-day warranty on all repairs',
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

// Brands
export const brands: Brand[] = [
  { name: 'Sub-Zero' },
  { name: 'Viking' },
  { name: 'Wolf' },
  { name: 'Thermador' },
  { name: 'Miele' },
  { name: 'Bosch' },
  { name: 'Gaggenau' },
  { name: 'Liebherr' },
  { name: 'Dacor' },
  { name: 'La Cornue' },
  { name: 'Bertazzoni' },
  { name: 'Fisher & Paykel' },
  { name: 'JennAir' },
  { name: 'Monogram' },
  { name: 'KitchenAid' },
  { name: 'Electrolux' },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Elizabeth Montgomery',
    location: 'Short Hills, NJ',
    rating: 5,
    text: 'Exceptional service from start to finish. The technician arrived promptly, diagnosed the issue with my Sub-Zero refrigerator immediately, and had it running perfectly within an hour. True professionals.',
    service: 'Refrigerator Repair',
    date: '2024-11-15',
  },
  {
    id: '2',
    name: 'Jonathan Whitmore',
    location: 'Summit, NJ',
    rating: 5,
    text: 'Our Wolf range stopped working right before a dinner party. Advanced Appliance came out the same day and saved the evening. Cannot recommend them highly enough.',
    service: 'Oven & Range Repair',
    date: '2024-11-10',
  },
  {
    id: '3',
    name: 'Catherine Chen',
    location: 'Millburn, NJ',
    rating: 5,
    text: 'The level of expertise and professionalism is unmatched. They repaired our Miele dishwasher when other companies said it could not be fixed. Outstanding work.',
    service: 'Dishwasher Repair',
    date: '2024-11-05',
  },
  {
    id: '4',
    name: 'Robert Sterling',
    location: 'Chatham, NJ',
    rating: 5,
    text: 'I have been using Advanced Appliance for years. They maintain all my high-end kitchen appliances and the service is always impeccable. Worth every penny.',
    service: 'Multiple Services',
    date: '2024-10-28',
  },
  {
    id: '5',
    name: 'Patricia Anderson',
    location: 'Morganville, NJ',
    rating: 5,
    text: 'Fast, courteous, and extremely knowledgeable. Fixed our Thermador cooktop issue that two other companies could not diagnose. Finally, a repair company that knows luxury appliances.',
    service: 'Cooktop Repair',
    date: '2024-10-20',
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

// Service Areas
export const serviceAreas: ServiceArea[] = [
  {
    id: '1',
    name: 'Short Hills',
    slug: 'short-hills',
    county: 'Essex',
    state: 'NJ',
    description: 'Serving the prestigious Short Hills community with premium appliance repair services. Our technicians are familiar with the high-end appliances common in this distinguished neighborhood.',
    zipCodes: ['07078'],
  },
  {
    id: '2',
    name: 'Summit',
    slug: 'summit',
    county: 'Union',
    state: 'NJ',
    description: 'Summit residents trust Advanced Appliance for their luxury kitchen and laundry appliance needs. We provide prompt, professional service to this beautiful community.',
    zipCodes: ['07901', '07902'],
  },
  {
    id: '3',
    name: 'Chatham',
    slug: 'chatham',
    county: 'Morris',
    state: 'NJ',
    description: 'The Chatham community relies on our expertise for all their premium appliance repair needs. We serve both Chatham Borough and Chatham Township.',
    zipCodes: ['07928', '07935'],
  },
  {
    id: '4',
    name: 'Millburn',
    slug: 'millburn',
    county: 'Essex',
    state: 'NJ',
    description: 'Millburn homeowners appreciate our attention to detail and specialized knowledge of luxury appliances. We proudly serve this distinguished community.',
    zipCodes: ['07041'],
  },
  {
    id: '5',
    name: 'Morganville',
    slug: 'morganville',
    county: 'Monmouth',
    state: 'NJ',
    description: 'Extending our premium appliance repair services to Morganville and the greater Monmouth County area. Same exceptional service, same expert technicians.',
    zipCodes: ['07751'],
  },
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'maintaining-your-sub-zero-refrigerator',
    title: 'The Complete Guide to Maintaining Your Sub-Zero Refrigerator',
    excerpt: 'Learn the essential maintenance tips that will keep your Sub-Zero running perfectly for decades.',
    content: `Your Sub-Zero refrigerator is a significant investment in your home's functionality and value. With proper care, these exceptional appliances can last 20 years or more. Here are our expert tips for maintaining your Sub-Zero.

## Regular Cleaning

The condenser should be cleaned every 6-12 months, depending on your environment. Pet owners or those in dusty areas should clean more frequently. A dirty condenser forces the compressor to work harder, reducing efficiency and lifespan.

## Door Seals

Inspect your door seals monthly for any signs of wear or damage. A tight seal is essential for maintaining proper temperature and preventing frost buildup.

## Temperature Settings

Sub-Zero refrigerators should be set between 36-38 degrees Fahrenheit, with the freezer at 0-5 degrees. These precise temperatures ensure optimal food preservation.

## Professional Service

We recommend annual professional inspections to catch potential issues before they become costly repairs. Our technicians are factory-trained and know every Sub-Zero model intimately.`,
    author: 'Michael Richardson',
    date: '2024-11-20',
    image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg',
    category: 'Maintenance',
    tags: ['Sub-Zero', 'Refrigerator', 'Maintenance', 'Tips'],
    readTime: 5,
  },
  {
    id: '2',
    slug: 'wolf-range-troubleshooting',
    title: 'Common Wolf Range Issues and How to Address Them',
    excerpt: 'Expert insights into the most frequent Wolf range problems and when to call for professional help.',
    content: `Wolf ranges are renowned for their professional-grade performance, but like any sophisticated appliance, they can experience issues. Here's what to watch for.

## Igniter Problems

If your burners are slow to light or clicking continuously, the igniter may need attention. While you can clean around the igniter carefully, replacement should be done by a certified technician.

## Uneven Heating

If your oven heats unevenly, first check that the racks are properly positioned. If the problem persists, you may have a failing heating element or convection fan.

## Temperature Calibration

Over time, oven temperatures can drift. If your dishes are consistently over or undercooked, professional calibration may be needed.

## When to Call Us

While some minor maintenance can be done at home, Wolf ranges contain sophisticated components that require expert attention. If you notice any unusual behavior, contact us for a professional diagnosis.`,
    author: 'James Wilson',
    date: '2024-11-15',
    image: 'https://images.pexels.com/photos/6996086/pexels-photo-6996086.jpeg',
    category: 'Troubleshooting',
    tags: ['Wolf', 'Range', 'Troubleshooting', 'Repair'],
    readTime: 4,
  },
  {
    id: '3',
    slug: 'choosing-right-luxury-appliances',
    title: 'How to Choose the Right Luxury Appliances for Your Kitchen',
    excerpt: 'A comprehensive guide to selecting premium kitchen appliances that match your lifestyle and cooking needs.',
    content: `Investing in luxury kitchen appliances is a decision that will impact your daily life for years to come. Here's how to choose wisely.

## Assess Your Cooking Style

Are you a serious home chef who needs professional-grade performance? Or do you prefer simple, reliable appliances that require minimal attention? Your cooking style should drive your choices.

## Consider Integration

Modern luxury kitchens often feature integrated appliances that blend seamlessly with cabinetry. Brands like Sub-Zero, Miele, and Thermador offer excellent panel-ready options.

## Think Long-Term

Quality appliances are investments. Consider not just the purchase price, but the total cost of ownership including energy efficiency, maintenance, and repair availability.

## Brand Reputation

We recommend brands with strong service networks and available parts. Sub-Zero, Wolf, Viking, and Miele all excel in this regard.

## Work with Experts

Before making your final decision, consult with kitchen designers and appliance specialists who can help you select the perfect combination for your needs.`,
    author: 'Michael Richardson',
    date: '2024-11-10',
    image: 'https://images.pexels.com/photos/10099318/pexels-photo-10099318.jpeg',
    category: 'Buying Guide',
    tags: ['Buying Guide', 'Luxury Appliances', 'Kitchen Design'],
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

// Trust Badges
export const trustBadges = [
  { title: 'Licensed & Insured', description: 'Fully licensed and insured for your protection' },
  { title: 'Factory Certified', description: 'Trained and certified by major manufacturers' },
  { title: 'Same Day Service', description: 'Emergency same-day service available' },
  { title: '90-Day Warranty', description: 'All repairs backed by our warranty' },
  { title: '25+ Years Experience', description: 'Decades of luxury appliance expertise' },
  { title: 'Genuine Parts', description: 'We use only OEM replacement parts' },
];

// FAQs
export const generalFaqs: FAQ[] = [
  {
    question: 'What areas do you serve?',
    answer: 'We provide luxury appliance repair services throughout Essex, Union, Morris, and Monmouth counties in New Jersey, including Short Hills, Summit, Chatham, Millburn, and Morganville.',
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes, we offer same-day service for most appliance emergencies. Call us before noon for the best chance of same-day availability.',
  },
  {
    question: 'What brands do you repair?',
    answer: 'We specialize in premium brands including Sub-Zero, Viking, Wolf, Thermador, Miele, Bosch, Gaggenau, Liebherr, and many others.',
  },
  {
    question: 'Do you provide warranties on repairs?',
    answer: 'Yes, all our repairs come with a 90-day warranty on both parts and labor. We stand behind our work completely.',
  },
  {
    question: 'How much does a service call cost?',
    answer: 'Our diagnostic service fee is $89, which is waived if you proceed with the repair. We always provide transparent pricing before beginning any work.',
  },
  {
    question: 'Are your technicians factory trained?',
    answer: 'Yes, our technicians hold current factory certifications from all major luxury appliance manufacturers and undergo continuous training.',
  },
];
