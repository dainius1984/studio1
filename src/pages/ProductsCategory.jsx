import React from 'react';
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

const ProductsCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const current = tabs[category] ? category : 'suplementy';
  const items = productsData[current];

  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-12">
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

        {/* Grid */}
        <div className="space-y-10">
          {items.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center md:items-stretch"
            >
              <div className="md:w-1/3 w-full h-64 md:h-auto flex items-center justify-center bg-orange-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain max-h-56 w-auto mx-auto"
                />
              </div>
              <div className="md:w-2/3 w-full p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 whitespace-pre-line">{product.title}</h2>
                <p className="text-gray-600 mb-4 text-base md:text-lg whitespace-pre-line">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.polskiProdukt && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-50 text-green-800 border border-green-200 px-3 py-1 text-xs md:text-sm font-semibold shadow-sm w-fit">
                      <Flag size={16} className="text-green-600" />
                      Wyprodukowano w Polsce
                    </span>
                  )}
                  {product.packaging && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1 text-xs md:text-sm font-medium shadow-sm w-fit">
                      <Package size={16} className="text-orange-600" />
                      <span className="font-semibold">Opakowanie:</span> {product.packaging}
                    </span>
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


