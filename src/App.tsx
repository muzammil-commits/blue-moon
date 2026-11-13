import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuoteModal } from './components/QuoteModal';
import { VideoModal } from './components/VideoModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage, TermsPage } from './pages/LegalPages';
import { SitemapPage } from './pages/SitemapPage';

export const App: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F5F8FF] text-slate-800">
        {/* Navigation Bar */}
        <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Main Content View */}
        <div className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenQuote={() => setIsQuoteOpen(true)} 
                  onWatchIntro={() => setIsVideoOpen(true)} 
                />
              } 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenQuote={() => setIsQuoteOpen(true)} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesIndexPage onOpenQuote={() => setIsQuoteOpen(true)} />} 
            />
            <Route 
              path="/services/:slug" 
              element={<ServiceDetailPage onOpenQuote={() => setIsQuoteOpen(true)} />} 
            />
            <Route 
              path="/portfolio" 
              element={<PortfolioPage onOpenQuote={() => setIsQuoteOpen(true)} />} 
            />
            <Route 
              path="/testimonials" 
              element={<TestimonialsPage onOpenQuote={() => setIsQuoteOpen(true)} />} 
            />
            <Route 
              path="/blog" 
              element={<BlogIndexPage />} 
            />
            <Route 
              path="/blog/:slug" 
              element={<BlogPostPage onOpenQuote={() => setIsQuoteOpen(true)} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="/privacy-policy" 
              element={<PrivacyPolicyPage />} 
            />
            <Route 
              path="/terms" 
              element={<TermsPage />} 
            />
            <Route 
              path="/sitemap" 
              element={<SitemapPage />} 
            />
            <Route 
              path="*" 
              element={<NotFoundPage />} 
            />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />

        {/* Interactive Modals */}
        <QuoteModal 
          isOpen={isQuoteOpen} 
          onClose={() => setIsQuoteOpen(false)} 
        />
        <VideoModal 
          isOpen={isVideoOpen} 
          onClose={() => setIsVideoOpen(false)} 
        />
      </div>
    </Router>
  );
};

export default App;
