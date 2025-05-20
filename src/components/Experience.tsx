import { Calendar, Award, Briefcase, ExternalLink } from "lucide-react";

const Experience = () => {
  const skills = [
    { name: "Flutter", level: 95 },
    { name: "Dart", level: 92 },
    { name: "SwiftUI", level: 90 },
    { name: "Swift", level: 85 },
    { name: "Firebase", level: 85 },
    { name: "RESTful APIs", level: 95 },
    { name: "Javascript", level: 80 },
    { name: "Vapor", level: 75 },
    { name: "Git & CI/CD", level: 80 },
  ];
  
  const timeline = [
    {
      year: "September 2024 - Present",
      title: "Mobile Engineer",
      company: "Zabira Technologies",
      companyLink: "https://www.zabira.com",
      location: "Lagos, Nigeria (Remote)",
      description: [
        "Developed and maintained core features in Zabira's mobile app, supporting over 3,000+ daily active users in crypto trading and gift card exchange, using Flutter for both Android and iOS platforms.",
        "Implemented fiat payment and withdrawal flows, integrating KYC and bank account verification systems that reduced failed transactions by over 35% and improved onboarding time by 20%.",
        "Collaborated with backend and product teams to ship biweekly updates, resolving an average of 15+ issues per sprint, optimizing load times by 30%, and maintaining app stability at > 99.5% crash-free rate."
      ],
      technologies: "Flutter, Swift, Firebase, Dart, BLOC, GIT"
    },
    {
      year: "November 2022 - July 2024",
      title: "Lead Mobile App Developer",
      company: "Scnip Capitol Ltd",
      companyLink: "https://www.scnip.com",
      location: "Abuja, Nigeria (Hybrid)",
      description: [
        "Led the development of cross-platform mobile apps for multiple clients, delivering scalable, high-performance solutions using Flutter across fintech and enterprise platforms.",
        "Designed modular architectures and reusable components, reducing development time by 30% and ensuring easier maintenance across diverse client requirements.",
        "Managed and mentored a team of 3 developers, driving code quality, sprint planning, and CI/CD workflows that achieved a 95% on-time delivery rate across 5+ projects."
      ],
      technologies: "Flutter, Firebase, Dart, Getx, GIT, Shorebird"
    }
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
                  <h4 className="text-xl font-medium flex items-center gap-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 font-medium flex items-center gap-2">
                    {item.company} 
                    <a href={item.companyLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="text-gray-400 hover:text-gray-600" />
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mt-1 mb-2">
                    {item.technologies} | {item.location}
                  </p>
                  <ul className="text-gray-500 space-y-2 list-disc pl-5">
                    {item.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
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
