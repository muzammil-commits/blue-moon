import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, Share2, ArrowRight } from 'lucide-react';
import { BLOGS_DATA } from '../data/blogs';
import { COMPANY_INFO } from '../data/company';

interface BlogPostPageProps {
  onOpenQuote: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenQuote }) => {
  const { slug } = useParams<{ slug: string }>();

  const blog = BLOGS_DATA.find((b) => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const relatedArticles = BLOGS_DATA.filter((b) => b.slug !== slug).slice(0, 2);

  return (
    <main className="font-sans relative z-10">
      <article className="py-12 sm:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
            {/* Back button */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>

            {/* Meta header */}
            <div className="space-y-4 mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#0866F5] text-xs font-bold uppercase tracking-wider">
                {blog.category}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-100 pb-6">
                <span>Author: <strong>{blog.author}</strong></span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{blog.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{blog.readTime}</span>
                </span>
              </div>
            </div>

            {/* Cover Image */}
            <div className="rounded-3xl overflow-hidden mb-10 shadow-xl border border-slate-100">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-80 sm:h-[450px] object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
              {blog.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Demo Content Disclaimer Notice */}
            <div className="mt-12 p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs text-blue-700 leading-relaxed">
              <strong>Note:</strong> This article is demo content provided as a functional placeholder for the BlueMoon Software Solutions blog system until final production copy is supplied.
            </div>

            {/* Share & Consultation CTA */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#0866F5] to-[#7936F2] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold mb-1">Need help implementing this in your business?</h3>
                <p className="text-xs sm:text-sm text-blue-100">Get in touch with {COMPANY_INFO.name} experts today.</p>
              </div>
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-full bg-white text-[#102B8C] font-extrabold text-xs sm:text-sm hover:bg-blue-50 transition-all shadow-md"
              >
                Get Free Consultation
              </button>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/blog/${rel.slug}`}
                    className="p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-blue-300 shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-blue-600 uppercase">{rel.category}</span>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 mt-1 mb-2 leading-snug">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">{rel.excerpt}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-blue-600 flex items-center justify-between">
                      <span>Read More</span>
                      <span>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </article>
    </main>
  );
};

