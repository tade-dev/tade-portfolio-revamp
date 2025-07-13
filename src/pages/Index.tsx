
import React from "react";
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import InteractiveSkills from '@/components/InteractiveSkills';
import CombinedPortfolio from '@/components/CombinedPortfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <InteractiveSkills />
      <CombinedPortfolio />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
