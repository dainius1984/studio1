import React from 'react';
import ServiceCard from './ServiceCard';
import { CubeIcon, BoltIcon, SparklesIcon } from '@heroicons/react/24/solid';

const iconStyle = {
  width: 32,
  height: 32,
  color: '#FF6200',
  display: 'block',
  margin: '0 auto',
};

const ServicesSection = () => {
  const services = [
    {
      title: "Strefa Fitness",
      description: "Nowoczesne podejście do ćwiczeń dzięki, któremu dostrzeżesz efekty szybciej niz podczas tradycyjnych treningów:",
      icon: <BoltIcon style={iconStyle} />,
      features: ["Vacu Shaper", "Swan Shaper", "Body Speed", "Roll Shaper"],
      video: process.env.PUBLIC_URL + "/video/2.mp4",
      category: "fitness"
    },
    {
      title: "Strefa Wellness",
      description: "Odkryj harmonię ciała i umysłu w naszej strefie wellness – Twoje miejsce na relaks i regenerację!",
      icon: <CubeIcon style={iconStyle} />,
      features: ["Limfodrenaż", "Elektrostymulacja z IR", "Elektrostymulacja", "Roll Shaper", "Sauna karbonowa"],
      video: process.env.PUBLIC_URL + "/video/1.mp4",
      category: "wellness"
    },
    {
      title: "Strefa Kosmetologii",
      description: "Podkreśl swoje piękno z naszą kosmetologią estetyczną – bo zasługujesz na to, co najlepsze!",
      icon: <SparklesIcon style={iconStyle} />,
      features: [
        "Endomasaż",
        "Fala RF",
        "Hifu 4D",
        "Kriolipoliza",
        "Slim laser 4D",
        "Beauty Hood",
        "Mezoterapia bezigłowa",
        "Oczyszczanie wodorowe",
        "Maska fotonowa",
        "Infuzja tlenowa",
        "Bipolarna fala radiowa",
        "Sonoforeza",
        "Peeling kawitacyjny"
      ],
      video: process.env.PUBLIC_URL + "/video/3.mp4",
      category: "kosmetologia",
      useGrid: true // Flag to use grid layout for features
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nasze <span className="text-orange-500">Usługi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompleksowa oferta zabiegów dla każdego, kto dba o swoje ciało i zdrowie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              video={service.video}
              category={service.category}
              useGrid={service.useGrid}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 