import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="py-24 sm:py-32 bg-white text-center font-sans">
      <div className="max-w-md mx-auto px-4">
        <div className="text-8xl font-black bg-gradient-to-r from-[#0866F5] to-[#7936F2] bg-clip-text text-transparent">
          404
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 mt-4">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          The requested page could not be located or has moved. Explore our services or return home.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-[#0866F5] text-white font-bold text-xs sm:text-sm hover:bg-blue-600 transition-all inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-50 transition-all"
          >
            Browse Services
          </Link>
        </div>
      </div>
    </main>
  );
};
