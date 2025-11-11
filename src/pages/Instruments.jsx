import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Microscope, ChevronDown, ChevronUp } from 'lucide-react';

const Instruments = () => {
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
            title: "Visiscope Spectrophotometer (340nm-990nm) with 2 position sample holder",
            description: "Visible spectrophotometer for accurate spectral analysis.",
            details: "Wide wavelength range spectrophotometer with dual sample holder for comparative analysis. Features high accuracy optics, digital display, and USB connectivity for data transfer. Ideal for educational and research laboratories."
        },
        {
            title: "Visible Spectrophotometer (Resolution 2nm)",
            description: "High-resolution visible spectrophotometer.",
            details: "2nm spectral resolution with excellent stability and repeatability. Includes multiple cuvette holders, wavelength scanning capabilities, and comprehensive software for data analysis. Perfect for quantitative analysis in various applications."
        },
        {
            title: "μC Based Conductivity Meter with cell (1.0 CC) and Temp. probe",
            description: "Microcontroller-based conductivity meter with temperature probe.",
            details: "Advanced microcontroller technology with automatic temperature compensation. Features 1.0 cell constant electrode, wide measurement range, and calibration facilities. Suitable for water quality testing and process control applications."
        },
        {
            title: "μC based pH system with electrode & Temp. probe ( Auto Temp. Compensation, 3 point calibration, Resol. 0.01 pH)",
            description: "Advanced pH meter with automatic temperature compensation.",
            details: "High-precision pH meter with 0.01 pH resolution and automatic temperature compensation. Includes 3-point calibration for accuracy across full pH range. Features large LCD display and electrode status indicator for reliable measurements."
        },
        {
            title: "Analytical Balance",
            description: "Precision analytical balance for accurate weighing.",
            details: "High-precision electronic balance with multiple weighing units and calibration features. Includes draft shield, leveling bubble, and RS-232 interface. Essential for accurate mass measurements in analytical chemistry and research."
        },
        {
            title: "Moisture Analyzer",
            description: "Moisture analyzer for determining moisture content.",
            details: "Fast and accurate moisture determination using halogen heating technology. Features automatic endpoint detection, multiple drying programs, and GLP-compliant data recording. Ideal for quality control in food, pharmaceutical, and chemical industries."
        },
    ];

    return (
        <AnimatedPage>
            <div className="pt-24 bg-slate-50">
                <section className="py-24 relative">
                    <div className="container mx-auto px-6">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                <Microscope className="inline-block w-12 h-12 mr-4 text-teal-500" />
                                <span className="gradient-text">Analytical Instruments</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">State-of-the-art instruments from Wensar and Systonic for precise analysis.</p>
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

export default Instruments;