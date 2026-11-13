import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { SERVICES_DATA } from '../data/services';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'website-development',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Strict validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMessage('Please provide a valid phone number with country/area code.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Please enter a message of at least 10 characters.');
      return;
    }

    setFormStatus('submitting');
    // Simulate real client submission
    setTimeout(() => {
      setFormStatus('submitted');
    }, 1200);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(
    `Hello BlueMoon Software Solutions, I would like to get in touch regarding ${formData.service || 'your services'}.`
  )}`;

  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EEF4FF] via-[#F5F8FF] to-white py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            Connect With Our Team
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Have a project in mind or need expert technical consultation? Reach out via phone, email, or send us an enquiry message below.
          </p>
        </div>
      </section>

      {/* Contact Content & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Head Office & Support
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our engineering and creative studio is located in Visakhapatnam. Feel free to contact us for business partnerships, project quotes, or career opportunities.
                </p>
              </div>

              {/* Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="p-5 rounded-2xl bg-[#F8FAFF] border border-[#E2E8F8] hover:border-blue-300 transition-all flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-[#0866F5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0866F5] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone & Click-To-Call</h3>
                    <p className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {COMPANY_INFO.phone}
                    </p>
                    <span className="text-xs text-slate-500">Mon - Sat: 9:30 AM - 7:00 PM IST</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-5 rounded-2xl bg-[#F8FAFF] border border-[#E2E8F8] hover:border-blue-300 transition-all flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-100/80 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Inquiries</h3>
                    <p className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                      {COMPANY_INFO.email}
                    </p>
                    <span className="text-xs text-slate-500">Direct response within 2 business hours</span>
                  </div>
                </a>

                {/* Address */}
                <div className="p-5 rounded-2xl bg-[#F8FAFF] border border-[#E2E8F8] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100/80 text-[#087EFF] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Address</h3>
                    <p className="text-sm font-semibold text-slate-800 leading-relaxed mt-1">
                      {COMPANY_INFO.address.full}
                    </p>
                  </div>
                </div>

                {/* WhatsApp Quick Action */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20ba59] active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Start Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-[#F8FAFF] rounded-3xl p-6 sm:p-10 border border-[#E2E8F8] shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill out the form below with your requirements and we will revert with a free technical blueprint.
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {formStatus === 'submitted' ? (
                  <div className="bg-white rounded-2xl p-8 border border-emerald-100 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Inquiry Successfully Submitted</h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your enquiry regarding <strong>{formData.service}</strong> has been logged. Our consulting team will contact you shortly via email or phone.
                    </p>
                    <button
                      onClick={() => {
                        setFormStatus('idle');
                        setFormData({ name: '', email: '', phone: '', service: 'website-development', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#0866F5] text-white font-bold text-xs hover:bg-blue-600 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 91543 30011"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Service of Interest *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 bg-white transition-all"
                        >
                          {SERVICES_DATA.map((srv) => (
                            <option key={srv.slug} value={srv.slug}>
                              {srv.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Message or Project Details *
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your current business requirements, target dates, or goals..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 bg-white resize-none transition-all"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0866F5] via-[#4F46E5] to-[#7936F2] text-white font-extrabold text-sm shadow-md hover:shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2"
                      >
                        {formStatus === 'submitting' ? (
                          <span>Sending Your Message...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Project Inquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Location Embed */}
      <section className="py-12 bg-[#F5F8FF] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Locate Us</span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Our Visakhapatnam Office Location</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">{COMPANY_INFO.address.full}</p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[400px]">
            <iframe
              title="BlueMoon Software Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.9829988711824!2d83.2985161!3d17.7289297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433989c74dc5%3A0x6b638b975d4d3a24!2sAkkayyapalem%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530016!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

