
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Fitness Tracker Pro",
      subtitle: "Flutter Mobile App",
      description: "A comprehensive fitness tracking application built with Flutter that allows users to track workouts, set goals, and monitor progress. Features include custom animations, offline support, and integration with health APIs.",
      tags: ["Flutter", "Firebase", "BLoC", "Health API"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "E-Commerce Platform",
      subtitle: "iOS Native App",
      description: "A feature-rich e-commerce mobile application built with Swift and SwiftUI. Implemented complex UI transitions, cart management, payment processing, and push notifications.",
      tags: ["Swift", "SwiftUI", "CoreData", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      subtitle: "Flutter Web & Mobile",
      description: "Cross-platform dashboard for social media management with real-time analytics, post scheduling, and content management. Built with Flutter for both web and mobile platforms.",
      tags: ["Flutter", "REST API", "Charts", "Responsive"],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      subtitle: "iOS & Android",
      description: "A productivity application built with Flutter that helps users organize tasks, set reminders, and collaborate with team members. Features include elegant UI/UX, cloud syncing, and calendar integration.",
      tags: ["Flutter", "Dart", "Firebase", "Provider"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Featured Projects</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Here are some of my recent mobile development projects that showcase my technical skills and design capabilities.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-portfolio-blue">{project.subtitle}</p>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-blue-50 text-portfolio-blue px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center text-gray-600 hover:text-portfolio-blue transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center text-gray-600 hover:text-portfolio-blue transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" className="text-lg px-8 py-6">
            <a href="#">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
