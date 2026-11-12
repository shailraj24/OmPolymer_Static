import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface WhatsAppButtonProps {
  customMessage?: string;
}

export function WhatsAppButton({ customMessage }: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMsg = customMessage || "Hello OM Polymer, I am visiting your website and would like to inquire about your polymer products and pricing.";
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="mb-2 sm:mb-3 w-[calc(100vw-2rem)] max-w-72 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-left animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 mb-2">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Chat with OM Polymer
            </span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
              aria-label="Dismiss chat tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
            Have questions about specifications, bulk orders, or custom rope diameters? Chat with our sales team directly on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setShowTooltip(false)}
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all duration-300 group-focus:ring-4 group-focus:ring-emerald-300"
          aria-label="Contact OM Polymer on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current stroke-none" />
        </a>

        {/* Hover Micro Badge */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-900/90 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-md hidden sm:block">
          WhatsApp Us Direct
        </span>
      </div>
    </div>
  );
}
