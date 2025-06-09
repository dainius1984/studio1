import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import KoalendarWidget from './KoalendarWidget';

function BookingModal({ isOpen, onClose, selectedService }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-4xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="p-6">
            <KoalendarWidget selectedService={selectedService} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingModal; 