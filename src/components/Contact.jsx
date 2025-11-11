import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to elevate your research? Contact us today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="glass-card p-3 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-blue-600 transition-all">
                  <MapPin className="w-6 h-6 text-teal-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-slate-300 leading-relaxed">
                    C/o-Ashok Kumar, Ground Floor, New Punaichak,<br />
                    Near Indu Niketan, Boring Canal Road,<br />
                    Patna, Bihar - 800001
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="glass-card p-3 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-blue-600 transition-all">
                  <Phone className="w-6 h-6 text-teal-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <a href="tel:7903894473" className="text-slate-300 hover:text-teal-400 transition-colors text-lg">
                    7903894473
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="glass-card p-3 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-blue-600 transition-all">
                  <Mail className="w-6 h-6 text-teal-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a href="mailto:ankitlabchemicals@gmail.com" className="text-slate-300 hover:text-teal-400 transition-colors text-lg break-all">
                    ankitlabchemicals@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <Label htmlFor="name" className="text-slate-300 mb-2 block">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-teal-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-slate-300 mb-2 block">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-teal-500 transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-300 mb-2 block">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-teal-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-300 mb-2 block">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-teal-500 transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-semibold py-6 rounded-lg transition-all duration-300 group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;