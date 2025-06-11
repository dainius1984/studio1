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
      title: "Strefa Wellness",
      description: "Nowoczesne podejście do ćwiczeń, dzięki któremu dostrzeżesz efekty szybciej niż podczas tradycyjnych treningów.",
      icon: <CubeIcon style={iconStyle} />,
      features: ["Masaże relaksacyjne", "Sauna", "Jaccuzi", "Zabiegi odprężające"],
      video: process.env.PUBLIC_URL + "/video/1.mp4",
      category: "wellness"
    },
    {
      title: "Strefa Fitness",
      description: "Nowoczesne podejście do ćwiczeń, dzięki któremu dostrzeżesz efekty szybciej niż podczas tradycyjnych treningów.",
      icon: <BoltIcon style={iconStyle} />,
      features: ["Treningi personalne", "Zajęcia grupowe", "Sprzęt najnowszej generacji", "Konsultacje z trenerem"],
      video: process.env.PUBLIC_URL + "/video/2.mp4",
      category: "fitness"
    },
    {
      title: "Kosmetologia Estetyczna",
      description: "Nowoczesne podejście do ćwiczeń, dzięki któremu dostrzeżesz efekty szybciej niż podczas tradycyjnych treningów.",
      icon: <SparklesIcon style={iconStyle} />,
      features: ["Zabiegi na twarz", "Zabiegi na ciało", "Depilacja laserowa", "Zabiegi anti-aging"],
      video: process.env.PUBLIC_URL + "/video/3.mp4",
      category: "kosmetologia"
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 