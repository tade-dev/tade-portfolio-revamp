
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import InteractiveSkills from "@/components/InteractiveSkills";
import TechStackCarousel from "@/components/TechStackCarousel";
import InteractiveParticles from "@/components/InteractiveParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="relative">
        <div className="absolute inset-0 h-screen">
          <InteractiveParticles />
        </div>
        <Hero />
      </div>
      <TechStackCarousel />
      
      <InteractiveSkills />
      
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
