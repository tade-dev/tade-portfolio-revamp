
import { Calendar, Award, Briefcase } from "lucide-react";

const Experience = () => {
  const skills = [
    { name: "Flutter", level: 90 },
    { name: "Dart", level: 90 },
    { name: "SwiftUI", level: 80 },
    { name: "Swift", level: 85 },
    { name: "Firebase", level: 85 },
    { name: "RESTful APIs", level: 90 },
    { name: "UI/UX Design", level: 75 },
    { name: "Git & CI/CD", level: 80 },
  ];
  
  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Mobile Developer",
      company: "Tech Innovations Ltd",
      description: "Leading cross-platform mobile app development using Flutter for enterprise clients. Mentoring junior developers and architecting complex mobile applications."
    },
    {
      year: "2021 - 2023",
      title: "iOS Developer",
      company: "Apple Solutions Inc",
      description: "Specialized in native iOS development using Swift and SwiftUI. Implemented complex UI animations and integrated with various backend services."
    },
    {
      year: "2019 - 2021",
      title: "Flutter Developer",
      company: "Mobile Creations Co",
      description: "Developed and maintained multiple Flutter applications. Worked on implementing responsive UIs and integrating Firebase services."
    },
  ];

  return (
    <section id="experience" className="bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-medium mb-3 text-center">Experience & Skills</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          With 6 years of combined mobile development experience, I've mastered both cross-platform and native approaches.
        </p>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-10 animate-fade-in">
            <h3 className="text-2xl font-medium flex items-center">
              <Award className="mr-3 text-gray-500" /> Experience
            </h3>
            
            <div className="relative pl-8 border-l border-gray-200 space-y-14">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="relative animate-slide-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -left-[14px] w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                    <Briefcase className="text-gray-500" size={16} />
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Calendar size={14} className="mr-2" /> {item.year}
                  </div>
                  <h4 className="text-xl font-medium">{item.title}</h4>
                  <p className="text-gray-600 font-medium">{item.company}</p>
                  <p className="text-gray-500 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium flex items-center mb-10">
              <Award className="mr-3 text-gray-500" /> Skills
            </h3>
            
            <div className="space-y-7">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full">
                    <div 
                      className="bg-gray-600 h-full rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
