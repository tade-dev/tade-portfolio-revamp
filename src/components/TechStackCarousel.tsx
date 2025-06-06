
import React, { useEffect, useRef } from 'react';

// Tech icons data
const techIcons = [
  { name: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Swift', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
  { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Dart', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  { name: 'Tailwind', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
];

const TechStackCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const startAnimation = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'running';
    }
  };
  
  const stopAnimation = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused';
    }
  };

  return (
    <div className="py-12 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Technologies I Work With</h3>
        
        <div className="relative">
          {/* First carousel (left to right) */}
          <div 
            ref={containerRef}
            className="flex space-x-12 py-4"
            style={{
              animation: 'scroll 30s linear infinite',
              width: 'fit-content',
            }}
            onMouseEnter={stopAnimation}
            onMouseLeave={startAnimation}
          >
            {[...techIcons, ...techIcons].map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center group transition-transform hover:scale-110 cursor-pointer"
              >
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-20 w-20 flex items-center justify-center">
                  <img 
                    src={tech.image} 
                    alt={tech.name} 
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <span className="mt-2 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent"></div>
        </div>
      </div>
      
      {/* Add the CSS animation to the document head */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `
      }} />
    </div>
  );
};

export default TechStackCarousel;
