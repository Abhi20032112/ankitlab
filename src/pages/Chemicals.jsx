import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FlaskRound, ChevronDown, ChevronUp } from 'lucide-react';

const Chemicals = () => {
    const navigate = useNavigate();
    const [expandedProduct, setExpandedProduct] = useState(null);

    const handleQuoteRequest = () => {
        navigate('/contact');
    };

    const toggleDetails = (index) => {
        setExpandedProduct(expandedProduct === index ? null : index);
    };

    const products = [
        {
            title: "Sulfuric acid-Emplura-2.5 Lit.",
            description: "High purity sulfuric acid for laboratory use.",
            details: "Emplura grade sulfuric acid with 98% purity. Ideal for pH adjustment, chemical synthesis, and analytical applications. Supplied in 2.5L bottles with safety caps."
        },
        {
            title: "Hydrochloric acid-Emplura-2.5 Lit.",
            description: "Concentrated hydrochloric acid for chemical analysis.",
            details: "37% concentrated HCl, Emplura grade. Perfect for metal cleaning, pH control, and as a reagent in various analytical procedures. Comes in durable 2.5L containers."
        },
        {
            title: "Nitric acid-Emplura-2.5 Lit.",
            description: "Pure nitric acid for analytical applications.",
            details: "65% nitric acid, analytical grade. Essential for metal dissolution, nitration reactions, and trace metal analysis. Packaged in 2.5L amber bottles for light protection."
        },
        {
            title: "Acetic acid glacial-Emplura-2.5 Ltr.",
            description: "Glacial acetic acid for organic synthesis.",
            details: "99.8% pure glacial acetic acid. Used in organic synthesis, vinegar production simulation, and as a solvent. Supplied in 2.5L clear glass bottles."
        },
        {
            title: "Sodium hydroxide flakes-Emplura-1Kg",
            description: "Sodium hydroxide flakes for titration and neutralization.",
            details: "98% pure NaOH flakes. Excellent for volumetric analysis, soap making, and pH adjustment. Comes in 1Kg sealed containers to prevent moisture absorption."
        },
        {
            title: "Potassium dichromate-Emplura-500gm",
            description: "Potassium dichromate for redox titrations.",
            details: "Analytical grade K2Cr2O7. Primary standard for redox titrations and as an oxidizing agent. Supplied in 500g amber bottles with desiccant."
        },
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
                                        <p className="text-slate-500 mb-4 leading-relaxed">{product.description}</p>
                                        {expandedProduct === index && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-4 p-3 bg-slate-100 rounded-lg">
                                                <p className="text-slate-600 text-sm leading-relaxed">{product.details}</p>
                                            </motion.div>
                                        )}
                                        <div className="flex gap-2 mb-3">
                                            <Button onClick={() => toggleDetails(index)} variant="outline" className="flex-1 text-slate-700 border-slate-300 hover:bg-slate-100">
                                                More Details {expandedProduct === index ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
                                            </Button>
                                        </div>
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