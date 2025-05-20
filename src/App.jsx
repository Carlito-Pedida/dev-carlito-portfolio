import React from "react";
import Hero from "./sections/Hero";
import ShowroomSection from "./sections/ShowroomSection";
import NavBar from "./components/NavBar";
import ProjectsGrid from "./sections/ProjectsGrid";
import TechnologyCarousel from "./sections/TechnologyCarousel";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowroomSection />
      <ProjectsGrid />
      <TechnologyCarousel />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
