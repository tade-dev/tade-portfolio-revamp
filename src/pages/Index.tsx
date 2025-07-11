
import React from "react";
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import InteractiveSkills from '@/components/InteractiveSkills';
import TechStackCarousel from '@/components/TechStackCarousel';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <TechStackCarousel />
      <InteractiveSkills />
      <Experience />
      <Projects />
      <Packages />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
