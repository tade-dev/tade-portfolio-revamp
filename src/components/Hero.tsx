
import { ArrowRight, FileText, Code, Terminal, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentCode, setCurrentCode] = useState(0);
  const [typedText, setTypedText] = useState('');

  const codeSnippets = [
    `// Flutter Widget
Widget build(BuildContext context) {
  return Scaffold(
    body: AnimatedContainer(
      duration: Duration(milliseconds: 300),
      child: Column(children: [...]),
    ),
  );
}`,
    `// SwiftUI View
struct ContentView: View {
  @State private var isAnimating = false
  
  var body: some View {
    VStack {
      Text("Hello World")
        .animation(.spring(), value: isAnimating)
    }
  }
}`,
    `// Performance Optimization
class PerformanceManager {
  static optimize() {
    // Memory management
    // Lazy loading
    // Efficient rendering
  }
}`
  ];

  const techStack = [
    { name: 'Flutter', color: 'text-primary', icon: '🚀' },
    { name: 'SwiftUI', color: 'text-secondary-foreground', icon: '📱' },
    { name: 'Dart', color: 'text-primary', icon: '⚡' },
    { name: 'Swift', color: 'text-accent-foreground', icon: '🔥' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = "Mobile Developer";
    let index = 0;
    setTypedText('');
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('https://drive.google.com/file/d/18-qbXo3Zb-uz5tVHQCFkYfX_jfdXZVvL/view?usp=sharing', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background pt-16 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tech label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Senior Mobile Engineer</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight font-heading text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Building{' '}
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Next-Gen
              </span>{' '}
              <br />
              Mobile Apps
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Hi, I'm <strong className="text-foreground">Akintade Oluwaseun</strong>, a passionate{' '}
              <span className="text-primary font-mono">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>{' '}
              based in Nigeria with <strong className="text-foreground">4+ years of experience</strong> building{' '}
              <span className="text-accent-foreground font-semibold">cross-platform mobile applications</span>.
              <br />
              I specialize in creating high-performance apps using{' '}
              <span className="text-primary font-semibold">Flutter</span>,{' '}
              <span className="text-accent-foreground font-semibold">SwiftUI</span>, and modern mobile development technologies.
            </motion.div>
            
            {/* Tech Stack Pills */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-2 bg-muted/50 border border-border rounded-full px-4 py-2 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary) / 0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className={`text-sm font-medium ${tech.color}`}>{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button 
                size="lg" 
                className="text-base lg:text-lg px-8 py-6 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                onClick={scrollToContact}
                aria-label="Contact Akintade for mobile development services"
              >
                <Zap className="mr-2 h-5 w-5" />
                Let's Build Something
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="text-base lg:text-lg px-8 py-6 font-semibold border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={openResume}
                aria-label="View Akintade's resume"
              >
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Code Display & Profile */}
          <motion.div 
            className="relative max-w-lg mx-auto"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Code Editor Window - Hidden on mobile */}
            <div className="relative bg-muted/90 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-2xl mb-8 hidden md:block">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Code className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm font-mono">mobile_app.{currentCode === 0 ? 'dart' : currentCode === 1 ? 'swift' : 'js'}</span>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-4 h-64 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={currentCode}
                    className="text-sm text-muted-foreground font-mono leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <code>{codeSnippets[currentCode]}</code>
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Tech Showcase - Visible only on mobile */}
            <div className="md:hidden mb-8">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-4 text-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Smartphone className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-sm font-semibold text-primary">Flutter</span>
                </motion.div>
                
                <motion.div
                  className="bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-xl p-4 text-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Code className="w-8 h-8 text-accent mx-auto mb-2" />
                  <span className="text-sm font-semibold text-accent">SwiftUI</span>
                </motion.div>
                
                <motion.div
                  className="bg-muted/50 backdrop-blur-sm border border-border rounded-xl p-4 text-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <Terminal className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <span className="text-sm font-semibold text-muted-foreground">Native</span>
                </motion.div>
                
                <motion.div
                  className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-4 text-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-sm font-semibold text-primary">Fast</span>
                </motion.div>
              </div>
            </div>

            {/* Profile Image */}
            <motion.div 
              className="relative group mx-auto w-64 h-64"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <img
                  src="/lovable-uploads/e46c35fc-511f-4e9b-888f-4fb6b81b4c12.png"
                  alt="Akintade - Mobile Developer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: 'center top' }}
                  decoding="async"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
              
              {/* Status Badge */}
              <motion.div
                className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                Available
              </motion.div>
              
              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-3 rounded-xl shadow-lg flex items-center gap-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Smartphone className="w-5 h-5" />
                <span className="font-semibold text-sm">Flutter Dev</span>
              </motion.div>
              
              <motion.div
                className="absolute top-1/4 -right-6 bg-accent/90 backdrop-blur-sm text-accent-foreground px-4 py-3 rounded-xl shadow-lg flex items-center gap-2"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Code className="w-5 h-5" />
                <span className="font-semibold text-sm">iOS Expert</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
