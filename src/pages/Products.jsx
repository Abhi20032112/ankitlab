import React from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { FlaskRound, Microscope, Activity, Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';

    const categories = [
        {
            icon: FlaskRound,
            title: 'Chemicals',
            description: 'High purity analytical, AR, LR, and HPLC grade chemicals.',
            path: '/products/chemicals',
        },
        {
            icon: Microscope,
            title: 'Glassware',
            description: 'Premium quality borosilicate glassware for all lab needs.',
            path: '/products/glassware',
        },
        {
            icon: Activity,
            title: 'Instruments',
            description: 'Precision analytical instruments and weighing balances.',
            path: '/products/instruments',
        },
        {
            icon: Package,
            title: 'Consumables & Plasticware',
            description: 'A wide range of daily-use lab consumables from Polylab.',
            path: '/products/consumables',
        },
    ];

    const filteredCategories = searchQuery
        ? categories.filter(category =>
            category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            category.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : categories;

    return (
        <AnimatedPage>
            <div className="pt-24 bg-slate-50">
                <section className="py-24 relative">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                <Package className="inline-block w-12 h-12 mr-4 text-teal-500" />
                                <span className="gradient-text">Our Product Categories</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                                We offer a complete range of laboratory products designed to meet the diverse needs of research, education, and industry. Our catalog includes everything from basic consumables to advanced analytical instruments, all sourced from trusted manufacturers to ensure reliability and performance.
                            </p>
                        </motion.div>

                        {filteredCategories.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {filteredCategories.map((category, index) => (
                                    <motion.div
                                        key={category.title}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.15 }}
                                        className="glass-card p-8 flex flex-col justify-between items-center text-center hover:bg-white/80 transition-all duration-300 group"
                                    >
                                        <div>
                                            <div className="mb-6 flex justify-center">
                                                <div className="bg-white/50 border border-slate-200/80 rounded-xl p-4 inline-block group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-blue-500 transition-all duration-300">
                                                    <category.icon className="w-12 h-12 text-teal-500 group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">
                                                {category.title}
                                            </h3>
                                            <p className="text-slate-500 mb-6 leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>
                                        <Button
                                            onClick={() => navigate(category.path)}
                                            className="w-full bg-white/50 border-2 border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-semibold rounded-lg transition-all duration-300 group-hover:bg-blue-500/20"
                                        >
                                            Explore <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-center py-16"
                            >
                                <h3 className="text-2xl font-bold text-slate-700 mb-4">No products found</h3>
                                <p className="text-slate-500 mb-8">No categories match your search for "{searchQuery}". Try a different search term.</p>
                                <Button
                                    onClick={() => navigate('/products')}
                                    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300"
                                >
                                    View All Categories
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </section>
            </div>
        </AnimatedPage>
    );
};

export default Products;