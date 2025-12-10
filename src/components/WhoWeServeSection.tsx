import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Library, Truck, Monitor, GraduationCap } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Publishers",
    description: "Major publishers trust our platforms for secure content distribution and metadata management.",
  },
  {
    icon: Library,
    title: "Libraries",
    description: "Library systems worldwide leverage our digital lending and access infrastructure.",
  },
  {
    icon: Truck,
    title: "Content Distributors",
    description: "Distribution partners rely on our ordering and fulfillment platforms.",
  },
  {
    icon: Monitor,
    title: "Digital Media Platforms",
    description: "Media organizations use our cloud infrastructure for content delivery at scale.",
  },
  {
    icon: GraduationCap,
    title: "Educational Providers",
    description: "Educational content providers benefit from our subscription and access systems.",
  },
];

export const WhoWeServeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="who-we-serve" className="section-padding bg-background">
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
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations in the content ecosystem
          </p>
        </motion.div>

        {/* Audiences Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
