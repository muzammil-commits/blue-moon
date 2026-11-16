import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#0866F5] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Digital Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            5+ Expert Services For{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Explore our end-to-end technology and marketing services designed to scale your business.
          </p>
        </div>

        {/* 12 Services Grid with Real Service Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv, idx) => (
            <Link
              key={srv.id}
              to={`/services/${srv.slug}`}
              className="group bg-white/90 backdrop-blur-md hover:bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-blue-400 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Service Real Image Thumbnail with zoom effect */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={srv.heroImage}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Service Number Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-black text-blue-600 shadow-sm">
                    0{idx + 1}
                  </div>

                  {/* Quick Arrow Circle */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/95 text-blue-600 group-hover:bg-[#0866F5] group-hover:text-white flex items-center justify-center shadow-md transition-all group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#0866F5] transition-colors mb-2 leading-snug">
                    {srv.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-purple-600 transition-colors">
                <span>Explore Service Details</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* View all services footer pill */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-blue-200 text-[#0866F5] hover:bg-[#0866F5] hover:text-white font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95 group"
          >
            <span>Browse Full Service Catalog & Deliverables</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
