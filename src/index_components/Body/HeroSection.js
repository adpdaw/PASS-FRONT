import React, { useContext } from "react";
import background from "../../img/hero/hero-bg.svg";
import logo from "../../img/logo/logo-CP.svg";
import { Link } from "react-router-dom";
import  { datosContexto }  from "../Context/Context";
import logoMd from"../../img/logo/logo-MDfooter.svg";


function HeroSection() {
  var context = useContext(datosContexto);
  return (
    <React.Fragment>
      <section
        id="home"
        className="hero-section relative bg-no-repeat bg-top z-10 pt-200 pb-13 lg:pb-200 2xl:pb-120"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="row flex items-center relative">
            <div className="w-full lg:w-1/2">
              <div className="hero-content mb-0 lg:mb-6">
             
                <h1 className=" mb-9 text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-gray-800 font-bold">
                  Enjoy and Create Amazing Documents with PassCode!
                </h1>
                <p className=" text-gray-800 text-lg mb-10 xl:pr-18 2xl:pr-120">
                Elevate your document creation experience with PassCode, and unleash your creativity like never before. Experience the Power of PassCode for Exceptional Document Creation!
                Unlock your potential with PassCode and discover a whole new level of document creation.
                </p>
        
                <Link  to={ context.loggedIn ? "/projects" : "/login" }
                  className="main-btn  btn-hover mb-2"
                >
                  Start Writting
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="hero-img pt-8 lg:pt-0">
                <img
                  src={logo}
                  alt=""
                  className="w-full lg:w-auto"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HeroSection;
