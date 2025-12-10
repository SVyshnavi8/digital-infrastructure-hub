import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FileText, Package, Lock } from "lucide-react";

const platformCategories = [
  {
    icon: BookOpen,
    title: "Digital Content Platforms",
    items: [
      "Secure digital lending & access systems",
      "eBook and audiobook delivery platforms",
      "DRM-compliant content distribution",
      "Subscription-based digital media services",
    ],
  },
  {
    icon: FileText,
    title: "Metadata & Catalog Systems",
    items: [
      "Publisher metadata management",
      "Cover images & enrichment systems",
      "Library catalog integrations",
      "Global discovery pipelines",
    ],
  },
  {
    icon: Package,
    title: "Enterprise Ordering & Operations",
    items: [
      "Ordering management systems",
      "Content ingestion & onboarding platforms",
      "Data exchanges (FTP, APIs, feeds)",
      "Financial and operational reporting",
    ],
  },
  {
    icon: Lock,
    title: "Cloud & Security Infrastructure",
    items: [
      "Enterprise cloud hosting",
      "Identity, access & encryption",
      "Monitoring, logging & audit systems",
      "Regulatory and contract compliance",
    ],
  },
];

export const PlatformsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platforms" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

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
            Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Platforms & Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital infrastructure for content organizations
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                  {category.title}
                </h3>

                {/* Items */}
                <ul className="space-y-2.5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
