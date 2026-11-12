export const COMPANY_INFO = {
  name: 'OM POLYMER',
  tagline: 'Strength, Quality & Reliability – Built for Every Industry.',
  subtext: 'With 13 years of manufacturing experience, we focus on delivering better-quality polymer and rope solutions for industrial, agricultural, and commercial applications.',
  phone: '+91 8866246042',
  phoneClean: '918866246042',
  email: 'sales@ompolymer.com',
  address: 'Vegdi GIDC, Plot No. 59, Dhoraji, Gujarat, India',
  whatsappNumber: '918866246042',
  googleMapsUrl: 'https://maps.google.com/?q=Vegdi+GIDC,+Plot+No.+59,+Dhoraji,+Gujarat,+India',
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=Vegdi+GIDC+Plot+No+59+Dhoraji+Gujarat+India&output=embed',
  experienceYears: 13,
  location: 'Dhoraji, Gujarat, India'
};

export function getGmailUrl(options?: { to?: string; subject?: string; body?: string }) {
  const to = options?.to || COMPANY_INFO.email;
  const subject = options?.subject || 'Product Inquiry - OM Polymer';
  const body = options?.body || '';
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'exp',
    title: '13 Years of Manufacturing Experience',
    description: 'Thirteen years of hands-on polymer extrusion and twisting experience delivering proven industrial reliability and deep technical knowledge.'
  },
  {
    id: 'quality',
    title: 'Better Product Quality',
    description: '100% prime-grade virgin polymers paired with calibrated UV stabilization ensuring high tensile tenacity, knot integrity, and long service life.'
  },
  {
    id: 'range',
    title: 'Wide Product Range',
    description: 'A complete spectrum of synthetic twines, marine ropes, tiger ropes, PPMF cordage, baler twines, and waterproof HDPE tarpaulins under one roof.'
  },
  {
    id: 'reliable',
    title: 'Reliable Solutions',
    description: 'Consistent batch-to-batch denier, twist geometry, and breaking load parameters for dependable performance in field and sea conditions.'
  },
  {
    id: 'customer',
    title: 'Customer-Focused Approach',
    description: 'Direct communication, transparent specifications, rapid inquiry turnaround, and customized packaging options tailored to your trade.'
  },
  {
    id: 'durability',
    title: 'Quality and Durability',
    description: 'Engineered specifically to endure relentless tropical sun, saltwater corrosion, abrasive friction, and heavy mechanical tension.'
  }
];

export interface DemoTestimonial {
  id: string;
  quote: string;
  industry: string;
  region: string;
  note: string;
}

export const DEMO_TESTIMONIALS: DemoTestimonial[] = [
  {
    id: 'test-1',
    quote: 'The PE fishing twine and ropes maintain consistent tensile strength and zero water uptake throughout demanding offshore fishing seasons. Knot retention has been exceptional.',
    industry: 'Commercial Fishing Fleet Partner',
    region: 'Coastal Gujarat & Maharashtra',
    note: 'Demo representation for design evaluation. Replaceable with client review.'
  },
  {
    id: 'test-2',
    quote: 'Our baling machinery runs smoothly with OM Polymer baler twine without knotter jamming or breakage during high-speed field compaction.',
    industry: 'Agricultural Harvesting Contractor',
    region: 'Western Agricultural Belt',
    note: 'Demo representation for design evaluation. Replaceable with client review.'
  },
  {
    id: 'test-3',
    quote: 'We use the HDPE tarpaulins and tiger ropes for heavy flatbed fleet cargo. The waterproof lamination and tear resistance have kept shipments dry across monsoon transits.',
    industry: 'Industrial Logistics & Transport Operator',
    region: 'National Freight Network',
    note: 'Demo representation for design evaluation. Replaceable with client review.'
  }
];
