import React from 'react';

function KoalendarWidget({ selectedService }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {selectedService ? `Book: ${selectedService.name || selectedService.title || selectedService.entries}` : 'Book a Service'}
      </h2>
      {selectedService && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-2">
            {selectedService.longDescription || selectedService.details || ''}
          </p>
          <p className="text-blue-700 font-bold">
            Price: {selectedService.price || selectedService.discountedPrice || selectedService.originalPrice} zł
          </p>
        </div>
      )}
      <div className="w-full overflow-hidden rounded-lg">
        <iframe
          src="https://koalendar.com/e/your-booking-page" // Replace with your actual Koalendar booking URL
          className="w-full h-[600px] border-none"
          title="Koalendar Booking"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default KoalendarWidget; 