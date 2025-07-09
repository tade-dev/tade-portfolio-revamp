
import { Calendar, Award, Briefcase, ExternalLink } from "lucide-react";

const Experience = () => {
  
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
    <section id="experience" className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-amber-500/5 to-orange-500/5 blur-3xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-8 py-24 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 dark:from-gray-200 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional journey building high-impact mobile applications with 4+ years of experience across fintech and enterprise platforms.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-10 animate-fade-in">
            <div className="relative pl-8 border-l-2 border-gradient-to-b from-blue-400 to-purple-400 space-y-14">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="relative animate-slide-in bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -left-[43px] w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="text-white" size={16} />
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar size={14} className="mr-2" /> {item.year}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 mb-1">
                    {item.company} 
                    <a href={item.companyLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" />
                    </a>
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {item.location}
                  </p>
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                      {item.technologies}
                    </span>
                  </div>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-3 list-disc pl-5">
                    {item.description.map((bullet, i) => (
                      <li key={i} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
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
