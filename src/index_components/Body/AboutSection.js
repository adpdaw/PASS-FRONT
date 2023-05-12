import React, { } from "react";
import { useState, useEffect } from "react";



function AboutSection() {
  const img1 = "";
  const img2 = "";
  const img3 = "";

  const [about, setImage1] = useState(img1);
  const [aboutLeft, setImage2] = useState(img2);
  const [aboutDots, setImage3] = useState(img3);

  useEffect(() => {
    setImage1(require("../../img/about/about-3.png"));
    setImage2(require("../../img/about/about-left-shape.svg"));
    setImage3(require("../../img/about/left-dots.svg"));
  }, []);

  return (
    <React.Fragment>
      <section id="about" className="about-section relative z-10 pt-150">
        <div className="container">
          <div className="row flex items-center">
            <div className="w-full lg:w-1/2">
              <div className="about-img relative z-10 pt-19 pb-19 mb-18 lg:mb-0">
                <img src={about} alt="" className="w-100"></img>
                <img src={aboutLeft} alt="" className="shape-1"></img>
                <img src={aboutDots} alt="" className="shape shape-2"></img>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="about-content">
                <div className="section-title mb-8">
                  <h1 className="mb-6 text-3xl text-gray-800 font-bold">
                    Perfect Solution Thriving Online Business
                  </h1>
                  <p className="">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    dinonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <a
                  href="/"
                  className="main-btn btn-hover border-btn "
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AboutSection;
