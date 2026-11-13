import React from 'react';
import { Star, Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { COMPANY_INFO } from '../data/company';

interface TestimonialsPageProps {
  onOpenQuote: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenQuote }) => {
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EEF4FF] via-[#F5F8FF] to-white py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            Client Feedback & Trust
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Trusted by Leaders{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Worldwide
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Read what entrepreneurs, corporate executives, and business owners have to say about working with {COMPANY_INFO.name}.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8FAFF] rounded-3xl p-8 border border-[#E2E8F8] shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0866F5] flex items-center justify-center">
                      <Quote className="w-6 h-6 fill-current" />
                    </div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {item.highlight && (
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                      {item.highlight}
                    </div>
                  )}

                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{item.content}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/80 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.role} • {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Metrics */}
          <div className="mt-16 bg-[#102B8C] text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800">
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-white">100%</div>
                <div className="text-xs text-blue-200 mt-1 font-semibold">Client Satisfaction</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-white">325+</div>
                <div className="text-xs text-blue-200 mt-1 font-semibold">Projects Delivered</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-white">12+</div>
                <div className="text-xs text-blue-200 mt-1 font-semibold">Years of Experience</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-white">24/7</div>
                <div className="text-xs text-blue-200 mt-1 font-semibold">Dedicated Support</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              Partner with BlueMoon Software Solutions and experience measurable digital growth.
            </p>
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0866F5] to-[#7936F2] text-white font-bold text-sm shadow-lg hover:shadow-glow-blue hover:brightness-105 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <span>Get Started with Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
    </main>
  );
};

