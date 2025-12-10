import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, Library, Truck, Monitor, GraduationCap, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Publishers",
    description: "Major publishers trust our platforms for secure content distribution and metadata management.",
    gradient: "from-primary to-primary/70",
  },
  {
    icon: Library,
    title: "Libraries",
    description: "Library systems worldwide leverage our digital lending and access infrastructure.",
    gradient: "from-accent to-accent/70",
  },
  {
    icon: Truck,
    title: "Content Distributors",
    description: "Distribution partners rely on our ordering and fulfillment platforms.",
    gradient: "from-primary/80 to-accent/80",
  },
  {
    icon: Monitor,
    title: "Digital Media",
    description: "Media organizations use our cloud infrastructure for content delivery at scale.",
    gradient: "from-accent/80 to-primary/80",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Educational content providers benefit from our subscription and access systems.",
    gradient: "from-primary/70 to-accent/70",
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
            Our Clients
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Who We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations in the content ecosystem
          </p>
        </motion.div>

        {/* Audiences Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
              <div className={`h-full text-center p-8 rounded-3xl glass-card-strong border-2 transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'border-accent/50 -translate-y-4 shadow-glow' 
                  : 'border-transparent shadow-lg'
              }`}>
                {/* Icon */}
                <motion.div 
                  animate={{ 
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 5 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow transition-shadow duration-500`}
                >
                  <audience.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                  {audience.description}
                </p>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <ArrowRight className="w-5 h-5 mx-auto text-accent" />
                </motion.div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-widest">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-28 h-10 bg-muted rounded-lg" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};