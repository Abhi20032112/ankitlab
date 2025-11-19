import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Chemicals from '@/pages/Chemicals';
import Glassware from '@/pages/Glassware';
import Instruments from '@/pages/Instruments';
import Consumables from '@/pages/Consumables';
import ProductDetail from '@/pages/ProductDetail';
import Services from '@/pages/Services';
import Brands from '@/pages/Brands';
import Contact from '@/pages/Contact';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/chemicals" element={<Chemicals />} />
            <Route path="products/glassware" element={<Glassware />} />
            <Route path="products/instruments" element={<Instruments />} />
            <Route path="products/consumables" element={<Consumables />} />
            <Route path="products/:slug" element={<ProductDetail />} />
            <Route path="services" element={<Services />} />
            <Route path="brands" element={<Brands />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Toaster />
    </>
  );
}

export default App;
