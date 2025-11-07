import React, { useEffect, useState } from 'react';
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
  const formatFeature = (text) => (typeof text === 'string' && text.length > 0)
    ? text.charAt(0).toUpperCase() + text.slice(1)
    : text;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <div className="bg-[#faf8f5] py-12 min-h-screen">
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
              <div className="space-y-8 md:space-y-10">
                {fitnessDevices.map((device, idx) => (
                  <motion.div
                    key={device.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
                    style={{
                      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.08), 0 1px 4px 0 rgba(0,0,0,0.04)',
                    }}
                  >
                    {/* Image Container */}
                    <div className="md:w-1/2 w-full h-64 md:h-auto md:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent pointer-events-none"></div>
                      <img
                        src={device.image}
                        alt={device.title}
                        className="w-full h-full object-cover md:object-cover relative z-10"
                        loading="lazy"
                        style={{
                          objectPosition: 'center',
                        }}
                      />
                    </div>
                    {/* Text Container */}
                    <div className="md:w-1/2 w-full p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                      <h2 
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 md:mb-5 leading-tight"
                        style={{ 
                          fontFamily: 'Raleway, Arial, sans-serif',
                          letterSpacing: '-0.5px',
                        }}
                      >
                        {device.title}
                      </h2>
                      <p 
                        className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg leading-relaxed"
                        style={{ 
                          fontFamily: 'Inter, Arial, sans-serif',
                          lineHeight: '1.7',
                        }}
                      >
                        {device.description}
                      </p>
                      {Array.isArray(device.features) && device.features.length > 0 && (
                        <div className="flex flex-col gap-3 md:gap-3.5">
                          {device.features.map((feature, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 + i * 0.05 }}
                              className="inline-flex items-center px-5 py-3 rounded-full text-sm md:text-base font-semibold bg-gradient-to-r from-[#FF6200] to-[#FF8C00] text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                              style={{
                                fontFamily: 'Inter, Arial, sans-serif',
                                fontWeight: 600,
                                boxShadow: '0 2px 8px 0 rgba(255,98,0,0.3)',
                              }}
                            >
                              {formatFeature(feature)}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : category === 'wellness' ? (
              <div className="space-y-8 md:space-y-10">
                {wellnessDevices.map((device, idx) => (
                  <motion.div
                    key={device.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
                    style={{
                      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.08), 0 1px 4px 0 rgba(0,0,0,0.04)',
                    }}
                  >
                    {/* Image Container */}
                    <div className="md:w-1/2 w-full h-64 md:h-auto md:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent pointer-events-none"></div>
                      <img
                        src={device.image}
                        alt={device.title}
                        className="w-full h-full object-cover md:object-cover relative z-10"
                        loading="lazy"
                        style={{
                          objectPosition: 'center',
                        }}
                      />
                    </div>
                    {/* Text Container */}
                    <div className="md:w-1/2 w-full p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                      <h2 
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 md:mb-5 leading-tight"
                        style={{ 
                          fontFamily: 'Raleway, Arial, sans-serif',
                          letterSpacing: '-0.5px',
                        }}
                      >
                        {device.title}
                      </h2>
                      <p 
                        className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg leading-relaxed"
                        style={{ 
                          fontFamily: 'Inter, Arial, sans-serif',
                          lineHeight: '1.7',
                        }}
                      >
                        {device.description}
                      </p>
                      {Array.isArray(device.features) && device.features.length > 0 && (
                        <div className="flex flex-col gap-3 md:gap-3.5">
                          {device.features.map((feature, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 + i * 0.05 }}
                              className="inline-flex items-center px-5 py-3 rounded-full text-sm md:text-base font-semibold bg-gradient-to-r from-[#FF6200] to-[#FF8C00] text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                              style={{
                                fontFamily: 'Inter, Arial, sans-serif',
                                fontWeight: 600,
                                boxShadow: '0 2px 8px 0 rgba(255,98,0,0.3)',
                              }}
                            >
                              {formatFeature(feature)}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : category === 'kosmetologia' ? (
              <div className="space-y-8 md:space-y-10">
                {kosmetologiaDevices.map((device, idx) => (
                  <motion.div
                    key={device.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
                    style={{
                      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.08), 0 1px 4px 0 rgba(0,0,0,0.04)',
                    }}
                  >
                    {/* Image Container */}
                    <div className="md:w-1/2 w-full h-64 md:h-auto md:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent pointer-events-none"></div>
                      <img
                        src={device.image}
                        alt={device.title}
                        className="w-full h-full object-cover md:object-cover relative z-10"
                        loading="lazy"
                        style={{
                          objectPosition: 'center',
                        }}
                      />
                    </div>
                    <DeviceDetails device={device} idx={idx} />
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

// Local component for cosmetology device details with expand/collapse
const DeviceDetails = ({ device, idx }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="md:w-1/2 w-full p-8 md:p-10 lg:p-12 flex flex-col justify-center">
      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 md:mb-5 leading-tight"
        style={{ 
          fontFamily: 'Raleway, Arial, sans-serif',
          letterSpacing: '-0.5px',
        }}
      >
        {device.title}
      </h2>
      {device.krotkiOpis && (
        <p 
          className="text-gray-700 mb-3 text-base md:text-lg font-medium"
          style={{ 
            fontFamily: 'Inter, Arial, sans-serif',
          }}
        >
          {device.krotkiOpis}
        </p>
      )}
      {(device.dlugiOpis || device.description) && (
        <div className="mb-5 md:mb-6">
          <p 
            className={`text-gray-700 text-base md:text-lg leading-relaxed ${expanded ? '' : 'line-clamp-4'}`}
            style={{ 
              fontFamily: 'Inter, Arial, sans-serif',
              lineHeight: '1.7',
            }}
          >
            {device.dlugiOpis || device.description}
          </p>
          {(device.dlugiOpis || device.description)?.length > 200 && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-3 inline-flex items-center text-[#FF6200] hover:text-[#FF8C00] font-semibold text-sm md:text-base transition-colors"
              style={{ 
                fontFamily: 'Inter, Arial, sans-serif',
              }}
            >
              {expanded ? 'Pokaż mniej' : 'Pokaż więcej'}
              <span className="ml-1">{expanded ? '↑' : '↓'}</span>
            </button>
          )}
        </div>
      )}
      {Array.isArray(device.features) && device.features.length > 0 && (
        <div className="flex flex-col gap-3 md:gap-3.5">
          {device.features.map((feature, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 + i * 0.05 }}
              className="inline-flex items-center px-5 py-3 rounded-full text-sm md:text-base font-semibold bg-gradient-to-r from-[#FF6200] to-[#FF8C00] text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
              style={{
                fontFamily: 'Inter, Arial, sans-serif',
                fontWeight: 600,
                boxShadow: '0 2px 8px 0 rgba(255,98,0,0.3)',
              }}
            >
              {typeof feature === 'string' && feature.length > 0 ? feature.charAt(0).toUpperCase() + feature.slice(1) : feature}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
};