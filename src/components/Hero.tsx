
import { ChevronDown, Github, Linkedin, Twitter, ArrowRight, Sparkles, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M0 40V0h40'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-500/5 to-teal-500/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-8">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6 group hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-300 text-sm font-medium">Available for opportunities</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Building</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent animate-pulse">
                Mobile
              </span>{" "}
              <span className="text-white">Excellence</span>
            </h1>
            
            <p className="text-gray-300 text-xl lg:text-2xl mb-8 leading-relaxed max-w-2xl">
              I'm <span className="text-white font-semibold">Oluwaseun Akintade</span>, a passionate mobile developer 
              crafting beautiful, high-performance applications with <span className="text-blue-400">Flutter</span> and <span className="text-orange-400">SwiftUI</span>.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">4+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">50+</div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
            </div>
            
            {/* Call to action buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl group">
                <a href="/projects" className="flex items-center gap-3">
                  <Code size={22} className="group-hover:rotate-12 transition-transform" />
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button variant="outline" className="border-2 border-gray-600 bg-gray-800/50 backdrop-blur-sm text-white text-lg px-8 py-6 rounded-xl hover:bg-gray-700/50 hover:border-gray-500 shadow-lg transform transition-all duration-300 hover:translate-y-[-2px] group">
                <a href="mailto:hi@tade.me" className="flex items-center gap-3">
                  <Mail size={22} className="group-hover:rotate-12 transition-transform" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
          
          {/* Professional image container */}
          <div className="lg:w-1/2 relative animate-scale-in">
            <div className="relative group max-w-md mx-auto">
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Main container */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500">
                {/* Inner frame */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src="/lovable-uploads/e46c35fc-511f-4e9b-888f-4fb6b81b4c12.png" 
                      alt="Oluwaseun Akintade" 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-lg"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
                  </div>
                </div>
                
                {/* Floating tech icons */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code size={16} className="text-blue-400" />
                </div>
                
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                  <Sparkles size={16} className="text-purple-400" />
                </div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/4 -right-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Social links with enhanced animations */}
        <div className="flex justify-center lg:justify-start space-x-6 mt-12">
          <a href="https://www.github.com/tade-dev" target="_blank" rel="noopener noreferrer" 
             className="group relative p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl">
            <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a href="https://www.linkedin.com/in/oluwaseun-akintade-620b26223/" target="_blank" rel="noopener noreferrer" 
             className="group relative p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl">
            <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a href="https://www.x.com/tadeDev_" target="_blank" rel="noopener noreferrer" 
             className="group relative p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl">
            <Twitter size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <button 
        onClick={handleScrollToExperience}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group focus:outline-none"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">Scroll down</span>
          <div className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-gray-400 group-hover:text-white group-hover:border-gray-500 transition-all duration-300 group-hover:translate-y-[-2px]">
            <ChevronDown size={24} />
          </div>
        </div>
      </button>
    </section>
  );
};

export default Hero;
