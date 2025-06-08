import React, { useEffect } from 'react';
import { termsData } from './TermsData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter pt-20">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-raleway font-bold text-center text-gray-800 mb-8">Regulamin</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Definicje</h2>
            <ul className="list-none space-y-4">
              {termsData.definitions.items.map((item, index) => (
                <li key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">{item.term}</p>
                  <p className="text-gray-600">{item.definition}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Informacje Obowiązkowe</h2>
            <ul className="list-none pl-6 space-y-2 mb-6">
              {termsData.obligatoryInfo.points.map((point, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-raleway font-semibold text-gray-700 mb-3">Wymagania techniczne</h3>
              <p className="text-gray-600 mb-4">{termsData.obligatoryInfo.technicalRequirements.description}</p>
              <ul className="list-none pl-6 space-y-2">
                {termsData.obligatoryInfo.technicalRequirements.browsers.map((browser, index) => (
                  <li key={index} className="relative pl-4 text-gray-600">
                    <span className="absolute left-0 text-orange-500 font-bold">•</span>
                    {browser}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-raleway font-semibold text-gray-700 mb-3">Dane kontaktowe</h3>
              <p className="text-gray-600">{termsData.obligatoryInfo.contactInfo}</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Zasady Zawierania Umów</h2>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              {termsData.contractRules.steps.map((step, index) => (
                <li key={index} className="text-gray-600">{step}</li>
              ))}
            </ol>
            <ul className="list-none pl-6 space-y-2">
              {termsData.contractRules.conditions.map((condition, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {condition}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Wykonanie Umowy</h2>
            <p className="mb-4 text-gray-600">{termsData.contractExecution.description}</p>
            <p className="italic text-gray-500">{termsData.contractExecution.note}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Dostawa</h2>
            <ul className="list-none pl-6 space-y-2 mb-6">
              {termsData.delivery.points.map((point, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-raleway font-semibold text-gray-700 mb-3">Koszty dostawy</h3>
              <ul className="list-none pl-6 space-y-2">
                {termsData.delivery.costs.items.map((cost, index) => (
                  <li key={index} className="relative pl-4 text-gray-600">
                    <span className="absolute left-0 text-orange-500 font-bold">•</span>
                    {cost}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Promocje</h2>
            <ul className="list-none pl-6 space-y-2">
              {termsData.promotions.rules.map((rule, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Płatności</h2>
            <ul className="list-none pl-6 space-y-2 mb-6">
              {termsData.payments.rules.map((rule, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {rule}
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-raleway font-semibold text-gray-700 mb-3">Metody płatności</h3>
              <ul className="list-none pl-6 space-y-2">
                {termsData.payments.methods.map((method, index) => (
                  <li key={index} className="relative pl-4 text-gray-600">
                    <span className="absolute left-0 text-orange-500 font-bold">•</span>
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Odstąpienie od Umowy</h2>
            <ul className="list-none pl-6 space-y-2">
              {termsData.withdrawal.rules.map((rule, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Reklamacje</h2>
            <ul className="list-none pl-6 space-y-2">
              {termsData.complaints.rules.map((rule, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Własność Intelektualna</h2>
            <ul className="list-none pl-6 space-y-2">
              {termsData.intellectualProperty.rules.map((rule, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Postanowienia Końcowe</h2>
            <ul className="list-none pl-6 space-y-2">
              {termsData.finalProvisions.rules.map((rule, index) => (
                <li key={index} className="relative pl-4 text-gray-600">
                  <span className="absolute left-0 text-orange-500 font-bold">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms; 