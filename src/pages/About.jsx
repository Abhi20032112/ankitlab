import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Award, Shield, Zap, Truck, Beaker } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const values = [
    { icon: Award, title: 'Quality', description: 'Premium grade products' },
    { icon: Shield, title: 'Integrity', description: 'Trusted partnerships' },
    { icon: Zap, title: 'Service Support', description: 'Expert guidance' },
    { icon: Truck, title: 'Fast Delivery', description: 'Timely service' },
  ];

  return (
    <AnimatedPage>
      <div className="pt-24 bg-slate-50">
        <section id="about" className="py-24 relative">
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
                A trusted supplier and service partner to research labs, industries, and academic institutions, delivering excellence in every product.
              </p>
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8 md:p-12 mb-12"
            >
              <h3 className="text-2xl font-bold mb-4 text-teal-600">
                <Award className="inline-block w-8 h-8 mr-3 text-teal-500" />
                Authorized Brand Partners
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                We are proud authorized partners of industry-leading brands:
              </p>
              <div className="flex flex-wrap gap-4 text-lg font-semibold">
                {['Borosil', 'Wensar', 'Systonic', 'Finar', 'Imparta', 'Merck', 'Polylab'].map((brand, index) => (
                  <motion.span
                    key={brand}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-white/50 border border-slate-200/80 rounded-lg px-6 py-3 text-blue-600 hover:text-teal-600 hover:border-teal-400 transition-colors cursor-default"
                  >
                    {brand}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 hover:bg-white/80 transition-all duration-300 group cursor-default"
                >
                  <value.icon className="w-12 h-12 text-teal-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold mb-2 text-slate-700">{value.title}</h4>
                  <p className="text-slate-500">{value.description}</p>
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