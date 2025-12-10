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
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            Enterprise Standards
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Security, Compliance & Trust
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            iGenie Labs operates to enterprise-grade publishing and data standards
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
