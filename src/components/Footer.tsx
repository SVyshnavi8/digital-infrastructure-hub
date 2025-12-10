import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const navigation = {
  solutions: [
    { name: "Digital Platforms", href: "#platforms" },
    { name: "Cloud Infrastructure", href: "#what-we-do" },
    { name: "Commerce Systems", href: "#platforms" },
    { name: "Applied AI", href: "#what-we-do" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "For Publishers", href: "#publishers" },
    { name: "Security & Trust", href: "#security" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Platform Overview", href: "#" },
    { name: "Technology Stack", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Documentation", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@igenielabs.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-foreground/5 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="container-wide py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-glow">
                <span className="text-accent-foreground font-heading font-bold text-xl">iG</span>
              </div>
              <span className="font-heading font-semibold text-2xl">iGenie Labs</span>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-primary-foreground/70 leading-relaxed max-w-sm mb-8"
            >
              Enterprise digital platforms for content distribution, commerce, and data infrastructure. 
              Powering the modern content ecosystem.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group w-11 h-11 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary-foreground/70 group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Navigation Columns */}
          {[
            { title: "Solutions", items: navigation.solutions },
            { title: "Company", items: navigation.company },
            { title: "Resources", items: navigation.resources },
          ].map((column, columnIndex) => (
            <motion.div 
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (columnIndex + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="font-heading font-semibold text-lg mb-6">{column.title}</h4>
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-1 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} iGenie Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};