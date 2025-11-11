import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Layout = () => {
  const location = useLocation();
  const pageName = location.pathname.split('/').filter(Boolean).pop() || 'Home';
  const pageTitle = `Ankit Lab Chemicals - ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}`;
  const description = "Your trusted supplier of high-grade research chemicals, laboratory consumables, and scientific instruments.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="min-h-screen bg-slate-50 overflow-hidden flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;