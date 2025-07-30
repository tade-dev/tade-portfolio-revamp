// Neural Package Repository
import { ExternalLink, Github, Star, Download, Package2, Terminal, Code, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Packages = () => {
  const packages = [
    {
      name: "custom_marker_builder",
      description: "A Flutter package for creating custom markers for Google Maps with enhanced styling and animation options.",
      platform: "Flutter/Dart",
      pubUrl: "https://pub.dev/packages/custom_marker_builder",
      githubUrl: "https://github.com/tade-dev/custom_map_marker_builder",
      version: "0.0.4",
      downloads: "200+",
      likes: "5",
      tags: ["Flutter", "Google Maps", "Markers", "Customization"],
      status: "ACTIVE",
      neural_id: "PKG_001"
    }
  ];

  return (
    <section id="packages" className="bg-gradient-to-br from-background via-muted/10 to-background section-spacing relative overflow-hidden">
      {/* Neural Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4 glow-effect">
            <Package2 className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-mono">PACKAGE.REPOSITORY.LOADED</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-heading">
            Open Source Neural Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            &gt; SCANNING OPEN SOURCE CONTRIBUTIONS...
            <br />
            &gt; COMMUNITY_IMPACT: ENHANCED | DEVELOPER_TOOLS: OPTIMIZED
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              className="bg-black/20 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:border-primary/40 transition-all duration-500 group hover:-translate-y-2 glow-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-8">
                {/* Neural Package Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="text-primary text-xs font-mono">{pkg.neural_id}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-accent text-xs font-mono">{pkg.status}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-3 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <Package2 className="w-full h-full text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors font-mono text-foreground">
                      {pkg.name}
                    </h3>
                    <p className="text-accent font-medium text-sm font-mono">{pkg.platform}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed font-mono text-sm">
                  &gt; {pkg.description}
                </p>

                {/* Neural Package Metrics */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {pkg.downloads && (
                    <motion.div 
                      className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-mono border border-primary/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Download className="w-3 h-3" />
                      {pkg.downloads}
                    </motion.div>
                  )}
                  {pkg.likes && (
                    <motion.div 
                      className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-mono border border-accent/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Star className="w-3 h-3" />
                      {pkg.likes}
                    </motion.div>
                  )}
                  <Badge variant="outline" className="text-xs font-mono border-border/50">
                    v{pkg.version}
                  </Badge>
                </div>
                
                {/* Neural Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-lg text-xs font-mono border bg-muted/20 text-muted-foreground border-border/30 hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Neural Action Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={pkg.pubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-primary/90 hover:bg-primary text-primary-foreground rounded-xl text-sm font-mono transition-colors flex-1 justify-center shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    PUB.DEV
                  </motion.a>
                  {pkg.githubUrl && (
                    <motion.a
                      href={pkg.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3 border border-primary/30 text-primary rounded-xl text-sm font-mono hover:bg-primary/10 transition-colors bg-black/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Neural Repository Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Code, label: 'PACKAGES', value: '1+' },
            { icon: Download, label: 'DOWNLOADS', value: '200+' },
            { icon: Star, label: 'STARS', value: '5+' },
            { icon: Database, label: 'PLATFORMS', value: '2' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-muted/20 backdrop-blur-sm border border-border/50 rounded-lg p-4 text-center hover:border-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-lg font-bold text-foreground font-mono">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;