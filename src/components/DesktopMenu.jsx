import React from 'react';
import { Link } from 'react-router-dom';

const DesktopMenu = ({ handleNavigation, handleContactClick, isActive, getNavLinkClass }) => {
  return (
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
  );
};

export default DesktopMenu; 