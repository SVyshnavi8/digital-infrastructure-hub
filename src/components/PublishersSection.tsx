import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Database, Lock, Network, FileText, Handshake, CheckCircle2, BarChart3, Globe } from "lucide-react";

const capabilities = [
  { icon: Database, label: "Secure digital distribution infrastructure with global CDN" },
  { icon: FileText, label: "Metadata & catalog platforms with ONIX 3.0 and MARC support" },
  { icon: Lock, label: "DRM-compliant delivery systems (Adobe, Readium LCP, watermarking)" },
  { icon: Network, label: "Library and subscription interoperability across 15,000+ institutions" },
  { icon: BarChart3, label: "Enterprise reporting, analytics & settlement systems" },
  { icon: Globe, label: "Global distribution to 50+ countries with localization support" },
];

const commitments = [
  { label: "Rights Protection", detail: "Multi-layer DRM" },
  { label: "Data Security", detail: "SOC 2 Type II" },
  { label: "Financial Transparency", detail: "Real-time reporting" },
  { label: "Contract Compliance", detail: "Automated enforcement" },
  { label: "Platform Stability", detail: "99.99% SLA" },
  { label: "24/7 Support", detail: "Dedicated teams" },
];

const publisherBenefits = [
  "Reduce time-to-market for digital content by 60%",
  "Eliminate revenue leakage with automated rights management",
  "Gain real-time visibility into global distribution metrics",
  "Scale seamlessly from thousands to millions of transactions",
];

export const PublishersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publishers" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
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
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-semibold mb-6 border border-primary/20"
          >
            Partner with Confidence
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            For <span className="gradient-text">Publishers</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade infrastructure designed specifically for publisher needs. 
            Trusted by 5 of the Big 5 publishers and hundreds of independent publishers worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 rounded-3xl glass-card-strong border-2 border-transparent hover:border-primary/20 transition-all duration-500"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              Publisher-Focused Capabilities
            </h3>
            <p className="text-muted-foreground mb-8">Comprehensive solutions built for the publishing industry:</p>
            <ul className="space-y-4">
              {capabilities.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-x-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-foreground/90 font-medium group-hover:text-foreground transition-colors text-sm">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Commitment */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative p-10 rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-accent/90 text-primary-foreground shadow-2xl overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,hsl(var(--primary-foreground)/0.03)_25%,transparent_25%,transparent_75%,hsl(var(--primary-foreground)/0.03)_75%)] bg-[size:40px_40px]" />
            
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                  <Handshake className="w-7 h-7 text-cyan" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold">
                  Our Commitment
                </h3>
              </div>
              
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                We understand the critical importance of trust in publisher partnerships. 
                Our commitment extends beyond technology to encompass every aspect of your 
                content protection and business operations.
              </p>

              <ul className="grid grid-cols-2 gap-3 mb-8">
                {commitments.map((commitment, index) => (
                  <motion.li
                    key={commitment.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                    className="group flex flex-col p-3 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-cyan/30 transition-all duration-300"
                  >
                    <span className="text-primary-foreground font-medium text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan shrink-0" />
                      {commitment.label}
                    </span>
                    <span className="text-primary-foreground/60 text-xs mt-1 ml-6">{commitment.detail}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Key Benefits */}
              <div className="border-t border-primary-foreground/20 pt-6">
                <p className="text-sm text-primary-foreground/60 mb-4">Key Publisher Benefits:</p>
                <ul className="space-y-2">
                  {publisherBenefits.map((benefit, index) => (
                    <li key={index} className="text-sm text-primary-foreground/80 flex items-start gap-2">
                      <span className="text-cyan">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};