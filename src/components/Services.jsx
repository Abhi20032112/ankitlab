import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Settings, Wrench, GraduationCap, Search } from 'lucide-react';

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const services = [
    {
      icon: Settings,
      title: 'Installation & Calibration',
      description: 'Professional setup and calibration of laboratory instruments for optimal performance.',
    },
    {
      icon: Wrench,
      title: 'Preventive Maintenance',
      description: 'Regular maintenance services to ensure longevity and accuracy of your equipment.',
    },
    {
      icon: GraduationCap,
      title: 'Product Training & Safety',
      description: 'Comprehensive training programs on proper usage and safety protocols.',
    },
    {
      icon: Search,
      title: 'Custom Chemical Sourcing',
      description: 'Specialized procurement services for hard-to-find research chemicals.',
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive support beyond product delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="glass-card p-4 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-blue-600 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-teal-400 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;