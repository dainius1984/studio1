import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getTestimonialIndex = (offset) => {
    return (currentTestimonial + offset + testimonials.length) % testimonials.length;
  };

  const renderTestimonialCard = (index, isActive, isVisible) => {
    const testimonial = testimonials[index];
    return (
      <div
        key={index}
        className={`flex-shrink-0 transition-all duration-500 ease-in-out ${
          isActive 
            ? 'w-full md:w-[45%] scale-100 opacity-100 z-10' 
            : isVisible
            ? 'w-[30%] md:w-[25%] scale-85 md:scale-90 opacity-60 md:opacity-70 z-0'
            : 'w-0 scale-0 opacity-0 hidden'
        }`}
      >
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl md:rounded-3xl p-3 md:p-4 lg:p-6 shadow-lg flex flex-col items-center h-full overflow-hidden">
          {!isActive && (
            <img 
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full border-2 border-orange-200 object-cover mb-2 shadow-md w-10 h-10 md:w-12 md:h-12"
            />
          )}
          {isActive && (
            <img 
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full border-3 border-orange-200 object-cover mb-3 shadow-md w-16 h-16 md:w-20 md:h-20"
            />
          )}
          <div className="flex justify-center mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className={`fill-current text-yellow-400 ${
                isActive ? 'w-5 h-5 md:w-6 md:h-6' : 'w-3 h-3 md:w-4 md:h-4'
              }`} />
            ))}
          </div>
          <blockquote className={`font-medium leading-relaxed text-gray-700 text-center ${
            isActive 
              ? 'text-sm md:text-base lg:text-lg mb-3' 
              : 'text-xs md:text-sm mb-2 line-clamp-3'
          }`}>
            "{testimonial.text}"
          </blockquote>
          <cite className={`font-semibold text-orange-600 ${
            isActive ? 'text-xs md:text-sm' : 'text-xs'
          }`}>
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
          {/* Previous button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:left-4 z-20 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-orange-200"
            aria-label="Poprzednia opinia"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
          </button>

          {/* Carousel container */}
          <div className="flex items-center justify-center gap-2 md:gap-4 w-full overflow-hidden px-10 md:px-16">
            {renderTestimonialCard(getTestimonialIndex(-1), false, true)}
            {renderTestimonialCard(currentTestimonial, true, true)}
            {renderTestimonialCard(getTestimonialIndex(1), false, true)}
          </div>

          {/* Next button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:right-4 z-20 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-orange-200"
            aria-label="Następna opinia"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 