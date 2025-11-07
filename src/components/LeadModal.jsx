import React, { useState, useEffect } from "react";
import { X, ArrowRight, AlertCircle, Sparkles, Gift } from "lucide-react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = "0f8Jce-Gsw4GbjCQ_";
const EMAILJS_SERVICE_ID = "service_m4uai4d";
const EMAILJS_TEMPLATE_ID = "template_r7rcz39";

// Initialize EmailJS with your public key
emailjs.init(EMAILJS_PUBLIC_KEY);

const LeadModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [policy, setPolicy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Check if modal has been submitted before - safety check
  useEffect(() => {
    if (isOpen) {
      const hasSubmitted = localStorage.getItem('leadModalSubmitted');
      if (hasSubmitted) {
        onClose();
      }
    }
  }, [isOpen, onClose]);
  
  // Listen for storage changes (in case submitted in another tab)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'leadModalSubmitted' && e.newValue === 'true') {
        onClose();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { 
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Podaj swoje imię";
    if (!phone.match(/^[0-9]{9}$/)) errs.phone = "Podaj swój numer telefonu (9 cyfr)";
    if (!policy) errs.policy = "Zaakceptuj politykę prywatności, abyśmy mogli się z Tobą skontaktować";
    return errs;
  };

  const handlePrivacyPolicyClick = (e) => {
    onClose();
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    
    setIsLoading(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        name: name.trim(),
        phone: phone.trim(),
        // Add timestamp and source for reference
        timestamp: new Date().toLocaleString('pl-PL'),
        source: 'Lead Modal - 60% na zabieg Stabłowice',
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      // Store submission in localStorage to prevent showing again
      localStorage.setItem('leadModalSubmitted', 'true');
      
      // Success - show success message
      setSubmitted(true);
      setIsLoading(false);
      
      // Auto-close after 3 seconds and reset form
      setTimeout(() => {
        onClose();
        setName("");
        setPhone("");
        setPolicy(false);
        setSubmitted(false);
        setErrors({});
      }, 3000);
    } catch (error) {
      // Handle error
      console.error('EmailJS Error:', error);
      setIsLoading(false);
      setErrors({ 
        submit: 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie później.' 
      });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-md overflow-y-auto p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-full sm:max-w-md w-full relative my-4 sm:my-8"
          style={{
            boxShadow: '0 8px 40px 0 rgba(255,98,0,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)',
            border: '2px solid #FF6200',
          }}
        >
          <button
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-orange-500 text-2xl transition z-50 p-1 hover:bg-orange-50 rounded-full"
            onClick={onClose}
            aria-label="Zamknij"
          >
            <X size={24} className="sm:w-7 sm:h-7" />
          </button>
          {!submitted ? (
            <div className="max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-8rem)] overflow-y-auto">
              {/* Header with discount badge */}
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center mb-4"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="bg-gradient-to-r from-[#FF6200] to-[#FF8C00] text-white px-6 py-3 rounded-full shadow-lg"
                      style={{
                        fontFamily: 'Raleway, Arial, sans-serif',
                        fontWeight: 800,
                        fontSize: 'clamp(20px, 5vw, 32px)',
                        letterSpacing: '-0.5px',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Gift size={24} className="sm:w-8 sm:h-8" />
                        <span>-60%</span>
                        <Sparkles size={20} className="sm:w-6 sm:h-6" />
                      </div>
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"
                    />
                  </div>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-3 sm:mb-4"
                  style={{
                    fontFamily: 'Raleway, Arial, sans-serif',
                    fontWeight: 800,
                    color: '#FF6200',
                    fontSize: 'clamp(22px, 5vw, 32px)',
                    letterSpacing: '-0.5px',
                    lineHeight: 1.2,
                  }}
                >
                  Przejdź z nami metamorfozę
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-700 mb-2"
                  style={{
                    fontFamily: 'Raleway, Arial, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(16px, 4vw, 20px)',
                  }}
                >
                  Specjalna oferta dla Ciebie!
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 text-sm sm:text-base"
                  style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                  }}
                >
                  -60% na zabieg w Studio Figura Stabłowice
                </motion.p>
              </div>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onSubmit={sendEmail}
                className="space-y-4"
              >
                <div className="mb-4">
                  <label className="block font-semibold mb-2 text-gray-700 text-sm sm:text-base">
                    Imię*
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    className={`w-full border-2 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 bg-orange-50/60 shadow-sm focus:shadow-lg focus:outline-none focus:border-orange-500 focus:bg-white transition-all placeholder-gray-400 text-base sm:text-lg ${errors.name ? "border-red-400 shake" : "border-gray-200"}`}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="np. Ania"
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-2 mt-2 bg-red-100 text-red-700 rounded-xl px-3 py-2 text-sm shadow-sm"
                      >
                        <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                        <span>{errors.name}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="mb-4">
                  <label className="block font-semibold mb-2 text-gray-700 text-sm sm:text-base">
                    Numer telefonu*
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    className={`w-full border-2 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 bg-orange-50/60 shadow-sm focus:shadow-lg focus:outline-none focus:border-orange-500 focus:bg-white transition-all placeholder-gray-400 text-base sm:text-lg ${errors.phone ? "border-red-400 shake" : "border-gray-200"}`}
                    value={phone}
                    onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                    maxLength={9}
                    pattern="[0-9]{9}"
                    placeholder="np. 503537701"
                  />
                  <AnimatePresence>
                    {errors.phone && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-2 mt-2 bg-red-100 text-red-700 rounded-xl px-3 py-2 text-sm shadow-sm"
                      >
                        <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                        <span>{errors.phone}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <motion.input
                      whileTap={{ scale: 0.95 }}
                      type="checkbox"
                      id="policy"
                      checked={policy}
                      onChange={e => setPolicy(e.target.checked)}
                      className="mt-1 accent-orange-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 cursor-pointer"
                    />
                    <label htmlFor="policy" className="text-xs sm:text-sm text-gray-700 leading-relaxed cursor-pointer">
                      Akceptuję <Link to="/polityka-prywatnosci" onClick={handlePrivacyPolicyClick} className="underline text-orange-500 hover:text-orange-600 transition-colors">Politykę Prywatności</Link> i zgadzam się na kontakt
                    </label>
                  </div>
                  <AnimatePresence>
                    {errors.policy && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-2 mt-2 bg-red-100 text-red-700 rounded-xl px-3 py-2 text-sm shadow-sm"
                      >
                        <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                        <span>{errors.policy}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <AnimatePresence>
                  {errors.submit && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 bg-red-100 text-red-700 rounded-xl px-3 py-2 text-sm shadow-sm mb-4"
                    >
                      <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                      <span>{errors.submit}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={!isLoading ? { scale: 1.02 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                  className={`w-full py-3.5 sm:py-4 rounded-full transition-all flex items-center justify-center gap-2 group
                    bg-gradient-to-r from-[#FF6200] to-[#FF8C00] text-white text-base sm:text-lg font-semibold shadow-lg
                    hover:from-[#FF8C00] hover:to-[#FF6200] focus:from-[#FF8C00] focus:to-[#FF6200]
                    ${isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:shadow-xl'}`}
                  style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Wysyłanie...</span>
                    </>
                  ) : (
                    <>
                      <span>Odbierz rabat -60%</span>
                      <ArrowRight size={20} className="sm:w-6 sm:h-6 transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </motion.form>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center py-6 sm:py-8"
          >
            <div className="mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17L4 12" />
                </motion.svg>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: 'Raleway, Arial, sans-serif' }}
              >
                Dziękujemy!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-600 text-lg sm:text-xl max-w-sm mx-auto px-4"
                style={{ fontFamily: 'Inter, Arial, sans-serif' }}
              >
                Skontaktujemy się z Tobą wkrótce
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6 sm:mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-6 sm:px-8 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-md text-sm sm:text-base"
                >
                  Zamknij
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
};

export default LeadModal;