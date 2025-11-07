import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsMenuOpen(prev => !prev);
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
    
    // Handle scroll to top
    if (path === '#top') {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    // Handle route paths
    if (path.startsWith('/')) {
      navigate(path);
      return;
    }
    // Handle hash links
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
    if (path === '/uslugi') {
      return location.pathname === '/uslugi' || location.pathname.startsWith('/uslugi/');
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
            <DesktopMenu 
              handleNavigation={handleNavigation}
              handleContactClick={handleContactClick}
              isActive={isActive}
              getNavLinkClass={getNavLinkClass}
            />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-orange-500 p-2 transition-transform duration-300 ease-in-out"
                aria-label="Toggle menu"
                type="button"
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
        <MobileMenu 
          isOpen={isMenuOpen}
          handleNavigation={handleNavigation}
          handleContactClick={handleContactClick}
          isActive={isActive}
          onClose={() => setIsMenuOpen(false)}
        />
      </nav>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Navigation; 