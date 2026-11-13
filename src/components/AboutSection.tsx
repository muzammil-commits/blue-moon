import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Rocket, Target, Gem, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F5F8FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Office Image & Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Office Image with BlueMoon branding on wall */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src="/assets/about-office.png" 
                alt="BlueMoon Software Solutions Corporate Office"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-slate-800 shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Visakhapatnam Development Center</span>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs sm:text-sm font-bold tracking-wide">
                About Us
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Building a Smarter{' '}
                <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {COMPANY_INFO.name} is a complete digital solutions company offering website designing, website development, software solutions and digital marketing services under one roof.
              </p>

              {/* Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  '12+ Years of Industry Experience',
                  '325+ Completed Projects',
                  'Customized Digital Solutions',
                  'Responsive & SEO-Friendly Websites'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0866F5] flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0866F5] to-[#7936F2] text-white font-bold text-sm shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Vision, Mission, Core Values Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0866F5] flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-100">
                <Rocket className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                  Our Vision
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To become a globally trusted digital solutions company by delivering innovative technology, creative digital experiences and reliable solutions.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#7936F2] flex items-center justify-center flex-shrink-0 shadow-sm border border-purple-100">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To empower startups, small businesses and enterprises through professional website development, innovative software solutions and result-driven marketing.
                </p>
              </div>
            </div>

            {/* Core Values Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-cyan-200 transition-all duration-300 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-[#087EFF] flex items-center justify-center flex-shrink-0 shadow-sm border border-cyan-100">
                <Gem className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                  Our Core Values
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Innovation, Quality, Customer Satisfaction, Transparency, Integrity, Professional Excellence, and Continuous Improvement.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

