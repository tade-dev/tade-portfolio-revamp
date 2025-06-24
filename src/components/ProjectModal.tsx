
import { X, ExternalLink, Github, Star, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    subtitle: string;
    description: string;
    problem: string;
    role: string;
    techStack: string[];
    impact: {
      rating?: number;
      downloads?: string;
      users?: string;
      revenue?: string;
    };
    screenshots: string[];
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold">
            {project.title}
          </DialogTitle>
          <p className="text-primary font-medium">{project.subtitle}</p>
        </DialogHeader>

        <div className="space-y-8">
          {/* Problem */}
          <section>
            <h3 className="text-lg font-heading font-semibold mb-3">Problem</h3>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </section>

          {/* Role */}
          <section>
            <h3 className="text-lg font-heading font-semibold mb-3">My Role</h3>
            <p className="text-muted-foreground leading-relaxed">{project.role}</p>
          </section>

          {/* Tech Stack */}
          <section>
            <h3 className="text-lg font-heading font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="font-medium">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* Impact Metrics */}
          <section>
            <h3 className="text-lg font-heading font-semibold mb-3">Impact & Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.impact.rating && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-lg">{project.impact.rating}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">App Rating</div>
                </div>
              )}
              {project.impact.downloads && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Download className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-lg">{project.impact.downloads}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
              )}
              {project.impact.users && (
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                  <div className="font-bold text-lg">{project.impact.users}</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
              )}
              {project.impact.revenue && (
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                  <div className="font-bold text-lg">{project.impact.revenue}</div>
                  <div className="text-sm text-muted-foreground">Revenue</div>
                </div>
              )}
            </div>
          </section>

          {/* Screenshots */}
          <section>
            <h3 className="text-lg font-heading font-semibold mb-3">Screenshots</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-lg shadow-md w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </section>

          {/* Actions */}
          <section className="flex flex-wrap gap-4 pt-4 border-t">
            {project.appStoreUrl && (
              <Button asChild className="bg-black hover:bg-gray-800 text-white">
                <a 
                  href={project.appStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Download ${project.title} from App Store`}
                >
                  App Store
                </a>
              </Button>
            )}
            {project.playStoreUrl && (
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <a 
                  href={project.playStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Download ${project.title} from Google Play Store`}
                >
                  Play Store
                </a>
              </Button>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <Button variant="outline" asChild>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button variant="outline" asChild>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
