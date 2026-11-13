import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Monitor, Code2, Search, Megaphone, 
  Share2, PlaySquare, BadgePercent, Palette, 
  MapPin, Smartphone, Server, GraduationCap 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

export const ServicesGrid: React.FC = () => {
  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'website-designing':
        return <Monitor className="w-6 h-6 text-[#0866F5]" />;
      case 'website-development':
        return <Code2 className="w-6 h-6 text-[#102B8C]" />;
      case 'seo-services':
        return <Search className="w-6 h-6 text-[#087EFF]" />;
      case 'digital-marketing':
        return <Megaphone className="w-6 h-6 text-[#0866F5]" />;
      case 'social-media-marketing':
        return <Share2 className="w-6 h-6 text-[#7936F2]" />;
      case 'ai-ad-creation':
        return <PlaySquare className="w-6 h-6 text-[#9333EA]" />;
      case 'google-ads-management':
        return (
          <div className="w-6 h-6 rounded-full flex items-center justify-center font-extrabold text-sm text-white bg-gradient-to-r from-red-500 via-amber-500 to-green-500">
            G
          </div>
        );
      case 'graphic-designing':
        return <Palette className="w-6 h-6 text-[#EC4899]" />;
      case 'google-business-profile-management':
        return <MapPin className="w-6 h-6 text-[#0EA5E9]" />;
      case 'mobile-app-development':
        return <Smartphone className="w-6 h-6 text-[#2563EB]" />;
      case 'web-hosting-domain-registration':
        return <Server className="w-6 h-6 text-[#0284C7]" />;
      case 'training-internship':
        return <GraduationCap className="w-6 h-6 text-[#7C3AED]" />;
      default:
        return <Monitor className="w-6 h-6 text-[#0866F5]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            12+ expert services to help you build, grow and succeed in the digital world.
          </p>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES_DATA.map((srv) => (
            <Link
              key={srv.id}
              to={`/services/${srv.slug}`}
              className="group relative bg-[#F8FAFF] hover:bg-white rounded-2xl p-5 border border-[#E2E8F8] hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(srv.slug)}
                  </div>
                  
                  {/* Arrow circle */}
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 group-hover:bg-[#0866F5] group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0866F5] transition-colors mb-2 leading-snug">
                  {srv.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                  {srv.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>Learn More</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom helper info */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Need a tailored solution for your company?{' '}
            <Link to="/contact" className="text-blue-600 font-bold hover:underline">
              Speak with our senior solutions architect →
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};

