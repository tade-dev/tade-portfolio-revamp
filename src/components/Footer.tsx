
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-medium mb-2 inline-block text-gray-800">
              Tade.ME
            </a>
            <p className="text-gray-500 max-w-md">
              Specialized in delivering high-quality mobile applications with Flutter and native iOS development.
            </p>
          </div>
          
          <div className="flex space-x-5">
            <a href="https://www.github.com/tade-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/oluwaseun-akintade-620b26223/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.x.com/tadeDev_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Oluwaseun Akintade. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Made with <Heart size={14} className="text-gray-400 mx-1" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
