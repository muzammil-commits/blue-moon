import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ArrowRight } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#0866F5] via-[#102B8C] to-[#4F46E5] text-white relative overflow-hidden py-10 px-4 sm:px-8 shadow-xl">
      {/* Background skyline silhouette effect */}
      <div 
        className="absolute inset-y-0 right-0 w-1/3 opacity-15 pointer-events-none bg-repeat-x bg-contain bg-bottom"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 300' fill='%23ffffff'%3E%3Cpath d='M0,300 L0,220 L30,220 L30,200 L45,200 L45,220 L70,220 L70,180 L90,180 L90,220 L120,220 L120,150 L140,150 L140,130 L160,130 L160,220 L190,220 L190,190 L210,190 L210,220 L240,220 L240,100 L270,100 L270,80 L290,80 L290,220 L320,220 L320,170 L340,170 L340,220 L380,220 L380,120 L400,120 L400,220 L440,220 L440,160 L470,160 L470,220 L510,220 L510,90 L530,90 L530,70 L550,70 L550,220 L590,220 L590,140 L620,140 L620,220 L660,220 L660,110 L680,110 L680,220 L720,220 L720,190 L750,190 L750,220 L800,220 L800,130 L830,130 L830,220 L870,220 L870,170 L900,170 L900,220 L950,220 L950,150 L980,150 L980,220 L1000,220 L1000,300 Z'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/20">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Ready to Grow Your Business?
            </h3>
            <p className="text-sm text-blue-100 font-medium">
              Get in touch with us for expert digital solutions and grow your business.
            </p>
          </div>
        </div>

        {/* Right Button */}
        <div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#102B8C] font-extrabold text-sm shadow-lg hover:bg-blue-50 hover:shadow-xl active:scale-95 transition-all group"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
