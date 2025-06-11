import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import ServiceCategory from './pages/ServiceCategory';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
        <Route path="/regulamin" element={<Terms />} />
        <Route path="/cennik" element={<Pricing />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/uslugi" element={<Services />}>
          <Route path=":category" element={<ServiceCategory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
