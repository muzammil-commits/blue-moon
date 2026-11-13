import React from 'react';
import { Lightbulb, Code2, Rocket, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      step: '01',
      title: 'Strategic Discovery',
      subtitle: 'Market Analysis & Blueprint',
      desc: 'We analyze your business targets, target customer psychology, and competitors to formulate an airtight digital strategy.',
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-500/20 to-indigo-500/10'
    },
    {
      step: '02',
      title: 'UI/UX & Wireframing',
      subtitle: 'Modern Visual Prototyping',
      desc: 'Crafting responsive user interfaces, intuitive flow architectures, and interactive Figma prototypes with conversion focus.',
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
      color: 'from-indigo-500/20 to-purple-500/10'
    },
    {
      step: '03',
      title: 'Full-Stack Engineering',
      subtitle: 'High-Performance Code',
      desc: 'Developing scalable web platforms, custom mobile apps, and robust backends with modern frameworks and enterprise security.',
      icon: <Code2 className="w-6 h-6 text-purple-600" />,
      color: 'from-purple-500/20 to-pink-500/10'
    },
    {
      step: '04',
      title: 'Launch & Growth',
      subtitle: 'SEO, Ads & Scale',
      desc: 'Deploying live systems with zero downtime, paired with Google Ads, Local SEO, and AI advertising to drive qualified leads.',
      icon: <TrendingUp className="w-6 h-6 text-cyan-600" />,
      color: 'from-cyan-500/20 to-blue-500/10'
    }
  ];

  return (
    <section className="py-20 sm:py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs font-extrabold uppercase tracking-wider">
            <Rocket className="w-3.5 h-3.5" />
            <span>Proven Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            How We Deliver{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A battle-tested 4-stage engineering and marketing process that guarantees on-time delivery and predictable ROI.
          </p>
        </div>

        {/* 4 Process Cards with scrolling hover lifts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-400 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                    {st.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-blue-600/30 transition-colors">
                    {st.step}
                  </span>
                </div>

                <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">
                  {st.subtitle}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-extrabold text-blue-600 group-hover:text-purple-600 transition-colors">
                <span>Phase {st.step} Details</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Consultation CTA Bar */}
        <div className="mt-14 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl p-6 border border-blue-200/60 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              ✓
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">Have a custom timeline or requirement?</div>
              <div className="text-xs text-slate-600">Our senior architects provide rapid project evaluations within 24 hours.</div>
            </div>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-2.5 rounded-full bg-[#0866F5] text-white font-extrabold text-xs shadow-md hover:bg-blue-600 active:scale-95 transition-all whitespace-nowrap"
          >
            Start Your Project Blueprint
          </button>
        </div>

      </div>
    </section>
  );
};
