import React, { } from "react";
import { useState, useEffect } from "react";
import about2 from "../../img/about/editor.png";
import about2shape from "../../img/about/about-right-shape.svg";
import about2dots from "../../img/about/right-dots.svg";
function AboutSection2() {

  const img1 = "";
  const img2 = "";
  const img3 = "";

  const [about_2, setImage1] = useState(img1);
  const [aboutRight2, setImage2] = useState(img2);
  const [aboutDots2, setImage3] = useState(img3);

  useEffect(() => {
    setImage1(about2);
    setImage2(about2shape);
    setImage3(about2dots);
  }, []);

  return (
    <React.Fragment>
      <section id="about" className="about-section pt-150">
			<div className="container">
				<div className="row flex items-center">
					<div className="w-full lg:w-1/2">
						<div className="about-content">
							<div className="section-title mb-8">
								<h1 className="mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Easy to Use with Tons of Awesome Features</h1>
								<p className=" text-gray-800">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
							</div>
							<ul className="about-feature">
								<li>Quick Access</li>
								<li>Easily to Manage</li>
								<li>24/7 Support</li>
							</ul>
							<a href="/" className="main-btn btn-hover border-btn ">Learn More</a>
						</div>
					</div>
					<div className="w-full lg:w-1/2 order-first lg:order-last">
						<div className="about-img-2 relative z-10 pt-19 pb-19 mb-18 lg:mb-0">
							<img src={about_2} alt="" className="w-100 border-r-2"></img>
                           <img src={aboutRight2} alt="" className="shape-1"></img>
                           <img src={aboutDots2} alt="" className="shape shape-2"></img>
						</div>
					</div>
				</div>
			</div>
		</section>
    </React.Fragment>
  );
}

export default AboutSection2;
