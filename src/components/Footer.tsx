import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, Facebook, Linkedin, Youtube, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090D24] text-slate-300 font-sans border-t border-blue-950/60 pt-16 pb-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <img
                src="/assets/logo-dark.png"
                alt="BlueMoon Software Solutions"
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-lg">
                  B
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl text-white tracking-tight">Blue<span className="text-purple-400">Moon</span></span>
                  <span className="text-[9px] font-bold text-slate-400 tracking-wider">SOFTWARE SOLUTIONS</span>
                </div>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted partner for digital transformation, digital marketing and innovative IT solutions. We build scalable technology that drives business growth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#0866F5] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#0866F5] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://bluemoonsoftwaresolutions.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/services/website-designing" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Website Designing</span>
                </Link>
              </li>
              <li>
                <Link to="/services/seo-services" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>SEO Services</span>
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Digital Marketing</span>
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Mobile App Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  <span>& More (All 12 Services)...</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-slate-300 hover:text-white font-semibold transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-300 hover:text-white truncate transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2025 {COMPANY_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/sitemap" className="hover:text-slate-300 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
