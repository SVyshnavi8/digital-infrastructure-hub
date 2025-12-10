import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl"
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
          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-8 shadow-glow"
          >
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground mb-8 text-balance">
            Let's Build the Future of
            <br />
            <span className="gradient-text-animated">Digital Content Infrastructure</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Ready to transform your content operations with enterprise-grade technology? 
            Let's discuss how iGenie Labs can power your digital ecosystem.
          </p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl" className="group shine-effect">
              Partner With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Request a Platform Overview
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
              href="mailto:contact@igenielabs.com" 
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">contact@igenielabs.com</span>
            </a>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl hover:bg-card/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Publisher & Library Inquiries Welcome</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};