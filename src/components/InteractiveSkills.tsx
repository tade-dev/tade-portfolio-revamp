// Neural Interactive Skills Matrix
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Brain, Code, Palette, TestTube, Upload, Terminal, Cpu, Database, Zap, Monitor } from 'lucide-react';

const InteractiveSkills = () => {
  const skillCategories = [
    {
      title: "Mobile Frameworks",
      icon: <Smartphone className="h-5 w-5" />,
      neural_id: "CAT_001",
      skills: [
        { name: "Flutter", level: 95 },
        { name: "SwiftUI", level: 92 },
        { name: "iOS SDK", level: 90 },
        { name: "Android SDK", level: 85 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      neural_id: "CAT_002", 
      skills: [
        { name: "Dart", level: 94 },
        { name: "Swift", level: 92 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 90 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="h-5 w-5" />,
      neural_id: "CAT_003",
      skills: [
        { name: "Firebase", level: 92 },
        { name: "Supabase", level: 88 },
        { name: "RESTful APIs", level: 90 },
        { name: "Git & CI/CD", level: 89 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="h-5 w-5" />,
      neural_id: "CAT_004",
      skills: [
        { name: "Custom Animations", level: 93 },
        { name: "Material Design", level: 91 },
        { name: "Human Interface", level: 90 },
        { name: "Responsive Design", level: 94 }
      ]
    },
    {
      title: "State Management",
      icon: <Brain className="h-5 w-5" />,
      neural_id: "CAT_005",
      skills: [
        { name: "BLoC Pattern", level: 95 },
        { name: "Provider", level: 90 },
        { name: "MVVM", level: 88 },
        { name: "GetX", level: 87 }
      ]
    },
    {
      title: "Testing & QA",
      icon: <TestTube className="h-5 w-5" />,
      neural_id: "CAT_006",
      skills: [
        { name: "Unit Testing", level: 89 },
        { name: "Widget Testing", level: 85 },
        { name: "XCTest", level: 82 },
        { name: "Performance Profiling", level: 88 }
      ]
    },
    {
      title: "Deployment & Distribution",
      icon: <Upload className="h-5 w-5" />,
      neural_id: "CAT_007",
      skills: [
        { name: "App Store Connect", level: 96 },
        { name: "Google Play Console", level: 94 },
        { name: "TestFlight", level: 92 },
        { name: "Shorebird", level: 85 }
      ]
    },
    {
      title: "AI Integration",
      icon: <Brain className="h-5 w-5" />,
      neural_id: "CAT_008",
      skills: [
        { name: "OpenAI APIs", level: 90 },
        { name: "Claude Integration", level: 88 },
        { name: "ML Kit", level: 82 },
        { name: "Core ML", level: 80 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-primary to-accent';
    if (level >= 85) return 'from-accent to-primary';
    return 'from-muted-foreground to-primary';
  };

  return (
    <section className="bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden section-spacing">
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
            <span className="text-primary text-sm font-mono">SKILL.DATABASE.LOADED</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-heading">
            Technical Skills Matrix
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto font-mono">
            &gt; SCANNING COMPREHENSIVE SKILL DATABASE...
            <br />
            &gt; EXPERTISE_LEVEL: PRODUCTION_GRADE | FRAMEWORKS: OPTIMIZED
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-black/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-lg hover:border-primary/40 transition-all duration-500 group glow-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Neural Category Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3 h-3 text-primary" />
                  <span className="text-primary text-xs font-mono">{category.neural_id}</span>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-bold text-foreground text-sm font-mono group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group/skill"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-mono text-muted-foreground group-hover/skill:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-accent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-border/30 rounded-full h-1.5 overflow-hidden">
                      <motion.div 
                        className={`h-1.5 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Neural Professional Summary */}
        <motion.div
          className="mt-16 bg-black/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-lg glow-effect"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Neural Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-mono">PROFESSIONAL.SUMMARY.EXE</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient mb-4 font-mono">
              Production-Ready Mobile Engineer
            </h3>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed font-mono text-sm">
              &gt; SPECIALIZATION: Building scalable mobile applications with <span className="text-primary font-bold">Flutter</span> and <span className="text-accent font-bold">SwiftUI</span>
              <br />
              &gt; EXPERIENCE: Full-stack mobile development, from neural architecture design to App Store deployment
              <br />
              &gt; TRACK_RECORD: High-performance apps serving thousands of active users
            </p>
            
            {/* Neural Achievement Metrics */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                { label: "YEARS_EXPERIENCE", value: "4+", icon: Database },
                { label: "PROJECTS_DELIVERED", value: "30+", icon: Zap },
                { label: "PLATFORM_EXPERT", value: "CROSS", icon: Monitor }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="flex items-center gap-3 px-4 py-3 bg-primary/10 border border-primary/20 text-primary rounded-xl text-sm font-mono hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <metric.icon className="w-4 h-4" />
                  <span>{metric.value}</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-xs">{metric.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Neural System Statistics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Code, label: 'LANGUAGES', value: '8+' },
            { icon: Database, label: 'FRAMEWORKS', value: '12+' },
            { icon: Zap, label: 'EFFICIENCY', value: '95%' },
            { icon: Brain, label: 'AI_INTEGRATION', value: '100%' }
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

export default InteractiveSkills;