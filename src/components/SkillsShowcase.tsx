// Neural Skills Interface
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Server, Brain, Rocket, Star, Terminal, Zap, Database, Cpu } from 'lucide-react';

const SkillsShowcase = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  
  const skills = [
    {
      id: 'flutter',
      name: 'Flutter',
      icon: <Smartphone className="h-6 w-6" />,
      color: 'from-blue-400 to-cyan-400',
      neural_id: 'SKILL_001',
      proficiency: 95,
      details: [
        'Cross-platform mobile development',
        'Custom animations & UI',
        'State management (Provider, BLoC)',
        'Firebase integration',
      ]
    },
    {
      id: 'swift',
      name: 'SwiftUI',
      icon: <Rocket className="h-6 w-6" />,
      color: 'from-orange-400 to-red-400',
      neural_id: 'SKILL_002',
      proficiency: 92,
      details: [
        'Native iOS development',
        'Modern UI components',
        'Swift concurrency',
        'Core Data & CloudKit',
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: <Server className="h-6 w-6" />,
      color: 'from-purple-400 to-indigo-400',
      neural_id: 'SKILL_003',
      proficiency: 88,
      details: [
        'RESTful API design',
        'Firebase',
        'Supabase',
        'Node.js services',
      ]
    },
    {
      id: 'ai',
      name: 'AI Integration',
      icon: <Brain className="h-6 w-6" />,
      color: 'from-green-400 to-emerald-400',
      neural_id: 'SKILL_004',
      proficiency: 90,
      details: [
        'OpenAI API integration',
        'Claude & GPT implementation',
        'ML model training',
        'Generative AI features',
      ]
    },
  ];

  return (
    <section id="skills" className="bg-gradient-to-br from-background via-muted/10 to-background section-spacing relative overflow-hidden">
      {/* Neural Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4 glow-effect">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-mono">SKILL.MATRIX.LOADED</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-heading">
            Neural Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            &gt; SCANNING NEURAL SKILL PATHWAYS...
            <br />
            &gt; TECHNICAL_PROFICIENCY: MAXIMUM | LEARNING_MODE: ACTIVE
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="relative bg-black/20 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg hover:border-primary/40 p-6 text-center group cursor-pointer transition-all duration-500 hover:-translate-y-2 glow-effect"
              onMouseEnter={() => setActiveSkill(skill.id)}
              onMouseLeave={() => setActiveSkill(null)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Neural Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3 h-3 text-primary" />
                  <span className="text-primary text-xs font-mono">{skill.neural_id}</span>
                </div>
                <div className="text-accent text-xs font-mono">{skill.proficiency}%</div>
              </div>

              {/* Neural Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Neural Icon */}
              <motion.div 
                className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center mb-4 text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300 border border-primary/20`}
                whileHover={{ rotate: 5 }}
              >
                {skill.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors font-mono">
                {skill.name}
              </h3>

              {/* Neural Proficiency Bar */}
              <div className="mb-4">
                <div className="w-full bg-border/30 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
              
              {/* Neural Skill Details */}
              {activeSkill === skill.id && (
                <motion.div 
                  className="mt-4 text-left"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="space-y-2 text-muted-foreground">
                    {skill.details.map((detail, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-center text-sm font-mono"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="w-1 h-1 bg-primary rounded-full mr-3 animate-pulse"></div>
                        <span>&gt; {detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {/* Default Neural State */}
              {activeSkill !== skill.id && (
                <p className="text-muted-foreground text-sm font-mono">
                  &gt; HOVER.TO.ANALYZE
                </p>
              )}

              {/* Neural Activity Indicator */}
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Neural System Overview */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Code, label: 'LANGUAGES', value: '8+' },
            { icon: Database, label: 'FRAMEWORKS', value: '12+' },
            { icon: Zap, label: 'PERFORMANCE', value: '99%' },
            { icon: Brain, label: 'AI INTEGRATION', value: '100%' }
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

export default SkillsShowcase;