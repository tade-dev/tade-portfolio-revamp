
import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "/projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5" 
          : "bg-transparent"
      } py-4`}
    >
      {/* Glassmorphism background effect */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled 
          ? "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl" 
          : "bg-transparent"
      }`}></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between relative z-10">
        <a href="#home" className="group relative">
          <span className={`text-xl sm:text-2xl font-bold transition-all duration-300 font-dancing cursor-pointer ${
            scrolled 
              ? "text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text" 
              : "text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text"
          } hover:scale-110 transform group-hover:animate-pulse group-hover:drop-shadow-lg`}>
            tade.me
          </span>
          {/* Enhanced liquid glow effect */}
          <div className={`absolute inset-0 text-xl sm:text-2xl font-bold font-dancing opacity-0 group-hover:opacity-100 transition-all duration-700 ${
            scrolled 
              ? "text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text blur-sm" 
              : "text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text blur-sm"
          } group-hover:scale-110 group-hover:animate-pulse`}>
            tade.me
          </div>
          {/* Liquid sparkle effect */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700"></div>
        </a>

        {/* Desktop Navigation with glassmorphism */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative font-medium transition-all duration-300 text-sm lg:text-base px-3 py-2 rounded-lg hover:backdrop-blur-sm hover:bg-white/10 hover:shadow-lg hover:shadow-black/5 ${
                scrolled ? "text-gray-800 hover:text-gray-600" : "text-gray-300 hover:text-white"
              } group`}
            >
              <span className="relative z-10">{item.label}</span>
              {/* Liquid hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
            </a>
          ))}
          <Button className={`relative overflow-hidden flex items-center gap-2 text-sm lg:text-base px-4 lg:px-6 py-3 rounded-xl transition-all duration-300 ${
            scrolled 
              ? "bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-700/90 hover:to-purple-700/90 backdrop-blur-xl border border-white/20" 
              : "bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30"
          } shadow-lg hover:shadow-xl hover:scale-105 group`}>
            {/* Liquid background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            <FileText size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <a 
              href="https://drive.google.com/file/d/1CDN3Y9R7YrF9r4FxfTGENLNg_Y_FCOAg/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`relative z-10 ${scrolled ? "text-white" : "text-white"} font-semibold`}
            >
              My Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Button with glassmorphism */}
        <div className="md:hidden">
          <button
            className={`relative p-3 rounded-xl transition-all duration-300 backdrop-blur-sm ${
              scrolled 
                ? "text-gray-800 bg-white/20 hover:bg-white/30 border border-white/20" 
                : "text-white bg-white/10 hover:bg-white/20 border border-white/20"
            } shadow-lg hover:shadow-xl hover:scale-105`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu with enhanced glassmorphism */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden animate-fade-in">
          {/* Gradient background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
          <nav className="relative z-10 p-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-800 hover:text-gray-600 font-medium transition-all duration-300 px-4 py-3 rounded-xl hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-lg group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Liquid hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </a>
            ))}
            <Button className="w-full bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-700/90 hover:to-purple-700/90 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-3 group">
              <FileText size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              <a 
                href="https://drive.google.com/file/d/1CDN3Y9R7YrF9r4FxfTGENLNg_Y_FCOAg/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="font-semibold text-white"
              >
                My Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
