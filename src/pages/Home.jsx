import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StickySidebar from '../components/StickySidebar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import LeadModal from '../components/LeadModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 1 second
    const timer = setTimeout(() => setShowModal(true), 1000);
    return () => clearTimeout(timer);
  }, [setShowModal]);

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
      <LeadModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Home; 