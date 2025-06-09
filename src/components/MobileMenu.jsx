import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, handleNavigation, handleContactClick }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-x-0 top-16 bg-white z-[101] mobile-menu shadow-lg rounded-b-2xl transform transition-all duration-300 ease-in-out">
      <div className="px-4 pt-4 pb-6 space-y-1">
        <button 
          onClick={() => handleNavigation('#home')} 
          className="block w-full text-left px-4 py-3 text-orange-500 font-medium text-lg rounded-lg hover:bg-orange-50 transition-colors"
        >
          Strona główna
        </button>
        <button 
          onClick={() => handleNavigation('#about')} 
          className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 text-lg rounded-lg hover:bg-orange-50 transition-colors"
        >
          O nas
        </button>
        <button 
          onClick={() => handleNavigation('#services')} 
          className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 text-lg rounded-lg hover:bg-orange-50 transition-colors"
        >
          Usługi
        </button>
        <button 
          onClick={handleContactClick} 
          className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 text-lg rounded-lg hover:bg-orange-50 transition-colors"
        >
          Kontakt
        </button>
        <Link 
          to="/cennik" 
          className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 text-lg rounded-lg hover:bg-orange-50 transition-colors"
        >
          Cennik
        </Link>
        <button 
          onClick={handleContactClick} 
          className="w-full mt-4 bg-orange-500 text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-orange-600 transition-colors shadow-md"
        >
          Umów wizytę
        </button>
      </div>
    </div>
  );
};

export default MobileMenu; 