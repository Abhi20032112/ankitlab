import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Award, Shield, Zap, Truck, Beaker, Users, Target, Eye, Quote, Star } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [storyRef, storyInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const values = [
    { icon: Award, title: 'Quality', description: 'Premium grade products' },
    { icon: Shield, title: 'Integrity', description: 'Trusted partnerships' },
    { icon: Zap, title: 'Service Support', description: 'Expert guidance' },
    { icon: Truck, title: 'Fast Delivery', description: 'Timely service' },
  ];

  const team = [
    { name: 'Ankit Kumar', role: 'Founder & CEO', image: '/images/generated-image.png' },
    { name: 'Dr. Priya Sharma', role: 'Technical Director', image: '/images/WhatsApp Image 2025-11-08 at 15.54.27_b2ce55bc.jpg' },
    { name: 'Rajesh Gupta', role: 'Operations Manager', image: '/images/WhatsApp Image 2025-11-08 at 15.54.28_587d6a46.jpg' },
    { name: 'Meera Patel', role: 'Quality Assurance Lead', image: '/images/WhatsApp Image 2025-11-08 at 15.54.29_0cbfa2e1.jpg' },
  ];

  const testimonials = [
    { quote: 'Ankit Lab Chemicals has been our reliable partner for over 5 years. Their products and service are exceptional.', author: 'Dr. Ramesh Singh', institution: 'IIT Patna' },
    { quote: 'Fast delivery and expert support make them stand out. Highly recommended for research labs.', author: 'Prof. Anita Verma', institution: 'Bihar Veterinary College' },
    { quote: 'Their authorized brand partnerships ensure we get genuine, high-quality chemicals every time.', author: 'Dr. Vikram Rao', institution: 'RAU Pusa' },
  ];

  const brands = [
    { name: 'Borosil', logo: '/images/brands/borosil.png' },
    { name: 'Wensar', logo: '/images/brands/wensar.jpeg' },
    { name: 'Systonic', logo: '/images/brands/sybstronics.png' },
    { name: 'Finar', logo: '/images/brands/finar.png' },
    { name: 'Imparta', logo: '/images/brands/imparta.webp' },
    { name: 'Merck', logo: '/images/brands/Merck.webp' },
    { name: 'Polylab', logo: '/images/brands/polylab.jpg' },
  ];

  return (
    <AnimatedPage>
      <div className="pt-24 bg-slate-50">
        {/* Hero Section */}
        <section id="about-hero" className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <Beaker className="inline-block w-12 h-12 mr-4 text-teal-500" />
                <span className="gradient-text">About Ankit Lab Chemicals</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                A trusted supplier and service partner to research labs, industries, and academic institutions, delivering excellence in every product.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <section id="company-story" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, y: 50 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Our Story</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <p className="text-lg text-slate-600 mb-4">
                    Founded in 2015, Ankit Lab Chemicals began as a small venture with a big vision: to bridge the gap between quality laboratory supplies and the scientific community in India.
                  </p>
                  <p className="text-lg text-slate-600 mb-4">
                    Starting with a focus on Bihar and neighboring states, we've grown into a comprehensive supplier serving educational institutions, research facilities, and industrial labs across the region.
                  </p>
                  <p className="text-lg text-slate-600">
                    Our journey has been driven by a commitment to excellence, building lasting partnerships with leading brands and institutions like IIT Patna, Bihar Veterinary College, and many more.
                  </p>
                </div>
                <div className="relative">
                  <img src="/images/logo.jpeg" alt="Ankit Lab Chemicals Logo" className="w-full max-w-sm mx-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission-vision" className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, y: 50 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div className="glass-card p-8">
                <Target className="w-16 h-16 text-teal-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Our Mission</h3>
                <p className="text-lg text-slate-600">
                  To empower scientific advancement by providing unparalleled access to premium laboratory chemicals, instruments, and consumables, ensuring researchers and institutions have the tools they need for groundbreaking discoveries.
                </p>
              </div>
              <div className="glass-card p-8">
                <Eye className="w-16 h-16 text-teal-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Our Vision</h3>
                <p className="text-lg text-slate-600">
                  To be the leading laboratory supply partner in India, recognized for our commitment to quality, innovation, and customer satisfaction, fostering a culture of scientific excellence across all sectors.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Authorized Brand Partners */}
        <section id="partners" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Authorized Brand Partners</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We are proud authorized partners of industry-leading brands, ensuring you receive genuine, high-quality products:
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 hover:bg-white/80 transition-all duration-300 group cursor-default text-center"
                >
                  <img src={brand.logo} alt={brand.name} className="w-16 h-16 mx-auto mb-2 object-contain" />
                  <h4 className="text-sm font-semibold text-slate-700">{brand.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section id="team" className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <motion.div
              ref={teamRef}
              initial={{ opacity: 0, y: 50 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Team</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Meet the dedicated professionals behind Ankit Lab Chemicals, committed to serving the scientific community.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass-card p-6 text-center hover:bg-white/80 transition-all duration-300 group"
                >
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h4 className="text-xl font-bold mb-2 text-slate-700">{member.name}</h4>
                  <p className="text-slate-500">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us / Testimonials */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              ref={testimonialsRef}
              initial={{ opacity: 0, y: 50 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Why Choose Us</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                Hear from our valued partners and customers about their experience with Ankit Lab Chemicals.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass-card p-6 hover:bg-white/80 transition-all duration-300"
                >
                  <Quote className="w-8 h-8 text-teal-500 mb-4" />
                  <p className="text-slate-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.institution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section id="values" className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Core Values</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                The principles that guide everything we do at Ankit Lab Chemicals.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 hover:bg-white/80 transition-all duration-300 group cursor-default"
                >
                  <value.icon className="w-12 h-12 text-teal-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold mb-2 text-slate-700">{value.title}</h4>
                  <p className="text-slate-500">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default About;
