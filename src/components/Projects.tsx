
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.project-card, .section-title, .section-description');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Foodnify",
      subtitle: "Food Delivery Platform",
      description: "A comprehensive food delivery application connecting users with local restaurants. Features real-time order tracking, payment integration, and seamless user experience for both customers and vendors.",
      tags: ["Flutter", "Firebase", "Payment Gateway", "Real-time"],
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b",
      githubUrl: "#",
      liveUrl: "https://foodnify.com"
    },
    {
      title: "Fuel Alert",
      subtitle: "Fuel Price Monitoring",
      description: "Nigerian fuel price tracking application that provides real-time fuel prices across different stations. Helps users find the best fuel prices and track market trends with location-based services.",
      tags: ["Flutter", "Location Services", "Price Tracking", "Nigeria"],
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      githubUrl: "#",
      liveUrl: "https://fuelalertng.com"
    },
    {
      title: "Slayt",
      subtitle: "Content Creation Platform",
      description: "Modern content creation and sharing platform designed for creators to showcase their work. Features advanced editing tools, community features, and monetization options for content creators.",
      tags: ["Flutter", "Content Management", "Creator Tools", "Social"],
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      githubUrl: "#",
      liveUrl: "https://slayt.co"
    },
    {
      title: "Vybaze",
      subtitle: "Social Networking App",
      description: "Next-generation social networking platform focused on authentic connections and meaningful interactions. Features innovative matching algorithms and community-building tools.",
      tags: ["Flutter", "Social Network", "Real-time Chat", "Community"],
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
      githubUrl: "#",
      liveUrl: "https://vybaze.xyz"
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title text-3xl md:text-4xl font-medium mb-3 text-center opacity-0 bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 bg-clip-text text-transparent">Featured Projects</h2>
        <p className="section-description text-gray-600 text-center mb-16 max-w-2xl mx-auto opacity-0">
          Here are some of my recent mobile development projects that showcase my technical skills and design capabilities.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-300 opacity-0 group hover:border-blue-300/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-1 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-blue-600 font-medium">{project.subtitle}</p>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center text-gray-500 hover:text-gray-800 transition-colors group/link"
                  >
                    <Github size={18} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                    Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center text-gray-500 hover:text-blue-600 transition-colors group/link"
                  >
                    <ExternalLink size={18} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" className="text-lg px-8 py-6 border-gray-300 text-gray-700 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-blue-50">
            <a href="/projects">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
