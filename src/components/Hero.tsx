import React from 'react';
import { ArrowRight, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center pt-4 pb-10 sm:pt-6 sm:pb-12">
      {/* 
        HERO FULL BACKGROUND (image copy 2.png on desktop, image copy 3.png on mobile)
        100% bright, vibrant, crisp, and fully visible with zero white patchwork
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Desktop Background (image copy 2.png) */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center sm:bg-right scale-100 hover:scale-101 transition-transform duration-1000 ease-out filter brightness-110 contrast-105 saturate-110"
          style={{
            backgroundImage: `url('/assets/hero-desktop.png')`,
          }}
        />

        {/* Mobile Background (image copy 3.png) */}
        <div 
          className="block md:hidden absolute inset-0 bg-cover bg-center filter brightness-110 contrast-105 saturate-110"
          style={{
            backgroundImage: `url('/assets/hero-mobile.png')`,
          }}
        />

        {/* Ambient subtle light pulses */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      </div>

      {/* Hero Foreground Content - Completely free of rectangular patchwork cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="max-w-2xl space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-500">
          
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-[#0866F5] text-xs sm:text-sm font-black shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>{COMPANY_INFO.subheading}</span>
          </div>

          {/* Main Heading - Clean, readable directly on the background */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] drop-shadow-sm">
              <span className="bg-gradient-to-r from-[#0866F5] via-[#2442E8] to-[#7936F2] bg-clip-text text-transparent">
                {COMPANY_INFO.name}
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tight leading-snug drop-shadow-sm">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Description - High contrast & crystal clear */}
          <p className="text-xs sm:text-sm md:text-base text-slate-800 leading-relaxed font-bold max-w-xl drop-shadow-sm">
            {COMPANY_INFO.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0866F5] via-[#4F46E5] to-[#7936F2] text-white font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-glow-blue hover:brightness-105 active:scale-95 transition-all group"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border-2 border-[#0866F5] text-[#0866F5] hover:bg-[#0866F5] hover:text-white font-extrabold text-xs sm:text-sm shadow-lg active:scale-95 transition-all group"
            >
              <Calendar className="w-4 h-4 text-purple-600 group-hover:text-white transition-colors" />
              <span>Book Free Consultation</span>
            </button>
          </div>

          {/* Trust Social Proof Badge */}
          <div className="pt-2 flex items-center gap-3 text-xs font-black text-slate-800">
            <div className="flex -space-x-2">
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="Client" />
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" alt="Client" />
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80" alt="Client" />
            </div>
            <div className="flex items-center gap-1.5 text-slate-900 drop-shadow-sm font-extrabold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Trusted by 100+ Companies Worldwide</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
