import React from "react";
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import InteractiveSkills from '@/components/InteractiveSkills';
import TechStackCarousel from '@/components/TechStackCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <TechStackCarousel />
      <About />
      <InteractiveSkills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
