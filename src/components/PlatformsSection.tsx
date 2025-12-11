import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BookOpen, FileText, Package, Lock, Check, Headphones, Image, BarChart3 } from "lucide-react";

const platformCategories = [
  {
    icon: BookOpen,
    title: "Digital Content Platforms",
    description: "Complete digital content lifecycle management",
    items: [
      "Secure digital lending & access systems with patron authentication",
      "eBook platform supporting EPUB, PDF, and proprietary formats",
      "Audiobook delivery with adaptive streaming and offline access",
      "DRM-compliant distribution with Adobe, Readium, and custom solutions",
      "Subscription services with metered access and concurrent user limits",
    ],
    color: "from-cyan to-primary",
    bgColor: "bg-cyan/5",
  },
  {
    icon: FileText,
    title: "Metadata & Catalog Systems",
    description: "Industry-standard metadata management",
    items: [
      "Publisher metadata management with ONIX 2.1 and 3.0 support",
      "Cover images, sample content & enrichment pipelines",
      "Library catalog integrations with MARC21 and Dublin Core",
      "Global discovery APIs powering millions of daily searches",
      "Real-time synchronization across 50+ distribution channels",
    ],
    color: "from-primary to-accent",
    bgColor: "bg-primary/5",
  },
  {
    icon: Package,
    title: "Enterprise Ordering & Operations",
    description: "Streamlined B2B commerce operations",
    items: [
      "Ordering management processing 10M+ transactions annually",
      "Content ingestion with automated validation and QA workflows",
      "Data exchanges supporting FTP, SFTP, AS2, and modern APIs",
      "Financial reporting with multi-currency and tax compliance",
      "Warehouse and fulfillment integration for physical goods",
    ],
    color: "from-accent to-cyan",
    bgColor: "bg-accent/5",
  },
  {
    icon: Lock,
    title: "Cloud & Security Infrastructure",
    description: "Enterprise-grade security and compliance",
    items: [
      "Enterprise cloud hosting with SOC 2 Type II certification",
      "Identity management with SSO, SAML, and OAuth 2.0",
      "End-to-end encryption with customer-managed keys option",
      "24/7 monitoring, logging & automated incident response",
      "Regulatory compliance: GDPR, CCPA, COPPA, and more",
    ],
    color: "from-cyan via-primary to-accent",
    bgColor: "bg-cyan/5",
  },
];

const additionalPlatforms = [
  { icon: Headphones, label: "Audio Processing" },
  { icon: Image, label: "Digital Asset Management" },
  { icon: BarChart3, label: "Analytics & Reporting" },
];

export const PlatformsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="platforms" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan/5 to-accent/5 rounded-full blur-3xl" />

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
            Solutions
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Our Platforms & <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end digital infrastructure for content organizations, built on proven technology 
            and designed for enterprise scale.
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {platformCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`h-full p-8 rounded-3xl glass-card-strong border-2 transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'border-primary/40 shadow-glow -translate-y-3' 
                  : 'border-transparent shadow-lg'
              }`}>
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-500`}>
                    <category.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.li 
                      key={item} 
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0.8 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="text-sm text-muted-foreground">Additional platforms:</span>
          {additionalPlatforms.map((platform) => (
            <div 
              key={platform.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 hover:border-primary/30 transition-colors text-sm text-foreground/70 hover:text-foreground"
            >
              <platform.icon className="w-4 h-4 text-accent" />
              {platform.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};