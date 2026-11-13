import React from 'react';
import { Trophy, Box, Smile, Globe, ArrowRight } from 'lucide-react';
import { CountUp } from './CountUp';

interface MidStatsBannerProps {
  onGetStarted: () => void;
}

export const MidStatsBanner: React.FC<MidStatsBannerProps> = ({ onGetStarted }) => {
  return (
    <section className="bg-gradient-to-r from-[#0866F5] via-[#102B8C] to-[#4F46E5] text-white py-14 sm:py-18 px-4 sm:px-8 shadow-2xl relative overflow-hidden my-6">
      {/* Dynamic background light bursts */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 items-center">
          
          {/* Stat 1: 12+ Years Experience */}
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
              <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-300" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black leading-none tracking-tight">
                <CountUp end={12} suffix="+" duration={1600} />
              </div>
              <div className="text-xs sm:text-sm text-blue-100 font-extrabold mt-1.5 uppercase tracking-wide">
                Years Experience
              </div>
            </div>
          </div>

          {/* Stat 2: 325+ Projects Delivered */}
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
              <Box className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-300" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black leading-none tracking-tight">
                <CountUp end={325} suffix="+" duration={2000} />
              </div>
              <div className="text-xs sm:text-sm text-blue-100 font-extrabold mt-1.5 uppercase tracking-wide">
                Projects Delivered
              </div>
            </div>
          </div>

          {/* Stat 3: 100% Client Satisfaction */}
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
              <Smile className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-300" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black leading-none tracking-tight">
                <CountUp end={100} suffix="%" duration={1800} />
              </div>
              <div className="text-xs sm:text-sm text-blue-100 font-extrabold mt-1.5 uppercase tracking-wide">
                Client Satisfaction
              </div>
            </div>
          </div>

          {/* Stat 4: Clients Worldwide */}
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
              <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-purple-300 animate-spin" style={{ animationDuration: '24s' }} />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black leading-none">
                Clients
              </div>
              <div className="text-xs sm:text-sm text-cyan-200 font-extrabold mt-1.5 uppercase tracking-wide">
                Worldwide
              </div>
            </div>
          </div>

          {/* Action Callout */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center gap-3 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/25 text-center lg:text-right">
            <span className="text-sm sm:text-base font-black tracking-tight text-white flex items-center gap-2">
              <span>Let's Turn Your Ideas Into Reality</span>
              <ArrowRight className="w-4 h-4 text-cyan-300 hidden lg:inline" />
            </span>
            <button
              onClick={onGetStarted}
              className="px-8 py-3.5 rounded-full bg-white text-[#102B8C] font-black text-xs sm:text-sm hover:bg-blue-50 active:scale-95 transition-all shadow-2xl flex items-center gap-2 group hover:shadow-glow-blue"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
