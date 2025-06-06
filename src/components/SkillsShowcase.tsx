
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Server, Brain, Rocket, Star } from 'lucide-react';

const SkillsShowcase = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  
  const skills = [
    {
      id: 'flutter',
      name: 'Flutter',
      icon: <Smartphone className="h-6 w-6" />,
      color: 'from-blue-400 to-cyan-400',
      details: [
        'Cross-platform mobile development',
        'Custom animations & UI',
        'State management (Provider, BLoC)',
        'Firebase integration',
      ]
    },
    {
      id: 'swift',
      name: 'SwiftUI',
      icon: <Rocket className="h-6 w-6" />,
      color: 'from-orange-400 to-red-400',
      details: [
        'Native iOS development',
        'Modern UI components',
        'Swift concurrency',
        'Core Data & CloudKit',
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: <Server className="h-6 w-6" />,
      color: 'from-purple-400 to-indigo-400',
      details: [
        'RESTful API design',
        'Firebase',
        'Supabase',
        'Node.js services',
      ]
    },
    {
      id: 'ai',
      name: 'AI Integration',
      icon: <Brain className="h-6 w-6" />,
      color: 'from-green-400 to-emerald-400',
      details: [
        'OpenAI API integration',
        'Claude & GPT implementation',
        'ML model training',
        'Generative AI features',
      ]
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-center bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hover over each skill to see more details about my expertise and experience.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center group cursor-pointer"
              onMouseEnter={() => setActiveSkill(skill.id)}
              onMouseLeave={() => setActiveSkill(null)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center mb-4 text-gray-700 group-hover:text-gray-900 group-hover:scale-110 transition-all duration-300`}>
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600">{skill.name}</h3>
              
              {/* Expanded details */}
              {activeSkill === skill.id && (
                <motion.div 
                  className="mt-4 text-left"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="space-y-1 text-gray-600">
                    {skill.details.map((detail, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Star className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {/* Default state */}
              {activeSkill !== skill.id && (
                <p className="text-gray-500 text-sm">Hover to see details</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
