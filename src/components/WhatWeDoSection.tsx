import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Cloud, ShoppingCart, Sparkles } from "lucide-react";

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
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export const WhatWeDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-we-do" className="section-padding bg-background relative">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital technology solutions powering the modern content ecosystem
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated hover-lift"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Note */}
              {service.note && (
                <p className="mt-4 text-xs text-muted-foreground italic border-t border-border/50 pt-4">
                  {service.note}
                </p>
              )}

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
