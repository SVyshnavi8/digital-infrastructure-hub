import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Database, Lock, Network, FileText, Handshake, CheckCircle2 } from "lucide-react";

const capabilities = [
  { icon: Database, label: "Secure digital distribution infrastructure" },
  { icon: FileText, label: "Metadata & catalog platforms" },
  { icon: Lock, label: "DRM-compliant delivery systems" },
  { icon: Network, label: "Library and subscription interoperability" },
  { icon: FileText, label: "Enterprise reporting & settlement systems" },
];

const commitments = [
  "Rights protection",
  "Data security",
  "Financial transparency",
  "Contract compliance",
  "Long-term platform stability",
];

export const PublishersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publishers" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20"
          >
            Partner with Confidence
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            For <span className="gradient-text">Publishers</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade infrastructure designed specifically for publisher needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 rounded-3xl glass-card-strong border-2 border-transparent hover:border-accent/20 transition-all duration-500"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              Publisher-Focused Capabilities
            </h3>
            <p className="text-muted-foreground mb-8">We provide:</p>
            <ul className="space-y-4">
              {capabilities.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg hover:-translate-x-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <item.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <span className="text-foreground/90 font-medium group-hover:text-foreground transition-colors">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Commitment */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative p-10 rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground shadow-2xl overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,hsl(var(--primary-foreground)/0.03)_25%,transparent_25%,transparent_75%,hsl(var(--primary-foreground)/0.03)_75%)] bg-[size:40px_40px]" />
            
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                  <Handshake className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold">
                  Our Commitment
                </h3>
              </div>
              
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
                We understand the critical importance of trust in publisher partnerships. 
                Our commitment extends beyond technology to encompass every aspect of your 
                content protection and business operations.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {commitments.map((commitment, index) => (
                  <motion.li
                    key={commitment}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="group flex items-center gap-3 p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-primary-foreground/90 font-medium">{commitment}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};