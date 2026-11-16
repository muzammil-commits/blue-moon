import React from 'react';
import { Star, Quote, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare, Award } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { COMPANY_INFO } from '../data/company';
import { CountUp } from '../components/CountUp';

interface TestimonialsPageProps {
  onOpenQuote: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenQuote }) => {
  return (
    <main className="font-sans relative z-10">
      {/* 1. Hero */}
      <section className="py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100/90 text-[#0866F5] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            Client Feedback & Trust
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Trusted by Leaders{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Worldwide
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Read what entrepreneurs, corporate executives, and business owners have to say about partnering with {COMPANY_INFO.name}.
          </p>
        </div>
      </section>

      {/* 2. Testimonials Grid */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
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

          {/* 
            3. Trust Metrics in Counting Mode (image copy 21.png)
            Smooth interactive count-up numbers for 100%, 100+, 5+, 24/7
          */}
          <div className="mt-16 bg-[#102B8C] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800 relative z-10">
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                  <CountUp end={100} suffix="%" duration={1800} />
                </div>
                <div className="text-xs sm:text-sm text-blue-200 mt-1.5 font-bold">Client Satisfaction</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                  <CountUp end={100} suffix="+" duration={2000} />
                </div>
                <div className="text-xs sm:text-sm text-blue-200 mt-1.5 font-bold">Projects Delivered</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                  <CountUp end={5} suffix="+" duration={1600} />
                </div>
                <div className="text-xs sm:text-sm text-blue-200 mt-1.5 font-bold">Years of Experience</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-blue-200 mt-1.5 font-bold">Dedicated Support</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Verified Client Rating Badges */}
      <section className="py-16 bg-[#F5F8FF] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Independent Ratings</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Recognized by Leading Review Platforms</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 text-center border border-slate-200/80 shadow-md">
              <div className="text-2xl font-black text-amber-500 mb-1">★★★★★ 4.9 / 5.0</div>
              <h4 className="font-extrabold text-slate-900">Google Business Verified</h4>
              <p className="text-xs text-slate-500 mt-1">Over 180+ authentic customer reviews</p>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center border border-slate-200/80 shadow-md">
              <div className="text-2xl font-black text-blue-600 mb-1">★★★★★ 5.0 / 5.0</div>
              <h4 className="font-extrabold text-slate-900">Clutch Top Tech Agency</h4>
              <p className="text-xs text-slate-500 mt-1">Recognized for full-stack engineering</p>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center border border-slate-200/80 shadow-md">
              <div className="text-2xl font-black text-purple-600 mb-1">★★★★★ 4.9 / 5.0</div>
              <h4 className="font-extrabold text-slate-900">Digital Marketing Excellence</h4>
              <p className="text-xs text-slate-500 mt-1">3.5x to 6x average lead ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Client Success Stories Highlight Fold */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-12 border border-blue-200/60">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Case Study Snapshot</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                "BlueMoon redesigned our digital portal and scaled our monthly inquiries by 240% in under 90 days."
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                From responsive layout redesign to high-speed backend architecture and targeted Google Ads management, we transform your web presence into an automated client acquisition engine.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-7 py-3 rounded-full bg-[#0866F5] text-white font-extrabold text-xs sm:text-sm shadow-md hover:bg-blue-600 active:scale-95 transition-all"
                >
                  Schedule Your Free Strategy Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Fold */}
      <section className="py-16 bg-gradient-to-r from-[#0866F5] via-[#102B8C] to-[#7936F2] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Accelerate Your Business Growth?
          </h3>
          <p className="text-sm text-blue-100">
            Partner with BlueMoon Software Solutions and experience measurable digital results.
          </p>
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-full bg-white text-[#102B8C] font-extrabold text-sm shadow-xl hover:bg-blue-50 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span>Request Your Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
};
