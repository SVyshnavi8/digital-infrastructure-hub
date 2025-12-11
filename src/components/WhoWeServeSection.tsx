import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, Library, Truck, Monitor, GraduationCap, ArrowRight, Newspaper } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Publishers",
    description: "Major trade and academic publishers trust our platforms for secure content distribution, rights management, and global metadata syndication. We serve 5 of the Big 5 publishers.",
    stats: "500+ Publisher Partners",
    gradient: "from-cyan to-primary",
  },
  {
    icon: Library,
    title: "Libraries",
    description: "Public, academic, and special libraries worldwide leverage our digital lending infrastructure, serving millions of patrons with seamless content access and discovery.",
    stats: "15,000+ Libraries Served",
    gradient: "from-primary to-accent",
  },
  {
    icon: Truck,
    title: "Content Distributors",
    description: "Distribution partners rely on our ordering, fulfillment, and supply chain platforms to efficiently move content from publishers to retailers and institutions.",
    stats: "10M+ Annual Transactions",
    gradient: "from-accent to-cyan",
  },
  {
    icon: Monitor,
    title: "Digital Media Platforms",
    description: "Media organizations use our cloud infrastructure for content delivery at scale, supporting streaming, downloads, and multi-format distribution globally.",
    stats: "99.99% Platform Uptime",
    gradient: "from-cyan via-primary to-accent",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Universities, K-12 schools, and corporate learning platforms benefit from our subscription management, LMS integrations, and accessible content delivery systems.",
    stats: "2,500+ Educational Partners",
    gradient: "from-primary to-cyan",
  },
  {
    icon: Newspaper,
    title: "Media & Entertainment",
    description: "Newspapers, magazines, and entertainment companies leverage our content management and digital distribution infrastructure for their audiences worldwide.",
    stats: "1B+ Content Deliveries",
    gradient: "from-accent to-primary",
  },
];

export const WhoWeServeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="who-we-serve" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-3xl" />
      
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
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-accent/10 to-cyan/10 text-accent text-sm font-semibold mb-6 border border-accent/20"
          >
            Our Clients
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Who We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations in the global content ecosystem. From enterprise publishers 
            to regional libraries, we power digital transformation at every scale.
          </p>
        </motion.div>

        {/* Audiences Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`h-full p-8 rounded-3xl glass-card-strong border-2 transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'border-primary/40 -translate-y-4 shadow-glow' 
                  : 'border-transparent shadow-lg'
              }`}>
                {/* Icon */}
                <motion.div 
                  animate={{ 
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 5 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow transition-shadow duration-500`}
                >
                  <audience.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300 mb-4">
                  {audience.description}
                </p>

                {/* Stats Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${audience.gradient} bg-opacity-10 text-xs font-semibold`}>
                  <span className="text-foreground/80">{audience.stats}</span>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-6 right-6"
                >
                  <ArrowRight className="w-5 h-5 text-primary" />
                </motion.div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-widest">Trusted by Industry Leaders Worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Enterprise Publishers', 'Academic Institutions', 'Public Libraries', 'Digital Retailers', 'Media Companies'].map((partner, i) => (
              <motion.div 
                key={partner}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="px-4 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm text-muted-foreground"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};