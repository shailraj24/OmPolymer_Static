import { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, Check } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';

interface ProductsPageProps {
  onOpenQuoteModal: (productId?: string) => void;
  onNavigate: (hash: string) => void;
}

export function ProductsPage({ onOpenQuoteModal, onNavigate }: ProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Twines' | 'Ropes' | 'Tarpaulins'>('All');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        product.name.toLowerCase().includes(query) ||
        product.polymerType.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.applications.some(a => a.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <a href="#" className="hover:underline">Home</a>
            <span aria-hidden="true">/</span>
            <span>Product Catalogue</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Comprehensive Industrial Product Catalogue
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            All nine heavy-duty synthetic cordage, twine, and protective tarpaulin lines manufactured directly at our OM Polymer facility in Dhoraji, Gujarat.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {(['All', 'Twines', 'Ropes', 'Tarpaulins'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat === 'All' ? 'All (9)' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, materials, uses..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
              No products match your search query "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product: Product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Product Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold">
                    {product.polymerType}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                      <span>{product.category}</span>
                      <span>100% Virgin Polymer</span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </h2>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Features Snippet */}
                    <ul className="mt-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3">
                      {product.keyFeatures.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
                    <button
                      onClick={() => onNavigate(`#product-${product.id}`)}
                      className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold transition-colors cursor-pointer text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onOpenQuoteModal(product.id)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer text-center"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Material Matrix Overview */}
        <div className="mt-16 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
              Engineering Comparison
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Polymer Material Characteristics at a Glance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Select the appropriate polymer class based on buoyancy, UV endurance, and stretch parameters.
            </p>
          </div>

          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full min-w-[580px] text-left text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="py-3 px-4">Polymer Class</th>
                  <th className="py-3 px-4">Buoyancy</th>
                  <th className="py-3 px-4">Water Uptake</th>
                  <th className="py-3 px-4">UV Weathering</th>
                  <th className="py-3 px-4">Primary Best Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">High Density PE (HDPE)</td>
                  <td className="py-3 px-4">Floats (0.95 Sp. Gr.)</td>
                  <td className="py-3 px-4 tabular-nums">&lt; 0.01%</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">Excellent</td>
                  <td className="py-3 px-4">Marine Fishing Nets, Tarpaulins, Buoyant Rigging</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Polypropylene (PP)</td>
                  <td className="py-3 px-4">Floats (0.91 Sp. Gr.)</td>
                  <td className="py-3 px-4 tabular-nums">0%</td>
                  <td className="py-3 px-4">High (UV Stabilized)</td>
                  <td className="py-3 px-4">Transport Lashing, Tiger Ropes, Baler Twine</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">PP Multifilament (PPMF)</td>
                  <td className="py-3 px-4">Floats (0.91 Sp. Gr.)</td>
                  <td className="py-3 px-4 tabular-nums">0%</td>
                  <td className="py-3 px-4">Moderate to High</td>
                  <td className="py-3 px-4">Telecom Conduits, Soft-Hand Leads, Marine Fender Lines</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Polyester (PET)</td>
                  <td className="py-3 px-4">Sinks (1.38 Sp. Gr.)</td>
                  <td className="py-3 px-4 tabular-nums">&lt; 1%</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">Superior</td>
                  <td className="py-3 px-4">Low-Stretch Mooring, Crane Winches, Safety Rigging</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
