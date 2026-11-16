import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Sparkles, Globe, CheckCircle2, X, Shield, Clock, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { PortfolioProject } from '../types';

interface PortfolioPageProps {
  onOpenQuote: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = [
    'All',
    'Enterprise IT & Software',
    'Local Service & Booking',
    'Corporate & FinTech',
    'Cloud & Infrastructure',
    'Global Business & Trading'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === selectedCategory);

  return (
    <main className="font-sans relative z-10">
      {/* Hero */}
      <section className="py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Client Success</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Our Live Featured{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Client Websites & Portals
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed font-normal">
            Explore our production-deployed live client platforms. Click on any project to visit the live URL and explore its architecture, design system, and technical delivery.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0866F5] text-white shadow-md'
                    : 'bg-white/90 backdrop-blur-md text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Project Image Banner */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <a
                    href={project.liveUrl || project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                  </a>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-black text-blue-600 shadow-sm">
                    {project.category}
                  </div>

                  {/* Live Status Indicator */}
                  <div className="absolute top-3 right-3 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Portal</span>
                  </div>

                  {/* Clean Domain Pill */}
                  <div className="absolute bottom-3 left-3 bg-black/75 border border-white/10 text-white backdrop-blur-md px-3 py-1 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    <span>{(project.liveUrl || '').replace('https://', '').replace('/', '')}</span>
                  </div>

                  {project.stats && (
                    <div className="absolute bottom-3 right-3 bg-blue-600/90 text-white backdrop-blur-md px-3 py-1 rounded-xl text-[11px] font-bold shadow-sm">
                      {project.stats}
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] text-blue-600 font-extrabold uppercase tracking-wider mb-1">
                      {project.client}
                    </div>
                    
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      <a
                        href={project.liveUrl || project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1.5"
                      >
                        <span>{project.title}</span>
                      </a>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/80 text-[11px] font-semibold text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="grid grid-cols-2 gap-2.5 pt-1 border-t border-slate-100">
                      {/* Visit Live Website */}
                      <a
                        href={project.liveUrl || project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#0866F5] to-[#7936F2] hover:brightness-105 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      {/* View Project Details Modal */}
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-extrabold text-xs border border-slate-200 transition-all flex items-center justify-center gap-1"
                      >
                        <span>Project Details</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom callout */}
          <div className="mt-16 text-center bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-blue-200/80 max-w-3xl mx-auto shadow-xl">
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              Ready to Launch a Similar High-Impact Website?
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
              Connect with our senior technical consultants to build a high-performance web platform, dynamic portal, or targeted marketing campaign for your business.
            </p>
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0866F5] via-[#4F46E5] to-[#7936F2] text-white font-extrabold text-sm shadow-lg hover:shadow-glow-blue transition-all inline-flex items-center gap-2 group"
            >
              <span>Get Free Consultation & Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-100 relative my-auto flex flex-col max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header with Category & Prominent Cancel Button */}
            <div className="flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-20">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#0866F5] text-xs font-extrabold uppercase tracking-wider">
                {activeModalProject.category}
              </div>

              {/* Prominent Cancel Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 transition-all font-bold text-xs shadow-sm hover:scale-105"
                aria-label="Close Modal"
              >
                <span>Cancel</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Body with balanced padding */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Title & Metadata */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {activeModalProject.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-slate-500 mt-2 font-medium">
                  <span>Client: <strong>{activeModalProject.client}</strong></span>
                  <span>•</span>
                  <span>Timeline: <strong>{activeModalProject.duration}</strong></span>
                </div>
              </div>

              {/* Image Preview with direct link */}
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-200 shadow-md">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 text-white backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>{activeModalProject.liveUrl}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project Overview</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Highlights */}
              {activeModalProject.highlights && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProject.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features list */}
              {activeModalProject.features && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Features Built</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProject.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-blue-50/60 text-xs font-semibold text-blue-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags / Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technologies & Integrations</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tags.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Actions with Close Button */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors"
              >
                Close
              </button>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0866F5] hover:bg-blue-600 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>Open Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onOpenQuote();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </main>
  );
};
