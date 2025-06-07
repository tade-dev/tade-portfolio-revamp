
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import InteractiveSkills from "@/components/InteractiveSkills";
import TechStackCarousel from "@/components/TechStackCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
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
