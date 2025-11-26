import React from 'react';

const DesktopMenu = ({ handleNavigation, handleContactClick, isActive, getNavLinkClass }) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <button
        onClick={() => handleNavigation('#top')}
        className={getNavLinkClass('/')}
      >
        Start
      </button>
      <a
        href="http://sklep.studiofigurastablowice.pl"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:text-orange-500"
      >
        Sklep
      </a>
      <button
        onClick={() => handleNavigation('/cennik')}
        className={getNavLinkClass('/cennik')}
      >
        Cennik
      </button>
      <button
        onClick={() => handleNavigation('/uslugi')}
        className={getNavLinkClass('/uslugi')}
      >
      Usługi
      </button>
      <button
        onClick={() => handleNavigation('/produkty')}
        className={getNavLinkClass('/produkty')}
      >
        Produkty
      </button>
      <button
        onClick={() => handleNavigation('/kontakt')}
        className={getNavLinkClass('/kontakt')}
      >
        Kontakt
      </button>
      <button
        onClick={handleContactClick}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
      >
        Umów wizytę
      </button>
    </div>
  );
};

export default DesktopMenu; 