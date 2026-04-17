import type { AreaEnrichment, AreaType, ServiceArea } from '../types';

export const areaEnrichment: Record<string, AreaEnrichment> = {
  'appliance-repair-in-aberdeen-nj': {
    slug: 'appliance-repair-in-aberdeen-nj',
    areaType: 'suburban',
    intro: 'Aberdeen is a Bayshore bedroom community of split-levels, colonials, and postwar capes — most of them now running second- or third-generation appliances that need attention before they fail. We have been rotating through the 07747 corridor since the early 1990s, and we keep common parts for Aberdeen homes on the truck.',
    localNote: 'Most service calls here come from the Cliffwood Beach and Strathmore sections, where original builder-grade ovens and dishwashers are finally aging out.',
    neighborhoods: ['Cliffwood', 'Cliffwood Beach', 'Strathmore', 'Freneau', 'Oakshades'],
    landmarks: ['Aberdeen-Matawan Train Station', 'Cliffwood Beach Waterfront Park', 'Route 35 corridor'],
    nearbyAreaSlugs: ['appliance-repair-in-matawan-nj', 'appliance-repair-in-hazlet-nj', 'appliance-repair-in-old-bridge-nj'],
  },
  'appliance-repair-colts-neck-nj': {
    slug: 'appliance-repair-colts-neck-nj',
    areaType: 'luxury',
    intro: 'Colts Neck is high-end country: horse farms, custom estates, and kitchens built around Sub-Zero, Wolf, Thermador, Viking, Miele, and Bosch. We are factory-trained on every one of those premium lines and treat Colts Neck calls with the white-glove protocol these appliances demand.',
    localNote: 'We bring drop cloths, booties, and a wireless scope camera — non-negotiable on stone floors and custom panel-ready installs.',
    neighborhoods: ['Laird Road', 'Heyers Mill', 'Muhlenbrink', 'Montrose', 'Clover Hill'],
    landmarks: ['Delicious Orchards', 'Colts Neck Inn', 'Bucks Mill Recreation Area'],
    nearbyAreaSlugs: ['appliance-repair-in-holmdel-nj', 'appliance-repair-in-lincroft-nj', 'appliance-repair-in-freehold-nj'],
  },
  'appliance-repair-eatontown-nj': {
    slug: 'appliance-repair-eatontown-nj',
    areaType: 'suburban',
    intro: 'Eatontown sits at the crossroads of Route 35 and Route 36, anchored by Monmouth Mall and the redeveloping Fort Monmouth footprint. The housing mix — from Colony Cove condos to single-family colonials off Wyckoff Road — keeps our schedule full every week.',
    localNote: 'Townhome and condo associations in Eatontown make up nearly a third of our calls; we know the stacked washer-dryer footprints that fit Colony Cove and Clearbrook utility closets.',
    neighborhoods: ['Wyckoff Road', 'Wampum Brook', 'Colony Cove', 'Eatontown Heights'],
    landmarks: ['Monmouth Mall', 'Fort Monmouth redevelopment', 'Route 35 commercial corridor'],
    nearbyAreaSlugs: ['appliance-repair-in-tinton-falls-nj', 'appliance-repair-in-ocean-nj', 'appliance-repair-in-red-bank-nj'],
  },
  'appliance-repair-in-edison-nj': {
    slug: 'appliance-repair-in-edison-nj',
    areaType: 'suburban',
    intro: 'Edison is one of Middlesex County\'s largest and most diverse townships, covering everything from Menlo Park\'s mid-century ranches to Clara Barton colonials to the Oak Tree Road corridor. That variety is exactly why we keep multi-brand parts on the truck — Edison kitchens run the full spectrum from GE Profile to LG, Samsung, Bosch, and Miele.',
    localNote: 'High-usage households on Oak Tree Road and around Edison Lakes keep our washing-machine bearing kits in constant rotation.',
    neighborhoods: ['Menlo Park', 'Oak Tree Road', 'Clara Barton', 'Stelton', 'North Edison', 'Edison Lakes'],
    landmarks: ['Thomas Edison Center at Menlo Park', 'Roosevelt Park', 'Menlo Park Mall', 'Oak Tree Road business district'],
    nearbyAreaSlugs: ['appliance-repair-in-metuchen-nj', 'appliance-repair-in-woodbridge-nj', 'appliance-repair-in-old-bridge-nj'],
  },
  'appliance-repair-in-fair-haven-nj': {
    slug: 'appliance-repair-in-fair-haven-nj',
    areaType: 'luxury',
    intro: 'Fair Haven is a walkable Two River borough with mature tree-lined streets, historic homes, and kitchens renovated around premium brands. Our technicians treat every Fair Haven call as a referral source — precision, protection, and clear communication on timeline and pricing.',
    localNote: 'Many Fair Haven homes pair premium built-ins with older panel-ready dishwashers; we source OEM panel hardware before arrival to avoid second trips.',
    neighborhoods: ['River Road', 'Willow Street', 'Fair Haven Fields', 'Battin Road'],
    landmarks: ['Fair Haven Dock', 'Bicentennial Hall', 'McCarter Park'],
    nearbyAreaSlugs: ['appliance-repair-in-rumson-nj', 'appliance-repair-in-little-silver-nj', 'appliance-repair-in-red-bank-nj'],
  },
  'appliance-repair-in-freehold-nj': {
    slug: 'appliance-repair-in-freehold-nj',
    areaType: 'historic',
    intro: 'Freehold is the Monmouth County seat — historic downtown around Main Street and Court Street, plus the surrounding Freehold Township subdivisions. The housing mix runs from 19th-century Victorians with retrofitted kitchens to 1990s and 2000s tract homes, and we carry parts for both worlds.',
    localNote: 'Older downtown Freehold homes frequently need dedicated 240V laundry circuits inspected before installing modern electric dryers; we flag this before scheduling.',
    neighborhoods: ['Downtown Freehold', 'Freehold Township', 'Stonehurst', 'Gravelly Brook', 'Riverview'],
    landmarks: ['Monmouth Battlefield State Park', 'Freehold Raceway', 'Freehold Raceway Mall', 'Court Street Historic District'],
    nearbyAreaSlugs: ['appliance-repair-in-manalapan-nj', 'appliance-repair-marlboro-nj', 'appliance-repair-in-old-bridge-nj'],
  },
  'appliance-repair-in-hazlet-nj': {
    slug: 'appliance-repair-in-hazlet-nj',
    areaType: 'suburban',
    intro: 'Hazlet is a compact Bayshore township of postwar capes, split-levels, and newer infill. Appliances here work hard — most homes run two or three loads of laundry a day with school-age families — and our same-day washer-dryer calls are a staple of the Hazlet schedule.',
    localNote: 'We stock drain-pump assemblies for the LG and Samsung front-load units that dominate Hazlet laundry rooms.',
    neighborhoods: ['North Centerville', 'West Keansburg', 'Raritan Bayshore', 'Union Beach border'],
    landmarks: ['Hazlet Park', 'Veterans Park', 'Hazlet Train Station'],
    nearbyAreaSlugs: ['appliance-repair-in-matawan-nj', 'appliance-repair-in-middletown-nj', 'appliance-repair-in-aberdeen-nj'],
  },
  'appliance-repair-in-holmdel-nj': {
    slug: 'appliance-repair-in-holmdel-nj',
    areaType: 'luxury',
    intro: 'Holmdel is one of Monmouth County\'s premier communities — custom homes, estate lots, and kitchens built around Sub-Zero, Wolf, Thermador, Monogram, and Miele. Our Holmdel clients expect manufacturer-level diagnosis and factory OEM parts, and that is exactly how we run every call.',
    localNote: 'We pre-order panel hardware and ice-maker assemblies for Holmdel installs because third-party equivalents rarely fit custom cabinetry correctly.',
    neighborhoods: ['Holmdel Township', 'Crawfords Corner', 'Everett', 'Centerville'],
    landmarks: ['PNC Bank Arts Center', 'Holmdel Park', 'Bell Works (Bell Labs)', 'Vietnam Veterans\' Memorial'],
    nearbyAreaSlugs: ['appliance-repair-in-lincroft-nj', 'appliance-repair-colts-neck-nj', 'appliance-repair-in-middletown-nj'],
  },
  'appliance-repair-in-lincroft-nj': {
    slug: 'appliance-repair-in-lincroft-nj',
    areaType: 'luxury',
    intro: 'Lincroft is an affluent Middletown Township section built around Brookdale Community College and large lot sizes. Most Lincroft homes run premium or semi-premium kitchens — GE Monogram, Thermador, Bosch, KitchenAid — and we are factory-trained on all of them.',
    localNote: 'Second refrigerators in Lincroft garages are common; we routinely replace compressor start devices on older GE and Whirlpool beverage units out there.',
    neighborhoods: ['Lincroft', 'Phalanx', 'Swimming River', 'Everett border'],
    landmarks: ['Brookdale Community College', 'Thompson Park', 'Swimming River Reservoir'],
    nearbyAreaSlugs: ['appliance-repair-in-holmdel-nj', 'appliance-repair-in-middletown-nj', 'appliance-repair-in-red-bank-nj'],
  },
  'appliance-repair-in-little-silver-nj': {
    slug: 'appliance-repair-in-little-silver-nj',
    areaType: 'luxury',
    intro: 'Little Silver is a small Two River borough known for its train station, historic character, and upscale single-family homes. Kitchens here are often gut-renovated around Wolf, Sub-Zero, Miele, and Bosch — our factory training on all of those brands is why Little Silver referrals keep coming.',
    localNote: 'Built-in Sub-Zero units here are frequently 15+ years old; we recondition condensers and replace evaporator fan motors rather than pushing premature replacement.',
    neighborhoods: ['Little Silver', 'Silver Park', 'Parkers Creek'],
    landmarks: ['Little Silver Train Station', 'Parkers Creek', 'Sickles Park'],
    nearbyAreaSlugs: ['appliance-repair-in-fair-haven-nj', 'appliance-repair-in-shrewsbury-nj', 'appliance-repair-in-red-bank-nj'],
  },
  'appliance-repair-in-manalapan-nj': {
    slug: 'appliance-repair-in-manalapan-nj',
    areaType: 'suburban',
    intro: 'Manalapan is one of western Monmouth County\'s largest townships — subdivisions spanning Tennent Road, Route 9, and Millhurst, plus the Battleground area. Family laundry volume here is high, and we have built a reputation on keeping Manalapan washers and dryers running through back-to-school and holiday seasons.',
    localNote: 'We replace shock absorbers and drum bearings on Manalapan front-loaders before they damage the cabinet — cheaper than a new machine, and we carry the kits.',
    neighborhoods: ['Manalapan Township', 'Gordons Corner', 'Tennent', 'Englishtown border', 'Millhurst'],
    landmarks: ['Monmouth Battlefield State Park', 'Manalapan Recreation Center', 'Manalapan Lake'],
    nearbyAreaSlugs: ['appliance-repair-marlboro-nj', 'appliance-repair-in-freehold-nj', 'appliance-repair-in-old-bridge-nj'],
  },
  'appliance-repair-marlboro-nj': {
    slug: 'appliance-repair-marlboro-nj',
    areaType: 'suburban',
    intro: 'Marlboro is a sprawling suburban township of planned communities, cul-de-sac neighborhoods, and large family homes off Route 9 and Route 79. It is also where our business is headquartered, so Marlboro and Morganville calls routinely get same-day response.',
    localNote: 'Because we are based in Morganville, Marlboro customers frequently get a technician within two to three hours — it is effectively our home turf.',
    neighborhoods: ['Marlboro Township', 'Morganville', 'Wickatunk', 'Robertsville', 'Old Bridge border'],
    landmarks: ['Marlboro Recreation Center', 'Big Brook Park', 'Marlboro Village'],
    nearbyAreaSlugs: ['appliance-repair-in-manalapan-nj', 'appliance-repair-in-old-bridge-nj', 'appliance-repair-in-morganville-nj'],
  },
  'appliance-repair-in-matawan-nj': {
    slug: 'appliance-repair-in-matawan-nj',
    areaType: 'historic',
    intro: 'Matawan pairs a walkable historic downtown with the Aberdeen-Matawan train-station commuter belt. The housing stock runs from 19th-century Main Street homes to 1990s Strathmore-adjacent subdivisions, and our parts inventory reflects that range.',
    localNote: 'Commuter households in Matawan lean heavily on weekend appointment windows; we reserve Saturday slots exclusively for this zip code when possible.',
    neighborhoods: ['Matawan Borough', 'Cheesequake', 'Freneau border', 'Ravine Drive'],
    landmarks: ['Aberdeen-Matawan Train Station', 'Lake Matawan', 'Matawan Historical Society'],
    nearbyAreaSlugs: ['appliance-repair-in-aberdeen-nj', 'appliance-repair-in-old-bridge-nj', 'appliance-repair-in-middletown-nj'],
  },
  'appliance-repair-in-metuchen-nj': {
    slug: 'appliance-repair-in-metuchen-nj',
    areaType: 'downtown',
    intro: 'Metuchen — the "Brainy Borough" — is a walkable downtown surrounded by mature neighborhoods of colonials and four-squares. Many Metuchen kitchens have been remodeled at least once, and we see the full range from original 1960s GE wall ovens to 2024 Bosch induction installs.',
    localNote: 'Original Metuchen knob-and-tube or undersized panels sometimes surface when we install modern high-amperage induction ranges; we flag electrical concerns before we begin.',
    neighborhoods: ['Downtown Metuchen', 'Oakland Avenue', 'Chestnut Avenue', 'Woodwild Park'],
    landmarks: ['Metuchen Train Station', 'Metuchen Public Library', 'Borough Improvement League'],
    nearbyAreaSlugs: ['appliance-repair-in-edison-nj', 'appliance-repair-in-woodbridge-nj', 'appliance-repair-in-old-bridge-nj'],
  },
  'appliance-repair-in-middletown-nj': {
    slug: 'appliance-repair-in-middletown-nj',
    areaType: 'suburban',
    intro: 'Middletown is one of New Jersey\'s largest townships — covering Belford, Leonardo, Navesink, Lincroft, Port Monmouth, and more. That breadth means we see every kind of home here: shore cottages, mid-century ranches, Navesink estates, and newer luxury builds.',
    localNote: 'We dispatch Middletown by section rather than by town name, which is how we keep response times tight across a 41-square-mile service area.',
    neighborhoods: ['Navesink', 'Red Bank border', 'New Monmouth', 'Lincroft', 'Leonardo', 'Port Monmouth', 'Belford'],
    landmarks: ['Poricy Park', 'Mount Mitchill Scenic Overlook', 'Sandy Hook Bay'],
    nearbyAreaSlugs: ['appliance-repair-in-lincroft-nj', 'appliance-repair-in-red-bank-nj', 'appliance-repair-in-holmdel-nj'],
  },
  'appliance-repair-in-morganville-nj': {
    slug: 'appliance-repair-in-morganville-nj',
    areaType: 'suburban',
    intro: 'Morganville is home base. It is a Marlboro Township section where our trucks start each day, and it gets the fastest response times in our coverage area — frequently inside two hours for emergency calls. Our Morganville customers have been with us for decades.',
    localNote: 'If you are in 07751 and you call before 10 a.m., we can almost always get a technician to you the same day.',
    neighborhoods: ['Morganville', 'Robertsville', 'Wickatunk', 'Pleasant Valley'],
    landmarks: ['Big Brook Park', 'Henry Hudson Trail Morganville', 'Marlboro Recreation Center'],
    nearbyAreaSlugs: ['appliance-repair-marlboro-nj', 'appliance-repair-in-manalapan-nj', 'appliance-repair-in-old-bridge-nj'],
  },
  'appliance-repair-in-neptune-nj': {
    slug: 'appliance-repair-in-neptune-nj',
    areaType: 'shore',
    intro: 'Neptune Township runs from the Ocean Grove boardwalk inland to Neptune City, covering Jersey Shore University Medical Center and a huge range of shore housing. We handle everything from Ocean Grove Victorians with mechanical subfloors to Neptune City laundromats and rental conversions.',
    localNote: 'Ocean Grove\'s historic cottages often have undersized, tightly framed kitchens — we measure, route, and plan installs before booking any refrigerator or dishwasher swap here.',
    neighborhoods: ['Ocean Grove', 'Shark River Hills', 'Neptune City', 'Bradley Park'],
    landmarks: ['Jersey Shore University Medical Center', 'Ocean Grove Great Auditorium', 'Shark River Park'],
    nearbyAreaSlugs: ['appliance-repair-in-ocean-nj', 'appliance-repair-in-tinton-falls-nj', 'appliance-repair-in-red-bank-nj'],
  },
  'appliance-repair-in-ocean-nj': {
    slug: 'appliance-repair-in-ocean-nj',
    areaType: 'suburban',
    intro: 'Ocean Township is a dense shore suburb centered on Wayside, Oakhurst, and Wanamassa — colonials, capes, and newer builds all within a few miles of Deal Lake. Appliance turnover here runs fast; we are commonly diagnosing laundry pairs within five or six years of purchase.',
    localNote: 'We see a high rate of Samsung and LG smart-appliance control-board failures in Ocean Township — we keep common boards in stock and flash firmware on site.',
    neighborhoods: ['Oakhurst', 'Wanamassa', 'Wayside', 'Whalepond'],
    landmarks: ['Deal Lake', 'Ocean Township Community Center', 'Joe Palaia Park'],
    nearbyAreaSlugs: ['appliance-repair-in-neptune-nj', 'appliance-repair-in-tinton-falls-nj', 'appliance-repair-in-red-bank-nj'],
  },
  'appliance-repair-in-old-bridge-nj': {
    slug: 'appliance-repair-in-old-bridge-nj',
    areaType: 'suburban',
    intro: 'Old Bridge is a large Middlesex County township with a housing inventory that runs from Cliffwood Beach bungalows to Laurence Harbor ranches to newer Route 9 subdivisions. Our scope here is wide — same-day refrigeration repair one call, scheduled laundry diagnostics the next.',
    localNote: 'Laurence Harbor and Cliffwood Beach homes see bay-salt exposure; we recommend annual ice-maker and dishwasher inlet-valve checks on any unit older than five years.',
    neighborhoods: ['Laurence Harbor', 'Cliffwood Beach', 'Madison Park', 'Browntown', 'Old Bridge Township'],
    landmarks: ['Cheesequake State Park', 'Laurence Harbor Waterfront', 'Raritan Bay'],
    nearbyAreaSlugs: ['appliance-repair-in-matawan-nj', 'appliance-repair-in-sayreville-nj', 'appliance-repair-in-aberdeen-nj'],
  },
  'appliance-repair-in-perth-amboy-nj': {
    slug: 'appliance-repair-in-perth-amboy-nj',
    areaType: 'historic',
    intro: 'Perth Amboy is one of New Jersey\'s oldest cities — a waterfront community with historic row homes, multi-families, and a dense urban grid. Appliances here work hard in tight spaces, and we install, diagnose, and service every major brand within Perth Amboy\'s unique housing stock.',
    localNote: 'Compact kitchens in Perth Amboy frequently require 24-inch dishwashers and apartment-size refrigerators — we stock both from Bosch, Whirlpool, and Summit.',
    neighborhoods: ['Downtown Perth Amboy', 'Waterfront', 'Harbortown', 'Budapest'],
    landmarks: ['Perth Amboy Waterfront', 'Proprietary House', 'Raritan Yacht Club'],
    nearbyAreaSlugs: ['appliance-repair-in-south-amboy-nj', 'appliance-repair-in-sayreville-nj', 'appliance-repair-in-woodbridge-nj'],
  },
  'appliance-repair-in-red-bank-nj': {
    slug: 'appliance-repair-in-red-bank-nj',
    areaType: 'downtown',
    intro: 'Red Bank pairs a walkable downtown with upscale residential pockets along the Navesink River. We service both sides — restaurant-adjacent apartments above Broad Street one morning, lining up premium built-in diagnostics on Rumson Road the same afternoon.',
    localNote: 'Red Bank condos and apartments over commercial space frequently have consolidated venting; we check dryer vent paths carefully before declaring a dryer failed.',
    neighborhoods: ['Downtown Red Bank', 'West Side', 'East Side', 'Navesink Riverfront'],
    landmarks: ['Count Basie Center', 'Riverside Gardens Park', 'Two River Theater', 'Broad Street'],
    nearbyAreaSlugs: ['appliance-repair-in-fair-haven-nj', 'appliance-repair-in-little-silver-nj', 'appliance-repair-in-rumson-nj'],
  },
  'appliance-repair-in-rumson-nj': {
    slug: 'appliance-repair-in-rumson-nj',
    areaType: 'luxury',
    intro: 'Rumson is one of the Jersey Shore\'s most prominent luxury towns — waterfront estates, historic Rumson Road homes, and kitchens built around Sub-Zero, Wolf, Thermador, La Cornue, and Gaggenau. Rumson service calls are white-glove, period.',
    localNote: 'We routinely coordinate with Rumson household staff and property managers and schedule installs around estate calendars — discretion is part of the service.',
    neighborhoods: ['Rumson Road', 'Rumson Neck', 'Sea Bright border', 'Navesink'],
    landmarks: ['Rumson Country Club', 'Victory Park', 'Navesink River waterfront'],
    nearbyAreaSlugs: ['appliance-repair-in-fair-haven-nj', 'appliance-repair-in-little-silver-nj', 'appliance-repair-in-red-bank-nj'],
  },
  'appliance-repair-in-sayreville-nj': {
    slug: 'appliance-repair-in-sayreville-nj',
    areaType: 'suburban',
    intro: 'Sayreville stretches along the Garden State Parkway and Raritan River, anchored by the Sayreville-Parlin commercial corridor and a mix of single-family and multi-family housing. We cover every zip here, with particular volume in 08871 and 08872.',
    localNote: 'High-rise and mid-rise condos along the Sayreville waterfront have strict service-elevator and insurance requirements; we coordinate with building management ahead of time.',
    neighborhoods: ['Sayreville', 'Parlin', 'Morgan', 'Melrose'],
    landmarks: ['Raritan Bay Waterfront Park', 'Kennedy Park', 'Sayreville Historical Society'],
    nearbyAreaSlugs: ['appliance-repair-in-south-amboy-nj', 'appliance-repair-in-old-bridge-nj', 'appliance-repair-in-perth-amboy-nj'],
  },
  'appliance-repair-in-shrewsbury-nj': {
    slug: 'appliance-repair-in-shrewsbury-nj',
    areaType: 'luxury',
    intro: 'Shrewsbury is a small borough around The Grove shopping district with upscale single-family homes and a handful of townhome communities. Kitchens here are often renovated around Wolf, Sub-Zero, Thermador, and Bosch, and we are factory-trained on each.',
    localNote: 'Grove-area townhome kitchens have recurring fit constraints — 30-inch ranges, 24-inch dishwashers — and we verify door-swing and countertop clearances before booking.',
    neighborhoods: ['The Grove', 'Shrewsbury Avenue', 'Sycamore Avenue'],
    landmarks: ['The Grove at Shrewsbury', 'Christ Church Shrewsbury', 'Shrewsbury Historical Society'],
    nearbyAreaSlugs: ['appliance-repair-in-little-silver-nj', 'appliance-repair-in-red-bank-nj', 'appliance-repair-in-tinton-falls-nj'],
  },
  'appliance-repair-in-south-amboy-nj': {
    slug: 'appliance-repair-in-south-amboy-nj',
    areaType: 'historic',
    intro: 'South Amboy is a historic waterfront small city at the mouth of the Raritan River — row homes, two-family houses, and a walkable downtown around Broadway and Main Street. The South Amboy train station makes this a commuter hub, and laundry and kitchen appliances in this 08879 zip work seven days a week.',
    localNote: 'Two-family South Amboy homes often share single dedicated circuits and undersized 120V dryer circuits — we assess electrical before quoting dryer replacements.',
    neighborhoods: ['Broadway', 'Downtown South Amboy', 'Waterfront', 'Stevens Avenue'],
    landmarks: ['South Amboy Train Station', 'Raritan Bay Waterfront', 'Sadowski Parkway'],
    nearbyAreaSlugs: ['appliance-repair-in-perth-amboy-nj', 'appliance-repair-in-sayreville-nj', 'appliance-repair-in-woodbridge-nj'],
  },
  'appliance-repair-in-tinton-falls-nj': {
    slug: 'appliance-repair-in-tinton-falls-nj',
    areaType: 'suburban',
    intro: 'Tinton Falls covers a wide footprint — Seaview Square, the Pine Brook area, Wayside border neighborhoods, and newer 55-plus communities. The housing diversity keeps our parts load diverse: we see everything from Frigidaire base-model laundry pairs to KitchenAid and Viking built-ins.',
    localNote: 'Active-adult community calls in Tinton Falls frequently request accessibility-friendly front-control ranges and front-load laundry pedestals; we stock both.',
    neighborhoods: ['Pine Brook', 'Wayside', 'Tinton Falls', 'Seaview Square'],
    landmarks: ['Seaview Square', 'Sycamore Recreation Complex', 'Fort Monmouth Tinton Falls side'],
    nearbyAreaSlugs: ['appliance-repair-eatontown-nj', 'appliance-repair-in-neptune-nj', 'appliance-repair-in-ocean-nj'],
  },
  'appliance-repair-in-woodbridge-nj': {
    slug: 'appliance-repair-in-woodbridge-nj',
    areaType: 'suburban',
    intro: 'Woodbridge Township is enormous — Colonia, Iselin, Sewaren, Avenel, Fords, Port Reading, Hopelawn, and Woodbridge Proper. Our Woodbridge routing is section-by-section, because a call in Colonia is a different neighborhood than a call in Iselin, and the appliance mix differs too.',
    localNote: 'Iselin and Oak Tree Road border homes frequently run higher-capacity laundry pairs for larger households; we stock 5.2-cubic-foot-plus direct-drive motor kits for those units.',
    neighborhoods: ['Colonia', 'Iselin', 'Avenel', 'Sewaren', 'Fords', 'Port Reading', 'Hopelawn', 'Woodbridge Proper'],
    landmarks: ['Woodbridge Center Mall', 'Woodbridge Train Station', 'Merrill Park'],
    nearbyAreaSlugs: ['appliance-repair-in-edison-nj', 'appliance-repair-in-metuchen-nj', 'appliance-repair-in-perth-amboy-nj'],
  },
};

/**
 * Paragraph bank keyed by area type. These are rendered in addition to the
 * per-area `intro` and `localNote` so each page has substantive, varied
 * topical coverage without duplicate-content risk across the 38 pages.
 */
const typeParagraphs: Record<AreaType, { coverage: string; issues: string; whyUs: string }> = {
  shore: {
    coverage: 'Shore-adjacent service calls are different. Salt air, coastal humidity, and seasonal occupancy cycles accelerate corrosion on refrigerator condensers, oven igniters, dishwasher control boards, and dryer moisture sensors. We build our parts inventory around those realities, and our technicians know the failure patterns shoreline appliances actually show — not the generic diagnostic tree a national dispatch call center reads off a screen.',
    issues: 'The most common failures we see in shore homes are compressor start-relay failure from humidity ingress, ice-maker solenoid corrosion, dryer thermistor drift from damp ducting, and range-hood blower motor seizure. We diagnose those at the component level, quote OEM replacement, and protect the install with conformal-coated connectors where appropriate.',
    whyUs: 'Shore households cannot wait two weeks for a part from a manufacturer depot. We stock coastal-pattern components for the top 10 brands, and our vans are loaded specifically for this kind of work.',
  },
  historic: {
    coverage: 'Historic homes have their own constraints — tighter doorways, older electrical panels, non-standard cabinetry, and sometimes original flooring we cannot damage. Before any install we measure the delivery path, confirm circuit capacity, and protect the floor. Historic-home diagnostics are as much about planning as they are about the appliance itself.',
    issues: 'We regularly find undersized 120V dryer circuits where a modern 240V electric dryer is needed, original knob-and-tube feeding kitchen outlets, and non-standard dishwasher rough-ins that will not accept a modern 24-inch unit without modification. We flag every one of these before committing to a repair-or-replace decision.',
    whyUs: 'We have spent 30+ years working inside historic downtowns and we treat those homes accordingly — no drilling new holes where old ones will do, no removing original trim if it can be avoided, no shortcuts.',
  },
  luxury: {
    coverage: 'Premium brands — Sub-Zero, Wolf, Thermador, Viking, Miele, Gaggenau, La Cornue, Monogram — demand factory-level diagnostics and OEM parts. We are factory-trained on each, and we do not substitute generic components into high-end installations. Wrong evaporator fan motor in a Sub-Zero built-in will destroy the unit inside of a year.',
    issues: 'The most frequent premium-brand failures we see are Sub-Zero condenser fan-motor wear, Wolf dual-fuel range igniter degradation, Thermador Star Burner simmer-module failure, Miele dishwasher turbidity-sensor fouling, and Viking oven thermostat drift. We carry the OEM replacements and we do not guess on torque specs.',
    whyUs: 'Premium-kitchen clients do not want a generic appliance technician. They want a specialist who respects the investment, protects the cabinetry, communicates clearly, and leaves the install spotless. That is how we run every luxury call.',
  },
  suburban: {
    coverage: 'Suburban family households run their appliances hard — two to four laundry loads a day, dishwasher twice a day, refrigerator opened constantly, oven every evening. That duty cycle is exactly what most manufacturer warranties are underwritten against, and exactly where mid-life failures (years 4–8) cluster. We stock parts for those failures.',
    issues: 'The most common family-home calls are washer drive-belt and shock-absorber wear, dryer thermal-fuse failure from clogged venting, dishwasher drain-pump blockage, refrigerator evaporator-fan motor seizure, and oven bake-element failure. All five are in-stock, same-visit repairs for us.',
    whyUs: 'We do not upsell repairs that should be replacements, and we do not push replacements that should be repairs. Our 30+ year customer base is built entirely on that distinction.',
  },
  downtown: {
    coverage: 'Downtown units — condos, apartments over commercial, mixed-use buildings — have their own service constraints: shared dryer venting, service-elevator requirements, limited parking, and condo-association approval windows. We handle that coordination as part of the service, not as an extra.',
    issues: 'Shared-vent buildings almost always have dryer performance issues that look like dryer failure but are actually duct saturation from other units. We diagnose the vent first. We also see a lot of 24-inch slim dishwashers, apartment-size fridges, and 30-inch slide-in ranges — all of which we keep matched OEM parts for.',
    whyUs: 'We have done enough downtown work to know which condo associations require certificates of insurance, which buildings need service-elevator reservations, and which management offices issue parking passes. That institutional knowledge saves our customers hours.',
  },
  industrial: {
    coverage: 'Mixed residential-industrial corridors have higher duty cycles, tougher water chemistry, and frequently dated electrical. We calibrate diagnostics to those realities and carry parts for the mid-range brands (Whirlpool, GE, Frigidaire, LG, Samsung) that dominate these neighborhoods.',
    issues: 'We regularly see inlet-valve mineral scaling, dishwasher pump failures from hard water, refrigerator ice-maker line corrosion, and washer transmission wear from heavy-duty cycles. We treat them with OEM parts and we recommend whole-house filtration when it is warranted.',
    whyUs: 'We do not upsell whole-house filtration unless the water chemistry actually justifies it. A strip test takes two minutes — we do it first, then recommend.',
  },
  rural: {
    coverage: 'Rural homes frequently run on well water and septic, which changes appliance life expectancy meaningfully. Hard-water scaling, iron oxidation, and sediment intrusion all shorten dishwasher, ice-maker, and washing-machine service life. We know those patterns and we diagnose accordingly.',
    issues: 'Most rural service calls here come down to inlet-valve failure, ice-maker solenoid fouling, dishwasher pump wear, and dryer moisture-sensor failure from long exterior vent runs. We repair at the component level and recommend sediment filtration where it makes financial sense.',
    whyUs: 'Rural service calls take longer to reach — that is a fact of geography. We schedule in blocks, keep our inventory deep so we do not need a second trip, and we run lean so we can hold rural pricing parity with our closer service areas.',
  },
};

/**
 * Builds the full on-page body copy as an array of paragraphs.
 * Each page mixes per-area unique sentences with type-specific context,
 * producing 500–700 words of substantive, non-duplicate content.
 */
export function buildAreaBody(
  area: ServiceArea,
  enrichment: AreaEnrichment,
): { aboutParas: string[]; issuesParas: string[]; whyUsParas: string[] } {
  const t = typeParagraphs[enrichment.areaType];
  const zips = area.zipCodes.join(', ');
  const neighborhoodList = enrichment.neighborhoods.slice(0, 4).join(', ');

  return {
    aboutParas: [
      enrichment.intro,
      `Our ${area.name} service area covers zip code${area.zipCodes.length > 1 ? 's' : ''} ${zips}, including ${neighborhoodList}. ${enrichment.localNote}`,
    ],
    issuesParas: [t.coverage, t.issues],
    whyUsParas: [
      t.whyUs,
      `Every ${area.name} service call is backed by a written diagnostic, OEM-parts pricing, and a labor warranty. We have been doing this for 30+ years in ${area.county} County — if we recommend a repair, it is because the numbers justify it; if we recommend replacement, we will tell you exactly why.`,
    ],
  };
}

export function buildAreaFaqs(
  area: ServiceArea,
  enrichment: AreaEnrichment,
): Array<{ question: string; answer: string }> {
  const zips = area.zipCodes.join(', ');
  const firstZip = area.zipCodes[0];
  const neighborhood = enrichment.neighborhoods[0] || area.name;
  const landmark = enrichment.landmarks[0] || `${area.name} center`;

  return [
    {
      question: `How quickly can you get to ${area.name} for appliance repair?`,
      answer: `We offer next-day service across ${area.name} and same-day service when our morning route allows. Emergency refrigeration calls in ${zips} are prioritized — we triage food-loss risk first.`,
    },
    {
      question: `Which zip codes and neighborhoods of ${area.name} do you serve?`,
      answer: `We cover all of ${area.name}, including zip code${area.zipCodes.length > 1 ? 's' : ''} ${zips} and the ${enrichment.neighborhoods.slice(0, 3).join(', ')} areas. We have been servicing ${area.county} County for more than three decades and we do not sub-contract these calls.`,
    },
    {
      question: `What appliance brands do you repair in ${area.name}?`,
      answer: `All major brands — Sub-Zero, Wolf, Thermador, Viking, Miele, Bosch, KitchenAid, GE, GE Profile, GE Monogram, Whirlpool, Maytag, LG, Samsung, Frigidaire, Electrolux, Jenn-Air, and more. We are factory-trained on the premium lines and stock parts for the mainstream ones.`,
    },
    {
      question: `Do you charge extra for service calls to ${area.name}?`,
      answer: `No. There is no travel surcharge for ${area.name} or ${firstZip}. Our standard diagnostic fee applies and is credited toward the repair if you approve the work.`,
    },
    {
      question: `Are you licensed and insured for work in ${area.name}?`,
      answer: `Yes. We are fully licensed for appliance repair in New Jersey and carry general liability and workers' compensation coverage. Certificates of insurance for ${area.name} condo associations and property managers are available on request.`,
    },
    {
      question: `What if my appliance is near ${landmark} or in an older ${neighborhood} home?`,
      answer: `We service every section of ${area.name}, including ${neighborhood} and the blocks around ${landmark}. Older ${area.name} homes sometimes require electrical or plumbing verification before we install a new appliance — we flag that at the diagnostic stage so there are no surprises.`,
    },
  ];
}
