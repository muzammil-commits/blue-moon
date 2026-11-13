import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, ChevronDown, Menu, X, ArrowRight,
  Monitor, Code2, Search, Megaphone, Share2, PlaySquare,
  BadgePercent, Palette, Smartphone,
  Server, GraduationCap, Facebook, Linkedin, Youtube
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
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
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
    'google-business-profile-management': <MapPin className="w-4 h-4 text-sky-500" />,
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
      {/* 1. Top Contact Bar */}
      <div className="bg-[#102B8C] text-white text-xs py-2 px-4 sm:px-8 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-2">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-slate-200">
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <div className="w-5 h-5 rounded-full bg-blue-700/60 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Phone className="w-3 h-3 text-blue-200 group-hover:text-white" />
              </div>
              <span className="font-semibold tracking-wide">{COMPANY_INFO.phone}</span>
            </a>

            <span className="hidden sm:inline text-blue-400/40">|</span>

            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <div className="w-5 h-5 rounded-full bg-blue-700/60 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Mail className="w-3 h-3 text-blue-200 group-hover:text-white" />
              </div>
              <span className="truncate max-w-[260px] sm:max-w-none">{COMPANY_INFO.email}</span>
            </a>

            <span className="hidden lg:inline text-blue-400/40">|</span>

            <div className="hidden xl:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
              <span className="truncate max-w-[420px]">{COMPANY_INFO.address.full}</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href={COMPANY_INFO.social.facebook} 
              target="_blank" 
              rel="noreferrer" 
              className="w-6 h-6 rounded-full bg-blue-800/80 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-3 h-3 text-white" />
            </a>
            <a 
              href={COMPANY_INFO.social.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="w-6 h-6 rounded-full bg-blue-800/80 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3 h-3 text-white" />
            </a>
            <a 
              href={COMPANY_INFO.social.youtube} 
              target="_blank" 
              rel="noreferrer" 
              className="w-6 h-6 rounded-full bg-blue-800/80 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-3 h-3 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Enlarged, Clean Transparent Logo */}
      <nav className={`bg-white transition-all duration-300 border-b border-slate-100 ${
        isScrolled ? 'py-2 shadow-md' : 'py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo (Increased size & Zero patchwork background) */}
          <Link to="/" className="flex items-center group focus:outline-none">
            <img 
              src="/assets/logo-light.png" 
              alt="BlueMoon Software Solutions" 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-102 filter drop-shadow-sm"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="hidden items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-blue-600 leading-none tracking-tight">Blue<span className="text-purple-600">Moon</span></span>
                <span className="text-[10px] font-bold text-slate-700 tracking-wider">SOFTWARE SOLUTIONS</span>
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

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  isActive('/about')
                    ? 'text-[#0866F5] bg-blue-50/80'
                    : 'text-slate-700 hover:text-[#0866F5] hover:bg-blue-50/60'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link 
                    to="/about" 
                    className="flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-blue-50/80 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-800">Company Overview</span>
                    <span className="text-xs text-slate-500">12+ years of digital excellence</span>
                  </Link>
                  <Link 
                    to="/about#vision" 
                    className="flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-blue-50/80 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-800">Vision & Mission</span>
                    <span className="text-xs text-slate-500">Our roadmap and corporate purpose</span>
                  </Link>
                  <Link 
                    to="/about#values" 
                    className="flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-blue-50/80 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-800">Core Values</span>
                    <span className="text-xs text-slate-500">Integrity, innovation, and client success</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Services Mega Dropdown */}
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
                <div className="absolute top-full -left-20 w-[680px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Comprehensive Digital Solutions</h4>
                      <p className="text-xs text-slate-500">12+ expert services to build and scale your business</p>
                    </div>
                    <Link 
                      to="/services" 
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services/${srv.slug}`}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100 group-hover:border-blue-200 transition-colors">
                          {serviceIconMap[srv.slug] || <Monitor className="w-4 h-4 text-blue-600" />}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 truncate transition-colors">
                            {srv.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 leading-snug">
                            {srv.shortDesc}
                          </div>
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
              to="/blog"
              className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                isActive('/blog')
                  ? 'text-[#0866F5] bg-blue-50/80'
                  : 'text-slate-700 hover:text-[#0866F5] hover:bg-blue-50/60'
              }`}
            >
              Blog
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
              className="p-2.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-4 duration-200">
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
                  <span>Services (12)</span>
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
                to="/blog"
                className={`px-4 py-2.5 rounded-xl text-base font-semibold ${
                  isActive('/blog') ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-blue-50'
                }`}
              >
                Blog
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

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-center shadow-md active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full py-2.5 rounded-full border border-blue-200 text-blue-600 font-bold text-sm text-center hover:bg-blue-50 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
