import React from 'react';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { ServicesGrid } from '../components/ServicesGrid';
import { ProcessSection } from '../components/ProcessSection';
import { AboutSection } from '../components/AboutSection';
import { MidStatsBanner } from '../components/MidStatsBanner';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import { HomeFaqSection } from '../components/HomeFaqSection';
import { CtaBanner } from '../components/CtaBanner';

interface HomePageProps {
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative">
      {/* 1. Hero Section with Background image & Consultation button */}
      <Hero 
        onOpenConsultation={onOpenQuote}
        onExploreServices={scrollToServices}
      />

      {/* 2. Top Stats Bar with Animated Count-Up Numbers */}
      <StatsBar />

      {/* 3. Services Grid (All 12 Services with Exact Thumbnail Visuals) */}
      <ServicesGrid />

      {/* 4. Strategic 4-Step Process & Methodology Fold */}
      <ProcessSection onOpenQuote={onOpenQuote} />

      {/* 5. About Us Section with Office Image & Guiding Values */}
      <AboutSection />

      {/* 6. Mid Stats Ribbon with Count-Up Numbers */}
      <MidStatsBanner onGetStarted={onOpenQuote} />

      {/* 7. Client Testimonials Carousel */}
      <TestimonialsSlider />

      {/* 8. Frequently Asked Questions Fold */}
      <HomeFaqSection onOpenQuote={onOpenQuote} />

      {/* 9. Ready To Grow Skyline CTA Banner */}
      <CtaBanner />
    </main>
  );
};
