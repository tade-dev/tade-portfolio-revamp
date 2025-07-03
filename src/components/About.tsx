
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Heart, Coffee, Music, Gamepad2, Book, Film, Dribbble, Trophy, Target, Zap, Users } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const hobbies = [
    { icon: Film, name: "Movies", description: "Exploring cinematic storytelling" },
    { icon: Gamepad2, name: "Gaming", description: "Strategy & mobile gaming" },
    { icon: Dribbble, name: "Basketball", description: "Playing pickup games" },
    { icon: Book, name: "Reading", description: "Tech blogs & design books" }
  ];

  const achievements = [
    { icon: Trophy, value: "4+", label: "Years Experience", color: "text-yellow-500" },
    { icon: Target, value: "50+", label: "Projects Delivered", color: "text-blue-500" },
    { icon: Zap, value: "99%", label: "Client Satisfaction", color: "text-green-500" }
  ];

  const skills = [
    { name: "Flutter", percentage: 95, color: "bg-blue-500" },
    { name: "SwiftUI", percentage: 90, color: "bg-orange-500" },
    { name: "Performance", percentage: 92, color: "bg-green-500" },
    { name: "UI/UX", percentage: 88, color: "bg-purple-500" }
  ];

  return (
    <section id="about" className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/30 section-spacing">
      <div className="container max-w-6xl mx-auto px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-3 bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 dark:from-gray-100 dark:via-gray-200 dark:to-blue-200 bg-clip-text text-transparent font-heading">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The story behind the code and passion for mobile excellence
          </p>
        </motion.div>

        {/* Personal Story & Skills */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-pink-500" size={24} />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">My Journey</h3>
              </div>
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                <p>
                  Hi! I'm <span className="font-semibold text-primary">Oluwaseun Akintade</span>, a passionate mobile developer based in Nigeria. 
                  I specialize in Flutter and SwiftUI, building scalable mobile applications that thousands of users interact with daily.
                </p>
                <p>
                  My journey started with curiosity about how mobile apps work and evolved into a mission to create digital experiences 
                  that make people's lives easier and more enjoyable.
                </p>
              </div>
            </div>

            {/* Hobbies */}
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <hobby.icon className="text-primary mb-2" size={20} />
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm">{hobby.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">{hobby.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Skills Progress */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-blue-500" size={24} />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Core Expertise</h3>
              </div>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.percentage}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.6 + index * 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-xl p-6 border border-primary/20"
            >
              <p className="text-gray-700 dark:text-gray-200 italic text-center text-lg leading-relaxed">
                "Clean code, beautiful UI, and seamless performance - that's my formula for mobile excellence."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <achievement.icon className={`mx-auto mb-3 ${achievement.color} group-hover:scale-110 transition-transform duration-300`} size={28} />
              <motion.div
                className="text-2xl font-bold text-gray-800 dark:text-white mb-1"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
              >
                {achievement.value}
              </motion.div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
