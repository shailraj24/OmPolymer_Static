import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, Building } from 'lucide-react';
import { COMPANY_INFO, getGmailUrl } from '../data/company';
import { PRODUCTS } from '../data/products';

export function ContactPage() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [productInterested, setProductInterested] = useState(PRODUCTS[0].name);
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dispatchType, setDispatchType] = useState<'whatsapp' | 'email' | 'standard' | null>(null);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `Hello OM Polymer Sales Team,\n\n` +
      `Product Interest: ${productInterested}\n` +
      `Estimated Quantity: ${quantity || 'Not specified'}\n` +
      `Name: ${name}\n` +
      `Company: ${company || 'N/A'}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || 'N/A'}\n\n` +
      `Message: ${message || 'Please provide quotation and catalog.'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setDispatchType('whatsapp');
    setSubmitted(true);
  };

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `B2B Inquiry: ${productInterested} - ${company || name}`;
    const body = 
      `To OM Polymer Sales Department,\n\n` +
      `Product: ${productInterested}\n` +
      `Estimated Quantity: ${quantity || 'N/A'}\n\n` +
      `Contact Information:\n` +
      `- Full Name: ${name}\n` +
      `- Company Name: ${company || 'N/A'}\n` +
      `- Phone Number: ${phone}\n` +
      `- Email Address: ${email}\n\n` +
      `Inquiry Details:\n${message || 'Please provide quotation, catalog, and standard packaging details.'}\n\n` +
      `Best regards.`;

    const gmailUrl = getGmailUrl({
      to: COMPANY_INFO.email,
      subject,
      body
    });
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setDispatchType('email');
    setSubmitted(true);
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDispatchType('standard');
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <a href="#" className="hover:underline">Home</a>
            <span aria-hidden="true">/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Connect With Our Factory Team
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            Direct communication with OM Polymer manufacturing facility in Vegdi GIDC, Dhoraji, Gujarat. We welcome wholesale, OEM, and bulk inquiries.
          </p>
        </div>

        {/* 3 Interactive Contact Cards Grid (Matching and upgrading the coming soon page) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone Card */}
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-blue-500/50 transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Direct Line</span>
                <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {COMPANY_INFO.phone}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              Monday – Saturday, 9:00 AM to 7:00 PM IST
            </p>
          </a>

          {/* Email Card (Opens directly in Gmail) */}
          <a
            href={getGmailUrl({ subject: 'Product Inquiry - OM Polymer', body: 'Hello OM Polymer,\n\nI would like to inquire regarding your polymer products and pricing.' })}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-blue-500/50 transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Email Support (Gmail)</span>
                <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {COMPANY_INFO.email}
                </p>
              </div>
            </div>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              Click to compose in Gmail →
            </p>
          </a>

          {/* Plant Location Card */}
          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-blue-500/50 transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Head Office & Plant</span>
                <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 leading-snug">
                  Vegdi GIDC, Plot No. 59,<br />Dhoraji, Gujarat, India
                </p>
              </div>
            </div>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              Open in Google Maps →
            </p>
          </a>

        </div>

        {/* Main 2-Column: Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
              Commercial Inquiry Form
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Please share your requirement details. We respond promptly with technical data sheets and competitive factory pricing.
            </p>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Inquiry Ready & Recorded
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  {dispatchType === 'whatsapp' && (
                    <>Your inquiry for <strong>{productInterested}</strong> was transmitted to WhatsApp. Our sales specialist will review your specs shortly.</>
                  )}
                  {dispatchType === 'email' && (
                    <>Your inquiry for <strong>{productInterested}</strong> has been opened in Gmail web compose. You can review specifications and send directly to <strong>{COMPANY_INFO.email}</strong>.</>
                  )}
                  {dispatchType === 'standard' && (
                    <>Thank you <strong>{name}</strong>. Because this is a static showcase portal, you can also reach our plant dispatch desk immediately via telephone or WhatsApp.</>
                  )}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call {COMPANY_INFO.phone}
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSend} className="space-y-4">
                
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Gujarat Marine Supply Co."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Product Interested In *
                    </label>
                    <select
                      value={productInterested}
                      onChange={(e) => setProductInterested(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500"
                    >
                      {PRODUCTS.map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Custom Extrusion / Multiple Products">
                        Custom Extrusion / Multiple Products
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 500 kg, 200 coils, 50 rolls"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Message / Specifications / Delivery Location
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specify desired diameter, twist, colors, test certificates, or target delivery destination..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send via Gmail
                  </button>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={handleStandardSubmit}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:underline cursor-pointer"
                  >
                    Or log standard website inquiry
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right: Map & Plant Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Map Frame */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Factory Location (Dhoraji, Gujarat)
              </h3>
              
              <div className="aspect-4/3 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                <iframe
                  title="OM Polymer Location Map"
                  src="https://maps.google.com/maps?q=Vegdi+GIDC+Plot+No+59+Dhoraji+Gujarat+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="pt-3 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Coordinates: Dhoraji GIDC Zone</span>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Direct Factory Access Info */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-400" />
                Commercial Supply Details
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>· <strong>Manufacturing Hub:</strong> Vegdi GIDC, Plot No. 59, Dhoraji, Gujarat</li>
                <li>· <strong>Packaging Types:</strong> Corrugated boxes, woven poly bags, inside-pull spools</li>
                <li>· <strong>Dispatch Mode:</strong> Container truck dispatch across India & international ports</li>
                <li>· <strong>Minimum Order Quantities:</strong> Flexible commercial batches for distributors</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
