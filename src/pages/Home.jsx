import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StickySidebar from '../components/StickySidebar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-inter pt-20">
      <Navigation />
      <StickySidebar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm">
          <HeroSection />
          <ServicesSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <CTASection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home; 