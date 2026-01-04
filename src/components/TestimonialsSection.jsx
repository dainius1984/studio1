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

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-gray-800">
          Co mówią nasze klientki?
        </h2>
        <div className="relative flex justify-center items-center min-h-[280px] md:min-h-[320px]">
          <div className="transition-all duration-500 ease-in-out bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg w-full max-w-xl mx-auto flex flex-col items-center">
            <img 
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-3 border-orange-200 object-cover mb-4 shadow-md"
              onLoad={() => console.log('Loaded:', testimonials[currentTestimonial].image)}
            />
            <div className="flex justify-center mb-3">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-base md:text-lg font-medium mb-4 leading-relaxed text-gray-700">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <cite className="text-sm md:text-base font-semibold text-orange-600">
              - {testimonials[currentTestimonial].name}
            </cite>
          </div>
          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-orange-500 w-6 md:w-8' : 'bg-orange-300'
                }`}
                aria-label={`Pokaż opinię ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 