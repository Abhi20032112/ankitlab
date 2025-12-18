import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Twitter, Linkedin, Facebook, Microscope, FlaskConical, TestTube, Package, Home, Settings, Award, Mail, FlaskRound, MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const FloatingIcon = ({ children, className, delay, duration }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ y: [-5, 5, -5] }}
    transition={{ duration: duration, repeat: Infinity, ease: 'easeInOut', delay: delay }}
  >
    {children}
  </motion.div>
);

const Footer = () => {
  const { toast } = useToast();
  const [footerRef, footerInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleSocialClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "Social media links are not yet active.",
    });
  };

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 10, transition: { type: 'spring', stiffness: 300 } }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <footer className="relative gradient-bg-primary border-t border-gray-700 pt-24 pb-8 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={footerRef}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          initial="hidden"
          animate={footerInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Column 1: Company Overview */}
          <motion.div className="relative flex flex-col gap-4 p-4" variants={columnVariants}>
            <FloatingIcon className="absolute top-4 right-4 text-blue-300 neon-glow-blue opacity-30" delay={0} duration={8}>
              <Beaker size={30} />
            </FloatingIcon>
            <Link to="/" className="flex items-center gap-2 mb-2">
              <img src="/images/ankit-logo.jpeg" alt="Ankit Lab Chemicals Logo" className="w-12 h-12 rounded-full" />
            <span className="text-xl font-bold text-white">Ankit Lab Chemicals</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for high-grade research chemicals, lab consumables, and scientific instruments. Empowering scientific excellence.
            </p>
          </motion.div>

          {/* Column 2: Product Categories */}
          <motion.div className="relative p-4" variants={columnVariants}>
            <FloatingIcon className="absolute top-4 right-4 text-teal-300 neon-glow-teal opacity-30" delay={1} duration={10}>
              <FlaskRound size={30} />
            </FloatingIcon>
            <h3 className="font-bold text-lg mb-4 text-gray-200 flex items-center gap-2">
              <Package className="w-5 h-5 text-teal-500" />
              Product Categories
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/products/chemicals" className="hover:text-blue-600 transition-colors flex items-center gap-2"><FlaskRound className="w-4 h-4" />Research Chemicals</Link></li>
              <li><Link to="/products/instruments" className="hover:text-blue-600 transition-colors flex items-center gap-2"><Microscope className="w-4 h-4" />Analytical Instruments</Link></li>
              <li><Link to="/products/consumables" className="hover:text-blue-600 transition-colors flex items-center gap-2"><Package className="w-4 h-4" />Consumables & Plasticware</Link></li>
              <li><Link to="/products/glassware" className="hover:text-blue-600 transition-colors flex items-center gap-2"><TestTube className="w-4 h-4" />Lab Glassware</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div className="relative p-4" variants={columnVariants}>
            <FloatingIcon className="absolute top-4 right-4 text-purple-300 neon-glow-purple opacity-30" delay={0.5} duration={7}>
              <Home size={30} />
            </FloatingIcon>
            <h3 className="font-bold text-lg mb-4 text-gray-200 flex items-center gap-2">
              <Home className="w-5 h-5 text-teal-500" />
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-2"><Home className="w-4 h-4" />Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors flex items-center gap-2"><Beaker className="w-4 h-4" />About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors flex items-center gap-2"><Settings className="w-4 h-4" />Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors flex items-center gap-2"><Mail className="w-4 h-4" />Contact</Link></li>
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div className="relative p-4" variants={columnVariants}>
            <FloatingIcon className="absolute top-4 right-4 text-blue-300 neon-glow-blue opacity-30" delay={1.5} duration={9}>
              <Mail size={30} />
            </FloatingIcon>
            <h3 className="font-bold text-lg mb-4 text-gray-200 flex items-center gap-2">
              <Mail className="w-5 h-5 text-teal-500" />
              Contact Us
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              C/o-Ashok Kumar, Ground Floor, New Punaichak, Patna, Bihar - 800001
            </p>
            <div className="flex space-x-4">
              <motion.a href="https://wa.me/1234567890" target="_blank" variants={socialIconVariants} whileHover="hover" className="text-gray-600 hover:text-green-600 transition-colors hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]"><MessageCircle /></motion.a>
              <motion.a href="#" target="_blank" variants={socialIconVariants} whileHover="hover" className="text-gray-600 hover:text-blue-600 transition-colors hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]"><Twitter /></motion.a>
              <motion.a href="#" target="_blank" variants={socialIconVariants} whileHover="hover" className="text-gray-600 hover:text-blue-600 transition-colors hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]"><Linkedin /></motion.a>
              <motion.a href="#" target="_blank" variants={socialIconVariants} whileHover="hover" className="text-gray-600 hover:text-blue-600 transition-colors hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]"><Facebook /></motion.a>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-300 text-sm">
          <p>© 2025 Ankit Lab Chemicals | Authorized Partner of Borosil, Wensar, Systonic, Finar, Polylab & Merck</p>
          <p>Managed by <a href="https://ards.in" target="_blank" className="hover:text-blue-600 transition-colors">
            <motion.span
              className="text-white"
              animate={{
                textShadow: [
                  "0 0 5px rgba(255,255,255,0.5)",
                  "0 0 10px rgba(255,255,255,0.8)",
                  "0 0 5px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Alpenrose Digital Solutions
            </motion.span>
          </a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;