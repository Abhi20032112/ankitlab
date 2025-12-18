import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Award, User } from 'lucide-react';

const Brands = () => {
    const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

    const partners = [
        { name: 'Borosil', ext: 'png' },
        { name: 'Finar', ext: 'png' },
        { name: 'Merck', ext: 'webp' },
        { name: 'Wensar', ext: 'jpeg' },
        { name: 'Sybstronics', ext: 'png' },
        { name: 'Polylab', ext: 'jpg' },
        { name: 'Apolo', ext: 'jpeg' },
        { name: 'IGENE', ext: 'jpeg' },
        { name: 'PSAW', ext: 'jpeg' }
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
                                <span className="gradient-text">Partnership</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                                We are Authorised Service Partner of Borosil, Wensar, Systonics, Finar/Actylis, Oxford Chemical, Nice, Loba, Himedia, Tarson, Polylab, Mettler-Toledo, Ion-exchange, Labix ,Merck,PSAW,Labtronics,Apolo scales,IGENE LABSERVE .
                            </p>
                        </motion.div>

                        {/* Service Engineers Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-center mb-16"
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                                whileHover={{ scale: 1.05, color: "#0f766e" }}
                                className="text-2xl md:text-3xl font-bold mb-8 text-slate-700 hover:text-teal-600 transition-colors cursor-pointer"
                            >
                                Service Engineers
                            </motion.h2>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                        y: -5
                                    }}
                                    className="glass-card p-6 text-center hover:bg-white/90 transition-all duration-300 cursor-pointer group"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                                        className="mb-4 flex justify-center"
                                    >
                                        <User className="w-12 h-12 text-teal-500 group-hover:text-blue-500 transition-colors" />
                                    </motion.div>
                                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">Sukumar Mandal</h3>
                                    <p className="text-slate-600">Contact No.: 6290712947</p>
                                    <p className="text-slate-500">(Borosil)</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                        y: -5
                                    }}
                                    className="glass-card p-6 text-center hover:bg-white/90 transition-all duration-300 cursor-pointer group"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                                        className="mb-4 flex justify-center"
                                    >
                                        <User className="w-12 h-12 text-teal-500 group-hover:text-blue-500 transition-colors" />
                                    </motion.div>
                                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">Prem Sagar</h3>
                                    <p className="text-slate-600">Contact No.: 8800284556</p>
                                    <p className="text-slate-500">(Ankit Lab Chemicals)</p>
                                </motion.div>
                            </div>
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