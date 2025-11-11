import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Package, ChevronDown, ChevronUp } from 'lucide-react';

const Consumables = () => {
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
            title: "Reagent Bottle-50ML",
            description: "Durable reagent bottle for storing chemicals.",
            details: "High-quality polypropylene reagent bottle with screw cap. Features excellent chemical resistance and clear graduation markings. Ideal for storing and dispensing laboratory reagents safely."
        },
        {
            title: "Wide mouth bottle-60ml (Code-33306)",
            description: "Wide mouth bottle for easy access and storage.",
            details: "60ml wide mouth polypropylene bottle with secure screw cap. Designed for easy filling and cleaning. Perfect for storing powders, granules, and viscous liquids in laboratory environments."
        },
        {
            title: "N95 Mask without respiratory valve -(Code-5P95)",
            description: "N95 mask for personal protection in labs.",
            details: "Certified N95 particulate respirator mask providing 95% filtration efficiency. Features adjustable nose clip and elastic headbands for comfortable fit. Essential PPE for laboratory safety and protection against airborne particles."
        },
        {
            title: "Safety Goggles with vent -(Code-81352)",
            description: "Safety goggles for eye protection.",
            details: "Chemical-resistant safety goggles with indirect ventilation system. Provides complete eye protection against chemical splashes, impact, and dust. Features anti-fog coating and comfortable adjustable headband."
        },
        {
            title: "Pipette pump-25ml (Code- 20003)",
            description: "Pipette pump for accurate liquid transfer.",
            details: "25ml capacity pipette pump with thumb wheel operation for precise volume control. Compatible with most graduated pipettes. Features easy-to-read volume display and quick release mechanism for efficient liquid handling."
        },
        {
            title: "Wash Bottle-500ml (Code- 36603)",
            description: "Wash bottle for rinsing and cleaning.",
            details: "500ml polyethylene wash bottle with fine tip nozzle for controlled dispensing. Features wide mouth for easy filling and chemical-resistant construction. Essential for rinsing glassware and precise liquid application in labs."
        },
    ];

    return (
        <AnimatedPage>
            <div className="pt-24 bg-slate-50">
                <section className="py-24 relative">
                    <div className="container mx-auto px-6">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                <Package className="inline-block w-12 h-12 mr-4 text-teal-500" />
                                <span className="gradient-text">Consumables & Plasticware</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">Everything you need for daily lab operations, featuring products from Polylab.</p>
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

export default Consumables;