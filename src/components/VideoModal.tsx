import React from 'react';
import { X, Play, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#090D24] text-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-blue-900/40 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close Video"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            Company Presentation
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Welcome to {COMPANY_INFO.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            {COMPANY_INFO.tagline}
          </p>
        </div>

        {/* Video Player Display Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center group">
          <img
            src="/assets/hero-desktop.png"
            alt="BlueMoon Video Preview"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Interactive Play Button */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0866F5] to-[#7936F2] text-white flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-blue-200">
              Interactive Corporate Overview
            </span>
          </div>
        </div>

        {/* Highlights below video */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 mt-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span>5+ Years Innovation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
            <span>100+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
            <span>Global Client Footprint</span>
          </div>
        </div>

      </div>
    </div>
  );
};

