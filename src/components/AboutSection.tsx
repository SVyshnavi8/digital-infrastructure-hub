import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const reasons = [
  "Deep expertise in content platforms & library systems",
  "Proven cloud & enterprise infrastructure leadership",
  "Strong publisher & library ecosystem focus",
  "Secure, compliant, and scalable by design",
  "Long-term platform modernization mindset",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              About iGenie Labs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              iGenie Labs is a digital technology company focused on building, operating, and scaling 
              enterprise platforms for content distribution, commerce, and data infrastructure. Our 
              systems support publishers, libraries, and digital media organizations with secure, 
              compliant, high-availability platforms that power modern content ecosystems.
            </p>

            {/* Why iGenie Labs */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Why iGenie Labs
              </h3>
              <ul className="space-y-3">
                {reasons.map((reason, index) => (
                  <motion.li
                    key={reason}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground/80">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-card rounded-3xl border border-border/50 shadow-elevated overflow-hidden">
                {/* Abstract Tech Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,hsl(var(--accent)/0.1)_25%,transparent_25%,transparent_75%,hsl(var(--accent)/0.1)_75%)] bg-[size:60px_60px]" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-8">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 shadow-glow">
                    <span className="text-4xl font-heading font-bold text-primary-foreground">iG</span>
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-foreground mb-2">iGenie Labs</h4>
                  <p className="text-muted-foreground text-center text-sm max-w-xs">
                    Powering the future of digital content infrastructure
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8 w-full">
                    {[
                      { value: "Enterprise", label: "Scale" },
                      { value: "99.9%", label: "Uptime" },
                      { value: "Global", label: "Reach" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-3 rounded-xl bg-muted/50">
                        <div className="text-lg font-heading font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
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
