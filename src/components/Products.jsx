import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { FlaskRound as Flask, Microscope, Scale, Activity, Package, ChevronDown, ChevronUp } from 'lucide-react';

const Products = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
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
      icon: Flask,
      title: 'Research Chemicals',
      description: 'High-purity chemicals from Merck and Finar for precise laboratory research.',
      details: 'Comprehensive range of analytical reagents, solvents, and standards with guaranteed purity levels. Includes organic and inorganic compounds, buffers, indicators, and specialty chemicals for research and quality control applications.',
      image: 'Laboratory chemicals and reagents in bottles',
    },
    {
      icon: Microscope,
      title: 'Lab Glassware',
      description: 'Premium quality borosilicate glassware from Borosil for accurate measurements.',
      details: 'Heat-resistant borosilicate glassware with excellent thermal shock resistance. Includes beakers, flasks, pipettes, burettes, and measuring cylinders with precise calibration and durability for long-term laboratory use.',
      image: 'Scientific laboratory glassware and beakers',
    },
    {
      icon: Scale,
      title: 'Weighing & Measuring',
      description: 'Precision instruments from Wensar for accurate weight and volume measurements.',
      details: 'High-precision analytical balances, moisture analyzers, and volumetric equipment. Features automatic calibration, GLP compliance, and advanced measurement capabilities for accurate quantitative analysis.',
      image: 'Digital laboratory weighing scale',
    },
    {
      icon: Activity,
      title: 'Analytical Instruments',
      description: 'Advanced analytical equipment from Systonic for comprehensive testing.',
      details: 'State-of-the-art spectrophotometers, pH meters, conductivity meters, and other analytical instruments. Includes data logging, USB connectivity, and software for comprehensive analytical testing and research.',
      image: 'Modern analytical laboratory instruments',
    },
    {
      icon: Package,
      title: 'Consumables & Plasticware',
      description: 'Durable lab consumables and plasticware from Polylab for everyday use.',
      details: 'Wide range of plastic labware including bottles, containers, pipettes, and safety equipment. Chemical-resistant, autoclavable materials designed for daily laboratory operations and sample handling.',
      image: 'Laboratory plastic consumables and containers',
    },
  ];

  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Products</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive range of laboratory essentials from world-class manufacturers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden group hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-900/30 to-blue-900/30">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={product.title}
                 src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
                <product.icon className="absolute top-4 right-4 w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {product.description}
                </p>
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
                <Button
                  onClick={handleQuoteRequest}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Request Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;