
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-7/12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Mobile & iOS Developer
            <span className="heading-gradient block mt-2">Crafting Exceptional Apps</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl">
            With 4 years of Flutter and 2 years of native iOS development experience, I create
            beautiful, high-performance mobile applications that deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-portfolio-blue hover:bg-portfolio-teal text-lg px-8 py-6">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex space-x-5 mb-10">
            <a href="#" className="text-gray-600 hover:text-portfolio-blue transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-portfolio-blue transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-portfolio-blue transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="md:w-5/12 hidden md:block">
          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 bg-portfolio-blue opacity-10 rounded-full -top-10 -right-10"></div>
            <div className="bg-white p-5 rounded-2xl shadow-xl border border-gray-100 rotate-3">
              <div className="bg-gray-800 rounded-lg p-2 -rotate-6">
                <pre className="text-green-400 font-mono text-xs">
{`class MobileDeveloper {
  final String name = "Your Name";
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
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-portfolio-blue"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
};

export default Hero;
