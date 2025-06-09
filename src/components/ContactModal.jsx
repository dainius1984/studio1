import React, { useState, useEffect } from "react";
import { X, ArrowRight, AlertCircle, Phone } from "lucide-react";
import { Link } from 'react-router-dom';

const ContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [policy, setPolicy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Podaj swoje imię";
    if (!phone.match(/^[0-9]{9}$/)) errs.phone = "Podaj swój numer telefonu (9 cyfr)";
    if (!policy) errs.policy = "Zaakceptuj politykę prywatności, abyśmy mogli się z Tobą skontaktować";
    return errs;
  };

  const handlePrivacyPolicyClick = (e) => {
    // Don't prevent default - let the Link navigate
    onClose(); // Close the modal
  };

  const sendContact = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      // Reset form after closing
      setName("");
      setPhone("");
      setPolicy(false);
      setSubmitted(false);
      setErrors({});
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm overflow-y-auto">
      <div
        className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 max-w-full sm:max-w-md w-full relative my-8 animate-fade-in"
        style={{
          boxShadow: '0 8px 40px 0 rgba(255,98,0,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)',
          border: '2px solid #FF6200',
          paddingTop: 40,
        }}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 text-2xl transition z-50"
          onClick={onClose}
          aria-label="Zamknij"
        >
          <X size={28} />
        </button>
        {!submitted ? (
          <div className="max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="text-center mb-6">
              <Phone className="mx-auto mb-3 text-orange-500" size={40} />
              <h2 className="mb-2" style={{ fontFamily: 'Raleway, Arial, sans-serif', fontWeight: 800, color: '#FF6200', fontSize: 28, letterSpacing: '-0.5px', lineHeight: 1.1 }}>
                Skontaktuj się z nami
              </h2>
              <p className="mb-2" style={{ fontFamily: 'Raleway, Arial, sans-serif', fontWeight: 700, color: '#333', fontSize: 18 }}>
                Zostaw numer i imię
              </p>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: 16 }}>
                Oddzwonimy w ciągu 15 minut
              </p>
            </div>
            <form onSubmit={sendContact} className="space-y-4">
              <div className="mb-4">
                <label className="block font-semibold mb-1">Imię*</label>
                <input
                  type="text"
                  className={`w-full border-2 rounded-2xl px-5 py-3 bg-orange-50/60 shadow-sm focus:shadow-lg focus:outline-none focus:border-orange-500 focus:bg-white transition placeholder-gray-400 text-lg ${errors.name ? "border-red-400" : "border-gray-200"}`}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="np. Ania"
                />
                {errors.name && (
                  <div className="flex items-center gap-2 mt-2 bg-red-100 text-red-700 rounded-xl px-3 py-2 text-sm shadow-sm animate-fade-in-tooltip-smooth">
                    <AlertCircle size={18} className="text-red-500" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Numer telefonu*</label>
                <input
                  type="tel"
                  className={`w-full border-2 rounded-2xl px-5 py-3 bg-orange-50/60 shadow-sm focus:shadow-lg focus:outline-none focus:border-orange-500 focus:bg-white transition placeholder-gray-400 text-lg ${errors.phone ? "border-red-400" : "border-gray-200"}`}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  maxLength={9}
                  pattern="[0-9]{9}"
                  placeholder="np. 503537701"
                />
                {errors.phone && (
                  <div className="flex items-center gap-2 mt-2 bg-red-100 text-red-700 rounded-xl px-3 py-2 text-sm shadow-sm animate-fade-in-tooltip-smooth">
                    <AlertCircle size={18} className="text-red-500" />
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="contact-policy"
                    checked={policy}
                    onChange={e => setPolicy(e.target.checked)}
                    className="mr-2 accent-orange-500"
                  />
                  <label htmlFor="contact-policy" className="text-sm">
                    Akceptuję <Link to="/polityka-prywatnosci" onClick={handlePrivacyPolicyClick} className="underline text-orange-500">Politykę Prywatności</Link> i zgadzam się na kontakt
                  </label>
                </div>
                {errors.policy && (
                  <div className="flex items-center gap-2 mt-2 bg-red-100 text-red-700 rounded-xl px-3 py-2 text-sm shadow-sm animate-fade-in-tooltip-smooth">
                    <AlertCircle size={18} className="text-red-500" />
                    <span>{errors.policy}</span>
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full transition flex items-center justify-center gap-2 group
                  bg-gradient-to-r from-[#FF6200] to-[#FF8C00] text-white text-lg font-semibold shadow-lg
                  hover:from-[#FF8C00] hover:to-[#FF6200] focus:from-[#FF8C00] focus:to-[#FF6200] cursor-pointer"
                style={{
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              >
                Wyślij
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight size={22} />
                </span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 animate-fade-in">
            <div className="mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 animate-slide-up">Dziękujemy!</h3>
              <p className="text-gray-600 animate-slide-up-delayed">Oddzwonimy do Ciebie w ciągu 15 minut</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal; 