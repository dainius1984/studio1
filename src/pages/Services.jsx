import React, { useEffect } from 'react';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (location.pathname === '/uslugi') {
      navigate('/uslugi/wellness');
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Services; 