
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import SkillsShowcase from "@/components/SkillsShowcase";
import TechStackCarousel from "@/components/TechStackCarousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TechStackCarousel />
      <Experience />
      <SkillsShowcase />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
