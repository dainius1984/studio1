import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    services: [
      'Treningi personalne',
      'Zajęcia grupowe',
      'Sprzęt najnowszej generacji',
      'Konsultacje z trenerem'
    ]
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
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Navigation */}
            <div className="flex justify-center mb-12 space-x-4">
              {categoryKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => navigate(`/uslugi/${key}`)}
                  className={`px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
                    key === category
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-orange-100'
                  }`}
                >
                  {categories[key].title}
                </button>
              ))}
            </div>

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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceCategory; 