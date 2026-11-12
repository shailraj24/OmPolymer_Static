import { MessageCircle, Send, CheckCircle2, ChevronRight, ArrowLeft, Shield, Box, Sparkles } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { COMPANY_INFO } from '../data/company';

interface ProductDetailPageProps {
  productId: string;
  onOpenQuoteModal: (productId?: string) => void;
  onNavigate: (hash: string) => void;
}

export function ProductDetailPage({ productId, onOpenQuoteModal, onNavigate }: ProductDetailPageProps) {
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.polymerType === product.polymerType)).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in your ${product.name}. Please share product details and pricing.`
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="py-10 sm:py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <button onClick={() => onNavigate('#')} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => onNavigate('#products')} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
            Products
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 dark:text-white font-bold truncate">
            {product.name}
          </span>
        </nav>

        {/* Back Link */}
        <div>
          <button
            onClick={() => onNavigate('#products')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Products
          </button>
        </div>

        {/* Top Product Showcase (2 Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Large Product Image (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 shadow-xl relative aspect-4/3 lg:aspect-square">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold">
                {product.polymerType}
              </div>
            </div>

            {/* Quality Seals */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs">
                <span className="font-bold text-slate-900 dark:text-white block">100% Virgin Resin</span>
                <span className="text-slate-500 dark:text-slate-400">Zero recycled degradation</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs">
                <span className="font-bold text-slate-900 dark:text-white block">UV Inhibited</span>
                <span className="text-slate-500 dark:text-slate-400">Tested outdoor stability</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Overview, Specs & CTA (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                <span>{product.category}</span>
                <span aria-hidden="true">·</span>
                <span>OM Polymer Gujarat</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Quick Specs Strip */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Verified Technical Parameters
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                {product.technicalSpecs.slice(0, 6).map((spec, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-slate-500 dark:text-slate-400 block">{spec.label}</span>
                    <span className="font-bold text-slate-900 dark:text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Swatches */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Standard Verified Colors
              </span>
              <div className="flex flex-wrap gap-2">
                {product.availableColors.map((color, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Inquiries */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenQuoteModal(product.id)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Request Commercial Quote
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Inquire on WhatsApp
              </a>
            </div>

            {/* Quick Dispatch Callout */}
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1">
              <Shield className="w-4 h-4 text-emerald-500" />
              Direct factory supply from Vegdi GIDC, Dhoraji. Tailored batch weights & export packaging available.
            </p>

          </div>

        </div>

        {/* Detailed Description & Material Properties */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 7 cols: In-Depth Description */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Detailed Product Description & Engineering
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 space-y-2">
                <h4 className="text-sm font-bold text-blue-900 dark:text-blue-300">
                  Raw Material & Formulation
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {product.materialInfo}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 gap-2.5">
                  {product.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Operational Benefits for Commercial Operators
                </h3>
                <ul className="grid grid-cols-1 gap-2.5">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 5 cols: Technical Specs Table + Applications */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Full Specs Table */}
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Technical Specifications
                </h3>
                <dl className="divide-y divide-slate-200/80 dark:divide-slate-700/80 text-xs sm:text-sm">
                  {product.technicalSpecs.map((spec, idx) => (
                    <div key={idx} className="py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                      <dt className="text-slate-500 dark:text-slate-400 font-medium shrink-0">{spec.label}</dt>
                      <dd className="text-slate-900 dark:text-white font-bold sm:text-right break-words">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Common Applications */}
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Common Applications
                </h3>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">·</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commercial Uses */}
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Industrial & Commercial Sectors
                </h3>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {product.commercialUses.map((use, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                  Complementary Cordage
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Related Products
                </h3>
              </div>
              <button
                onClick={() => onNavigate('#products')}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Full Catalogue →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => onNavigate(`#product-${rel.id}`)}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all cursor-pointer group"
                >
                  <div className="aspect-4/3 rounded-xl overflow-hidden mb-3 bg-slate-100 dark:bg-slate-700">
                    <img
                      src={rel.image}
                      alt={rel.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
