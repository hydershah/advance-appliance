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

// Core areas for brand-area combo coverage. Morganville is intentionally
// EXCLUDED here — Morganville is a Marlboro Township section and the
// brand-level content is effectively identical to Marlboro. Listing both
// would produce 5 near-duplicate combo pairs (one per premium brand) that
// Google would flag as thin/duplicate. Morganville traffic is captured by
// the Marlboro brand combo plus the standalone Morganville area page.
const CORE_AREA_SLUGS = [
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
 *
 * Pool sizes must be ≥ number of brands so that the per-brand×same-area
 * deterministic variant selection (see `pickVariantByBrand`) cannot
 * collide. With 5 enriched brands today and headroom for 8, every pool
 * has at least 8 unique sentences.
 */
const areaTypeBridges: Record<AreaType, string[]> = {
  luxury: [
    'It is exactly the kind of {areaName} address where premium-built kitchens are non-negotiable, and where {brandName} ownership is the rule rather than the exception.',
    'Across {areaName} estates and renovated kitchens, {brandName} represents the standard of refrigeration and cooking precision homeowners expect — and we have spent decades servicing exactly that.',
    'Most {areaName} kitchens are designed around {brandName} from the cabinet line out, which means panel-ready installs, custom paneling, and integrated diagnostics are part of every call here.',
    'The {areaName} clientele invests in their kitchens accordingly, and {brandName} is consistently the brand we are dispatched to in this zip code.',
    '{areaName} homeowners who buy {brandName} typically own the unit for 15+ years, and that long ownership horizon is exactly why factory-correct sealed-system and control-board service matters here more than anywhere else.',
    'Designers and architects working in {areaName} specify {brandName} repeatedly, and we have serviced enough of those installs to know the integration patterns specific to this town.',
    'For {areaName} kitchens running {brandName} alongside other premium brands (Wolf, Sub-Zero, Miele, Thermador), our factory training across the full luxury lineup is a meaningful differentiator on every call.',
    'When a {brandName} unit fails in {areaName}, the cost-of-failure is high — food loss, dinner-party disruption, or a stalled renovation — and our triage protocols are calibrated to that reality.',
  ],
  suburban: [
    'In {areaName} family kitchens, {brandName} appliances handle daily duty cycles that mid-tier brands struggle with — but they still need correct service to last.',
    'Across {areaName}\'s subdivisions, {brandName} ownership is concentrated in newer or fully-renovated kitchens, and we keep parts on the truck for the most common in-warranty and out-of-warranty failures.',
    'When {areaName} homeowners choose {brandName}, they expect the appliance to perform for 15-20 years — that only happens with factory-correct service.',
    'Our {areaName} service routes carry brand-specific parts kits because {brandName} components are not interchangeable with mainstream substitutes.',
    'Most {areaName} {brandName} owners we service are second-decade owners who chose the brand for longevity — and that longevity only materializes with OEM parts and factory-trained labor.',
    '{areaName} subdivisions built between 2005 and 2015 have a high concentration of {brandName} installs from original construction, and many of those units are now hitting the mid-life service window.',
    'For {areaName} households running multiple loads of laundry, daily refrigeration cycles, and nightly cooking, {brandName} appliances are well-matched — but we still see repeat patterns of mid-life failure that are easier to repair than replace.',
    'In {areaName}, {brandName} repair-vs-replace decisions are usually a numbers conversation. We give the numbers in writing before any work begins.',
  ],
  historic: [
    'Many {areaName} homes pair historic structure with renovated kitchens running {brandName} — and that combination has its own service constraints we have spent decades navigating.',
    'In {areaName}, {brandName} installations frequently sit inside cabinetry that pre-dates the appliance by 50+ years; protecting the surrounds is half the job.',
    'Older {areaName} downtowns mean older electrical, older plumbing, and {brandName} installs that need to be planned around both. We do that planning before the service call begins.',
    '{areaName} historic homes often have undersized 120V circuits feeding modern {brandName} units that demand 240V dedicated; we flag electrical concerns at the diagnostic stage.',
    'Tight {areaName} doorways, original flooring, and non-standard cabinetry depths mean every {brandName} install has a delivery-path component before the technical one.',
    'When servicing {brandName} in {areaName}, we measure access, protect the surrounds, and route around original trim — all before the appliance work begins.',
    'Older {areaName} structures with original details require careful planning before any {brandName} service — we treat those homes like the heritage assets they are.',
    '{areaName} homeowners choosing {brandName} for a historic kitchen renovation are often working with constrained envelopes; our familiarity with these constraints saves second visits.',
  ],
  downtown: [
    'In {areaName} condos and apartments above commercial space, {brandName} installs share venting, electrical, and water connections with adjacent units — every diagnostic begins with verifying the building infrastructure.',
    '{areaName}\'s mixed-use buildings are where we see {brandName} compact and integrated lines most often, and we coordinate with property management on every visit.',
    '{brandName} units in {areaName}\'s downtown buildings frequently need service-elevator coordination and certificate-of-insurance handling, which we manage as standard operating procedure.',
    'For {areaName} condo owners, {brandName} installs are often constrained by 24-inch openings, stacked configurations, or panel-ready depth requirements — we plan accordingly.',
    'Many {areaName} downtown buildings have shared dryer venting that masks as {brandName} dryer failure; we diagnose the vent before declaring the appliance dead.',
    '{areaName}\'s HOA and management requirements vary building to building; we know the buildings, the COIs they require, and the elevator-reservation windows they enforce.',
    'In {areaName} mid-rise and high-rise buildings, {brandName} compact appliances often sit in tight utility closets — our installers carry the right hand tools to work in confined access.',
    '{areaName}\'s downtown {brandName} owners frequently need same-day diagnostics scheduled around tight commute and management-office windows; we accommodate.',
  ],
  shore: [
    '{areaName}\'s shore-corridor humidity and salt exposure mean {brandName} units age differently here — we know the failure patterns and stock parts accordingly.',
    'In {areaName}, {brandName} compressors, condenser fans, and ice-maker valves see corrosion patterns we have catalogued over thirty years of shore service.',
    'Shoreline {areaName} {brandName} installs benefit from coastal-pattern parts and conformal-coated electrical connections — both of which we provision on calls in this zip.',
    'Seasonal-occupancy cycles in {areaName} concentrate {brandName} failures around spring open-up and fall close-down; we book those windows heavily and stock the parts to match.',
    '{areaName}\'s salt-air corrosion accelerates {brandName} compressor start-relay failure and ice-maker solenoid fouling — we replace with OEM and seal connectors against future ingress.',
    'For {areaName} shore homes, we carry coastal-pattern parts (galvanized hardware, sealed connectors) that mainland service routes do not — these are non-substitutable on a rental beach property.',
    '{areaName} {brandName} owners running rental units have zero tolerance for second visits; our shore inventory load is built specifically to avoid them.',
    'Shore {areaName} dryer moisture-sensor drift from damp ducting is a common {brandName} failure pattern we have diagnosed hundreds of times — fix is duct-side, not appliance-side.',
  ],
  industrial: [
    'In {areaName}, {brandName} appliances see harder water and longer duty cycles than the suburbs — diagnostics need to account for both.',
    '{areaName}\'s housing stock pairs older infrastructure with newer {brandName} installs, and the interface between the two is where most of our service calls land.',
    'Hard-water scaling on {brandName} dishwasher pumps and ice-maker valves is the dominant {areaName} failure pattern we see; we replace with OEM and recommend filtration where it makes financial sense.',
    'For {areaName} {brandName} owners, mineral content in the water supply is the silent driver of mid-life failure — we test, then advise.',
    'Older {areaName} electrical infrastructure sometimes pairs poorly with modern high-amperage {brandName} units; we flag panel concerns before any install.',
    '{areaName} {brandName} owners running heavier-than-average laundry loads see drum-bearing wear earlier than the brand expects; we replace bearings with OEM rather than push for unit replacement.',
    'In {areaName}, {brandName} compressor start-relay failure correlates with voltage instability we have measured on our truck VOMs over the years; the fix is brand-specific OEM, never aftermarket.',
    'Mixed-use {areaName} corridors run {brandName} units harder than residential averages, and our diagnostic windows are calibrated accordingly.',
  ],
  rural: [
    '{areaName}\'s well water and longer service runs mean {brandName} units need a different maintenance cadence — we adjust diagnostics accordingly.',
    'In {areaName}, {brandName} owners often run on private wells with hard or iron-rich water, and we factor that into every appliance assessment.',
    'Iron oxidation in {areaName} well water shortens {brandName} ice-maker valve life by 30-50%; we replace with OEM and recommend sediment filtration when warranted.',
    'For {areaName} {brandName} owners on private septic, dishwasher and washer drainage diagnostics begin upstream of the appliance — we trace the system, not just the unit.',
    '{areaName}\'s longer well-pump cycle times can show up as {brandName} inlet-valve mineral scaling within the warranty period; we replace and prevent.',
    'Rural {areaName} routes mean we schedule {brandName} service in regional blocks to keep response times tight — and we carry deeper inventory so a return visit is rare.',
    '{areaName} homeowners who chose {brandName} for longevity benefit most from preventive service tied to local water chemistry — a quick strip test on arrival informs the entire visit.',
    '{areaName}\'s exterior dryer-vent runs are often longer than suburban norms; we measure the run and recommend cleaning intervals accordingly.',
  ],
};

/**
 * Stable per-brand-per-area selection. We treat the brand as the primary
 * dimension because multiple brands at the same area are the cluster most
 * likely to render side-by-side in a SERP — they need maximally distinct
 * bridge sentences. Using brand-then-area in the hash key plus a prime
 * multiplier guarantees adjacent brand slugs hash to different pool slots.
 */
function pickVariantByBrand<T>(pool: T[], brandSlug: string, areaSlug: string): T {
  let hash = 2166136261 // FNV-1a 32-bit offset basis
  const key = `${brandSlug}|${areaSlug}`
  for (let i = 0; i < key.length; i++) {
    hash ^= key.charCodeAt(i)
    hash = Math.imul(hash, 16777619) // FNV prime
  }
  const idx = Math.abs(hash) % pool.length
  return pool[idx] as T
}

export interface BrandAreaBody {
  introParas: string[];
  failureParas: { title: string; description: string }[];
  whyUsParas: string[];
}

// Per-area-type closing sentence pool that localizes each brand failure
// description with area-aware framing. Indexed by area-type so the same
// failure title (e.g., "Evaporator fan motor failure") reads differently
// in a luxury area vs a shore area vs a downtown condo.
const failureClosers: Record<AreaType, string[]> = {
  luxury: [
    'In {areaName} specifically, the panel-ready installs we see make this a particularly delicate fix — we protect cabinetry and pre-order panel hardware before arrival.',
    'For {areaName} {brandName} owners, this is exactly the kind of call where OEM parts and factory-correct procedure pay back over a fifteen-year ownership window.',
    'In {areaName} kitchens running {brandName} alongside other premium built-ins, we coordinate access carefully to protect adjacent surrounds.',
  ],
  suburban: [
    'In {areaName} specifically, this is a high-frequency call we run — typical mid-life {brandName} failure for households at this duty cycle, and we keep the OEM replacement on the truck.',
    'For {areaName} family kitchens, this failure pattern is the textbook 4–8 year cluster, and we have the parts kit on hand.',
    'In {areaName}, this is one of the more common {brandName} calls in our schedule — the diagnostic is fast and the OEM part lives on the truck.',
  ],
  historic: [
    'In {areaName} historic homes, this fix can require working around original cabinetry and undersized doorways — we plan the access path before opening any panels.',
    'For {areaName} kitchens with renovated {brandName} installs in historic surrounds, the repair itself is straightforward; protecting the trim and original flooring is the careful part.',
    'In {areaName}, we have done enough historic-home {brandName} service to know which sections of cabinetry have to come out and which can be left alone.',
  ],
  downtown: [
    'In {areaName} condos, we coordinate this repair with property management for service-elevator access and certificate-of-insurance handling — both are usually required.',
    'For {areaName} downtown {brandName} owners, this fix often happens inside tight utility closets; our techs carry the right hand tools for confined access.',
    'In {areaName} mixed-use buildings, we verify shared infrastructure (vents, drains) is not the actual root cause before swapping any {brandName} component.',
  ],
  shore: [
    'In {areaName}, salt-air corrosion is the silent driver behind this failure — we replace with OEM, then seal the connectors against future ingress.',
    'For {areaName} shore homes, this is a recurring seasonal call; we book the spring and fall windows heavily and stock the parts to match.',
    'In {areaName}, this {brandName} failure pattern reads differently than the suburbs — coastal humidity changes the failure cadence, and our parts inventory reflects that.',
  ],
  industrial: [
    'In {areaName}, hard-water scaling is the dominant accelerant on this failure mode — we replace with OEM and recommend filtration when warranted.',
    'For {areaName} {brandName} owners on heavier-than-average duty cycles, this fix is straightforward but recurring; we discuss preventive maintenance on the same visit.',
  ],
  rural: [
    'In {areaName}, well-water mineral content shortens this component\'s life by 30-50% versus the suburbs — the fix is OEM, and we recommend sediment filtration where it makes financial sense.',
    'For {areaName} {brandName} owners on private wells, we trace the supply side as part of the diagnostic, not just the appliance.',
  ],
};

export function buildBrandAreaBody(combo: BrandAreaCombo): BrandAreaBody | null {
  const brand = getBrandForCombo(combo);
  const area = getAreaForCombo(combo);
  if (!brand || !area) return null;
  const be = brandEnrichment[combo.brandSlug];
  const ae = areaEnrichment[combo.areaSlug];
  if (!be || !ae) return null;

  const bridgePool = areaTypeBridges[ae.areaType] || areaTypeBridges.suburban;
  const bridge = pickVariantByBrand(bridgePool, combo.brandSlug, combo.areaSlug)
    .replace(/{areaName}/g, area.name)
    .replace(/{brandName}/g, brand.name);

  // Use the second sentence of the area intro (typically the most
  // place-specific) to add unique flavor to the combo intro paragraph.
  const areaSecondSentence = ae.intro.split('. ').slice(1, 2).join('. ');
  const localFlavor = areaSecondSentence
    ? `${areaSecondSentence}.`
    : ae.localNote;

  const introParas: string[] = [
    `${be.intro.split('. ')[0]}. ${ae.intro.split('. ')[0]}.`,
    bridge,
    `${localFlavor} Our ${area.name} ${brand.name} coverage spans zip code${area.zipCodes.length > 1 ? 's' : ''} ${area.zipCodes.join(', ')}, including ${ae.neighborhoods.slice(0, 4).join(', ')}.`,
  ];

  // Take 3 brand failures, append area-type-aware closer chosen
  // deterministically by brand+area+failure-title to maximize within-page
  // and within-area variety.
  const closerPool = failureClosers[ae.areaType] || failureClosers.suburban;
  const failureParas = be.commonFailures.slice(0, 3).map((f, i) => {
    const closer = pickVariantByBrand(
      closerPool,
      `${combo.brandSlug}-${i}`,
      combo.areaSlug,
    )
      .replace(/{areaName}/g, area.name)
      .replace(/{brandName}/g, brand.name);
    return {
      title: f.title,
      description: `${f.description} ${closer}`,
    };
  });

  // signatureWork stays as the brand-level narrative but gets a
  // localized lead-in tying it to the area.
  const localizedSignature = `For ${area.name} homeowners specifically: ${be.signatureWork}`;

  const whyUsParas: string[] = [
    `${be.certificationNote} Combined with thirty-plus years of ${area.county} County service experience — and a 4.9-star rating from 127+ verified Monmouth and Middlesex County reviews — that is why ${area.name} homeowners with ${brand.name} appliances call us first.`,
    localizedSignature,
    `Every ${area.name} ${brand.name} service call comes with a written diagnostic, OEM-parts pricing quoted in advance, and a labor warranty. Same-day service is frequently available across ${area.zipCodes.join(', ')}; emergency refrigeration calls (food-loss risk) are triaged first.`,
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

  // 2 area-aware FAQs (expanded for AI Overview / Perplexity citability:
  // each answer must be ≥ 50 words and self-contained as a passage).
  const landmark = ae.landmarks?.[0] || `${area.name} center`;
  const neighborhood = ae.neighborhoods?.[0] || area.name;
  faqs.push({
    question: `Do you provide ${brand.name} repair in ${area.name}, NJ?`,
    answer: `Yes. Advanced Appliance is factory-certified on the full ${brand.name} line and has been servicing ${area.county} County since 1992 — over thirty years of in-area experience. ${area.name} (zip ${area.zipCodes.join(', ')}) is part of our core coverage, including the ${neighborhood} section near ${landmark}, and we frequently offer same-day ${brand.name} service when our morning route allows.`,
  });
  faqs.push({
    question: `Are there extra charges for ${brand.name} service calls to ${area.name}?`,
    answer: `No travel surcharge for ${area.name} or zip ${area.zipCodes[0]}. Our standard $100 diagnostic fee applies and is credited toward the repair on approval, with parts and labor quoted in writing before we begin work. ${brand.name} parts are billed at OEM cost — no aftermarket substitutions, no hidden fees, no add-on ${area.county} County dispatch charge.`,
  });

  // 1 combo FAQ (specific to brand+area type) — expand with one line of
  // brand-area context for differentiation across the 70 combos.
  faqs.push({
    question: `What ${brand.name} models do you service most in ${area.name}?`,
    answer: `In ${area.name}, the ${brand.name} units we service most often are ${be.productLines.slice(0, 3).join(', ')}. Our service vehicles carry OEM ${brand.name} parts for the highest-frequency failure modes specific to ${area.name}'s housing stock and water chemistry, so most ${area.name} ${brand.name} repairs complete in a single visit without a return trip for parts.`,
  });

  // 1 final pricing FAQ (already adequately long).
  faqs.push({
    question: `What does ${brand.name} repair cost in ${area.name}?`,
    answer: `Our diagnostic fee is $100 and is credited toward the repair on approval. ${brand.name} repairs in ${area.name} typically range from a few hundred dollars for common parts (fan motors, valves, igniters) up to higher amounts for sealed-system or control-board work. We quote in writing before we begin — no surprises, no add-on travel fees, and OEM-only parts pricing.`,
  });

  return faqs;
}
