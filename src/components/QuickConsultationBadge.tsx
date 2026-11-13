import React, { useState, useEffect } from 'react';
import { Sparkles, X, ArrowRight, MessageSquareQuote } from 'lucide-react';

interface QuickConsultationBadgeProps {
  onOpenQuote: () => void;
}

export const QuickConsultationBadge: React.FC<QuickConsultationBadgeProps> = ({ onOpenQuote }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after 3 seconds of browsing
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-in slide-in-from-bottom-6 fade-in duration-500 max-w-xs sm:max-w-sm">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-blue-200/80 shadow-blue-500/10 flex items-start gap-3 relative group">
        
        {/* Close Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center shadow-sm transition-colors"
          aria-label="Dismiss message"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0866F5] to-[#7936F2] text-white flex items-center justify-center flex-shrink-0 shadow-md">
          <MessageSquareQuote className="w-5 h-5" />
        </div>

        {/* Content */}
        <div className="space-y-1 pr-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wide">
              Online Consultation
            </span>
          </div>
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
            Need a custom quote or strategy?
          </h4>
          <p className="text-[11px] text-slate-500 leading-normal">
            Get a tailored blueprint & quotation within 2 hours.
          </p>

          <button
            onClick={onOpenQuote}
            className="mt-2 text-xs font-bold text-[#0866F5] hover:text-[#7936F2] flex items-center gap-1 transition-colors"
          >
            <span>Claim Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </div>
  );
};

