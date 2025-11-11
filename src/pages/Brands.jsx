import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Award } from 'lucide-react';

const Brands = () => {
    const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

    const partners = [
        { name: 'Borosil', ext: 'png' },
        { name: 'Finar', ext: 'png' },
        { name: 'Merck', ext: 'webp' },
        { name: 'Wensar', ext: 'jpeg' },
        { name: 'Sybstronics', ext: 'png' },
        { name: 'Imparta', ext: 'webp' },
        { name: 'Polylab', ext: 'jpg' }
    ];

    return (
        <AnimatedPage>
            <div className="pt-24 bg-slate-50">
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                <Award className="inline-block w-12 h-12 mr-4 text-teal-500" />
                                <span className="gradient-text">Our Brand Partners</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                                We collaborate with the most trusted and renowned brands in the industry to ensure quality and reliability.
                            </p>
                        </motion.div>

                        <div className="relative" ref={ref}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                            >
                                <motion.div
                                    animate={{ x: ['0%', '-100%'] }}
                                    transition={{
                                        ease: 'linear',
                                        duration: 25,
                                        repeat: Infinity,
                                    }}
                                    className="flex gap-16 pr-16"
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
                    </div>
                </section>
            </div>
        </AnimatedPage>
    );
};

export default Brands;