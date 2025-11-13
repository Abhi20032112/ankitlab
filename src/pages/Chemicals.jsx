import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FlaskRound, ChevronDown, ChevronUp } from 'lucide-react';

const Chemicals = () => {
    const navigate = useNavigate();
    const [expandedProduct, setExpandedProduct] = useState(null);

    const handleQuoteRequest = () => {
        navigate('/contact');
    };

    const toggleDetails = (index) => {
        setExpandedProduct(expandedProduct === index ? null : index);
    };

    const products = [
        // Merck Chemicals
        {
            title: "Buffer capsules pH 4.00 ± 0.05",
            description: "Buffer capsules for accurate pH calibration.",
            details: "Merck buffer capsules providing precise pH 4.00 calibration with ±0.05 accuracy. Ideal for pH meter calibration and quality control."
        },
        {
            title: "Buffer capsules pH 7.00 ± 0.05",
            description: "Buffer capsules for neutral pH calibration.",
            details: "Merck buffer capsules for pH 7.00 calibration with high accuracy. Essential for maintaining pH standards in laboratory measurements."
        },
        {
            title: "Buffer capsules pH 9.20 ± 0.05",
            description: "Buffer capsules for alkaline pH calibration.",
            details: "Merck buffer capsules ensuring accurate pH 9.20 calibration. Used in various analytical procedures requiring precise pH control."
        },
        {
            title: "Sulfuric acid-Emplura-2.5 Lit.",
            description: "High purity sulfuric acid for laboratory use.",
            details: "Emplura grade sulfuric acid with 98% purity. Ideal for pH adjustment, chemical synthesis, and analytical applications. Supplied in 2.5L bottles with safety caps."
        },
        {
            title: "Sulfuric acid-Emplura-500ml",
            description: "Concentrated sulfuric acid in smaller volume.",
            details: "500ml bottle of Emplura grade sulfuric acid. Perfect for smaller scale applications and laboratory experiments."
        },
        {
            title: "Potassium dichromate-Emplura-500gm",
            description: "Potassium dichromate for redox titrations.",
            details: "Analytical grade K2Cr2O7. Primary standard for redox titrations and as an oxidizing agent. Supplied in 500g amber bottles with desiccant."
        },
        {
            title: "Ammonium iron(II) sulfate hexahydrate-Emplura-500gm",
            description: "Ammonium iron(II) sulfate for analytical chemistry.",
            details: "500g of Emplura grade ammonium iron(II) sulfate hexahydrate. Used in redox reactions and as a reducing agent in titrations."
        },
        {
            title: "Sodium fluoride-Emplura-500gm",
            description: "Sodium fluoride for various chemical applications.",
            details: "500g Emplura grade sodium fluoride. Used in water fluoridation, glass etching, and as a reagent in analytical chemistry."
        },
        {
            title: "Di-phenyl-Amine indicator-Emparta-100gm",
            description: "Diphenylamine indicator for redox titrations.",
            details: "100g Emparta grade diphenylamine indicator. Used for detecting the endpoint in redox titrations, particularly in iron determinations."
        },
        {
            title: "Sodium hydroxide flakes-Emplura-1Kg",
            description: "Sodium hydroxide flakes for titration and neutralization.",
            details: "98% pure NaOH flakes. Excellent for volumetric analysis, soap making, and pH adjustment. Comes in 1Kg sealed containers to prevent moisture absorption."
        },
        {
            title: "Methyl red 0.01% indicator solution , 125ml",
            description: "Methyl red indicator solution for pH determination.",
            details: "125ml of 0.01% methyl red indicator solution. Changes color around pH 4.4-6.2, used in acid-base titrations."
        },
        {
            title: "Boric acid powder-Emplura-500gm",
            description: "Boric acid for buffer preparation and preservation.",
            details: "500g Emplura grade boric acid powder. Used in buffer solutions, eye washes, and as a mild antiseptic."
        },
        {
            title: "Bromocresol green 0.04% indicator solution , 125ml",
            description: "Bromocresol green indicator for pH measurement.",
            details: "125ml of 0.04% bromocresol green indicator solution. Color change from yellow to blue around pH 3.8-5.4."
        },
        {
            title: "Potassium hydrogen phthalate Purified-500g",
            description: "Primary standard for acid-base titrations.",
            details: "500g purified potassium hydrogen phthalate. Used as a primary standard in volumetric analysis and pH calibration."
        },
        {
            title: "Potassium chloride-Emplura-500gm",
            description: "Potassium chloride for electrolyte solutions.",
            details: "500g Emplura grade potassium chloride. Used in physiological solutions, buffers, and as a reference electrolyte."
        },
        {
            title: "Ammonium acetate-Emplura-500gm",
            description: "Ammonium acetate for buffer solutions.",
            details: "500g Emplura grade ammonium acetate. Used in buffers, as a diuretic, and in organic synthesis."
        },
        {
            title: "Calcium chloride dehydrate-Emplura-500gm",
            description: "Calcium chloride for desiccation and solutions.",
            details: "500g Emplura grade calcium chloride dihydrate. Used as a desiccant, in brine solutions, and for road de-icing."
        },
        {
            title: "Tri ethanolamine (TEA)-Emplura-500ml",
            description: "Triethanolamine for pH adjustment and surfactants.",
            details: "500ml Emplura grade triethanolamine. Used in pH control, as an emulsifier, and in cosmetic formulations."
        },
        {
            title: "Hydrochloric acid-Emplura-2.5 Lit.",
            description: "Concentrated hydrochloric acid for chemical analysis.",
            details: "37% concentrated HCl, Emplura grade. Perfect for metal cleaning, pH control, and as a reagent in various analytical procedures. Comes in durable 2.5L containers."
        },
        {
            title: "Hydrochloric acid-Emplura-500ml",
            description: "Hydrochloric acid in 500ml volume.",
            details: "500ml bottle of Emplura grade hydrochloric acid. Suitable for smaller scale laboratory applications."
        },
        {
            title: "Zinc Sulfate-Emplura-500g",
            description: "Zinc sulfate for nutritional supplements and analysis.",
            details: "500g Emplura grade zinc sulfate. Used in zinc deficiency treatments and as a reagent in analytical chemistry."
        },
        {
            title: "Oxalic acid dehydrate-Emplura-500gm",
            description: "Oxalic acid for cleaning and analysis.",
            details: "500g Emplura grade oxalic acid dihydrate. Used for rust removal, bleaching, and as a reducing agent."
        },
        {
            title: "Potassium dihydrogen phosphate-Emplura-500g",
            description: "Potassium dihydrogen phosphate for buffers.",
            details: "500g Emplura grade potassium dihydrogen phosphate. Used in buffer solutions and as a fertilizer component."
        },
        {
            title: "Sodium hydrogen carbonate-Emplura-500gm",
            description: "Sodium bicarbonate for neutralization and baking.",
            details: "500g Emplura grade sodium hydrogen carbonate. Used for pH control, in baking, and as an antacid."
        },
        {
            title: "Ascorbic acid-AR-100gm",
            description: "Vitamin C for antioxidant applications.",
            details: "100g analytical reagent grade ascorbic acid. Used as an antioxidant, in vitamin supplements, and redox titrations."
        },
        {
            title: "Charcoal activated for soil test- 250gm",
            description: "Activated charcoal for soil analysis.",
            details: "250g activated charcoal specifically for soil testing. Used in soil pH and nutrient analysis procedures."
        },
        {
            title: "Charcoal activatedfor soil test-500gm",
            description: "Larger quantity activated charcoal for soil tests.",
            details: "500g activated charcoal for comprehensive soil testing applications."
        },
        {
            title: "Ammonium heptamolybdate tetra hydrate-Emparta-100gm",
            description: "Ammonium molybdate for phosphate determination.",
            details: "100g Emparta grade ammonium heptamolybdate tetrahydrate. Used in phosphate analysis and as a catalyst."
        },
        {
            title: "Potassium antimony(III) oxide tartrate hemihydrates-AR-250gm",
            description: "Tartar emetic for analytical chemistry.",
            details: "250g analytical reagent grade potassium antimony(III) oxide tartrate. Used in microscopy and as a reagent."
        },
        {
            title: "ortho-Phosphoric acid-Emparta-500ml",
            description: "Phosphoric acid for pH adjustment.",
            details: "500ml Emparta grade orthophosphoric acid. Used in pH control, rust removal, and as a food additive."
        },
        {
            title: "ortho-Phosphoric acid-Emplura-2.5Ltr",
            description: "Larger volume phosphoric acid.",
            details: "2.5L Emplura grade orthophosphoric acid for industrial and laboratory applications."
        },
        {
            title: "Tin(II) chloride dihydrate-Emplura-100g",
            description: "Stannous chloride for reducing agent.",
            details: "100g Emplura grade tin(II) chloride dihydrate. Used as a reducing agent in analytical chemistry."
        },
        {
            title: "Zinc powder-Emplura-500g",
            description: "Zinc powder for chemical reactions.",
            details: "500g Emplura grade zinc powder. Used in organic synthesis and as a reducing agent."
        },
        {
            title: "Ammonia solution-Emplura-500ml",
            description: "Ammonia solution for cleaning and analysis.",
            details: "500ml Emplura grade ammonia solution. Used for cleaning, pH adjustment, and in qualitative analysis."
        },
        {
            title: "Ammonia solution-Emplura-2.5Ltr",
            description: "Larger volume ammonia solution.",
            details: "2.5L Emplura grade ammonia solution for various laboratory and industrial uses."
        },
        {
            title: "Acetic acid glacial-Emplura-2.5 Ltr.",
            description: "Glacial acetic acid for organic synthesis.",
            details: "99.8% pure glacial acetic acid. Used in organic synthesis, vinegar production simulation, and as a solvent. Supplied in 2.5L clear glass bottles."
        },
        {
            title: "Acetic acid glacial-Emplura-500ml",
            description: "Glacial acetic acid in 500ml volume.",
            details: "500ml bottle of Emplura grade glacial acetic acid for smaller scale applications."
        },
        {
            title: "Acetone-Emplura-500ml",
            description: "Acetone for solvent applications.",
            details: "500ml Emplura grade acetone. Used as a solvent in organic synthesis and cleaning."
        },
        {
            title: "Acetone-Emplura-2.5Ltr",
            description: "Larger volume acetone.",
            details: "2.5L Emplura grade acetone for industrial solvent applications."
        },
        {
            title: "Nitric acid-Emplura-2.5 Ltr",
            description: "Pure nitric acid for analytical applications.",
            details: "65% nitric acid, analytical grade. Essential for metal dissolution, nitration reactions, and trace metal analysis. Packaged in 2.5L amber bottles for light protection."
        },
        {
            title: "Nitric acid-Emplura-500ml",
            description: "Nitric acid in 500ml volume.",
            details: "500ml bottle of Emplura grade nitric acid for laboratory use."
        },
        {
            title: "Calcium carbonate precipitated-Emplura-500gm",
            description: "Precipitated calcium carbonate for analysis.",
            details: "500g Emplura grade precipitated calcium carbonate. Used in antacids, fillers, and analytical standards."
        },
        {
            title: "Titriplex® III Pure (ethylene dinitrilo tetraacetic acid disodium salt dihydrate)-100g",
            description: "EDTA for complexometric titrations.",
            details: "100g Titriplex III EDTA. Used for chelation, water softening, and as a sequestering agent."
        },
        {
            title: "Barium chloride dihydrate-Emplura-500g",
            description: "Barium chloride for sulfate determination.",
            details: "500g Emplura grade barium chloride dihydrate. Used in sulfate precipitation and flame tests."
        },
        {
            title: "Buffer solution pH 4.00-500ml",
            description: "Ready-to-use pH 4 buffer solution.",
            details: "500ml Merck buffer solution for pH 4.00 calibration and standardization."
        },
        {
            title: "Buffer solution pH 7.00-500ml",
            description: "Neutral pH buffer solution.",
            details: "500ml Merck buffer solution for pH 7.00 calibration."
        },
        {
            title: "Buffer solution pH 9.20-500ml",
            description: "Alkaline pH buffer solution.",
            details: "500ml Merck buffer solution for pH 9.20 calibration."
        },
        {
            title: "Calcium chloride fused-Emplura-500g",
            description: "Fused calcium chloride desiccant.",
            details: "500g Emplura grade fused calcium chloride. Used as a desiccant in drying tubes and desiccators."
        },
        {
            title: "Potassium sulfate-Emplura-500g",
            description: "Potassium sulfate for fertilizers and analysis.",
            details: "500g Emplura grade potassium sulfate. Used in fertilizers and as a reagent."
        },
        {
            title: "Potassium permanganate-Emplura-500gm",
            description: "Potassium permanganate for oxidations.",
            details: "500g Emplura grade potassium permanganate. Used as an oxidizing agent in titrations and water treatment."
        },
        {
            title: "Sodium hydroxide pellets-Emplura-500gm",
            description: "Sodium hydroxide pellets for strong base applications.",
            details: "500g Emplura grade sodium hydroxide pellets. Used in pH adjustment and saponification."
        },
        {
            title: "Ammonium Chloride-500g Emparta",
            description: "Ammonium chloride for buffers and analysis.",
            details: "500g Emparta grade ammonium chloride. Used in buffers, fertilizers, and as a diuretic."
        },
        {
            title: "Sodium carbonate anhydrous-500g Emparta",
            description: "Anhydrous sodium carbonate for alkalinity.",
            details: "500g Emparta grade anhydrous sodium carbonate. Used in water softening and as a base."
        },
        {
            title: "Ammonium iron (II) sulfate heptahydrate-500g Emparta",
            description: "Mohr's salt for redox titrations.",
            details: "500g Emparta grade ammonium iron(II) sulfate heptahydrate. Used as a primary standard in redox titrations."
        },
        {
            title: "Sodium Sulfate-500g Emparta",
            description: "Sodium sulfate for drying and analysis.",
            details: "500g Emparta grade sodium sulfate. Used as a drying agent and in detergents."
        },
        {
            title: "Potassium chloride-500g Emparta",
            description: "Potassium chloride for electrolytes.",
            details: "500g Emparta grade potassium chloride. Used in physiological solutions and fertilizers."
        },
        {
            title: "Ammonium Acetate-500g Emparta",
            description: "Ammonium acetate for buffers.",
            details: "500g Emparta grade ammonium acetate. Used in buffers and organic synthesis."
        },
        {
            title: "Sodium hydroxide pellests-500g Emparta",
            description: "Sodium hydroxide pellets.",
            details: "500g Emparta grade sodium hydroxide pellets for alkaline applications."
        },
        {
            title: "Citric acid monohydrate-500g Emparta",
            description: "Citric acid for pH control.",
            details: "500g Emparta grade citric acid monohydrate. Used in buffers, preservatives, and cleaning."
        },
        {
            title: "Potassium sulfate-500g Emparta",
            description: "Potassium sulfate.",
            details: "500g Emparta grade potassium sulfate for fertilizers and reagents."
        },
        {
            title: "Sodium fluoride-500g Emparta",
            description: "Sodium fluoride.",
            details: "500g Emparta grade sodium fluoride for water treatment and analysis."
        },
        {
            title: "Potassium nitrate-500g Emparta",
            description: "Potassium nitrate for oxidations.",
            details: "500g Emparta grade potassium nitrate. Used in fertilizers and as an oxidizing agent."
        },
        {
            title: "Magnesium sulfate-500g Emparta",
            description: "Epsom salt for magnesium supplementation.",
            details: "500g Emparta grade magnesium sulfate. Used in bath salts and as a laxative."
        },
        {
            title: "Magnesium chloride-500g Emparta",
            description: "Magnesium chloride.",
            details: "500g Emparta grade magnesium chloride for de-icing and supplements."
        },
        {
            title: "Zinc filling-500g Emparta",
            description: "Zinc for dental applications.",
            details: "500g Emparta grade zinc filling material."
        },
        {
            title: "Sodium chloride-500g Emparta",
            description: "Table salt for analysis.",
            details: "500g Emparta grade sodium chloride. Used in physiological solutions and as a reagent."
        },
        {
            title: "Calcium chloride-500g Emparta",
            description: "Calcium chloride.",
            details: "500g Emparta grade calcium chloride for drying and solutions."
        },
        {
            title: "Sodium acetate-250g Emparta",
            description: "Sodium acetate for buffers.",
            details: "250g Emparta grade sodium acetate. Used in buffers and heating pads."
        },
        {
            title: "Edta-100g Emparta",
            description: "EDTA for chelation.",
            details: "100g Emparta grade EDTA. Used as a chelating agent."
        },
        {
            title: "Starch soluble-500g Emparta",
            description: "Soluble starch for iodine indicator.",
            details: "500g Emparta grade soluble starch. Used in iodine-starch indicator for titrations."
        },
        {
            title: "Copper(II) sulfate pentahydrate-500g Emparta",
            description: "Copper sulfate for analysis.",
            details: "500g Emparta grade copper(II) sulfate pentahydrate. Used in electroplating and as a fungicide."
        },
        {
            title: "Silver sulfate-25g Emparta",
            description: "Silver sulfate.",
            details: "25g Emparta grade silver sulfate for specialized applications."
        },
        {
            title: "Strontium chloride hexahydrate-250g Emparta",
            description: "Strontium chloride.",
            details: "250g Emparta grade strontium chloride hexahydrate."
        },
        {
            title: "Phenolphthalein indicator-50g Emparta",
            description: "Phenolphthalein indicator.",
            details: "50g Emparta grade phenolphthalein. Color change from colorless to pink around pH 8.2-10."
        },
        {
            title: "Hydoxylammoniumchloride-100g Emparta",
            description: "Hydroxylamine hydrochloride.",
            details: "100g Emparta grade hydroxylamine hydrochloride. Used as a reducing agent."
        },
        {
            title: "Potassium iodide-100g Emparta",
            description: "Potassium iodide.",
            details: "100g Emparta grade potassium iodide. Used in iodine solutions and as a reagent."
        },
        {
            title: "Methyle red-25g Emparta",
            description: "Methyl red indicator.",
            details: "25g Emparta grade methyl red. Color change from red to yellow around pH 4.4-6.2."
        },
        {
            title: "Sodium tetraphenylborate-10g Emparta",
            description: "Sodium tetraphenylborate.",
            details: "10g Emparta grade sodium tetraphenylborate for precipitation reactions."
        },
        {
            title: "Murexide-5g Emparta",
            description: "Murexide indicator.",
            details: "5g Emparta grade murexide. Used for calcium determination."
        },
        {
            title: "Bromocresol green-5g Emparta",
            description: "Bromocresol green indicator.",
            details: "5g Emparta grade bromocresol green. Color change around pH 3.8-5.4."
        },
        {
            title: "1,10-phenatroline-5g Emparta",
            description: "o-Phenanthroline.",
            details: "5g Emparta grade 1,10-phenanthroline. Used for iron determination."
        },
        {
            title: "SPANDS-5g Emparta",
            description: "SPANDS reagent.",
            details: "5g Emparta grade SPANDS for analytical applications."
        },
        {
            title: "Methyle orange-25g Emparta",
            description: "Methyl orange indicator.",
            details: "25g Emparta grade methyl orange. Color change from red to yellow around pH 3.1-4.4."
        },
        {
            title: "Di-potassium hydrogen phophate-500g Emparta",
            description: "Dipotassium hydrogen phosphate.",
            details: "500g Emparta grade dipotassium hydrogen phosphate for buffers."
        },
        {
            title: "Sodium hydrogen carbonate-500g Emparta",
            description: "Sodium bicarbonate.",
            details: "500g Emparta grade sodium hydrogen carbonate."
        },
        {
            title: "Potassium hydrogen pellets-500g Emparta",
            description: "Potassium hydroxide pellets.",
            details: "500g Emparta grade potassium hydroxide pellets."
        },
        {
            title: "Hydrazinium sulfate-500g Emparta",
            description: "Hydrazine sulfate.",
            details: "500g Emparta grade hydrazine sulfate."
        },
        {
            title: "Nitric acid-2.5L Emparta",
            description: "Nitric acid.",
            details: "2.5L Emparta grade nitric acid."
        },
        {
            title: "Acetone-2.5L Emparta",
            description: "Acetone.",
            details: "2.5L Emparta grade acetone."
        },
        {
            title: "Acetic acid glacial-2.5L Emparta",
            description: "Glacial acetic acid.",
            details: "2.5L Emparta grade glacial acetic acid."
        },
        // Finar Chemicals
        {
            title: "Buffer capsules pH 4.00 ± 0.05 Finar",
            description: "Buffer capsules from Finar.",
            details: "Finar buffer capsules for pH 4.00 calibration."
        },
        {
            title: "Buffer capsules pH 7.00 ± 0.05 Finar",
            description: "Buffer capsules from Finar.",
            details: "Finar buffer capsules for pH 7.00 calibration."
        },
        {
            title: "Buffer capsules pH 9.20 ± 0.05 Finar",
            description: "Buffer capsules from Finar.",
            details: "Finar buffer capsules for pH 9.20 calibration."
        },
        {
            title: "Sulphuric acid extrapure, 2.5 Lit. Finar",
            description: "Sulfuric acid from Finar.",
            details: "2.5L extrapure sulfuric acid from Finar."
        },
        {
            title: "Sulphuric acid extrapure, 500ml Finar",
            description: "Sulfuric acid from Finar.",
            details: "500ml extrapure sulfuric acid from Finar."
        },
        {
            title: "Potassium dichromate extrapure , 500gm Finar",
            description: "Potassium dichromate from Finar.",
            details: "500g extrapure potassium dichromate from Finar."
        },
        {
            title: "Ammonium ferrous sulphate hexahydrate extrapure , 500gm Finar",
            description: "Ammonium iron(II) sulfate from Finar.",
            details: "500g extrapure ammonium ferrous sulphate hexahydrate from Finar."
        },
        {
            title: "Sodium fluoride extrapure, 500gm Finar",
            description: "Sodium fluoride from Finar.",
            details: "500g extrapure sodium fluoride from Finar."
        },
        {
            title: "Di-phenyl-Amine indicator , 100gm Finar",
            description: "Diphenylamine indicator from Finar.",
            details: "100g diphenylamine indicator from Finar."
        },
        {
            title: "Sodium hydroxide flakes extrapure, 500g Finar",
            description: "Sodium hydroxide from Finar.",
            details: "500g extrapure sodium hydroxide flakes from Finar."
        },
        {
            title: "Methyl red solution , 125ml Finar",
            description: "Methyl red solution from Finar.",
            details: "125ml methyl red solution from Finar."
        },
        {
            title: "Boric acid crystals extrapure  , 500gm Finar",
            description: "Boric acid from Finar.",
            details: "500g extrapure boric acid crystals from Finar."
        },
        {
            title: "Bromocresol green solution , 125ml Finar",
            description: "Bromocresol green solution from Finar.",
            details: "125ml bromocresol green solution from Finar."
        },
        {
            title: "Potassium hydrogenphthalate extrapure, 500g Finar",
            description: "Potassium hydrogen phthalate from Finar.",
            details: "500g extrapure potassium hydrogenphthalate from Finar."
        },
        {
            title: "Potassium chloride extrapure, 500gm Finar",
            description: "Potassium chloride from Finar.",
            details: "500g extrapure potassium chloride from Finar."
        },
        {
            title: "Ammonium acetate extrapure , 500gm Finar",
            description: "Ammonium acetate from Finar.",
            details: "500g extrapure ammonium acetate from Finar."
        },
        {
            title: "Calcium chloride dihydrate extrapure , 500gm Finar",
            description: "Calcium chloride from Finar.",
            details: "500g extrapure calcium chloride dihydrate from Finar."
        },
        {
            title: "Gum acacia powder, 500g Finar",
            description: "Gum acacia from Finar.",
            details: "500g gum acacia powder from Finar."
        },
        {
            title: "Diethylene triamine pentaacetic extrapure, 100G Finar",
            description: "DTPA from Finar.",
            details: "100g extrapure diethylene triamine pentaacetic acid from Finar."
        },
        {
            title: "Triethanolamine extrapure, 500ml Finar",
            description: "Triethanolamine from Finar.",
            details: "500ml extrapure triethanolamine from Finar."
        },
        {
            title: "Hydrochloric acid extrapure, 2.5 Lit. Finar",
            description: "Hydrochloric acid from Finar.",
            details: "2.5L extrapure hydrochloric acid from Finar."
        },
        {
            title: "Hydrochloric acid extrapure, 500ml Finar",
            description: "Hydrochloric acid from Finar.",
            details: "500ml extrapure hydrochloric acid from Finar."
        },
        {
            title: "Zinc sulphate heptahydrate extrapure, 500g Finar",
            description: "Zinc sulfate from Finar.",
            details: "500g extrapure zinc sulphate heptahydrate from Finar."
        },
        {
            title: "Oxalic acid dihydrate extrapure , 500gm Finar",
            description: "Oxalic acid from Finar.",
            details: "500g extrapure oxalic acid dihydrate from Finar."
        },
        {
            title: "Potassium di-hydrogen ortho-phosphate extrapure,500g Finar",
            description: "Potassium dihydrogen phosphate from Finar.",
            details: "500g extrapure potassium dihydrogen phosphate from Finar."
        },
        {
            title: "Sodium bicarbonate anhydrous extrapure, 500gm Finar",
            description: "Sodium bicarbonate from Finar.",
            details: "500g extrapure anhydrous sodium bicarbonate from Finar."
        },
        {
            title: "L (+) Ascorbic acid extrapure, 100gm Finar",
            description: "Ascorbic acid from Finar.",
            details: "100g extrapure L-ascorbic acid from Finar."
        },
        {
            title: "Activated charcoal extrapure, 500gm Finar",
            description: "Activated charcoal from Finar.",
            details: "500g extrapure activated charcoal from Finar."
        },
        {
            title: "Ammonium molybdate tetrahydrate extrapure , 100gm Finar",
            description: "Ammonium molybdate from Finar.",
            details: "100g extrapure ammonium molybdate tetrahydrate from Finar."
        },
        {
            title: "Potassium antimony tartarate, 250gm Finar",
            description: "Potassium antimony tartrate from Finar.",
            details: "250g potassium antimony tartarate from Finar."
        },
        {
            title: "ortho-Phosphoric acid 85% , 500ml Finar",
            description: "Phosphoric acid from Finar.",
            details: "500ml 85% orthophosphoric acid from Finar."
        },
        {
            title: "ortho-Phosphoric acid 85% , 2.5Ltr Finar",
            description: "Phosphoric acid from Finar.",
            details: "2.5L 85% orthophosphoric acid from Finar."
        },
        {
            title: "Stannous chloride dihydrate extrapure, 100g Finar",
            description: "Stannous chloride from Finar.",
            details: "100g extrapure stannous chloride dihydrate from Finar."
        },
        {
            title: "Zinc (metal) dust 325 mesh extrapure, 500g Finar",
            description: "Zinc dust from Finar.",
            details: "500g extrapure zinc dust 325 mesh from Finar."
        },
        {
            title: "Ammonia solution extrapure, 500ml Finar",
            description: "Ammonia solution from Finar.",
            details: "500ml extrapure ammonia solution from Finar."
        },
        {
            title: "Acetic acid glacial extrapure, 2.5 Lit. Finar",
            description: "Glacial acetic acid from Finar.",
            details: "2.5L extrapure glacial acetic acid from Finar."
        },
        {
            title: "Acetic acid glacial extrapurel, 500ml Finar",
            description: "Glacial acetic acid from Finar.",
            details: "500ml extrapure glacial acetic acid from Finar."
        },
        {
            title: "Acetone extrapure, 500ml Finar",
            description: "Acetone from Finar.",
            details: "500ml extrapure acetone from Finar."
        },
        {
            title: "Acetone extrapure, 2.5 Ltr Finar",
            description: "Acetone from Finar.",
            details: "2.5L extrapure acetone from Finar."
        },
        {
            title: "Azomethane-AR-H-10g Finar",
            description: "Azomethane from Finar.",
            details: "10g analytical reagent azomethane from Finar."
        },
        {
            title: "Nitric acid extrapure, 2.5 Ltr Finar",
            description: "Nitric acid from Finar.",
            details: "2.5L extrapure nitric acid from Finar."
        },
        {
            title: "Nitric acid extrapure, 500ml Finar",
            description: "Nitric acid from Finar.",
            details: "500ml extrapure nitric acid from Finar."
        },
        {
            title: "Calcium carbonate extrapure , 500gm Finar",
            description: "Calcium carbonate from Finar.",
            details: "500g extrapure calcium carbonate from Finar."
        },
        {
            title: "EDTA. di - sodium salt dihydrate extrapure-100g Finar",
            description: "EDTA from Finar.",
            details: "100g extrapure EDTA disodium salt dihydrate from Finar."
        },
        {
            title: "Barium chloride dihydrate extrapure, 500g Finar",
            description: "Barium chloride from Finar.",
            details: "500g extrapure barium chloride dihydrate from Finar."
        },
        {
            title: "Buffer solution pH 4.00, 500ml Finar",
            description: "Buffer solution from Finar.",
            details: "500ml pH 4.00 buffer solution from Finar."
        },
        {
            title: "Buffer solution pH 7.00, 500ml Finar",
            description: "Buffer solution from Finar.",
            details: "500ml pH 7.00 buffer solution from Finar."
        },
        {
            title: "Buffer solution pH 9.20, 500ml Finar",
            description: "Buffer solution from Finar.",
            details: "500ml pH 9.20 buffer solution from Finar."
        },
        {
            title: "Calcium chloride fused extrapure, 500g Finar",
            description: "Fused calcium chloride from Finar.",
            details: "500g extrapure fused calcium chloride from Finar."
        },
        {
            title: "Potassium sulphate extrapure 500g Finar",
            description: "Potassium sulfate from Finar.",
            details: "500g extrapure potassium sulphate from Finar."
        },
        {
            title: "Potassium permanganate crystals extrapure, 500gm Finar",
            description: "Potassium permanganate from Finar.",
            details: "500g extrapure potassium permanganate crystals from Finar."
        },
        {
            title: "Sodium hydroxide pellets extrapure, 500gm Finar",
            description: "Sodium hydroxide from Finar.",
            details: "500g extrapure sodium hydroxide pellets from Finar."
        },
        {
            title: "Cupric sulphate pentahydrate extrapure, 500g Finar",
            description: "Copper sulfate from Finar.",
            details: "500g extrapure cupric sulphate pentahydrate from Finar."
        },
        {
            title: "Finklin (neutral pH laboratory detergent)-5 Ltr Finar",
            description: "Laboratory detergent from Finar.",
            details: "5L Finklin neutral pH laboratory detergent from Finar."
        },
        {
            title: "Sodium bromide-500g Finar",
            description: "Sodium bromide from Finar.",
            details: "500g sodium bromide from Finar."
        },
        {
            title: "Petrolium ether-500ml Finar",
            description: "Petroleum ether from Finar.",
            details: "500ml petroleum ether from Finar."

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
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">Sourced from leading brands like Merck, Finar, and Imparta for unmatched purity.</p>
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

export default Chemicals;