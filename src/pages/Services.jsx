import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Settings } from 'lucide-react';

const Services = () => {
    const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

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
                                We are Authorised Service Partner and Reseller of Borosil, Wensar, Systonics, Finar/Actylis, Oxford Chemical, Nice, Loba, Himedia, Tarson, Polylab, Mettler-Toledo, Ion-exchange, Labix and Merck.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </div>
        </AnimatedPage>
    );
};

export default Services;