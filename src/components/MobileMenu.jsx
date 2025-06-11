import React from 'react';

const MobileMenu = ({ isOpen, handleNavigation, handleContactClick }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`md:hidden fixed inset-0 bg-white z-[99] transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="pt-20 pb-6 px-4 space-y-4">
        <button
          onClick={() => handleNavigation('#top')}
          className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
        >
          Start
        </button>
        <button
          onClick={() => handleNavigation('/cennik')}
          className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
        >
          Cennik
        </button>
        <button
          onClick={() => handleNavigation('/uslugi')}
          className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
        >
          Usługi
        </button>
        <button
          onClick={() => handleNavigation('/kontakt')}
          className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
        >
          Kontakt
        </button>
        <button
          onClick={handleContactClick}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full text-base font-medium transition-colors mt-4"
        >
          Umów wizytę
        </button>
      </div>
    </div>
  );
};

export default MobileMenu; 