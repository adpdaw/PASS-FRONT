import React from "react";
import IndexHeader from "../Header/IndexHeader";

import HeroSection from "../Body/HeroSection";
import FeatureSection from "../Body/FeatureSection";
import AboutSection from "../Body/AboutSection";
import Pricing from "../Body/Pricing";
import Footer from "../Footer/Footer";

export const IndexClient = () => {
  return (
    <React.Fragment>
      <IndexHeader />
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <Pricing />
      <Footer />
    </React.Fragment>
  );
};
