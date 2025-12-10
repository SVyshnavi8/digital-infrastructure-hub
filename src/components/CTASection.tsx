import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-narrow relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Let's Build the Future of<br />
            <span className="gradient-text">Digital Content Infrastructure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Ready to transform your content operations with enterprise-grade technology? 
            Let's discuss how iGenie Labs can power your digital ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl">
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Request a Platform Overview
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <a 
              href="mailto:contact@igenielabs.com" 
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@igenielabs.com
            </a>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Publisher & Library Inquiries Welcome
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
