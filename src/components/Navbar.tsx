import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface NavbarProps {
  currentHash: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenQuoteModal: (productId?: string) => void;
}

export function Navbar({ currentHash, isDark, onToggleTheme, onOpenQuoteModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isCurrent = (hash: string) => {
    if (hash === '#' && (!currentHash || currentHash === '#' || currentHash === '#home')) return true;
    return currentHash === hash;
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-8">
          
          {/* Zone 1: Brand Logo */}
          <a 
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 focus-visible:outline-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg py-1 group"
            aria-label="OM Polymer Home"
          >
            <div className="bg-white rounded-lg sm:rounded-xl p-1 sm:p-1.5 shadow-xs border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center">
              <img
                src="/image/logo.png"
                alt="OM POLYMERS"
                className="h-8 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-800 dark:text-slate-200 leading-none">
                OM POLYMER
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1">
                Gujarat · 13 Yrs
              </span>
            </div>
          </a>

          {/* Zone 2: Clean 4–5 single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <a 
              href="#" 
              className={`hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap shrink-0 transition-colors ${isCurrent('#') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}
            >
              Home
            </a>
            
            <a 
              href="#about" 
              className={`hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap shrink-0 transition-colors ${isCurrent('#about') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}
            >
              About Us
            </a>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProductsDropdownOpen(prev => !prev)}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                className={`inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  currentHash.startsWith('#product') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''
                }`}
                aria-expanded={productsDropdownOpen}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsDropdownOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 sm:w-96 p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Product Catalogue (9 Items)
                    </span>
                    <a 
                      href="#products" 
                      onClick={() => setProductsDropdownOpen(false)}
                      className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline"
                    >
                      View All →
                    </a>
                  </div>

                  <div className="max-h-80 overflow-y-auto space-y-0.5">
                    {PRODUCTS.map(product => (
                      <a
                        key={product.id}
                        href={`#product-${product.id}`}
                        onClick={() => setProductsDropdownOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                      >
                        <img 
                          src={product.image} 
                          alt="" 
                          className="w-10 h-10 rounded-lg object-cover bg-slate-100 dark:bg-slate-800 shrink-0 border border-slate-200/50 dark:border-slate-700/50"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            {product.category} · {product.polymerType}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#blog" 
              className={`hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap shrink-0 transition-colors ${currentHash.startsWith('#blog') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}
            >
              Blog
            </a>

            <a 
              href="#contact" 
              className={`hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap shrink-0 transition-colors ${isCurrent('#contact') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}
            >
              Contact Us
            </a>
          </nav>

          {/* Zone 3: Primary Action + Theme Toggle + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="hidden sm:inline-flex items-center justify-center px-4.5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 active:scale-98 shadow-xs transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get a Quote
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3 max-h-[calc(100vh-4.5rem)] overflow-y-auto animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1 text-sm font-semibold">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              About Us
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Products Catalogue (9 Products)
            </a>
            <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-blue-500/30 my-1 grid grid-cols-1 sm:grid-cols-2 gap-1">
              {PRODUCTS.map(p => (
                <a
                  key={p.id}
                  href={`#product-${p.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs py-1 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 truncate"
                >
                  · {p.name}
                </a>
              ))}
            </div>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Blog & Insights
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Contact Us
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-center block text-sm"
            >
              Get a Quote
            </button>
            <a
              href="tel:+918866246042"
              className="w-full py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-center block text-xs"
            >
              Call +91 8866246042
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
