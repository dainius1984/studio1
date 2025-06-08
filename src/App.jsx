import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
        <Route path="/regulamin" element={<Terms />} />
        <Route path="/cennik" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
