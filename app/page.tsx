import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
