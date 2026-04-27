import type { Brand, ServiceArea, AreaType } from '../types';
import { brandEnrichment } from './brandContent';
import { areaEnrichment } from './areaContent';
import { brands as allBrands, serviceAreas as allAreas } from './content';

/**
 * Brand × Area combo pages.
 *
 * Coverage: 5 enriched premium brands × 14 core service areas = 70 pages.
 * Slug pattern: `${brandSlug minus the trailing -service-nj}-in-${areaCity}-nj`
 *   Example: sub-zero-appliance-repair-in-holmdel-nj
 *
 * The combo route slugs are unique and routed through the catchall in
 * src/app/(frontend)/[...slug]/page.tsx via findBrandAreaCombo(slug).
 *
 * Content uniqueness comes from per-areaType bridge paragraphs and signature
 * notes — see buildBrandAreaBody / buildBrandAreaFaqs below.
 */

const ENRICHED_BRAND_SLUGS = [
  'sub-zero-appliance-repair-service-nj',
  'viking-appliance-repair-service-nj',
  'miele-appliance-repair-service-nj',
  'wolf-appliance-repair-service-nj',
  'thermador-appliance-repair-service-nj',
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

export interface BrandAreaCombo {
  slug: string;          // combo URL slug
  brandSlug: string;     // FK to brandEnrichment + brands list
  areaSlug: string;      // FK to areaEnrichment + serviceAreas list
}

/** Strip the redundant `-appliance-repair-service-nj` from a brand slug for use in combos. */
function brandStem(brandSlug: string): string {
  return brandSlug.replace(/-appliance-repair-service-nj$/, '');
}

/** Strip the redundant `appliance-repair-(in-)?` and trailing `-nj` from area slug. */
function areaStem(areaSlug: string): string {
  // Examples:
  //   appliance-repair-in-holmdel-nj   -> holmdel
  //   appliance-repair-marlboro-nj     -> marlboro
  //   appliance-repair-colts-neck-nj   -> colts-neck
  return areaSlug
    .replace(/^appliance-repair-(in-)?/, '')
    .replace(/-nj$/, '');
}

function buildComboSlug(brandSlug: string, areaSlug: string): string {
  return `${brandStem(brandSlug)}-appliance-repair-in-${areaStem(areaSlug)}-nj`;
}

export const brandAreaCombos: BrandAreaCombo[] = ENRICHED_BRAND_SLUGS.flatMap((brandSlug) =>
  CORE_AREA_SLUGS.map((areaSlug) => ({
    slug: buildComboSlug(brandSlug, areaSlug),
    brandSlug,
    areaSlug,
  })),
);

export function findBrandAreaCombo(slug: string): BrandAreaCombo | undefined {
  return brandAreaCombos.find((c) => c.slug === slug);
}

export function getBrandForCombo(combo: BrandAreaCombo): Brand | undefined {
  return allBrands.find((b) => b.slug === combo.brandSlug);
}

export function getAreaForCombo(combo: BrandAreaCombo): ServiceArea | undefined {
  return allAreas.find((a) => a.slug === combo.areaSlug);
}

/* -------------------------------------------------------------------------- */
/*  Content builders                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Per-areaType bridge sentence pool that connects brand + area framing.
 * Picked deterministically by hashing the combo slug so each combo gets a
 * stable variant on rebuild but the 14 areas of the same type get different
 * sentences.
 */
const areaTypeBridges: Record<AreaType, string[]> = {
  luxury: [
    'It is exactly the kind of {areaName} address where premium-built kitchens are non-negotiable, and where {brandName} ownership is the rule rather than the exception.',
    'Across {areaName} estates and renovated kitchens, {brandName} represents the standard of refrigeration and cooking precision homeowners expect — and we have spent decades servicing exactly that.',
    'Most {areaName} kitchens are designed around {brandName} from the cabinet line out, which means panel-ready installs, custom paneling, and integrated diagnostics are part of every call here.',
    'The {areaName} clientele invests in their kitchens accordingly, and {brandName} is consistently the brand we are dispatched to in this zip code.',
  ],
  suburban: [
    'In {areaName} family kitchens, {brandName} appliances handle daily duty cycles that mid-tier brands struggle with — but they still need correct service to last.',
    'Across {areaName}\'s subdivisions, {brandName} ownership is concentrated in newer or fully-renovated kitchens, and we keep parts on the truck for the most common in-warranty and out-of-warranty failures.',
    'When {areaName} homeowners choose {brandName}, they expect the appliance to perform for 15-20 years — that only happens with factory-correct service.',
    'Our {areaName} service routes carry brand-specific parts kits because {brandName} components are not interchangeable with mainstream substitutes.',
  ],
  historic: [
    'Many {areaName} homes pair historic structure with renovated kitchens running {brandName} — and that combination has its own service constraints we have spent decades navigating.',
    'In {areaName}, {brandName} installations frequently sit inside cabinetry that pre-dates the appliance by 50+ years; protecting the surrounds is half the job.',
    'Older {areaName} downtowns mean older electrical, older plumbing, and {brandName} installs that need to be planned around both. We do that planning before the service call begins.',
  ],
  downtown: [
    'In {areaName} condos and apartments above commercial space, {brandName} installs share venting, electrical, and water connections with adjacent units — every diagnostic begins with verifying the building infrastructure.',
    '{areaName}\'s mixed-use buildings are where we see {brandName} compact and integrated lines most often, and we coordinate with property management on every visit.',
    '{brandName} units in {areaName}\'s downtown buildings frequently need service-elevator coordination and certificate-of-insurance handling, which we manage as standard operating procedure.',
  ],
  shore: [
    '{areaName}\'s shore-corridor humidity and salt exposure mean {brandName} units age differently here — we know the failure patterns and stock parts accordingly.',
    'In {areaName}, {brandName} compressors, condenser fans, and ice-maker valves see corrosion patterns we have catalogued over thirty years of shore service.',
    'Shoreline {areaName} {brandName} installs benefit from coastal-pattern parts and conformal-coated electrical connections — both of which we provision on calls in this zip.',
  ],
  industrial: [
    'In {areaName}, {brandName} appliances see harder water and longer duty cycles than the suburbs — diagnostics need to account for both.',
    '{areaName}\'s housing stock pairs older infrastructure with newer {brandName} installs, and the interface between the two is where most of our service calls land.',
  ],
  rural: [
    '{areaName}\'s well water and longer service runs mean {brandName} units need a different maintenance cadence — we adjust diagnostics accordingly.',
    'In {areaName}, {brandName} owners often run on private wells with hard or iron-rich water, and we factor that into every appliance assessment.',
  ],
};

function pickVariant<T>(pool: T[], key: string): T {
  // Stable hash for deterministic per-combo variant selection.
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) | 0;
  }
  const idx = Math.abs(hash) % pool.length;
  return pool[idx] as T;
}

export interface BrandAreaBody {
  introParas: string[];
  failureParas: { title: string; description: string }[];
  whyUsParas: string[];
}

export function buildBrandAreaBody(combo: BrandAreaCombo): BrandAreaBody | null {
  const brand = getBrandForCombo(combo);
  const area = getAreaForCombo(combo);
  if (!brand || !area) return null;
  const be = brandEnrichment[combo.brandSlug];
  const ae = areaEnrichment[combo.areaSlug];
  if (!be || !ae) return null;

  const bridgePool = areaTypeBridges[ae.areaType] || areaTypeBridges.suburban;
  const bridge = pickVariant(bridgePool, combo.slug)
    .replace(/{areaName}/g, area.name)
    .replace(/{brandName}/g, brand.name);

  const introParas: string[] = [
    `${be.intro.split('. ')[0]}. ${ae.intro.split('. ')[0]}.`,
    bridge,
    `Our ${area.name} ${brand.name} service area covers zip code${area.zipCodes.length > 1 ? 's' : ''} ${area.zipCodes.join(', ')}, including ${ae.neighborhoods.slice(0, 4).join(', ')}. ${ae.localNote}`,
  ];

  // Take 3 of brand's most common failures; reframe with area-type context.
  const failureParas = be.commonFailures.slice(0, 3).map((f) => ({
    title: f.title,
    description: `${f.description} In ${area.name} specifically, this is one of the more common ${brand.name} calls we run, and we keep the OEM replacement on the truck.`,
  }));

  const whyUsParas: string[] = [
    `${be.certificationNote} Combined with thirty-plus years of ${area.county} County service experience, that is why ${area.name} homeowners with ${brand.name} appliances call us first.`,
    be.signatureWork,
    `Every ${area.name} ${brand.name} service call comes with a written diagnostic, OEM-parts pricing in advance, and a labor warranty. Same-day service is frequently available across ${area.zipCodes.join(', ')}; emergency refrigeration calls (food-loss risk) are triaged first.`,
  ];

  return { introParas, failureParas, whyUsParas };
}

export function buildBrandAreaFaqs(
  combo: BrandAreaCombo,
): Array<{ question: string; answer: string }> {
  const brand = getBrandForCombo(combo);
  const area = getAreaForCombo(combo);
  if (!brand || !area) return [];
  const be = brandEnrichment[combo.brandSlug];
  const ae = areaEnrichment[combo.areaSlug];
  if (!be || !ae) return [];

  const faqs: Array<{ question: string; answer: string }> = [];

  // 2 brand-level FAQs (top of brandEnrichment list)
  if (be.faqs[0]) faqs.push(be.faqs[0]);
  if (be.faqs[1]) faqs.push(be.faqs[1]);

  // 2 area-aware FAQs
  faqs.push({
    question: `Do you provide ${brand.name} repair in ${area.name}, NJ?`,
    answer: `Yes. We are factory-certified on ${brand.name} and have been servicing ${area.county} County since 1992. ${area.name} is in our core coverage area and we frequently offer same-day service across ${area.zipCodes.join(', ')}.`,
  });
  faqs.push({
    question: `Are there extra charges for ${brand.name} service calls to ${area.name}?`,
    answer: `No. Our standard $100 diagnostic fee applies and is credited toward the repair if you approve the work. There is no travel surcharge for ${area.name} or ${area.zipCodes[0]}.`,
  });

  // 1 combo FAQ (specific to brand+area type)
  faqs.push({
    question: `What ${brand.name} models do you service most in ${area.name}?`,
    answer: `Across ${area.name}, the ${brand.name} units we service most are ${be.productLines.slice(0, 3).join(', ')}. Our truck inventory carries OEM parts for the most common ${brand.name} failures so most repairs complete in one visit.`,
  });

  // 1 final pricing FAQ
  faqs.push({
    question: `What does ${brand.name} repair cost in ${area.name}?`,
    answer: `Our diagnostic fee is $100 and is credited toward the repair on approval. ${brand.name} repairs in ${area.name} typically run from a few hundred dollars for common parts (fan motors, valves, igniters) up to higher amounts for sealed-system or control-board work. We quote in writing before we begin — no surprises.`,
  });

  return faqs;
}
