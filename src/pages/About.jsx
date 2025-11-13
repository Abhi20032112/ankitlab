import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Award, Shield, Zap, Truck, Beaker, Users, Target, Eye } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [storyRef, storyInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const values = [
    { icon: Award, title: 'Quality', description: 'Premium grade products' },
    { icon: Shield, title: 'Integrity', description: 'Trusted partnerships' },
    { icon: Zap, title: 'Service Support', description: 'Expert guidance' },
    { icon: Truck, title: 'Fast Delivery', description: 'Timely service' },
  ];

  const brands = [
    { name: 'Borosil', logo: '/images/brands/borosil.png' },
    { name: 'Wensar', logo: '/images/brands/wensar.jpeg' },
    { name: 'Systonic', logo: '/images/brands/sybstronics.png' },
    { name: 'Finar', logo: '/images/brands/finar.png' },
    { name: 'Imparta', logo: '/images/brands/imparta.webp' },
    { name: 'Merck', logo: '/images/brands/Merck.webp' },
    { name: 'Polylab', logo: '/images/brands/polylab.jpg' },
  ];

  return (
    <AnimatedPage>
      <div className="pt-24 gradient-bg-hero">
        {/* Hero Section */}
        <section id="about-hero" className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <Beaker className="inline-block w-12 h-12 mr-4 text-teal-500" />
                <span className="gradient-text">About Ankit Lab Chemicals</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                Founded with a vision to support the scientific community, Ankit Lab Chemicals is a leading supplier and service provider of research-grade chemicals, laboratory consumables, and analytical instruments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section id="who-we-are" className="py-16 gradient-bg-section">
          <div className="container mx-auto px-6">
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, y: 50 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Who We Are</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <p className="text-lg text-slate-600 mb-4">
                    Founded with a vision to support the scientific community, Ankit Lab Chemicals is a leading supplier and service provider of research-grade chemicals, laboratory consumables, and analytical instruments.
                  </p>
                  <p className="text-lg text-slate-600 mb-4">
                    We collaborate with renowned brands such as Borosil, Wensar, Systonic, Finar, Imparta, and Merck, bringing you premium-quality products backed by expert support and competitive pricing.
                  </p>
                  <p className="text-lg text-slate-600 mb-8">
                    Our mission is simple — to empower research and innovation by providing laboratories with the finest tools and materials they need to succeed.
                  </p>
                </div>
                <div className="relative">
                  <img src="/images/about-section-img.jpeg" alt="Ankit Lab Chemicals About" className="w-full max-w-sm mx-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission-vision" className="py-16 gradient-bg-section">
          <div className="container mx-auto px-6">
            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, y: 50 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div className="glass-card p-8">
                <Target className="w-16 h-16 text-teal-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Our Mission</h3>
                <p className="text-lg text-slate-600">
                  To empower scientific advancement by providing unparalleled access to premium laboratory chemicals, instruments, and consumables, ensuring researchers and institutions have the tools they need for groundbreaking discoveries.
                </p>
              </div>
              <div className="glass-card p-8">
                <Eye className="w-16 h-16 text-teal-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Our Vision</h3>
                <p className="text-lg text-slate-600">
                  To be the leading laboratory supply partner in India, recognized for our commitment to quality, innovation, and customer satisfaction, fostering a culture of scientific excellence across all sectors.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Authorized Brand Partners */}
        <section id="partners" className="py-16 gradient-bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Authorized Brand Partners</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We are proud authorized partners of industry-leading brands, ensuring you receive genuine, high-quality products:
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 hover:bg-white/80 transition-all duration-300 group cursor-default text-center"
                >
                  <img src={brand.logo} alt={brand.name} className="w-16 h-16 mx-auto mb-2 object-contain" />
                  <h4 className="text-sm font-semibold text-slate-700">{brand.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>






      </div>
    </AnimatedPage>
  );
};

export default About;
