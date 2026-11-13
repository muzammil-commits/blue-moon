import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Monitor, Code2, Search, 
  Megaphone, Share2, PlaySquare, BadgePercent, Palette, 
  MapPin, Smartphone, Server, GraduationCap 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

interface ServicesIndexPageProps {
  onOpenQuote: () => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onOpenQuote }) => {
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'website-designing': return <Monitor className="w-6 h-6 text-blue-600" />;
      case 'website-development': return <Code2 className="w-6 h-6 text-indigo-600" />;
      case 'seo-services': return <Search className="w-6 h-6 text-cyan-600" />;
      case 'digital-marketing': return <Megaphone className="w-6 h-6 text-blue-700" />;
      case 'social-media-marketing': return <Share2 className="w-6 h-6 text-purple-600" />;
      case 'ai-ad-creation': return <PlaySquare className="w-6 h-6 text-violet-600" />;
      case 'google-ads-management': return <BadgePercent className="w-6 h-6 text-amber-500" />;
      case 'graphic-designing': return <Palette className="w-6 h-6 text-rose-500" />;
      case 'google-business-profile-management': return <MapPin className="w-6 h-6 text-sky-500" />;
      case 'mobile-app-development': return <Smartphone className="w-6 h-6 text-blue-600" />;
      case 'web-hosting-domain-registration': return <Server className="w-6 h-6 text-teal-600" />;
      case 'training-internship': return <GraduationCap className="w-6 h-6 text-purple-600" />;
      default: return <Monitor className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EEF4FF] via-[#F5F8FF] to-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            End-to-End Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed font-normal">
            Explore our 12 specialized services engineered to accelerate business growth, build digital authority, and create memorable customer experiences.
          </p>
        </div>
      </section>

      {/* Services List with detailed cards & images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl border border-slate-100 hover:border-blue-200 shadow-md hover:shadow-2xl transition-all duration-300 ${
                idx % 2 === 1 ? 'bg-[#F8FAFF]' : 'bg-white'
              }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg group">
                  <img
                    src={srv.heroImage}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-900 shadow">
                    {srv.title}
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shadow-sm border border-blue-100">
                    {getIcon(srv.slug)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Service 0{srv.id}</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                      {srv.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {srv.fullDesc}
                </p>

                {/* Bullet Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {srv.features.slice(0, 4).map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0866F5] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-blue-600 active:scale-95 transition-all group"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={onOpenQuote}
                    className="px-5 py-3 rounded-full border border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-bold text-xs sm:text-sm transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

