
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Brain, Rocket, Database, Code } from 'lucide-react';

const InteractiveSkills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  
  const skills = [
    {
      id: 'flutter',
      name: 'Flutter',
      level: 95,
      icon: <Smartphone className="h-8 w-8" />,
      color: 'from-blue-400 to-cyan-400',
      description: 'Cross-platform mobile development with beautiful UIs'
    },
    {
      id: 'dart',
      name: 'Dart',
      level: 92,
      icon: <Code className="h-8 w-8" />,
      color: 'from-green-400 to-blue-400',
      description: 'Modern programming language for Flutter development'
    },
    {
      id: 'swiftui',
      name: 'SwiftUI',
      level: 90,
      icon: <Rocket className="h-8 w-8" />,
      color: 'from-orange-400 to-red-400',
      description: 'Native iOS development with declarative UI'
    },
    {
      id: 'mvvm',
      name: 'MVVM',
      level: 90,
      icon: <Brain className="h-8 w-8" />,
      color: 'from-purple-400 to-pink-400',
      description: 'Model-View-ViewModel architecture pattern'
    },
    {
      id: 'coredata',
      name: 'CoreData',
      level: 90,
      icon: <Database className="h-8 w-8" />,
      color: 'from-indigo-400 to-purple-400',
      description: 'iOS data persistence and object graph management'
    },
    {
      id: 'swift',
      name: 'Swift',
      level: 85,
      icon: <Rocket className="h-8 w-8" />,
      color: 'from-red-400 to-orange-400',
      description: 'Powerful programming language for iOS development'
    },
    {
      id: 'firebase',
      name: 'Firebase',
      level: 85,
      icon: <Server className="h-8 w-8" />,
      color: 'from-yellow-400 to-orange-400',
      description: 'Backend-as-a-Service platform for mobile apps'
    },
    {
      id: 'apis',
      name: 'RESTful APIs',
      level: 95,
      icon: <Server className="h-8 w-8" />,
      color: 'from-teal-400 to-green-400',
      description: 'API design and integration expertise'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 dark:from-white dark:via-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Hover over each skill bubble to see detailed information and proficiency levels.
        </p>
        
        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="relative cursor-pointer"
              onMouseEnter={() => setActiveSkill(skill.id)}
              onMouseLeave={() => setActiveSkill(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Skill Bubble */}
              <motion.div
                className={`relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${skill.color} p-1 shadow-lg`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex flex-col items-center justify-center">
                  <div className="text-gray-700 dark:text-gray-300 mb-2">
                    {skill.icon}
                  </div>
                  <span className="font-bold text-gray-800 dark:text-white text-sm text-center">{skill.name}</span>
                </div>
                
                {/* Progress Ring */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth="3"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                    animate={{ 
                      strokeDashoffset: 2 * Math.PI * 45 * (1 - skill.level / 100)
                    }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                    strokeLinecap="round"
                  />
                </svg>
                
                {/* Percentage */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-xs font-bold text-white bg-black/20 dark:bg-white/20 px-2 py-1 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeSkill === skill.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </motion.div>
              
              {/* Description Card */}
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-64 z-10 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: activeSkill === skill.id ? 1 : 0,
                  y: activeSkill === skill.id ? 0 : -10
                }}
                transition={{ duration: 0.2 }}
                style={{ pointerEvents: activeSkill === skill.id ? 'auto' : 'none' }}
              >
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">{skill.name}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
                <div className="mt-3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: activeSkill === skill.id ? `${skill.level}%` : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">Proficiency: {skill.level}%</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkills;
