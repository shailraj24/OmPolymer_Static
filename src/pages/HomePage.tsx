import { useState } from 'react';
import { ArrowRight, ShieldCheck, Award, Layers, Zap, Users, CheckCircle2, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { COMPANY_INFO, WHY_CHOOSE_US, DEMO_TESTIMONIALS, getGmailUrl } from '../data/company';

interface HomePageProps {
  onOpenQuoteModal: (productId?: string) => void;
  onNavigate: (hash: string) => void;
}

export function HomePage({ onOpenQuoteModal, onNavigate }: HomePageProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Twines' | 'Ropes' | 'Tarpaulins'>('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0: return <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 1: return <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 2: return <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 3: return <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 4: return <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      default: return <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        {/* Background Image with High-Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-factory.jpg"
            alt="OM Polymer Modern Manufacturing Plant"
            className="w-full h-full object-cover object-center brightness-40 contrast-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center flex flex-col items-center">
          
          {/* Subtle Editorial Kicker (No Pill Enclosure) */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-400 mb-4 sm:mb-6">
            <span>Polymer & Cordage Manufacturing Hub</span>
            <span aria-hidden="true">·</span>
            <span>Gujarat, India</span>
          </div>

          {/* Mandatory Headline */}
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 text-balance">
            Strength, Quality & Reliability – <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-indigo-300">Built for Every Industry.</span>
          </h1>

          {/* Mandatory Supporting Text */}
          <p className="text-sm sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8 sm:mb-10 text-balance font-normal">
            With 13 years of manufacturing experience, we focus on delivering better-quality polymer and rope solutions for industrial, agricultural, and commercial applications.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('#products')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-blue-600 text-white font-bold text-sm sm:text-base hover:bg-blue-500 active:scale-98 shadow-lg shadow-blue-900/30 transition-all cursor-pointer"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-slate-700/80 active:scale-98 transition-all cursor-pointer backdrop-blur-xs"
            >
              Contact Us
            </button>
          </div>

          {/* Key Industrial Benchmarks Strip */}
          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-800/80 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">13 Yrs</p>
              <p className="text-xs text-slate-400 mt-0.5">Manufacturing Heritage</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight tabular-nums">9 Core</p>
              <p className="text-xs text-slate-400 mt-0.5">Product Lines Sourced</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">100%</p>
              <p className="text-xs text-slate-400 mt-0.5">Prime Virgin Polymers</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">GIDC</p>
              <p className="text-xs text-slate-400 mt-0.5">Dhoraji, Gujarat Facility</p>
            </div>
          </div>

        </div>
      </section>


      {/* 2. ABOUT US HIGHLIGHT SECTION */}
      <section id="about-preview" className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <span>About OM Polymer</span>
                <span aria-hidden="true">·</span>
                <span>Established 2013</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Thirteen Years of Dedication to Superior Polymer & Cordage Manufacturing
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Headquartered in the vibrant industrial corridor of Vegdi GIDC, Dhoraji (Gujarat), OM Polymer was founded on a steadfast commitment: delivering reliable, heavy-duty polymer solutions that withstand the rigorous demands of deep-sea fishing, commercial agriculture, transport logistics, and civil construction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Commitment to Better Quality
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    We strictly formulate with prime virgin resins and high-grade UV stabilizers, ensuring exceptional breaking strength and zero premature degradation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Product Durability
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Designed for real-world friction, saltwater immersion, continuous outdoor sunlight, and heavy knot tension.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Customer Satisfaction
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Consistent batch runnage, tailored specifications, prompt turnaround, and direct factory-level B2B customer support.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Reliable Solutions
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    From agricultural harvest binding to commercial trawler lines, our products guarantee dependable operational continuity.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('#about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Read Our Complete Manufacturing Journey →
                </button>
              </div>
            </div>

            {/* Right Col: Factory Spotlight */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                <img
                  src="/assets/images/hero-factory.jpg"
                  alt="OM Polymer plant machinery"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-6 bg-white dark:bg-slate-900">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                    Manufacturing Facility
                  </span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Plot No. 59, Vegdi GIDC, Dhoraji, Gujarat
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Extrusion lines, circular looms, high-speed baler twisters, and continuous rope lay machinery operating to rigorous industrial benchmarks.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. OUR PRODUCTS (ALL 9 PRODUCTS) */}
      <section id="products-section" className="py-20 bg-slate-50 dark:bg-slate-950/70 border-y border-slate-200 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-2">
              Industrial Product Catalogue
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Engineered Cordage, Twine & Tarpaulins
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
              Explore our complete range of nine high-tenacity polymer solutions manufactured in Gujarat for commercial fisheries, modern farming, and transport.
            </p>

            {/* Interactive Category Tabs (Button elements as required by anti-slop) */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 p-1 sm:p-1.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 inline-flex shadow-xs max-w-full">
              {(['All', 'Twines', 'Ropes', 'Tarpaulins'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat === 'All' ? 'All (9)' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product: Product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Product Image Slot */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Polymer Indicator */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold">
                    {product.polymerType}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                      <span>{product.category}</span>
                      <span>100% Virgin Grade</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
                    <button
                      onClick={() => onNavigate(`#product-${product.id}`)}
                      className="flex-1 py-2.5 px-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold transition-colors cursor-pointer text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onOpenQuoteModal(product.id)}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer text-center"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Catalogue Link */}
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('#products')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-white dark:hover:bg-slate-900 transition-all shadow-xs"
            >
              Explore Detailed Technical Specifications for All 9 Products
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-2">
              Proven Industrial Reputation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Industry Partners Choose OM Polymer
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              We focus on dependable, honest manufacturing fundamentals—delivering the durability and consistency that commercial applications demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-center mb-6">
                  {getFeatureIcon(idx)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 5. CUSTOMER TESTIMONIALS (Clearly identified demo feedback for design evaluation) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-2">
              Industry Experience & Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Trusted in Field, Marine & Logistics
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Representative industry use-case testimonials illustrating application performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DEMO_TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-6"
              >
                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{test.quote}"
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <p className="font-bold text-slate-900 dark:text-white">{test.industry}</p>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5">{test.region}</p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 font-mono">{test.note}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Factory Direct Quotations & Consultations
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Looking for Quality Polymer Products?
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect directly with our manufacturing unit in Dhoraji, Gujarat. We provide custom spool weights, rope coil lengths, and bulk B2B dispatch.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg transition-all cursor-pointer"
            >
              Contact Us
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello OM Polymer, I am looking for quality polymer products and would like to receive product pricing.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          <div className="pt-6 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white transition-colors">
              📞 Direct: +91 8866246042
            </a>
            <span>·</span>
            <a 
              href={getGmailUrl({ subject: 'Product Inquiry - OM Polymer', body: 'Hello OM Polymer,\n\nI would like to inquire regarding your products.' })}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-4"
            >
              ✉️ Email via Gmail ({COMPANY_INFO.email})
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
