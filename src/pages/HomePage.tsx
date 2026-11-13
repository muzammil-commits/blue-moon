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
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* 1. Hero Section with Background image & Free Consultation button */}
      <Hero 
        onOpenConsultation={onOpenQuote}
        onExploreServices={scrollToServices}
      />

      {/* 2. Top Stats Bar with Animated Count-Up Numbers */}
      <StatsBar />

      {/* 3. Services Grid (All 12 Services with Hover Effects & Direct Links) */}
      <ServicesGrid />

      {/* 4. About Us Section with Office Image & Values */}
      <AboutSection />

      {/* 5. Mid Stats Ribbon with Count-Up Numbers */}
      <MidStatsBanner onGetStarted={onOpenQuote} />

      {/* 6. Testimonials Slider */}
      <TestimonialsSlider />

      {/* 7. Ready To Grow CTA Banner */}
      <CtaBanner />
    </main>
  );
};
