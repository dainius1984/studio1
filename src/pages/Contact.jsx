import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactInfoCard from '../components/ContactInfoCard';
import ContactModal from '../components/ContactModal';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Skontaktuj się z <span className="text-orange-500">nami</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Jesteśmy tutaj, aby pomóc Ci osiągnąć Twoje cele fitness. Skontaktuj się z nami, aby umówić się na bezpłatną konsultację.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ContactInfoCard 
                      icon={Phone}
                      title="Zadzwoń"
                      description="503 537 701"
                    />
                    <ContactInfoCard 
                      icon={Mail}
                      title="Napisz"
                      description="studiofigurawroclaw@gmail.com"
                    />
                    <ContactInfoCard 
                      icon={MapPin}
                      title="Odwiedź"
                      description={
                        <div>
                          Brodzka 193<br />54-067 Wrocław
                        </div>
                      }
                    />
                    <ContactInfoCard 
                      icon={Clock}
                      title="Godziny otwarcia"
                      description={
                        <div className="text-sm">
                          <div className="flex justify-between">
                            <span>Pon-Pt:</span>
                            <span>8:30 - 20:30</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sob:</span>
                            <span>9:00 - 13:00</span>
                          </div>
                        </div>
                      }
                    />
                  </div>
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-base font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    Umów bezpłatną konsultację
                  </button>
                </div>
              </div>

              {/* Google Map */}
              <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.1744853!2d16.9034354!3d51.1744853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f95002d4f2525%3A0xc9802cafe972f8f5!2sStudio%20Figura%20Wroc%C5%82aw%20Stab%C5%82owice!5e0!3m2!1spl!2spl!4v1709912345678!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Figura Wrocław Stabłowice"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Contact;