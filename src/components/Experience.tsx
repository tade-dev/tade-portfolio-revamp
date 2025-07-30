
// Neural Experience Archive
import { Calendar, Award, Briefcase, ExternalLink, Terminal, Cpu, Database, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  
  const neuralTimeline = [
    {
      year: "September 2024 - Present",
      title: "Mobile Neural Engineer",
      company: "Zabira Technologies",
      companyLink: "https://www.zabira.com",
      location: "Lagos, Nigeria (Remote Neural Link)",
      description: [
        "Engineered neural pathways for 3,000+ daily active users in crypto trading and gift card exchange protocols, using Flutter neural networks for cross-platform deployment.",
        "Implemented fiat payment and withdrawal neural flows, integrating KYC and bank account verification systems that reduced failed transactions by 35% and optimized onboarding sequences by 20%.",
        "Collaborated with backend and product neural networks to deploy biweekly updates, resolving 15+ system anomalies per cycle, optimizing load sequences by 30%, maintaining 99.5% stability rating."
      ],
      technologies: "Flutter | Swift | Firebase | Dart | BLOC | GIT",
      status: "ACTIVE",
      impact: { users: "3K+", improvement: "35%", stability: "99.5%" }
    },
    {
      year: "November 2022 - July 2024",
      title: "Lead Mobile Neural Architect",
      company: "Scnip Capitol Ltd",
      companyLink: "https://www.scnip.com",
      location: "Abuja, Nigeria (Hybrid Neural Interface)",
      description: [
        "Led development of cross-platform mobile neural networks for multiple clients, delivering scalable, high-performance solutions using Flutter across fintech and enterprise platforms.",
        "Designed modular neural architectures and reusable components, reducing development cycles by 30% and ensuring easier maintenance across diverse client requirements.",
        "Managed and mentored a team of 3 neural developers, driving code quality, sprint planning, and CI/CD workflows that achieved 95% on-time delivery rate across 5+ mission-critical projects."
      ],
      technologies: "Flutter | Firebase | Dart | Getx | GIT | Shorebird",
      status: "ARCHIVED",
      impact: { efficiency: "30%", delivery: "95%", projects: "5+" }
    }
  ];

  return (
    <section id="experience" className="bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden section-spacing">
      {/* Neural Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-8 py-24 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4 glow-effect">
            <Database className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-mono">EXPERIENCE.ARCHIVE.LOADED</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-heading">
            Neural Experience Matrix
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            &gt; SCANNING PROFESSIONAL NEURAL PATHWAYS...
            <br />
            &gt; 4+ YEARS OF HIGH-IMPACT MOBILE ARCHITECTURE
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            <div className="relative pl-8 border-l-2 border-gradient-to-b from-primary to-accent space-y-14">
              {neuralTimeline.map((mission, index) => (
                <motion.div 
                  key={index} 
                  className="relative bg-black/20 backdrop-blur-sm border border-primary/20 p-8 rounded-xl shadow-lg hover:border-primary/40 transition-all duration-300 group glow-effect"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Neural Timeline Node */}
                  <div className="absolute -left-[43px] w-7 h-7 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="text-primary-foreground" size={16} />
                  </div>
                  
                  {/* Mission Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground font-mono">
                      <Calendar size={14} className="mr-2" /> 
                      {mission.year}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-mono border ${
                      mission.status === 'ACTIVE' 
                        ? 'bg-primary/10 text-primary border-primary/30' 
                        : 'bg-muted/20 text-muted-foreground border-border/30'
                    }`}>
                      {mission.status}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 font-mono">
                    {mission.title}
                  </h4>
                  
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-primary font-semibold font-mono">{mission.company}</p>
                    <a href={mission.companyLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="text-accent hover:text-primary transition-colors" />
                    </a>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 font-mono">
                    {mission.location}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-mono bg-accent/10 text-accent border border-accent/20">
                      <Terminal className="w-4 h-4 mr-2" />
                      {mission.technologies}
                    </span>
                  </div>
                  
                  {/* Mission Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/10 rounded-lg border border-border/30">
                    {Object.entries(mission.impact).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary font-mono">{value}</div>
                        <div className="text-xs text-muted-foreground font-mono uppercase">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <ul className="text-muted-foreground space-y-3 font-mono text-sm">
                    {mission.description.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="leading-relaxed border-l-2 border-primary/30 pl-4 hover:border-primary/60 transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        &gt; {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
