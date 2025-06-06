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
      subtitle: "AI-Driven Food Platform",
      description: "Foodnify is the all-in-one food-centric platform where you can connect with chefs, explore and share recipes, and order delicious homemade meals. Powered by an AI-driven meal planner and built-in calorie tracker, Foodnify helps you eat smarter, discover new dishes, and personalize your food journey, all in one place.",
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
      description: "Fuel Alert helps you stay ahead of fluctuating fuel prices by tracking real-time updates, highlighting the best local deals, and helping you make smarter decisions at the pump.",
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
      description: "Slayt is the ultimate task management app designed for parents, providing a seamless solution to delegate chores and responsibilities within the family. With Slayt, parents can effortlessly assign tasks to their children, ensuring a more organized and harmonious household.",
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
      description: "Vybaze is a cutting-edge music platform designed to help artists improve and promote their sound through AI-driven feedback and community engagement. The app empowers musicians to upload their tracks and receive structured, intelligent critiques from both users and an AI system.",
      tags: ["SwiftUI", "Vapor", "PostgreSQL", "OpenAI API", "Stripe"],
      imageUrl: "/lovable-uploads/8248dfdc-5530-411f-87a8-99430c78c74e.png",
      githubUrl: "https://github.com/tade-dev/vybaze",
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
              className="project-card bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0 group hover:border-blue-300/50 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-3 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <img 
                      src={project.imageUrl} 
                      alt={`${project.title} icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-blue-600 font-medium text-sm">{project.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-200/50 hover:border-blue-300/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {project.githubUrl !== "#" && (
                    <a 
                      href={project.githubUrl} 
                      className="flex items-center text-gray-500 hover:text-gray-800 transition-colors group/link font-medium"
                    >
                      <Github size={16} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                      Code
                    </a>
                  )}
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center text-gray-500 hover:text-blue-600 transition-colors group/link font-medium"
                  >
                    <ExternalLink size={16} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                    Live Demo
                  </a>
                  {project.appStoreUrl && (
                    <a 
                      href={project.appStoreUrl} 
                      className="flex items-center text-gray-500 hover:text-blue-600 transition-colors group/link text-sm font-medium"
                    >
                      App Store
                    </a>
                  )}
                  {project.playStoreUrl && (
                    <a 
                      href={project.playStoreUrl} 
                      className="flex items-center text-gray-500 hover:text-blue-600 transition-colors group/link text-sm font-medium"
                    >
                      Play Store
                    </a>
                  )}
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
