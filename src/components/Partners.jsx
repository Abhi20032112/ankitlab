import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Partners = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const partners = [
    { name: 'Apolo', ext: 'jpeg' },
    { name: 'Borosil', ext: 'png' },
    { name: 'Finar', ext: 'png' },
    { name: 'IGENE', ext: 'jpeg' },
    { name: 'Merck', ext: 'webp' },
    { name: 'Polylab', ext: 'jpg' },
    { name: 'PSAW', ext: 'jpeg' },
    { name: 'Sybstronics', ext: 'png' },
    { name: 'Wensar', ext: 'jpeg' },
  ];

  const clients = [
    { name: 'BIHAR ANIMAL SCIENCE UNIVERSITY', logo: '/images/logos/BIHAR ANIMAL SCIENCE UNIVERSITY.jpg' },
    { name: 'BIHAR MUSEUM, PATNA, BIHAR', logo: '/images/logos/BIHAR MUSEUM, PATNA, BIHAR.png' },
    { name: 'Bihar Veterinary College, Patna', logo: '/images/logos/Bihar Veterinary College, Patna.jpg' },
    { name: 'COLLEGE OF VETERINARY AND ANIMAL SCIENCES, KISHANGANJ', logo: '/images/logos/COLLEGE OF VETERINARY AND ANIMAL SCIENCES, KISHANGANJ.jpg' },
    { name: 'ICAR', logo: '/images/logos/icar-logo.png' },
    { name: 'IIT, PATNA', logo: '/images/logos/IIT, PATNA.jpg' },
    { name: 'KVK, EAST CHAMPARAN', logo: '/images/logos/KVK, EAST CHAMPARAN.png' },
    { name: 'KVK, VAISAHALI', logo: '/images/logos/KVK, VAISAHALI.jpg' },
    { name: 'PHED', logo: '/images/logos/PHED.png' },
    { name: 'RAU, PUSA SAMASTIPUR', logo: '/images/logos/RAU, PUSA SAMASTIPUR.png' },
    { name: 'SABOUR AGRICULTURE', logo: '/images/logos/SABOUR AGRICULTURE.png' },
    { name: 'Soil Test Lab', logo: '/images/logos/Soil Test Lab.jpg' },
    { name: 'Sudha Dairy', logo: '/images/logos/Sudha Dairy.png' },
    { name: 'Suguna Foods', logo: '/images/logos/Suguna-Foods-Brand-Logo.png' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Brand Partners</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Trusted collaborations with industry leaders
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex overflow-hidden"
          >
            <motion.div
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex gap-8 pr-8"
            >
              {[...partners, ...partners].map((partner, index) => (
                <div key={`partner-${index}`} className="flex-shrink-0 w-64 h-32 glass-card flex items-center justify-center hover:bg-white/90 transition-all duration-300 group relative">
                  <img
                    src={`/images/brands/${partner.name.toLowerCase()}.${partner.ext}`}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-4xl font-bold gradient-text group-hover:scale-110 transition-transform hidden">{partner.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16 mt-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Clients</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Trusted by leading institutions and organizations
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex overflow-hidden"
          >
            <motion.div
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-8 pr-8"
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`client-${index}`}
                  className="glass-card px-8 py-6 min-w-[250px] flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-16 h-16 object-contain mb-2 rounded"
                  />
                  <span className="text-sm font-semibold gradient-text group-hover:scale-105 transition-transform text-center">
                    {client.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;