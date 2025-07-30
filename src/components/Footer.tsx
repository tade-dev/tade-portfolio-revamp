// Neural Footer Interface
import { Github, Linkedin, Heart, Terminal, Zap, Code } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Neural Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Neural Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        {/* Neural Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4 glow-effect">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-mono">NEURAL.FOOTER.LOADED</span>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#home" 
              className="group relative block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl font-bold font-mono cursor-pointer text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text">
                tade.me
              </span>
              {/* Neural Glow Effect */}
              <motion.div 
                className="absolute inset-0 text-3xl font-bold font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text blur-sm"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                tade.me
              </motion.div>
            </motion.a>
            <motion.p 
              className="text-muted-foreground max-w-md mt-4 font-mono text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              &gt; SPECIALIZED IN DELIVERING HIGH-QUALITY MOBILE APPLICATIONS
              <br />
              &gt; FLUTTER | SWIFT | NEURAL MOBILE ARCHITECTURE
            </motion.p>
          </motion.div>
          
          {/* Neural Social Links */}
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { href: "https://www.github.com/tade-dev", icon: Github, color: "from-purple-500/20 to-blue-500/20" },
              { href: "https://www.linkedin.com/in/oluwaseun-akintade-620b26223/", icon: Linkedin, color: "from-blue-500/20 to-cyan-500/20" },
              { href: "https://www.x.com/tadeDev_", icon: Code, color: "from-accent/20 to-primary/20" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-black/20 backdrop-blur-sm border border-primary/20 rounded-xl text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Neural Activity Indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        {/* Neural Divider */}
        <motion.div 
          className="border-t border-primary/20 pt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-muted-foreground text-sm mb-4 md:mb-0 font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              &copy; {currentYear} OLUWASEUN_AKINTADE | ALL_RIGHTS_RESERVED
            </motion.p>
            <motion.p 
              className="text-muted-foreground text-sm flex items-center font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              CRAFTED.WITH 
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-2"
              >
                <Heart size={16} className="text-primary" />
              </motion.div>
              USING REACT & NEURAL.CSS
            </motion.p>
          </div>
        </motion.div>

        {/* Neural System Status */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>SYSTEM.ONLINE</span>
            </div>
            <span>|</span>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-accent" />
              <span>PERFORMANCE.OPTIMAL</span>
            </div>
            <span>|</span>
            <div className="flex items-center gap-1">
              <Terminal className="w-3 h-3 text-primary" />
              <span>READY.FOR.COLLABORATION</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;