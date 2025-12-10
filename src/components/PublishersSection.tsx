import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Database, Lock, Network, FileText, Handshake } from "lucide-react";

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
    <section id="publishers" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Partner with Confidence
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            For Publishers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade infrastructure designed specifically for publisher needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-card border border-border/50 shadow-soft"
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Publisher-Focused Capabilities
            </h3>
            <p className="text-muted-foreground mb-6">We provide:</p>
            <ul className="space-y-4">
              {capabilities.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground/90">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Commitment */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-elevated"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Handshake className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-semibold">
                Our Commitment to Publishers
              </h3>
            </div>
            
            <p className="text-primary-foreground/80 mb-8">
              We understand the critical importance of trust in publisher partnerships. 
              Our commitment extends beyond technology to encompass every aspect of your 
              content protection and business operations.
            </p>

            <ul className="grid grid-cols-2 gap-4">
              {commitments.map((commitment, index) => (
                <motion.li
                  key={commitment}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-primary-foreground/5"
                >
                  <Shield className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm text-primary-foreground/90">{commitment}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
