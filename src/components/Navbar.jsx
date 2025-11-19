import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Beaker, ChevronDown, Home, Package, Settings, Award, Mail, FlaskRound, Microscope, TestTube, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';
import { allProducts } from '@/data/products';

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
      <motion.span variants={topVariants} className="block absolute h-0.5 w-full bg-white" style={{ top: '6px' }} />
      <motion.span variants={middleVariants} className="block absolute h-0.5 w-full bg-white" style={{ top: '14px' }} />
      <motion.span variants={bottomVariants} className="block absolute h-0.5 w-full bg-white" style={{ top: '22px' }} />
    </motion.button>
  );
};

const allSuggestions = [
  // Categories
  { name: 'Chemicals', type: 'category', path: '/products/chemicals' },
  { name: 'Glassware', type: 'category', path: '/products/glassware' },
  { name: 'Instruments', type: 'category', path: '/products/instruments' },
  { name: 'Consumables', type: 'category', path: '/products/consumables' },
  // Chemicals
  { name: 'Buffer capsules pH 4.00 ± 0.05', type: 'product' },
  { name: 'Buffer capsules pH 7.00 ± 0.05', type: 'product' },
  { name: 'Buffer capsules pH 9.20 ± 0.05', type: 'product' },
  { name: 'Sulfuric acid-Emplura-2.5 Lit.', type: 'product' },
  { name: 'Sulfuric acid-Emplura-500ml', type: 'product' },
  { name: 'Potassium dichromate-Emplura-500gm', type: 'product' },
  { name: 'Ammonium iron(II) sulfate hexahydrate-Emplura-500gm', type: 'product' },
  { name: 'Sodium fluoride-Emplura-500gm', type: 'product' },
  { name: 'Di-phenyl-Amine indicator-Emparta-100gm', type: 'product' },
  { name: 'Sodium hydroxide flakes-Emplura-1Kg', type: 'product' },
  { name: 'Methyl red 0.01% indicator solution , 125ml', type: 'product' },
  { name: 'Boric acid powder-Emplura-500gm', type: 'product' },
  { name: 'Bromocresol green 0.04% indicator solution , 125ml', type: 'product' },
  { name: 'Potassium hydrogen phthalate Purified-500g', type: 'product' },
  { name: 'Potassium chloride-Emplura-500gm', type: 'product' },
  { name: 'Ammonium acetate-Emplura-500gm', type: 'product' },
  { name: 'Calcium chloride dehydrate-Emplura-500gm', type: 'product' },
  { name: 'Tri ethanolamine (TEA)-Emplura-500ml', type: 'product' },
  { name: 'Hydrochloric acid-Emplura-2.5 Lit.', type: 'product' },
  { name: 'Hydrochloric acid-Emplura-500ml', type: 'product' },
  { name: 'Zinc Sulfate-Emplura-500g', type: 'product' },
  { name: 'Oxalic acid dehydrate-Emplura-500gm', type: 'product' },
  { name: 'Potassium dihydrogen phosphate-Emplura-500g', type: 'product' },
  { name: 'Sodium hydrogen carbonate-Emplura-500gm', type: 'product' },
  { name: 'Ascorbic acid-AR-100gm', type: 'product' },
  { name: 'Charcoal activated for soil test- 250gm', type: 'product' },
  { name: 'Charcoal activatedfor soil test-500gm', type: 'product' },
  { name: 'Ammonium heptamolybdate tetra hydrate-Emparta-100gm', type: 'product' },
  { name: 'Potassium antimony(III) oxide tartrate hemihydrates-AR-250gm', type: 'product' },
  { name: 'ortho-Phosphoric acid-Emparta-500ml', type: 'product' },
  { name: 'ortho-Phosphoric acid-Emplura-2.5Ltr', type: 'product' },
  { name: 'Tin(II) chloride dihydrate-Emplura-100g', type: 'product' },
  { name: 'Zinc powder-Emplura-500g', type: 'product' },
  { name: 'Ammonia solution-Emplura-500ml', type: 'product' },
  { name: 'Ammonia solution-Emplura-2.5Ltr', type: 'product' },
  { name: 'Acetic acid glacial-Emplura-2.5 Ltr.', type: 'product' },
  { name: 'Acetic acid glacial-Emplura-500ml', type: 'product' },
  { name: 'Acetone-Emplura-500ml', type: 'product' },
  { name: 'Acetone-Emplura-2.5Ltr', type: 'product' },
  { name: 'Nitric acid-Emplura-2.5 Ltr', type: 'product' },
  { name: 'Nitric acid-Emplura-500ml', type: 'product' },
  { name: 'Calcium carbonate precipitated-Emplura-500gm', type: 'product' },
  { name: 'Titriplex® III Pure (ethylene dinitrilo tetraacetic acid disodium salt dihydrate)-100g', type: 'product' },
  { name: 'Barium chloride dihydrate-Emplura-500g', type: 'product' },
  { name: 'Buffer solution pH 4.00-500ml', type: 'product' },
  { name: 'Buffer solution  pH 7.00-500ml', type: 'product' },
  { name: 'Buffer solution  pH 9.20-500ml', type: 'product' },
  { name: 'Calcium chloride fused-Emplura-500g', type: 'product' },
  { name: 'Potassium sulfate-Emplura-500g', type: 'product' },
  { name: 'Potassium permanganate-Emplura-500gm', type: 'product' },
  { name: 'Sodium hydroxide pellets-Emplura-500gm', type: 'product' },
  { name: 'Ammonium Chloride-500g', type: 'product' },
  { name: 'Sodium carbonate anhydrous-500g', type: 'product' },
  { name: 'Ammonium iron (II) sulfate heptahydrate-500g', type: 'product' },
  { name: 'Sodium Sulfate-500g', type: 'product' },
  { name: 'Potassium chloride-500g', type: 'product' },
  { name: 'Ammonium Acetate-500g', type: 'product' },
  { name: 'Sodium hydroxide pellests-500g', type: 'product' },
  { name: 'Citric acid monohydrate-500g', type: 'product' },
  { name: 'Potassium sulfate-500g', type: 'product' },
  { name: 'Sodium fluoride-500g', type: 'product' },
  { name: 'Potassium nitrate-500g', type: 'product' },
  { name: 'Magnesium sulfate-500g', type: 'product' },
  { name: 'Magnesium chloride-500g', type: 'product' },
  { name: 'Zinc filling-500g', type: 'product' },
  { name: 'Sodium chloride-500g', type: 'product' },
  { name: 'Calcium chloride-500g', type: 'product' },
  { name: 'Sodium acetate-250g', type: 'product' },
  { name: 'Edta-100g', type: 'product' },
  { name: 'Starch soluble-500g', type: 'product' },
  { name: 'Copper(II) sulfate pentahydrate-500g', type: 'product' },
  { name: 'Silver sulfate-25g', type: 'product' },
  { name: 'Strontium chloride hexahydrate-250g', type: 'product' },
  { name: 'Phenolphthalein indicator-50g', type: 'product' },
  { name: 'Hydoxylammoniumchloride-100g', type: 'product' },
  { name: 'Potassium iodide-100g', type: 'product' },
  { name: 'Methyle red-25g', type: 'product' },
  { name: 'Sodium tetraphenylborate-10g', type: 'product' },
  { name: 'Murexide-5g', type: 'product' },
  { name: 'Bromocresol green-5g', type: 'product' },
  { name: '1,10-phenatroline-5g', type: 'product' },
  { name: 'SPANDS-5g', type: 'product' },
  { name: 'Methyle orange-25g', type: 'product' },
  { name: 'Di-potassium hydrogen phophate-500g', type: 'product' },
  { name: 'Sodium hydrogen carbonate-500g', type: 'product' },
  { name: 'Potassium hydrogen pellets-500g', type: 'product' },
  { name: 'Hydrazinium sulfate-500g', type: 'product' },
  { name: 'Nitric acid-2.5L', type: 'product' },
  { name: 'Acetone-2.5L', type: 'product' },
  { name: 'Acetic acid glacial-2.5L', type: 'product' },
  { name: 'Buffer capsules pH 4.00 ± 0.05', type: 'product' },
  { name: 'Buffer capsules pH 7.00 ± 0.05', type: 'product' },
  { name: 'Buffer capsules pH 9.20 ± 0.05', type: 'product' },
  { name: 'Sulphuric acid extrapure, 2.5 Lit.', type: 'product' },
  { name: 'Sulphuric acid extrapure, 500ml', type: 'product' },
  { name: 'Potassium dichromate extrapure , 500gm', type: 'product' },
  { name: 'Ammonium ferrous sulphate hexahydrate extrapure , 500gm', type: 'product' },
  { name: 'Sodium fluoride extrapure, 500gm', type: 'product' },
  { name: 'Di-phenyl-Amine indicator , 100gm', type: 'product' },
  { name: 'Sodium hydroxide flakes extrapure, 500g', type: 'product' },
  { name: 'Methyl red solution , 125ml', type: 'product' },
  { name: 'Boric acid crystals extrapure  , 500gm', type: 'product' },
  { name: 'Bromocresol green solution , 125ml', type: 'product' },
  { name: 'Potassium hydrogenphthalate extrapure, 500g', type: 'product' },
  { name: 'Potassium chloride extrapure, 500gm', type: 'product' },
  { name: 'Ammonium acetate extrapure , 500gm', type: 'product' },
  { name: 'Calcium chloride dihydrate extrapure , 500gm', type: 'product' },
  { name: 'Gum acacia powder, 500g', type: 'product' },
  { name: 'Diethylene triamine pentaacetic extrapure, 100G', type: 'product' },
  { name: 'Triethanolamine extrapure, 500ml', type: 'product' },
  { name: 'Hydrochloric acid extrapure, 2.5 Lit.', type: 'product' },
  { name: 'Hydrochloric acid extrapure, 500ml', type: 'product' },
  { name: 'Zinc sulphate heptahydrate extrapure, 500g', type: 'product' },
  { name: 'Oxalic acid dihydrate extrapure , 500gm', type: 'product' },
  { name: 'Potassium di-hydrogen ortho-phosphate extrapure,500g', type: 'product' },
  { name: 'Sodium bicarbonate anhydrous extrapure, 500gm', type: 'product' },
  { name: 'L (+) Ascorbic acid extrapure, 100gm', type: 'product' },
  { name: 'Activated charcoal extrapure, 500gm', type: 'product' },
  { name: 'Ammonium molybdate tetrahydrate extrapure , 100gm', type: 'product' },
  { name: 'Potassium antimony tartarate, 250gm', type: 'product' },
  { name: 'ortho-Phosphoric acid 85% , 500ml', type: 'product' },
  { name: 'ortho-Phosphoric acid 85% , 2.5Ltr', type: 'product' },
  { name: 'Stannous chloride dihydrate extrapure, 100g', type: 'product' },
  { name: 'Zinc (metal) dust 325 mesh extrapure, 500g', type: 'product' },
  { name: 'Ammonia solution extrapure, 500ml', type: 'product' },
  { name: 'Acetic acid glacial extrapure, 2.5 Lit.', type: 'product' },
  { name: 'Acetic acid glacial extrapurel, 500ml', type: 'product' },
  { name: 'Acetone extrapure, 500ml', type: 'product' },
  { name: 'Acetone extrapure, 2.5 Ltr', type: 'product' },
  { name: 'Azomethane-AR-H-10g', type: 'product' },
  { name: 'Nitric acid extrapure, 2.5 Ltr', type: 'product' },
  { name: 'Nitric acid extrapure, 500ml', type: 'product' },
  { name: 'Calcium carbonate extrapure , 500gm', type: 'product' },
  { name: 'EDTA. di - sodium salt dihydrate extrapure-100g', type: 'product' },
  { name: 'Barium chloride dihydrate extrapure, 500g', type: 'product' },
  { name: 'Buffer solution pH 4.00, 500ml', type: 'product' },
  { name: 'Buffer solution  pH 7.00, 500ml', type: 'product' },
  { name: 'Buffer solution  pH 9.20, 500ml', type: 'product' },
  { name: 'Calcium chloride fused extrapure, 500g', type: 'product' },
  { name: 'Potassium sulphate extrapure 500g', type: 'product' },
  { name: 'Potassium permanganate crystals extrapure, 500gm', type: 'product' },
  { name: 'Sodium hydroxide pellets extrapure, 500gm', type: 'product' },
  { name: 'Cupric sulphate pentahydrate extrapure, 500g', type: 'product' },
  { name: 'Finklin (neutral pH laboratory detergent)-5 Ltr', type: 'product' },
  { name: 'Sodium bromide-500g', type: 'product' },
  { name: 'Petrolium ether-500ml', type: 'product' },
  { name: 'Diethile ether-500ml', type: 'product' },
  { name: 'Ammonia solution-2.5L', type: 'product' },
  // Glassware
  { name: 'Low form beaker with spout-50 ml', type: 'product' },
  { name: 'Conical Flask Narrow Mouth with Rim-100 ml', type: 'product' },
  { name: 'Volumetric Flask Class A Narrow Mouth Clear-25 ml', type: 'product' },
  { name: 'Glass Filter Funnel - 100mm', type: 'product' },
  { name: 'Mohr Pipette Class A-5 ML', type: 'product' },
  { name: 'Burette with boroflo stopcock class-A- 50 ML', type: 'product' },
  // Instruments
  { name: 'Visiscope Spectrophotometer (340nm-990nm) with 2 position sample holder', type: 'product' },
  { name: 'Visible Spectrophotometer (Resolution 2nm)', type: 'product' },
  { name: 'μC Based Conductivity Meter with cell (1.0 CC) and Temp. probe', type: 'product' },
  { name: 'μC based pH system with electrode & Temp. probe ( Auto Temp. Compensation, 3 point calibration, Resol. 0.01 pH)', type: 'product' },
  { name: 'Analytical Balance', type: 'product' },
  { name: 'Moisture Analyzer', type: 'product' },
  // Consumables
  { name: 'Reagent Bottle-50ML', type: 'product' },
  { name: 'Wide mouth bottle-60ml (Code-33306)', type: 'product' },
  { name: 'N95 Mask without respiratory valve -(Code-5P95)', type: 'product' },
  { name: 'Safety Goggles with vent -(Code-81352)', type: 'product' },
  { name: 'Pipette pump-25ml (Code- 20003)', type: 'product' },
  { name: 'Wash Bottle-500ml (Code- 36603)', type: 'product' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();
  const { toast } = useToast();

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (trimmed) {
      const matches = allProducts.filter(p =>
        p.title.toLowerCase().includes(trimmed.toLowerCase())
      );
      if (matches.length === 0) {
        toast({
          title: "No product found",
          description: `No product matches "${trimmed}".`,
          variant: "destructive",
        });
      } else {
        const bestMatch = matches[0];
        const slug = slugify(bestMatch.title);
        navigate(`/products/${slug}`);
      }
    } else {
      toast({
        title: "Search term required",
        description: "Please enter a product name to search.",
        variant: "destructive",
      });
    }
    setSearchTerm('');
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      const filtered = allSuggestions.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setShowSuggestions(false);
    navigate(`/products/${slugify(suggestion.name)}`);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  const NavItem = ({ item }) => {
    if (item.dropdown) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 text-white hover:text-cyan-300 transition-colors"
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
        <NavLink to={item.path} className={({ isActive }) => `flex items-center gap-1 text-white hover:text-cyan-300 transition-colors ${isActive ? 'text-cyan-300 font-semibold' : ''}`}>
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
        className="fixed top-0 left-0 right-0 z-40 gradient-bg-primary"
      >
        <div className="container mx-auto px-6 flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <img src="/images/ankit-logo.jpeg" alt="Ankit Lab Chemicals Logo" className="w-12 h-12 rounded-full" />
            </div>
            <span className="text-xl font-bold text-white">Ankit Lab Chemicals</span>
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
            <div className="relative">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search products, instruments, and chemicals…"
                  value={searchTerm}
                  onChange={handleInputChange}
                  className="w-64 pl-10 pr-12 py-2 bg-black/20 border border-cyan-400/50 text-white placeholder-cyan-200/70 rounded-full shadow-lg shadow-cyan-500/20 focus:shadow-cyan-500/40 focus:border-cyan-300 transition-all duration-300 hover:shadow-cyan-500/30"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-300" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-300 hover:text-cyan-100 transition-colors">
                      <Filter className="w-5 h-5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="glass-card mt-2 border-slate-200/80 text-slate-700">
                    <DropdownMenuItem onClick={() => handleCategoryChange('all')}>
                      All Categories
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleCategoryChange('chemicals')}>
                      <FlaskRound className="w-4 h-4 mr-2" />
                      Chemicals
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleCategoryChange('instruments')}>
                      <Microscope className="w-4 h-4 mr-2" />
                      Instruments
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleCategoryChange('consumables')}>
                      <Package className="w-4 h-4 mr-2" />
                      Consumables
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleCategoryChange('glassware')}>
                      <TestTube className="w-4 h-4 mr-2" />
                      Glassware
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </form>
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-slate-800/90 backdrop-blur-sm border border-cyan-400/50 rounded-lg shadow-lg shadow-cyan-500/20 z-50">
                  {filteredSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 hover:bg-cyan-500/20 cursor-pointer text-white first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {suggestion.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <motion.a href="https://wa.me/7903894473" target="_blank" className="text-gray-600 hover:text-green-600 transition-colors hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </motion.a>
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
              <div className="relative w-full max-w-sm mb-4">
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="text"
                    placeholder="Search products, instruments, and chemicals…"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-black/20 border border-cyan-400/50 text-white placeholder-cyan-200/70 rounded-full shadow-lg shadow-cyan-500/20 focus:shadow-cyan-500/40 focus:border-cyan-300 transition-all duration-300 hover:shadow-cyan-500/30"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-300" />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-300 hover:text-cyan-100 transition-colors">
                        <Filter className="w-5 h-5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="glass-card mt-2 border-slate-200/80 text-slate-700">
                      <DropdownMenuItem onClick={() => handleCategoryChange('all')}>
                        All Categories
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleCategoryChange('chemicals')}>
                        <FlaskRound className="w-4 h-4 mr-2" />
                        Chemicals
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleCategoryChange('instruments')}>
                        <Microscope className="w-4 h-4 mr-2" />
                        Instruments
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleCategoryChange('consumables')}>
                        <Package className="w-4 h-4 mr-2" />
                        Consumables
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleCategoryChange('glassware')}>
                        <TestTube className="w-4 h-4 mr-2" />
                        Glassware
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </form>
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="absolute top-full mt-2 w-full bg-slate-800/90 backdrop-blur-sm border border-cyan-400/50 rounded-lg shadow-lg shadow-cyan-500/20 z-50">
                    {filteredSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-4 py-2 hover:bg-cyan-500/20 cursor-pointer text-white first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {suggestion.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
                <div className="flex items-center gap-4 mt-8">
                  <motion.a href="https://wa.me/7903894473" target="_blank" className="text-gray-600 hover:text-green-600 transition-colors hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </motion.a>
                  <Button onClick={() => handleNavigation('/contact')} className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 px-8 py-4 text-xl">
                    Request Quotation
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;