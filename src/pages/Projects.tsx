
import React from "react";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsPage = () => {
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
    },
    {
      title: "E-Commerce Platform",
      subtitle: "iOS Native App",
      description: "A feature-rich e-commerce mobile application built with SwiftUI. Implemented complex UI transitions, cart management, payment processing, and push notifications.",
      tags: ["SwiftUI", "CoreData", "Stripe", "iOS"],
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      subtitle: "Cross-platform",
      description: "A productivity application built with Flutter that helps users organize tasks, set reminders, and collaborate with team members. Features elegant UI/UX, cloud syncing, and calendar integration.",
      tags: ["Flutter", "Dart", "Firebase", "Provider"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="p-2 text-white hover:bg-gray-800" asChild>
              <a href="/">
                <ArrowLeft size={20} />
              </a>
            </Button>
            <h1 className="text-2xl font-bold text-white">My Projects</h1>
          </div>
          <a href="/" className="text-gray-300 hover:text-white font-medium transition-colors">
            Back to Home
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            A showcase of my mobile development work using Flutter and SwiftUI. 
            Each project demonstrates different aspects of modern mobile app development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 animate-fade-in border border-gray-700/50 group hover:border-gray-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 font-medium">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl} 
                      className="flex items-center text-gray-400 hover:text-white transition-colors group/link"
                    >
                      <Github size={18} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                      <span className="font-medium">Code</span>
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-colors group/link"
                    >
                      <ExternalLink size={18} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                      <span className="font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm border-t border-gray-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss your next mobile app project and bring your ideas to life.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 text-lg rounded-xl">
            <a href="/#contact">Get In Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
