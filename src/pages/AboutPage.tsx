import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, Target, Gem, CheckCircle2, Trophy, 
  Users, ShieldCheck, HeartHandshake, ArrowRight,
  Sparkles, Award, Globe, Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface AboutPageProps {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  return (
    <main className="font-sans">
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-b from-[#EEF4FF] via-[#F5F8FF] to-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            About {COMPANY_INFO.name}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Building a Smarter{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed font-normal">
            {COMPANY_INFO.name} is a complete digital solutions company offering website designing, website development, software solutions and digital marketing services under one roof.
          </p>
        </div>
      </section>

      {/* 2. Company Introduction & Office Visual */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
                <img
                  src="/assets/about-office.png"
                  alt="BlueMoon Software Solutions Office"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-tr from-[#0866F5] to-[#7936F2] text-white p-6 rounded-3xl shadow-xl hidden sm:block">
                <div className="text-3xl font-black">12+ Years</div>
                <div className="text-xs text-blue-100 font-medium">Of Technological Innovation</div>
              </div>
            </div>

            {/* Intro Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase">
                Our Story & Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Empowering Brands Through Advanced Technology & Strategic Marketing
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Founded with a vision to redefine digital solutions for forward-thinking enterprises, {COMPANY_INFO.name} has grown from an ambitious tech studio into an international full-service software and digital marketing powerhouse.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We combine human-centered UI/UX design with robust modern engineering and aggressive digital marketing strategies. Whether you need a corporate web portal, a high-converting lead funnel, or an end-to-end mobile app, we deliver solutions that drive measurable business impact.
              </p>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                  <div className="text-2xl font-black text-blue-600">325+</div>
                  <div className="text-xs font-bold text-slate-700 mt-0.5">Projects Delivered</div>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
                  <div className="text-2xl font-black text-purple-600">100%</div>
                  <div className="text-xs font-bold text-slate-700 mt-0.5">Client Satisfaction</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision, Mission & Purpose */}
      <section id="vision" className="py-20 bg-[#F5F8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs font-bold uppercase tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 relative group hover:border-blue-300 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0866F5] flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 relative group hover:border-purple-300 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-[#7936F2] flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section id="values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
              The BlueMoon Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 7 Core Values
            </h2>
            <p className="text-slate-600 text-base">
              The fundamental principles that guide every line of code we write and every campaign we launch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E2E8F8] hover:border-blue-300 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-[#0866F5] flex items-center justify-center mb-4 font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose BlueMoon */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5F8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs font-bold uppercase tracking-wider">
              Competitive Edge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose BlueMoon Software Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-6 h-6 text-blue-600" />, title: '12+ Years Experience', desc: 'Over a decade of hands-on technical proficiency across diverse market verticals.' },
              { icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />, title: 'Proven Track Record', desc: '325+ completed projects with 100% client satisfaction and zero compromise on quality.' },
              { icon: <Globe className="w-6 h-6 text-cyan-600" />, title: 'Full Spectrum Services', desc: 'Everything from UI/UX design and cloud servers to SEO, Google Ads, and mobile apps.' },
              { icon: <HeartHandshake className="w-6 h-6 text-purple-600" />, title: 'Dedicated Support', desc: 'Transparent weekly updates, direct WhatsApp channels, and 24/7 technical monitoring.' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-[#0866F5] to-[#7936F2] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
                Ready to Accelerate Your Digital Transformation?
              </h3>
              <p className="text-sm sm:text-base text-blue-100">
                Let's discuss your roadmap and craft custom technology tailored to your business goals.
              </p>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-full bg-white text-[#102B8C] font-extrabold text-sm shadow-lg hover:bg-blue-50 active:scale-95 transition-all whitespace-nowrap flex items-center gap-2"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
    </main>
  );
};
