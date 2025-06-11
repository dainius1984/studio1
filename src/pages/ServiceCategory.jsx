import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { fitnessDevices } from '../data/fitnessDevices';
import { wellnessDevices } from '../data/wellnessDevices';
import { kosmetologiaDevices } from '../data/kosmetologiaDevices';

const categories = {
  wellness: {
    title: 'Strefa Wellness',
    description: 'Nowoczesne podejście do ćwiczeń, dzięki któremu dostrzeżesz efekty szybciej niż podczas tradycyjnych treningów.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    services: [
      'Masaże relaksacyjne',
      'Sauna',
      'Jaccuzi',
      'Zabiegi odprężające'
    ]
  },
  fitness: {
    title: 'Strefa Fitness',
    description: 'Nowoczesne podejście do ćwiczeń, dzięki któremu dostrzeżesz efekty szybciej niż podczas tradycyjnych treningów.',
    image: '',
    services: []
  },
  kosmetologia: {
    title: 'Kosmetologia Estetyczna',
    description: 'Nowoczesne podejście do ćwiczeń, dzięki któremu dostrzeżesz efekty szybciej niż podczas tradycyjnych treningów.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    services: [
      'Zabiegi na twarz',
      'Zabiegi na ciało',
      'Depilacja laserowa',
      'Zabiegi anti-aging'
    ]
  }
};

const ServiceCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!categories[category]) {
      navigate('/uslugi');
    }
  }, [category, navigate]);

  useEffect(() => {
    if (location.state && location.state.scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.state]);

  if (!categories[category]) {
    return null;
  }

  const currentCategory = categories[category];
  const categoryKeys = Object.keys(categories);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {categoryKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => navigate(`/uslugi/${key}`)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 shadow-sm text-base
                    ${key === category
                      ? 'bg-orange-500 text-white shadow-lg scale-105 border border-orange-600'
                      : 'bg-white text-gray-800 hover:bg-orange-100 border border-orange-100'}
                  `}
                  tabIndex={0}
                  aria-current={key === category ? 'page' : undefined}
                >
                  {categories[key].title}
                </button>
              ))}
            </div>

            {/* Category Content */}
            {category === 'fitness' ? (
              <div className="space-y-10">
                {fitnessDevices.map((device, idx) => (
                  <motion.div
                    key={device.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center md:items-stretch"
                  >
                    <div className="md:w-1/3 w-full h-64 md:h-auto flex items-center justify-center bg-orange-50">
                      <img
                        src={device.image}
                        alt={device.title}
                        className="object-contain max-h-56 w-auto mx-auto"
                      />
                    </div>
                    <div className="md:w-2/3 w-full p-8 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{device.title}</h2>
                      <p className="text-gray-600 mb-4 text-base md:text-lg">{device.description}</p>
                      <ul className="list-disc pl-5 space-y-1 text-orange-600 text-base">
                        {device.features.map((feature, i) => (
                          <li key={i} className="text-gray-700">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : category === 'wellness' ? (
              <div className="space-y-10">
                {wellnessDevices.map((device, idx) => (
                  <motion.div
                    key={device.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center md:items-stretch"
                  >
                    <div className="md:w-1/3 w-full h-64 md:h-auto flex items-center justify-center bg-orange-50">
                      <img
                        src={device.image}
                        alt={device.title}
                        className="object-contain max-h-56 w-auto mx-auto"
                      />
                    </div>
                    <div className="md:w-2/3 w-full p-8 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{device.title}</h2>
                      <p className="text-gray-600 mb-4 text-base md:text-lg">{device.description}</p>
                      <ul className="list-disc pl-5 space-y-1 text-orange-600 text-base">
                        {device.features.map((feature, i) => (
                          <li key={i} className="text-gray-700">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : category === 'kosmetologia' ? (
              <div className="space-y-10">
                {kosmetologiaDevices.map((device, idx) => (
                  <motion.div
                    key={device.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center md:items-stretch"
                  >
                    <div className="md:w-1/3 w-full h-64 md:h-auto flex items-center justify-center bg-orange-50">
                      <img
                        src={device.image}
                        alt={device.title}
                        className="object-contain max-h-56 w-auto mx-auto"
                      />
                    </div>
                    <div className="md:w-2/3 w-full p-8 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{device.title}</h2>
                      <p className="text-gray-600 mb-4 text-base md:text-lg">{device.description}</p>
                      <ul className="list-disc pl-5 space-y-1 text-orange-600 text-base">
                        {device.features.map((feature, i) => (
                          <li key={i} className="text-gray-700">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={currentCategory.image}
                      alt={currentCategory.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      {currentCategory.title}
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg">
                      {currentCategory.description}
                    </p>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Oferowane usługi:
                      </h3>
                      <ul className="space-y-3">
                        {currentCategory.services.map((service, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceCategory; 