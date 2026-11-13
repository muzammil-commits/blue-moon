import React from 'react';
import { Trophy, Box, Smile, Globe, ArrowRight } from 'lucide-react';
import { CountUp } from './CountUp';

interface MidStatsBannerProps {
  onGetStarted: () => void;
}

export const MidStatsBanner: React.FC<MidStatsBannerProps> = ({ onGetStarted }) => {
  return (
    <section className="bg-gradient-to-r from-[#0866F5] via-[#102B8C] to-[#4F46E5] text-white py-10 px-4 sm:px-8 shadow-inner relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/20">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black leading-none">
                <CountUp end={12} suffix="+" duration={1600} />
              </div>
              <div className="text-xs text-blue-100 font-medium mt-1">Years Experience</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/20">
              <Box className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black leading-none">
                <CountUp end={325} suffix="+" duration={2000} />
              </div>
              <div className="text-xs text-blue-100 font-medium mt-1">Projects Delivered</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/20">
              <Smile className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black leading-none">
                <CountUp end={100} suffix="%" duration={1800} />
              </div>
              <div className="text-xs text-blue-100 font-medium mt-1">Client Satisfaction</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/20">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black leading-none">Clients</div>
              <div className="text-xs text-blue-100 font-medium mt-1">Worldwide</div>
            </div>
          </div>

          {/* Action Callout */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/20 text-center lg:text-right">
            <span className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
              <span>Let's Turn Your Ideas Into Reality</span>
              <ArrowRight className="w-4 h-4 text-cyan-300 hidden lg:inline" />
            </span>
            <button
              onClick={onGetStarted}
              className="px-6 py-2 rounded-full bg-white text-[#102B8C] font-extrabold text-xs sm:text-sm hover:bg-blue-50 active:scale-95 transition-all shadow-lg flex items-center gap-1.5 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
