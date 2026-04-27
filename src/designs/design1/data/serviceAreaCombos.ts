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

const areaTypeContext: Record<AreaType, string> = {
  luxury:
    '{areaName} is a premium-kitchen market — most {serviceShort} calls in this zip involve Sub-Zero, Wolf, Thermador, Viking, and Miele units that demand factory-correct service and OEM parts.',
  suburban:
    'Across {areaName}\'s subdivisions, family households run their {serviceShort} appliances on a heavy duty cycle — multiple loads per day for laundry, daily-plus for dishwashers and refrigerators. Most failures we see here cluster in the 4–8 year mid-life range.',
  historic:
    '{areaName}\'s housing stock pairs older infrastructure (electrical, plumbing, cabinetry) with modern {serviceShort} appliances, and we plan around both before any install or repair.',
  downtown:
    'In {areaName}\'s downtown buildings, {serviceShort} service often involves shared infrastructure (vents, water, electrical) and condo-association coordination. We handle those logistics as part of the call.',
  shore:
    'Shoreline {areaName} {serviceShort} appliances see corrosion patterns from salt air and humidity that suburb-area units do not — we stock coastal-pattern parts accordingly.',
  industrial:
    'In {areaName}, {serviceShort} appliances see harder water and longer duty cycles than the suburbs, and we calibrate diagnostics accordingly.',
  rural:
    '{areaName}\'s well-water households shorten {serviceShort} appliance life through hard-water scaling and sediment intrusion. We diagnose with that in mind.',
};

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

  const context = (areaTypeContext[ae.areaType] || areaTypeContext.suburban)
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

  // Area-aware FAQs
  faqs.push({
    question: `How quickly can you get to ${area.name} for ${serviceShort}?`,
    answer: `Next-day service is standard across ${area.name}. Same-day ${serviceShort} is frequently available when our morning route allows. ${service.name.includes('Refrigerator') ? 'Refrigeration emergencies (food-loss risk) are triaged first.' : `Emergency calls in ${area.zipCodes[0]} are prioritized.`}`,
  });
  faqs.push({
    question: `Do you charge extra for ${serviceShort} in ${area.name}?`,
    answer: `No travel surcharge for ${area.name} or ${area.zipCodes[0]}. Our standard $100 diagnostic fee applies and is credited toward the repair if you approve the work.`,
  });

  faqs.push({
    question: `What brands do you handle for ${serviceShort} in ${area.name}?`,
    answer: `All major brands — Sub-Zero, Wolf, Thermador, Viking, Miele, Bosch, KitchenAid, GE, GE Profile, GE Monogram, Whirlpool, Maytag, LG, Samsung, Frigidaire, Electrolux, Jenn-Air, and more. We are factory-trained on the premium lines and stock parts for the mainstream ones.`,
  });

  faqs.push({
    question: `What does ${serviceShort} typically cost in ${area.name}?`,
    answer: `Our diagnostic fee is $100 and is credited toward the repair on approval. Common ${serviceShort} parts (pump assemblies, valves, sensors, fan motors) typically run a few hundred dollars total; complex repairs (sealed system, control board) are quoted in writing before we begin.`,
  });

  return faqs;
}
