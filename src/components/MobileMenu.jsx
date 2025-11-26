import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, DollarSign, Briefcase, ShoppingBag, Mail, Calendar, Store } from 'lucide-react';

const MobileMenu = ({ isOpen, handleNavigation, handleContactClick, isActive, onClose }) => {
  const menuItems = [
    { label: 'Start', path: '#top', icon: Home },
    { label: 'Sklep', path: 'http://sklep.studiofigurastablowice.pl', icon: Store, external: true },
    { label: 'Cennik', path: '/cennik', icon: DollarSign },
    { label: 'Usługi', path: '/uslugi', icon: Briefcase },
    { label: 'Produkty', path: '/produkty', icon: ShoppingBag },
    { label: 'Kontakt', path: '/kontakt', icon: Mail },
  ];

  const handleItemClick = (path) => {
    handleNavigation(path);
    if (onClose) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[98]"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-[99] shadow-2xl overflow-y-auto overflow-x-hidden"
            style={{
              boxShadow: '-4px 0 24px rgba(0,0,0,0.15)',
            }}
          >
            {/* Header with close button */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center z-10">
              <h2 
                className="text-lg font-bold text-gray-900"
                style={{ fontFamily: 'Raleway, Arial, sans-serif' }}
              >
                Menu
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-orange-500"
                aria-label="Zamknij menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="px-4 py-6 space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const active = isActive ? isActive(item.path) : false;
                
                if (item.external) {
                  return (
                    <motion.a
                      key={item.path}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        if (onClose) onClose();
                      }}
                      className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-left transition-all duration-200 text-gray-700 hover:bg-gray-50 hover:text-orange-500 border-2 border-transparent"
                      style={{
                        fontFamily: 'Inter, Arial, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      <Icon 
                        size={22} 
                        className="text-gray-400" 
                      />
                      <span className="text-base">{item.label}</span>
                    </motion.a>
                  );
                }
                
                return (
                  <motion.button
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleItemClick(item.path)}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl text-left transition-all duration-200 ${
                      active
                        ? 'bg-orange-50 text-orange-600 border-2 border-orange-200'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500 border-2 border-transparent'
                    }`}
                    style={{
                      fontFamily: 'Inter, Arial, sans-serif',
                      fontWeight: active ? 600 : 500,
                    }}
                  >
                    <Icon 
                      size={22} 
                      className={active ? 'text-orange-500' : 'text-gray-400'} 
                    />
                    <span className="text-base">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="px-4 pb-6 pt-2">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => {
                  handleContactClick();
                  if (onClose) onClose();
                }}
                className="w-full bg-gradient-to-r from-[#FF6200] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF6200] text-white px-6 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                style={{
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(255,98,0,0.3)',
                }}
              >
                <Calendar size={20} />
                <span>Umów wizytę</span>
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 