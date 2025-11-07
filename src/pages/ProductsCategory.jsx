import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { productsData } from '../data/productsData';
import { Flag, Package } from 'lucide-react';

const tabs = {
  suplementy: {
    title: 'Suplementy',
    description: 'Wybierz suplementy wspierające Twój trening i codzienną kondycję.'
  },
  kosmetyki: {
    title: 'Kosmetyki',
    description: 'Odkryj pielęgnację, która ujędrnia, wygładza i rozświetla skórę.'
  }
};

// Product Image Component with error handling
const ProductImage = ({ src, alt, title }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="flex items-center justify-center w-full h-full p-8">
        <div className="text-center">
          <div className="text-5xl mb-4 opacity-50">📦</div>
          <div className="text-gray-400 font-semibold text-lg" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
            {title.split('\n')[0]}
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain relative z-10 p-8 md:p-10 lg:p-12"
      loading="lazy"
      style={{
        objectPosition: 'center',
        maxWidth: '100%',
        maxHeight: '100%',
      }}
      onError={() => setImageError(true)}
    />
  );
};

const ProductsCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const current = tabs[category] ? category : 'suplementy';
  const items = productsData[current];

  return (
    <div className="bg-[#faf8f5] py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              onClick={() => navigate(`/produkty/${key}`)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 shadow-sm text-base ${
                key === current
                  ? 'bg-orange-500 text-white shadow-lg scale-105 border border-orange-600'
                  : 'bg-white text-gray-800 hover:bg-orange-100 border border-orange-100'
              }`}
              tabIndex={0}
              aria-current={key === current ? 'page' : undefined}
            >
              {tabs[key].title}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="space-y-8 md:space-y-10">
          {items.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
              style={{
                boxShadow: '0 4px 20px 0 rgba(0,0,0,0.08), 0 1px 4px 0 rgba(0,0,0,0.04)',
              }}
            >
              {/* Image Container */}
              <div className="md:w-1/2 w-full h-64 md:h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-50 via-orange-50/30 to-orange-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 to-transparent pointer-events-none"></div>
                <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
                  <ProductImage src={product.image} alt={product.title} title={product.title} />
                </div>
              </div>
              {/* Text Container */}
              <div className="md:w-1/2 w-full p-8 md:p-10 lg:p-12 flex flex-col justify-center md:h-[500px]">
                <h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 md:mb-5 leading-tight whitespace-pre-line"
                  style={{ 
                    fontFamily: 'Raleway, Arial, sans-serif',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {product.title}
                </h2>
                <p 
                  className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg leading-relaxed whitespace-pre-line flex-grow"
                  style={{ 
                    fontFamily: 'Inter, Arial, sans-serif',
                    lineHeight: '1.7',
                  }}
                >
                  {product.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3 mt-auto">
                  {product.polskiProdukt && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1 }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-green-50 text-green-800 border-2 border-green-200 px-4 py-2.5 text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] text-center"
                      style={{
                        fontFamily: 'Inter, Arial, sans-serif',
                        fontWeight: 600,
                        boxShadow: '0 2px 8px 0 rgba(34,197,94,0.2)',
                      }}
                    >
                      <Flag size={16} className="text-green-600 flex-shrink-0" />
                      <span>Wyprodukowano w Polsce</span>
                    </motion.span>
                  )}
                  {product.packaging && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.15 }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-50 text-orange-800 border-2 border-orange-200 px-4 py-2.5 text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] text-center"
                      style={{
                        fontFamily: 'Inter, Arial, sans-serif',
                        fontWeight: 600,
                        boxShadow: '0 2px 8px 0 rgba(255,98,0,0.2)',
                      }}
                    >
                      <Package size={16} className="text-orange-600 flex-shrink-0" />
                      <span>Opakowanie: {product.packaging}</span>
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsCategory;


