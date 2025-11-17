import React, { useState, useEffect } from "react";
import { Facebook, Instagram, MapPin, X } from "lucide-react";

const sidebarLinks = [
  {
    icon: <Facebook size={24} />,
    url: "https://www.facebook.com/StudioFiguraWroclawStablowice",
    label: "Facebook",
    bg: "bg-[#3b5998]",
  },
  {
    icon: <Instagram size={24} />,
    url: "https://www.instagram.com/sf_wroclaw_stablowice?igsh=MW9iOGZncDdjMnVvNw%3D%3D&utm_source=qr",
    label: "Instagram",
    bg: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500",
  },
  {
    icon: <MapPin size={24} />,
    url: "https://g.co/kgs/TqC91Rh",
    label: "Google Maps",
    bg: "bg-[#34a853]",
    isMap: true,
  },
];

const StickySidebar = () => {
  const [showMapModal, setShowMapModal] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Prevent background scroll when map modal is open
  useEffect(() => {
    if (showMapModal) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [showMapModal]);

  const handleMapClick = (e, url) => {
    e.preventDefault();
    setShowMapModal(true);
  };

  return (
    <>
      <div className="fixed top-1/4 right-0 z-40 hidden md:flex flex-col gap-3">
        {sidebarLinks.map((link, idx) => (
          <div
            key={idx}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip */}
            <div
              className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none ${
                hoveredIndex === idx
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-2'
              }`}
            >
              {link.label}
              {/* Tooltip arrow */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>

            {/* Icon Button */}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              onClick={link.isMap ? (e) => handleMapClick(e, link.url) : undefined}
              className={`
                flex items-center justify-center 
                w-14 h-14 
                rounded-l-xl 
                text-white 
                transition-all duration-300 ease-out
                cursor-pointer
                ${link.bg}
                ${hoveredIndex === idx 
                  ? 'scale-110 shadow-2xl -translate-x-1' 
                  : 'scale-100 shadow-lg hover:scale-105 hover:shadow-xl'
                }
              `}
            >
              <div className={`transition-transform duration-300 ${hoveredIndex === idx ? 'scale-110' : 'scale-100'}`}>
                {React.cloneElement(link.icon, { size: 26 })}
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Map Modal */}
      {showMapModal && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-md overflow-hidden"
          onClick={() => setShowMapModal(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 max-w-4xl w-full relative my-8 mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowMapModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.1744853!2d16.9034354!3d51.1744853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f95002d4f2525%3A0xc9802cafe972f8f5!2sStudio%20Figura%20Wroc%C5%82aw%20Stab%C5%82owice!5e0!3m2!1spl!2spl!4v1709912345678!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Figura Wrocław Stabłowice"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://g.co/kgs/TqC91Rh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
              >
                <MapPin size={20} />
                Otwórz w Google Maps
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickySidebar;