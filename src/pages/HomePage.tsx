import React from 'react';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { ServicesGrid } from '../components/ServicesGrid';
import { AboutSection } from '../components/AboutSection';
import { MidStatsBanner } from '../components/MidStatsBanner';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import { CtaBanner } from '../components/CtaBanner';

interface HomePageProps {
  onOpenQuote: () => void;
  onWatchIntro: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote, onWatchIntro }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* 1. Hero Section */}
      <Hero 
        onWatchIntro={onWatchIntro}
        onExploreServices={scrollToServices}
      />

      {/* 2. Top Stats Bar */}
      <StatsBar />

      {/* 3. Services Grid (All 12 Services) */}
      <ServicesGrid />

      {/* 4. About Us Section */}
      <AboutSection />

      {/* 5. Mid Stats Ribbon */}
      <MidStatsBanner onGetStarted={onOpenQuote} />

      {/* 6. Testimonials Slider */}
      <TestimonialsSlider />

      {/* 7. Ready To Grow CTA Banner */}
      <CtaBanner />
    </main>
  );
};
