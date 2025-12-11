import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Eye, FileCheck, Database, Key, ServerCog, Fingerprint } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Digital Rights Management (DRM)",
    description: "Industry-standard DRM enforcement including Adobe ACS4, Readium LCP, and custom watermarking solutions protecting publisher content across all distribution channels.",
  },
  {
    icon: Lock,
    title: "Secure Content Storage",
    description: "AES-256 encrypted storage with customer-managed keys, controlled access policies, and comprehensive audit trails for complete content protection and traceability.",
  },
  {
    icon: Eye,
    title: "Data Privacy & Protection",
    description: "Comprehensive data privacy frameworks ensuring GDPR, CCPA, COPPA, and FERPA compliance with automated data handling policies and user consent management.",
  },
  {
    icon: FileCheck,
    title: "Contract Compliance",
    description: "Automated enforcement of publisher contracts and licensing terms including territorial restrictions, lending limits, and usage caps with real-time monitoring.",
  },
  {
    icon: Database,
    title: "Audit Readiness",
    description: "Financial and content audit-ready systems with SOC 2 Type II certification, detailed reporting, and complete transaction history for regulatory compliance.",
  },
  {
    icon: Key,
    title: "Identity & Access Management",
    description: "Enterprise IAM with SSO, SAML 2.0, OAuth 2.0, and multi-factor authentication. Role-based access control and fine-grained permissions across all systems.",
  },
  {
    icon: ServerCog,
    title: "Infrastructure Security",
    description: "Multi-layer security with WAF, DDoS protection, intrusion detection, and automated threat response. Regular penetration testing and vulnerability assessments.",
  },
  {
    icon: Fingerprint,
    title: "Content Forensics",
    description: "Advanced forensic watermarking and content fingerprinting for tracking unauthorized distribution. Real-time piracy detection and takedown workflows.",
  },
];

const certifications = [
  { label: 'SOC 2 Type II', description: 'Certified' },
  { label: 'ISO 27001', description: 'Compliant' },
  { label: 'GDPR', description: 'Ready' },
  { label: 'PCI DSS', description: 'Level 1' },
  { label: 'HIPAA', description: 'Capable' },
];

export const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="security" className="section-padding relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent/90">
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
          className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-cyan/15 blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-primary-foreground/10 blur-3xl"
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
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto">
            iGenie Labs operates to the highest enterprise-grade publishing and data standards. 
            Our security-first architecture protects your content, data, and business operations.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-cyan/30 transition-all duration-500">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan/10 to-transparent pointer-events-none" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-accent flex items-center justify-center mb-5 shadow-lg group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-2 group-hover:text-cyan transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed group-hover:text-primary-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <p className="text-center text-sm text-primary-foreground/60 mb-8 uppercase tracking-widest">Certifications & Compliance</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center px-6 py-4 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-cyan/20 hover:border-cyan/40 transition-all duration-300"
              >
                <span className="text-lg font-semibold text-primary-foreground">{cert.label}</span>
                <span className="text-xs text-primary-foreground/60">{cert.description}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};