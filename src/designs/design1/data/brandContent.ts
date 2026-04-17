import type { BrandEnrichment } from '../types';

/**
 * Per-brand SEO enrichment. Keyed by the brand slug used in routing.
 * Only premium / high-search-value brands are enriched here. The BrandPage
 * template falls back to a generic copy block for any brand not listed.
 */
export const brandEnrichment: Record<string, BrandEnrichment> = {
  'sub-zero-appliance-repair-service-nj': {
    slug: 'sub-zero-appliance-repair-service-nj',
    tier: 'luxury',
    tagline: 'Factory-Certified Sub-Zero Service in NJ',
    intro:
      'Sub-Zero built-in refrigeration is engineered to run for 20 years, but only if it is serviced to factory spec. Wrong evaporator fan, wrong condenser, or a generic compressor swap will destroy the sealed system inside of a year — and we have pulled enough failed third-party repairs out of Monmouth and Middlesex County kitchens to prove it. Advanced Appliance has been a factory-certified Sub-Zero service provider since the 1990s, and every Sub-Zero call gets OEM parts, a calibrated leak test, and a written sealed-system report.',
    certificationNote:
      'Factory-trained on the full Sub-Zero line — 600 Series, 700 Series, Classic, Designer, PRO 48, undercounter, and wine preservation.',
    productLines: [
      'Sub-Zero Classic Series (built-in side-by-side & over-and-under)',
      'Sub-Zero Designer Series (integrated panel-ready)',
      'Sub-Zero PRO 48 (professional built-in)',
      'Sub-Zero Undercounter (refrigerator, freezer, ice, beverage, wine)',
      'Sub-Zero Wine Storage (classic + designer wine preservation)',
      'Legacy 500/600/700 Series (sealed-system rebuilds available)',
    ],
    commonFailures: [
      {
        title: 'Evaporator fan motor failure',
        description:
          'Most common cause of warm-refrigerator / frosted-freezer complaints on 600 and 700 Series. We replace with OEM Sub-Zero motors only — the aftermarket replacements draw wrong amperage and burn out in months.',
      },
      {
        title: 'Condenser fan corrosion',
        description:
          'Kitchen dust and cooking oils cake the condenser. We pull the grille, vacuum and brush the coil, replace the condenser fan if bearings have dried, and verify amperage at the compressor start winding.',
      },
      {
        title: 'Ice maker failure (UC-15I, BI, ICBBI)',
        description:
          'Sub-Zero ice makers are precision assemblies with dedicated water filtration. We replace fill valves, solenoid screens, and cutter grids with OEM parts and run a full production-cycle validation before leaving.',
      },
      {
        title: 'Compressor & sealed-system repair',
        description:
          'We are EPA 608 certified for sealed-system work. If a compressor has failed, we recover refrigerant, replace to OEM spec, evacuate to deep vacuum, and recharge by weight — no guesswork, no shortcuts.',
      },
      {
        title: 'Electronic control board faults',
        description:
          'Designer Series and newer 600 Series boards are dense, vulnerable to humidity, and expensive. We diagnose at the sensor level first and only swap boards when the diagnostic justifies it.',
      },
    ],
    signatureWork:
      'We routinely rebuild 15- and 20-year-old Sub-Zero built-ins rather than pushing replacement. The cabinet, compressor, and door mechanisms are still sound; the electronic controls and seals are the failure points, and those are serviceable. A correct rebuild on a 15-year-old 650 extends the unit another decade for a fraction of the replacement cost.',
    faqs: [
      {
        question: 'Are you a factory-authorized Sub-Zero service provider in NJ?',
        answer:
          'Yes. Advanced Appliance is factory-certified on the full Sub-Zero line and has been servicing Sub-Zero built-ins across Monmouth and Middlesex Counties since the 1990s. We are EPA 608 certified for sealed-system work.',
      },
      {
        question: 'How much does a typical Sub-Zero repair cost?',
        answer:
          'Our diagnostic fee is $100 and is credited toward the repair. Common repairs (evaporator fan, ice maker valve, condenser clean-and-service) run $300–$650. Sealed-system work and compressor replacement is quoted after diagnosis and always in writing before we begin.',
      },
      {
        question: 'Do you use genuine Sub-Zero parts?',
        answer:
          'Always. Third-party parts destroy Sub-Zero sealed systems. Every part we install — evaporator fans, condenser motors, valves, control boards, door gaskets — is sourced directly from Sub-Zero and carries the factory warranty.',
      },
      {
        question: 'My Sub-Zero is 20 years old. Is it worth repairing?',
        answer:
          'Almost always yes. Sub-Zero cabinets and compressors regularly last 25–30 years when the serviceable parts (fans, valves, gaskets, boards) are kept current. We will give you a written repair-vs-replace analysis before you spend anything.',
      },
      {
        question: 'Do you service integrated (panel-ready) Sub-Zero units?',
        answer:
          'Yes. Designer Series integrated columns and drawers are our specialty. We protect custom cabinetry and panels, pre-order panel hardware before arrival, and coordinate with your cabinetmaker if panel removal is required.',
      },
    ],
  },

  'viking-appliance-repair-service-nj': {
    slug: 'viking-appliance-repair-service-nj',
    tier: 'luxury',
    tagline: 'Certified Viking Range & Appliance Repair in NJ',
    intro:
      'Viking professional ranges, ovens, and refrigeration are a fixture in Monmouth and Middlesex County luxury kitchens — and when they fail, most customers have already been told by a national dispatch service that parts will take "three to four weeks." Advanced Appliance keeps Viking parts on the truck and has been a certified Viking service provider for decades. We diagnose, order if needed, and complete most Viking repairs in one or two visits.',
    certificationNote:
      'Viking Certified Service on Professional, Designer, and Virtuoso series — sealed burners, dual-fuel, induction, wall ovens, hoods, and built-in refrigeration.',
    productLines: [
      'Viking Professional Series (VGR, VDR sealed-burner & dual-fuel)',
      'Viking Professional 5 Series & 7 Series ranges',
      'Viking Tuscany & French Door dual-fuel ranges',
      'Viking Built-In Refrigeration (VCSB, VCBB)',
      'Viking Wall Ovens, Warming Drawers, Microwaves',
      'Viking Ventilation (Professional range hoods, inserts)',
      'Viking Dishwashers (FDW, VDW, DFUD)',
    ],
    commonFailures: [
      {
        title: 'Igniter / spark module failure',
        description:
          'Viking sealed-burner ranges use a specific spark module that fails from grease migration and humidity. We clean, replace with OEM, and verify sparking at every burner.',
      },
      {
        title: 'Oven thermostat drift',
        description:
          'Viking ovens are famous for accurate temperatures — until the thermostat drifts 25–50°F, which is common at the 8- to 12-year mark. We replace with OEM and recalibrate with a certified probe before we leave.',
      },
      {
        title: 'Convection fan motor failure',
        description:
          'The convection motor on Viking Professional ovens is a serviceable part and usually cheaper than the customer expects. We diagnose at the motor, not the control board, and replace only what has failed.',
      },
      {
        title: 'Refrigerator sealed-system issues',
        description:
          'Viking built-in refrigeration uses the same kind of sealed system as Sub-Zero and requires EPA-certified work. We are certified, we recover refrigerant properly, and we recharge by weight.',
      },
      {
        title: 'Range hood blower failure',
        description:
          'Viking hood blowers pull heavy CFM and the bearings eventually dry out. Replacement is a same-visit job when we have the blower on the truck, which we usually do for Monmouth and Middlesex County calls.',
      },
    ],
    signatureWork:
      'We service 1990s and 2000s Viking Professional ranges every week. The burner grates, cast-iron construction, and cabinet integrity on older Viking units outlast anything new at the same price — but the igniter modules, thermostats, and oven sensors need periodic replacement. That is exactly the kind of work we do faster and cheaper than the original dealer.',
    faqs: [
      {
        question: 'Are you Viking-certified in New Jersey?',
        answer:
          'Yes. Advanced Appliance is Viking-certified on the full Professional, Designer, and Virtuoso product line — ranges, ovens, refrigeration, dishwashers, and ventilation.',
      },
      {
        question: 'My Viking range igniter keeps clicking. Can you fix it?',
        answer:
          'Almost always yes. Repeated clicking is usually a failed spark module or a moisture-shorted burner switch. We carry both parts for the major Viking range families and can complete the repair in one visit.',
      },
      {
        question: 'Can you recalibrate my Viking oven temperature?',
        answer:
          'Yes. We calibrate every oven we service with a certified probe and confirm three-point temperature accuracy before closing the call. If the thermostat itself is drifting, we replace with OEM.',
      },
      {
        question: 'Do you service older (pre-2000) Viking ranges?',
        answer:
          'Yes, and we strongly recommend keeping them running. Older Viking professional ranges are better built than most new premium replacements at twice the price — the only thing that ages is the serviceable electronics.',
      },
      {
        question: 'How fast can you get Viking parts?',
        answer:
          'For common failures (igniters, thermostats, oven sensors, convection motors) we stock on the truck. For anything else, we order factory direct and typically have parts in 3–5 business days, not the 3–4 weeks most national dispatchers quote.',
      },
    ],
  },

  'miele-appliance-repair-service-nj': {
    slug: 'miele-appliance-repair-service-nj',
    tier: 'luxury',
    tagline: 'Miele Premier Partner Service in NJ',
    intro:
      'Miele appliances — ovens, steam ovens, coffee systems, dishwashers, washers, dryers, and built-in refrigeration — are engineered to a 20-year lifecycle, and they reward that engineering with some of the most precise diagnostics in the industry. Advanced Appliance is a Miele Premier Partner and factory-trained across the full line. We own the Miele diagnostic interface, we read the unit fault logs directly, and we service Miele to factory torque and sealing specifications.',
    certificationNote:
      'Miele Premier Partner — factory-trained on Generation 6000/7000 ovens, CM coffee systems, G7000/G5000 dishwashers, W1/T1 laundry, and MasterCool built-in refrigeration.',
    productLines: [
      'Miele Generation 7000 & 6000 Wall Ovens and Steam Ovens',
      'Miele CM6, CM7, and CVA Coffee Systems',
      'Miele G7000, G5000, and ProfiLine Dishwashers',
      'Miele W1 Washing Machines & T1 Heat-Pump Dryers',
      'Miele MasterCool Built-In Refrigeration',
      'Miele Induction & Sealed-Burner Cooktops',
      'Miele Range Hoods & Warming Drawers',
    ],
    commonFailures: [
      {
        title: 'Turbidity sensor fouling (G7000/G5000 dishwashers)',
        description:
          'Miele dishwasher turbidity sensors foul over time and cause abnormal cycle length. We clean to factory spec, replace if needed, and clear the unit fault log before we leave.',
      },
      {
        title: 'Coffee system brew unit seals & grinder service',
        description:
          'CM6 and CM7 coffee systems need scheduled brew-unit seal replacement and grinder calibration. We carry the service kits and can usually complete the work in 45 minutes.',
      },
      {
        title: 'Steam oven descaling & solenoid service',
        description:
          'Miele steam ovens require periodic descaling and, on older units, steam-generator solenoid replacement. We handle both as scheduled maintenance.',
      },
      {
        title: 'W1 washer bearing wear',
        description:
          'Miele W1 washers use a serviceable main bearing. We replace proactively at 8–10 years of heavy use rather than wait for the drum shaft to score.',
      },
      {
        title: 'T1 heat-pump dryer condenser service',
        description:
          'T1 heat-pump dryers need annual condenser cleaning or lint will kill dry performance. We can service this as a maintenance visit for a predictable fee.',
      },
    ],
    signatureWork:
      'Because Miele is built for a 20-year lifecycle, most of our Miele work is scheduled maintenance — descaling, seal kits, calibration, and sensor cleaning — rather than reactive emergency repair. Customers who put their Miele fleet on a maintenance cycle with us typically never see a failure-mode call.',
    faqs: [
      {
        question: 'Is Advanced Appliance a Miele-authorized service provider?',
        answer:
          'Yes. We are a Miele Premier Partner, factory-trained on the full product line, and we own the Miele diagnostic interface required for warranty and post-warranty service.',
      },
      {
        question: 'Can you descale my Miele steam oven or coffee system?',
        answer:
          'Yes. We perform manufacturer-spec descaling on Miele steam ovens and coffee systems, using Miele-approved descaler and cycle programming. We log the service in the unit so the next service is scheduled correctly.',
      },
      {
        question: 'My Miele dishwasher shows a fault — can you read it?',
        answer:
          'Yes. We read Miele unit fault logs directly through the service interface, which means we diagnose at the sensor level rather than guessing at control boards.',
      },
      {
        question: 'Do you service Miele laundry (W1 washers and T1 dryers)?',
        answer:
          'Yes — bearing service, pump replacement, condenser cleaning, heat-pump service, and sensor calibration. W1/T1 pairs are one of the most common Miele calls we run.',
      },
      {
        question: 'How long should a Miele appliance last?',
        answer:
          'Miele engineers the Generation 7000 line for 20 years of use. With scheduled maintenance, we routinely keep Miele appliances well past that target — the serviceable components are designed to be replaced, not forced to last the full lifecycle untouched.',
      },
    ],
  },

  'wolf-appliance-repair-service-nj': {
    slug: 'wolf-appliance-repair-service-nj',
    tier: 'luxury',
    tagline: 'Factory-Trained Wolf Range & Oven Service in NJ',
    intro:
      'Wolf ranges, dual-fuel cooktops, wall ovens, and built-in microwaves are the standard in premium NJ kitchens — and they require the same factory-specific diagnostic approach as Sub-Zero (they share a service network). Advanced Appliance is factory-trained on the full Wolf product line and certified for the sealed-combustion, dual-fuel, and induction variants.',
    certificationNote:
      'Factory-trained on Wolf Dual-Fuel Pro, Gas Ranges, Induction Ranges, Transitional Series, Built-In Ovens, Convection Steam, and Module Cooktops.',
    productLines: [
      'Wolf Dual-Fuel Pro Ranges (DF)',
      'Wolf Gas Ranges (GR) with infrared broil',
      'Wolf Induction Ranges (IR) and Transitional Ranges (TR)',
      'Wolf Built-In Ovens (SO, M Series, E Series)',
      'Wolf Convection Steam Ovens (CSO)',
      'Wolf Module Cooktops (gas, induction, electric, grill, steamer)',
      'Wolf Built-In & Drawer Microwaves',
    ],
    commonFailures: [
      {
        title: 'Dual-fuel igniter degradation',
        description:
          'Wolf dual-fuel igniters have a predictable wear curve. We replace before the unit loses ignition on primary burners, not after.',
      },
      {
        title: 'Infrared broil element failure',
        description:
          'The Wolf gas range infrared broil is a serviceable ceramic element. We diagnose at continuity, replace with OEM, and verify uniform glow across the element before we leave.',
      },
      {
        title: 'Oven thermostat / RTD sensor drift',
        description:
          'M Series and E Series Wolf ovens use an RTD probe. When baking accuracy drifts, we swap the probe (not the whole control board) and recalibrate.',
      },
      {
        title: 'Induction coil & control faults',
        description:
          'Wolf induction cooktops fault out protectively when a coil driver fails. We diagnose to the driver board level and replace only what is at fault.',
      },
      {
        title: 'Steam oven descale & reservoir service',
        description:
          'Convection steam ovens need periodic descaling and reservoir solenoid service. We handle both as scheduled maintenance.',
      },
    ],
    signatureWork:
      'Most Wolf calls we run in NJ are on ranges that are 10–15 years old. The cabinet and burner assemblies still look new; the igniter modules and oven probes need service. A correct igniter + probe + recalibration service gets another 5–8 years of use — a fraction of the cost of replacement.',
    faqs: [
      {
        question: 'Are you factory-trained on Wolf in New Jersey?',
        answer:
          'Yes. Advanced Appliance is factory-trained on the full Wolf product line, including Dual-Fuel Pro, Induction, and Transitional Series.',
      },
      {
        question: 'My Wolf range igniter clicks but does not light. Can you fix it?',
        answer:
          'Yes — that is usually an igniter module or a burner switch. We carry both and typically complete the repair in a single visit.',
      },
      {
        question: 'Can you recalibrate my Wolf oven temperature?',
        answer:
          'Yes. We calibrate using a certified probe at three temperatures and adjust the RTD sensor offset in the control board.',
      },
      {
        question: 'Do you service Wolf convection steam ovens?',
        answer:
          'Yes — descaling, solenoid replacement, reservoir service, and sensor calibration.',
      },
      {
        question: 'Will you use genuine Wolf parts?',
        answer:
          'Always. Wolf igniters, probes, elements, and control boards are sourced factory-direct and carry the Wolf warranty.',
      },
    ],
  },

  'thermador-appliance-repair-service-nj': {
    slug: 'thermador-appliance-repair-service-nj',
    tier: 'luxury',
    tagline: 'Certified Thermador Service Across NJ',
    intro:
      'Thermador — the original Professional range, the Star Burner, the Freedom Induction cooktop — is standard equipment in NJ premium kitchens, and it demands a service partner who knows the quirks. Advanced Appliance is Thermador Certified and has been servicing Thermador ranges, cooktops, wall ovens, and refrigeration columns for decades. We know the Star Burner simmer module, the Freedom Induction coil driver, and the Masterpiece dishwasher cold — and we carry the parts.',
    certificationNote:
      'Thermador Certified on Pro Grand, Pro Harmony, Masterpiece, Freedom Induction, Freedom Columns, Sapphire Series, and Star Burner range families.',
    productLines: [
      'Thermador Pro Grand & Pro Harmony Ranges',
      'Thermador Masterpiece Wall Ovens & Steam Ovens',
      'Thermador Freedom Induction Cooktops',
      'Thermador Freedom Refrigeration Columns',
      'Thermador Sapphire & Star Sapphire Dishwashers',
      'Thermador Gas Cooktops (Star Burner, Pedestal)',
      'Thermador Warming Drawers, Microwaves, Ventilation',
    ],
    commonFailures: [
      {
        title: 'Star Burner simmer-module fault',
        description:
          'The Thermador Star Burner simmer function is controlled by a small module that eventually drifts. We replace with OEM and verify simmer at minimum BTU before we leave.',
      },
      {
        title: 'Freedom Induction control board fault',
        description:
          'Freedom Induction cooktops fault out protectively when a coil driver fails. We diagnose to the driver level and replace only the driver board, not the full control assembly.',
      },
      {
        title: 'Pro Grand oven thermostat / probe drift',
        description:
          'Pro Grand ovens use RTD sensors that drift 25–50°F over 8–10 years. We replace the probe and recalibrate rather than swap the entire control.',
      },
      {
        title: 'Freedom Column sealed-system service',
        description:
          'Thermador Freedom refrigeration columns require EPA-certified sealed-system work. We are certified, recover refrigerant properly, and recharge by weight.',
      },
      {
        title: 'Sapphire dishwasher pump & sensor service',
        description:
          'Sapphire and Star Sapphire dishwashers have a specific drain pump and turbidity sensor assembly. We carry both and can typically complete the repair in one visit.',
      },
    ],
    signatureWork:
      'We keep the Star Burner simmer module, Freedom Induction driver boards, and Pro Grand oven probes in truck stock. Those are the three Thermador failures we see most often in Monmouth and Middlesex County, and stocking them turns a two-visit repair into one.',
    faqs: [
      {
        question: 'Are you a certified Thermador service provider in NJ?',
        answer:
          'Yes. Advanced Appliance is Thermador Certified on the full Pro Grand, Pro Harmony, Masterpiece, Freedom, and Sapphire product lines.',
      },
      {
        question: 'My Thermador Star Burner simmer is inconsistent. What is wrong?',
        answer:
          'Almost always the simmer control module. It is a serviceable, OEM-sourced part, and we carry it on the truck for most Thermador range families.',
      },
      {
        question: 'Can you service a Thermador Freedom Induction cooktop?',
        answer:
          'Yes. We diagnose Freedom Induction faults at the coil driver level, not the full control assembly — which typically cuts the repair cost in half.',
      },
      {
        question: 'Do you service Thermador Freedom refrigeration columns?',
        answer:
          'Yes. Sealed-system work, door alignment, ice maker service, and control-board diagnostics. Freedom Columns require EPA-certified service, which we hold.',
      },
      {
        question: 'Will you use genuine Thermador parts?',
        answer:
          'Always. Every simmer module, coil driver, probe, pump, and control board is sourced directly from Thermador and carries the factory warranty.',
      },
    ],
  },
};

export function buildBrandFaqs(
  brand: { name: string; slug?: string },
  enrichment: BrandEnrichment,
): Array<{ question: string; answer: string }> {
  return enrichment.faqs.map((f) => ({
    question: f.question.replace(/{{brand}}/g, brand.name),
    answer: f.answer.replace(/{{brand}}/g, brand.name),
  }));
}
