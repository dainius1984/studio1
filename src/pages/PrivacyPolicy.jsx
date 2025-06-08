import React, { useEffect } from 'react';
import { privacyPolicyData } from './PrivacyPolicyData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter pt-20">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-raleway font-bold text-center text-gray-800 mb-8">Polityka Prywatności</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Administrator</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p>{privacyPolicyData.administrator.name}</p>
              <p>{privacyPolicyData.administrator.address}</p>
              <p>NIP: {privacyPolicyData.administrator.nip}</p>
              <p>REGON: {privacyPolicyData.administrator.regon}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p>Email: {privacyPolicyData.administrator.contact.email}</p>
              <p>Adres: {privacyPolicyData.administrator.contact.address}</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Wprowadzenie</h2>
            <p className="mb-4">{privacyPolicyData.introduction.commitment}</p>
            <ul className="list-none pl-6 space-y-2">
              {privacyPolicyData.introduction.points.map((point, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Zakres</h2>
            <p className="mb-4">{privacyPolicyData.scope.description}</p>
            <ul className="list-none pl-6 space-y-2 mb-4">
              {privacyPolicyData.scope.services.map((service, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {service}
                </li>
              ))}
            </ul>
            <p className="italic text-gray-500 mb-2">{privacyPolicyData.scope.additional}</p>
            <p className="text-gray-600">{privacyPolicyData.scope.disclaimer}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Przetwarzanie Danych</h2>
            {privacyPolicyData.dataProcessing.categories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-raleway font-semibold text-gray-700 mb-3">{category.name}</h3>
                <p className="mb-2"><span className="font-semibold text-gray-800">Cel:</span> {category.purpose}</p>
                <ul className="list-none pl-6 space-y-2 mb-4">
                  {category.scope.map((item, i) => (
                    <li key={i} className="relative pl-4 text-gray-600">
                      <span className="absolute left-0 text-orange-500 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p><span className="font-semibold text-gray-800">Podstawa prawna:</span> {category.legalBasis}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Okres Przetwarzania</h2>
            <p className="mb-4">{privacyPolicyData.processingPeriod.description}</p>
            <p className="italic text-gray-500">{privacyPolicyData.processingPeriod.additional}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Prawa Użytkownika</h2>
            {privacyPolicyData.userRights.rights.map((right, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-raleway font-semibold text-gray-700 mb-2">{right.name}</h3>
                <p className="text-gray-600">{right.description}</p>
              </div>
            ))}
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <h3 className="text-xl font-raleway font-semibold text-gray-700 mb-3">Kontakt w sprawie praw użytkownika:</h3>
              <p>Adres: {privacyPolicyData.userRights.contact.address}</p>
              <p>Email: {privacyPolicyData.userRights.contact.email}</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Odbiorcy Danych</h2>
            <ul className="list-none pl-6 space-y-2 mb-4">
              {privacyPolicyData.dataRecipients.categories.map((category, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {category}
                </li>
              ))}
            </ul>
            <p className="italic text-gray-500">{privacyPolicyData.dataRecipients.note}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Środki Bezpieczeństwa</h2>
            <p className="mb-4">{privacyPolicyData.securityMeasures.description}</p>
            <ul className="list-none pl-6 space-y-2 mb-4">
              {privacyPolicyData.securityMeasures.measures.map((measure, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {measure}
                </li>
              ))}
            </ul>
            <p className="italic text-gray-500">{privacyPolicyData.securityMeasures.internationalTransfer}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Cookies</h2>
            <p className="mb-4">{privacyPolicyData.cookies.description}</p>
            {privacyPolicyData.cookies.purposes.map((purpose, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-raleway font-semibold text-gray-700 mb-2">{purpose.name}</h3>
                <p className="text-gray-600">{purpose.description}</p>
              </div>
            ))}
            <p className="italic text-gray-500 mb-4">{privacyPolicyData.cookies.management}</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-raleway font-semibold text-gray-700 mb-3">Media społecznościowe</h3>
              <p className="mb-4">{privacyPolicyData.cookies.socialMedia.description}</p>
              <ul className="list-none pl-6 space-y-2">
                {privacyPolicyData.cookies.socialMedia.platforms.map((platform, index) => (
                  <li key={index} className="relative pl-4 text-gray-600">
                    <span className="absolute left-0 text-orange-500 font-bold">•</span>
                    {platform}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 