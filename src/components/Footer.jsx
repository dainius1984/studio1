import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
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

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 block">
              Studio Figura Wrocław <span className="text-orange-500">Stabłowice</span>
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Twoje miejsce dla zdrowia, urody i dobrego samopoczucia 
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
              <li><button onClick={() => handleNavigation('#services')} type="button" className="hover:text-orange-500 transition-colors bg-transparent border-none p-0 m-0 cursor-pointer text-inherit">Kryolipoliza</button></li>
              <li><button onClick={() => handleNavigation('#services')} type="button" className="hover:text-orange-500 transition-colors bg-transparent border-none p-0 m-0 cursor-pointer text-inherit">Kavitacja</button></li>
              <li><button onClick={() => handleNavigation('#services')} type="button" className="hover:text-orange-500 transition-colors bg-transparent border-none p-0 m-0 cursor-pointer text-inherit">Vacustyler</button></li>
              <li><button onClick={() => handleNavigation('#services')} type="button" className="hover:text-orange-500 transition-colors bg-transparent border-none p-0 m-0 cursor-pointer text-inherit">Masaże</button></li>
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
                kontakt@studiofigura-wroclaw-stablowice.pl
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                Brodzka 193<br />54-067 Wrocław
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p className="mb-2">&copy; 2025 Studio Figura Wrocław Stabłowice. Wszystkie prawa zastrzeżone.</p>
          <p>
            <Link to="/polityka-prywatnosci" className="text-orange-500 hover:text-orange-400 transition-colors">
              Polityka Prywatności
            </Link>
            {' | '}
            <Link to="/regulamin" className="text-orange-500 hover:text-orange-400 transition-colors">
              Regulamin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 