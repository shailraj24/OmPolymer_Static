import { ShieldCheck, Award, Factory, Cpu, Target, HeartHandshake, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, WHY_CHOOSE_US } from '../data/company';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
  onNavigate: (hash: string) => void;
}

export function AboutPage({ onOpenQuoteModal, onNavigate }: AboutPageProps) {
  return (
    <div className="py-12 sm:py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
            <a href="#" className="hover:underline">Home</a>
            <span aria-hidden="true">/</span>
            <span>About Us</span>
          </div>
          <h1 className="text-2xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            13 Years of Polymer Manufacturing Excellence in Gujarat
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            From our manufacturing plant in Vegdi GIDC, Dhoraji, OM Polymer supplies dependable synthetic ropes, high-tenacity twines, and waterproof HDPE tarpaulins engineered for real-world resilience.
          </p>
        </div>

        {/* Narrative & Facility Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Our Journey & Manufacturing Heritage
            </h2>
            <p>
              Founded in 2013, OM Polymer embarked on a focused industrial mission: to produce synthetic twines and heavy-duty ropes that eliminate the premature failures often encountered by commercial fishermen, agriculturalists, and transport haulers.
            </p>
            <p>
              Over thirteen years of steady development, our team has accumulated deep hands-on expertise in polymer extrusion, monofilament stretching, high-torque twisting, and multi-layer fabric lamination. Today, our nine core product lines support vital commercial infrastructure across India and international markets.
            </p>

            <div className="border-l-2 border-blue-600 pl-4 py-1 space-y-2 text-slate-800 dark:text-slate-200 font-medium">
              <p>
                "We believe that industrial cordage should never be a compromise. A fisherman at sea or a farmer storing grain deserves products that hold fast through every wave and monsoon."
              </p>
            </div>

            <p>
              Every kilogram of twine and every meter of rope leaving our plant reflects our strict policy: zero compromise on raw material virginity, rigorous tension calibration, and complete transparency in runnage and denier.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800">
              <img
                src="/assets/images/hero-factory.jpg"
                alt="OM Polymer plant in Dhoraji GIDC"
                className="w-full h-72 object-cover object-center"
              />
              <div className="p-5 bg-white dark:bg-slate-900">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                  Plant & Machinery
                </p>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Vegdi GIDC, Plot No. 59, Dhoraji
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Equipped with high-efficiency blenders, chill-roll extrusion, precision cross-winders, and multi-ply twisting units.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-2">
              Our Manufacturing Tenets
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Engineered on 4 Key Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                13 Years Experience
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Thirteen years of tested manufacturing processes, continuous formula optimization, and consistent customer relationships.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Better Quality Polymers
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Utilizing only prime-grade virgin HDPE, PP, and Polyester granules compounded with specialized UV inhibitors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Product Durability
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Resistant to tropical sunlight, open-ocean salinity, abrasive surfaces, heavy dynamic shocks, and chemical contact.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Custom packaging, verified coil runnage, rapid response times, and dependable dispatch straight from Gujarat.
              </p>
            </div>
          </div>
        </div>

        {/* Plant Location & Contact Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Direct Manufacturer Access
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Have Technical Questions About Our Materials?
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Discuss specific breaking strengths, custom coil lengths, or bulk commercial delivery schedules directly with our plant specialists.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-colors cursor-pointer"
            >
              Request Factory Quote
            </button>
            <button
              onClick={() => onNavigate('#contact')}
              className="px-6 py-3.5 rounded-xl bg-slate-800 text-white font-bold text-sm hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
