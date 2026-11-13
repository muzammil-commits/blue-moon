import React from 'react';
import { ArrowRight, Calendar, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 min-h-[520px] lg:min-h-[580px] flex items-center pt-6 pb-12 sm:pt-8 sm:pb-14">
      {/* 
        HERO BACKGROUND IMAGE (image copy 2.png on desktop, image copy 3.png on mobile)
        Rendered bright, vibrant, and animated with subtle floating glow effect
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Desktop Background (image copy 2.png) */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center sm:bg-right scale-100 hover:scale-102 transition-transform duration-1000 ease-out filter brightness-110 contrast-105 saturate-110"
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

        {/* Dynamic Light Rays & Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-500/25 rounded-full blur-3xl pointer-events-none" />

        {/* Light Glass Overlay for optimal text readability while keeping full picture bright & visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent lg:w-3/5 pointer-events-none" />
        <div className="block md:hidden absolute inset-0 bg-white/80 pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          
          {/* Glassmorphic Container for Crisp Text & Polished Appearance */}
          <div className="bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/80 shadow-2xl shadow-blue-900/10 space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0866F5] text-xs sm:text-sm font-extrabold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-spin" style={{ animationDuration: '6s' }} />
              <span>{COMPANY_INFO.subheading}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.12]">
                <span className="bg-gradient-to-r from-[#0866F5] via-[#2F49E6] to-[#7936F2] bg-clip-text text-transparent">
                  {COMPANY_INFO.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-800 tracking-tight leading-snug">
                {COMPANY_INFO.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium">
              {COMPANY_INFO.description}
            </p>

            {/* Buttons (Explore Services + Book Free Consultation) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0866F5] via-[#4F46E5] to-[#7936F2] text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-glow-blue hover:brightness-105 active:scale-95 transition-all group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Replaced 'Watch Our Intro' with 'Book Free Consultation' */}
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/95 border-2 border-[#0866F5] text-[#0866F5] hover:bg-[#0866F5] hover:text-white font-extrabold text-xs sm:text-sm shadow-md active:scale-95 transition-all group"
              >
                <Calendar className="w-4 h-4 text-purple-600 group-hover:text-white transition-colors" />
                <span>Book Free Consultation</span>
              </button>
            </div>

            {/* Trust Pill */}
            <div className="pt-2 flex items-center gap-3 border-t border-slate-200/60 text-xs font-bold text-slate-600">
              <div className="flex -space-x-2">
                <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="Avatar" />
                <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" alt="Avatar" />
                <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80" alt="Avatar" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Trusted by 325+ Companies Worldwide</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
