import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/services';
import { BLOGS_DATA } from '../data/blogs';

export const SitemapPage: React.FC = () => {
  return (
    <main className="py-16 sm:py-24 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Website Sitemap
        </h1>
        <p className="text-sm text-slate-600">
          Quick directory index of all public routes and service modules on BlueMoon Software Solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 border-b pb-2">Main Navigation</h2>
            <ul className="space-y-2 text-sm text-blue-600 font-medium">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Services Overview</Link></li>
              <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
              <li><Link to="/testimonials" className="hover:underline">Client Testimonials</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog & Insights</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 border-b pb-2">All 12 Service Pages</h2>
            <ul className="space-y-2 text-sm text-blue-600 font-medium">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="hover:underline">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <h2 className="text-lg font-bold text-slate-900 border-b pb-2">Knowledge Base Articles</h2>
          <ul className="space-y-2 text-sm text-blue-600 font-medium">
            {BLOGS_DATA.map((b) => (
              <li key={b.id}>
                <Link to={`/blog/${b.slug}`} className="hover:underline">
                  {b.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};
