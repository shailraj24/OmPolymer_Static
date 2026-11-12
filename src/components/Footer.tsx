import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, getGmailUrl } from '../data/company';
import { PRODUCTS } from '../data/products';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      {/* Top CTA Strip */}
      <div className="border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block mb-1">
              Industrial Manufacturing Facility
            </span>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Ready to Source Better-Quality Polymer Cordage?
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              13 years of proven extrusion expertise. Direct factory supply for marine, agriculture, and logistics.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello OM Polymer, I would like to request product pricing and technical specifications.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 8866246042
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Bio (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-1.5 shadow-xs border border-slate-700 flex items-center justify-center">
                <img
                  src="/image/logo.png"
                  alt="OM POLYMERS"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Established manufacturer of high-tenacity PE fishing twine, HDPE tarpaulins, polypropylene ropes, and agricultural baler twines. Dedicated to durability, virgin raw materials, and customer trust.
            </p>
            <div className="text-xs text-slate-500 space-y-1 pt-2">
              <p>· 13 Years of Manufacturing Experience</p>
              <p>· Vegdi GIDC, Dhoraji, Rajkot District, Gujarat, India</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Product Catalogue</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">Blog & Insights</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Products (Part 1) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Products Catalogue
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PRODUCTS.slice(0, 5).map(prod => (
                <li key={prod.id}>
                  <a href={`#product-${prod.id}`} className="hover:text-white transition-colors flex items-center justify-between group">
                    <span className="truncate">{prod.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Products (Part 2) & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Cordage & Covers
            </h4>
            <ul className="space-y-2.5 text-sm mb-6">
              {PRODUCTS.slice(5).map(prod => (
                <li key={prod.id}>
                  <a href={`#product-${prod.id}`} className="hover:text-white transition-colors flex items-center justify-between group">
                    <span className="truncate">{prod.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Factory Office
            </h4>
            <p className="text-xs text-slate-400">
              Plot No. 59, Vegdi GIDC,<br />
              Dhoraji - 360410, Gujarat, India
            </p>
            <div className="pt-2">
              <a
                href={getGmailUrl({ subject: 'Inquiry - OM Polymer' })}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} OM POLYMER. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>ISO Compliant Manufacturing Standards</span>
            <a href="#about" className="hover:text-slate-300">About Company</a>
            <a href="#contact" className="hover:text-slate-300">Contact Factory</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
