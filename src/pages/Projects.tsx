import React from "react";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsPage = () => {
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
    },
    {
      title: "Hubbit",
      subtitle: "Habit Tracker Platform",
      description: "Hubbit is a beautifully designed habit-tracking app that helps users build better routines through simplicity, motivation, and delight. Crafted with Apple's modern design principles, Hubbit leverages glassmorphic UI, SF Symbols, and native SwiftUI components to deliver an iOS 19, ready experience.",
      tags: ["SwiftUI", "MVVM", "CoreData"],
      imageUrl: "/lovable-uploads/0f2ef556-5b65-40bd-ac47-0d25720af73f.png",
      githubUrl: "https://github.com/tade-dev/hubbit",
      liveUrl: "#"
    },
    {
      title: "How Much App",
      subtitle: "Proposal Generator for Developers",
      description: "A platform that generates a pricing proposal for developers based on their experiences and skillset.",
      tags: ["Flutter", "Dart", "OpenAI API", "Node.js"],
      imageUrl: "/lovable-uploads/be41dae6-59b8-4ea4-8da9-42f789b5caa7.png",
      githubUrl: "https://github.com/tade-dev/how_much_app",
      liveUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="p-2 hover:bg-gray-100" asChild>
              <a href="/">
                <ArrowLeft size={20} />
              </a>
            </Button>
            <h1 className="text-2xl font-bold">My Projects</h1>
          </div>
          <a href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
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
                className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in border border-gray-200 group hover:border-gray-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 p-3 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <img 
                        src={project.imageUrl} 
                        alt={`${project.title} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium border border-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    {project.githubUrl !== "#" && (
                      <a 
                        href={project.githubUrl} 
                        className="flex items-center text-gray-500 hover:text-gray-800 transition-colors group/link"
                      >
                        <Github size={16} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                        <span className="font-medium">Code</span>
                      </a>
                    )}
                    {project.liveUrl !== "#" && (
                      <a 
                        href={project.liveUrl} 
                        className="flex items-center text-gray-500 hover:text-blue-600 transition-colors group/link"
                      >
                        <ExternalLink size={16} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                        <span className="font-medium">Demo</span>
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a 
                        href={project.appStoreUrl} 
                        className="flex items-center text-gray-500 hover:text-blue-600 transition-colors group/link text-xs"
                      >
                        App Store
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a 
                        href={project.playStoreUrl} 
                        className="flex items-center text-gray-500 hover:text-blue-600 transition-colors group/link text-xs"
                      >
                        Play Store
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Let's discuss your next mobile app project and bring your ideas to life.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold px-8 py-3 text-lg rounded-xl">
            <a href="mailto:hi@tade.me">Get In Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
