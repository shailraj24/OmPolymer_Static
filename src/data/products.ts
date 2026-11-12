export interface Product {
  id: string;
  name: string;
  category: 'Twines' | 'Ropes' | 'Tarpaulins';
  polymerType: 'Polyethylene (PE / HDPE)' | 'Polypropylene (PP)' | 'Polypropylene Multifilament' | 'Polyester';
  shortDescription: string;
  fullDescription: string;
  materialInfo: string;
  keyFeatures: string[];
  benefits: string[];
  applications: string[];
  commercialUses: string[];
  technicalSpecs: { label: string; value: string }[];
  availableColors: string[];
  image: string;
  alt: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'pe-fishing-twine',
    name: 'PE Fishing Twine',
    category: 'Twines',
    polymerType: 'Polyethylene (PE / HDPE)',
    shortDescription: 'High-tenacity virgin HDPE fishing twine engineered for superior saltwater resistance, high knot integrity, and long service life in marine netting.',
    fullDescription: 'Our PE Fishing Twine is manufactured from 100% prime-grade High-Density Polyethylene (HDPE) resin with specialized UV inhibitors. Developed specifically for commercial and artisanal fishermen, trawlers, and aquaculture facilities, this twine delivers superior abrasion resistance against seabed friction, boat gunwales, and heavy hauling equipment. Because polyethylene does not absorb water, the twine retains its exact weight, flexibility, and breaking strength in both fresh and saltwater environments.',
    materialInfo: '100% virgin High-Density Polyethylene (HDPE) masterbatch with hindered amine light stabilizers (HALS) UV protection. Zero moisture absorption (0.01%), specific gravity ~0.95 (floats in water).',
    keyFeatures: [
      '100% Virgin High-Density Polyethylene (HDPE) construction',
      'Advanced UV stabilization prevents brittleness under relentless tropical sunlight',
      'Zero moisture absorption keeps netting lightweight during hauling',
      'Tight, uniform twist prevents strand opening and fraying under tension',
      'High knot strength and slip-resistant grip for secure net mending',
      'Resistant to marine rot, organic growth, mildew, and dilute industrial chemicals'
    ],
    benefits: [
      'Extends the operating life of commercial fishing nets, reducing replacement costs',
      'Lowers deck drag and hauling power by staying light and water-free',
      'Maintains consistent mesh dimensions under sustained sea currents',
      'Smooth hand feel allows faster net weaving and on-boat mending'
    ],
    applications: [
      'Commercial fishing nets (trawl nets, gill nets, purse seines, cast nets)',
      'Net repair, mending, and routine maritime maintenance',
      'Aquaculture fish pen fabrication and perimeter retention cages',
      'Sports goal netting, cricket practice nets, and cargo safety netting',
      'Horticultural climbing crop supports and greenhouse trellising'
    ],
    commercialUses: [
      'Deep-sea commercial fisheries & trawler fleets',
      'Coastal artisanal fishing cooperatives',
      'Marine and inland aquaculture operators',
      'Net manufacturing and fabrication factories'
    ],
    technicalSpecs: [
      { label: 'Raw Material', value: '100% Virgin HDPE Granules' },
      { label: 'Construction', value: '3-Strand Twisted / Multi-Ply' },
      { label: 'Diameter Range', value: '0.75 mm to 4.0 mm' },
      { label: 'Ply Options', value: '3-ply, 6-ply, 9-ply, 12-ply, 15-ply up to 30-ply' },
      { label: 'Packaging', value: 'Spools (100g, 200g, 500g, 1kg) or Hanks' },
      { label: 'Buoyancy', value: 'Positive (Floats in water)' },
      { label: 'UV Resistance', value: 'High (HALS UV Stabilized)' }
    ],
    availableColors: ['Ocean Blue', 'Dark Green', 'Fluorescent Yellow', 'Bright Orange', 'Natural White'],
    image: '/assets/images/products/pe-fishing-twine.jpg',
    alt: 'High-tenacity PE Fishing Twine on spool manufactured by OM Polymer Gujarat'
  },
  {
    id: 'pe-twisted-twine',
    name: 'PE Twisted Twine',
    category: 'Twines',
    polymerType: 'Polyethylene (PE / HDPE)',
    shortDescription: 'Multi-purpose polyethylene twisted twine with balanced twist geometry, high tensile strength, and exceptional weather endurance.',
    fullDescription: 'OM Polymer PE Twisted Twine is an all-purpose industrial and packaging cord engineered from select polyethylene polymers. Built with a high-torque, balanced twist, it resists unraveling when cut and provides consistent knot security under load. Widely utilized across agriculture, industrial packaging, warehousing, and construction, this twine provides reliable bundling performance while remaining flexible and cost-effective.',
    materialInfo: 'Formulated with virgin Polyethylene and HDPE blends, offering high tensile tenacity with balanced elongation to absorb impact shock without sudden snapping.',
    keyFeatures: [
      'Precision-engineered balanced twist prevents kinking and back-twisting',
      'UV-treated for continuous open-field and outdoor storage reliability',
      'Excellent resistance to moisture, oils, acids, and soil microorganisms',
      'Consistent diameter and runnage for predictable bundling costs',
      'Smooth surface minimizes friction against hands and automated dispensers'
    ],
    benefits: [
      'High runnage per kilogram ensures cost-effective industrial packing',
      'Reliable tensile performance reduces breakage during tight bundling',
      'All-weather resilience prevents degradation in monsoon and high-heat conditions'
    ],
    applications: [
      'Agricultural crop tying, banana bunch staking, and vineyard support',
      'Industrial carton binding, pallet bundling, and general cargo lashing',
      'Construction line marking, bricklaying guides, and site demarcation',
      'Household, hardware, and commercial retail packaging cordage'
    ],
    commercialUses: [
      'Commercial agriculture & horticulture farms',
      'Logistics, courier, and wholesale packaging hubs',
      'Building contractors & masonry supplies',
      'Export cargo staging centers'
    ],
    technicalSpecs: [
      { label: 'Material', value: 'Virgin Polyethylene (PE)' },
      { label: 'Twist Direction', value: 'S-Twist / Z-Twist Balanced' },
      { label: 'Thickness Range', value: '1.0 mm to 5.0 mm' },
      { label: 'Package Type', value: 'Cylindrical Coils, Spools, and Bundles' },
      { label: 'Moisture Regain', value: '< 0.05% (Non-hygroscopic)' },
      { label: 'Melting Point', value: '130°C - 135°C' }
    ],
    availableColors: ['Bright Orange', 'Industrial Blue', 'Yellow', 'White', 'Black'],
    image: '/assets/images/products/pe-twisted-twine.jpg',
    alt: 'PE Twisted Twine coil and spool by OM Polymer'
  },
  {
    id: 'polyethylene-rope',
    name: 'Polyethylene (PE) Rope',
    category: 'Ropes',
    polymerType: 'Polyethylene (PE / HDPE)',
    shortDescription: 'Heavy-duty 3-strand twisted PE rope delivering outstanding floating capability, UV resistance, and abrasion durability for marine and industrial rigging.',
    fullDescription: 'Our Polyethylene (PE) Rope is a workhorse synthetic line manufactured using precision 3-strand or 4-strand hawser lay extrusion. Featuring a specific gravity lower than water (0.95), it stays buoyant on surface waters, making it indispensable for marine mooring, commercial fishing, port facilities, and agricultural boundary rigging. The firm, compact lay provides high resistance to abrasive surfaces while preserving flexibility across seasonal temperature swings.',
    materialInfo: '100% virgin High-Density Polyethylene monofilament yarns, extruded with thermal and UV stabilizer masterbatch.',
    keyFeatures: [
      'Positive buoyancy – floats continuously on freshwater and seawater',
      'Does not absorb water; zero loss of breaking strength when wet',
      'Resistant to rot, mildew, fungi, acids, alkalis, and petroleum products',
      'Smooth handling with low friction coefficient',
      'Easily spliced using standard marine 3-strand techniques',
      'UV stabilized for prolonged exterior sun exposure'
    ],
    benefits: [
      'Prevents fouling on propellers and underwater obstacles due to positive float',
      'Lightweight construction reduces crew fatigue during marine line handling',
      'Long operational lifespan even in harsh coastal environments'
    ],
    applications: [
      'Marine docking, auxiliary mooring lines, and anchor warps',
      'Commercial fishing vessel rigging, purse seine floating lines',
      'Agricultural fencing, animal tethering, and crop protection netting support',
      'Industrial utility, truck tie-downs, and boundary cordons'
    ],
    commercialUses: [
      'Shipping and port operations',
      'Fishing vessel fleet operators',
      'Agricultural and farming cooperatives',
      'Heavy transport and logistics haulers'
    ],
    technicalSpecs: [
      { label: 'Material', value: 'High Density Polyethylene (HDPE)' },
      { label: 'Construction', value: '3-Strand Hawser Laid / Twisted' },
      { label: 'Diameter Range', value: '4 mm to 28 mm' },
      { label: 'Standard Length', value: '100m, 200m, 300m coils' },
      { label: 'Specific Gravity', value: '0.95 (Floats)' },
      { label: 'Elongation at Break', value: 'Approx. 20% - 25%' }
    ],
    availableColors: ['Vibrant Yellow', 'Ocean Blue', 'Emerald Green', 'Orange', 'White'],
    image: '/assets/images/products/polyethylene-rope.jpg',
    alt: 'Polyethylene PE Rope coil in vibrant yellow manufactured by OM Polymer'
  },
  {
    id: 'polypropylene-rope',
    name: 'Polypropylene (PP) Rope',
    category: 'Ropes',
    polymerType: 'Polypropylene (PP)',
    shortDescription: 'Versatile, lightweight, high-strength 3-strand PP rope engineered for commercial marine, transport, construction, and general utility.',
    fullDescription: 'OM Polymer Polypropylene (PP) Rope is produced from high-tenacity polypropylene granules engineered into durable split-film or monofilament tapes. Offering an optimal strength-to-weight ratio, this rope floats naturally on water (specific gravity 0.91) and exhibits zero water absorption. Widely acclaimed for its chemical resilience and low moisture retention, it serves as the trusted choice for transport cargo lashing, construction utility lines, and harbor operations.',
    materialInfo: 'High-tenacity Polypropylene (PP) homopolymer with antioxidants and UV protective compounds.',
    keyFeatures: [
      'Ultra-lightweight with specific gravity of 0.91 (floats effortlessly)',
      'Impermeable to water; preserves strength and diameter in all weather',
      'High dielectric resistance (does not conduct electricity)',
      'Excellent resistance to harsh chemical washes, acids, and solvents',
      'High shock absorption capability with controlled elongation'
    ],
    benefits: [
      'Cost-effective alternative to heavy natural fiber and nylon cordage',
      'Does not stiffen, shrink, or freeze when exposed to moisture and cold',
      'Easy to store and handle without rot or mildew concerns'
    ],
    applications: [
      'Commercial trucking, trailer tarp tie-downs, and cargo securing',
      'Construction safety barriers, hoist utility, and scaffolding ties',
      'Marine harbor towing, pontoon lines, and buoyancy markers',
      'Agricultural crop bundling and livestock utility'
    ],
    commercialUses: [
      'Transportation & overland logistics companies',
      'General civil engineering and construction contractors',
      'Marine ship chandlers and dock operators',
      'Wholesale hardware distribution networks'
    ],
    technicalSpecs: [
      { label: 'Composition', value: '100% Polypropylene (PP)' },
      { label: 'Structure', value: '3-Strand Twisted / Film Tape' },
      { label: 'Diameter Range', value: '4 mm to 32 mm' },
      { label: 'Coil Dimensions', value: '100m, 220m (custom coils on order)' },
      { label: 'Specific Gravity', value: '0.91 (Floats)' },
      { label: 'Melting Temperature', value: '165°C' }
    ],
    availableColors: ['Royal Blue', 'Bright Yellow', 'Signal Red', 'Green', 'Black', 'White'],
    image: '/assets/images/products/polypropylene-rope.jpg',
    alt: 'Polypropylene PP 3-strand blue rope coil by OM Polymer Gujarat'
  },
  {
    id: 'baler-twine',
    name: 'Baler Twine',
    category: 'Twines',
    polymerType: 'Polypropylene (PP)',
    shortDescription: 'Heavy-duty agricultural polypropylene baler twine engineered for high knot strength, smooth feeding, and tight bale compaction.',
    fullDescription: 'Our Agricultural Baler Twine is manufactured from high-tenacity fibrillated polypropylene film, precisely calibrated for round balers, conventional square balers, and heavy high-density baling equipment. Engineered to run seamlessly through automatic baler knotter mechanisms without shredding or bird-nesting, it ensures tight, stable bales that withstand field handling, transport vibration, and extended outdoor stack storage.',
    materialInfo: 'High-tenacity fibrillated Polypropylene (PP) with enhanced UV stabilizers formulated for prolonged agricultural solar exposure.',
    keyFeatures: [
      'High knot tenacity designed for heavy mechanical knotter systems',
      'Fibrillated tape structure delivers superior inter-fiber friction for nonslip knots',
      'UV-stabilized formula withstands direct summer sunlight in open fields',
      'Uniform thickness and consistent denier prevent baler jam-ups',
      'Unwinds smoothly to the very last meter from inside-feed spools'
    ],
    benefits: [
      'Eliminates bale bursts during high-speed field baling and hauling',
      'Reduces machinery downtime and wear on automated knotters',
      'Protects harvested biomass, fodder, and straw throughout seasonal storage'
    ],
    applications: [
      'Hay, straw, silage, and alfalfa baling (round & square balers)',
      'Sugarcane trash and biomass crop residue packaging',
      'Industrial recycling bale binding (corrugated cardboard, plastic waste)',
      'Heavy nursery tree root ball bundling and horticultural tying'
    ],
    commercialUses: [
      'Commercial grain, dairy, and livestock farming operations',
      'Agricultural contract baling and harvesting services',
      'Industrial recycling plants and scrap bundling yards',
      'Agricultural equipment and supply retailers'
    ],
    technicalSpecs: [
      { label: 'Polymer', value: 'High Tenacity Polypropylene' },
      { label: 'Form', value: 'Fibrillated Twisted Tape' },
      { label: 'Denier Range', value: '12,000 to 70,000 Denier' },
      { label: 'Runnage (m/kg)', value: '120 m/kg to 750 m/kg depending on grade' },
      { label: 'Knot Strength', value: 'Calibrated for heavy baler knotters' },
      { label: 'Spool Type', value: 'Inside-feed cylindrical tube (5 kg - 10 kg)' }
    ],
    availableColors: ['High-Vis Orange', 'Industrial Blue', 'Bright Yellow', 'Natural White'],
    image: '/assets/images/products/baler-twine.jpg',
    alt: 'Agricultural Polypropylene Baler Twine spool by OM Polymer'
  },
  {
    id: 'ppmf-rope',
    name: 'Polypropylene Multifilament Rope (PPMF)',
    category: 'Ropes',
    polymerType: 'Polypropylene Multifilament',
    shortDescription: 'Ultra-smooth, flexible PPMF rope woven from continuous multifilament yarns, offering soft hand-feel, high tensile strength, and zero water absorption.',
    fullDescription: 'OM Polymer Polypropylene Multifilament (PPMF) Rope represents the pinnacle of operator comfort and high performance. Built from hundreds of fine, continuous filament polypropylene fibers, PPMF offers the soft, supple touch of natural fiber or nylon while maintaining the lightweight, water-floating characteristics of polypropylene. It glides effortlessly over pulleys, guides, and hands without generating friction burns or stiffness.',
    materialInfo: '100% continuous Polypropylene Multifilament (FDY) yarns with micro-fiber filament matrix.',
    keyFeatures: [
      'Exceptionally soft, silky hand feel; gentle on hands and delicate surfaces',
      'Does not harden, crack, or stiffen even after prolonged water contact',
      'Positive buoyancy (floats on water without taking on moisture weight)',
      'Supple flexibility enables rapid, secure knotting and effortless unknotting',
      'High resistance to mildew, bacterial growth, and chemical corrosion'
    ],
    benefits: [
      'Drastically reduces hand fatigue and abrasions during frequent manual handling',
      'Smooth outer jacket passes cleanly through conduits, blocks, and sheaves',
      'Maintains clean aesthetic presentation for consumer and industrial applications'
    ],
    applications: [
      'Telecommunication cable pull line and conduit draw lines',
      'Pleasure craft mooring, fender lines, and leisure marine utility',
      'Equestrian leads, halter ropes, and livestock handling',
      'Industrial hoist draw lines, curtain cords, and staging utility',
      'Safety guide lines and barrier ropes in commercial facilities'
    ],
    commercialUses: [
      'Telecom infrastructure contractors & utility providers',
      'Leisure marine, yacht clubs, and boat marinas',
      'Equestrian facilities and veterinary supply distributors',
      'Commercial stagecraft and theater rigging'
    ],
    technicalSpecs: [
      { label: 'Yarn Type', value: '100% PP Multifilament (FDY)' },
      { label: 'Construction', value: '3-Strand Twisted or 8/16-Plait Braided' },
      { label: 'Diameter Range', value: '4 mm to 24 mm' },
      { label: 'Specific Gravity', value: '0.91 (Positive Buoyancy)' },
      { label: 'Water Absorption', value: '0% (Non-hygroscopic)' },
      { label: 'Hand Feel', value: 'Silky, Soft, Supple' }
    ],
    availableColors: ['Pure White', 'Deep Black', 'Navy Blue', 'Silver Gray', 'Crimson Red'],
    image: '/assets/images/products/ppmf-rope.jpg',
    alt: 'Smooth white Polypropylene Multifilament PPMF Rope coil by OM Polymer'
  },
  {
    id: 'polypropylene-tiger-rope',
    name: 'Polypropylene Tiger Rope',
    category: 'Ropes',
    polymerType: 'Polypropylene (PP)',
    shortDescription: 'High-visibility yellow and black striped 3-strand PP rope engineered with aggressive grip and maximum abrasion resistance for rugged marine and transport operations.',
    fullDescription: 'Recognized worldwide for its distinctive high-contrast yellow-and-black spiral stripe, Polypropylene Tiger Rope (also known as Danline or Tiger Line) is purpose-built for the most demanding physical environments. Manufactured from coarse, high-tenacity polypropylene split-film and monofilament fibers, it delivers exceptional surface friction for a firm, slip-proof grip even in wet, oily, or icy conditions. Its rugged construction withstands constant scraping across rough docks, asphalt, and cargo decks.',
    materialInfo: 'High-tenacity polypropylene Danline / split-film composite with UV stabilizers and high-contrast carbon black marker tracers.',
    keyFeatures: [
      'High-contrast yellow and black pattern for instant safety visibility',
      'Rugged, high-friction surface provides firm grip with or without gloves',
      'Superior abrasion resistance against rough dock edges and cargo beds',
      'Floats on water (specific gravity 0.91) and will not absorb moisture',
      'Unaffected by rot, marine borers, oil, grease, or mild acids'
    ],
    benefits: [
      'Enhanced safety compliance on worksites through high-visibility marking',
      'Prevents line slippage during heavy manual tie-downs and hauling',
      'Outlasts standard commercial lines in high-friction hauling duties'
    ],
    applications: [
      'Commercial marine mooring, lobster and crab pot marker lines',
      'Over-the-road trucking tie-downs and heavy machinery cargo securing',
      'Construction site perimeter cordons and danger zone barrier lines',
      'Agricultural harvest hauling and timber lashing'
    ],
    commercialUses: [
      'Heavy freight transport & flatbed trucking companies',
      'Offshore and coastal pot fishing fleets',
      'Civil construction and site safety contractors',
      'Port authority maintenance teams'
    ],
    technicalSpecs: [
      { label: 'Material', value: 'PP Split-Film & Danline Filament' },
      { label: 'Strand Geometry', value: '3-Strand Regular Lay' },
      { label: 'Diameter Range', value: '6 mm to 28 mm' },
      { label: 'Color Pattern', value: 'Yellow with Black Spiral Tracer' },
      { label: 'Buoyancy', value: 'Floats on Water (Sp. Gr. 0.91)' },
      { label: 'Abrasion Grade', value: 'Heavy Duty Commercial' }
    ],
    availableColors: ['Yellow with Black Tracers (Tiger Pattern)'],
    image: '/assets/images/products/polypropylene-tiger-rope.jpg',
    alt: 'Polypropylene Tiger Rope with yellow and black spiral pattern by OM Polymer'
  },
  {
    id: 'hdpe-tarpaulin',
    name: 'HDPE Tarpaulin',
    category: 'Tarpaulins',
    polymerType: 'Polyethylene (PE / HDPE)',
    shortDescription: '100% waterproof, heavy-duty multi-layer laminated HDPE woven tarpaulins with reinforced heat-sealed hems and rustproof eyelets for all-weather outdoor protection.',
    fullDescription: 'OM Polymer HDPE Tarpaulins are engineered to provide impenetrable weather defense for agricultural yields, industrial goods, transport vehicles, and infrastructure projects. Manufactured by extruding high-tensile HDPE tapes, weaving them into a tight rip-resistant matrix, and laminating both sides with durable LDPE film, our tarpaulins create a 100% waterproof and windproof barrier. All edges are reinforced with enclosed polymer rope hems and punched with heavy-duty rustproof eyelets for secure tie-down.',
    materialInfo: 'Virgin High-Density Polyethylene (HDPE) woven base fabric with double-sided Low-Density Polyethylene (LDPE) coating and masterbatch UV inhibitors.',
    keyFeatures: [
      '100% waterproof and moisture impermeable multi-layer lamination',
      'High tensile and tear resistance prevents rip propagation from punctures',
      'Heavy-duty UV stabilization prevents sun cracking, peeling, and fading',
      'Heat-sealed continuous seams eliminate leak points',
      'Reinforced perimeter hems with enclosed rope and rustproof eyelets every meter',
      'Resistant to acids, alkalis, mildew, bird droppings, and industrial pollutants'
    ],
    benefits: [
      'Protects valuable grain, seeds, and fertilizer from rain damage during outdoor storage',
      'Eliminates cargo water damage on open flatbed trucks and container transports',
      'Lightweight and easily foldable for compact seasonal storage and quick redeployment'
    ],
    applications: [
      'Agricultural crop covers (grain storage, fodder stacks, sugarcane heaps)',
      'Truck and trailer transit covers, open container rain shields',
      'Construction site protection (curing concrete, scaffolding enclosures)',
      'Temporary monsoon shelters, disaster relief tents, and pond liners',
      'Industrial machinery covers and outdoor raw material protection'
    ],
    commercialUses: [
      'Agricultural mandis, grain procurement agencies, and warehousing corporations',
      'Transport and logistics fleet operators',
      'Building contractors & infrastructure developers',
      'Disaster management and relief organizations'
    ],
    technicalSpecs: [
      { label: 'Base Fabric', value: 'Woven High-Density Polyethylene (HDPE)' },
      { label: 'Coating', value: 'Double-Sided LDPE Lamination' },
      { label: 'GSM Range', value: '90 GSM to 400 GSM' },
      { label: 'Eyelet Spacing', value: 'Approx. 1 meter intervals on reinforced edges' },
      { label: 'Waterproofing', value: '100% Hydrostatic Barrier' },
      { label: 'UV Lifespan', value: 'Multi-season outdoor endurance' }
    ],
    availableColors: ['Ocean Blue / Silver', 'Olive Green / Dark Green', 'Yellow / Black', 'Silver / Black'],
    image: '/assets/images/products/hdpe-tarpaulin.jpg',
    alt: 'Heavy duty waterproof HDPE Tarpaulin with brass eyelets by OM Polymer'
  },
  {
    id: 'polyester-rope',
    name: 'Polyester Rope',
    category: 'Ropes',
    polymerType: 'Polyester',
    shortDescription: 'High-tenacity, low-stretch polyester rope delivering superior abrasion resistance, extreme UV endurance, and dependable heavy-load stability in demanding marine and industrial environments.',
    fullDescription: 'OM Polymer Polyester Rope is the definitive choice for applications where high breaking strength, minimal stretch, and uncompromising abrasion resistance are mandatory. Unlike polyolefin ropes, polyester has a specific gravity of 1.38 (sinks in water) and demonstrates exceptional friction tolerance against winches, capstans, and rough hardware. It retains its full tensile strength when completely submerged and maintains low elongation under sustained heavy tension.',
    materialInfo: '100% high-tenacity continuous filament Polyester (PET) fibers. Sinks in water (specific gravity 1.38), high heat resistance with melting point of ~260°C.',
    keyFeatures: [
      'Extremely low elongation (stretch) under heavy sustained working loads',
      'Superior abrasion resistance against metal chocks, winches, and capstans',
      'Highest UV and weathering resistance among standard synthetic fiber lines',
      'Maintains 100% of tensile strength wet or dry',
      'High thermal resistance with melting point of 260°C',
      'Flexible, torque-free handling in double-braid and 3-strand constructions'
    ],
    benefits: [
      'Prevents dangerous snap-back energy due to controlled, low elongation',
      'Delivers the longest operational service life in permanent outdoor installations',
      'Retains round cross-section under tension, running smoothly through blocks'
    ],
    applications: [
      'Commercial ship mooring, permanent dock pendants, and yacht rigging',
      'Industrial crane winches, heavy equipment pulling, and towing lines',
      'Flagpole halyards, safety harness lanyards, and fall-arrest rigging',
      'Arboriculture tree climbing and heavy limb lowering lines'
    ],
    commercialUses: [
      'Maritime shipping, shipbuilders, and marine port services',
      'Heavy manufacturing plants and industrial crane operations',
      'Arborist and tree care companies',
      'Safety equipment manufacturers and rigging specialists'
    ],
    technicalSpecs: [
      { label: 'Composition', value: '100% High Tenacity Polyester (PET)' },
      { label: 'Structure', value: 'Double Braided / 3-Strand Hawser' },
      { label: 'Diameter Range', value: '4 mm to 32 mm' },
      { label: 'Specific Gravity', value: '1.38 (Sinks in water)' },
      { label: 'Elongation at Break', value: 'Low (~12% - 15%)' },
      { label: 'Melting Point', value: '260°C' }
    ],
    availableColors: ['Classic White with Navy Tracer', 'Solid Black', 'Navy Blue', 'Silver'],
    image: '/assets/images/products/polyester-rope.jpg',
    alt: 'High-tenacity double braided Polyester Marine Rope coil by OM Polymer'
  }
];
