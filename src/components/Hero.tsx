
import { ChevronDown, Github, Linkedin, Twitter, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Abstract shapes for fun background */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-200 to-indigo-200 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 opacity-30 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Hero content */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-8">
          {/* Image section with fun border */}
          <div className="md:w-5/12 order-1 md:order-2 animate-scale-in relative mb-8 md:mb-0">
            <div className="relative">
              {/* Fun geometric elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl rotate-3 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl -rotate-3 -z-10"></div>
              
              {/* Profile image */}
              <div className="relative rounded-xl overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/lovable-uploads/e46c35fc-511f-4e9b-888f-4fb6b81b4c12.png" 
                  alt="Oluwaseun Akintade" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="md:w-7/12 order-2 md:order-1 animate-fade-in text-center md:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-white text-sm font-medium mb-4">
              <span className="flex items-center gap-1">
                <Sparkles size={14} className="text-amber-400" />
                Mobile & iOS Developer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-800">
              Hey, I'm <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">Oluwaseun</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl">
              I transform ideas into exceptional mobile experiences. With 4 years of Flutter and 2 years 
              of native iOS development expertise, I build beautiful, high-performance applications that 
              your users will love.
            </p>
            
            {/* Call to action buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <Button className="bg-gray-800 hover:bg-gray-700 text-lg px-6 py-6 rounded-xl flex items-center gap-2 shadow-lg transform transition-all hover:translate-y-1">
                <a href="https://www.github.com/tade-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={22} />
                  View My Work
                </a>
              </Button>
              <Button variant="outline" className="text-lg px-6 py-6 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 shadow-lg transform transition-all hover:translate-y-1">
                <a href="https://www.x.com/tadeDev_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Twitter size={22} />
                  Connect
                </a>
              </Button>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-5 mb-10 justify-center md:justify-start">
              <a href="https://www.github.com/tade-dev" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-gray-800 transition-all p-2 hover:bg-gray-100 rounded-full">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/oluwaseun-akintade-620b26223/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-gray-800 transition-all p-2 hover:bg-gray-100 rounded-full">
                <Linkedin size={24} />
              </a>
              <a href="https://www.x.com/tadeDev_" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-gray-800 transition-all p-2 hover:bg-gray-100 rounded-full">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#experience" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce bg-white p-2 rounded-full shadow-md text-gray-800 hover:text-gray-600 transition-all"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
