import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface PortfolioPageProps {
  onOpenQuote: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Website Design', 'Web Development', 'Mobile App', 'SEO & Marketing', 'Graphic Design'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === selectedCategory);

  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EEF4FF] via-[#F5F8FF] to-white py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            Showcase of Excellence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Our Featured{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Projects & Portfolios
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Explore a curated selection of corporate websites, dynamic applications, and high-impact digital campaigns built by BlueMoon Software Solutions.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0866F5] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#F8FAFF] rounded-3xl overflow-hidden border border-[#E2E8F8] shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-blue-600 shadow-sm">
                    {project.category}
                  </div>
                  {project.stats && (
                    <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold">
                      {project.stats}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs text-slate-400 font-semibold mb-1">
                      {project.client}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={onOpenQuote}
                      className="w-full py-2.5 rounded-xl bg-white border border-blue-200 text-blue-600 font-bold text-xs hover:bg-[#0866F5] hover:text-white transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Inquire About Similar Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom callout */}
          <div className="mt-16 text-center bg-blue-50/60 rounded-3xl p-8 border border-blue-100 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Have a Project in Mind?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-4">
              We engineer tailor-made software, responsive websites, and digital marketing systems tailored to your specific industry goals.
            </p>
            <button
              onClick={onOpenQuote}
              className="px-7 py-3 rounded-full bg-[#0866F5] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-blue-600 transition-all inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
    </main>
  );
};

