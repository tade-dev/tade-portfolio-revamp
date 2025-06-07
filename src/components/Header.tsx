
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="group relative">
          <span className={`text-2xl font-bold transition-all duration-300 font-dancing cursor-pointer ${
            scrolled 
              ? "text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text" 
              : "text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text"
          } hover:scale-110 transform group-hover:animate-pulse group-hover:drop-shadow-lg`}>
            tade.me
          </span>
          {/* Enhanced glow effect with motion */}
          <div className={`absolute inset-0 text-2xl font-bold font-dancing opacity-0 group-hover:opacity-100 transition-all duration-500 ${
            scrolled 
              ? "text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text blur-sm" 
              : "text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text blur-sm"
          } group-hover:scale-110 group-hover:animate-pulse`}>
            tade.me
          </div>
          {/* Additional sparkle effect */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-medium transition-colors ${
                scrolled ? "text-gray-800 hover:text-gray-600" : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button className={`flex items-center gap-2 ${
            scrolled ? "bg-blue-600 hover:bg-blue-700" : "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
          }`}>
            <FileText size={18} />
            <a 
              href="https://drive.google.com/file/d/1CDN3Y9R7YrF9r4FxfTGENLNg_Y_FCOAg/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${scrolled ? "text-white" : "text-white"} font-semibold`}
            >
              My Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            className={`transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 absolute top-full left-0 right-0 shadow-md animate-fade-in border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 hover:text-gray-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 w-full flex items-center justify-center gap-2">
              <FileText size={18} />
              <a 
                href="https://drive.google.com/file/d/1CDN3Y9R7YrF9r4FxfTGENLNg_Y_FCOAg/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="font-semibold"
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
