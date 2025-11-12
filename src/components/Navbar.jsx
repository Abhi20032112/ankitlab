import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Beaker, ChevronDown, Home, Package, Settings, Award, Mail, FlaskRound, Microscope, TestTube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Beaker },
  {
    name: 'Products',
    path: '/products',
    icon: Package,
    dropdown: [
      { name: 'Chemicals', path: '/products/chemicals', icon: FlaskRound },
      { name: 'Instruments', path: '/products/instruments', icon: Microscope },
      { name: 'Consumables', path: '/products/consumables', icon: Package },
      { name: 'Glassware', path: '/products/glassware', icon: TestTube },
    ],
  },
  { name: 'Services', path: '/services', icon: Settings },
  { name: 'Partnership', path: '/brands', icon: Award },
  { name: 'Contact', path: '/contact', icon: Mail },
];

const AnimatedHamburgerButton = ({ isOpen, onClick }) => {
  const topVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };
  const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  return (
    <motion.button
      onClick={onClick}
      className="w-8 h-8 relative z-50"
      aria-label="Toggle Menu"
      animate={isOpen ? 'open' : 'closed'}
      initial={false}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <motion.span variants={topVariants} className="block absolute h-0.5 w-full bg-gray-900" style={{ top: '6px' }} />
      <motion.span variants={middleVariants} className="block absolute h-0.5 w-full bg-gray-900" style={{ top: '14px' }} />
      <motion.span variants={bottomVariants} className="block absolute h-0.5 w-full bg-gray-900" style={{ top: '22px' }} />
    </motion.button>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };
  
  const NavItem = ({ item }) => {
    if (item.dropdown) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.name}
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="glass-card mt-2 border-slate-200/80 text-slate-700">
            <DropdownMenuItem asChild>
                <Link to="/products" className="cursor-pointer hover:bg-slate-100/50 flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  All Products
                </Link>
            </DropdownMenuItem>
            {item.dropdown.map((subItem) => (
              <DropdownMenuItem key={subItem.name} asChild>
                <Link to={subItem.path} className="cursor-pointer hover:bg-slate-100/50 flex items-center gap-2">
                  <subItem.icon className="w-4 h-4" />
                  {subItem.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
      <motion.div whileHover={{ scale: 1.05 }}>
        <NavLink to={item.path} className={({ isActive }) => `flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600 font-semibold' : ''}`}>
          <item.icon className="w-4 h-4" />
          {item.name}
        </NavLink>
      </motion.div>
    );
  };

  const mobileMenuVariants = {
    open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
    closed: { opacity: 0, y: "-10%", transition: { type: 'spring', stiffness: 120, damping: 20 } },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-40 bg-blue-200"
      >
        <div className="container mx-auto px-6 flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img src="/images/ankit-logo.jpeg" alt="Ankit Lab Chemicals Logo" className="w-8 h-8 rounded-full" />
            </div>
            <span className="text-xl font-bold gradient-text">Ankit Lab Chemicals</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-lg">
            <motion.div
              className="flex items-center gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {navLinks.map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                  }}
                >
                  <NavItem item={item} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button onClick={() => navigate('/contact')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
              Request Quotation
            </Button>
          </div>

          <div className="md:hidden">
            <AnimatedHamburgerButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
        </div>
      </motion.nav>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden fixed inset-0 bg-slate-50/80 backdrop-blur-xl z-30 pt-24"
          >
            <div className="container mx-auto px-6 flex flex-col gap-6 text-2xl text-center items-center justify-center h-full">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="py-2"
                >
                  <motion.button
                    onClick={() => handleNavigation(item.path)}
                    className="w-full text-center text-slate-700 hover:text-blue-500 transition-colors relative flex items-center justify-center gap-2"
                    whileHover="hover"
                  >
                    <item.icon className="w-6 h-6" />
                    {item.name}
                    <motion.div className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-blue-400" variants={{ initial: { scaleX: 0 }, hover: { scaleX: 1 } }} transition={{ duration: 0.3 }} />
                  </motion.button>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Button onClick={() => handleNavigation('/contact')} className="mt-8 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 px-8 py-4 text-xl">
                  Request Quotation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;