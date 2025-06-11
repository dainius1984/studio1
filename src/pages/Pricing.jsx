import React, { useEffect, useState } from 'react';
import { pricingData } from './PricingData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StickySidebar from '../components/StickySidebar';
import LeadModal from '../components/LeadModal';

const Pricing = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderPackage = (pkg) => (
    <div 
      key={pkg.entries} 
      className="relative bg-orange-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow border border-orange-100"
    >
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{pkg.entries}</h4>
      {pkg.discountedPrice ? (
        <>
          <p className="text-gray-500 line-through text-sm">{pkg.originalPrice} zł</p>
          <p className="text-red-600 text-xl font-bold">{pkg.discountedPrice} zł</p>
          <p className="text-gray-600 text-sm mt-1">Cena za wejście: {pkg.pricePer} zł</p>
          <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
            -{pkg.discount}%
          </span>
        </>
      ) : (
        <p className="text-blue-700 text-xl font-bold">{pkg.originalPrice} zł</p>
      )}
    </div>
  );

  const renderServiceCard = (service, index) => (
    <div 
      key={index} 
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-orange-100 flex flex-col justify-between min-h-[180px]"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.name || service.title}</h3>
      <p className="text-gray-600 mb-2 text-sm flex-1">{service.longDescription || service.details}</p>
      <p className="text-blue-700 text-xl font-bold mt-2">{service.price} zł</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white pt-20">
      <Navigation />
      <StickySidebar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Cennik Usług</h1>

        {/* Consultations Section */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-orange-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">Konsultacje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingData.consultations.map((service, index) => renderServiceCard(service, index))}
          </div>
        </section>

        {/* Fitness & Wellness Zone Section */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-orange-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">Strefa Fitness & Wellness</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strefa Fitness</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pricingData.fitnessZone.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 border border-orange-100 flex flex-col justify-between min-h-[140px]">
                    <h4 className="text-base font-semibold text-gray-900 mb-1">{service.device}</h4>
                    <p className="text-gray-600 text-xs mb-1 flex-1">{service.description}</p>
                    <p className="text-gray-500 text-xs mb-1">{service.duration}</p>
                    <p className="text-blue-700 font-bold text-lg">{service.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strefa Wellness</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pricingData.wellnessZone.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 border border-orange-100 flex flex-col justify-between min-h-[140px]">
                    <h4 className="text-base font-semibold text-gray-900 mb-1">{service.device}</h4>
                    <p className="text-gray-600 text-xs mb-1 flex-1">{service.description}</p>
                    <p className="text-gray-500 text-xs mb-1">{service.duration}</p>
                    <p className="text-blue-700 font-bold text-lg">{service.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Discounts */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Zniżki na Karnety</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingData.fitnessWellnessDiscounts.map((discount, index) => (
                <div key={index} className="bg-orange-50 rounded-lg p-6 border border-orange-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{discount.entries}</h4>
                  <ul className="space-y-2">
                    {discount.discounts.map((item, i) => (
                      <li key={i} className="flex justify-between items-center text-gray-600">
                        <span>{item.station}</span>
                        <span className="text-red-600 font-semibold">{item.discount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Power Shaper Pro Section */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-orange-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">Power Shaper Pro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingData.powerShaperPro.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-orange-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.details}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.packages.map(renderPackage)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Liposuction Section */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-orange-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">Liposukcja</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingData.liposuction.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-orange-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.details}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.packages.map(renderPackage)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cosmetology Treatments Section */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-orange-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">Zabiegi Kosmetologiczne</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-orange-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Endomasaż</h3>
              <div className="grid grid-cols-1 gap-4">
                {pricingData.cosmetologyTreatments.endomassage.map((service, index) => (
                  <div key={index} className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                    <h4 className="text-base font-semibold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-xs mb-2">{service.details}</p>
                    <p className="text-blue-700 font-bold">{service.price} zł</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slim 4D Section */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-orange-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">Slim 4D</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingData.slim4d.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-orange-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.details}</p>
                <p className="text-blue-700 font-bold">{service.price} zł</p>
              </div>
            ))}
          </div>
        </section>

        {/* HIFU 4D Section */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-orange-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">HIFU 4D</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{pricingData.hifu4d.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingData.hifu4d.treatments.map((treatment, index) => (
              <div key={index} className="bg-orange-50 rounded-lg p-6 border border-orange-100">
                <h4 className="text-base font-semibold text-gray-900 mb-2">{treatment.area}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <p className="text-gray-600 text-xs">1 zabieg: {treatment.priceSingle}</p>
                  <p className="text-gray-600 text-xs">Pakiet 3 zabiegów: {treatment.pricePackage3}</p>
                  <p className="text-gray-600 text-xs">Cena za zabieg w pakiecie: {treatment.pricePerInPackage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Supplements & Cosmetics Section */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-orange-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">Suplementy i Kosmetyki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-orange-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Suplementy</h3>
              <div className="grid grid-cols-1 gap-4">
                {pricingData.supplements.individual.map((product, index) => (
                  <div key={index} className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                    <h4 className="text-base font-semibold text-gray-900 mb-2">{product.name}</h4>
                    <p className="text-gray-600 text-xs mb-2">{product.description}</p>
                    <p className="text-blue-700 font-bold">{product.price} zł</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-orange-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kosmetyki</h3>
              <div className="grid grid-cols-1 gap-4">
                {pricingData.cosmetics.products.map((product, index) => (
                  <div key={index} className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                    <h4 className="text-base font-semibold text-gray-900 mb-2">{product.name}</h4>
                    <p className="text-gray-600 text-xs mb-2">{product.description}</p>
                    <p className="text-blue-700 font-bold">{product.price} zł</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lead Modal */}
        <LeadModal 
          isOpen={isLeadModalOpen} 
          onClose={() => setIsLeadModalOpen(false)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing; 