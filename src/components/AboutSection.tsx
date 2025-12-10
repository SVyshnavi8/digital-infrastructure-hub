import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, TrendingUp, Users, Globe, Zap } from "lucide-react";

const reasons = [
  { text: "Deep expertise in content platforms & library systems", icon: Users },
  { text: "Proven cloud & enterprise infrastructure leadership", icon: TrendingUp },
  { text: "Strong publisher & library ecosystem focus", icon: Globe },
  { text: "Secure, compliant, and scalable by design", icon: Check },
  { text: "Long-term platform modernization mindset", icon: Zap },
];

const stats = [
  { value: "Enterprise", label: "Scale", suffix: "" },
  { value: "99.9", label: "Uptime", suffix: "%" },
  { value: "Global", label: "Reach", suffix: "" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-5 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 border border-accent/20"
            >
              About Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8">
              About <span className="gradient-text">iGenie Labs</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              iGenie Labs is a digital technology company focused on building, operating, and scaling 
              enterprise platforms for content distribution, commerce, and data infrastructure. Our 
              systems support publishers, libraries, and digital media organizations with secure, 
              compliant, high-availability platforms that power modern content ecosystems.
            </p>

            {/* Why iGenie Labs */}
            <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-lg">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Why iGenie Labs
              </h3>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.li
                    key={reason.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                      <reason.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground/80 pt-2 group-hover:text-foreground transition-colors duration-300">{reason.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Shapes */}
              <motion.div 
                animate={{ rotate: [6, 8, 6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem]"
              />
              <motion.div 
                animate={{ rotate: [-3, -5, -3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-[2rem]"
              />
              
              <div className="absolute inset-0 glass-card-strong rounded-[2rem] overflow-hidden">
                {/* Abstract Tech Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,hsl(var(--accent)/0.08)_25%,transparent_25%,transparent_75%,hsl(var(--accent)/0.08)_75%)] bg-[size:40px_40px]" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-10">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-28 h-28 rounded-3xl bg-gradient-hero flex items-center justify-center mb-8 shadow-2xl animate-pulse-glow"
                  >
                    <span className="text-5xl font-heading font-bold text-primary-foreground">iG</span>
                  </motion.div>
                  <h4 className="text-3xl font-heading font-bold text-foreground mb-3">iGenie Labs</h4>
                  <p className="text-muted-foreground text-center max-w-xs mb-10">
                    Powering the future of digital content infrastructure
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {stats.map((stat, index) => (
                      <motion.div 
                        key={stat.label} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="text-center p-4 rounded-2xl bg-muted/50 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="text-2xl font-heading font-bold gradient-text">{stat.value}{stat.suffix}</div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};