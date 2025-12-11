import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone, Sparkles, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan/10 to-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[20%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl"
      />
      
      <div className="container-narrow relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center mb-8"
          >
            <img src={logo} alt="iGenie Labs" className="h-16 w-auto logo-glow" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground mb-8 text-balance">
            Let's Build the Future of
            <br />
            <span className="gradient-text-animated">Digital Content Infrastructure</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Ready to transform your content operations with enterprise-grade technology? 
            Let's discuss how iGenie Labs can power your digital ecosystem.
          </p>
          <p className="text-sm text-muted-foreground/70 max-w-xl mx-auto mb-12">
            Join 500+ publishers, 15,000+ libraries, and leading content organizations 
            who trust iGenie Labs for their digital infrastructure needs.
          </p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="xl" className="group shine-effect">
              Partner With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Demo
            </Button>
          </motion.div>

          {/* Secondary Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <FileText className="w-4 h-4 mr-2" />
              Request Platform Overview
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <Sparkles className="w-4 h-4 mr-2" />
              View Case Studies
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <a 
              href="mailto:partnerships@igenielabs.com" 
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-medium text-foreground">partnerships@igenielabs.com</span>
                <span className="text-xs text-muted-foreground">For partnership inquiries</span>
              </div>
            </a>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl hover:bg-card/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-medium text-foreground">Publisher & Library Inquiries</span>
                <span className="text-xs text-muted-foreground">Dedicated support team</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};