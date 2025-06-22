
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
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-pink-500" size={24} />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">My Journey</h3>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hi! I'm Oluwaseun Akintade, a passionate mobile developer who fell in love with creating digital experiences 
                that make people's lives easier and more enjoyable. My journey into tech started with curiosity about how 
                mobile apps work, and it quickly evolved into a deep passion for crafting beautiful, functional applications.
              </p>
              <p>
                Based in Nigeria, I've spent years honing my skills in Flutter and Swift, building everything from 
                AI-powered food platforms to habit tracking apps. What drives me is the ability to transform ideas 
                into reality through code, creating solutions that thousands of users interact with daily.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or mentoring aspiring developers in my community. I believe technology should be accessible and 
                empowering for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">When I'm Not Coding</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {hobbies.map((hobby, index) => (
              <div 
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg">
                    <hobby.icon className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{hobby.name}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Philosophy */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-blue-500 dark:text-blue-400" size={24} />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Why I Love What I Do</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {techAspects.map((aspect, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-gray-800 dark:text-white">{aspect.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{aspect.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50">
              <p className="text-gray-700 dark:text-gray-200 italic text-center">
                "Code is poetry, and every app is a story waiting to be told. I'm here to make sure it's a beautiful one."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
