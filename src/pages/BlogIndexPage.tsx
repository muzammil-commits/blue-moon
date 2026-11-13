import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { BLOGS_DATA } from '../data/blogs';

export const BlogIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Website Design', 'Local SEO', 'AI Advertising', 'Web Development', 'Mobile Apps', 'PPC & Ads'];

  const filteredBlogs = selectedCategory === 'All'
    ? BLOGS_DATA
    : BLOGS_DATA.filter((b) => b.category === selectedCategory);

  return (
    <main className="font-sans relative z-10">
      {/* Hero */}
      <section className="py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-[#0866F5] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Insights & Industry Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            The BlueMoon{' '}
            <span className="bg-gradient-to-r from-[#0866F5] via-[#4A5CE8] to-[#7936F2] bg-clip-text text-transparent">
              Knowledge Hub
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Authoritative guides, architectural insights, and strategic marketing updates from senior engineers and digital marketing directors.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
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

      {/* Blogs Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image */}
                <Link to={`/blog/${blog.slug}`} className="relative aspect-video overflow-hidden block bg-slate-100">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold text-blue-600 shadow-sm flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    <span>{blog.category}</span>
                  </div>
                </Link>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        <span>{blog.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        <span>{blog.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                      <Link to={`/blog/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-bold">
                      {blog.author}
                    </span>

                    <Link
                      to={`/blog/${blog.slug}`}
                      className="text-xs font-black text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};
