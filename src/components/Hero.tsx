
import { Github, Linkedin, ArrowRight, Sparkles, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassmorphCard from "./GlassmorphCard";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black pt-20 pb-10 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M0 40V0h40'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 20s ease-in-out infinite'
        }}></div>
        
        {/* Liquid floating orbs with glassmorphism */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse backdrop-blur-sm" style={{ animation: 'liquid-float 15s ease-in-out infinite' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl animate-pulse backdrop-blur-sm" style={{ animation: 'liquid-float 18s ease-in-out infinite reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-500/15 to-teal-500/15 blur-3xl animate-pulse backdrop-blur-sm" style={{ animation: 'liquid-float 22s ease-in-out infinite' }}></div>
        
        {/* Additional liquid elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/10 to-violet-500/10 blur-2xl animate-bounce opacity-60" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-2xl animate-bounce opacity-60" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            {/* Enhanced status badge with glassmorphism */}
            <GlassmorphCard className="inline-flex items-center gap-2 px-6 py-3 mb-8 group">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <span className="text-emerald-300 text-sm font-medium">Available for opportunities</span>
              {/* Liquid glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>
            </GlassmorphCard>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Building</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent animate-pulse relative">
                Mobile
                {/* Liquid text glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 opacity-20 blur-xl"></div>
              </span>{" "}
              <span className="text-white">Excellence</span>
            </h1>
            
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-2xl">
              I'm <span className="text-white font-semibold relative">
                Oluwaseun Akintade
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 opacity-50"></div>
              </span>, a passionate mobile developer 
              crafting beautiful, high-performance applications with <span className="text-blue-400 relative group">
                Flutter
                <div className="absolute inset-0 bg-blue-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </span> and <span className="text-orange-400 relative group">
                SwiftUI
                <div className="absolute inset-0 bg-orange-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </span>.
            </p>
            
            {/* Enhanced stats with glassmorphism */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-8">
              <GlassmorphCard className="text-center group cursor-pointer p-4">
                <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">4+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </GlassmorphCard>
              <GlassmorphCard className="text-center group cursor-pointer p-4">
                <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">50+</div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </GlassmorphCard>
            </div>
            
            {/* Enhanced call to action buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              <Button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-lg transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl group backdrop-blur-sm border border-white/10">
                {/* Liquid animation background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                <a href="/projects" className="relative z-10 flex items-center gap-3">
                  <Code size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              
              <Button className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 group">
                {/* Liquid animation background */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                <a 
                  href="mailto:hi@tade.me"
                  className="relative z-10 flex items-center gap-3"
                >
                  <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-semibold">Get in touch</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Enhanced professional image container */}
          <div className="lg:w-1/2 relative animate-scale-in">
            <GlassmorphCard className="relative group max-w-xs sm:max-w-md mx-auto p-6">
              {/* Enhanced background glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Inner frame with glassmorphism */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/e46c35fc-511f-4e9b-888f-4fb6b81b4c12.png" 
                    alt="Oluwaseun Akintade" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-lg"
                  />
                  
                  {/* Enhanced overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
                </div>
              </div>
              
              {/* Floating tech icons with glassmorphism */}
              <GlassmorphCard className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code size={16} className="text-blue-400" />
              </GlassmorphCard>
              
              <GlassmorphCard className="absolute -bottom-3 -left-3 w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                <Sparkles size={16} className="text-purple-400" />
              </GlassmorphCard>
              
              {/* Enhanced floating particles */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-80 shadow-lg shadow-blue-400/50"></div>
              <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-80 shadow-lg shadow-purple-400/50" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/4 -right-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-80 shadow-lg shadow-pink-400/50" style={{ animationDelay: '1s' }}></div>
            </GlassmorphCard>
          </div>
        </div>
        
        {/* Enhanced social links with glassmorphism */}
        <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mt-12">
          <GlassmorphCard className="group relative p-4 text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl cursor-pointer">
            <a href="https://www.github.com/tade-dev" target="_blank" rel="noopener noreferrer">
              <Github size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
            </a>
          </GlassmorphCard>
          
          <GlassmorphCard className="group relative p-4 text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl cursor-pointer">
            <a href="https://www.linkedin.com/in/oluwaseun-akintade-620b26223/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
            </a>
          </GlassmorphCard>
          
          <GlassmorphCard className="group relative p-4 text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl cursor-pointer">
            <a href="https://www.x.com/tadeDev_" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform duration-300">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
            </a>
          </GlassmorphCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
