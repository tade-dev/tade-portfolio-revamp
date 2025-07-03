
import React from "react";
import { Code, Heart, Coffee, Music, Gamepad2, Book, Film, Dribbble } from "lucide-react";

const About = () => {
  const hobbies = [
    { icon: Film, name: "Movies", description: "Exploring cinematic storytelling and film analysis" },
    { icon: Gamepad2, name: "Gaming", description: "Strategy games and mobile gaming enthusiast" },
    { icon: Dribbble, name: "Basketball", description: "Playing pickup games and following the NBA" },
    { icon: Book, name: "Reading", description: "Tech blogs, sci-fi novels, and design books" }
  ];

  const techAspects = [
    { title: "Mobile-First Mindset", description: "I believe in creating seamless mobile experiences that users love to interact with daily." },
    { title: "Performance Optimization", description: "Obsessed with writing clean, efficient code that runs smoothly across all devices." },
    { title: "UI/UX Focus", description: "Passionate about crafting beautiful interfaces that feel intuitive and delightful to use." },
    { title: "Continuous Learning", description: "Always exploring new technologies and methodologies to stay ahead in the mobile development space." }
  ];

  return (
    <section id="about" className="section-container bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient mb-6 animate-fade-in dark:text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
            The story behind the code
          </p>
        </div>

        {/* Personal Story */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-pink-500" size={24} />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">My Journey</h3>
            </div>
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hi! I'm Oluwaseun Akintade, a passionate mobile developer based in Nigeria. I specialize in Flutter and SwiftUI, 
                building scalable mobile applications that thousands of users interact with daily. My journey started with curiosity 
                about how mobile apps work and evolved into a mission to create digital experiences that make people's lives easier.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 text-center">
              <Code className="mx-auto mb-3 text-blue-500 dark:text-blue-400" size={24} />
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">4+ Years</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Mobile Development</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 text-center">
              <Coffee className="mx-auto mb-3 text-orange-500" size={24} />
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">50+ Projects</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Delivered Successfully</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 text-center">
              <Music className="mx-auto mb-3 text-purple-500" size={24} />
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Cross-Platform</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Flutter & SwiftUI Expert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
