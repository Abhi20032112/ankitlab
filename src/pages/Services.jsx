import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Settings, Wrench, GraduationCap, Search, Building2 } from 'lucide-react';

const Services = () => {
    const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

    const services = [
        { icon: Settings, title: 'Calibration & Installation', description: 'Professional setup and calibration of instruments for optimal performance.' },
        { icon: Wrench, title: 'Preventive Maintenance', description: 'Regular maintenance services to ensure longevity and accuracy of equipment.' },
        { icon: GraduationCap, title: 'Product Demonstrations & Training', description: 'Comprehensive training on proper usage and safety protocols.' },
        { icon: Search, title: 'Custom Chemical Sourcing', description: 'Specialized procurement for hard-to-find research chemicals.' },
        { icon: Building2, title: 'Lab Setup Support', description: 'End-to-end guidance and support for setting up new laboratories.' },
    ];

    return (
        <AnimatedPage>
            <div className="pt-24 bg-slate-50">
                <section id="services" className="py-24 relative bg-gradient-to-b from-slate-50 to-blue-100/30">
                    <div className="container mx-auto px-6">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                <Settings className="inline-block w-12 h-12 mr-4 text-teal-500" />
                                <span className="gradient-text">Our Services</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                                Comprehensive support beyond product delivery to ensure your success.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className="glass-card p-8 hover:bg-white/80 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="bg-white/50 border border-slate-200/80 rounded-xl p-4 inline-block group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-blue-500 transition-all duration-300">
                                            <service.icon className="w-8 h-8 text-teal-500 group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-500 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </AnimatedPage>
    );
};

export default Services;