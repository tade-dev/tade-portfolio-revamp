
import { ArrowRight, FileText, Code, Terminal, Smartphone, Zap, ChevronRight, Play, Cpu, Wifi, Signal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [commandOutput, setCommandOutput] = useState('');

  const terminalCommands = [
    {
      command: '$ system.initialize --mode=developer',
      output: 'Loading neural pathways...\n✓ Flutter SDK activated\n✓ SwiftUI environment ready\n✓ Mobile architecture online'
    },
    {
      command: '$ skills.analyze --expertise=mobile',
      output: 'Scanning capabilities...\n✓ Cross-platform development: 95%\n✓ Native iOS: 92%\n✓ Performance optimization: 98%'
    },
    {
      command: '$ portfolio.deploy --showcase=true',
      output: 'Deploying showcase...\n✓ Projects compiled\n✓ Testimonials verified\n✓ Ready for collaboration'
    }
  ];

  const systemStats = [
    { label: 'CPU: Flutter Engine', value: '98%', color: 'text-primary' },
    { label: 'RAM: Swift Memory', value: '94%', color: 'text-accent' },
    { label: 'NET: Mobile Protocols', value: '99%', color: 'text-primary' },
    { label: 'GPU: UI Rendering', value: '96%', color: 'text-accent' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % terminalCommands.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = "NEURAL_NET_DEVELOPER";
    let index = 0;
    setTypedText('');
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const currentCmd = terminalCommands[currentCommand];
    setCommandOutput('');
    
    let index = 0;
    const outputInterval = setInterval(() => {
      if (index < currentCmd.output.length) {
        setCommandOutput(currentCmd.output.slice(0, index + 1));
        index++;
      } else {
        clearInterval(outputInterval);
      }
    }, 30);

    return () => clearInterval(outputInterval);
  }, [currentCommand]);

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
            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 glow-effect"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium font-mono">SYSTEM.ONLINE</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              NEURAL{' '}
              <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text">
                INTERFACE
              </span>{' '}
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-mono">
                [ Mobile Developer ]
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-mono"
            >
              &gt; <strong className="text-foreground">IDENTITY:</strong> Akintade Oluwaseun
              <br />
              &gt; <strong className="text-foreground">ROLE:</strong>{' '}
              <span className="text-primary">
                {typedText}
                <span className="animate-pulse text-accent">█</span>
              </span>
              <br />
              &gt; <strong className="text-foreground">SPECIALIZATION:</strong>{' '}
              <span className="text-primary">Flutter</span> |{' '}
              <span className="text-accent">SwiftUI</span> |{' '}
              <span className="text-primary">Native Mobile</span>
            </motion.div>
            
            {/* System Performance */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {systemStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-muted/20 backdrop-blur-sm border border-border/50 rounded-lg p-3"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-muted-foreground">{stat.label}</span>
                    <span className={`text-sm font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                  <div className="w-full bg-border/30 rounded-full h-1 mt-2">
                    <motion.div 
                      className={`h-1 rounded-full bg-gradient-to-r from-primary to-accent`}
                      initial={{ width: 0 }}
                      animate={{ width: stat.value }}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    />
                  </div>
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
          
          {/* Holographic Terminal Interface */}
          <motion.div 
            className="relative max-w-lg mx-auto"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Terminal Window */}
            <div className="relative bg-black/90 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden shadow-2xl mb-8 glow-effect">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-black/80 border-b border-primary/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500/80 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500/80 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-green-500/80 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-mono">neural_interface.exe</span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-accent animate-pulse" />
                  <Wifi className="w-4 h-4 text-primary" />
                  <Signal className="w-4 h-4 text-primary" />
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 h-80 overflow-hidden bg-black/40">
                <div className="mb-4">
                  <motion.div
                    className="text-primary font-mono text-sm mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <span className="text-accent">user@neural-dev:~$</span> whoami
                  </motion.div>
                  <motion.div
                    className="text-muted-foreground font-mono text-sm mb-4 pl-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    akintade_oluwaseun [mobile_architect] [neural_interface_v2.1]
                  </motion.div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCommand}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-primary font-mono text-sm mb-2">
                      <span className="text-accent">user@neural-dev:~$</span> {terminalCommands[currentCommand].command}
                    </div>
                    <motion.pre
                      className="text-muted-foreground font-mono text-xs leading-relaxed pl-4 whitespace-pre-wrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {commandOutput}
                    </motion.pre>
                  </motion.div>
                </AnimatePresence>

                {/* Cursor */}
                <motion.div
                  className="inline-block w-2 h-4 bg-primary mt-4"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            {/* Mobile Stats Grid - Visible only on mobile */}
            <div className="md:hidden mb-8">
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-3 text-center"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Terminal className="w-6 h-6 text-primary mx-auto mb-1" />
                  <span className="text-xs font-mono text-primary">ACTIVE</span>
                </motion.div>
                
                <motion.div
                  className="bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-lg p-3 text-center"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Cpu className="w-6 h-6 text-accent mx-auto mb-1" />
                  <span className="text-xs font-mono text-accent">98%</span>
                </motion.div>
                
                <motion.div
                  className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-3 text-center"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Wifi className="w-6 h-6 text-primary mx-auto mb-1" />
                  <span className="text-xs font-mono text-primary">ONLINE</span>
                </motion.div>
                
                <motion.div
                  className="bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-lg p-3 text-center"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <Signal className="w-6 h-6 text-accent mx-auto mb-1" />
                  <span className="text-xs font-mono text-accent">STRONG</span>
                </motion.div>
              </div>
            </div>

            {/* Holographic Profile Display */}
            <motion.div 
              className="relative group mx-auto w-64 h-64"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Holographic Frame */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
                <div className="absolute inset-2 rounded-xl overflow-hidden">
                  <img
                    src="/lovable-uploads/e46c35fc-511f-4e9b-888f-4fb6b81b4c12.png"
                    alt="Akintade - Neural Interface Developer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: 'center top' }}
                    decoding="async"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10" />
                  
                  {/* Scanning Lines Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-8"
                    animate={{ y: [-32, 288] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
              
              {/* Status Indicators */}
              <motion.div
                className="absolute -top-3 -right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-lg text-xs font-mono shadow-lg flex items-center gap-2 animated-border"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                NEURAL.ACTIVE
              </motion.div>
              
              {/* Floating Data Points */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-2 rounded-lg text-xs font-mono shadow-lg"
                animate={{ x: [0, 3, 0], rotate: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  <span>FLUTTER.DEV</span>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute top-1/4 -right-6 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-2 rounded-lg text-xs font-mono shadow-lg"
                animate={{ x: [0, -3, 0], rotate: [0, -1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <span>iOS.EXPERT</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
