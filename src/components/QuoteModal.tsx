import { useState, useEffect } from 'react';
import { X, Send, PhoneCall, CheckCircle2, MessageSquare } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO, getGmailUrl } from '../data/company';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedProductId?: string;
}

export function QuoteModal({ isOpen, onClose, preSelectedProductId }: QuoteModalProps) {
  const [selectedProduct, setSelectedProduct] = useState(preSelectedProductId || PRODUCTS[0].id);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submissionMethod, setSubmissionMethod] = useState<'whatsapp' | 'email' | 'form' | null>(null);

  useEffect(() => {
    if (preSelectedProductId) {
      setSelectedProduct(preSelectedProductId);
    }
  }, [preSelectedProductId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentProd = PRODUCTS.find(p => p.id === selectedProduct) || PRODUCTS[0];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMsg = encodeURIComponent(
      `Hello OM Polymer,\n\nI am interested in your ${currentProd.name}.\n` +
      (quantity ? `Quantity Needed: ${quantity}\n` : '') +
      (name ? `Contact Name: ${name}\n` : '') +
      (company ? `Company: ${company}\n` : '') +
      (phone ? `Phone: ${phone}\n` : '') +
      (email ? `Email: ${email}\n` : '') +
      (message ? `Details: ${message}\n` : '') +
      `\nPlease share product technical specifications and pricing.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodedMsg}`, '_blank');
    setSubmissionMethod('whatsapp');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Product Inquiry: ${currentProd.name} - ${company || name || 'Customer'}`;
    const body = 
      `Dear OM Polymer Sales Team,\n\n` +
      `Product: ${currentProd.name}\n` +
      `Required Quantity: ${quantity || 'Not specified'}\n\n` +
      `Customer Details:\n` +
      `- Full Name: ${name || 'N/A'}\n` +
      `- Company: ${company || 'N/A'}\n` +
      `- Phone: ${phone || 'N/A'}\n` +
      `- Email: ${email || 'N/A'}\n\n` +
      `Requirements / Inquiries:\n${message || 'Please provide quotation, catalog, and standard packaging details.'}\n\n` +
      `Thank you.`;

    const gmailUrl = getGmailUrl({
      to: COMPANY_INFO.email,
      subject,
      body
    });
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setSubmissionMethod('email');
    setSubmitted(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionMethod('form');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmissionMethod(null);
    setName('');
    setCompany('');
    setPhone('');
    setEmail('');
    setQuantity('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs transition-opacity duration-200">
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Request a Commercial Quote
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Direct B2B pricing from OM Polymer factory in Gujarat
            </p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Inquiry Prepared Successfully
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                {submissionMethod === 'whatsapp' && (
                  <>Your inquiry for <strong>{currentProd.name}</strong> was redirected to WhatsApp. Our technical sales team will assist you shortly.</>
                )}
                {submissionMethod === 'email' && (
                  <>Your inquiry for <strong>{currentProd.name}</strong> has been opened in Gmail web compose. You can review specifications and send directly to <strong>{COMPANY_INFO.email}</strong>.</>
                )}
                {submissionMethod === 'form' && (
                  <>Thank you for your inquiry for <strong>{currentProd.name}</strong>. Because this is a static showcase portal, you can also connect directly via phone or WhatsApp for immediate pricing.</>
                )}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call +91 8866246042
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Select Product *
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.polymerType})
                    </option>
                  ))}
                </select>
              </div>

              {/* Grid 2 Column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name *
                  </label>
                    <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Company / Firm Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Gujarat Marine Trades"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Estimated Quantity & Delivery Location
                </label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 1000 kg / 50 rolls, Porbandar Port"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Specific Requirements / Dimensions / Colors
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mention desired diameter, ply count, color, or packaging preferences..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  Inquire via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send via Gmail
                </button>
              </div>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="text-xs text-slate-500 dark:text-slate-400 hover:underline cursor-pointer"
                >
                  Or submit standard web inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
