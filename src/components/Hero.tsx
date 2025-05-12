
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-7/12 animate-fade-in">
          <span className="text-gray-500 text-lg mb-3 inline-block">Hello, I'm</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 leading-tight">
            Oluwaseun Akintade
            <span className="block mt-2 text-gray-500">Mobile & iOS Developer</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl">
            I transform ideas into exceptional mobile experiences. With 4 years of Flutter and 2 years 
            of native iOS development expertise, I build beautiful, high-performance applications that 
            your users will love.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-gray-800 hover:bg-gray-700 text-lg px-6 py-5 rounded-md">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="text-lg px-6 py-5 border-gray-300 text-gray-700 rounded-md">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex space-x-5 mb-10">
            <a href="https://www.github.com/tade-dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/oluwaseun-akintade-620b26223/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.x.com/tadeDev_" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="md:w-5/12 hidden md:block animate-scale-in">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-200 rounded-full opacity-70"></div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative z-10">
              <div className="bg-gray-800 rounded-md p-4 opacity-90">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <pre className="text-green-400 font-mono text-xs">
{`class MobileDeveloper {
  final String name = "Oluwaseun";
  final int flutterExperience = 4;
  final int iOSExperience = 2;
  
  List<String> skills = [
    "Flutter", "Dart", 
    "Swift", "SwiftUI",
    "Firebase", "REST APIs"
  ];

  Future<App> buildApp() async {
    return await App(
      isBeautiful: true,
      isResponsive: true,
      performsWell: true
    );
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#experience" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-gray-600"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
};

export default Hero;
