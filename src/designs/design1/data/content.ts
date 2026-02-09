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

// Images - local high-quality images
export const images = {
  logo: 'https://appliancenj.com/wp-content/uploads/2016/05/logo.png',
  favicon: 'https://appliancenj.com/wp-content/uploads/2016/05/favicon.png',
  // Hero/Cover images for different pages
  hero: '/njhero-opt.webp',
  kitchen: '/Appliances_Photo_8146322.webp',
  about: '/Advanced-Appliance-Repair-Service.webp',
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
  iconBook: 'https://appliancenj.com/wp-content/uploads/2016/04/note-2.png',
  iconRepair: 'https://appliancenj.com/wp-content/uploads/2016/04/repair-2.png',
  iconRelax: 'https://appliancenj.com/wp-content/uploads/2016/04/relax-2.png',
  // Appliance images (local high-quality)
  oven: '/Appliances_Photo_7614540.webp',
  cooktop: '/Appliances_Photo_8146322.webp',
  dishwasher: '/Kitchen_Appliances_Photo_1.webp',
  refrigerator: '/Appliances_Photo_1694007.webp',
  washer: '/Appliances_Photo_7614539.webp',
  dryer: '/Appliances_Photo_7534280.webp',
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
    longDescription: `Your refrigerator is the hardest-working appliance in your home, running 24 hours a day, 365 days a year to keep your food fresh and safe. When it breaks down, you need fast, reliable service from technicians who understand the complexity of modern refrigeration systems. At Advanced Appliance Repair Service, we have been repairing refrigerators throughout Monmouth and Middlesex Counties since 1992.

Our factory-trained technicians are certified to work on all major brands, from everyday models to high-end units like Sub-Zero, Viking, and Thermador. We understand that luxury refrigerators require specialized knowledge and genuine OEM parts to maintain their performance and warranty coverage. Whether you have a French door, side-by-side, top-freezer, or built-in refrigerator, we have the expertise to diagnose and repair it correctly the first time.

We stock our service vehicles with the most commonly needed parts, allowing us to complete most repairs in a single visit. For complex issues or specialty parts, we provide accurate timelines and keep you informed throughout the process. Our $100 diagnostic fee is applied to your repair cost, and all work is backed by our 90-180 day warranty on parts and labor.`,
    features: [
      'Same-day service availability',
      'Factory-trained technicians',
      'Genuine OEM replacement parts',
      '90-180 day warranty on all repairs',
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
      'Schedule your appointment online or by phone - same-day service often available',
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
        answer: 'Yes, we specialize in built-in and integrated refrigerators from Sub-Zero, Viking, Thermador, Miele, and other luxury brands. Our technicians receive ongoing factory training to stay current with the latest models and technologies.',
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
    image: '/Appliances_Photo_1694007.webp',
  },
  {
    id: '2',
    name: 'Washer Repair',
    slug: 'washer-repair',
    icon: 'washer',
    shortDescription: 'Professional washing machine repair for residential and high-capacity units.',
    description: 'From front-load to top-load washers, our experts handle all types of washing machine repairs. We understand the intricacies of luxury laundry appliances and provide meticulous service.',
    longDescription: `A broken washing machine disrupts your entire household routine. Piles of dirty laundry accumulate quickly, and trips to the laundromat are inconvenient and expensive. At Advanced Appliance Repair Service, we understand the urgency of washer repairs and offer fast, reliable service throughout Monmouth and Middlesex Counties in New Jersey.

Our technicians are factory-trained to repair all types of washing machines, from traditional top-loaders to sophisticated front-load units with steam cycles and smart connectivity. We specialize in premium brands like Miele, Bosch, Speed Queen, and LG, but we service all major manufacturers. With over 30 years of experience, we have seen every type of washer problem and know how to fix it right the first time.

Modern washing machines are complex appliances with electronic control boards, multiple sensors, and precision motors. Attempting DIY repairs can void warranties and cause additional damage. Our professional technicians have the diagnostic tools and genuine OEM parts needed to restore your washer to peak performance, backed by our 90-180 day warranty on all repairs.`,
    features: [
      'All washer types serviced',
      'Leak detection and repair',
      'Motor and pump replacement',
      'Electronic control board repair',
      'Miele, Bosch, Speed Queen specialists',
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
      'Your repair is covered by our 90-180 day warranty',
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
        question: 'Why is my washer leaking?',
        answer: 'Leaks can be caused by damaged door seals, faulty water inlet valves, loose hose connections, or drain pump issues. Front-load washers commonly leak from worn door boot gaskets. Our technicians will identify the exact source and repair it properly.',
      },
      {
        question: 'My washer won\'t spin. Can you fix it?',
        answer: 'Yes, spin cycle issues are commonly caused by lid switch problems, motor coupling failures, worn drive belts, or control board malfunctions. We repair all of these issues and can usually complete the repair in one visit.',
      },
      {
        question: 'Why does my front-load washer smell bad?',
        answer: 'Mold and mildew growth in the door gasket and detergent dispenser causes odors in front-load washers. We can clean and treat these areas, replace damaged gaskets, and show you how to prevent future odor problems.',
      },
      {
        question: 'How long do washing machines typically last?',
        answer: 'Most washing machines last 10-15 years with proper maintenance. High-quality brands like Speed Queen and Miele often last longer. If your washer is under 10 years old, repair is usually more economical than replacement.',
      },
      {
        question: 'Do you repair high-efficiency (HE) washers?',
        answer: 'Yes, we repair all high-efficiency washers including front-load and top-load HE models. Our technicians are trained on the latest HE technology from all major manufacturers.',
      },
      {
        question: 'Why is my washer so loud during the spin cycle?',
        answer: 'Loud spinning is typically caused by worn drum bearings, damaged shock absorbers, or foreign objects caught between the drum and tub. Ignoring these sounds can lead to more expensive repairs, so it\'s best to have it checked promptly.',
      },
    ],
    image: '/Appliances_Photo_7614539.webp',
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
      'Thermal fuse repair',
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
      'Schedule service online or call for same-day appointments',
      'Our technician arrives with common dryer parts and tools',
      'We perform complete diagnostics including vent inspection',
      'You receive an honest estimate before repairs begin',
      'Repairs are made with quality OEM components',
      'We test the dryer through a complete cycle',
      'All work is backed by our 90-180 day warranty',
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
        question: 'Why is my dryer not heating?',
        answer: 'For electric dryers, common causes include a faulty heating element, broken thermal fuse, or failed thermostat. Gas dryers may have igniter, gas valve, or flame sensor issues. We diagnose and repair all heating problems for both types.',
      },
      {
        question: 'How often should I clean my dryer vent?',
        answer: 'We recommend professional dryer vent cleaning at least once a year. If you do many loads per week, you may need cleaning more frequently. Clogged vents are the leading cause of dryer fires and significantly reduce efficiency.',
      },
      {
        question: 'Is it safe to repair a gas dryer myself?',
        answer: 'We strongly recommend professional service for gas dryers. Gas leaks can cause fires and explosions, and improper repairs can create dangerous situations. Our technicians are trained in safe gas appliance repair procedures.',
      },
      {
        question: 'Why does my dryer take so long to dry clothes?',
        answer: 'Extended drying times are usually caused by restricted airflow from clogged lint filters, blocked vents, or failing blower wheels. It can also indicate heating element problems or worn drum seals letting heat escape.',
      },
      {
        question: 'Why is my dryer making a squealing noise?',
        answer: 'Squealing typically indicates worn drum glides, a fraying belt, or dry idler pulley bearings. These parts wear over time and should be replaced before they fail completely and cause further damage.',
      },
      {
        question: 'Can you repair dryers with steam features?',
        answer: 'Yes, we repair all modern dryers including those with steam refresh, wrinkle release, and sanitize cycles. Our technicians stay current with the latest dryer technology through ongoing training.',
      },
    ],
    image: '/Appliances_Photo_7534280.webp',
  },
  {
    id: '4',
    name: 'Dishwasher Repair',
    slug: 'dishwasher-repair',
    icon: 'dishwasher',
    shortDescription: 'Expert dishwasher repair for premium brands like Miele, Bosch, and Thermador.',
    description: 'Our dishwasher repair services cover everything from drainage issues to electronic control failures. We ensure your dishes come out spotless every time.',
    longDescription: `A malfunctioning dishwasher means hours of hand-washing dishes, wasted water, and the frustration of dealing with dirty dishes piling up in your sink. At Advanced Appliance Repair Service, we provide fast, professional dishwasher repair throughout Monmouth and Middlesex Counties, restoring this essential time-saving appliance to perfect working order.

Modern dishwashers are sophisticated appliances with multiple wash cycles, soil sensors, and efficient drying systems. Our technicians are factory-trained on premium brands like Miele, Bosch, Thermador, and KitchenAid, as well as all major manufacturers. We understand the unique requirements of European dishwashers and the specific issues that can affect different brands.

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
      'Your repair is protected by our 90-180 day warranty',
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
        question: 'Why are my dishes still dirty after washing?',
        answer: 'Poor cleaning can result from clogged spray arms, low water temperature, insufficient water fill, faulty wash pumps, or incorrect loading. Our technicians diagnose the specific cause and make the necessary repairs.',
      },
      {
        question: 'My dishwasher won\'t drain. What should I do?',
        answer: 'Check if the filter is clogged and clear the garbage disposal if connected. If it still won\'t drain, you likely have a pump failure, blocked drain hose, or control board issue that requires professional repair.',
      },
      {
        question: 'Why is my dishwasher leaking?',
        answer: 'Leaks commonly come from worn door gaskets, faulty water inlet valves, loose hose clamps, or cracked components. We identify the leak source and repair it properly to prevent water damage to your floors and cabinets.',
      },
      {
        question: 'Do you repair Bosch and Miele dishwashers?',
        answer: 'Yes, we specialize in European brands including Bosch, Miele, Thermador, and Gaggenau. Our technicians receive factory training on these brands and use genuine OEM parts for all repairs.',
      },
      {
        question: 'Why doesn\'t my dishwasher dry the dishes?',
        answer: 'Drying issues can be caused by heating element failure, rinse aid dispenser problems, vent fan issues, or selecting the wrong cycle. Some European dishwashers use condensation drying which works differently than heated drying.',
      },
      {
        question: 'How long should a dishwasher last?',
        answer: 'Most dishwashers last 9-12 years. Premium brands like Miele often last longer with proper maintenance. If your dishwasher is under 8 years old, repair is usually more economical than replacement.',
      },
    ],
    image: '/Kitchen_Appliances_Photo_1.webp',
  },
  {
    id: '5',
    name: 'Oven Repair',
    slug: 'oven-repair',
    icon: 'oven',
    shortDescription: 'Comprehensive oven repair for Wolf, Viking, and Thermador.',
    description: 'From temperature calibration to igniter replacement, our technicians are trained to service the most sophisticated cooking appliances on the market.',
    longDescription: `Your oven is the centerpiece of your kitchen, essential for preparing family meals, entertaining guests, and enjoying home-cooked food. When it malfunctions, your entire cooking routine is disrupted. Advanced Appliance Repair Service provides expert oven repair throughout Monmouth and Middlesex Counties, with specialized knowledge of premium brands.

We are factory-authorized to service professional-grade ovens from Wolf, Viking, Thermador, and other luxury manufacturers. These commercial-style appliances require specialized training and genuine parts to maintain their exceptional performance. Our technicians understand the high standards expected by owners of these premium appliances and deliver service to match.

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
      'All repairs include our 90-180 day warranty',
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
        question: 'My oven is not heating evenly. Can you fix it?',
        answer: 'Yes, uneven heating is often caused by a faulty heating element, failed temperature sensor, malfunctioning convection fan, or calibration issues. We diagnose the specific cause and make the necessary repairs to restore even cooking.',
      },
      {
        question: 'Do you repair commercial-style ranges?',
        answer: 'Absolutely. We specialize in Viking, Wolf, Thermador, and other professional-grade ranges. Our technicians have factory training and certification to work on these premium appliances.',
      },
      {
        question: 'Why won\'t my gas oven ignite?',
        answer: 'The most common cause is a weak or failed igniter. Gas igniters wear out over time and lose their ability to glow hot enough to open the gas valve. We can test and replace igniters, gas valves, and spark modules as needed.',
      },
      {
        question: 'Is it safe to use a gas oven that clicks but doesn\'t light?',
        answer: 'No, you should not attempt to use a gas oven that isn\'t igniting properly. If you smell gas, turn off the appliance, ventilate the area, and call for professional service. Repeated clicking can also damage the spark module.',
      },
      {
        question: 'Can you calibrate my oven temperature?',
        answer: 'Yes, we can calibrate oven temperatures to ensure accuracy. Some ovens allow user calibration adjustment, while others require sensor replacement or control board programming.',
      },
      {
        question: 'Why does my oven smoke when I use the self-clean feature?',
        answer: 'Some smoke during self-cleaning is normal as food residue burns off at high temperatures. However, excessive smoke may indicate heavy buildup, worn door gaskets, or ventilation problems. We can inspect and address these issues.',
      },
    ],
    image: '/Appliances_Photo_7614540.webp',
  },
  {
    id: '6',
    name: 'Cooktop Repair',
    slug: 'cooktop-repair',
    icon: 'cooktop',
    shortDescription: 'Professional cooktop repair for gas, electric, and induction models.',
    description: 'Our cooktop repair services cover all types including gas, electric, and induction cooktops from premium manufacturers.',
    longDescription: `Cooktops are the workhorses of any kitchen, handling everything from quick weekday meals to elaborate weekend cooking projects. When a burner won\'t light, an element won\'t heat, or your induction cooktop displays an error code, you need expert repair service fast. Advanced Appliance Repair Service provides professional cooktop repair throughout Monmouth and Middlesex Counties.

We service all types of cooktops including gas, electric coil, smoothtop ceramic, and induction models. Each type presents unique repair challenges, from gas valve and igniter issues to cracked glass surfaces and induction board failures. Our technicians are trained on all technologies and carry the specialized parts and tools needed for each type of repair.

Induction cooktops have become increasingly popular in luxury kitchens, and we have expertise in this advanced technology. We can diagnose and repair induction coil failures, control board issues, and cooling fan problems. For gas cooktops, we handle everything from simple igniter replacements to complex gas valve repairs, always prioritizing safety in every repair.`,
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
        question: 'My gas burner won\'t ignite. What\'s wrong?',
        answer: 'This is typically caused by clogged burner ports, a faulty igniter, or spark module issues. Sometimes simply cleaning the burner cap and ports resolves the issue. If cleaning doesn\'t help, the igniter likely needs replacement.',
      },
      {
        question: 'Can you repair cracked cooktop glass?',
        answer: 'Cracked glass cannot be repaired and must be replaced. We can replace damaged glass cooktop surfaces for most major brands. We recommend replacement even for small cracks to prevent further damage and potential safety hazards.',
      },
      {
        question: 'Why is my gas flame yellow instead of blue?',
        answer: 'Yellow flames indicate incomplete combustion, usually caused by clogged burner ports, incorrect air-to-gas mixture, or low gas pressure. Blue flames with yellow tips are normal; entirely yellow flames should be addressed.',
      },
      {
        question: 'Do you repair induction cooktops?',
        answer: 'Yes, we repair all induction cooktop brands. Induction technology requires specialized knowledge of electronics and magnetic heating systems. Our technicians can diagnose and repair coil failures, control board issues, and cooling fan problems.',
      },
      {
        question: 'Why won\'t my induction cooktop recognize my pan?',
        answer: 'Induction cooktops require magnetic cookware. If your pan doesn\'t stick to a magnet, it won\'t work on induction. If compatible cookware still isn\'t detected, there may be a coil or sensor issue requiring professional diagnosis.',
      },
      {
        question: 'Is it worth repairing an old cooktop?',
        answer: 'Most cooktops last 15-20 years. If yours is less than 10 years old and the repair cost is reasonable, repair is usually the better choice. Glass replacement on newer units is often worthwhile; major repairs on older units may not be.',
      },
    ],
    image: '/Appliances_Photo_8146322.webp',
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
    image: '/technician-service.webp',
  },
  {
    id: '2',
    name: 'David Thompson',
    role: 'Senior Service Technician',
    bio: 'David specializes in refrigeration systems and has been with our team for 15 years. His expertise in Sub-Zero and Miele appliances is unparalleled in the region.',
    image: '/technician-work.webp',
  },
  {
    id: '3',
    name: 'James Wilson',
    role: 'Cooking Appliance Specialist',
    bio: 'James is our Wolf and Viking expert with specialized training in high-end cooking appliances. He brings 12 years of dedicated experience to every repair.',
    image: '/technician-service.webp',
  },
  {
    id: '4',
    name: 'Sarah Mitchell',
    role: 'Customer Service Manager',
    bio: 'Sarah ensures every client receives the white-glove service they deserve. She coordinates our scheduling to minimize wait times and maximize convenience.',
    image: '/technician-work.webp',
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

Advanced Appliance has been serving Monmouth and Middlesex counties for over 30 years. We're factory-authorized for all major brands.`,
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
