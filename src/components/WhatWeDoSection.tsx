import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Cloud, ShoppingCart, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Digital Platform Engineering",
    description: "We design, build, and operate enterprise platforms for:",
    features: [
      "Digital content delivery",
      "Library and institutional distribution",
      "Publisher metadata and catalog systems",
      "Subscription-based content services",
    ],
    gradient: "from-primary to-primary/70",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Cloud,
    title: "Enterprise Cloud & Infrastructure",
    description: "Cloud-native solutions built for scale:",
    features: [
      "Cloud-native hosting (Azure, AWS)",
      "Secure content storage and streaming",
      "High-availability architectures",
      "Disaster recovery & business continuity",
    ],
    gradient: "from-accent to-accent/70",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: ShoppingCart,
    title: "Commerce, Data & Integration",
    description: "Seamless business operations platforms:",
    features: [
      "Ordering and transaction platforms",
      "EDI & system integrations",
      "Financial reporting & settlements",
      "Publisher–library interoperability",
    ],
    gradient: "from-primary/80 to-accent/80",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Sparkles,
    title: "Applied AI",
    description: "AI as a supporting capability to enhance:",
    features: [
      "Search & discovery",
      "Personalization & recommendations",
      "Workflow automation",
      "Operations efficiency",
    ],
    note: "AI is one capability within our broader digital platform stack.",
    gradient: "from-accent/80 to-primary/80",
    accent: "bg-accent/10 text-accent",
  },
];

export const WhatWeDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-we-do" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-30" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

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
            className="inline-block px-5 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 border border-accent/20"
          >
            Our Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital technology solutions powering the modern content ecosystem
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
              <div className="h-full p-8 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-accent/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
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
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary mt-2 shrink-0" />
                      <span className="text-sm">{feature}</span>
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
      </div>
    </section>
  );
};