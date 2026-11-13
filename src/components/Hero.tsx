import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onWatchIntro: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchIntro, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF4FF] via-[#F5F8FF] to-white pt-8 pb-16 lg:py-20 xl:py-24">
      {/* Background ambient decorative glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[550px] h-[550px] bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 text-center lg:text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200/60 text-[#0866F5] text-xs sm:text-sm font-bold shadow-sm backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
              <span>{COMPANY_INFO.subheading}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
                  {COMPANY_INFO.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl xl:text-3xl font-bold text-slate-800 tracking-tight leading-snug">
                {COMPANY_INFO.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {COMPANY_INFO.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#0866F5] to-[#7936F2] text-white font-bold text-base shadow-lg hover:shadow-glow-blue hover:brightness-105 active:scale-95 transition-all group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </button>

              <button
                onClick={onWatchIntro}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white border border-blue-200 text-slate-800 font-bold text-base shadow-sm hover:bg-blue-50/70 hover:border-blue-400 active:scale-95 transition-all group"
              >
                <div className="w-7 h-7 rounded-full bg-blue-100 group-hover:bg-[#0866F5] text-[#0866F5] group-hover:text-white flex items-center justify-center transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Our Intro</span>
              </button>
            </div>

            {/* Subtle trust badge */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-500">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" alt="Avatar" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" alt="Avatar" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" alt="Avatar" />
              </div>
              <div className="text-left">
                <div className="text-slate-800 font-bold text-xs">Trusted by 325+ Companies</div>
                <div className="text-[11px] text-slate-500">From emerging startups to established enterprises</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork */}
          <div className="lg:col-span-5 xl:col-span-6 relative mt-6 lg:mt-0 flex justify-center">
            {/* Desktop Hero Image (image copy 2.png) */}
            <div className="hidden md:block w-full max-w-xl xl:max-w-2xl relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 transition-transform hover:scale-101 duration-300">
              <img 
                src="/assets/hero-desktop.png" 
                alt="BlueMoon Digital Transformation Suite"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Mobile Hero Image (image copy 3.png) */}
            <div className="block md:hidden w-full max-w-sm relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/assets/hero-mobile.png" 
                alt="BlueMoon Digital Transformation Suite"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

