
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-16">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-heading">
              Building{' '}
              <span className="text-primary">Mobile</span>{' '}
              Excellence
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
              I'm <strong className="text-foreground">Akintade Oluwaseun</strong>, a passionate mobile developer 
              crafting beautiful, high-performance applications with{' '}
              <span className="text-blue-600 font-semibold">Flutter</span> and{' '}
              <span className="text-orange-600 font-semibold">SwiftUI</span>.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
            
            {/* CTA */}
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 font-semibold"
              onClick={scrollToContact}
              aria-label="Contact Akintade for mobile development services"
            >
              Hire Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/e46c35fc-511f-4e9b-888f-4fb6b81b4c12.png"
                alt="Akintade working on mobile app code"
                className="w-full h-auto"
                width="1920"
                height="1080"
                decoding="async"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-8 -right-8 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
              Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
