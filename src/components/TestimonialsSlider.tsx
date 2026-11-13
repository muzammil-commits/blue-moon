import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Hear directly from founders, CEOs, and business owners who partnered with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons (Desktop) */}
          <button
            onClick={prevSlide}
            className="absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#0866F5] text-white hover:bg-blue-700 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#0866F5] text-white hover:bg-blue-700 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-8">
            {TESTIMONIALS_DATA.slice(currentIndex, currentIndex + 3).concat(
              // Wrap around if near the end
              TESTIMONIALS_DATA.slice(0, Math.max(0, currentIndex + 3 - TESTIMONIALS_DATA.length))
            ).map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFF] rounded-3xl p-7 border border-[#E2E8F8] shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-2xl bg-blue-100/80 text-[#0866F5] flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 fill-current" />
                </div>

                {/* Content */}
                <p className="text-sm text-slate-700 leading-relaxed italic font-medium mb-6">
                  "{item.content}"
                </p>

                {/* Author Info & Star Rating */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-500/20"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* 5-Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS_DATA.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`transition-all rounded-full ${
                  currentIndex === dotIdx ? 'w-6 h-2.5 bg-[#0866F5]' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

