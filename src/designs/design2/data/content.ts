// Content Data for Design 2 - Modern Heritage Theme

import { Service } from '../types';

// Re-export everything from design1 except services and images
export { businessInfo, brands, testimonials, teamMembers, serviceAreas, blogPosts, certifications, trustBadges, generalFaqs } from '../../design1/data/content';

// Design 2 specific images
export const images = {
  hero: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
  kitchen: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
  living: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
  about: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg',
  team: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
  contact: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
};

// Services with appropriate appliance images
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
    image: 'https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg',
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
