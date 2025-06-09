import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
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
      <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 hover:text-orange-500 transition-colors">
                <span className="whitespace-nowrap">Studio Figura</span>
                <span className="text-orange-500 ml-1">Stabłowice</span>
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
                  onClick={() => handleNavigation('#results')} 
                  className={getNavLinkClass('/')}
                >
                  Efekty
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
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 pt-16">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <button 
                onClick={() => handleNavigation('#home')} 
                className="block w-full text-left px-4 py-3 text-orange-500 font-medium text-lg border-b border-gray-100"
              >
                Strona główna
              </button>
              <button 
                onClick={() => handleNavigation('#about')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 text-lg border-b border-gray-100"
              >
                O nas
              </button>
              <button 
                onClick={() => handleNavigation('#services')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 text-lg border-b border-gray-100"
              >
                Usługi
              </button>
              <button 
                onClick={() => handleNavigation('#results')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 text-lg border-b border-gray-100"
              >
                Efekty
              </button>
              <button 
                onClick={handleContactClick} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 text-lg border-b border-gray-100"
              >
                Kontakt
              </button>
              <Link 
                to="/cennik" 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 text-lg border-b border-gray-100"
              >
                Cennik
              </Link>
              <button 
                onClick={handleContactClick} 
                className="w-full mt-6 bg-orange-500 text-white px-6 py-3 rounded-full font-medium text-lg"
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