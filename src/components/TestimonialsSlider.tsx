import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Testimonial } from '../types';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [activeModalReview, setActiveModalReview] = useState<Testimonial | null>(null);

  // Automatic scrolling right to left every 3.5 seconds
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  // Get 3 visible cards starting from currentIndex
  const visibleCards = [
    TESTIMONIALS_DATA[currentIndex],
    TESTIMONIALS_DATA[(currentIndex + 1) % TESTIMONIALS_DATA.length],
    TESTIMONIALS_DATA[(currentIndex + 2) % TESTIMONIALS_DATA.length],
  ];

  return (
    <section className="py-20 sm:py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 text-[#0866F5] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements & Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            What Our Clients{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Hear directly from founders, CEOs, and business owners who partnered with BlueMoon Software Solutions.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#0866F5] text-white hover:bg-blue-700 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#0866F5] text-white hover:bg-blue-700 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Display with right-to-left transition */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-6">
            {visibleCards.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => setActiveModalReview(item)}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-7 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Quote icon & Star Rating */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-blue-100 text-[#0866F5] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Quote className="w-5 h-5 fill-current" />
                    </div>

                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {item.highlight && (
                    <div className="text-xs font-black text-blue-600 uppercase tracking-wide mb-2.5">
                      {item.highlight}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium line-clamp-4 mb-6">
                    "{item.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-500/30"
                    />
                    <div>
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-semibold">
                        {item.role} • {item.company}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-blue-600 group-hover:underline">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS_DATA.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`transition-all rounded-full ${
                  currentIndex === dotIdx ? 'w-8 h-2.5 bg-[#0866F5]' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 
          Interactive Testimonial Details Popup Modal
        */}
        {activeModalReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
              className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-100 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalReview(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={activeModalReview.avatar}
                  alt={activeModalReview.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100"
                />
                <div>
                  <h4 className="text-lg font-black text-slate-900">{activeModalReview.name}</h4>
                  <p className="text-xs font-semibold text-slate-500">{activeModalReview.role} • {activeModalReview.company}</p>
                  <div className="flex items-center gap-1 text-amber-400 mt-1">
                    {[...Array(activeModalReview.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-xs text-slate-600 font-bold ml-1">5.0 Verified Review</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 my-4">
                <p className="text-sm text-slate-800 leading-relaxed font-medium italic">
                  "{activeModalReview.content}"
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 pt-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Client Project Delivered by BlueMoon Software Solutions</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
