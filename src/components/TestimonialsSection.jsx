import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Anna K.",
      rating: 5,
      text: "Po kilku zabiegach widzę realną poprawę sylwetki. Atmosfera w Studio Figura Wrocław Stabłowice jest bardzo przyjazna, a personel naprawdę się stara.",
      image: process.env.PUBLIC_URL + "/img/1.jpg"
    },
    {
      name: "Magdalena W.",
      rating: 5,
      text: "Nie spodziewałam się takich efektów! Zabiegi są komfortowe, a każda wizyta przebiega w miłej atmosferze.",
      image: process.env.PUBLIC_URL + "/img/2.jpg"
    },
    {
      name: "Karolina M.",
      rating: 5,
      text: "Polecam każdemu, kto chce zadbać o siebie. Indywidualne podejście i profesjonalizm na najwyższym poziomie.",
      image: process.env.PUBLIC_URL + "/img/3.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const getTestimonialIndex = (offset) => {
    return (currentTestimonial + offset + testimonials.length) % testimonials.length;
  };

  const renderTestimonialCard = (index, isActive, isVisible) => {
    const testimonial = testimonials[index];
    return (
      <div
        key={`testimonial-${index}`}
        className={`flex-shrink-0 ${
          isActive 
            ? 'w-full md:w-[45%] flex-1' 
            : isVisible
            ? 'w-[30%] md:w-[25%] flex-shrink'
            : 'w-0 hidden'
        }`}
        style={{
          transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: isActive ? 'scale(1) translateX(0)' : isVisible ? 'scale(0.85) translateX(0)' : 'scale(0) translateX(0)',
          opacity: isActive ? 1 : isVisible ? 0.6 : 0,
          zIndex: isActive ? 10 : 0,
          willChange: 'transform, opacity'
        }}
      >
        <div 
          className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl md:rounded-3xl p-3 md:p-4 lg:p-6 shadow-lg flex flex-col items-center h-full overflow-hidden"
          style={{ transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
        >
          <img 
            src={testimonial.image}
            alt={testimonial.name}
            className="rounded-full border-2 border-orange-200 object-cover shadow-md"
            style={{
              width: isActive ? '5rem' : '2.5rem',
              height: isActive ? '5rem' : '2.5rem',
              borderWidth: isActive ? '3px' : '2px',
              marginBottom: isActive ? '0.75rem' : '0.5rem',
              transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              opacity: isActive ? 1 : 0.8
            }}
          />
          <div className="flex justify-center mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star 
                key={i} 
                className="fill-current text-yellow-400"
                style={{
                  width: isActive ? '1.5rem' : '0.875rem',
                  height: isActive ? '1.5rem' : '0.875rem',
                  transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              />
            ))}
          </div>
          <blockquote 
            className={`font-medium leading-relaxed text-gray-700 text-center ${
              isActive 
                ? 'text-sm md:text-base lg:text-lg mb-3' 
                : 'text-xs md:text-sm mb-2 line-clamp-3'
            }`}
            style={{ 
              transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              opacity: isActive ? 1 : 0.8
            }}
          >
            "{testimonial.text}"
          </blockquote>
          <cite 
            className={`font-semibold text-orange-600 ${
              isActive ? 'text-xs md:text-sm' : 'text-xs'
            }`}
            style={{ 
              transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              opacity: isActive ? 1 : 0.8
            }}
          >
            - {testimonial.name}
          </cite>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-gray-800">
          Co mówią nasze klientki?
        </h2>
        <div className="relative flex items-center justify-center min-h-[280px] md:min-h-[320px]">
          {/* Carousel container */}
          <div className="flex items-center justify-center gap-2 md:gap-4 w-full overflow-hidden px-4 md:px-8">
            {renderTestimonialCard(getTestimonialIndex(-1), false, true)}
            {renderTestimonialCard(currentTestimonial, true, true)}
            {renderTestimonialCard(getTestimonialIndex(1), false, true)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 