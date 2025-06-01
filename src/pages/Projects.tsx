
import React from "react";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsPage = () => {
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
      description: "A feature-rich e-commerce mobile application built with SwiftUI. Implemented complex UI transitions, cart management, payment processing, and push notifications.",
      tags: ["SwiftUI", "CoreData", "Stripe", "iOS"],
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
    },
    {
      title: "Banking App UI",
      subtitle: "SwiftUI Prototype",
      description: "Modern banking application interface built with SwiftUI featuring smooth animations, biometric authentication, and real-time transaction tracking.",
      tags: ["SwiftUI", "CoreData", "TouchID", "Animations"],
      imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather Forecast App",
      subtitle: "Flutter Cross-platform",
      description: "Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts. Features custom animations and offline data caching.",
      tags: ["Flutter", "Weather API", "Maps", "Animations"],
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="p-2" asChild>
              <a href="/">
                <ArrowLeft size={20} />
              </a>
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">My Projects</h1>
          </div>
          <a href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Back to Home
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            A showcase of my mobile development work using Flutter and SwiftUI. 
            Each project demonstrates different aspects of modern mobile app development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in border border-gray-100 group hover:border-gray-200"
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
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
                      <span className="font-medium">Code</span>
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="flex items-center text-gray-500 hover:text-gray-800 transition-colors group/link"
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
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-blue-100 text-lg mb-8">
            Let's discuss your next mobile app project and bring your ideas to life.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg">
            <a href="/#contact">Get In Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
