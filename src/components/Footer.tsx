
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold mb-2 inline-block">
              DevPortfolio
            </a>
            <p className="text-gray-400 max-w-md">
              Specialized in delivering high-quality mobile applications with Flutter and native iOS development.
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 md:mb-0">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-portfolio-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex space-x-5">
            <a href="#" className="text-gray-300 hover:text-portfolio-blue transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-portfolio-blue transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-portfolio-blue transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="text-red-500 mx-1" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
