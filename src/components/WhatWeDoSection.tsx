import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Cloud, ShoppingCart, Sparkles, ArrowUpRight, Layers, Workflow } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Digital Platform Engineering",
    description: "We architect, build, and operate enterprise-grade platforms that power the modern content ecosystem:",
    features: [
      "End-to-end digital content delivery systems with global CDN integration",
      "Library and institutional distribution platforms supporting millions of transactions",
      "Publisher metadata management with ONIX, MARC, and custom schema support",
      "Subscription-based content services with flexible licensing models",
      "Real-time inventory and availability systems across multiple channels",
    ],
    gradient: "from-cyan to-primary",
    accent: "bg-cyan/10 text-cyan",
  },
  {
    icon: Cloud,
    title: "Enterprise Cloud & Infrastructure",
    description: "Cloud-native solutions engineered for enterprise scale, security, and reliability:",
    features: [
      "Multi-cloud hosting on Azure, AWS, and GCP with intelligent failover",
      "Secure content storage with AES-256 encryption at rest and in transit",
      "High-availability architectures with 99.99% uptime SLA guarantees",
      "Automated disaster recovery and business continuity protocols",
      "Global edge computing for sub-100ms content delivery worldwide",
    ],
    gradient: "from-primary to-accent",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: ShoppingCart,
    title: "Commerce, Data & Integration",
    description: "Seamless business operations platforms connecting publishers, libraries, and distributors:",
    features: [
      "Ordering and transaction platforms processing millions of orders annually",
      "EDI integrations with EDIFACT, X12, and modern REST/GraphQL APIs",
      "Financial reporting, settlements, and royalty management systems",
      "Publisher–library interoperability with standardized data exchange",
      "Real-time analytics dashboards and business intelligence tools",
    ],
    gradient: "from-accent to-cyan",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Sparkles,
    title: "Applied AI & Automation",
    description: "AI as a strategic capability enhancing platform intelligence and operational efficiency:",
    features: [
      "Advanced search & discovery with semantic understanding and NLP",
      "Personalization engines driving 40%+ improvement in content engagement",
      "Intelligent workflow automation reducing manual operations by 60%",
      "Predictive analytics for demand forecasting and inventory optimization",
      "Content classification and metadata enrichment using ML models",
    ],
    note: "AI is integrated as a supporting capability within our broader digital platform stack, enhancing every layer of our solutions.",
    gradient: "from-cyan via-primary to-accent",
    accent: "bg-cyan/10 text-cyan",
  },
];

const additionalCapabilities = [
  { icon: Layers, label: "Microservices Architecture" },
  { icon: Workflow, label: "DevOps & CI/CD" },
];

export const WhatWeDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-we-do" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-30" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-cyan/10 to-accent/10 text-primary text-sm font-semibold mb-6 border border-primary/20"
          >
            Our Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital technology solutions powering the modern content ecosystem with 
            enterprise-grade security, scalability, and compliance at every layer.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="h-full p-8 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-500`}>
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.15 + featureIndex * 0.05 + 0.3 }}
                      className="flex items-start gap-3 text-foreground/80"
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mt-2 shrink-0`} />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Note */}
                {service.note && (
                  <p className="mt-6 text-xs text-muted-foreground italic border-t border-border/50 pt-4 relative">
                    {service.note}
                  </p>
                )}

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="text-sm text-muted-foreground">Also specializing in:</span>
          {additionalCapabilities.map((cap, index) => (
            <div 
              key={cap.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm text-foreground/70"
            >
              <cap.icon className="w-4 h-4 text-primary" />
              {cap.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};