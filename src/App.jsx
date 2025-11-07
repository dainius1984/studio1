import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import Products from './pages/Products';
import ProductsCategory from './pages/ProductsCategory';
import ServiceCategory from './pages/ServiceCategory';
import Contact from './pages/Contact';
import LeadModal from './components/LeadModal';

// Component to handle modal logic
const AppContent = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if modal has been submitted before
    const hasSubmitted = localStorage.getItem('leadModalSubmitted');
    
    // Only show if not submitted before
    if (hasSubmitted !== 'true') {
      // Show modal after 1 second delay
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // If already submitted, make sure modal is closed
      setShowModal(false);
    }
  }, [location.pathname]); // Re-check when route changes

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
        <Route path="/regulamin" element={<Terms />} />
        <Route path="/cennik" element={<Pricing />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/uslugi" element={<Services />}>
          <Route path=":category" element={<ServiceCategory />} />
        </Route>
        <Route path="/produkty" element={<Products />}>
          <Route path=":category" element={<ProductsCategory />} />
        </Route>
      </Routes>
      <LeadModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
