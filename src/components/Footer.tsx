
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="group relative">
              <span className="text-2xl font-bold transition-all duration-300 font-dancing cursor-pointer text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text hover:scale-110 transform group-hover:animate-pulse">
                tade.me
              </span>
              {/* Glow effect */}
              <div className="absolute inset-0 text-2xl font-bold font-dancing opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text blur-sm">
                tade.me
              </div>
            </a>
            <p className="text-gray-400 max-w-md mt-3">
              Specialized in delivering high-quality mobile applications with Flutter and native iOS development.
            </p>
          </div>
          
          <div className="flex space-x-5">
            <a href="https://www.github.com/tade-dev" target="_blank" rel="noopener noreferrer" 
               className="group relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl">
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="https://www.linkedin.com/in/oluwaseun-akintade-620b26223/" target="_blank" rel="noopener noreferrer" 
               className="group relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl">
              <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="https://www.x.com/tadeDev_" target="_blank" rel="noopener noreferrer" 
               className="group relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl">
              <Twitter size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Oluwaseun Akintade. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="text-pink-400 mx-1 animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
