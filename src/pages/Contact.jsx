import React, { useState } from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
    const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const { toast } = useToast();
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We'll get back to you soon!",
        });
        setFormData({ name: '', phone: '', email: '', message: '' });
        setCategory('');
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <AnimatedPage>
            <div className="pt-24 bg-slate-50">
                <section id="contact" className="py-24 relative bg-gradient-to-b from-slate-50 to-blue-100/30">
                    <div className="container mx-auto px-6">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                <Mail className="inline-block w-12 h-12 mr-4 text-teal-500" />
                                <span className="gradient-text">Get In Touch in Patna, Bihar</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">Ready to elevate your research in Patna, Bihar? Contact us today.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" ref={ref}>
                            <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
                                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div><Label htmlFor="name" className="text-slate-500 mb-2 block">Name</Label><Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-white/50 border-slate-300" placeholder="Your name" /></div>
                                        <div><Label htmlFor="phone" className="text-slate-500 mb-2 block">Phone</Label><Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="bg-white/50 border-slate-300" placeholder="Your phone number" /></div>
                                    </div>
                                    <div><Label htmlFor="email" className="text-slate-500 mb-2 block">Email</Label><Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-white/50 border-slate-300" placeholder="your.email@example.com" /></div>
                                    <div><Label htmlFor="category" className="text-slate-500 mb-2 block">Category</Label>
                                        <Select onValueChange={setCategory} value={category}>
                                            <SelectTrigger className="w-full bg-white/50 border-slate-300 text-slate-800"><SelectValue placeholder="Select a category..." /></SelectTrigger>
                                            <SelectContent className="glass-card border-slate-200/80 text-slate-700">
                                                <SelectItem value="chemicals">Chemicals</SelectItem><SelectItem value="instruments">Instruments</SelectItem><SelectItem value="consumables">Consumables</SelectItem><SelectItem value="glassware">Glassware</SelectItem><SelectItem value="services">Services</SelectItem><SelectItem value="general">General Inquiry</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div><Label htmlFor="message" className="text-slate-500 mb-2 block">Message</Label><Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="bg-white/50 border-slate-300 resize-none" placeholder="Tell us about your requirements..." /></div>
                                    <Button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-semibold py-6 rounded-lg transition-all duration-300 group shadow-lg hover:shadow-blue-500/30">Send Message<Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Button>
                                </form>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-8">
                                <div className="glass-card p-6 flex items-start gap-4"><MapPin className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-bold mb-2 text-slate-700">Address in Patna, Bihar</h3><p className="text-slate-600 leading-relaxed">C/o-Ashok Kumar, Ground Floor, New Punaichak, Near Indu Niketan, Boring Canal Road, Patna, Bihar - 800001</p></div></div>
                                <div className="glass-card p-6 flex items-start gap-4"><Phone className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-bold mb-2 text-slate-700">Phone</h3><a href="tel:7903894473" className="text-slate-600 hover:text-blue-500 transition-colors text-lg">7903894473</a></div></div>
                                <div className="glass-card p-6 flex items-start gap-4"><Mail className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-bold mb-2 text-slate-700">Email</h3><a href="mailto:ankitlabchemicals@gmail.com" className="text-slate-600 hover:text-blue-500 transition-colors text-lg break-all">ankitlabchemicals@gmail.com</a></div></div>
                                <div className="glass-card w-full h-64 overflow-hidden"><iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5190691060963!2d85.11299931501786!3d25.62094298370059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57f1390d7979%3A0x63346d0def635d08!2sBoring%20Canal%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1678886543210!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale contrast-125 opacity-80"></iframe></div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </AnimatedPage>
    );
};

export default Contact;