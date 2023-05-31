import React from "react";
import { useState, useEffect } from "react";
import aboutImg from "../../img/about/about-3.png";
import aboutLeftImg from "../../img/about/about-left-shape.svg";
import leftDotImg from "../../img/about/left-dots.svg";

function AboutSection() {
  const img1 = "";
  const img2 = "";
  const img3 = "";

  const [about, setImage1] = useState(img1);
  const [aboutLeft, setImage2] = useState(img2);
  const [aboutDots, setImage3] = useState(img3);

  useEffect(() => {
    setImage1(aboutImg);
    setImage2(aboutLeftImg);
    setImage3(leftDotImg);
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
                  <h1 className="mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-gray-800 font-bold">
                    Perfect Solution Thriving Online Business
                  </h1>
                  <p className=" text-gray-800">
                    Discover the Perfect Solution for a Thriving Online Business
                    with PassCode! Achieve unparalleled success with PassCode as
                    your trusted companion for online business endeavors. With
                    its comprehensive features and seamless performance,
                    PassCode empowers you to elevate your online presence and
                    drive remarkable growth.
                  </p>
                </div>
                <a href="/" className="main-btn btn-hover border-btn ">
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
