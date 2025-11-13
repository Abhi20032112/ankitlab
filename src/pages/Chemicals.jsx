import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { FlaskRound } from 'lucide-react';

const Chemicals = () => {
    const { toast } = useToast();
    const handleQuoteRequest = () => {
        toast({
            title: "Quote Request Submitted",
            description: "Thank you for your interest! We'll get back to you with a quote soon.",
        });
    };

    const products = [
        { title: "Sulfuric acid-Emplura-2.5 Lit.", description: "High purity sulfuric acid for laboratory use." },
        { title: "Hydrochloric acid-Emplura-2.5 Lit.", description: "Concentrated hydrochloric acid for chemical analysis." },
        { title: "Nitric acid-Emplura-2.5 Lit.", description: "Pure nitric acid for analytical applications." },
        { title: "Acetic acid glacial-Emplura-2.5 Ltr.", description: "Glacial acetic acid for organic synthesis." },
        { title: "Sodium hydroxide flakes-Emplura-1Kg", description: "Sodium hydroxide flakes for titration and neutralization." },
        { title: "Potassium dichromate-Emplura-500gm", description: "Potassium dichromate for redox titrations." },
    ];

    return (
        <AnimatedPage>
            <div className="pt-24 bg-slate-50">
                <section className="py-24 relative">
                    <div className="container mx-auto px-6">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                <FlaskRound className="inline-block w-12 h-12 mr-4 text-teal-500" />
                                <span className="gradient-text">Research Chemicals</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">Sourced from leading brands like Merck, Finar, and Imparta for unmatched purity.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.map((product, index) => (
                                <motion.div key={product.title} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="glass-card group hover:bg-white/80 transition-all duration-300">
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                                        <p className="text-slate-500 mb-6 leading-relaxed h-24">{product.description}</p>
                                        <Button onClick={handleQuoteRequest} className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-semibold rounded-lg">Request Quote</Button>
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

export default Chemicals;