/**
 * Seed script: Import all static content from content.ts into Sanity CMS.
 *
 * Uses createOrReplace with deterministic IDs so the script is idempotent.
 * Run: node --env-file=.env.local --import=tsx scripts/seed-sanity.ts
 *
 * Requires: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN env vars.
 */

import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error('Missing required env vars: NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

// Helper to create a slug-based deterministic ID
function docId(type: string, key: string): string {
  return `${type}-${key}`.replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase()
}

// Helper to create slug object
function slug(value: string) {
  return { _type: 'slug', current: value }
}

async function seedSettings() {
  console.log('Seeding settings...')
  const doc = {
    _id: 'settings',
    _type: 'settings',
    siteName: 'Advanced Appliance Repair Service',
    tagline: 'Professional Appliance Repair in Monmouth & Middlesex Counties, NJ',
    contact: {
      phone: '(732) 416-7430',
      email: 'service@appliancenj.com',
      address: '23 Reids Hill Road',
      city: 'Morganville',
      state: 'NJ',
      zip: '07751',
    },
    social: {
      facebook: 'https://www.facebook.com/profile.php?id=61555650040922',
      instagram: 'https://www.instagram.com/advancedappliance/?hl=en',
      twitter: 'https://twitter.com/advappliancenj?lang=en',
      youtube: 'https://www.youtube.com/channel/UC3FgNm3NMvks81yUBLOYhKw',
    },
    hours: {
      monday: '8:00 AM - 9:00 PM',
      tuesday: '8:00 AM - 9:00 PM',
      wednesday: '8:00 AM - 9:00 PM',
      thursday: '8:00 AM - 9:00 PM',
      friday: '8:00 AM - 9:00 PM',
      saturday: '8:00 AM - 9:00 PM',
      sunday: '8:00 AM - 9:00 PM',
      emergencyNote: 'Live operators available 24/7 for emergency service.',
      liveOperators: '24/7',
    },
    tollFreePhone: '(800) 664-0650',
    founded: 1992,
    yearsInBusiness: 30,
  }
  await client.createOrReplace(doc)
  console.log('  Settings seeded.')
}

async function seedServices() {
  console.log('Seeding services...')
  const services = [
    {
      name: 'Refrigerator Repair',
      slug: 'refrigerator-repair',
      icon: 'refrigerator',
      excerpt: 'Expert repair for all premier refrigerator brands including Sub-Zero, Viking, and more.',
      longDescription: 'Your refrigerator is the hardest-working appliance in your home, running 24 hours a day, 365 days a year to keep your food fresh and safe. When it breaks down, you need fast, reliable service from technicians who understand the complexity of modern refrigeration systems.',
      features: ['Prompt service scheduling', 'Factory-trained technicians', 'Genuine OEM replacement parts', '365-day warranty on all repairs', 'Sub-Zero, Viking, Thermador specialists', 'Built-in and integrated unit experts', 'Compressor and sealed system repair', 'Ice maker and water dispenser service'],
      commonProblems: [
        { title: 'Not Cooling Properly', description: 'Temperature fluctuations, warm spots, or complete cooling failure often indicate compressor, thermostat, or sealed system issues.' },
        { title: 'Excessive Frost Buildup', description: 'Ice accumulation in the freezer or refrigerator section typically points to defrost system malfunctions or door seal problems.' },
        { title: 'Water Leaking', description: 'Puddles under or inside your refrigerator can result from clogged drain lines, faulty water inlet valves, or damaged door gaskets.' },
        { title: 'Strange Noises', description: 'Clicking, buzzing, humming, or grinding sounds may indicate failing compressors, fan motors, or ice maker components.' },
        { title: 'Ice Maker Not Working', description: 'No ice production is commonly caused by frozen water lines, defective water inlet valves, or faulty ice maker modules.' },
        { title: 'Running Constantly', description: 'A refrigerator that never cycles off wastes energy and often signals dirty condenser coils, failing door seals, or thermostat issues.' },
      ],
      warningSigns: ['Food spoiling faster than usual', 'Visible condensation inside the unit', 'Ice buildup on freezer walls', 'Unusual sounds during operation', 'Higher than normal energy bills', 'Water pooling under the refrigerator', 'Warm spots in the refrigerator section', 'Refrigerator running non-stop'],
      repairProcess: ['Schedule your appointment online or by phone', 'Our technician arrives on time in a fully-stocked service vehicle', 'We perform a complete diagnostic assessment for a $100 fee', 'You receive a detailed estimate before any repair work begins', 'We complete the repair using genuine OEM parts', 'We test the unit thoroughly to ensure proper operation', 'You receive documentation and warranty information'],
      preventionTips: ['Clean condenser coils every 6-12 months to maintain efficiency', 'Check and replace door gaskets if they show signs of wear', 'Keep the refrigerator at 37-40\u00b0F and freezer at 0\u00b0F', 'Avoid overloading to allow proper air circulation', 'Replace water filters every 6 months', 'Clean the interior regularly to prevent odors and bacteria', 'Leave space between the wall and refrigerator for ventilation'],
      faqs: [
        { question: 'How long does a refrigerator repair typically take?', answer: 'Most refrigerator repairs are completed within 1-2 hours during a single visit. Complex issues involving compressors or sealed systems may require additional time or a follow-up visit for parts.' },
        { question: 'Do you repair built-in refrigerators?', answer: 'Yes, we specialize in built-in and integrated refrigerators from Sub-Zero, Viking, Thermador, Miele, and other premier brands.' },
        { question: 'What brands do you service?', answer: 'We service all major brands including Sub-Zero, Viking, Wolf, Thermador, Miele, Bosch, Samsung, LG, GE, Whirlpool, KitchenAid, Frigidaire, Maytag, Kenmore, and many more.' },
      ],
    },
    {
      name: 'Washer Repair',
      slug: 'washer-repair',
      icon: 'washer',
      excerpt: 'Professional washing machine repair for residential and high-capacity units.',
      longDescription: 'A broken washing machine disrupts your entire household routine. At Advanced Appliance Repair Service, we understand the urgency of washer repairs and offer fast, reliable service throughout Monmouth and Middlesex Counties.',
      features: ['All washer types serviced', 'Leak detection and repair', 'Motor and pump replacement', 'Electronic control board repair', 'Miele, Bosch, Speed Queen specialists', 'Front-load and top-load experts', 'Drain and spin cycle repair', 'Bearing and seal replacement'],
      commonProblems: [
        { title: 'Not Draining', description: 'Water remaining in the drum after a cycle typically indicates pump failures, clogged drain hoses, or lid switch problems.' },
        { title: "Won't Spin", description: 'Spin cycle failures are often caused by worn drive belts, faulty lid switches, motor coupling issues, or unbalanced loads.' },
        { title: 'Leaking Water', description: 'Leaks can originate from door seals, water inlet valves, drain hoses, or internal tub components.' },
      ],
      warningSigns: ['Clothes still wet after spin cycle', 'Water on the floor during or after washing', 'Loud banging or thumping during operation', 'Burning smell during use'],
      repairProcess: ['Contact us by phone or schedule online for prompt service', 'Our technician arrives with common washer parts in stock', 'We diagnose the problem with professional testing equipment', 'You receive a detailed repair estimate before we begin', 'Repairs are completed using manufacturer-approved parts', 'We run test cycles to verify proper operation', 'Your repair is covered by our 365-day warranty'],
      preventionTips: ["Don't overload the washer - follow capacity guidelines", 'Use HE detergent in high-efficiency machines', 'Leave the door open after cycles to prevent mold', 'Clean the detergent dispenser monthly'],
      faqs: [
        { question: 'Why is my washer leaking?', answer: 'Leaks can be caused by damaged door seals, faulty water inlet valves, loose hose connections, or drain pump issues.' },
        { question: "My washer won't spin. Can you fix it?", answer: 'Yes, spin cycle issues are commonly caused by lid switch problems, motor coupling failures, worn drive belts, or control board malfunctions.' },
      ],
    },
    {
      name: 'Dryer Repair',
      slug: 'dryer-repair',
      icon: 'dryer',
      excerpt: 'Fast, reliable dryer repair services for gas and electric units.',
      longDescription: 'When your dryer stops working, laundry day becomes a major hassle. Advanced Appliance Repair Service provides fast, expert dryer repair throughout Monmouth and Middlesex Counties.',
      features: ['Gas and electric dryer repair', 'Heating element replacement', 'Thermal fuse repair', 'Drum and belt service', 'Ventilation inspection included', 'Gas valve and igniter service', 'Motor and blower repair', 'Control board diagnostics'],
      commonProblems: [
        { title: 'Not Heating', description: 'No heat output is commonly caused by failed heating elements, blown thermal fuses, faulty gas igniters, or broken thermostats.' },
        { title: 'Takes Too Long to Dry', description: 'Extended drying times usually indicate restricted airflow from clogged vents, worn drum seals, or failing heating components.' },
        { title: "Won't Start", description: 'A dryer that won\'t turn on may have door switch issues, thermal fuse failures, or control board problems.' },
      ],
      warningSigns: ['Clothes taking multiple cycles to dry', 'Dryer is hot to the touch on the outside', 'Burning smell during operation', 'Loud squealing, banging, or grinding noises'],
      repairProcess: ['Schedule service online or call for an appointment', 'Our technician arrives with common dryer parts and tools', 'We perform complete diagnostics including vent inspection', 'You receive an honest estimate before repairs begin', 'Repairs are made with quality OEM components', 'We test the dryer through a complete cycle', 'All work is backed by our 365-day warranty'],
      preventionTips: ['Clean the lint filter before every load', 'Have the vent professionally cleaned annually', "Don't overload the dryer", 'Use rigid metal vent duct, not flexible plastic'],
      faqs: [
        { question: 'Why is my dryer not heating?', answer: 'For electric dryers, common causes include a faulty heating element, broken thermal fuse, or failed thermostat. Gas dryers may have igniter, gas valve, or flame sensor issues.' },
        { question: 'How often should I clean my dryer vent?', answer: 'We recommend professional dryer vent cleaning at least once a year.' },
      ],
    },
    {
      name: 'Dishwasher Repair',
      slug: 'dishwasher-repair',
      icon: 'dishwasher',
      excerpt: 'Expert dishwasher repair for brands like Miele, Bosch, and Thermador.',
      longDescription: 'A malfunctioning dishwasher means hours of hand-washing dishes. At Advanced Appliance Repair Service, we provide fast, professional dishwasher repair throughout Monmouth and Middlesex Counties.',
      features: ['All major brands serviced', 'Pump and motor repair', 'Door latch replacement', 'Spray arm and rack repair', 'Water inlet valve service', 'Control board diagnostics', 'Leak detection and repair', 'European brand specialists'],
      commonProblems: [
        { title: 'Not Draining', description: 'Standing water in the bottom usually indicates drain pump failure, clogged filters, or blocked drain hoses.' },
        { title: 'Dishes Not Clean', description: 'Poor cleaning results from clogged spray arms, low water temperature, faulty wash pumps, or detergent dispenser issues.' },
        { title: 'Leaking Water', description: 'Leaks can come from worn door gaskets, faulty water inlet valves, cracked tubs, or loose hose connections.' },
      ],
      warningSigns: ['Water remaining in the bottom after cycles', 'Dishes still dirty or spotty after washing', 'Water leaking onto the floor', 'Unusual sounds during operation'],
      repairProcess: ['Book your appointment online or by phone', 'Our technician arrives with diagnostic equipment and common parts', 'We inspect all components and identify the problem', 'You approve the repair estimate before we proceed', 'We complete the repair with genuine manufacturer parts', 'We run a test cycle to verify proper operation', 'Your repair is protected by our 365-day warranty'],
      preventionTips: ["Scrape dishes but don't pre-rinse excessively", 'Clean the filter every month', 'Run hot water at the sink before starting', 'Use quality detergent and rinse aid'],
      faqs: [
        { question: 'Why are my dishes still dirty after washing?', answer: 'Poor cleaning can result from clogged spray arms, low water temperature, insufficient water fill, faulty wash pumps, or incorrect loading.' },
        { question: "My dishwasher won't drain. What should I do?", answer: 'Check if the filter is clogged and clear the garbage disposal if connected. If it still won\'t drain, you likely have a pump failure.' },
      ],
    },
    {
      name: 'Oven Repair',
      slug: 'oven-repair',
      icon: 'oven',
      excerpt: 'Comprehensive oven repair for Wolf, Viking, and Thermador.',
      longDescription: 'Your oven is the centerpiece of your kitchen. Advanced Appliance Repair Service provides expert oven repair throughout Monmouth and Middlesex Counties.',
      features: ['Gas and electric oven repair', 'Igniter and burner service', 'Temperature calibration', 'Door seal replacement', 'Self-cleaning system repair', 'Convection fan service', 'Control board repair', 'Wolf, Viking, Thermador certified'],
      commonProblems: [
        { title: 'Not Heating Properly', description: 'Incorrect temperatures can result from faulty heating elements, defective temperature sensors, or calibration issues.' },
        { title: 'Uneven Cooking', description: 'Hot spots often indicate convection fan problems, heating element issues, or improper calibration.' },
        { title: 'Gas Igniter Problems', description: 'Weak or no ignition is typically caused by worn igniters, faulty gas valves, or spark module failures.' },
      ],
      warningSigns: ['Food cooking unevenly or at wrong temperature', 'Gas smell when oven is off', 'Oven taking longer to preheat', 'Self-cleaning cycle not working'],
      repairProcess: ['Contact us to schedule a convenient appointment', 'Our certified technician arrives with specialized tools', 'We perform thorough diagnostics and safety checks', 'You receive a detailed estimate for your approval', 'Repairs are completed with OEM parts', 'We verify temperature accuracy and proper operation', 'All repairs include our 365-day warranty'],
      preventionTips: ['Clean spills promptly to prevent smoke and damage', 'Use the self-cleaning feature sparingly', 'Check and replace damaged door gaskets', "Don't line oven bottom with foil"],
      faqs: [
        { question: 'My oven is not heating evenly. Can you fix it?', answer: 'Yes, uneven heating is often caused by a faulty heating element, failed temperature sensor, malfunctioning convection fan, or calibration issues.' },
        { question: 'Do you repair commercial-style ranges?', answer: 'Absolutely. We specialize in Viking, Wolf, Thermador, and other professional-grade ranges.' },
      ],
    },
    {
      name: 'Cooktop Repair',
      slug: 'cooktop-repair',
      icon: 'cooktop',
      excerpt: 'Professional cooktop repair for gas, electric, and induction models.',
      longDescription: 'Cooktops are the workhorses of any kitchen. Advanced Appliance Repair Service provides professional cooktop repair throughout Monmouth and Middlesex Counties.',
      features: ['Gas burner repair', 'Induction cooktop service', 'Electric element replacement', 'Control panel repair', 'Glass top replacement', 'Igniter and spark module service', 'Gas valve repair', 'Touch control diagnostics'],
      commonProblems: [
        { title: "Gas Burner Won't Ignite", description: 'Ignition failures typically result from clogged burner ports, worn igniters, or faulty spark modules.' },
        { title: 'Electric Element Not Heating', description: 'Non-heating elements are usually caused by burned-out coils, faulty infinite switches, or wiring problems.' },
        { title: 'Induction Not Working', description: 'Induction failures can involve coil problems, control board issues, or incompatible cookware detection.' },
      ],
      warningSigns: ["Burner won't light or lights slowly", 'Uneven or yellow gas flames', 'Electric element not heating fully', 'Clicking but no ignition'],
      repairProcess: ['Schedule your repair appointment at a convenient time', 'Our technician arrives equipped for all cooktop types', 'We diagnose the issue with specialized testing equipment', 'You approve the estimate before work begins', 'Repairs are completed with manufacturer parts', 'We test all burners and functions', 'Your repair is covered by our warranty'],
      preventionTips: ['Keep burner ports clean and free of debris', 'Clean spills promptly to prevent buildup', 'Use flat-bottomed cookware on glass and induction surfaces', "Don't drag cookware across glass surfaces"],
      faqs: [
        { question: "My gas burner won't ignite. What's wrong?", answer: 'This is typically caused by clogged burner ports, a faulty igniter, or spark module issues.' },
        { question: 'Can you repair cracked cooktop glass?', answer: 'Cracked glass cannot be repaired and must be replaced. We can replace damaged glass cooktop surfaces for most major brands.' },
      ],
    },
  ]

  for (const s of services) {
    const id = docId('service', s.slug)
    await client.createOrReplace({
      _id: id,
      _type: 'service',
      name: s.name,
      slug: slug(s.slug),
      status: 'published',
      icon: s.icon,
      excerpt: s.excerpt,
      longDescription: s.longDescription,
      features: s.features,
      commonProblems: s.commonProblems.map((p, i) => ({ _key: `cp-${i}`, title: p.title, description: p.description })),
      warningSigns: s.warningSigns,
      repairProcess: s.repairProcess,
      preventionTips: s.preventionTips,
      faqs: s.faqs.map((f, i) => ({ _key: `faq-${i}`, question: f.question, answer: f.answer })),
    })
    console.log(`  Service: ${s.name}`)
  }
}

async function seedServiceAreas() {
  console.log('Seeding service areas...')
  const areas = [
    { name: 'Aberdeen', slug: 'appliance-repair-in-aberdeen-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Professional appliance repair services in Aberdeen, NJ.', zipCodes: ['07747'] },
    { name: 'Belford', slug: 'appliance-repair-belford-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Expert appliance repair in Belford, NJ.', zipCodes: ['07718'] },
    { name: 'Colts Neck', slug: 'appliance-repair-colts-neck-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Professional appliance repair services in Colts Neck, NJ.', zipCodes: ['07722'] },
    { name: 'Deal', slug: 'appliance-repair-in-deal-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Trusted appliance repair in Deal, NJ.', zipCodes: ['07723'] },
    { name: 'Eatontown', slug: 'appliance-repair-eatontown-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Fast, reliable appliance repair in Eatontown, NJ.', zipCodes: ['07724'] },
    { name: 'Edison', slug: 'appliance-repair-in-edison-nj', county: 'Middlesex', state: 'NJ', excerpt: 'Professional appliance repair services in Edison, NJ.', zipCodes: ['08817', '08818', '08820', '08837'] },
    { name: 'Englishtown', slug: 'appliance-repair-in-englishtown-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Expert appliance repair in Englishtown, NJ.', zipCodes: ['07726'] },
    { name: 'Fair Haven', slug: 'appliance-repair-in-fair-haven-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Quality appliance repair in Fair Haven, NJ.', zipCodes: ['07704'] },
    { name: 'Farmingdale', slug: 'appliance-repair-in-farmingdale-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Reliable appliance repair services in Farmingdale, NJ.', zipCodes: ['07727'] },
    { name: 'Freehold', slug: 'appliance-repair-in-freehold-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Comprehensive appliance repair in Freehold, NJ.', zipCodes: ['07728'] },
    { name: 'Hazlet', slug: 'appliance-repair-in-hazlet-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Professional appliance repair in Hazlet, NJ.', zipCodes: ['07730'] },
    { name: 'Holmdel', slug: 'appliance-repair-in-holmdel-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Expert appliance repair in Holmdel, NJ.', zipCodes: ['07733'] },
    { name: 'Keansburg', slug: 'appliance-repair-in-keansburg-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Reliable appliance repair in Keansburg, NJ.', zipCodes: ['07734'] },
    { name: 'Keyport', slug: 'appliance-repair-in-keyport-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Quality appliance repair in Keyport, NJ.', zipCodes: ['07735'] },
    { name: 'Leonardo', slug: 'appliance-repair-in-leonardo-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Trusted appliance repair in Leonardo, NJ.', zipCodes: ['07737'] },
    { name: 'Lincroft', slug: 'appliance-repair-in-lincroft-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Professional appliance repair in Lincroft, NJ.', zipCodes: ['07738'] },
    { name: 'Little Silver', slug: 'appliance-repair-in-little-silver-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Expert appliance repair in Little Silver, NJ.', zipCodes: ['07739'] },
    { name: 'Manalapan', slug: 'appliance-repair-in-manalapan-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Professional appliance repair in Manalapan, NJ.', zipCodes: ['07726'] },
    { name: 'Marlboro', slug: 'appliance-repair-marlboro-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Comprehensive appliance repair in Marlboro, NJ.', zipCodes: ['07746'] },
    { name: 'Matawan', slug: 'appliance-repair-in-matawan-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Reliable appliance repair in Matawan, NJ.', zipCodes: ['07747'] },
    { name: 'Metuchen', slug: 'appliance-repair-in-metuchen-nj', county: 'Middlesex', state: 'NJ', excerpt: 'Quality appliance repair in Metuchen, NJ.', zipCodes: ['08840'] },
    { name: 'Middletown', slug: 'appliance-repair-in-middletown-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Expert appliance repair in Middletown, NJ.', zipCodes: ['07748'] },
    { name: 'Morganville', slug: 'appliance-repair-in-morganville-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Our home base! Professional appliance repair in Morganville, NJ.', zipCodes: ['07751'] },
    { name: 'Neptune', slug: 'appliance-repair-in-neptune-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Professional appliance repair in Neptune, NJ.', zipCodes: ['07753', '07754'] },
    { name: 'Ocean', slug: 'appliance-repair-in-ocean-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Expert appliance repair in Ocean Township, NJ.', zipCodes: ['07712'] },
    { name: 'Oceanport', slug: 'appliance-repair-in-oceanport-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Trusted appliance repair in Oceanport, NJ.', zipCodes: ['07757'] },
    { name: 'Old Bridge', slug: 'appliance-repair-in-old-bridge-nj', county: 'Middlesex', state: 'NJ', excerpt: 'Comprehensive appliance repair in Old Bridge, NJ.', zipCodes: ['08857'] },
    { name: 'Parlin', slug: 'appliance-repair-in-parlin-nj', county: 'Middlesex', state: 'NJ', excerpt: 'Expert appliance repair in Parlin, NJ.', zipCodes: ['08859'] },
    { name: 'Perth Amboy', slug: 'appliance-repair-in-perth-amboy-nj', county: 'Middlesex', state: 'NJ', excerpt: 'Reliable appliance repair in Perth Amboy, NJ.', zipCodes: ['08861', '08862'] },
    { name: 'Port Monmouth', slug: 'appliance-repair-in-port-monmouth-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Quality appliance repair in Port Monmouth, NJ.', zipCodes: ['07758'] },
    { name: 'Red Bank', slug: 'appliance-repair-in-red-bank-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Professional appliance repair in Red Bank, NJ.', zipCodes: ['07701', '07702'] },
    { name: 'Rumson', slug: 'appliance-repair-in-rumson-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Expert appliance repair in Rumson, NJ.', zipCodes: ['07760'] },
    { name: 'Sayreville', slug: 'appliance-repair-in-sayreville-nj', county: 'Middlesex', state: 'NJ', excerpt: 'Professional appliance repair in Sayreville, NJ.', zipCodes: ['08871', '08872'] },
    { name: 'Shrewsbury', slug: 'appliance-repair-in-shrewsbury-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Expert appliance repair in Shrewsbury, NJ.', zipCodes: ['07702'] },
    { name: 'South Amboy', slug: 'appliance-repair-in-south-amboy-nj', county: 'Middlesex', state: 'NJ', excerpt: 'Trusted appliance repair in South Amboy, NJ.', zipCodes: ['08879'] },
    { name: 'Tinton Falls', slug: 'appliance-repair-in-tinton-falls-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Reliable appliance repair in Tinton Falls, NJ.', zipCodes: ['07724', '07753'] },
    { name: 'West Long Branch', slug: 'appliance-repair-in-west-long-branch-nj', county: 'Monmouth', state: 'NJ', excerpt: 'Quality appliance repair in West Long Branch, NJ.', zipCodes: ['07764'] },
    { name: 'Woodbridge', slug: 'appliance-repair-in-woodbridge-nj', county: 'Middlesex', state: 'NJ', excerpt: 'Comprehensive appliance repair in Woodbridge, NJ.', zipCodes: ['07095'] },
  ]

  for (const a of areas) {
    const id = docId('serviceArea', a.slug)
    await client.createOrReplace({
      _id: id,
      _type: 'serviceArea',
      name: a.name,
      slug: slug(a.slug),
      status: 'published',
      county: a.county,
      state: a.state,
      excerpt: a.excerpt,
      zipCodes: a.zipCodes,
    })
    console.log(`  Service Area: ${a.name}`)
  }
}

async function seedBrands() {
  console.log('Seeding brands...')
  const brands = [
    { name: 'Sub-Zero', slug: 'sub-zero-appliance-repair-service-nj', logoUrl: 'https://appliancenj.com/wp-content/uploads/2021/06/Sub-zero-logo.jpg', featured: true },
    { name: 'Viking', slug: 'viking-appliance-repair-service-nj', logoUrl: 'https://appliancenj.com/wp-content/uploads/2021/06/Viking-logo.jpg', featured: true },
    { name: 'Thermador', slug: 'thermador-appliance-repair-service-nj', logoUrl: 'https://appliancenj.com/wp-content/uploads/2021/06/Thermador.png', featured: true },
    { name: 'Miele', slug: 'miele-appliance-repair-service-nj', logoUrl: 'https://appliancenj.com/wp-content/uploads/2021/06/Miele-logo.png', featured: true },
    { name: 'Wolf', slug: 'wolf-appliance-repair-service-nj', logoUrl: 'https://appliancenj.com/wp-content/uploads/2021/06/Wolf-logo.jpg', featured: true },
    { name: 'Samsung', slug: 'samsung-appliance-repair-service-nj', featured: false },
    { name: 'LG', slug: 'lg-appliance-repair-service-nj', featured: false },
    { name: 'Bosch', slug: 'bosch-appliance-repair-service-nj', featured: false },
    { name: 'KitchenAid', slug: 'kitchenaid-appliance-repair-service-nj', featured: false },
    { name: 'Jenn-Air', slug: 'jenn-air-appliance-repair-service-nj', featured: false },
    { name: 'Electrolux', slug: 'electrolux-appliance-repair-service-nj', featured: false },
    { name: 'Kenmore', slug: 'kenmore-appliance-repair-service-nj', featured: false },
    { name: 'GE', slug: 'general-electric-ge-appliance-repair-service-nj', featured: false },
    { name: 'GE Profile', slug: 'ge-profile-appliance-repair-service-nj', featured: false },
    { name: 'GE Monogram', slug: 'ge-monogram-appliance-repair-service-nj', featured: false },
    { name: 'GE Cafe', slug: 'ge-cafe-appliance-repair-service-nj', featured: false },
    { name: 'Maytag', slug: 'maytag-appliance-repair-service-nj', featured: false },
    { name: 'Whirlpool', slug: 'whirlpool-appliance-repair-service-nj', featured: false },
    { name: 'Frigidaire', slug: 'frigidaire-appliance-repair-service-nj', featured: false },
    { name: 'Admiral', slug: 'admiral-appliance-repair-service-nj', featured: false },
    { name: 'Amana', slug: 'amana-appliance-repair-service-nj', featured: false },
    { name: 'Americana', slug: 'americana-appliance-repair-service-nj', featured: false },
    { name: 'Asko', slug: 'asko-appliance-repair-service-nj', featured: false },
    { name: 'Avanti', slug: 'avanti-appliance-repair-service-nj', featured: false },
    { name: 'Caloric', slug: 'caloric-appliance-repair-service-nj', featured: false },
    { name: 'Dacor', slug: 'dacor-appliance-repair-service-nj', featured: false },
    { name: 'DCS', slug: 'dcs-appliance-repair-service-nj', featured: false },
    { name: 'Fisher & Paykel', slug: 'fisher-paykel-appliance-repair-service-nj', featured: false },
    { name: 'Gaggenau', slug: 'gaggenau-appliance-repair-service-nj', featured: false },
    { name: 'Hotpoint', slug: 'hotpoint-appliance-repair-service-nj', featured: false },
    { name: 'Kelvinator', slug: 'kelvinator-appliance-repair-service-nj', featured: false },
    { name: 'Kenmore 90 Series', slug: 'kenmore-90-series-appliance-repair-service-nj', featured: false },
    { name: 'Kenmore Oasis', slug: 'kenmore-oasis-appliance-repair-service-nj', featured: false },
    { name: 'Kenmore Galaxy', slug: 'kenmore-galaxy-appliance-repair-service-nj', featured: false },
    { name: 'Kenmore Superba', slug: 'kenmore-superba-appliance-repair-service-nj', featured: false },
    { name: 'LG Tromm', slug: 'lg-tromm-appliance-repair-service-nj', featured: false },
    { name: 'Magic Chef', slug: 'magic-chef-appliance-repair-service-nj', featured: false },
    { name: 'Maytag Performa', slug: 'maytag-perfoma-appliance-repair-service-nj', featured: false },
    { name: 'Maytag Neptune', slug: 'maytag-neptune-appliance-repair-service-nj', featured: false },
    { name: 'Maytag Atlantis', slug: 'maytag-atlantis-appliance-repair-service-nj', featured: false },
    { name: 'Maytag Bravos', slug: 'maytag-bravos-appliance-repair-service-nj', featured: false },
    { name: 'Maytag Centennial', slug: 'maytag-centennial-appliance-repair-service-nj', featured: false },
    { name: 'Maytag Gemini', slug: 'maytag-gemini-appliance-repair-service-nj', featured: false },
    { name: 'Roper', slug: 'roper-appliance-repair-service-nj', featured: false },
    { name: 'Speed Queen', slug: 'speed-queen-appliance-repair-service-nj', featured: false },
    { name: 'Tappan', slug: 'tappan-appliance-repair-service-nj', featured: false },
    { name: 'U Line', slug: 'u-line-appliance-repair-service-nj', featured: false },
    { name: 'Westinghouse', slug: 'westinghouse-appliance-repair-service-nj', featured: false },
    { name: 'Whirlpool Duet', slug: 'whirlpool-duet-appliance-repair-service-nj', featured: false },
    { name: 'Whirlpool Cabrio', slug: 'whirlpool-carbio-appliance-repair-service-nj', featured: false },
    { name: 'Whirlpool Gold', slug: 'whirlpool-gold-appliance-repair-service-nj', featured: false },
    { name: 'Haier', slug: 'haier-appliance-repair-service-nj', featured: false },
  ]

  for (let i = 0; i < brands.length; i++) {
    const b = brands[i]
    const id = docId('brand', b.slug)
    await client.createOrReplace({
      _id: id,
      _type: 'brand',
      name: b.name,
      slug: slug(b.slug),
      status: 'published',
      logoUrl: b.logoUrl || '',
      featured: b.featured,
      order: i,
    })
  }
  console.log(`  ${brands.length} brands seeded.`)
}

async function seedTestimonials() {
  console.log('Seeding testimonials...')
  const testimonials = [
    { name: 'Ira K.', location: 'Monmouth County, NJ', rating: 5, text: "Ilya was very punctual, friendly, and caring. That's rare. Highly recommend for laundry maintenance work.", service: 'Frigidaire Washer & Dryer Repair', date: '2024-11-15' },
    { name: 'Marcus J.', location: 'Middlesex County, NJ', rating: 5, text: 'Recently lost your number and hired another company from the internet. So sorry I did.', service: 'Maytag Washer Repair', date: '2024-11-10' },
    { name: 'Brian C.', location: 'Monmouth County, NJ', rating: 5, text: 'I called and was able to schedule an appointment right away. The technician arrived on time, identified the problem quickly, and fixed it on the spot.', service: 'LG Dishwasher Repair', date: '2024-11-05' },
    { name: 'Frederick M.', location: 'Middlesex County, NJ', rating: 5, text: 'Came out the next day. Demonstrated knowledge of their craft. Repaired 3 appliances all at once.', service: 'Electrolux Multiple Appliance Repair', date: '2024-10-28' },
    { name: 'Lisa C.', location: 'Monmouth County, NJ', rating: 5, text: 'Very good company. Fixed my stove through them. Very happy with the service and technician.', service: 'Bosch Stove Repair', date: '2024-10-20' },
    { name: 'Natasha S.', location: 'Monmouth County, NJ', rating: 5, text: 'The technician, Josh was very knowledgeable. I would recommend this company to anyone needing refrigerator work.', service: 'Maytag Refrigerator Repair', date: '2024-10-15' },
    { name: 'Alex K.', location: 'Middlesex County, NJ', rating: 5, text: 'Did a fine job, clean and reliable. I would hire them again.', service: 'Frigidaire Dishwasher Repair', date: '2024-10-10' },
    { name: 'Tom M.', location: 'Monmouth County, NJ', rating: 5, text: 'I was impressed with the punctuality, professionalism and low fees. Great job.', service: 'Whirlpool Refrigerator Repair', date: '2024-10-05' },
    { name: 'Anthony Z.', location: 'Middlesex County, NJ', rating: 5, text: 'I am so happy to have found your company. I will continue to use you and recommend your services to my friends.', service: 'GE Washer & Dryer Repair', date: '2024-09-28' },
  ]

  for (let i = 0; i < testimonials.length; i++) {
    const t = testimonials[i]
    const id = docId('testimonial', `review-${i + 1}`)
    await client.createOrReplace({
      _id: id,
      _type: 'testimonial',
      customerName: t.name,
      location: t.location,
      rating: t.rating,
      content: t.text,
      date: t.date,
      status: 'published',
      featured: i < 5,
    })
  }
  console.log(`  ${testimonials.length} testimonials seeded.`)
}

async function seedTeamMembers() {
  console.log('Seeding team members...')
  const members = [
    { name: 'Michael Richardson', position: 'Founder & Master Technician', shortBio: 'With over 25 years of experience in premier appliance repair, Michael founded Advanced Appliance Repair Service to bring expert service to homeowners.' },
    { name: 'David Thompson', position: 'Senior Service Technician', shortBio: 'David specializes in refrigeration systems and has been with our team for 15 years. His expertise in Sub-Zero and Miele appliances is unparalleled.' },
    { name: 'James Wilson', position: 'Cooking Appliance Specialist', shortBio: 'James is our Wolf and Viking expert with specialized training in premier cooking appliances. He brings 12 years of dedicated experience.' },
    { name: 'Sarah Mitchell', position: 'Customer Service Manager', shortBio: 'Sarah ensures every client receives the attentive service they deserve. She coordinates our scheduling to minimize wait times.' },
  ]

  for (let i = 0; i < members.length; i++) {
    const m = members[i]
    const id = docId('teamMember', m.name)
    await client.createOrReplace({
      _id: id,
      _type: 'teamMember',
      name: m.name,
      position: m.position,
      shortBio: m.shortBio,
      status: 'published',
      order: i,
    })
  }
  console.log(`  ${members.length} team members seeded.`)
}

async function seedBlogPosts() {
  console.log('Seeding blog posts...')
  const posts = [
    {
      slug: 'emergency-washer-repair-guide',
      title: 'Emergency Washer Repair: What to Do First',
      excerpt: 'Your washing machine just broke down mid-cycle. Water everywhere. Clothes soaking wet. What do you do first?',
      author: 'Advanced Appliance Team',
      publishedDate: '2024-11-20',
      categories: ['Tips'],
      tags: ['Washer', 'Emergency', 'Repair', 'Tips'],
    },
    {
      slug: 'dryer-not-heating-guide',
      title: 'Dryer Not Heating? A 5-Step Troubleshooting Guide',
      excerpt: 'Is your dryer running but not producing heat? Here are 5 things to check before calling for service.',
      author: 'Advanced Appliance Team',
      publishedDate: '2024-11-15',
      categories: ['Tips'],
      tags: ['Dryer', 'Heating', 'Troubleshooting', 'Tips'],
    },
    {
      slug: 'dishwasher-not-draining-fix',
      title: 'How to Fix a Dishwasher Not Draining: A DIY Guide',
      excerpt: 'Standing water in your dishwasher? Before you call for service, try these simple fixes.',
      author: 'Advanced Appliance Team',
      publishedDate: '2024-11-10',
      categories: ['Tips'],
      tags: ['Dishwasher', 'Draining', 'DIY', 'Tips'],
    },
    {
      slug: 'kitchen-appliance-repair-guide',
      title: "Kitchen Appliance Repair: A Complete Homeowner's Guide",
      excerpt: 'Everything you need to know about maintaining and repairing your kitchen appliances.',
      author: 'Advanced Appliance Team',
      publishedDate: '2024-11-05',
      categories: ['Guide'],
      tags: ['Kitchen', 'Appliances', 'Maintenance', 'Guide'],
    },
  ]

  for (const p of posts) {
    const id = docId('blogPost', p.slug)
    await client.createOrReplace({
      _id: id,
      _type: 'blogPost',
      title: p.title,
      slug: slug(p.slug),
      status: 'published',
      excerpt: p.excerpt,
      author: p.author,
      publishedDate: p.publishedDate,
      categories: p.categories,
      tags: p.tags,
      content: [
        {
          _type: 'block',
          _key: `block-${p.slug}`,
          style: 'normal',
          children: [{ _type: 'span', _key: 'span0', text: p.excerpt, marks: [] }],
          markDefs: [],
        },
      ],
    })
    console.log(`  Blog: ${p.title}`)
  }
}

async function seedCertifications() {
  console.log('Seeding certifications...')
  const certs = [
    { name: 'Sub-Zero Certified', issuer: 'Sub-Zero Group', year: '2024' },
    { name: 'Wolf Factory Trained', issuer: 'Wolf Appliance', year: '2024' },
    { name: 'Viking Authorized Service', issuer: 'Viking Range', year: '2024' },
    { name: 'Thermador Certified', issuer: 'BSH Home Appliances', year: '2024' },
    { name: 'Miele Premier Partner', issuer: 'Miele', year: '2024' },
    { name: 'EPA 608 Certified', issuer: 'EPA', year: '2023' },
  ]

  for (let i = 0; i < certs.length; i++) {
    const c = certs[i]
    const id = docId('certification', c.name)
    await client.createOrReplace({
      _id: id,
      _type: 'certification',
      name: c.name,
      issuer: c.issuer,
      year: c.year,
      status: 'published',
      order: i,
    })
  }
  console.log(`  ${certs.length} certifications seeded.`)
}

async function seedTrustBadges() {
  console.log('Seeding trust badges...')
  const badges = [
    { title: '$100 Diagnostic Fee', description: 'Plus parts and labor. No hidden fees' },
    { title: '24/7 Assistance', description: 'Live operators available around the clock' },
    { title: 'Fast Scheduling', description: 'Schedule next day, service tomorrow' },
    { title: '365-Day Warranty', description: 'Coverage on parts with matching labor warranty' },
    { title: '30+ Years Experience', description: 'Professional service since 1992' },
    { title: 'Genuine OEM Parts', description: 'We use only manufacturer parts' },
  ]

  for (let i = 0; i < badges.length; i++) {
    const b = badges[i]
    const id = docId('trustBadge', b.title)
    await client.createOrReplace({
      _id: id,
      _type: 'trustBadge',
      title: b.title,
      description: b.description,
      status: 'published',
      order: i,
    })
  }
  console.log(`  ${badges.length} trust badges seeded.`)
}

async function seedSpecials() {
  console.log('Seeding specials...')
  const specials = [
    { title: '$100 Diagnostic Fee', description: 'Plus parts and labor. No other hidden fees.', icon: 'diagnostic' },
    { title: '10% OFF Special', description: 'Submit a Google review for 10% off your next appointment.', icon: 'discount' },
    { title: '$129 Appliance Tune-Up', description: 'Regular maintenance recommended every 4 years.', icon: 'maintenance' },
  ]

  for (let i = 0; i < specials.length; i++) {
    const s = specials[i]
    const id = docId('special', s.title)
    await client.createOrReplace({
      _id: id,
      _type: 'special',
      title: s.title,
      description: s.description,
      icon: s.icon,
      status: 'published',
      order: i,
    })
  }
  console.log(`  ${specials.length} specials seeded.`)
}

async function seedHowItWorks() {
  console.log('Seeding how-it-works steps...')
  const steps = [
    { step: 1, title: 'Book', description: 'Schedule an appointment for a convenient time that works for you.', icon: 'book' },
    { step: 2, title: 'Repair', description: 'We diagnose the issue, explain the problem, and repair your appliance.', icon: 'repair' },
    { step: 3, title: 'Relax', description: 'Our 365-day warranty covers all repairs on parts and labor.', icon: 'relax' },
  ]

  for (const s of steps) {
    const id = docId('howItWorksStep', s.title)
    await client.createOrReplace({
      _id: id,
      _type: 'howItWorksStep',
      step: s.step,
      title: s.title,
      description: s.description,
      icon: s.icon,
      status: 'published',
    })
    console.log(`  Step ${s.step}: ${s.title}`)
  }
}

async function seedGeneralFaqs() {
  console.log('Seeding general FAQs...')
  const faqs = [
    { question: 'What areas do you serve?', answer: 'We provide appliance repair services in parts of Monmouth and Middlesex Counties, including Morganville, Marlboro, Holmdel, Red Bank, Freehold, Old Bridge, Edison, and many other communities.' },
    { question: 'How quickly can you schedule service?', answer: 'Schedule your appointment, and we can often provide next day service. For emergencies, we do our best to accommodate urgent requests.' },
    { question: 'What brands do you repair?', answer: 'We are factory-trained to service Sub-Zero, Viking, Thermador, Miele, and Wolf. We also service Samsung, LG, Bosch, KitchenAid, Whirlpool, GE, Maytag, Kenmore, Jenn-Air, Electrolux, and many more.' },
    { question: 'Do you provide warranties on repairs?', answer: 'Yes, all our repairs come with a 365-day warranty on parts with matching labor warranty coverage.' },
    { question: 'How much does a service call cost?', answer: 'Our diagnostic fee is $100, plus parts and labor. No hidden fees. We provide a complete estimate before beginning any work.' },
    { question: 'Are your technicians factory trained?', answer: 'Yes! Our technicians receive continuous factory training from major manufacturers. We have been in business since 1992 - over 30 years of experience.' },
    { question: 'What appliances do you repair?', answer: 'We repair all major kitchen and laundry appliances including refrigerators, washers, dryers, dishwashers, ovens, ranges, cooktops, freezers, and stoves - both gas and electric.' },
    { question: 'Do you use genuine parts?', answer: 'Yes, we use only genuine OEM (Original Equipment Manufacturer) parts for all repairs to ensure quality and reliability.' },
  ]

  for (let i = 0; i < faqs.length; i++) {
    const f = faqs[i]
    const id = docId('generalFaq', `faq-${i + 1}`)
    await client.createOrReplace({
      _id: id,
      _type: 'generalFaq',
      question: f.question,
      answer: f.answer,
      category: 'General',
      status: 'published',
      order: i,
    })
  }
  console.log(`  ${faqs.length} FAQs seeded.`)
}

async function main() {
  console.log(`\nSeeding Sanity CMS (project: ${projectId}, dataset: ${dataset})\n`)

  try {
    await seedSettings()
    await seedServices()
    await seedServiceAreas()
    await seedBrands()
    await seedTestimonials()
    await seedTeamMembers()
    await seedBlogPosts()
    await seedCertifications()
    await seedTrustBadges()
    await seedSpecials()
    await seedHowItWorks()
    await seedGeneralFaqs()

    console.log('\nAll content seeded successfully!')
    console.log('Open /studio to verify the content in Sanity Studio.\n')
  } catch (error) {
    console.error('\nSeed failed:', error)
    process.exit(1)
  }
}

main()
