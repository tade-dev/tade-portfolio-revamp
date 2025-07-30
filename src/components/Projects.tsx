import { ExternalLink, Github, Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Foodnify",
      subtitle: "AI-Driven Food Platform",
      description: "Foodnify is the all-in-one food-centric platform where you can connect with chefs, explore and share recipes, and order delicious homemade meals.",
      problem: "Food enthusiasts struggled to find a unified platform for recipe discovery, chef connections, and meal ordering. Existing solutions were fragmented and lacked personalization.",
      role: "Lead Mobile Developer - Designed and implemented the complete mobile application architecture, integrated AI services, and built the user experience from concept to production.",
      techStack: ["Flutter", "Claude AI API", "Swift", "Firebase", "GetX", "RESTful APIs"],
      impact: {
        rating: 5.0,
        downloads: "1k+",
        users: "200"
      },
      screenshots: [
        "/lovable-uploads/7562307a-e675-4afd-bdbc-ec326e328d8f.png",
        "/lovable-uploads/bbda8c53-3069-4e79-89f0-fe8894ff9f4a.png",
        "/lovable-uploads/5df961b1-a326-4210-9309-0040b5cacd8f.png",
        "/lovable-uploads/6d7cda18-467a-486d-ba5d-6ecbe460a4af.png"
      ],
      tags: ["Flutter", "Claude AI API", "Swift", "Firebase", "Getx"],
      imageUrl: "/lovable-uploads/4a6de29a-4abe-4fb6-b076-6943cf4ab07f.png",
      githubUrl: "#",
      liveUrl: "https://foodnify.com",
      appStoreUrl: "https://apps.apple.com/us/app/foodnify/id6615082987",
      playStoreUrl: "https://play.google.com/store/apps/details?id=app.foodnify.com"
    },
    {
      title: "Fuel Alert",
      subtitle: "Fuel Alert System",
      description: "Fuel Alert helps you stay ahead of fluctuating fuel prices by tracking real-time updates and highlighting the best local deals.",
      problem: "Drivers faced uncertainty about fuel prices and struggled to find the most cost-effective gas stations in their area, leading to overspending and inconvenience.",
      role: "Full-Stack Mobile Developer - Built the complete mobile application, integrated Google Maps API, implemented real-time price tracking, and developed the backend infrastructure.",
      techStack: ["Flutter", "Google APIs", "Google Maps", "BLOC", "Firebase", "Real-time Database"],
      impact: {
        rating: 5.0,
        downloads: "100",
        users: "20"
      },
      screenshots: [
        "/lovable-uploads/dd6f4bf5-e559-40de-9fd7-1e00c737112f.png",
        "/lovable-uploads/80d920cb-2f39-445a-92d6-60bb83ce4f91.png",
        "/lovable-uploads/c36e4df0-ef54-440f-9dc3-35262dab271f.png",
        "/lovable-uploads/74023fea-5e88-49ab-b4cb-8390824f4eb4.png"
      ],
      tags: ["Flutter", "Google APIs", "Google Maps", "BLOC", "Firebase"],
      imageUrl: "/lovable-uploads/1b383d6b-ed6c-48ea-a22e-241d3dca578c.png",
      githubUrl: "#",
      liveUrl: "https://fuelalertng.com",
      appStoreUrl: "https://apps.apple.com/ng/app/fuel-alert/id6667118204",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dekon.fuelalert&pcampaignid=web_share"
    },
    {
      title: "Slayt",
      subtitle: "Task management/ Ward Care Platform",
      description: "Slayt is the ultimate task management app designed for parents, providing a seamless solution to delegate chores and responsibilities within the family.",
      problem: "Parents needed a more efficient way to manage household chores and delegate tasks to their children, fostering responsibility and collaboration within the family.",
      role: "Mobile App Developer - Developed the complete mobile application, designed the user interface, and implemented task delegation features.",
      techStack: ["Flutter", "Provider", "Firebase", "RESTful APIs", "User Authentication"],
      impact: {
        rating: 4.7,
        downloads: "500",
        users: "234"
      },
      screenshots: [
        "/lovable-uploads/d1ad8a0e-24ec-430e-8df4-b68011d8da40.png",
        "/lovable-uploads/d1ad8a0e-24ec-430e-8df4-b68011d8da40.png",
        "/lovable-uploads/d1ad8a0e-24ec-430e-8df4-b68011d8da40.png"
      ],
      tags: ["Flutter", "Provider", "Firebase", "RESTful APIs"],
      imageUrl: "/lovable-uploads/d1ad8a0e-24ec-430e-8df4-b68011d8da40.png",
      githubUrl: "#",
      liveUrl: "https://slayt.co",
      appStoreUrl: "https://apps.apple.com/ng/app/slayt-closer-together/id6470950940",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.slayt&pcampaignid=web_share"
    },
    {
      title: "Vybaze",
      subtitle: "AI-Powered Music Feedback & Discovery Platform",
      description: "Vybaze is a cutting-edge music platform designed to help artists improve and promote their sound through AI-driven feedback and community engagement.",
      problem: "Musicians needed a platform to receive structured feedback on their music and connect with a community of fellow artists and fans.",
      role: "Lead iOS Developer - Developed the complete iOS application using SwiftUI, integrated AI feedback services, and built the user experience from concept to production.",
      techStack: ["SwiftUI", "Vapor", "PostgreSQL", "OpenAI API", "Stripe", "User Authentication"],
      impact: {},
      screenshots: [
        "/lovable-uploads/af6079f4-34f2-4ccf-8581-71e640924a08.png",
        "/lovable-uploads/116c85f3-e7f0-4299-ab7c-b12c69ae2a1c.png",
        "/lovable-uploads/e2ca8dc5-2b0d-4d6c-846e-a7d27503aff4.png",
        "/lovable-uploads/bc585009-fe5b-479f-87b7-b0949229e1e4.png"
      ],
      tags: ["SwiftUI", "Vapor", "PostgreSQL", "OpenAI API", "Work in Progress"],
      imageUrl: "/lovable-uploads/8248dfdc-5530-411f-87a8-99430c78c74e.png",
      githubUrl: "https://github.com/tade-dev/vybaze",
      liveUrl: "https://vybaze.xyz"
    },
    {
      title: "Hubbit",
      subtitle: "Habit Tracker Platform",
      description: "Hubbit is a beautifully designed habit-tracking app that helps users build better routines through simplicity, motivation, and delight.",
      problem: "Users struggled to maintain consistent habits and needed a simple, motivating app to track their daily routines and build better lifestyle patterns.",
      role: "iOS Developer - Developed the complete iOS application using SwiftUI, implementing habit tracking features and designing the user experience.",
      techStack: ["SwiftUI", "MVVM", "CoreData", "SF Symbols", "UserNotifications"],
      impact: {},
      screenshots: [
        "/lovable-uploads/0f2ef556-5b65-40bd-ac47-0d25720af73f.png"
      ],
      tags: ["SwiftUI", "MVVM", "CoreData", "Work in Progress"],
      imageUrl: "/lovable-uploads/0f2ef556-5b65-40bd-ac47-0d25720af73f.png",
      githubUrl: "https://github.com/tade-dev/hubbit",
      liveUrl: "#"
    },
    {
      title: "How Much App",
      subtitle: "Proposal Generator for Developers",
      description: "A platform that generates a pricing proposal for developers based on their experiences and skillset.",
      problem: "Freelance developers struggled to price their services accurately and create professional proposals quickly for potential clients.",
      role: "Full-Stack Developer - Built the complete application including the AI integration for proposal generation and the user interface.",
      techStack: ["Flutter", "Dart", "OpenAI API", "Node.js", "Firebase"],
      impact: {},
      screenshots: [
        "/lovable-uploads/be41dae6-59b8-4ea4-8da9-42f789b5caa7.png"
      ],
      tags: ["Flutter", "Dart", "OpenAI API", "Node.js"],
      imageUrl: "/lovable-uploads/be41dae6-59b8-4ea4-8da9-42f789b5caa7.png",
      githubUrl: "https://github.com/tade-dev/how_much_app",
      liveUrl: "#"
    }
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-gradient-to-br from-background via-muted/10 to-background section-spacing relative overflow-hidden">
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
            <Github className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-mono">PROJECT.ARCHIVE.LOADED</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-heading">
            Featured Neural Projects
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto font-mono">
            &gt; SCANNING PROJECT DATABASE...
            <br />
            &gt; MOBILE APPLICATIONS: OPTIMIZED FOR NEURAL INTERFACES
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {(showAll ? projects : projects.slice(0, 4)).map((project, index) => (
            <motion.div 
              key={index}
              className="bg-black/20 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:border-primary/40 transition-all duration-500 group hover:-translate-y-2 cursor-pointer glow-effect"
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openModal(project);
                }
              }}
              aria-label={`View ${project.title} case study`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-3 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <img 
                      src={project.imageUrl} 
                      alt={`${project.title} app icon`}
                      className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors font-mono text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-accent font-medium text-sm font-mono">{project.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed font-mono text-sm">
                  {project.description}
                </p>

                {/* Neural Impact Metrics */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.impact.rating && (
                    <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-mono border border-primary/20">
                      <Star className="w-3 h-3 fill-current" />
                      {project.impact.rating}
                    </div>
                  )}
                  {project.impact.downloads && (
                    <div className="flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-mono border border-accent/20">
                      <Download className="w-3 h-3" />
                      {project.impact.downloads}
                    </div>
                  )}
                </div>
                
                {/* Tech Neural Network */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors ${
                        tag === 'Work in Progress' 
                          ? 'bg-orange-900/20 text-orange-300 border-orange-700/30'
                          : 'bg-primary/10 text-primary border-primary/20 hover:border-primary/40'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-muted-foreground text-xs px-3 py-1.5 font-mono">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Neural Links */}
                <div className="flex flex-wrap gap-4">
                  {project.appStoreUrl && (
                    <div className="text-xs font-mono bg-muted/20 px-3 py-1 rounded border border-border/30">
                      APP.STORE
                    </div>
                  )}
                  {project.playStoreUrl && (
                    <div className="text-xs font-mono bg-muted/20 px-3 py-1 rounded border border-border/30">
                      PLAY.STORE
                    </div>
                  )}
                  <span className="text-accent text-xs font-mono">
                    CLICK.TO.ANALYZE →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!showAll && projects.length > 4 && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/30 text-primary rounded-xl bg-black/20 backdrop-blur-sm hover:bg-primary/10 font-mono glow-effect"
              onClick={() => setShowAll(true)}
            >
              LOAD.MORE.PROJECTS ({projects.length - 4} more)
            </Button>
          </motion.div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
