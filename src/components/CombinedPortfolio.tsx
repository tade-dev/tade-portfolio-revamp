import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Mail, Phone, MapPin, Download, Heart, Calendar, Users, Building, Star } from 'lucide-react';

const CombinedPortfolio = () => {
  const experience = [
    {
      year: "2023 - Present",
      title: "Senior Mobile Developer",
      company: "TechFlow Solutions",
      location: "Remote",
      description: "Leading mobile development initiatives using Flutter and React Native. Architected scalable solutions for enterprise clients.",
      technologies: ["Flutter", "React Native", "Firebase", "AWS"]
    },
    {
      year: "2022 - 2023", 
      title: "Mobile App Developer",
      company: "InnovateTech",
      location: "Lagos, Nigeria",
      description: "Developed cross-platform mobile applications with focus on user experience and performance optimization.",
      technologies: ["Flutter", "iOS", "Android", "Node.js"]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured e-commerce application with payment integration, real-time chat, and advanced product search capabilities.",
      image: "/lovable-uploads/e46c35fc-511f-4e9b-888f-4fb6b81b4c12.png",
      technologies: ["Flutter", "Firebase", "Stripe", "REST API"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Mobile"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management platform with real-time updates, file sharing, and team analytics dashboard.",
      image: "/lovable-uploads/5df961b1-a326-4210-9309-0040b5cacd8f.png", 
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Web"
    },
    {
      title: "Custom Map Marker Builder",
      description: "A Flutter package for creating custom markers for Google Maps with enhanced styling and animation options.",
      technologies: ["Flutter", "Dart", "Google Maps API"],
      pubUrl: "https://pub.dev/packages/custom_marker_builder",
      githubUrl: "https://github.com/tade-dev/custom_map_marker_builder",
      category: "Package",
      stats: { downloads: "200+", likes: "5", version: "0.0.4" }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechFlow",
      content: "Exceptional developer with great attention to detail. Delivered our mobile app ahead of schedule with outstanding quality.",
      avatar: "/lovable-uploads/be41dae6-59b8-4ea4-8da9-42f789b5caa7.png"
    },
    {
      name: "Michael Chen",
      role: "CTO at InnovateTech",
      content: "Highly skilled in Flutter development. Created robust and scalable solutions that exceeded our expectations.",
      avatar: "/lovable-uploads/bbda8c53-3069-4e79-89f0-fe8894ff9f4a.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto px-6">
        {/* Experience & Projects Combined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
              Experience & Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and notable projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Building className="h-6 w-6 text-primary" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <Badge variant="secondary">{job.year}</Badge>
                        </div>
                        <CardDescription className="flex items-center gap-4">
                          <span className="font-medium text-primary">{job.company}</span>
                          <span className="flex items-center gap-1 text-sm">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Client Testimonials
              </h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground mb-3 italic">
                              "{testimonial.content}"
                            </p>
                            <div>
                              <p className="font-medium text-sm">{testimonial.name}</p>
                              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects & Packages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                    {project.image && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant={project.category === 'Package' ? 'default' : 'secondary'}>
                          {project.category}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {project.stats && (
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {project.stats.downloads}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {project.stats.likes}
                          </span>
                          <span>v{project.stats.version}</span>
                        </div>
                      )}

                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Live
                            </a>
                          </Button>
                        )}
                        {project.pubUrl && (
                          <Button size="sm" asChild>
                            <a href={project.pubUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              pub.dev
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CombinedPortfolio;