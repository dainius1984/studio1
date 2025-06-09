import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav') && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    
    if (window.location.pathname !== '/') {
      navigate('/');
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
  };

  const handleContactClick = () => {
    setIsContactModalOpen(true);
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  const getNavLinkClass = (path) => {
    const baseClass = "px-3 py-2 text-sm font-medium transition-colors";
    return isActive(path)
      ? `${baseClass} text-orange-500`
      : `${baseClass} text-gray-700 hover:text-orange-500`;
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-[100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 hover:text-orange-500 transition-colors">
                <span className="whitespace-nowrap">Studio Figura</span>
                <span className="text-orange-500 ml-1">Wrocław Stabłowice</span>
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button 
                  onClick={() => handleNavigation('#home')} 
                  className={getNavLinkClass('/')}
                >
                  Strona główna
                </button>
                <button 
                  onClick={() => handleNavigation('#about')} 
                  className={getNavLinkClass('/')}
                >
                  O nas
                </button>
                <button 
                  onClick={() => handleNavigation('#services')} 
                  className={getNavLinkClass('/')}
                >
                  Usługi
                </button>
                <button 
                  onClick={handleContactClick} 
                  className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Kontakt
                </button>
                <Link 
                  to="/cennik" 
                  className={getNavLinkClass('/cennik')}
                >
                  Cennik
                </Link>
                <button 
                  onClick={handleContactClick} 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  Umów wizytę
                </button>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-orange-500 p-2 transition-transform duration-300 ease-in-out"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={24} className="transform rotate-180 transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="transform rotate-0 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
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