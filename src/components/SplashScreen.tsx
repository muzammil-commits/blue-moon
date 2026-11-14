import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface SplashScreenProps {
  onFinish?: () => void;
  minDuration?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish, minDuration = 1800 }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [statusText, setStatusText] = useState('Initializing Digital Architecture...');

  useEffect(() => {
    // Check if user already saw splash in this session
    const hasSeen = sessionStorage.getItem('bluemoon_splash_seen');
    if (hasSeen === 'true') {
      setIsDismissed(true);
      if (onFinish) onFinish();
      return;
    }

    const intervalTime = 25;
    const step = 100 / (minDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 35 && next < 70) {
          setStatusText('Loading Enterprise Systems & Services...');
        } else if (next >= 70 && next < 95) {
          setStatusText('Crafting High-Performance Experiences...');
        } else if (next >= 95) {
          setStatusText(`Welcome to ${COMPANY_INFO.name}`);
        }

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsDismissed(true);
              sessionStorage.setItem('bluemoon_splash_seen', 'true');
              if (onFinish) onFinish();
            }, 600);
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [minDuration, onFinish]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsDismissed(true);
      sessionStorage.setItem('bluemoon_splash_seen', 'true');
      if (onFinish) onFinish();
    }, 300);
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070B1E] text-white px-6 transition-all duration-700 ease-out select-none ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Animated Glows & Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] bg-gradient-to-tr from-[#0866F5]/25 via-[#7936F2]/20 to-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      {/* Subtle Rotating Tech Orbit Ring */}
      <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-blue-500/15 pointer-events-none animate-[spin_25s_linear_infinite]" />
      <div className="absolute w-[400px] h-[400px] sm:w-[520px] sm:h-[520px] rounded-full border border-purple-500/10 border-dashed pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-slate-300 hover:text-white transition-all backdrop-blur-sm"
      >
        Skip Intro →
      </button>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full space-y-6">
        
        {/* Glow Frame & Official Logo */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-2xl shadow-blue-900/40 group">
          {/* Ambient logo glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 rounded-3xl blur-xl pointer-events-none" />

          <img
            src="/assets/logo-dark.png"
            alt={COMPANY_INFO.name}
            className="h-16 sm:h-20 md:h-24 w-auto object-contain filter drop-shadow-[0_0_25px_rgba(8,102,245,0.7)] animate-[pulse_3s_ease-in-out_infinite]"
          />
        </div>

        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#087EFF] text-xs sm:text-sm font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{COMPANY_INFO.tagline}</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full max-w-xs sm:max-w-sm space-y-2.5 pt-2">
          {/* Progress Bar Track */}
          <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden border border-white/5 relative p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-[#0866F5] via-[#087EFF] to-[#7936F2] rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(8,126,255,0.9)]"
              style={{ width: `${Math.min(100, Math.max(5, progress))}%` }}
            />
          </div>

          {/* Status Text & Percentage */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium px-1">
            <span className="truncate pr-2 tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
              <span>{statusText}</span>
            </span>
            <span className="font-mono text-blue-300 font-bold">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Trust pill */}
        <div className="pt-4 flex items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>12+ Years of Excellence</span>
          </div>
          <span>•</span>
          <span>325+ Projects Worldwide</span>
        </div>

      </div>
    </div>
  );
};
