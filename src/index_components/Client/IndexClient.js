import React from "react";
import HeroSection from "../Body/HeroSection";
import FeatureSection from "../Body/FeatureSection";
import AboutSection from "../Body/AboutSection";
import AboutSection2 from "../Body/AboutSection2";
import Pricing from "../Body/Pricing";
import Footer from "../Footer/Footer";
import ContactSection from "../Body/ContactSection";
import Nav from "../Header/Nav";


export const IndexClient = () => {
  return (
    <React.Fragment>
      <Nav/>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <AboutSection2 />
      <Pricing />
      <ContactSection/>
      <Footer />
    </React.Fragment>
  );
};
