// Content Data for Design 1 - Elegant Minimalist Theme

import { Service, Testimonial, TeamMember, BlogPost, ServiceArea, Brand, Certification, FAQ } from '../types';

// Business Information
export const businessInfo = {
  name: 'Advanced Appliance Repair Service',
  tagline: 'Professional Appliance Repair in Monmouth & Middlesex Counties, NJ',
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

// Images - local high-quality images
export const images = {
  logo: '/logo.png',
  favicon: '/favicon.ico',
  // Hero/Cover images for different pages
  hero: '/njhero-opt.webp',
  kitchen: '/why-choose-us.png',
  about: '/images/fleet-trucks.png',
  contact: '/Kitchen_Appliances_Photo_1.webp',
  team: '/technician-service.webp',
  services: '/Kitchen_Appliances_Photo_1.webp',
  brands: '/Appliances_Photo_1694007.webp',
  reviews: '/technician-service.webp',
  tips: '/Kitchen_Appliances_Photo_2.webp',
  serviceAreas: '/Appliances_Photo_7614540.webp',
  blog: '/Kitchen_Appliances_Photo.webp',
  living: '/Kitchen_Appliances_Photo.webp',
  // Process icons
  iconBook: '/icon-booking.png',
  iconRepair: '/icon-services.png',
  iconRelax: '/icon-contact.png',
  // Appliance images (cohesive gold-themed SVG icons from Material Design Icons - Apache 2.0)
  oven: '/images/oven-icon.svg',
  cooktop: '/images/cooktop-icon.svg',
  dishwasher: '/images/dishwasher-icon.svg',
  refrigerator: '/images/refrigerator-icon.svg',
  washer: '/images/washer-icon.svg',
  dryer: '/images/dryer-icon.svg',
  freezer: '/Appliances_Photo_1694007_2.webp',
  range: '/images/range-stove-repair.png',
  stove: '/Kitchen_Appliances_Photo_1.webp',
};

// Services
export const services: Service[] = [
  {
    id: '1',
    name: 'Refrigerator Repair',
    slug: 'refrigerator-repair',
    icon: 'refrigerator',
    shortDescription: 'Expert repair for all premier refrigerator brands including Sub-Zero, Viking, Miele, Thermador, KitchenAid, LG, Samsung, Jenn-Air, GE, and many more.',
    description: 'Our certified technicians specialize in repairing refrigerators from all major brands. From temperature regulation issues to compressor failures, we diagnose and resolve problems with precision and care.',
    longDescription: `Your refrigerator is the hardest-working appliance in your home, running 24 hours a day, 365 days a year to keep your food fresh and safe. When it breaks down, you need fast, reliable service from technicians who understand the complexity of modern refrigeration systems. At Advanced Appliance Repair Service, we have been repairing refrigerators throughout Monmouth and Middlesex Counties since 1992.

Our factory-trained technicians are certified to work on all major brands, from everyday models to premier units like Sub-Zero, Viking, and Thermador. We understand that premier refrigerators require specialized knowledge and genuine OEM parts to maintain their performance and warranty coverage. Whether you have a French door, side-by-side, top-freezer, or built-in refrigerator, we have the expertise to diagnose and repair it correctly the first time.

We stock our service vehicles with the most commonly needed parts, allowing us to complete most repairs in a single visit. For complex issues or specialty parts, we provide accurate timelines and keep you informed throughout the process. Our $100 diagnostic fee covers the service call, and all work is backed by our up to 1-year warranty on parts and labor.`,
    features: [
      'Prompt service scheduling',
      'Factory-trained technicians',
      'Genuine OEM replacement parts',
      'up to 1-year warranty on all repairs',
      'Sub-Zero, Viking, Thermador specialists',
      'Built-in and integrated unit experts',
      'Compressor and sealed system repair',
      'Ice maker and water dispenser service',
    ],
    commonProblems: [
      { title: 'Not Cooling Properly', description: 'Temperature fluctuations, warm spots, or complete cooling failure often indicate compressor, thermostat, or sealed system issues.' },
      { title: 'Excessive Frost Buildup', description: 'Ice accumulation in the freezer or refrigerator section typically points to defrost system malfunctions or door seal problems.' },
      { title: 'Water Leaking', description: 'Puddles under or inside your refrigerator can result from clogged drain lines, faulty water inlet valves, or damaged door gaskets.' },
      { title: 'Strange Noises', description: 'Clicking, buzzing, humming, or grinding sounds may indicate failing compressors, fan motors, or ice maker components.' },
      { title: 'Ice Maker Not Working', description: 'No ice production is commonly caused by frozen water lines, defective water inlet valves, or faulty ice maker modules.' },
      { title: 'Running Constantly', description: 'A refrigerator that never cycles off wastes energy and often signals dirty condenser coils, failing door seals, or thermostat issues.' },
    ],
    warningSigns: [
      'Food spoiling faster than usual',
      'Visible condensation inside the unit',
      'Ice buildup on freezer walls',
      'Unusual sounds during operation',
      'Higher than normal energy bills',
      'Water pooling under the refrigerator',
      'Warm spots in the refrigerator section',
      'Refrigerator running non-stop',
    ],
    repairProcess: [
      'Schedule your appointment online or by phone',
      'Our technician arrives on time in a fully-stocked service vehicle',
      'We perform a complete diagnostic assessment for a $100 fee',
      'You receive a detailed estimate before any repair work begins',
      'We complete the repair using genuine OEM parts',
      'We test the unit thoroughly to ensure proper operation',
      'You receive documentation and warranty information',
    ],
    preventionTips: [
      'Clean condenser coils every 6-12 months to maintain efficiency',
      'Check and replace door gaskets if they show signs of wear',
      'Keep the refrigerator at 37-40°F and freezer at 0°F',
      'Avoid overloading to allow proper air circulation',
      'Replace water filters every 6 months',
      'Clean the interior regularly to prevent odors and bacteria',
      'Leave space between the wall and refrigerator for ventilation',
    ],
    faqs: [
      {
        question: 'How long does a refrigerator repair typically take?',
        answer: 'Most refrigerator repairs are completed within 1-2 hours during a single visit. Complex issues involving compressors or sealed systems may require additional time or a follow-up visit for parts. We always provide accurate time estimates before beginning work.',
      },
      {
        question: 'Do you repair built-in refrigerators?',
        answer: 'Yes, we specialize in built-in and integrated refrigerators from Sub-Zero, Viking, Thermador, Miele, and other premier brands. Our technicians receive ongoing factory training to stay current with the latest models and technologies.',
      },
      {
        question: 'What brands do you service?',
        answer: 'We service all major brands including Sub-Zero, Viking, Wolf, Thermador, Miele, Bosch, Liebherr, Samsung, LG, GE, Whirlpool, KitchenAid, Frigidaire, Maytag, Kenmore, and many more.',
      },
      {
        question: 'Is it worth repairing an old refrigerator?',
        answer: 'Generally, if your refrigerator is less than 10-15 years old and the repair cost is less than half the price of a new unit, repair is usually the better choice. We provide honest assessments and will tell you if replacement makes more sense.',
      },
      {
        question: 'How much does refrigerator repair cost?',
        answer: 'Our diagnostic fee is $100, which is applied to the repair cost if you proceed. Total repair costs depend on the issue and parts needed. We provide a complete estimate before starting any work, so there are no surprises.',
      },
      {
        question: 'Can you repair a refrigerator that is not cooling at all?',
        answer: 'Yes, complete cooling failure can be caused by various issues including compressor failure, thermostat problems, or refrigerant leaks. Our technicians have the tools and expertise to diagnose and repair all cooling system problems.',
      },
    ],
    image: '/images/refrigerator-front.webp',
  },
  {
    id: '2',
    name: 'Washer Repair',
    slug: 'washer-repair',
    icon: 'washer',
    shortDescription: 'Professional washing machine repair for residential top-loading and front-loading units and laundry centers.',
    description: 'From front-load to top-load washers, our experts handle all types of washing machine repairs. We understand the intricacies of premier laundry appliances and provide meticulous service.',
    longDescription: `A broken washing machine disrupts your entire household routine. Piles of dirty laundry accumulate quickly, and trips to the laundromat are inconvenient and expensive. At Advanced Appliance Repair Service, we understand the urgency of washer repairs and offer fast, reliable service throughout Monmouth and Middlesex Counties in New Jersey.

Our technicians are factory-trained to repair all types of washing machines, from traditional top-loaders to sophisticated front-load units with steam cycles and smart connectivity. We specialize in brands like Miele, Bosch, Speed Queen, and LG, but we service all major manufacturers. With over 30 years of experience, we have seen every type of washer problem and know how to fix it right the first time.

Modern washing machines are complex appliances with electronic control boards, multiple sensors, and precision motors. Attempting DIY repairs can void warranties and cause additional damage. Our professional technicians have the diagnostic tools and genuine OEM parts needed to restore your washer to peak performance, backed by our up to 1-year warranty on all repairs.`,
    features: [
      'All washer types serviced',
      'Leak detection and repair',
      'Motor and pump replacement',
      'Electronic control board repair',
      'Washer maintenance tips included',
      'Front-load and top-load experts',
      'Drain and spin cycle repair',
      'Bearing and seal replacement',
    ],
    commonProblems: [
      { title: 'Not Draining', description: 'Water remaining in the drum after a cycle typically indicates pump failures, clogged drain hoses, or lid switch problems.' },
      { title: 'Won\'t Spin', description: 'Spin cycle failures are often caused by worn drive belts, faulty lid switches, motor coupling issues, or unbalanced loads.' },
      { title: 'Leaking Water', description: 'Leaks can originate from door seals, water inlet valves, drain hoses, or internal tub components.' },
      { title: 'Excessive Vibration', description: 'Violent shaking during spin cycles usually indicates worn shock absorbers, damaged suspension springs, or an unbalanced drum.' },
      { title: 'Won\'t Start', description: 'A washer that won\'t turn on may have electrical issues, faulty door latches, or failed control boards.' },
      { title: 'Unusual Odors', description: 'Musty or mildew smells often develop in front-load washers due to moisture trapped in door gaskets and detergent dispensers.' },
    ],
    warningSigns: [
      'Clothes still wet after spin cycle',
      'Water on the floor during or after washing',
      'Loud banging or thumping during operation',
      'Burning smell during use',
      'Error codes on the display panel',
      'Washer stops mid-cycle',
      'Unusual grinding or squealing noises',
      'Door won\'t lock or unlock properly',
    ],
    repairProcess: [
      'Contact us by phone or schedule online for prompt service',
      'Our technician arrives with common washer parts in stock',
      'We diagnose the problem with professional testing equipment',
      'You receive a detailed repair estimate before we begin',
      'Repairs are completed using manufacturer-approved parts',
      'We run test cycles to verify proper operation',
      'Your repair is covered by our up to 1-year warranty',
    ],
    preventionTips: [
      'Don\'t overload the washer - follow capacity guidelines',
      'Use HE detergent in high-efficiency machines',
      'Leave the door open after cycles to prevent mold',
      'Clean the detergent dispenser monthly',
      'Inspect and clean the drain pump filter regularly',
      'Check pockets for coins and debris before washing',
      'Level the machine to prevent excessive vibration',
      'Replace water supply hoses every 5 years',
    ],
    faqs: [
      {
        question: 'When should I contact a technician for washer repair?',
        answer: 'If your washing machine won\'t spin, won\'t drain, leaks water, makes loud noises, or leaves clothes soaking wet, it\'s best to contact a technician. Early service can prevent further damage to the washer\'s internal components.',
      },
      {
        question: 'Why is my washer not draining?',
        answer: 'Drain problems are often caused by clogged pump filters, blocked drain hoses, or pump system issues.',
      },
      {
        question: 'Why is my washing machine shaking or banging during the spin cycle?',
        answer: 'Excessive vibration can result from unbalanced loads, worn suspension components, or leveling problems.',
      },
      {
        question: 'Why are my clothes still soaking wet after the cycle?',
        answer: 'Clothes remaining wet usually indicate spin cycle issues, drainage problems, or control system concerns.',
      },
      {
        question: 'Why is my washer leaking water?',
        answer: 'Leaks may come from hoses, door seals, internal connections, or pump components.',
      },
      {
        question: 'Why does my washer smell bad?',
        answer: 'Odors can develop from detergent buildup, trapped moisture, or residue inside the drum or gasket area.',
      },
      {
        question: 'Do you use original manufacturer parts for washer repairs?',
        answer: 'Yes. We use OEM (original manufacturer) parts whenever possible to ensure proper performance and reliability. All repairs are backed by our parts and labor warranty.',
      },
    ],
    image: '/images/washer-front.webp',
    brandNames: ['LG', 'Samsung', 'Miele', 'Bosch', 'Speed Queen', 'GE', 'Whirlpool', 'Frigidaire', 'Kenmore', 'Maytag', 'Electrolux', 'Amana'],
  },
  {
    id: '3',
    name: 'Dryer Repair',
    slug: 'dryer-repair',
    icon: 'dryer',
    shortDescription: 'Fast, reliable dryer repair services for gas and electric units.',
    description: 'Whether your dryer is not heating, making unusual noises, or failing to start, our technicians have the expertise to restore it to optimal performance.',
    longDescription: `When your dryer stops working, laundry day becomes a major hassle. Wet clothes piling up, trips to the laundromat, and the inconvenience of air-drying can quickly become overwhelming. Advanced Appliance Repair Service provides fast, expert dryer repair throughout Monmouth and Middlesex Counties, getting your laundry routine back on track.

We repair both gas and electric dryers from all major manufacturers. Our technicians are trained to work on everything from basic models to sophisticated units with steam functions, sensor drying, and smart connectivity. We understand the differences between gas and electric systems and have the specialized tools needed to service both safely and effectively.

A dryer that isn\'t heating properly or takes multiple cycles to dry clothes isn\'t just inconvenient - it\'s costing you money on energy bills and may be a fire hazard if the issue involves the ventilation system. We always inspect the exhaust system as part of our service because clogged vents are the leading cause of dryer fires. Trust our 30+ years of experience to keep your dryer running safely and efficiently.`,
    features: [
      'Gas and electric dryer repair',
      'Heating element replacement',
      'Thermal control repair',
      'Drum and belt service',
      'Ventilation inspection included',
      'Gas valve and igniter service',
      'Motor and blower repair',
      'Control board diagnostics',
    ],
    commonProblems: [
      { title: 'Not Heating', description: 'No heat output is commonly caused by failed heating elements, blown thermal fuses, faulty gas igniters, or broken thermostats.' },
      { title: 'Takes Too Long to Dry', description: 'Extended drying times usually indicate restricted airflow from clogged vents, worn drum seals, or failing heating components.' },
      { title: 'Won\'t Start', description: 'A dryer that won\'t turn on may have door switch issues, thermal fuse failures, or control board problems.' },
      { title: 'Making Loud Noises', description: 'Squealing, thumping, or grinding sounds often indicate worn drum rollers, damaged belts, or failing bearings.' },
      { title: 'Drum Not Turning', description: 'A broken drive belt, worn drum rollers, or motor issues can prevent the drum from spinning.' },
      { title: 'Overheating', description: 'Excessive heat can result from clogged vents, failed thermostats, or malfunctioning cycling thermostats.' },
    ],
    warningSigns: [
      'Clothes taking multiple cycles to dry',
      'Dryer is hot to the touch on the outside',
      'Burning smell during operation',
      'Clothes are very hot but still damp',
      'Loud squealing, banging, or grinding noises',
      'Dryer shuts off before clothes are dry',
      'No heat coming from the dryer',
      'Excessive lint around the dryer',
    ],
    repairProcess: [
      'Schedule service online or call for an appointment',
      'Our technician arrives with common dryer parts and tools',
      'We perform complete diagnostics including vent inspection',
      'You receive an honest estimate before repairs begin',
      'Repairs are made with quality OEM components',
      'We test the dryer through a complete cycle',
      'All work is backed by our up to 1-year warranty',
    ],
    preventionTips: [
      'Clean the lint filter before every load',
      'Have the vent professionally cleaned annually',
      'Don\'t overload the dryer',
      'Use rigid metal vent duct, not flexible plastic',
      'Keep the area around the dryer clear',
      'Inspect the exterior vent flap regularly',
      'Don\'t dry items with rubber, plastic, or foam',
      'Schedule regular maintenance every 2-3 years',
    ],
    faqs: [
      {
        question: 'When should I contact a technician for dryer repair?',
        answer: 'If your dryer is not heating, takes too long to dry clothes, makes unusual noises, or won\'t start, it\'s best to contact a technician. Addressing problems early can prevent further damage and reduce the risk of overheating or airflow issues.',
      },
      {
        question: 'Why is my dryer not heating?',
        answer: 'A dryer that runs but produces no heat may have heating system issues, ignition problems, or thermal control components that need service.',
      },
      {
        question: 'Why is my dryer taking too long to dry clothes?',
        answer: 'Drying problems are often caused by restricted airflow, blocked vents, or heating performance issues. Proper airflow is essential for efficient drying.',
      },
      {
        question: 'Why is my dryer making loud noises?',
        answer: 'Grinding, squeaking, or thumping sounds may indicate worn drum components, rollers, or drive system parts that need service.',
      },
      {
        question: 'Why won\'t my dryer start?',
        answer: 'A dryer that won\'t start may have control system issues, door switch problems, or electrical supply concerns.',
      },
      {
        question: 'Is a burning smell from my dryer dangerous?',
        answer: 'Yes. A burning smell can indicate lint buildup, overheating components, or airflow restrictions. The dryer should be inspected before continued use.',
      },
      {
        question: 'Do you use original manufacturer parts for dryer repairs?',
        answer: 'Yes. We use OEM (original manufacturer) parts whenever possible to ensure reliable performance. All repairs are backed by our parts and labor warranty for peace of mind.',
      },
    ],
    image: '/images/dryer-front.webp',
    brandNames: ['LG', 'Samsung', 'Speed Queen', 'Bosch', 'Miele', 'KitchenAid', 'Jenn-Air', 'GE', 'Whirlpool', 'Frigidaire', 'Kenmore', 'Maytag'],
  },
  {
    id: '4',
    name: 'Dishwasher Repair',
    slug: 'dishwasher-repair',
    icon: 'dishwasher',
    shortDescription: 'Expert dishwasher repair for brands like Miele, Bosch, Samsung, LG, GE, KitchenAid, Jenn-Air, and many more.',
    description: 'Our dishwasher repair services cover everything from drainage issues to electronic control failures. We ensure your dishes come out spotless every time.',
    longDescription: `A malfunctioning dishwasher means hours of hand-washing dishes, wasted water, and the frustration of dealing with dirty dishes piling up in your sink. At Advanced Appliance Repair Service, we provide fast, professional dishwasher repair throughout Monmouth and Middlesex Counties, restoring this essential time-saving appliance to perfect working order.

Modern dishwashers are sophisticated appliances with multiple wash cycles, soil sensors, and efficient drying systems. Our technicians are factory-trained on brands like Miele, Bosch, Thermador, and KitchenAid, as well as all major manufacturers. We understand the unique requirements of European dishwashers and the specific issues that can affect different brands.

Whether your dishwasher won\'t drain, isn\'t cleaning properly, or is leaking water onto your kitchen floor, we have the expertise to diagnose and repair the problem quickly. We stock common parts on our service vehicles and use only genuine OEM components to ensure lasting repairs. Our goal is to complete your repair in a single visit whenever possible.`,
    features: [
      'All major brands serviced',
      'Pump and motor repair',
      'Door latch replacement',
      'Spray arm and rack repair',
      'Water inlet valve service',
      'Control board diagnostics',
      'Leak detection and repair',
      'European brand specialists',
    ],
    commonProblems: [
      { title: 'Not Draining', description: 'Standing water in the bottom of the dishwasher usually indicates drain pump failure, clogged filters, or blocked drain hoses.' },
      { title: 'Dishes Not Clean', description: 'Poor cleaning results from clogged spray arms, low water temperature, faulty wash pumps, or detergent dispenser issues.' },
      { title: 'Leaking Water', description: 'Leaks can come from worn door gaskets, faulty water inlet valves, cracked tubs, or loose hose connections.' },
      { title: 'Won\'t Start', description: 'A dishwasher that won\'t run may have door latch problems, control board failures, or electrical issues.' },
      { title: 'Not Drying Dishes', description: 'Wet dishes after the cycle indicate heating element failures, rinse aid dispenser problems, or vent issues.' },
      { title: 'Making Strange Noises', description: 'Grinding, humming, or squealing sounds often point to wash pump problems, spray arm obstructions, or motor issues.' },
    ],
    warningSigns: [
      'Water remaining in the bottom after cycles',
      'Dishes still dirty or spotty after washing',
      'Water leaking onto the floor',
      'Unusual sounds during operation',
      'Dishwasher not starting or stopping mid-cycle',
      'Dishes not drying properly',
      'Error codes on the display',
      'Detergent not dissolving completely',
    ],
    repairProcess: [
      'Book your appointment online or by phone',
      'Our technician arrives with diagnostic equipment and common parts',
      'We inspect all components and identify the problem',
      'You approve the repair estimate before we proceed',
      'We complete the repair with genuine manufacturer parts',
      'We run a test cycle to verify proper operation',
      'Your repair is protected by our up to 1-year warranty',
    ],
    preventionTips: [
      'Scrape dishes but don\'t pre-rinse excessively',
      'Clean the filter every month',
      'Run hot water at the sink before starting',
      'Use quality detergent and rinse aid',
      'Don\'t overload or block spray arms',
      'Clean spray arms periodically',
      'Run an empty cycle with dishwasher cleaner monthly',
      'Check the door gasket for debris and damage',
    ],
    faqs: [
      {
        question: 'When should I contact a technician for dishwasher repair?',
        answer: 'If your dishwasher won\'t start, won\'t drain, leaves dishes dirty, leaks water, or makes unusual noises, it\'s best to contact a technician. Early diagnosis can prevent further damage and restore proper cleaning performance.',
      },
      {
        question: 'Why is my dishwasher not draining?',
        answer: 'Drain problems are commonly caused by clogged filters, blocked drain hoses, or drainage system issues.',
      },
      {
        question: 'Why are my dishes still dirty after a wash cycle?',
        answer: 'Poor cleaning performance may be related to spray arm blockage, water circulation issues, or detergent problems.',
      },
      {
        question: 'Why is my dishwasher leaking water?',
        answer: 'Leaks may come from door seals, hose connections, or internal water components.',
      },
      {
        question: 'Why won\'t my dishwasher start?',
        answer: 'A dishwasher that won\'t start may have power supply issues, door latch problems, or control system concerns.',
      },
      {
        question: 'Why is my dishwasher making unusual noises?',
        answer: 'Grinding or humming sounds may indicate pump, motor, or circulation system issues.',
      },
      {
        question: 'Do you use original manufacturer parts for dishwasher repairs?',
        answer: 'Yes. We use OEM (original manufacturer) parts whenever possible to ensure reliable performance. All repairs are backed by our parts and labor warranty.',
      },
    ],
    image: '/images/dishwasher-front.webp',
    brandNames: ['Viking', 'Thermador', 'Miele', 'LG', 'Samsung', 'Bosch', 'KitchenAid', 'Jenn-Air', 'GE', 'Whirlpool', 'Frigidaire', 'Kenmore'],
  },
  {
    id: '5',
    name: 'Oven Repair',
    slug: 'oven-repair',
    icon: 'oven',
    shortDescription: 'Comprehensive oven repair for Wolf, Viking, Thermador, Miele, GE, Monogram, KitchenAid, Jenn-Air, Samsung, LG, and many more.',
    description: 'From temperature calibration to igniter replacement, our technicians are trained to service the most sophisticated cooking appliances on the market.',
    longDescription: `Your oven is the centerpiece of your kitchen, essential for preparing family meals, entertaining guests, and enjoying home-cooked food. When it malfunctions, your entire cooking routine is disrupted. Advanced Appliance Repair Service provides expert oven repair throughout Monmouth and Middlesex Counties, with specialized knowledge of premier brands.

We service professional-grade ovens from Wolf, Viking, Thermador, and other premier manufacturers. These commercial-style appliances require specialized training and genuine parts to maintain their exceptional performance. Our technicians understand the high standards expected by owners of these premier appliances and deliver service to match.

Whether you have a freestanding oven, wall oven, double oven, or professional-style cooking appliance, we have the expertise to repair it. We service both gas and electric models, including convection ovens, steam ovens, and smart ovens with WiFi connectivity. Safety is paramount with cooking appliances, and we ensure every repair meets manufacturer specifications.`,
    features: [
      'Gas and electric oven repair',
      'Igniter and burner service',
      'Temperature calibration',
      'Door seal replacement',
      'Self-cleaning system repair',
      'Convection fan service',
      'Control board repair',
      'Wolf, Viking, Thermador certified',
    ],
    commonProblems: [
      { title: 'Not Heating Properly', description: 'Incorrect temperatures can result from faulty heating elements, defective temperature sensors, or calibration issues.' },
      { title: 'Uneven Cooking', description: 'Hot spots and uneven results often indicate convection fan problems, heating element issues, or improper calibration.' },
      { title: 'Gas Igniter Problems', description: 'Weak or no ignition is typically caused by worn igniters, faulty gas valves, or spark module failures.' },
      { title: 'Self-Clean Not Working', description: 'Self-cleaning failures can result from door latch issues, temperature sensor problems, or control board malfunctions.' },
      { title: 'Door Won\'t Close', description: 'Door alignment issues, worn hinges, or broken springs can prevent proper door closure and heat retention.' },
      { title: 'Oven Light Not Working', description: 'Burned out bulbs, faulty sockets, or wiring issues can leave your oven interior dark.' },
    ],
    warningSigns: [
      'Food cooking unevenly or at wrong temperature',
      'Gas smell when oven is off',
      'Oven taking longer to preheat',
      'Self-cleaning cycle not working',
      'Oven not maintaining temperature',
      'Error codes on the display',
      'Strange clicking or sparking sounds',
      'Door not sealing properly',
    ],
    repairProcess: [
      'Contact us to schedule a convenient appointment',
      'Our certified technician arrives with specialized tools',
      'We perform thorough diagnostics and safety checks',
      'You receive a detailed estimate for your approval',
      'Repairs are completed with OEM parts',
      'We verify temperature accuracy and proper operation',
      'All repairs include our up to 1-year warranty',
    ],
    preventionTips: [
      'Clean spills promptly to prevent smoke and damage',
      'Use the self-cleaning feature sparingly',
      'Check and replace damaged door gaskets',
      'Don\'t line oven bottom with foil',
      'Keep burner ports and igniters clean',
      'Have gas connections inspected periodically',
      'Avoid slamming the oven door',
      'Schedule professional cleaning and inspection annually',
    ],
    faqs: [
      {
        question: 'When should I contact a technician for oven repair?',
        answer: 'If your oven won\'t heat, cooks unevenly, shows error codes, or trips the breaker, it\'s best to contact a technician. Addressing the issue early can prevent further damage and restore proper cooking performance.',
      },
      {
        question: 'Why is my oven not heating properly?',
        answer: 'Heating problems may be caused by heating system issues, temperature control problems, or internal components that require service.',
      },
      {
        question: 'Why is my oven cooking unevenly?',
        answer: 'Uneven cooking can result from temperature sensor issues, airflow problems, or heating element performance issues.',
      },
      {
        question: 'Why does my oven show an error code?',
        answer: 'Modern ovens display error codes when the system detects sensor, door lock, or control system problems that require service.',
      },
      {
        question: 'Why does my oven keep tripping the breaker?',
        answer: 'This may indicate electrical component issues, wiring concerns, or heating system problems.',
      },
      {
        question: 'Is it normal for an oven to make noise while heating?',
        answer: 'Some light clicking or fan noise is normal, but loud buzzing, grinding, or unusual sounds may indicate components that need inspection.',
      },
      {
        question: 'Do you use original manufacturer parts for oven repairs?',
        answer: 'Yes. We use OEM (original manufacturer) parts whenever possible to ensure reliable performance. All repairs are backed by our parts and labor warranty.',
      },
    ],
    image: '/images/oven-front.webp',
    brandNames: ['Viking', 'Thermador', 'Miele', 'Wolf', 'LG', 'Samsung', 'Bosch', 'KitchenAid', 'Jenn-Air', 'GE', 'Whirlpool', 'Frigidaire'],
  },
  {
    id: '6',
    name: 'Cooktop Repair',
    slug: 'cooktop-repair',
    icon: 'cooktop',
    shortDescription: 'Professional cooktop repair for gas, electric, and induction models.',
    description: 'Our cooktop repair services cover all types including gas, electric, and induction cooktops from all major manufacturers.',
    longDescription: `Cooktops are the workhorses of any kitchen, handling everything from quick weekday meals to elaborate weekend cooking projects. When a burner won\'t light, an element won\'t heat, or your induction cooktop displays an error code, you need expert repair service fast. Advanced Appliance Repair Service provides professional cooktop repair throughout Monmouth and Middlesex Counties.

We service all types of cooktops including gas, electric coil, smoothtop ceramic, and induction models. Each type presents unique repair challenges, from gas valve and igniter issues to cracked glass surfaces and induction board failures. Our technicians are trained on all technologies and carry the specialized parts and tools needed for each type of repair.

Induction cooktops have become increasingly popular in premier kitchens, and we have expertise in this advanced technology. We can diagnose and repair induction coil failures, control board issues, and cooling fan problems. For gas cooktops, we handle everything from simple igniter replacements to complex gas valve repairs, always prioritizing safety in every repair.`,
    features: [
      'Gas burner repair',
      'Induction cooktop service',
      'Electric element replacement',
      'Control panel repair',
      'Glass top replacement',
      'Igniter and spark module service',
      'Gas valve repair',
      'Touch control diagnostics',
    ],
    commonProblems: [
      { title: 'Gas Burner Won\'t Ignite', description: 'Ignition failures typically result from clogged burner ports, worn igniters, or faulty spark modules.' },
      { title: 'Electric Element Not Heating', description: 'Non-heating elements are usually caused by burned-out coils, faulty infinite switches, or wiring problems.' },
      { title: 'Induction Not Working', description: 'Induction failures can involve coil problems, control board issues, or incompatible cookware detection.' },
      { title: 'Cracked Glass Surface', description: 'Impact damage or extreme temperature changes can crack ceramic glass cooktop surfaces, requiring replacement.' },
      { title: 'Uneven Flame', description: 'Yellow, uneven, or weak flames indicate clogged burner ports, improper gas pressure, or air mixture problems.' },
      { title: 'Touch Controls Not Responding', description: 'Unresponsive touch controls may result from moisture, dirty surfaces, or failed control boards.' },
    ],
    warningSigns: [
      'Burner won\'t light or lights slowly',
      'Uneven or yellow gas flames',
      'Electric element not heating fully',
      'Clicking but no ignition',
      'Cracked or chipped glass surface',
      'Touch controls not responding',
      'Error codes on display',
      'Strange smells during use',
    ],
    repairProcess: [
      'Schedule your repair appointment at a convenient time',
      'Our technician arrives equipped for all cooktop types',
      'We diagnose the issue with specialized testing equipment',
      'You approve the estimate before work begins',
      'Repairs are completed with manufacturer parts',
      'We test all burners and functions',
      'Your repair is covered by our warranty',
    ],
    preventionTips: [
      'Keep burner ports clean and free of debris',
      'Clean spills promptly to prevent buildup',
      'Use flat-bottomed cookware on glass and induction surfaces',
      'Don\'t drag cookware across glass surfaces',
      'Avoid using oversized or warped pans',
      'Ensure proper ventilation for gas cooktops',
      'Use induction-compatible cookware',
      'Have gas connections inspected annually',
    ],
    faqs: [
      {
        question: 'When should I contact a technician for cooktop repair?',
        answer: 'If burners won\'t ignite, don\'t heat properly, click continuously, or controls stop responding, it\'s best to contact a technician to diagnose the problem and restore safe operation.',
      },
      {
        question: 'Why won\'t my gas burner ignite?',
        answer: 'This is often caused by clogged burner ports, worn igniters, or ignition module problems.',
      },
      {
        question: 'Why is my electric burner not heating properly?',
        answer: 'Electric elements may stop heating due to burned elements, switch problems, or wiring issues.',
      },
      {
        question: 'Why does my cooktop keep clicking?',
        answer: 'Constant clicking usually indicates moisture around the ignition switches or worn ignition components.',
      },
      {
        question: 'Can cracked glass cooktops be repaired?',
        answer: 'Minor issues may sometimes be repaired, but cracked glass cooktops usually require replacement for safety.',
      },
      {
        question: 'How long does cooktop repair usually take?',
        answer: 'Most cooktop repairs can be completed within about 1 hour during a single visit, depending on the issue.',
      },
      {
        question: 'Do you use original manufacturer parts?',
        answer: 'Yes. We use OEM (original manufacturer) parts whenever possible, and all repairs are backed by our parts and labor warranty.',
      },
    ],
    image: '/images/cooktop-front.webp',
  },
  {
    id: '7',
    name: 'Range Repair',
    slug: 'range-repair',
    icon: 'range',
    shortDescription: 'Expert range and stove repair for gas, electric, and dual-fuel models from all major brands including Viking, Wolf, Thermador, and more.',
    description: 'Our certified technicians specialize in repairing all types of ranges. From burner and oven issues to electronic control problems, we restore your range to full working order with genuine parts.',
    longDescription: `Your range is the centerpiece of your kitchen, combining cooktop and oven functionality in one essential appliance. When any part of your range stops working, it can bring your cooking to a halt. At Advanced Appliance Repair Service, we have been repairing ranges of all types throughout Monmouth and Middlesex Counties since 1992.

Our factory-trained technicians are experts in gas, electric, and dual-fuel range repair. We service all major brands including Viking, Wolf, Thermador, GE, Whirlpool, Samsung, LG, KitchenAid, Bosch, and many more. Whether you have a freestanding, slide-in, or professional-style range, we have the specialized knowledge to diagnose and repair it correctly.

Ranges combine multiple heating systems, gas connections, electronic controls, and mechanical components, making them one of the more complex appliances to repair. Our technicians understand these systems thoroughly and carry commonly needed parts on our service vehicles. Our $100 diagnostic fee covers the service call, and all work is backed by our up to 1-year warranty on parts and labor.`,
    features: [
      'Gas, electric, and dual-fuel expertise',
      'Factory-trained technicians',
      'Genuine OEM replacement parts',
      'Up to 1-year warranty on all repairs',
      'Viking, Wolf, Thermador specialists',
      'Slide-in, freestanding, and pro-style models',
      'Electronic control and ignition repair',
      'Gas leak detection and safety checks',
    ],
    commonProblems: [
      { title: 'Burners Not Lighting', description: 'Gas burners that won\'t ignite are commonly caused by clogged burner ports, faulty igniters, or spark module failures.' },
      { title: 'Oven Not Heating', description: 'An oven that won\'t heat can result from a bad igniter, faulty bake or broil element, or temperature sensor malfunction.' },
      { title: 'Uneven Cooking', description: 'Hot spots or uneven baking often indicates a failing heating element, malfunctioning convection fan, or temperature calibration issues.' },
      { title: 'Gas Smell', description: 'A persistent gas odor when burners are off is a safety concern that may indicate a leaking gas valve, loose connection, or cracked supply line.' },
      { title: 'Control Panel Issues', description: 'Unresponsive buttons, error codes, or display failures typically point to control board or touchpad problems.' },
      { title: 'Door Won\'t Close Properly', description: 'Misaligned doors, worn hinges, or broken springs prevent proper closure and cause heat loss during cooking.' },
    ],
    warningSigns: [
      'Gas odor when range is off',
      'Burners producing yellow or orange flames',
      'Oven temperature doesn\'t match setting',
      'Clicking sounds without ignition',
      'Error codes on the display',
      'Food cooking unevenly',
      'Range taking longer to heat up',
      'Sparking or arcing from electric elements',
    ],
    repairProcess: [
      'Schedule your repair appointment at a convenient time',
      'Our technician arrives equipped for gas and electric repairs',
      'We perform comprehensive diagnostics on all range systems',
      'You receive a detailed estimate before any work begins',
      'Repairs are completed with manufacturer-approved parts',
      'We test all burners, oven functions, and safety systems',
      'Your repair is covered by our warranty',
    ],
    preventionTips: [
      'Clean burner grates and ports regularly',
      'Wipe up spills promptly to prevent buildup',
      'Avoid using aluminum foil on the oven floor',
      'Run the self-clean cycle only 2-3 times per year',
      'Check and replace worn door gaskets',
      'Use properly sized cookware on burners',
      'Have gas connections inspected annually',
      'Keep ventilation openings clear and unblocked',
    ],
    faqs: [
      {
        question: 'My gas range keeps clicking but won\'t light. What should I do?',
        answer: 'Continuous clicking usually means the igniter is working but the burner isn\'t receiving gas properly. Clean the burner cap and ports with a pin or needle. If cleaning doesn\'t help, the spark module or gas valve may need service.',
      },
      {
        question: 'Is it safe to use my range if I smell gas?',
        answer: 'No. If you smell gas when all burners are off, turn off the gas supply, open windows, and leave the area. Do not use electrical switches or create sparks. Call your gas company first, then contact us for repair once the area is safe.',
      },
      {
        question: 'What\'s the difference between a range and a stove?',
        answer: 'The terms are often used interchangeably. Technically, a range combines a cooktop and oven in one unit. A stove historically referred to a heating device. In modern usage, both terms typically mean the same appliance.',
      },
      {
        question: 'Can you convert my range from natural gas to propane?',
        answer: 'Yes, most gas ranges can be converted between natural gas and propane with a conversion kit. This involves replacing orifices and adjusting the regulator. We can perform this conversion safely and ensure proper operation.',
      },
      {
        question: 'Why is my electric range element glowing but not heating properly?',
        answer: 'If the element glows red but doesn\'t produce enough heat, it may have a broken coil section, a faulty infinite switch, or a wiring issue. A partially broken element can still glow without reaching full temperature.',
      },
      {
        question: 'How long do ranges typically last?',
        answer: 'Gas ranges typically last 15-20 years, while electric ranges average 13-15 years. Premium brands often last longer with proper maintenance. If your range is under 10 years old, repair is usually more cost-effective than replacement.',
      },
    ],
    image: '/images/range-stove-repair.png',
  },
];


// Brands - from live site (with repair page slugs)
// Featured Brands (with logos)
export const brands: Brand[] = [
  { name: 'Sub-Zero', slug: 'sub-zero-appliance-repair-service-nj', logo: '/brands/sub-zero.jpg', featured: true },
  { name: 'Viking', slug: 'viking-appliance-repair-service-nj', logo: '/brands/viking.jpg', featured: true },
  { name: 'Thermador', slug: 'thermador-appliance-repair-service-nj', logo: '/brands/thermador.png', featured: true },
  { name: 'Miele', slug: 'miele-appliance-repair-service-nj', logo: '/brands/miele.png', featured: true },
  { name: 'Wolf', slug: 'wolf-appliance-repair-service-nj', logo: '/brands/wolf.jpg', featured: true },
  // Major Brands (Featured)
  { name: 'LG', slug: 'lg-appliance-repair-service-nj', logo: '/brands/lg.png', featured: true },
  { name: 'Samsung', slug: 'samsung-appliance-repair-service-nj', logo: '/brands/samsung.png', featured: true },
  { name: 'Bosch', slug: 'bosch-appliance-repair-service-nj', logo: '/brands/bosch.png', featured: true },
  { name: 'KitchenAid', slug: 'kitchenaid-appliance-repair-service-nj', logo: '/brands/kitchenaid.jpg', featured: true },
  { name: 'Jenn-Air', slug: 'jenn-air-appliance-repair-service-nj', logo: '/brands/jennair.png', featured: true },
  { name: 'GE', slug: 'general-electric-ge-appliance-repair-service-nj', logo: '/brands/ge.png', featured: true },
  { name: 'Whirlpool', slug: 'whirlpool-appliance-repair-service-nj', logo: '/brands/whirlpool.jpg', featured: true },
  { name: 'Frigidaire', slug: 'frigidaire-appliance-repair-service-nj', logo: '/brands/frigidaire.png', featured: true },
  { name: 'Kenmore', slug: 'kenmore-appliance-repair-service-nj', logo: '/brands/kenmore.png', featured: true },
  // Other Major Brands
  { name: 'Electrolux', slug: 'electrolux-appliance-repair-service-nj', logo: '/brands/electrolux.jpg' },
  { name: 'Maytag', slug: 'maytag-appliance-repair-service-nj', logo: '/brands/maytag.png' },
  { name: 'GE Profile', slug: 'ge-profile-appliance-repair-service-nj' },
  { name: 'GE Monogram', slug: 'ge-monogram-appliance-repair-service-nj' },
  { name: 'GE Cafe', slug: 'ge-cafe-appliance-repair-service-nj' },
  // Additional Brands from live site
  { name: 'Admiral', slug: 'admiral-appliance-repair-service-nj' },
  { name: 'Amana', slug: 'amana-appliance-repair-service-nj' },
  { name: 'Asko', slug: 'asko-appliance-repair-service-nj' },
  { name: 'Caloric', slug: 'caloric-appliance-repair-service-nj' },
  { name: 'Dacor', slug: 'dacor-appliance-repair-service-nj' },
  { name: 'DCS', slug: 'dcs-appliance-repair-service-nj' },
  { name: 'Fisher & Paykel', slug: 'fisher-paykel-appliance-repair-service-nj' },
  { name: 'Gaggenau', slug: 'gaggenau-appliance-repair-service-nj' },
  { name: 'Hotpoint', slug: 'hotpoint-appliance-repair-service-nj' },
  { name: 'Kenmore 90 Series', slug: 'kenmore-90-series-appliance-repair-service-nj' },
  { name: 'Kenmore Oasis', slug: 'kenmore-oasis-appliance-repair-service-nj' },
  { name: 'Kenmore Galaxy', slug: 'kenmore-galaxy-appliance-repair-service-nj' },
  { name: 'Kenmore Superba', slug: 'kenmore-superba-appliance-repair-service-nj' },
  { name: 'LG Tromm', slug: 'lg-tromm-appliance-repair-service-nj' },
  { name: 'Maytag Performa', slug: 'maytag-perfoma-appliance-repair-service-nj' },
  { name: 'Maytag Neptune', slug: 'maytag-neptune-appliance-repair-service-nj' },
  { name: 'Maytag Atlantis', slug: 'maytag-atlantis-appliance-repair-service-nj' },
  { name: 'Maytag Bravos', slug: 'maytag-bravos-appliance-repair-service-nj' },
  { name: 'Maytag Centennial', slug: 'maytag-centennial-appliance-repair-service-nj' },
  { name: 'Maytag Gemini', slug: 'maytag-gemini-appliance-repair-service-nj' },
  { name: 'Roper', slug: 'roper-appliance-repair-service-nj' },
  { name: 'Speed Queen', slug: 'speed-queen-appliance-repair-service-nj' },
  { name: 'U Line', slug: 'u-line-appliance-repair-service-nj' },
  { name: 'Whirlpool Duet', slug: 'whirlpool-duet-appliance-repair-service-nj' },
  { name: 'Whirlpool Cabrio', slug: 'whirlpool-carbio-appliance-repair-service-nj' },
  { name: 'Whirlpool Gold', slug: 'whirlpool-gold-appliance-repair-service-nj' },
];

// Testimonials - from live site reviews
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ira K.',
    location: 'Morganville, NJ',
    rating: 5,
    text: 'Ilya was very punctual, friendly, and caring. That\'s rare. Showed up the same morning I called, diagnosed the drum bearing, and had our Frigidaire stack running again by lunch. Highly recommend for laundry maintenance work.',
    service: 'Frigidaire Washer & Dryer Repair',
    date: '2024-11-15',
  },
  {
    id: '2',
    name: 'Marcus J.',
    location: 'Edison, NJ',
    rating: 5,
    text: 'Recently lost your number and hired another company from the internet. So sorry I did — they misdiagnosed a simple pump issue and tried to upsell a new machine. Advanced fixed it properly on the first visit and for less than half what the other company quoted.',
    service: 'Maytag Washer Repair',
    date: '2024-11-10',
  },
  {
    id: '3',
    name: 'Brian C.',
    location: 'Red Bank, NJ',
    rating: 5,
    text: 'I called and was able to schedule an appointment right away. The technician arrived on time, identified the LG dishwasher drain-pump issue quickly, and fixed it on the spot with a part he had on the truck. No second visit needed.',
    service: 'LG Dishwasher Repair',
    date: '2024-11-05',
  },
  {
    id: '4',
    name: 'Frederick M.',
    location: 'Woodbridge, NJ',
    rating: 5,
    text: 'Came out the next day. Demonstrated knowledge of their craft. Repaired 3 appliances all at once — fridge, dishwasher, and range — in a single service call. Saved me two trip charges and a full day off work.',
    service: 'Electrolux Multiple Appliance Repair',
    date: '2024-10-28',
  },
  {
    id: '5',
    name: 'Lisa C.',
    location: 'Holmdel, NJ',
    rating: 5,
    text: 'Very good company. Fixed my Bosch induction cooktop through them. Very happy with the service and technician — he explained exactly what the control-board issue was, showed me the burnt trace, and gave me a repair-vs-replace analysis in writing.',
    service: 'Bosch Cooktop Repair',
    date: '2024-10-20',
  },
  {
    id: '6',
    name: 'Natasha S.',
    location: 'Marlboro, NJ',
    rating: 5,
    text: 'The technician, Josh, was very knowledgeable. Diagnosed the Maytag refrigerator evaporator fan on the first visit and had the OEM part on the truck. I would recommend this company to anyone in Marlboro needing refrigerator work.',
    service: 'Maytag Refrigerator Repair',
    date: '2024-10-15',
  },
  {
    id: '7',
    name: 'Alex K.',
    location: 'Old Bridge, NJ',
    rating: 5,
    text: 'Did a fine job, clean and reliable. Put down drop cloths before starting, walked me through the Frigidaire dishwasher diagnosis, and cleaned up afterward. I would hire them again without hesitation.',
    service: 'Frigidaire Dishwasher Repair',
    date: '2024-10-10',
  },
  {
    id: '8',
    name: 'Tom M.',
    location: 'Middletown, NJ',
    rating: 5,
    text: 'I was impressed with the punctuality, professionalism and low fees. They were the only company that actually answered the phone at 8am, and the tech showed up within the promised window. Great job all around.',
    service: 'Whirlpool Refrigerator Repair',
    date: '2024-10-05',
  },
  {
    id: '9',
    name: 'Anthony Z.',
    location: 'Perth Amboy, NJ',
    rating: 5,
    text: 'I am so happy to have found your company. Fixed a GE laundry pair that three other companies said wasn\'t worth repairing. I will continue to use you and recommend your services to my friends.',
    service: 'GE Washer & Dryer Repair',
    date: '2024-09-28',
  },
  {
    id: '10',
    name: 'Patricia H.',
    location: 'Colts Neck, NJ',
    rating: 5,
    text: 'Our Sub-Zero built-in started running warm and we were quoted a $9,000 replacement by another company. Advanced diagnosed a condenser fan motor failure, replaced with an OEM part, and the unit has been running perfectly for eight months now. Saved us thousands.',
    service: 'Sub-Zero Refrigerator Repair',
    date: '2024-09-20',
  },
  {
    id: '11',
    name: 'Daniel R.',
    location: 'Rumson, NJ',
    rating: 5,
    text: 'Service was discreet, professional, and thorough. Coordinated with our property manager, protected the stone floors, and finished the Wolf range diagnostic in a single visit. This is who we will call from now on.',
    service: 'Wolf Range Repair',
    date: '2024-09-15',
  },
  {
    id: '12',
    name: 'Jessica T.',
    location: 'Freehold, NJ',
    rating: 5,
    text: 'Our Samsung dryer stopped heating two days before Thanksgiving. They got a tech out same-day, replaced the heating element and thermal fuse, and we had dry towels in time for guests. Lifesaver.',
    service: 'Samsung Dryer Repair',
    date: '2024-09-10',
  },
  {
    id: '13',
    name: 'Michael B.',
    location: 'Manalapan, NJ',
    rating: 5,
    text: 'Called on a Friday afternoon expecting to wait till Monday. They had someone at our door Saturday morning for a Whirlpool fridge that was icing over. Factory-trained, polite, and transparent about pricing.',
    service: 'Whirlpool Refrigerator Repair',
    date: '2024-09-05',
  },
  {
    id: '14',
    name: 'Karen L.',
    location: 'Matawan, NJ',
    rating: 5,
    text: 'Third time using Advanced in 10 years. Consistent quality, consistent pricing. This visit was for our aging KitchenAid dishwasher — they talked me through whether to repair or replace instead of just upselling. Rare honesty.',
    service: 'KitchenAid Dishwasher Repair',
    date: '2024-08-28',
  },
  {
    id: '15',
    name: 'Robert G.',
    location: 'Aberdeen, NJ',
    rating: 5,
    text: 'Technician arrived inside the scheduled window, diagnosed our LG front-load washer shock absorbers, and had the kit on the truck. Back up and running in under two hours. No mess, no drama.',
    service: 'LG Washer Repair',
    date: '2024-08-22',
  },
  {
    id: '16',
    name: 'Susan D.',
    location: 'Shrewsbury, NJ',
    rating: 5,
    text: 'Our Thermador wall oven display was throwing error codes. Advanced\'s tech knew exactly which board to order, pre-ordered before the follow-up visit, and had it installed in under an hour. This is how factory-trained service should work.',
    service: 'Thermador Oven Repair',
    date: '2024-08-15',
  },
  {
    id: '17',
    name: 'James P.',
    location: 'Fair Haven, NJ',
    rating: 5,
    text: 'Miele dishwasher turbidity sensor was fouling cycles. Other shops wouldn\'t even touch a Miele. Advanced is factory-trained — had the part, did it right, and respected our custom cabinetry panels throughout.',
    service: 'Miele Dishwasher Repair',
    date: '2024-08-08',
  },
  {
    id: '18',
    name: 'Maria V.',
    location: 'Little Silver, NJ',
    rating: 5,
    text: 'Our Viking range simmer burner wasn\'t igniting reliably. Tech diagnosed an ignition-module issue, replaced OEM, and tuned the burner air-gas mix. Works better than it has in years.',
    service: 'Viking Range Repair',
    date: '2024-08-01',
  },
  {
    id: '19',
    name: 'Christopher N.',
    location: 'Eatontown, NJ',
    rating: 5,
    text: 'Scheduling was easy, tech texted ahead, and he had our GE Profile dishwasher drain pump fixed in under an hour. Final bill matched the quote. Zero surprises.',
    service: 'GE Profile Dishwasher Repair',
    date: '2024-07-25',
  },
  {
    id: '20',
    name: 'Linda F.',
    location: 'Ocean, NJ',
    rating: 5,
    text: 'Salt air took out our refrigerator compressor start relay — third one in eight years. Advanced has seen this pattern a hundred times at the shore. Fixed it, sealed it with conformal coating, and we haven\'t had a failure since.',
    service: 'Samsung Refrigerator Repair',
    date: '2024-07-18',
  },
  {
    id: '21',
    name: 'Kevin S.',
    location: 'Tinton Falls, NJ',
    rating: 5,
    text: 'Our over-the-range microwave stopped heating. Tech diagnosed a bad magnetron, ordered the OEM part, and had it replaced in two days total. Fair price and no pressure to replace the whole unit.',
    service: 'KitchenAid Microwave Repair',
    date: '2024-07-12',
  },
  {
    id: '22',
    name: 'Dana R.',
    location: 'Sayreville, NJ',
    rating: 5,
    text: 'Coordinated through our condo association for the service-elevator reservation and certificate of insurance without me having to chase anything. Fixed a Bosch washer drain pump in one visit. True pros.',
    service: 'Bosch Washer Repair',
    date: '2024-07-05',
  },
  {
    id: '23',
    name: 'Stephen W.',
    location: 'Metuchen, NJ',
    rating: 5,
    text: 'Older home, undersized dryer circuit. Tech flagged the electrical concern before attempting the install, recommended an electrician, and came back to finish the job once the panel was upgraded. Probably saved us from a fire.',
    service: 'Maytag Dryer Repair',
    date: '2024-06-28',
  },
  {
    id: '24',
    name: 'Elizabeth M.',
    location: 'South Amboy, NJ',
    rating: 5,
    text: 'Our Kenmore fridge ice maker stopped working. Two other shops said the ice maker was dead. Advanced diagnosed a clogged water inlet valve — $45 part, thirty minutes of labor. Back in business.',
    service: 'Kenmore Refrigerator Repair',
    date: '2024-06-20',
  },
  {
    id: '25',
    name: 'Paul A.',
    location: 'Morganville, NJ',
    rating: 5,
    text: 'Long-time customer. Every tech they\'ve sent over the years has been honest, on time, and properly trained. This visit was for our Jenn-Air downdraft — fixed same-day with an OEM motor. Still the only company I call.',
    service: 'Jenn-Air Cooktop Repair',
    date: '2024-06-15',
  },
  {
    id: '26',
    name: 'Rebecca K.',
    location: 'Marlboro, NJ',
    rating: 5,
    text: 'Our Bosch 800 Series dishwasher threw an E15 error right before a dinner party. They squeezed us in same-day, found a hairline water-leak at the pump seal, replaced OEM, and we had clean plates by 5pm.',
    service: 'Bosch Dishwasher Repair',
    date: '2024-06-08',
  },
  {
    id: '27',
    name: 'David H.',
    location: 'Holmdel, NJ',
    rating: 5,
    text: 'Factory-trained on Monogram — which very few local shops actually are. Diagnosed a refrigeration sealed-system issue on our GE Monogram built-in, did the work correctly, and it\'s run cold ever since.',
    service: 'GE Monogram Refrigerator Repair',
    date: '2024-05-30',
  },
  {
    id: '28',
    name: 'Amy C.',
    location: 'Middletown, NJ',
    rating: 5,
    text: 'The technician was courteous, professional, and wore shoe covers without being asked. Fixed our LG dryer thermistor in one visit. Texted me a photo of the failed part so I knew exactly what I was paying for.',
    service: 'LG Dryer Repair',
    date: '2024-05-22',
  },
  {
    id: '29',
    name: 'Nicholas R.',
    location: 'Old Bridge, NJ',
    rating: 5,
    text: 'We\'ve used Advanced for our own house and both our rentals. They know how to work around tenants, always give straight answers on repair-vs-replace, and have never once pressured us on an upsell.',
    service: 'Whirlpool Washer Repair',
    date: '2024-05-15',
  },
  {
    id: '30',
    name: 'Victoria B.',
    location: 'Edison, NJ',
    rating: 5,
    text: 'Our Samsung French door fridge was freezing the produce drawer. Tech diagnosed a damper-control issue, replaced OEM, and calibrated the freezer temp properly. No more frozen lettuce. Thirty years in this trade shows.',
    service: 'Samsung Refrigerator Repair',
    date: '2024-05-08',
  },
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    role: 'Master Technician',
    bio: 'Over 30 years of hands-on experience repairing all major appliance brands. Factory-certified and dedicated to getting the job done right the first time.',
    image: '/team/technician-portrait.webp',
  },
  {
    id: '2',
    role: 'Senior Service Technician',
    bio: 'Specializing in refrigeration and dishwasher systems with decades of expertise. Known for thorough diagnostics and reliable repairs.',
    image: '/team/technician-arrival.webp',
  },
  {
    id: '3',
    role: 'Appliance Repair Specialist',
    bio: 'Expert in oven, range, and cooktop repairs. Trained on all major domestic and international brands with a commitment to quality service.',
    image: '/team/technician-oven-repair.webp',
  },
  {
    id: '4',
    role: 'Field Service Technician',
    bio: 'Providing professional in-home appliance repair throughout Monmouth and Middlesex Counties. Prompt, reliable, and factory-authorized.',
    image: '/team/technician-dishwasher-repair.webp',
  },
];

// Service Areas - All 38 locations from live site (Monmouth & Middlesex Counties)
export const serviceAreas: ServiceArea[] = [
  { id: '1', name: 'Aberdeen', slug: 'appliance-repair-in-aberdeen-nj', county: 'Monmouth', state: 'NJ', description: 'Professional appliance repair services in Aberdeen, NJ. All major kitchen and laundry appliances serviced.', zipCodes: ['07747'] },
  { id: '3', name: 'Colts Neck', slug: 'appliance-repair-colts-neck-nj', county: 'Monmouth', state: 'NJ', description: 'Professional appliance repair services in Colts Neck, NJ. Serving homes with expert care.', zipCodes: ['07722'] },
  { id: '5', name: 'Eatontown', slug: 'appliance-repair-eatontown-nj', county: 'Monmouth', state: 'NJ', description: 'Fast, reliable appliance repair in Eatontown, NJ. All major brands serviced.', zipCodes: ['07724'] },
  { id: '6', name: 'Edison', slug: 'appliance-repair-in-edison-nj', county: 'Middlesex', state: 'NJ', description: 'Professional appliance repair services in Edison, NJ. All major brands serviced.', zipCodes: ['08817', '08818', '08820', '08837'] },
  { id: '8', name: 'Fair Haven', slug: 'appliance-repair-in-fair-haven-nj', county: 'Monmouth', state: 'NJ', description: 'Quality appliance repair in Fair Haven, NJ. Licensed, bonded, and insured technicians.', zipCodes: ['07704'] },
  { id: '11', name: 'Freehold', slug: 'appliance-repair-in-freehold-nj', county: 'Monmouth', state: 'NJ', description: 'Comprehensive appliance repair in Freehold, NJ. Serving the historic downtown and surrounding areas.', zipCodes: ['07728'] },
  { id: '12', name: 'Hazlet', slug: 'appliance-repair-in-hazlet-nj', county: 'Monmouth', state: 'NJ', description: 'Professional appliance repair in Hazlet, NJ. Over 30 years of experience.', zipCodes: ['07730'] },
  { id: '13', name: 'Holmdel', slug: 'appliance-repair-in-holmdel-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Holmdel, NJ. Specializing in premier appliances.', zipCodes: ['07733'] },
  { id: '17', name: 'Lincroft', slug: 'appliance-repair-in-lincroft-nj', county: 'Monmouth', state: 'NJ', description: 'Professional appliance repair in Lincroft, NJ. Serving homes with expert care.', zipCodes: ['07738'] },
  { id: '18', name: 'Little Silver', slug: 'appliance-repair-in-little-silver-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Little Silver, NJ. All major brands serviced.', zipCodes: ['07739'] },
  { id: '19', name: 'Manalapan', slug: 'appliance-repair-in-manalapan-nj', county: 'Monmouth', state: 'NJ', description: 'Professional appliance repair in Manalapan, NJ. All appliances serviced.', zipCodes: ['07726'] },
  { id: '20', name: 'Marlboro', slug: 'appliance-repair-marlboro-nj', county: 'Monmouth', state: 'NJ', description: 'Comprehensive appliance repair in Marlboro, NJ. Licensed and insured technicians.', zipCodes: ['07746'] },
  { id: '21', name: 'Matawan', slug: 'appliance-repair-in-matawan-nj', county: 'Monmouth', state: 'NJ', description: 'Reliable appliance repair in Matawan, NJ. Over 30 years serving the community.', zipCodes: ['07747'] },
  { id: '22', name: 'Metuchen', slug: 'appliance-repair-in-metuchen-nj', county: 'Middlesex', state: 'NJ', description: 'Quality appliance repair in Metuchen, NJ. All major brands serviced.', zipCodes: ['08840'] },
  { id: '23', name: 'Middletown', slug: 'appliance-repair-in-middletown-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Middletown, NJ. All major brands and appliances.', zipCodes: ['07748'] },
  { id: '24', name: 'Morganville', slug: 'appliance-repair-in-morganville-nj', county: 'Monmouth', state: 'NJ', description: 'Our home base! Professional appliance repair services in Morganville, NJ. Expert service for all major brands.', zipCodes: ['07751'] },
  { id: '25', name: 'Neptune', slug: 'appliance-repair-in-neptune-nj', county: 'Monmouth', state: 'NJ', description: 'Professional appliance repair in Neptune, NJ. Serving the shore community.', zipCodes: ['07753', '07754'] },
  { id: '26', name: 'Ocean', slug: 'appliance-repair-in-ocean-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Ocean Township, NJ. All major brands serviced.', zipCodes: ['07712'] },
  { id: '28', name: 'Old Bridge', slug: 'appliance-repair-in-old-bridge-nj', county: 'Middlesex', state: 'NJ', description: 'Comprehensive appliance repair in Old Bridge, NJ. All major brands serviced.', zipCodes: ['08857'] },
  { id: '30', name: 'Perth Amboy', slug: 'appliance-repair-in-perth-amboy-nj', county: 'Middlesex', state: 'NJ', description: 'Reliable appliance repair in Perth Amboy, NJ. Over 30 years of experience.', zipCodes: ['08861', '08862'] },
  { id: '32', name: 'Red Bank', slug: 'appliance-repair-in-red-bank-nj', county: 'Monmouth', state: 'NJ', description: 'Professional appliance repair in Red Bank, NJ. Serving downtown and surrounding areas.', zipCodes: ['07701', '07702'] },
  { id: '33', name: 'Rumson', slug: 'appliance-repair-in-rumson-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Rumson, NJ. Specializing in premier brands.', zipCodes: ['07760'] },
  { id: '34', name: 'Sayreville', slug: 'appliance-repair-in-sayreville-nj', county: 'Middlesex', state: 'NJ', description: 'Professional appliance repair in Sayreville, NJ. All major brands serviced.', zipCodes: ['08871', '08872'] },
  { id: '35', name: 'Shrewsbury', slug: 'appliance-repair-in-shrewsbury-nj', county: 'Monmouth', state: 'NJ', description: 'Expert appliance repair in Shrewsbury, NJ. All major brands serviced.', zipCodes: ['07702'] },
  { id: '36', name: 'South Amboy', slug: 'appliance-repair-in-south-amboy-nj', county: 'Middlesex', state: 'NJ', description: 'Trusted appliance repair in South Amboy, NJ. Over 30 years of experience.', zipCodes: ['08879'] },
  { id: '37', name: 'Tinton Falls', slug: 'appliance-repair-in-tinton-falls-nj', county: 'Monmouth', state: 'NJ', description: 'Reliable appliance repair in Tinton Falls, NJ. Professional service.', zipCodes: ['07724', '07753'] },
  { id: '39', name: 'Woodbridge', slug: 'appliance-repair-in-woodbridge-nj', county: 'Middlesex', state: 'NJ', description: 'Comprehensive appliance repair in Woodbridge, NJ. All major brands serviced.', zipCodes: ['07095'] },
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

While some issues can be DIY fixes, most washer problems require professional diagnosis. Our technicians can usually provide fast, reliable service.

## Common Washer Emergencies

- Water not draining
- Excessive vibration or shaking
- Burning smell
- Error codes displayed
- Water leaking from bottom

Don't wait for small problems to become big ones. Contact Advanced Appliance for fast, reliable service.`,
    author: 'Advanced Appliance Team',
    date: '2024-11-20',
    image: '/Appliances_Photo_7614539.webp',
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
    image: '/Appliances_Photo_7534280.webp',
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
    image: '/Kitchen_Appliances_Photo_2.webp',
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

Advanced Appliance has been serving Monmouth and Middlesex counties for over 30 years. We provide professional service for all major brands.`,
    author: 'Advanced Appliance Team',
    date: '2024-11-05',
    image: '/Appliances_Photo_7614540.webp',
    category: 'Guide',
    tags: ['Kitchen', 'Appliances', 'Maintenance', 'Guide'],
    readTime: 6,
  },
];

// Certifications
export const certifications: Certification[] = [
  { name: 'Sub-Zero Certified', issuer: 'Sub-Zero Group', year: '2024' },
  { name: 'Wolf Factory Trained', issuer: 'Wolf Appliance', year: '2024' },
  { name: 'Viking Certified Service', issuer: 'Viking Range', year: '2024' },
  { name: 'Thermador Certified', issuer: 'BSH Home Appliances', year: '2024' },
  { name: 'Miele Premier Partner', issuer: 'Miele', year: '2024' },
  { name: 'AHAM NARDA Certified', issuer: 'AHAM', year: '2024' },
  { name: 'PSA World Member', issuer: 'PSA World', year: '2024' },
  { name: 'MSA World Member', issuer: 'MSA World', year: '2024' },
  { name: 'United Servicers Association', issuer: 'United Servicers', year: '2024' },
  { name: 'Samsung Factory Trained', issuer: 'Samsung', year: '2024' },
  { name: 'KitchenAid Certified', issuer: 'KitchenAid', year: '2024' },
  { name: 'LG Factory Trained', issuer: 'LG', year: '2024' },
  { name: 'GE Factory Authorized Service', issuer: 'General Electric', year: '2024' },
  { name: 'Frigidaire Factory Authorized Service', issuer: 'Frigidaire', year: '2024' },
  { name: 'Electrolux Factory Service', issuer: 'Electrolux', year: '2024' },
];

// Trust Badges - matching live site
export const trustBadges = [
  { title: '$100 Diagnostic Fee', description: 'Plus parts and labor. No hidden fees' },
  { title: '24/7 Assistance', description: 'Live operators available around the clock' },
  { title: 'Fast Scheduling', description: 'Schedule next day, service tomorrow' },
  { title: 'Up to 1-Year Warranty', description: 'Up to 1 year parts warranty based on brand, with a matching labor warranty coverage.' },
  { title: '30+ Years Experience', description: 'Professional service since 1992' },
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
    description: 'Up to 1-year parts warranty based on brand, with a matching labor warranty coverage.',
    icon: 'relax'
  },
];

// FAQs - matching live site
export const generalFaqs: FAQ[] = [
  {
    question: 'What areas do you serve?',
    answer: 'We provide appliance repair services in parts of Monmouth and Middlesex Counties, including Morganville, Marlboro, Holmdel, Red Bank, Freehold, Old Bridge, Edison, and many other communities.',
  },
  {
    question: 'How quickly can you schedule service?',
    answer: 'Schedule your appointment, and we can often provide next day service. For emergencies, we do our best to accommodate urgent requests.',
  },
  {
    question: 'What brands do you repair?',
    answer: 'We are factory-trained to service Sub-Zero, Viking, Thermador, Miele, and Wolf. We also service Samsung, LG, Bosch, KitchenAid, Whirlpool, GE, Maytag, Kenmore, Jenn-Air, Electrolux, and many more.',
  },
  {
    question: 'Do you provide warranties on repairs?',
    answer: 'Yes. Up to 1-year parts warranty based on brand, with a matching labor warranty coverage.',
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
