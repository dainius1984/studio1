import React from 'react';
import { Phone, Mail, MapPin, Lock, FileText, Store } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const footerServices = [
  {
    label: 'Strefa Wellness',
    category: 'wellness',
  },
  {
    label: 'Strefa Fitness',
    category: 'fitness',
  },
  {
    label: 'Kosmetologia Estetyczna',
    category: 'kosmetologia',
  },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (category) => {
    navigate(`/uslugi/${category}`, { state: { scrollToTop: true } });
  };

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 block">
              Studio Figura Wrocław <span className="text-orange-500">Stabłowice</span>
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Twoje miejsce dla zdrowia, urody i dobrego samopoczucia.
              Profesjonalne zabiegi w przyjaznej atmosferze.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">@</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Usługi</h4>
            <ul className="space-y-2 text-gray-300">
              {footerServices.map((service) => (
                <li key={service.category}>
                  <button
                    onClick={() => handleServiceClick(service.category)}
                    type="button"
                    className="hover:text-orange-500 transition-colors bg-transparent border-none p-0 m-0 cursor-pointer text-inherit"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                503 537 701
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                studiofigurawroclaw@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                Brodzka 193<br />54-067 Wrocław
              </li>
              <li>
                <a
                  href="https://sklep.studiofigurastablowice.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors"
                >
                  <Store size={16} />
                  Sklep
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-300 text-sm">
          <div className="mb-2 md:mb-0">Studio Figura © 2018 - {new Date().getFullYear()}</div>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/polityka-prywatnosci" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
              <Lock size={16} className="inline-block" />
              Polityka prywatności
            </Link>
            <span className="hidden md:inline-block text-gray-500">|</span>
            <Link to="/regulamin" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
              <FileText size={16} className="inline-block" />
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 