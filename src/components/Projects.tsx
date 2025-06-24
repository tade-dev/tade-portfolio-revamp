import { ExternalLink, Github, Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        rating: 4.6,
        downloads: "30k+",
        users: "15k+",
        revenue: "$50k+"
      },
      screenshots: [
        "/lovable-uploads/1b383d6b-ed6c-48ea-a22e-241d3dca578c.png",
        "/lovable-uploads/1b383d6b-ed6c-48ea-a22e-241d3dca578c.png",
        "/lovable-uploads/1b383d6b-ed6c-48ea-a22e-241d3dca578c.png"
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
        downloads: "20k+",
        users: "10k+",
        revenue: "$30k+"
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
      impact: {
        rating: 4.9,
        downloads: "10k+",
        users: "5k+",
        revenue: "$20k+"
      },
      screenshots: [
        "/lovable-uploads/8248dfdc-5530-411f-87a8-99430c78c74e.png",
        "/lovable-uploads/8248dfdc-5530-411f-87a8-99430c78c74e.png",
        "/lovable-uploads/8248dfdc-5530-411f-87a8-99430c78c74e.png"
      ],
      tags: ["SwiftUI", "Vapor", "PostgreSQL", "OpenAI API", "Stripe"],
      imageUrl: "/lovable-uploads/8248dfdc-5530-411f-87a8-99430c78c74e.png",
      githubUrl: "https://github.com/tade-dev/vybaze",
      liveUrl: "https://vybaze.xyz"
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
    <section id="projects" className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/30 section-spacing">
      <div className="container max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-medium mb-3 text-center bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 dark:from-gray-100 dark:via-gray-200 dark:to-blue-200 bg-clip-text text-transparent font-heading">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Here are some of my recent mobile development projects that showcase my technical skills and design capabilities.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:border-blue-300/50 hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openModal(project);
                }
              }}
              aria-label={`View ${project.title} case study`}
            >
              <div className="p-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 p-3 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <img 
                      src={project.imageUrl} 
                      alt={`${project.title} app icon`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors font-heading">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{project.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Metrics */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.impact.rating && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {project.impact.rating}
                    </Badge>
                  )}
                  {project.impact.downloads && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {project.impact.downloads}
                    </Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-300/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-gray-500 dark:text-gray-400 text-xs px-3 py-1.5">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {project.appStoreUrl && (
                    <Badge variant="outline" className="text-xs">
                      App Store
                    </Badge>
                  )}
                  {project.playStoreUrl && (
                    <Badge variant="outline" className="text-xs">
                      Play Store
                    </Badge>
                  )}
                  <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                    Click to view case study →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" className="text-lg px-8 py-6 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/50">
            <a href="/projects">View All Projects</a>
          </Button>
        </div>
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
