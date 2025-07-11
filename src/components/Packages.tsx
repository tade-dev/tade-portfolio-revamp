import { ExternalLink, Github, Star, Download, Package2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Packages = () => {
  const packages = [
    {
      name: "custom_marker_builder",
      description: "A Flutter package for creating custom markers for Google Maps with enhanced styling and animation options.",
      platform: "Flutter/Dart",
      pubUrl: "https://pub.dev/packages/custom_marker_builder",
      githubUrl: "https://github.com/tade-dev/custom_marker_builder",
      version: "1.0.0",
      downloads: "500+",
      likes: "10+",
      tags: ["Flutter", "Google Maps", "Markers", "Customization"]
    }
  ];

  return (
    <section id="packages" className="bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-blue-900/30 dark:via-gray-800 dark:to-purple-900/30 section-spacing">
      <div className="container max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-medium mb-3 text-center bg-gradient-to-r from-gray-800 via-gray-900 to-purple-800 dark:from-gray-100 dark:via-gray-200 dark:to-purple-200 bg-clip-text text-transparent font-heading">
          Open Source Packages
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Flutter and Swift packages I've developed and published to help the developer community.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:border-purple-300/50 hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 p-3 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <Package2 className="w-full h-full text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-purple-600 transition-colors font-heading">
                      {pkg.name}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">{pkg.platform}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Package Stats */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {pkg.downloads && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {pkg.downloads}
                    </Badge>
                  )}
                  {pkg.likes && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {pkg.likes}
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">
                    v{pkg.version}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-full text-xs font-medium border bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-700 dark:text-purple-300 border-purple-200/50 dark:border-purple-700/50 hover:border-purple-300/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={pkg.pubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    pub.dev
                  </a>
                  {pkg.githubUrl && (
                    <a
                      href={pkg.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;