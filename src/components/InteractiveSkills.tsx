
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Brain, Rocket, Database, Code, Palette, TestTube, Upload, Store } from 'lucide-react';

const InteractiveSkills = () => {
  const skillCategories = [
    {
      title: "Frameworks & Platforms",
      icon: <Smartphone className="h-5 w-5" />,
      skills: [
        { name: "Flutter", color: "bg-blue-500" },
        { name: "SwiftUI", color: "bg-orange-500" },
        { name: "iOS SDK", color: "bg-gray-600" },
        { name: "Android SDK", color: "bg-green-600" }
      ]
    },
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "Dart", color: "bg-blue-600" },
        { name: "Swift", color: "bg-orange-600" },
        { name: "JavaScript", color: "bg-yellow-500" },
        { name: "TypeScript", color: "bg-blue-700" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Firebase", color: "bg-orange-500" },
        { name: "Supabase", color: "bg-green-500" },
        { name: "RESTful APIs", color: "bg-purple-500" },
        { name: "Git & CI/CD", color: "bg-gray-700" }
      ]
    },
    {
      title: "UI/UX & Animations",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "Custom Animations", color: "bg-pink-500" },
        { name: "Material Design", color: "bg-indigo-500" },
        { name: "Human Interface", color: "bg-blue-400" },
        { name: "Responsive Design", color: "bg-teal-500" }
      ]
    },
    {
      title: "State Management",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: "BLoC Pattern", color: "bg-purple-600" },
        { name: "Provider", color: "bg-green-600" },
        { name: "MVVM", color: "bg-indigo-600" },
        { name: "GetX", color: "bg-red-500" }
      ]
    },
    {
      title: "Testing & Debugging",
      icon: <TestTube className="h-5 w-5" />,
      skills: [
        { name: "Unit Testing", color: "bg-green-500" },
        { name: "Widget Testing", color: "bg-blue-500" },
        { name: "XCTest", color: "bg-orange-500" },
        { name: "Performance Profiling", color: "bg-purple-500" }
      ]
    },
    {
      title: "Deployment & Stores",
      icon: <Upload className="h-5 w-5" />,
      skills: [
        { name: "App Store Connect", color: "bg-blue-600" },
        { name: "Google Play Console", color: "bg-green-600" },
        { name: "TestFlight", color: "bg-orange-600" },
        { name: "Shorebird", color: "bg-teal-600" }
      ]
    },
    {
      title: "AI Integration",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: "OpenAI APIs", color: "bg-emerald-500" },
        { name: "Claude Integration", color: "bg-purple-500" },
        { name: "ML Kit", color: "bg-blue-500" },
        { name: "Core ML", color: "bg-orange-500" }
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 dark:from-white dark:via-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
            Technical Skills, Languages & Tools
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Comprehensive expertise in mobile development with production-grade experience across frameworks, languages, and modern development tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={`inline-flex items-center px-3 py-2 rounded-full text-white text-sm font-medium ${skill.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Summary */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-blue-200 dark:border-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Production-Ready Mobile Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Specialized in building scalable mobile applications with <span className="font-semibold text-blue-600 dark:text-blue-400">Flutter</span> and <span className="font-semibold text-orange-600 dark:text-orange-400">SwiftUI</span>. 
              Experienced in full-stack mobile development, from architecture design to App Store deployment, 
              with a proven track record of delivering high-performance apps for thousands of users.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                4+ Years Experience
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                30+ Projects Delivered
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                Cross-Platform Expert
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveSkills;
