import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  MessageSquare, Zap, Sparkles, Phone
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_INFO } from '../data/company';

interface ServiceDetailPageProps {
  onOpenQuote: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenQuote }) => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services (exclude current)
  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== slug).slice(0, 3);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(
    `Hello BlueMoon Software Solutions, I would like to inquire about your ${service.title} service.`
  )}`;

  return (
    <main className="font-sans relative z-10">
      {/* 1. Hero Banner */}
      <section className="pt-10 pb-14 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-blue-600 font-bold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Service Suite</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.title}{' '}
                <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent block sm:inline">
                  Services
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {service.fullDesc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0866F5] to-[#7936F2] text-white font-bold text-sm shadow-lg hover:shadow-glow-blue hover:brightness-105 active:scale-95 transition-all flex items-center gap-2 group"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20ba59] active:scale-95 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              {/* Stats badges */}
              {service.stats && (
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/60 max-w-lg">
                  {service.stats.map((st, sIdx) => (
                    <div key={sIdx}>
                      <div className="text-xl sm:text-2xl font-black text-slate-900">{st.value}</div>
                      <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">{st.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Service Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-bold text-slate-900 shadow-md">
                  {COMPANY_INFO.name} • {service.title}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Key Benefits */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/90 text-[#0866F5] text-xs font-bold uppercase tracking-wider shadow-sm">
              Strategic Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Benefits of Our {service.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Engineered to deliver high performance, measurable conversions, and maximum return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-400 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-blue-100/80 text-[#0866F5] flex items-center justify-center font-bold text-sm mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features & Capabilities */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/90 text-[#0866F5] text-xs font-bold uppercase tracking-wider shadow-sm">
              Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What's Included in This Service
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-slate-200/80 shadow-md flex items-start gap-3 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-50 group-hover:bg-[#0866F5] text-blue-600 group-hover:text-white flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">{feat}</span>
              </div>
            ))}
          </div>

          {/* Deliverables / Tech stack pills */}
          {service.technologies && (
            <div className="mt-12 bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Technologies & Tools We Utilize:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {service.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3.5 py-1.5 rounded-full bg-slate-50/90 border border-slate-200/80 text-slate-700 text-xs font-semibold hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Our Working Process (Steps 1 to 4) */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/90 text-blue-600 text-xs font-bold uppercase tracking-wider shadow-sm">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 4-Step Working Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured, transparent workflow ensuring timely delivery and zero communication gaps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 relative group hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-black text-blue-600/25 group-hover:text-blue-600 transition-colors mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs Accordion */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs font-bold uppercase tracking-wider shadow-sm">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 overflow-hidden shadow-md transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Related Services */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Related Services You Might Need
            </h3>
            <Link
              to="/services"
              className="text-xs sm:text-sm font-bold text-blue-600 hover:underline flex items-center gap-1"
            >
              <span>All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={`/services/${rel.slug}`}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-slate-200/80 hover:border-blue-300 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600 mb-1 transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{rel.shortDesc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-blue-600 flex items-center justify-between">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Strong CTA Bar */}
      <section className="bg-gradient-to-r from-[#0866F5] via-[#102B8C] to-[#7936F2] py-14 px-4 sm:px-8 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Start with {service.title}?
          </h3>
          <p className="text-base text-blue-100 max-w-xl mx-auto">
            Contact our engineering and digital consulting experts today to get a customized implementation roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-full bg-white text-[#102B8C] font-extrabold text-sm shadow-xl hover:bg-blue-50 active:scale-95 transition-all"
            >
              Get a Free Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="px-7 py-4 rounded-full border border-white/40 text-white font-extrabold text-sm hover:bg-white/10 active:scale-95 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
