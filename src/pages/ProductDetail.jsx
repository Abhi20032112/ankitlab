import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { allProducts } from '@/data/products';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = allProducts.find(p => {
    const productSlug = p.title
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
    return productSlug === slug;
  });

  if (!product) {
    return (
      <AnimatedPage>
        <div className="pt-24 bg-slate-50 min-h-screen">
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-4xl font-bold mb-6">Product Not Found</h1>
            <p className="text-xl text-slate-500 mb-8">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/products')} className="bg-teal-500 hover:bg-teal-600 text-white">
              Back to Products
            </Button>
          </div>
        </div>
      </AnimatedPage>
    );
  }

  const handleQuoteRequest = () => {
    navigate('/contact');
  };

  return (
    <AnimatedPage>
      <div className="pt-24 bg-slate-50">
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                className="mb-8 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              <div className="glass-card p-8">
                <h1 className="text-4xl font-bold mb-6 text-slate-800">{product.title}</h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">{product.description}</p>

                {product.details && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-700">Details</h2>
                    <p className="text-slate-600 leading-relaxed">{product.details}</p>
                  </div>
                )}

                <Button
                  onClick={handleQuoteRequest}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-semibold rounded-lg py-3"
                >
                  Request Quote
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default ProductDetail;
