import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TestTube, ChevronDown, ChevronUp } from 'lucide-react';

const Glassware = () => {
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
            title: "Low form beaker with spout-50 ml",
            description: "Borosil low form beaker with spout for precise pouring.",
            details: "Durable borosilicate glass construction with excellent thermal shock resistance. Features a convenient spout for easy pouring and graduated markings for volume measurement. Ideal for mixing, heating, and general laboratory use."
        },
        {
            title: "Conical Flask Narrow Mouth with Rim-100 ml",
            description: "Narrow mouth conical flask for distillation and storage.",
            details: "Erlenmeyer flask with narrow mouth design for secure stopper fitting. Perfect for culturing microorganisms, mixing solutions, and titration procedures. The conical shape allows for efficient swirling and minimizes evaporation."
        },
        {
            title: "Volumetric Flask Class A Narrow Mouth Clear-25 ml",
            description: "Class A volumetric flask for accurate volume measurement.",
            details: "Precision calibrated Class A glassware with narrow mouth and ground glass stopper. Ensures accurate volume measurement to within ±0.08ml tolerance. Essential for preparing standard solutions and precise analytical work."
        },
        {
            title: "Glass Filter Funnel - 100mm",
            description: "Glass filter funnel for filtration applications.",
            details: "100mm diameter borosilicate glass funnel with smooth internal surface. Designed for use with filter paper in gravity filtration. Heat resistant and chemically inert, perfect for separating solids from liquids in various laboratory procedures."
        },
        {
            title: "Mohr Pipette Class A-5 ML",
            description: "Class A Mohr pipette for precise liquid transfer.",
            details: "Calibrated Class A glass pipette with multiple graduation marks for variable volume delivery. Features a straight tip and is color-coded for easy identification. Provides accuracy of ±0.01ml for precise volumetric measurements."
        },
        {
            title: "Burette with boroflo stopcock class-A- 50 ML",
            description: "Class A burette with boroflo stopcock for titration.",
            details: "50ml capacity burette with PTFE boroflo stopcock for smooth, drip-free operation. Class A accuracy with ±0.05ml tolerance. Essential for analytical chemistry titrations requiring precise volume control and measurement."
        },
    ];

    return (
        <AnimatedPage>
            <div className="pt-24 bg-slate-50">
                <section className="py-24 relative">
                    <div className="container mx-auto px-6">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                <TestTube className="inline-block w-12 h-12 mr-4 text-teal-500" />
                                <span className="gradient-text">Lab Glassware</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">Premium, heat-resistant borosilicate glassware exclusively from Borosil.</p>
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

export default Glassware;