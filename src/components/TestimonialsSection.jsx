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
            ? 'w-[25%] md:w-[20%] scale-75 md:scale-80 opacity-40 md:opacity-50 z-0'
            : 'w-0 scale-0 opacity-0 hidden'
        }`}
      >
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg flex flex-col items-center h-full">
          <img 
            src={testimonial.image}
            alt={testimonial.name}
            className={`rounded-full border-3 border-orange-200 object-cover mb-3 shadow-md ${
              isActive ? 'w-16 h-16 md:w-20 md:h-20' : 'w-12 h-12 md:w-14 md:h-14'
            }`}
          />
          <div className="flex justify-center mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className={`fill-current text-yellow-400 ${
                isActive ? 'w-5 h-5 md:w-6 md:h-6' : 'w-3 h-3 md:w-4 md:h-4'
              }`} />
            ))}
          </div>
          {isActive && (
            <>
              <blockquote className="text-sm md:text-base lg:text-lg font-medium mb-3 leading-relaxed text-gray-700 text-center">
                "{testimonial.text}"
              </blockquote>
              <cite className="text-xs md:text-sm font-semibold text-orange-600">
                - {testimonial.name}
              </cite>
            </>
          )}
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

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 md:mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`rounded-full transition-all ${
                index === currentTestimonial 
                  ? 'bg-orange-500 w-6 md:w-8 h-2 md:h-2.5' 
                  : 'bg-orange-300 w-2 h-2 md:w-2.5 md:h-2.5'
              }`}
              aria-label={`Pokaż opinię ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 