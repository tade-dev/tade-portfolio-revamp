
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import SkillsShowcase from "@/components/SkillsShowcase";
import TechStackCarousel from "@/components/TechStackCarousel";
import ThreeBackground from "@/components/ThreeBackground";
import ThreeSkillsVisualization from "@/components/ThreeSkillsVisualization";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="relative">
        <ThreeBackground />
        <Hero />
      </div>
      <TechStackCarousel />
      
      {/* 3D Skills Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black dark:from-slate-800 dark:via-gray-800 dark:to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Interactive Skills</h3>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore my technical skills in 3D space. Click and drag to rotate, hover over the nodes to interact.
          </p>
          <ThreeSkillsVisualization />
        </div>
      </section>
      
      <Experience />
      <SkillsShowcase />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
