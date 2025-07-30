
// Neural Tech Stack Interface
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Code, Zap, Shield, Terminal } from 'lucide-react';

// Neural tech stack data
const neuralTechStack = [
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', status: 'ACTIVE', level: 95 },
  { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', status: 'ACTIVE', level: 90 },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', status: 'ONLINE', level: 88 },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', status: 'ACTIVE', level: 85 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', status: 'ACTIVE', level: 92 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', status: 'ONLINE', level: 80 },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', status: 'ACTIVE', level: 94 },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', status: 'ONLINE', level: 96 },
];

const TechStackCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const startAnimation = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'running';
    }
  };
  
  const stopAnimation = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Neural Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-mono">TECH.STACK.LOADED</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-4 font-heading">Neural Technology Matrix</h3>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            &gt; SCANNING ACTIVE NEURAL PATHWAYS...
            <br />
            &gt; TECHNICAL_PROFICIENCY: ADVANCED
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Neural Tech Display */}
          <div 
            ref={containerRef}
            className="flex space-x-8 py-8"
            style={{
              animation: 'neuralScroll 25s linear infinite',
              width: 'fit-content',
            }}
            onMouseEnter={stopAnimation}
            onMouseLeave={startAnimation}
          >
            {[...neuralTechStack, ...neuralTechStack].map((tech, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center group transition-all duration-500 hover:scale-110"
                whileHover={{ y: -5 }}
              >
                <div className="relative bg-black/40 backdrop-blur-sm border border-primary/20 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 w-24 h-24 flex items-center justify-center glow-effect">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="h-12 w-12 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                  
                  {/* Status Indicator */}
                  <div className="absolute -top-2 -right-2 flex items-center gap-1 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full font-mono">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    {tech.status}
                  </div>
                  
                  {/* Proficiency Bar */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-border/50 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <span className="text-sm font-mono text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                  <div className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.level}% PROFICIENCY
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Gradient overlays with neural styling */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background to-transparent"></div>
        </div>

        {/* Neural Stats Display */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Code, label: 'LANGUAGES', value: '8+' },
            { icon: Database, label: 'FRAMEWORKS', value: '12+' },
            { icon: Zap, label: 'PERFORMANCE', value: '99%' },
            { icon: Shield, label: 'RELIABILITY', value: '100%' }
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
      
      {/* Neural Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes neuralScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `
      }} />
    </section>
  );
};

export default TechStackCarousel;
