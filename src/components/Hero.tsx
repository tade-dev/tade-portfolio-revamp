
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1CDN3Y9R7YrF9r4FxfTGENLNg_Y_FCOAg/view?usp=drive_link', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-16 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight font-heading">
              Building{' '}
              <span className="text-primary">Mobile</span>{' '}
              Excellence
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm <strong className="text-foreground">Akintade Oluwaseun</strong>, a passionate mobile developer 
              crafting beautiful, high-performance applications with{' '}
              <span className="text-blue-600 font-semibold">Flutter</span> and{' '}
              <span className="text-orange-600 font-semibold">SwiftUI</span>.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 mb-8 lg:mb-12">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">4+</div>
                <div className="text-sm lg:text-base text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm lg:text-base text-muted-foreground">Projects Built</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 font-semibold"
                onClick={scrollToContact}
                aria-label="Contact Akintade for mobile development services"
              >
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 font-semibold"
                onClick={openResume}
                aria-label="View Akintade's resume"
              >
                <FileText className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                Resume
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
            <div className="relative group">
              {/* Main image container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-secondary/20 border border-primary/20">
                <img
                  src="/lovable-uploads/e46c35fc-511f-4e9b-888f-4fb6b81b4c12.png"
                  alt="Akintade - Mobile Developer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: 'center top' }}
                  decoding="async"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-fade-in">
                Available
              </div>
              
              {/* Tech stack floating badges */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm border border-gray-200 px-3 py-2 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-semibold text-sm">Flutter</span>
                </div>
              </div>
              
              <div className="absolute top-1/4 -left-6 bg-white/90 backdrop-blur-sm border border-gray-200 px-3 py-2 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 font-semibold text-sm">SwiftUI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
