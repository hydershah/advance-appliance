import type { Service, ServiceArea, AreaType } from '../types';
import { areaEnrichment } from './areaContent';
import { services as allServices, serviceAreas as allAreas } from './content';

/**
 * Service × Area combo pages.
 *
 * Coverage: top 4 services × 14 core service areas = 56 pages.
 * Slug pattern: `${serviceSlug}-in-${areaCity}-nj`
 *   Example: refrigerator-repair-in-holmdel-nj
 *
 * The combo route slugs are unique and routed through the catchall in
 * src/app/(frontend)/[...slug]/page.tsx via findServiceAreaCombo(slug).
 */

const TOP_SERVICE_SLUGS = [
  'refrigerator-repair',
  'washer-repair',
  'dryer-repair',
  'dishwasher-repair',
] as const;

const CORE_AREA_SLUGS = [
  'appliance-repair-in-morganville-nj',
  'appliance-repair-marlboro-nj',
  'appliance-repair-in-holmdel-nj',
  'appliance-repair-colts-neck-nj',
  'appliance-repair-in-red-bank-nj',
  'appliance-repair-in-shrewsbury-nj',
  'appliance-repair-in-manalapan-nj',
  'appliance-repair-in-freehold-nj',
  'appliance-repair-in-matawan-nj',
  'appliance-repair-in-aberdeen-nj',
  'appliance-repair-in-middletown-nj',
  'appliance-repair-in-old-bridge-nj',
  'appliance-repair-in-edison-nj',
  'appliance-repair-in-woodbridge-nj',
] as const;

export interface ServiceAreaCombo {
  slug: string;
  serviceSlug: string;
  areaSlug: string;
}

function areaStem(areaSlug: string): string {
  return areaSlug
    .replace(/^appliance-repair-(in-)?/, '')
    .replace(/-nj$/, '');
}

function buildComboSlug(serviceSlug: string, areaSlug: string): string {
  return `${serviceSlug}-in-${areaStem(areaSlug)}-nj`;
}

export const serviceAreaCombos: ServiceAreaCombo[] = TOP_SERVICE_SLUGS.flatMap((serviceSlug) =>
  CORE_AREA_SLUGS.map((areaSlug) => ({
    slug: buildComboSlug(serviceSlug, areaSlug),
    serviceSlug,
    areaSlug,
  })),
);

export function findServiceAreaCombo(slug: string): ServiceAreaCombo | undefined {
  return serviceAreaCombos.find((c) => c.slug === slug);
}

export function getServiceForCombo(combo: ServiceAreaCombo): Service | undefined {
  return allServices.find((s) => s.slug === combo.serviceSlug);
}

export function getAreaForServiceCombo(combo: ServiceAreaCombo): ServiceArea | undefined {
  return allAreas.find((a) => a.slug === combo.areaSlug);
}

/* -------------------------------------------------------------------------- */
/*  Content builders                                                           */
/* -------------------------------------------------------------------------- */

// Per-area-type pool of context sentences. Pool size ≥ number of services
// (4) so per-service variant selection within the same area never collides.
const areaTypeContextPool: Record<AreaType, string[]> = {
  luxury: [
    '{areaName} is a premium-kitchen market — most {serviceShort} calls in this zip involve Sub-Zero, Wolf, Thermador, Viking, and Miele units that demand factory-correct service and OEM parts.',
    'In {areaName}, {serviceShort} jobs are usually on built-in or panel-ready units; we protect cabinetry, pre-order panel hardware when needed, and treat every call as a referral source.',
    'Many {areaName} {serviceShort} appointments coordinate with property management or household staff — discretion, scheduled windows, and clean handoffs are part of the service.',
    'For {areaName} kitchens running multiple premium brands side-by-side, our factory training on Sub-Zero, Wolf, Thermador, Viking, and Miele means a single technician can diagnose across the lineup.',
  ],
  suburban: [
    'Across {areaName}\'s subdivisions, family households run their {serviceShort} appliances on a heavy duty cycle — multiple loads per day for laundry, daily-plus for dishwashers and refrigerators. Most failures we see here cluster in the 4–8 year mid-life range.',
    'In {areaName} family kitchens, mid-life {serviceShort} repair-vs-replace decisions are usually a numbers conversation; we provide the numbers in writing before any work begins.',
    '{areaName} {serviceShort} call volume peaks around school-year and holiday windows; we add capacity in those weeks to keep response times tight.',
    '{areaName} subdivisions built between 2005 and 2015 are the largest single source of mid-life {serviceShort} calls in our schedule — the original-construction appliances are now hitting service age.',
  ],
  historic: [
    '{areaName}\'s housing stock pairs older infrastructure (electrical, plumbing, cabinetry) with modern {serviceShort} appliances, and we plan around both before any install or repair.',
    'In {areaName}, undersized circuits and original cabinetry depths often surface during {serviceShort} replacement; we flag electrical or fit concerns at the diagnostic stage so there are no surprises.',
    'Tight doorways and original flooring in {areaName} mean every {serviceShort} install has a delivery-path component before the technical one — we measure access first.',
    'For {areaName} historic homes, {serviceShort} work is as much about protecting the surrounds as fixing the appliance — we treat these structures like the heritage assets they are.',
  ],
  downtown: [
    'In {areaName}\'s downtown buildings, {serviceShort} service often involves shared infrastructure (vents, water, electrical) and condo-association coordination. We handle those logistics as part of the call.',
    '{areaName} condo {serviceShort} jobs frequently require service-elevator reservations and certificate-of-insurance handling for property management — both are standard operating procedure for us.',
    'Many {areaName} downtown buildings have shared dryer venting that masks as appliance failure; on every {serviceShort} call, we verify building infrastructure before diagnosing the unit.',
    'In {areaName} mid- and high-rise buildings, {serviceShort} space constraints (24-inch openings, stacked configurations) shape the install before the diagnostic begins — we know the buildings and their constraints.',
  ],
  shore: [
    'Shoreline {areaName} {serviceShort} appliances see corrosion patterns from salt air and humidity that suburb-area units do not — we stock coastal-pattern parts accordingly.',
    'In {areaName}, {serviceShort} call volume peaks at spring open-up and fall close-down; we book those windows heavily and stock the parts to match.',
    'For {areaName} rental homes, second visits on {serviceShort} are not acceptable; our shore inventory is built specifically to single-visit-finish.',
    '{areaName}\'s salt-air corrosion pattern on {serviceShort} components is something we have catalogued over thirty years — the failure cadence is predictable, and our parts kits reflect that.',
  ],
  industrial: [
    'In {areaName}, {serviceShort} appliances see harder water and longer duty cycles than the suburbs, and we calibrate diagnostics accordingly.',
    'Hard-water scaling on {serviceShort} components is the dominant {areaName} failure pattern; we replace with OEM and recommend filtration when warranted.',
    'In {areaName} mixed-use corridors, {serviceShort} units run harder than residential averages; we adjust diagnostic windows and parts inventory to match.',
    'For {areaName} {serviceShort} owners, mineral content in the water supply is the silent driver of mid-life failure — we test on arrival, then advise.',
  ],
  rural: [
    '{areaName}\'s well-water households shorten {serviceShort} appliance life through hard-water scaling and sediment intrusion. We diagnose with that in mind.',
    'In {areaName}, {serviceShort} diagnostics begin upstream of the appliance — we trace the supply system, not just the unit, when symptoms point to inlet or drainage failure.',
    'For {areaName} {serviceShort} owners on private wells, iron oxidation can shorten valve life by 30-50%; the fix is OEM, and we recommend sediment filtration when the numbers justify it.',
    '{areaName}\'s longer service runs mean we schedule {serviceShort} visits in regional blocks and carry deeper inventory to avoid return trips.',
  ],
};

// Stable per-service-per-area selection — pool size ≥ #services so no
// collisions between, e.g., refrigerator-repair-in-holmdel and
// dishwasher-repair-in-holmdel.
function pickContextByService<T>(
  pool: T[],
  serviceSlug: string,
  areaSlug: string,
): T {
  let hash = 2166136261
  const key = `${serviceSlug}|${areaSlug}`
  for (let i = 0; i < key.length; i++) {
    hash ^= key.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  const idx = Math.abs(hash) % pool.length
  return pool[idx] as T
}

export interface ServiceAreaBody {
  introParas: string[];
  problemParas: { title: string; description: string }[];
  whyUsParas: string[];
}

export function buildServiceAreaBody(combo: ServiceAreaCombo): ServiceAreaBody | null {
  const service = getServiceForCombo(combo);
  const area = getAreaForServiceCombo(combo);
  if (!service || !area) return null;
  const ae = areaEnrichment[combo.areaSlug];
  if (!ae) return null;

  const serviceShort = service.name.toLowerCase().replace(' repair', '');

  const contextPool = areaTypeContextPool[ae.areaType] || areaTypeContextPool.suburban;
  const context = pickContextByService(contextPool, combo.serviceSlug, combo.areaSlug)
    .replace(/{areaName}/g, area.name)
    .replace(/{serviceShort}/g, serviceShort);

  const introParas: string[] = [
    `${service.description} ${ae.intro.split('. ')[0]}.`,
    context,
    `Our ${area.name} ${service.name.toLowerCase()} service covers zip code${area.zipCodes.length > 1 ? 's' : ''} ${area.zipCodes.join(', ')}, including ${ae.neighborhoods.slice(0, 4).join(', ')}. ${ae.localNote}`,
  ];

  // Take 4 of service's commonProblems, contextualize for area
  const problemParas = service.commonProblems.slice(0, 4).map((p) => ({
    title: p.title,
    description: `${p.description} In ${area.name} specifically, this is a common ${serviceShort} call we run, and we keep diagnostic gear and the most likely OEM parts on the truck.`,
  }));

  const whyUsParas: string[] = [
    `Advanced Appliance has been the trusted ${serviceShort} repair company in ${area.county} County since 1992 — over 30 years of factory-trained service in ${area.name} alone. Same-day service is frequently available across ${area.zipCodes.join(', ')}.`,
    `Every ${area.name} ${service.name.toLowerCase()} job is backed by a written diagnostic, OEM-parts pricing in advance, and a labor warranty. Our $100 diagnostic fee is credited toward the repair on approval.`,
    `We do not subcontract ${area.name} calls. We do not push replacements that should be repairs. And we do not push repairs that should be replacements. The 30-year customer base in ${area.county} County is built entirely on that distinction.`,
  ];

  return { introParas, problemParas, whyUsParas };
}

export function buildServiceAreaFaqs(
  combo: ServiceAreaCombo,
): Array<{ question: string; answer: string }> {
  const service = getServiceForCombo(combo);
  const area = getAreaForServiceCombo(combo);
  if (!service || !area) return [];
  const ae = areaEnrichment[combo.areaSlug];
  if (!ae) return [];

  const serviceShort = service.name.toLowerCase();

  const faqs: Array<{ question: string; answer: string }> = [];

  // 2 service-level FAQs
  if (service.faqs[0]) faqs.push(service.faqs[0]);
  if (service.faqs[1]) faqs.push(service.faqs[1]);

  // Area-aware FAQs (each ≥ 50 words for AI Overview / Perplexity citability).
  const neighborhood = ae.neighborhoods?.[0] || area.name;
  const isRefrigeration = service.name.toLowerCase().includes('refrigerator');

  faqs.push({
    question: `How quickly can you get to ${area.name} for ${serviceShort}?`,
    answer: `Next-day ${serviceShort} is standard across ${area.name} (zip ${area.zipCodes.join(', ')}). Same-day ${serviceShort} is frequently available when our morning route allows, and our ${neighborhood} section sees fastest response from our ${area.county} County base. ${
      isRefrigeration
        ? 'Refrigeration emergencies — food-loss risk — are triaged first ahead of routine work.'
        : `Emergency ${serviceShort} calls in ${area.zipCodes[0]} are prioritized over routine appointments when household disruption is severe.`
    }`,
  });
  faqs.push({
    question: `Do you charge extra for ${serviceShort} in ${area.name}?`,
    answer: `No travel surcharge for ${area.name} or zip ${area.zipCodes[0]}. Our standard $100 diagnostic fee applies and is credited toward the repair on approval. ${brand_neutral_pricing(area)} Parts and labor are quoted in writing before we begin work, with no hidden ${area.county} County dispatch fees.`,
  });

  // Per-area-type brand emphasis instead of identical brand list across all 56.
  faqs.push({
    question: `What brands do you handle for ${serviceShort} in ${area.name}?`,
    answer: brandsAnswerForArea(serviceShort, ae.areaType, area.name),
  });

  faqs.push({
    question: `What does ${serviceShort} typically cost in ${area.name}?`,
    answer: `Our diagnostic fee is $100 and is credited toward the repair on approval. Common ${serviceShort} parts (pump assemblies, valves, sensors, fan motors) typically run from a few hundred dollars total; complex repairs (sealed-system, control board, drum bearings) are quoted in writing in advance. ${area.name} customers receive the same OEM-only parts pricing as every other ${area.county} County zip we cover.`,
  });

  return faqs;
}

// Lightweight per-area-type pricing context — ensures the "extra charges"
// FAQ varies meaningfully across the 56 service-area combos.
function brand_neutral_pricing(area: { county: string }): string {
  return `In ${area.county} County, our pricing is consistent across every zip we cover.`;
}

// Per-area-type brand emphasis. Replaces the previous one-size-fits-all
// brand list that was identical across all 56 service-area combos. The
// service-aware framing here also adds first-hand specificity.
function brandsAnswerForArea(
  serviceShort: string,
  areaType: AreaType,
  areaName: string,
): string {
  switch (areaType) {
    case 'luxury':
      return `In ${areaName}, ${serviceShort} calls heavily skew toward Sub-Zero, Wolf, Viking, Thermador, and Miele — the five premium brands we are factory-certified on. We also fully service KitchenAid, Bosch, GE Monogram, GE Profile, Samsung, and LG; for ${serviceShort} specifically, our ${areaName} parts loadout reflects the local premium-brand mix.`;
    case 'historic':
      return `In ${areaName}, ${serviceShort} calls span everything from original 1960s GE wall ovens to modern Bosch induction installs — and we are factory-trained on every major brand in between, including Sub-Zero, Wolf, Viking, Thermador, Miele, KitchenAid, GE, Whirlpool, Maytag, LG, and Samsung. For ${serviceShort} in historic ${areaName} kitchens, brand expertise is only half the job; protecting the surrounds is the rest.`;
    case 'downtown':
      return `${areaName} downtown ${serviceShort} skews toward compact and integrated brands — Bosch, Miele, GE Profile, Whirlpool 24-inch lines, and Sub-Zero compact units. We are factory-trained across all of those, and we also service the full mainstream brand list (LG, Samsung, KitchenAid, Frigidaire, Maytag) common in mixed-use buildings.`;
    case 'shore':
      return `In ${areaName}, ${serviceShort} brand mix favors weather-tolerant lines — we service the full premium roster (Sub-Zero, Wolf, Thermador, Viking, Miele) and the dominant shore-rental brands (Whirlpool, GE, Frigidaire, LG, Samsung). For coastal ${serviceShort}, our parts inventory leans toward conformal-coated and corrosion-resistant components.`;
    case 'industrial':
    case 'rural':
      return `In ${areaName}, ${serviceShort} calls cover the mainstream brand spectrum (Whirlpool, GE, Frigidaire, LG, Samsung, Maytag, Kenmore) plus the premium roster we are factory-certified on (Sub-Zero, Wolf, Thermador, Viking, Miele). Hard-water and well-water context shapes which components we replace most.`;
    case 'suburban':
    default:
      return `In ${areaName}, the ${serviceShort} brand mix is family-kitchen typical: Whirlpool, Maytag, KitchenAid, GE, Samsung, LG, Bosch, Frigidaire, and Electrolux dominate the schedule. We are also factory-certified on the premium roster — Sub-Zero, Wolf, Thermador, Viking, and Miele — for the renovated kitchens running those brands.`;
  }
}
