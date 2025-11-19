import React, { useState } from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { FlaskRound, Search } from 'lucide-react';

const Chemicals = () => {
    const { toast } = useToast();
    const [searchQuery, setSearchQuery] = useState('');

    const handleQuoteRequest = () => {
        toast({
            title: "Quote Request Submitted",
            description: "Thank you for your interest! We'll get back to you with a quote soon.",
        });
    };

    const products = [
        { title: "Buffer capsules pH 4.00 ± 0.05", description: "High purity buffer capsules from Merck for pH calibration." },
        { title: "Buffer capsules pH 7.00 ± 0.05", description: "High purity buffer capsules from Merck for pH calibration." },
        { title: "Buffer capsules pH 9.20 ± 0.05", description: "High purity buffer capsules from Merck for pH calibration." },
        { title: "Sulfuric acid-Emplura-2.5 Lit.", description: "High purity sulfuric acid from Merck for laboratory use." },
        { title: "Sulfuric acid-Emplura-500ml", description: "High purity sulfuric acid from Merck for laboratory use." },
        { title: "Potassium dichromate-Emplura-500gm", description: "High purity potassium dichromate from Merck for redox titrations." },
        { title: "Ammonium iron(II) sulfate hexahydrate-Emplura-500gm", description: "High purity ammonium iron(II) sulfate from Merck for analytical applications." },
        { title: "Sodium fluoride-Emplura-500gm", description: "High purity sodium fluoride from Merck for laboratory use." },
        { title: "Di-phenyl-Amine indicator-Emparta-100gm", description: "High purity di-phenyl-amine indicator from Merck for chemical analysis." },
        { title: "Sodium hydroxide flakes-Emplura-1Kg", description: "High purity sodium hydroxide flakes from Merck for titration and neutralization." },
        { title: "Methyl red 0.01% indicator solution , 125ml", description: "High purity methyl red indicator solution from Merck for pH indication." },
        { title: "Boric acid powder-Emplura-500gm", description: "High purity boric acid from Merck for buffer preparation." },
        { title: "Bromocresol green 0.04% indicator solution , 125ml", description: "High purity bromocresol green indicator solution from Merck for pH indication." },
        { title: "Potassium hydrogen phthalate Purified-500g", description: "High purity potassium hydrogen phthalate from Merck for standardization." },
        { title: "Potassium chloride-Emplura-500gm", description: "High purity potassium chloride from Merck for laboratory use." },
        { title: "Ammonium acetate-Emplura-500gm", description: "High purity ammonium acetate from Merck for chemical synthesis." },
        { title: "Calcium chloride dehydrate-Emplura-500gm", description: "High purity calcium chloride from Merck for desiccation." },
        { title: "Tri ethanolamine (TEA)-Emplura-500ml", description: "High purity triethanolamine from Merck for organic synthesis." },
        { title: "Hydrochloric acid-Emplura-2.5 Lit.", description: "High purity hydrochloric acid from Merck for chemical analysis." },
        { title: "Hydrochloric acid-Emplura-500ml", description: "High purity hydrochloric acid from Merck for chemical analysis." },
        { title: "Zinc Sulfate-Emplura-500g", description: "High purity zinc sulfate from Merck for laboratory use." },
        { title: "Oxalic acid dehydrate-Emplura-500gm", description: "High purity oxalic acid from Merck for titration." },
        { title: "Potassium dihydrogen phosphate-Emplura-500g", description: "High purity potassium dihydrogen phosphate from Merck for buffer preparation." },
        { title: "Sodium hydrogen carbonate-Emplura-500gm", description: "High purity sodium hydrogen carbonate from Merck for neutralization." },
        { title: "Ascorbic acid-AR-100gm", description: "High purity ascorbic acid from Merck for antioxidant applications." },
        { title: "Charcoal activated for soil test- 250gm", description: "Activated charcoal from Merck for soil testing." },
        { title: "Charcoal activatedfor soil test-500gm", description: "Activated charcoal from Merck for soil testing." },
        { title: "Ammonium heptamolybdate tetra hydrate-Emparta-100gm", description: "High purity ammonium heptamolybdate from Merck for analytical chemistry." },
        { title: "Potassium antimony(III) oxide tartrate hemihydrates-AR-250gm", description: "High purity potassium antimony tartrate from Merck for chemical analysis." },
        { title: "ortho-Phosphoric acid-Emparta-500ml", description: "High purity ortho-phosphoric acid from Merck for pH adjustment." },
        { title: "ortho-Phosphoric acid-Emplura-2.5Ltr", description: "High purity ortho-phosphoric acid from Merck for pH adjustment." },
        { title: "Tin(II) chloride dihydrate-Emplura-100g", description: "High purity tin(II) chloride from Merck for reduction reactions." },
        { title: "Zinc powder-Emplura-500g", description: "High purity zinc powder from Merck for chemical reactions." },
        { title: "Ammonia solution-Emplura-500ml", description: "High purity ammonia solution from Merck for laboratory use." },
        { title: "Ammonia solution-Emplura-2.5Ltr", description: "High purity ammonia solution from Merck for laboratory use." },
        { title: "Acetic acid glacial-Emplura-2.5 Ltr.", description: "High purity glacial acetic acid from Merck for organic synthesis." },
        { title: "Acetic acid glacial-Emplura-500ml", description: "High purity glacial acetic acid from Merck for organic synthesis." },
        { title: "Acetone-Emplura-500ml", description: "High purity acetone from Merck for solvent applications." },
        { title: "Acetone-Emplura-2.5Ltr", description: "High purity acetone from Merck for solvent applications." },
        { title: "Nitric acid-Emplura-2.5 Ltr", description: "High purity nitric acid from Merck for chemical analysis." },
        { title: "Nitric acid-Emplura-500ml", description: "High purity nitric acid from Merck for chemical analysis." },
        { title: "Calcium carbonate precipitated-Emplura-500gm", description: "High purity calcium carbonate from Merck for neutralization." },
        { title: "Titriplex® III Pure (ethylene dinitrilo tetraacetic acid disodium salt dihydrate)-100g", description: "High purity EDTA from Merck for complexometric titrations." },
        { title: "Barium chloride dihydrate-Emplura-500g", description: "High purity barium chloride from Merck for precipitation reactions." },
        { title: "Buffer solution pH 4.00-500ml", description: "High purity buffer solution from Merck for pH calibration." },
        { title: "Buffer solution  pH 7.00-500ml", description: "High purity buffer solution from Merck for pH calibration." },
        { title: "Buffer solution  pH 9.20-500ml", description: "High purity buffer solution from Merck for pH calibration." },
        { title: "Calcium chloride fused-Emplura-500g", description: "High purity fused calcium chloride from Merck for desiccation." },
        { title: "Potassium sulfate-Emplura-500g", description: "High purity potassium sulfate from Merck for laboratory use." },
        { title: "Potassium permanganate-Emplura-500gm", description: "High purity potassium permanganate from Merck for redox titrations." },
        { title: "Sodium hydroxide pellets-Emplura-500gm", description: "High purity sodium hydroxide pellets from Merck for titration." },
        { title: "Ammonium Chloride-500g", description: "High purity ammonium chloride from Emparta for laboratory use." },
        { title: "Sodium carbonate anhydrous-500g", description: "High purity sodium carbonate from Emparta for neutralization." },
        { title: "Ammonium iron (II) sulfate heptahydrate-500g", description: "High purity ammonium iron(II) sulfate from Emparta for analytical applications." },
        { title: "Sodium Sulfate-500g", description: "High purity sodium sulfate from Emparta for laboratory use." },
        { title: "Potassium chloride-500g", description: "High purity potassium chloride from Emparta for laboratory use." },
        { title: "Ammonium Acetate-500g", description: "High purity ammonium acetate from Emparta for chemical synthesis." },
        { title: "Sodium hydroxide pellests-500g", description: "High purity sodium hydroxide pellets from Emparta for titration." },
        { title: "Citric acid monohydrate-500g", description: "High purity citric acid from Emparta for buffer preparation." },
        { title: "Potassium sulfate-500g", description: "High purity potassium sulfate from Emparta for laboratory use." },
        { title: "Sodium fluoride-500g", description: "High purity sodium fluoride from Emparta for laboratory use." },
        { title: "Potassium nitrate-500g", description: "High purity potassium nitrate from Emparta for laboratory use." },
        { title: "Magnesium sulfate-500g", description: "High purity magnesium sulfate from Emparta for laboratory use." },
        { title: "Magnesium chloride-500g", description: "High purity magnesium chloride from Emparta for laboratory use." },
        { title: "Zinc filling-500g", description: "High purity zinc filling from Emparta for chemical reactions." },
        { title: "Sodium chloride-500g", description: "High purity sodium chloride from Emparta for laboratory use." },
        { title: "Calcium chloride-500g", description: "High purity calcium chloride from Emparta for desiccation." },
        { title: "Sodium acetate-250g", description: "High purity sodium acetate from Emparta for buffer preparation." },
        { title: "Edta-100g", description: "High purity EDTA from Emparta for complexometric titrations." },
        { title: "Starch soluble-500g", description: "High purity soluble starch from Emparta for iodometric titrations." },
        { title: "Copper(II) sulfate pentahydrate-500g", description: "High purity copper(II) sulfate from Emparta for chemical reactions." },
        { title: "Silver sulfate-25g", description: "High purity silver sulfate from Emparta for precipitation reactions." },
        { title: "Strontium chloride hexahydrate-250g", description: "High purity strontium chloride from Emparta for laboratory use." },
        { title: "Phenolphthalein indicator-50g", description: "High purity phenolphthalein indicator from Emparta for pH indication." },
        { title: "Hydoxylammoniumchloride-100g", description: "High purity hydroxylammonium chloride from Emparta for chemical analysis." },
        { title: "Potassium iodide-100g", description: "High purity potassium iodide from Emparta for iodometric titrations." },
        { title: "Methyle red-25g", description: "High purity methyl red indicator from Emparta for pH indication." },
        { title: "Sodium tetraphenylborate-10g", description: "High purity sodium tetraphenylborate from Emparta for gravimetric analysis." },
        { title: "Murexide-5g", description: "High purity murexide indicator from Emparta for complexometric titrations." },
        { title: "Bromocresol green-5g", description: "High purity bromocresol green indicator from Emparta for pH indication." },
        { title: "1,10-phenatroline-5g", description: "High purity 1,10-phenanthroline from Emparta for analytical chemistry." },
        { title: "SPANDS-5g", description: "High purity SPANDS from Emparta for analytical applications." },
        { title: "Methyle orange-25g", description: "High purity methyl orange indicator from Emparta for pH indication." },
        { title: "Di-potassium hydrogen phophate-500g", description: "High purity dipotassium hydrogen phosphate from Emparta for buffer preparation." },
        { title: "Sodium hydrogen carbonate-500g", description: "High purity sodium hydrogen carbonate from Emparta for neutralization." },
        { title: "Potassium hydrogen pellets-500g", description: "High purity potassium hydrogen pellets from Emparta for laboratory use." },
        { title: "Hydrazinium sulfate-500g", description: "High purity hydrazinium sulfate from Emparta for chemical reactions." },
        { title: "Nitric acid-2.5L", description: "High purity nitric acid from Emparta for chemical analysis." },
        { title: "Acetone-2.5L", description: "High purity acetone from Emparta for solvent applications." },
        { title: "Acetic acid glacial-2.5L", description: "High purity glacial acetic acid from Emparta for organic synthesis." },
        { title: "Buffer capsules pH 4.00 ± 0.05", description: "High purity buffer capsules from Finar for pH calibration." },
        { title: "Buffer capsules pH 7.00 ± 0.05", description: "High purity buffer capsules from Finar for pH calibration." },
        { title: "Buffer capsules pH 9.20 ± 0.05", description: "High purity buffer capsules from Finar for pH calibration." },
        { title: "Sulphuric acid extrapure, 2.5 Lit.", description: "High purity sulfuric acid from Finar for laboratory use." },
        { title: "Sulphuric acid extrapure, 500ml", description: "High purity sulfuric acid from Finar for laboratory use." },
        { title: "Potassium dichromate extrapure , 500gm", description: "High purity potassium dichromate from Finar for redox titrations." },
        { title: "Ammonium ferrous sulphate hexahydrate extrapure , 500gm", description: "High purity ammonium iron(II) sulfate from Finar for analytical applications." },
        { title: "Sodium fluoride extrapure, 500gm", description: "High purity sodium fluoride from Finar for laboratory use." },
        { title: "Di-phenyl-Amine indicator , 100gm", description: "High purity di-phenyl-amine indicator from Finar for chemical analysis." },
        { title: "Sodium hydroxide flakes extrapure, 500g", description: "High purity sodium hydroxide flakes from Finar for titration." },
        { title: "Methyl red solution , 125ml", description: "High purity methyl red indicator solution from Finar for pH indication." },
        { title: "Boric acid crystals extrapure  , 500gm", description: "High purity boric acid from Finar for buffer preparation." },
        { title: "Bromocresol green solution , 125ml", description: "High purity bromocresol green indicator solution from Finar for pH indication." },
        { title: "Potassium hydrogenphthalate extrapure, 500g", description: "High purity potassium hydrogen phthalate from Finar for standardization." },
        { title: "Potassium chloride extrapure, 500gm", description: "High purity potassium chloride from Finar for laboratory use." },
        { title: "Ammonium acetate extrapure , 500gm", description: "High purity ammonium acetate from Finar for chemical synthesis." },
        { title: "Calcium chloride dihydrate extrapure , 500gm", description: "High purity calcium chloride from Finar for desiccation." },
        { title: "Gum acacia powder, 500g", description: "High purity gum acacia from Finar for emulsification." },
        { title: "Diethylene triamine pentaacetic extrapure, 100G", description: "High purity DTPA from Finar for complexometric titrations." },
        { title: "Triethanolamine extrapure, 500ml", description: "High purity triethanolamine from Finar for organic synthesis." },
        { title: "Hydrochloric acid extrapure, 2.5 Lit.", description: "High purity hydrochloric acid from Finar for chemical analysis." },
        { title: "Hydrochloric acid extrapure, 500ml", description: "High purity hydrochloric acid from Finar for chemical analysis." },
        { title: "Zinc sulphate heptahydrate extrapure, 500g", description: "High purity zinc sulfate from Finar for laboratory use." },
        { title: "Oxalic acid dihydrate extrapure , 500gm", description: "High purity oxalic acid from Finar for titration." },
        { title: "Potassium di-hydrogen ortho-phosphate extrapure,500g", description: "High purity potassium dihydrogen phosphate from Finar for buffer preparation." },
        { title: "Sodium bicarbonate anhydrous extrapure, 500gm", description: "High purity sodium bicarbonate from Finar for neutralization." },
        { title: "L (+) Ascorbic acid extrapure, 100gm", description: "High purity ascorbic acid from Finar for antioxidant applications." },
        { title: "Activated charcoal extrapure, 500gm", description: "Activated charcoal from Finar for adsorption." },
        { title: "Ammonium molybdate tetrahydrate extrapure , 100gm", description: "High purity ammonium molybdate from Finar for analytical chemistry." },
        { title: "Potassium antimony tartarate, 250gm", description: "High purity potassium antimony tartrate from Finar for chemical analysis." },
        { title: "ortho-Phosphoric acid 85% , 500ml", description: "High purity ortho-phosphoric acid from Finar for pH adjustment." },
        { title: "ortho-Phosphoric acid 85% , 2.5Ltr", description: "High purity ortho-phosphoric acid from Finar for pH adjustment." },
        { title: "Stannous chloride dihydrate extrapure, 100g", description: "High purity tin(II) chloride from Finar for reduction reactions." },
        { title: "Zinc (metal) dust 325 mesh extrapure, 500g", description: "High purity zinc dust from Finar for chemical reactions." },
        { title: "Ammonia solution extrapure, 500ml", description: "High purity ammonia solution from Finar for laboratory use." },
        { title: "Acetic acid glacial extrapure, 2.5 Lit.", description: "High purity glacial acetic acid from Finar for organic synthesis." },
        { title: "Acetic acid glacial extrapurel, 500ml", description: "High purity glacial acetic acid from Finar for organic synthesis." },
        { title: "Acetone extrapure, 500ml", description: "High purity acetone from Finar for solvent applications." },
        { title: "Acetone extrapure, 2.5 Ltr", description: "High purity acetone from Finar for solvent applications." },
        { title: "Azomethane-AR-H-10g", description: "High purity azomethane from Finar for analytical applications." },
        { title: "Nitric acid extrapure, 2.5 Ltr", description: "High purity nitric acid from Finar for chemical analysis." },
        { title: "Nitric acid extrapure, 500ml", description: "High purity nitric acid from Finar for chemical analysis." },
        { title: "Calcium carbonate extrapure , 500gm", description: "High purity calcium carbonate from Finar for neutralization." },
        { title: "EDTA. di - sodium salt dihydrate extrapure-100g", description: "High purity EDTA from Finar for complexometric titrations." },
        { title: "Barium chloride dihydrate extrapure, 500g", description: "High purity barium chloride from Finar for precipitation reactions." },
        { title: "Buffer solution pH 4.00, 500ml", description: "High purity buffer solution from Finar for pH calibration." },
        { title: "Buffer solution  pH 7.00, 500ml", description: "High purity buffer solution from Finar for pH calibration." },
        { title: "Buffer solution  pH 9.20, 500ml", description: "High purity buffer solution from Finar for pH calibration." },
        { title: "Calcium chloride fused extrapure, 500g", description: "High purity fused calcium chloride from Finar for desiccation." },
        { title: "Potassium sulphate extrapure 500g", description: "High purity potassium sulfate from Finar for laboratory use." },
        { title: "Potassium permanganate crystals extrapure, 500gm", description: "High purity potassium permanganate from Finar for redox titrations." },
        { title: "Sodium hydroxide pellets extrapure, 500gm", description: "High purity sodium hydroxide pellets from Finar for titration." },
        { title: "Cupric sulphate pentahydrate extrapure, 500g", description: "High purity copper(II) sulfate from Finar for chemical reactions." },
        { title: "Finklin (neutral pH laboratory detergent)-5 Ltr", description: "Neutral pH laboratory detergent from Finar for cleaning." },
        { title: "Sodium bromide-500g", description: "High purity sodium bromide from Finar for laboratory use." },
        { title: "Petrolium ether-500ml", description: "High purity petroleum ether from Finar for solvent extraction." },
        { title: "Diethile ether-500ml", description: "High purity diethyl ether from Finar for solvent applications." },
        { title: "Ammonia solution-2.5L", description: "High purity ammonia solution from Finar for laboratory use." },
    ];

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">Sourced from leading brands like Merck and Finar for unmatched purity.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8">
                            <div className="relative max-w-md mx-auto">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <Input
                                    type="text"
                                    placeholder="Search chemicals..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 pr-4 py-2 w-full rounded-lg border-slate-300 focus:border-teal-500 focus:ring-teal-500"
                                />
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredProducts.map((product, index) => (
                                <motion.div key={product.title} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="glass-card group hover:bg-white/80 transition-all duration-300">
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                                        <p className="text-slate-500 mb-6 leading-relaxed h-24">{product.description}</p>
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
