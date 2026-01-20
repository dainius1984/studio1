import React, { useState } from 'react';
import ContactModal from './ContactModal';

const CTASection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Gotowa na <span className="text-orange-500">zmianę?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Umów się na konsultację i rozpocznij swoją transformację już dziś!
          </p>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 md:p-12">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Umów konsultację
            </button>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default CTASection; 