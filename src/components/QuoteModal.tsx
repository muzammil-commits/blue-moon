import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, MessageSquare, ExternalLink, Building2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_INFO } from '../data/company';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'social-media-marketing');
  const [budget, setBudget] = useState('Starting from ₹5,000 (Basic Setup / Starter Website)');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [generatedWhatsappUrl, setGeneratedWhatsappUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation - Name and Phone required, Email optional
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (email.trim() && !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setErrorMessage('Please enter a valid phone number with area code.');
      return;
    }

    setIsSubmitting(true);

    const serviceObj = SERVICES_DATA.find((s) => s.slug === service);
    const serviceName = serviceObj ? serviceObj.title : service;

    // Structured comprehensive WhatsApp message
    const formattedMessage = 
`*NEW QUOTATION REQUEST* 🚀
*BlueMoon Software Solutions*
━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${fullName.trim()}
🏢 *About Business:* ${businessName.trim() || 'Business details discussed on call'}
📱 *Phone:* ${phone.trim()}
✉️ *Email:* ${email.trim() || 'Not provided'}
💼 *Selected Service:* ${serviceName}
💰 *Estimated Budget:* ${budget}
📝 *Project Brief / Requirements:*
${message.trim() || 'Client requested initial consultation.'}
━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 *Date:* ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
🌐 *Source:* BlueMoon Website (Get a Quote Modal)`;

    // WhatsApp Direct Integration to 9618870088
    const targetWhatsapp = '919618870088';
    const waUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(formattedMessage)}`;
    setGeneratedWhatsappUrl(waUrl);

    // Trigger WhatsApp redirect immediately
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error('Popup blocked', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setBusinessName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setGeneratedWhatsappUrl('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Quotation Dispatched to WhatsApp!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Your project inquiry has been formatted and connected directly to our official WhatsApp line (<strong>+91 96188 70088</strong>).
              </p>
            </div>

            {/* Direct WhatsApp button in case popup was blocked */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left space-y-2">
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Instant WhatsApp Communication</span>
              </div>
              <p className="text-xs text-emerald-700">
                If WhatsApp didn't open automatically, click the button below to chat with our technical architects right now:
              </p>
              <a
                href={generatedWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Open in WhatsApp (+91 96188 70088)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-slate-900 text-white font-bold text-sm shadow hover:bg-slate-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Integration</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Get a Free Custom Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill in your project details below and send directly to our team on WhatsApp at <strong>+91 96188 70088</strong>.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    About Business / Company Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Retail Store, Clinic, Tax Firm, Startup..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 96188 70088"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 bg-white transition-all"
                  >
                    <option value="social-media-marketing">Social Media Marketing & Services</option>
                    <option value="website-designing">Website Designing</option>
                    <option value="website-development">Website Development</option>
                    <option value="seo-services">SEO Services</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="ai-ad-creation">AI Ad Creation</option>
                    <option value="google-ads-management">Google Ads Management</option>
                    <option value="graphic-designing">Graphic Designing</option>
                    <option value="google-business-profile-management">Google Business Profile Management</option>
                    <option value="mobile-app-development">Mobile App Development</option>
                    <option value="web-hosting-domain-registration">Web Hosting & Domain Registration</option>
                    <option value="training-internship">Training & Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Approximate Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 bg-white transition-all font-medium text-slate-900"
                  >
                    <option value="Starting from ₹5,000 (Basic Setup / Starter Website)">Starting from ₹5,000 (Basic Setup / Starter Website)</option>
                    <option value="₹5,000 - ₹15,000 (Small Business / Service Website)">₹5,000 - ₹15,000 (Small Business / Service Website)</option>
                    <option value="₹15,000 - ₹30,000 (Corporate Business Portal)">₹15,000 - ₹30,000 (Corporate Business Portal)</option>
                    <option value="₹30,000 - ₹75,000 (E-Commerce / Custom Web App)">₹30,000 - ₹75,000 (E-Commerce / Custom Web App)</option>
                    <option value="₹75,000+ (Enterprise Custom Application)">₹75,000+ (Enterprise Custom Application)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Project Brief or Requirements
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your business goals, required features, or references..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 resize-none transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0866F5] via-[#4F46E5] to-[#7936F2] hover:brightness-105 text-white font-extrabold text-sm shadow-lg hover:shadow-glow-blue active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Connecting to WhatsApp...</span>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Send to WhatsApp (+91 96188 70088)</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2.5">
                  Your project details will be directly delivered to WhatsApp for immediate response.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
