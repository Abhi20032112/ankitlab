import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '@/components/AnimatedPage';
import FloatingMolecules from '@/components/FloatingMolecules';
import { Button } from '@/components/ui/button';
import { ArrowRight, Beaker, FlaskRound, Award } from 'lucide-react';

const clientLogos = [
  { src: "/images/logos/BIHAR ANIMAL SCIENCE UNIVERSITY.jpg", name: "BIHAR ANIMAL SCIENCE UNIVERSITY" },
  { src: "/images/logos/BIHAR MUSEUM, PATNA, BIHAR.png", name: "BIHAR MUSEUM, PATNA, BIHAR" },
  { src: "/images/logos/Bihar Veterinary College, Patna.jpg", name: "Bihar Veterinary College, Patna" },
  { src: "/images/logos/COLLEGE OF VETERINARY AND ANIMAL SCIENCES, KISHANGANJ.jpg", name: "COLLEGE OF VETERINARY AND ANIMAL SCIENCES, KISHANGANJ" },
  { src: "/images/logos/icar-logo.png", name: "ICAR" },
  { src: "/images/logos/IIT, PATNA.jpg", name: "IIT, PATNA" },
  { src: "/images/logos/KVK, EAST CHAMPARAN.png", name: "KVK, EAST CHAMPARAN" },
  { src: "/images/logos/KVK, VAISAHALI.jpg", name: "KVK, VAISAHALI" },
  { src: "/images/logos/PHED.png", name: "PHED" },
  { src: "/images/logos/RAU, PUSA SAMASTIPUR.png", name: "RAU, PUSA SAMASTIPUR" },
  { src: "/images/logos/SABOUR AGRICULTURE.png", name: "SABOUR AGRICULTURE" },
  { src: "/images/logos/Soil Test Lab.jpg", name: "Soil Test Lab" },
  { src: "/images/logos/Sudha Dairy.png", name: "Sudha Dairy" },
  { src: "/images/logos/Suguna-Foods-Brand-Logo.png", name: "Suguna Foods" },
];

const productImages = [
  "/images/3365 1.jpg",
  "/images/3365 12.jpg",
  "/images/BTD.jpg",
  "/images/CENT.jpg",
  "/images/FP - Copy.jpg",
  "/images/WhatsApp Image 2025-11-08 at 15.54.27_b2ce55bc.jpg",
  "/images/WhatsApp Image 2025-11-08 at 15.54.28_587d6a46.jpg",
  "/images/WhatsApp Image 2025-11-08 at 15.54.28_15166838.jpg",
  "/images/WhatsApp Image 2025-11-08 at 15.54.29_0cbfa2e1.jpg",
  "/images/WhatsApp Image 2025-11-08 at 15.54.29_76c5a529.jpg",
  "/images/WhatsApp Image 2025-11-08 at 15.54.30_135bdf1d.jpg",
  "/images/WhatsApp Image 2025-11-08 at 15.54.30_96000963.jpg",
  "/images/WhatsApp Image 2025-11-08 at 15.54.31_22647f71.jpg",
  "/images/WhatsApp Image 2025-11-08 at 16.02.18_3ef22eab.jpg",
  "/images/WhatsApp Image 2025-11-08 at 16.02.18_7e3df35f.jpg",
];

const sliderImages = [
  "/images/generated-image.png",
  "/images/hero1.png",
  "/images/hero2.jpeg",
];

const Home = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatedPage>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 gradient-bg-hero">
        <FloatingMolecules />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-800">
                <Beaker className="inline-block w-12 h-12 mr-4 text-teal-500" />
                <span className="gradient-text">Empowering Research.</span>
                <br />
                <span className="gradient-text">Delivering Excellence.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-xl mx-auto lg:mx-0 font-light">
                Leading supplier of high-grade research chemicals, laboratory consumables, analytical instruments, and scientific equipment in Patna, Bihar, India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button
                  onClick={() => navigate('/contact')}
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all duration-300 group"
                >
                  Get Quotation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => navigate('/products')}
                  size="lg"
                  variant="outline"
                  className="bg-white/50 border-2 border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  View Products
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card max-w-lg p-2 glow-effect"
            >
              <div className="relative w-full rounded-lg overflow-hidden">
                <img
                  src={sliderImages[currentImage]}
                  alt="Laboratory environment"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 gradient-bg-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              <FlaskRound className="inline-block w-10 h-10 mr-3 text-teal-500" />
              Our Product Range
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our comprehensive collection of laboratory equipment, chemicals, and scientific instruments available in Patna, Bihar.
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-6"
              animate={{
                x: [0, -200 * productImages.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...productImages, ...productImages].map((image, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 h-48 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 gradient-bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              <Award className="inline-block w-10 h-10 mr-3 text-teal-500" />
              Trusted By Leading Institutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We proudly serve prestigious universities, research institutions, and organizations across India, with a strong presence in Patna and Bihar.
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -100 * clientLogos.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center p-2 hover:shadow-md transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-16 object-contain mb-1"
                  />
                  <p className="text-xs text-center text-slate-600 leading-tight">
                    {logo.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;