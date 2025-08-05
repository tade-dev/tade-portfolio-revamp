
// Neural Interface About Module
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Heart, Coffee, Music, Gamepad2, Book, Film, Dribbble, Trophy, Target, Zap, Users, Terminal, Cpu, Database, Brain } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const neuralInterests = [
    { icon: Film, name: "CINEMA.DATA", description: "Cinematic pattern analysis", color: "text-primary" },
    { icon: Gamepad2, name: "GAME.LOGIC", description: "Strategic neural networks", color: "text-accent" },
    { icon: Dribbble, name: "MOTOR.FUNCTION", description: "Physical coordination algorithms", color: "text-primary" },
    { icon: Book, name: "KNOWLEDGE.BASE", description: "Continuous learning protocols", color: "text-accent" }
  ];

  const neuralStats = [
    { icon: Brain, value: "4+", label: "NEURAL CYCLES", color: "text-primary", description: "Years of experience" },
    { icon: Target, value: "30+", label: "MISSIONS.COMPLETE", color: "text-accent", description: "Projects delivered" },
    { icon: Zap, value: "99%", label: "SUCCESS.RATE", color: "text-primary", description: "Client satisfaction" }
  ];

  const systemSpecs = [
    { name: "FLUTTER.ENGINE", percentage: 95, color: "from-primary to-accent" },
    { name: "SWIFT.CORE", percentage: 90, color: "from-accent to-primary" },
    { name: "PERFORMANCE.OPT", percentage: 92, color: "from-primary to-accent" },
    { name: "UI.NEURAL.NET", percentage: 88, color: "from-accent to-primary" }
  ];

  return (
    <section id="about" className="bg-gradient-to-br from-background via-muted/10 to-background section-spacing relative overflow-hidden">
      {/* Neural Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container max-w-6xl mx-auto px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4 glow-effect">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-mono">NEURAL.PROFILE.LOADING</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-heading">
            Neural Interface Profile
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            &gt; ACCESSING PERSONAL DATABASE...
            <br />
            &gt; BIOGRAPHICAL_DATA: AUTHENTICATED
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Neural Story Module */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-lg mb-8 glow-effect"
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-primary" size={24} />
              <h3 className="text-2xl font-bold text-foreground font-mono">ORIGIN.STORY</h3>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-4 font-mono">
              <p>
                &gt; <span className="text-primary">IDENTITY:</span> Oluwaseun Akintade
                <br />
                &gt; <span className="text-primary">LOCATION:</span> Manchester, UK
                <br />
                &gt; <span className="text-primary">STATUS:</span> Neural Interface Developer
              </p>
              <p className="border-l-2 border-primary/30 pl-4">
                My journey began with curiosity about mobile architecture and evolved into mastering 
                digital neural pathways. I architect experiences that seamlessly integrate with human 
                behavior patterns, optimizing for both performance and cognitive engagement.
              </p>
            </div>
          </motion.div>

          {/* System Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20 mb-8 animated-border"
          >
            <p className="text-foreground text-center text-lg leading-relaxed font-mono">
              "CLEAN.CODE + NEURAL.UI + OPTIMIZED.PERFORMANCE = MOBILE.EXCELLENCE"
            </p>
          </motion.div>

          {/* Neural Interests Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-lg glow-effect"
          >
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="text-accent" size={24} />
              <h3 className="text-2xl font-bold text-foreground font-mono">BEYOND.CODE.MODULE</h3>
            </div>
            <p className="text-muted-foreground mb-6 font-mono">
              &gt; SCANNING NON-TECHNICAL NEURAL PATHWAYS...
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {neuralInterests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-muted/10 backdrop-blur-sm border border-border/30 rounded-xl p-4 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <interest.icon className={`${interest.color} mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`} size={24} />
                  <h4 className="font-semibold text-foreground text-sm mb-1 font-mono">{interest.name}</h4>
                  <p className="text-muted-foreground text-xs font-mono">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Neural Achievement Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {neuralStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="bg-black/20 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-lg text-center hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group glow-effect"
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className={`mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`} size={28} />
              <motion.div
                className="text-2xl font-bold text-foreground mb-1 font-mono"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-primary font-mono font-semibold">{stat.label}</p>
              <p className="text-xs text-muted-foreground font-mono mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* System Proficiency Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-black/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-lg glow-effect"
        >
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="text-primary" size={24} />
            <h3 className="text-2xl font-bold text-foreground font-mono">SYSTEM.PROFICIENCY</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systemSpecs.map((spec, index) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-mono text-foreground">{spec.name}</span>
                  <span className="text-sm font-mono text-primary">{spec.percentage}%</span>
                </div>
                <div className="w-full bg-border/30 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    className={`h-2 rounded-full bg-gradient-to-r ${spec.color}`}
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${spec.percentage}%` } : {}}
                    transition={{ duration: 1.5, delay: 1.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
