import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Rocket, Target, Gem, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 text-[#0866F5] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About BlueMoon Software Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Building a Smarter{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Digital Future
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            A full-service software development and strategic digital marketing company empowering global enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 4K Office Image (image copy 29.png) & Overview */}
          <div className="lg:col-span-7 space-y-6">
            {/* Grand Office Visual */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src="/assets/about-office.png" 
                alt="BlueMoon Software Solutions Corporate Office"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-black text-slate-900 shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Visakhapatnam Corporate Development Center</span>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                {COMPANY_INFO.name} is a complete digital solutions company offering website designing, website development, software solutions and digital marketing services under one roof.
              </p>

              {/* Key Bullet Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  '12+ Years of Industry Experience',
                  '325+ Completed Projects',
                  'Customized Digital Solutions',
                  'Responsive & SEO-Friendly Websites',
                  'Enterprise-Grade Cloud Infrastructure',
                  '24/7 Dedicated Technical Support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0866F5] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0866F5] via-[#4F46E5] to-[#7936F2] text-white font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-glow-blue hover:brightness-105 active:scale-95 transition-all group"
                >
                  <span>Learn More About BlueMoon</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Grand Cards for Vision, Mission & Core Values */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* 1. Our Vision Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-lg border border-slate-200/80 hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0866F5] group-hover:bg-[#0866F5] group-hover:text-white flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-100 transition-colors">
                <Rocket className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  To become a globally trusted digital solutions company by delivering innovative technology, creative digital experiences and reliable solutions that help businesses grow and succeed in the digital world.
                </p>
              </div>
            </div>

            {/* 2. Our Mission Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-lg border border-slate-200/80 hover:shadow-2xl hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#7936F2] group-hover:bg-[#7936F2] group-hover:text-white flex items-center justify-center flex-shrink-0 shadow-sm border border-purple-100 transition-colors">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-purple-600 transition-colors mb-1.5">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  To empower startups, small businesses and enterprises through professional website development, innovative software solutions and result-driven marketing services that maximize return on investment.
                </p>
              </div>
            </div>

            {/* 3. Our Core Values Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-lg border border-slate-200/80 hover:shadow-2xl hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-[#087EFF] group-hover:bg-[#087EFF] group-hover:text-white flex items-center justify-center flex-shrink-0 shadow-sm border border-cyan-100 transition-colors">
                <Gem className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#087EFF] transition-colors mb-1.5">
                  Our Core Values
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Innovation and Creativity, Quality and Reliability, Customer Satisfaction, Transparency and Integrity, Professional Excellence, Continuous Improvement, and Affordable Customized Solutions.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
