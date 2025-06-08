import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ContactModal from './ContactModal';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    setIsContactModalOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-orange-500 transition-colors">
                Studio Figura Wrocław <span className="text-orange-500">Stabłowice</span>
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => handleNavigation('#home')} className="text-orange-500 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Strona główna</button>
                <button onClick={() => handleNavigation('#about')} className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">O nas</button>
                <button onClick={() => handleNavigation('#services')} className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Usługi</button>
                <button onClick={() => handleNavigation('#results')} className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Efekty</button>
                <button onClick={handleContactClick} className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Kontakt</button>
                <Link to="/cennik" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Cennik</Link>
                <button onClick={handleContactClick} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                  Umów wizytę
                </button>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => handleNavigation('#home')} className="block w-full text-left px-3 py-2 text-orange-500 font-medium">Strona główna</button>
              <button onClick={() => handleNavigation('#about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500">O nas</button>
              <button onClick={() => handleNavigation('#services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500">Usługi</button>
              <button onClick={() => handleNavigation('#results')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500">Efekty</button>
              <button onClick={handleContactClick} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500">Kontakt</button>
              <Link to="/cennik" className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500">Cennik</Link>
              <button onClick={handleContactClick} className="w-full mt-4 bg-orange-500 text-white px-6 py-2 rounded-full font-medium">
                Umów wizytę
              </button>
            </div>
          </div>
        )}
      </nav>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Navigation; 