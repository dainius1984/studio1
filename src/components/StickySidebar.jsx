import React, { useState } from "react";
import { Facebook, Youtube, Instagram, MapPin, X } from "lucide-react";

const sidebarLinks = [
  {
    icon: <Facebook size={24} />,
    url: "https://www.facebook.com/StudioFiguraWroclawStablowice",
    label: "Facebook",
    bg: "bg-[#3b5998]",
  },
  {
    icon: <Youtube size={24} />,
    url: "https://www.youtube.com/",
    label: "YouTube",
    bg: "bg-[#ff0000]",
  },
  {
    icon: <Instagram size={24} />,
    url: "https://www.instagram.com/",
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

  const handleMapClick = (e, url) => {
    e.preventDefault();
    setShowMapModal(true);
  };

  return (
    <>
      <div className="fixed top-1/4 right-0 z-40 hidden md:flex flex-col gap-4">
        {sidebarLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            onClick={link.isMap ? (e) => handleMapClick(e, link.url) : undefined}
            className={`flex items-center justify-center w-12 h-12 mb-2 rounded-l-lg shadow-lg text-white hover:scale-110 transition-transform ${link.bg}`}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Map Modal */}
      {showMapModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 max-w-4xl w-full relative my-8 mx-4">
            <button
              onClick={() => setShowMapModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.1234567890123!2d16.987654321!3d51.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDA3JzI0LjQiTiAxNsKwNTknMTUuNiJF!5e0!3m2!1spl!2spl!4v1234567890"
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