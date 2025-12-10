import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Eye, FileCheck, Database, Key } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Digital Rights Management (DRM)",
    description: "Industry-standard DRM enforcement protecting publisher content.",
  },
  {
    icon: Lock,
    title: "Secure Content Storage",
    description: "Encrypted storage with controlled access and audit trails.",
  },
  {
    icon: Eye,
    title: "Data Privacy & Protection",
    description: "Comprehensive data privacy frameworks and compliance.",
  },
  {
    icon: FileCheck,
    title: "Contract Compliance",
    description: "Full adherence to publisher contracts and licensing terms.",
  },
  {
    icon: Database,
    title: "Audit Readiness",
    description: "Financial and content audit-ready systems and reporting.",
  },
  {
    icon: Key,
    title: "Identity & Access Governance",
    description: "Enterprise identity management and encryption protocols.",
  },
];

export const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="security" className="section-padding bg-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-foreground)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl"
        />
      </div>
      
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
            className="inline-block px-5 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-6 border border-primary-foreground/20"
          >
            Enterprise Standards
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Security, Compliance & Trust
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            iGenie Labs operates to enterprise-grade publishing and data standards
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-500">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-primary-foreground/60 leading-relaxed group-hover:text-primary-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {['SOC 2 Compliant', 'GDPR Ready', 'ISO 27001', 'PCI DSS'].map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="px-5 py-2.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium hover:bg-accent/20 hover:border-accent/40 hover:text-primary-foreground transition-all duration-300"
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};