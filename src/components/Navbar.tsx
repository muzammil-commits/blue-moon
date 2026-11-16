import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, ChevronDown, Menu, X, ArrowRight,
  Monitor, Code2, Search, Megaphone, Share2, PlaySquare,
  BadgePercent, Palette, Smartphone,
  Server, GraduationCap, Facebook, Linkedin, Instagram
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { SERVICES_DATA } from '../data/services';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const serviceIconMap: Record<string, React.ReactNode> = {
    'website-designing': <Monitor className="w-4 h-4 text-blue-500" />,
    'website-development': <Code2 className="w-4 h-4 text-indigo-500" />,
    'seo-services': <Search className="w-4 h-4 text-cyan-500" />,
    'digital-marketing': <Megaphone className="w-4 h-4 text-blue-600" />,
    'social-media-marketing': <Share2 className="w-4 h-4 text-purple-500" />,
    'ai-ad-creation': <PlaySquare className="w-4 h-4 text-violet-500" />,
    'google-ads-management': <BadgePercent className="w-4 h-4 text-amber-500" />,
    'graphic-designing': <Palette className="w-4 h-4 text-rose-500" />,
    'google-business-profile-management': <Share2 className="w-4 h-4 text-sky-500" />,
    'mobile-app-development': <Smartphone className="w-4 h-4 text-blue-700" />,
    'web-hosting-domain-registration': <Server className="w-4 h-4 text-teal-500" />,
    'training-internship': <GraduationCap className="w-4 h-4 text-purple-600" />
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans shadow-sm transition-all duration-300">
      
      {/* 
        1. Top Contact Bar
        - Font size increased to text-xs sm:text-sm font-semibold
        - Address removed as requested
        - Facebook, Instagram, LinkedIn included
      */}
      <div className="hidden md:block bg-[#102B8C] text-white py-1.5 px-4 sm:px-8 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          {/* Contact Details with Increased Font Size */}
          <div className="flex items-center gap-6 text-white text-xs sm:text-sm font-semibold">
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`} 
              className="flex items-center gap-2 hover:text-blue-200 transition-colors group"
            >
              <div className="w-5 h-5 rounded-full bg-blue-700/80 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Phone className="w-3 h-3 text-white" />
              </div>
              <span className="tracking-wide">{COMPANY_INFO.phone}</span>
            </a>

            <span className="text-blue-300/40">|</span>

            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-2 hover:text-blue-200 transition-colors group"
            >
              <div className="w-5 h-5 rounded-full bg-blue-700/80 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Mail className="w-3 h-3 text-white" />
              </div>
              <span className="tracking-wide">{COMPANY_INFO.email}</span>
            </a>
          </div>

          {/* Social Icons: Facebook, Instagram, LinkedIn */}
          <div className="flex items-center gap-2.5">
            <a 
              href={COMPANY_INFO.social.facebook} 
              target="_blank" 
              rel="noreferrer" 
              className="w-6 h-6 rounded-full bg-[#1877F2] hover:brightness-110 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5 text-white" />
            </a>
            <a 
              href={COMPANY_INFO.social.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] hover:brightness-110 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-white" />
            </a>
            <a 
              href={COMPANY_INFO.social.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="w-6 h-6 rounded-full bg-[#0A66C2] hover:brightness-110 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Balanced Padding & Crisp Responsive Logo */}
      <nav className={`bg-white transition-all duration-300 border-b border-slate-100 ${
        isScrolled ? 'py-1 sm:py-1.5 shadow-md' : 'py-1.5 sm:py-2'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official High-Resolution Transparent Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group focus:outline-none py-0">
            <img 
              src="/assets/logo-light.png" 
              alt="BlueMoon Software Solutions" 
              className="h-12 sm:h-14 md:h-16 max-w-[220px] sm:max-w-[280px] md:max-w-[340px] w-auto object-contain transition-transform group-hover:scale-102 filter drop-shadow-sm"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="hidden items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-md">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-blue-600 leading-none tracking-tight">Blue<span className="text-purple-600">Moon</span></span>
                <span className="text-[9px] font-bold text-slate-700 tracking-wider">SOFTWARE SOLUTIONS</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                isActive('/') && location.pathname === '/'
                  ? 'bg-[#0866F5] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#0866F5] hover:bg-blue-50/60'
              }`}
            >
              Home
            </Link>

            {/* About Us is Single Menu Link (Dropdown removed as requested) */}
            <Link
              to="/about"
              className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                isActive('/about')
                  ? 'bg-[#0866F5] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#0866F5] hover:bg-blue-50/60'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  isActive('/services')
                    ? 'text-[#0866F5] bg-blue-50/80'
                    : 'text-slate-700 hover:text-[#0866F5] hover:bg-blue-50/60'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">Comprehensive Services</h4>
                      <p className="text-xs text-slate-500">5+ expert services to build and scale your business</p>
                    </div>
                    <Link 
                      to="/services" 
                      className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <span>View All Services</span>
                      <span>→</span>
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services/${srv.slug}`}
                        className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-blue-50/70 transition-all group"
                      >
                        <div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-all">
                          {serviceIconMap[srv.slug] || <Monitor className="w-4 h-4 text-blue-500" />}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                            {srv.title}
                          </span>
                          <span className="text-[11px] text-slate-500 line-clamp-1">
                            {srv.shortDesc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                isActive('/portfolio')
                  ? 'text-[#0866F5] bg-blue-50/80'
                  : 'text-slate-700 hover:text-[#0866F5] hover:bg-blue-50/60'
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/testimonials"
              className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                isActive('/testimonials')
                  ? 'text-[#0866F5] bg-blue-50/80'
                  : 'text-slate-700 hover:text-[#0866F5] hover:bg-blue-50/60'
              }`}
            >
              Testimonials
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                isActive('/contact')
                  ? 'text-[#0866F5] bg-blue-50/80'
                  : 'text-slate-700 hover:text-[#0866F5] hover:bg-blue-50/60'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Right Action: Get a Quote Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0866F5] via-[#4F46E5] to-[#7936F2] text-white text-sm font-bold shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-4 duration-200">
            {/* Mobile Drawer Brand Logo */}
            <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src="/assets/logo-light.png" 
                  alt="BlueMoon Software Solutions" 
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </Link>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase">
                Menu
              </span>
            </div>

            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className={`px-4 py-2.5 rounded-xl text-base font-semibold ${
                  isActive('/') && location.pathname === '/'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-800 hover:bg-blue-50'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-4 py-2.5 rounded-xl text-base font-semibold ${
                  isActive('/about') ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-blue-50'
                }`}
              >
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-blue-50"
                >
                  <span>Services (5+)</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 pr-1 py-2 space-y-1 bg-slate-50/70 rounded-xl mt-1">
                    <Link
                      to="/services"
                      className="block px-3 py-2 text-sm font-bold text-blue-600 hover:underline"
                    >
                      All Services Overview →
                    </Link>
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services/${srv.slug}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-white"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        <span className="truncate">{srv.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/portfolio"
                className={`px-4 py-2.5 rounded-xl text-base font-semibold ${
                  isActive('/portfolio') ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-blue-50'
                }`}
              >
                Portfolio
              </Link>

              <Link
                to="/testimonials"
                className={`px-4 py-2.5 rounded-xl text-base font-semibold ${
                  isActive('/testimonials') ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-blue-50'
                }`}
              >
                Testimonials
              </Link>

              <Link
                to="/contact"
                className={`px-4 py-2.5 rounded-xl text-base font-semibold ${
                  isActive('/contact') ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-blue-50'
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full py-3 px-4 rounded-xl bg-blue-50 text-blue-600 font-bold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0866F5] to-[#7936F2] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
