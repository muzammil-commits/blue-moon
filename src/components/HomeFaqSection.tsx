import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HomeFaqSectionProps {
  onOpenQuote: () => void;
}

export const HomeFaqSection: React.FC<HomeFaqSectionProps> = ({ onOpenQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Why should I choose BlueMoon Software Solutions for my business?',
      a: 'With 12+ years of hands-on industry experience and 325+ completed projects worldwide, BlueMoon provides complete digital services under one roof: modern website designing, custom software development, SEO, AI ad creation, and Google Ads management.'
    },
    {
      q: 'Do you create mobile-responsive websites that rank on Google?',
      a: 'Yes, 100%! Every website we engineer is built with a mobile-first approach, speed-optimized code (React, Next.js, Vite), and on-page SEO schema to ensure fast load times and top rankings on Google search.'
    },
    {
      q: 'How long does a typical website development project take?',
      a: 'Standard corporate business websites take between 2 to 3 weeks from brief to live launch. Complex custom web applications, e-commerce stores, and mobile apps typically require 4 to 8 weeks depending on custom feature requirements.'
    },
    {
      q: 'Can BlueMoon handle ongoing digital marketing and Google Ads?',
      a: 'Absolutely! We manage full-funnel lead generation campaigns, Meta Ads, Google Ads (Search, Call-Only, Display), and Local Google Business Profile optimization to deliver consistent monthly customer inquiries.'
    },
    {
      q: 'How do we get started with a project quote or consultation?',
      a: `You can click "Get a Quote" or "Book Free Consultation" on any page, or connect with us directly on WhatsApp at ${COMPANY_INFO.phone}. Our technical team responds within 2 hours with a comprehensive roadmap.`
    }
  ];

  return (
    <section className="py-20 sm:py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs font-extrabold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Client Questions Answered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-sm text-slate-600">
            Clear, transparent answers to help you make informed decisions about your digital partner.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Footer */}
        <div className="mt-10 p-6 rounded-3xl bg-blue-50/70 border border-blue-200/60 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-extrabold text-slate-900">Still have questions?</h4>
            <p className="text-xs text-slate-600">Speak directly with our technical director.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="px-5 py-2.5 rounded-full bg-white border border-blue-300 text-blue-600 font-bold text-xs hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-full bg-[#0866F5] text-white font-bold text-xs hover:bg-blue-600 transition-colors"
            >
              Request Callback
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

