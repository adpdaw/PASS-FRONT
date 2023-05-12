import React from "react";
import background from "../../img/footer/footer-bg.svg";
import logoFooter from "../../img/logo/logo-MDfooter.svg";
/**Este componente es el pie de las páginas. */
function Footer() {
  return (
    <React.Fragment>
      <footer
        className="footer bg-cover bg-no-repeat bg-right-top pt-120 mt-25 md:bg-transparent md:pt-260 lg:pt-260"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="widget-wrapper">
            <div className="row">
              <div className="w-full md:w-6/12 lg:w-4/12">
                <div className="footer-widget mb-10 mx-3">
                  <div className="logo mb-8">
                    <a href="/">
                      {" "}
                      <img src={logoFooter} alt="" />{" "}
                    </a>
                  </div>
                  {/* <p className="mb-8 text-black sm:pr-13 md:pr-0 2xl:pr-25">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt.</p>  */}
                  <ul className="socials flex items-center">
                    <li className="mr-5">
                      <a href="/">
                        {" "}
                        <i className="lni lni-facebook-original"></i>{" "}
                      </a>
                    </li>
                    <li className="mr-5">
                      <a href="/">
                        {" "}
                        <i className="lni lni-twitter-original"></i>{" "}
                      </a>
                    </li>
                    <li className="mr-5">
                      <a href="/">
                        {" "}
                        <i className="lni lni-instagram-original"></i>{" "}
                      </a>
                    </li>
                    <li className="mr-5">
                      <a href="/">
                        {" "}
                        <i className="lni lni-linkedin-original"></i>{" "}
                      </a>
                    </li>

                    <li>
                      {" "}
                      <a href="/">
                        {" "}
                        <i className="lni lni-github-original"></i>{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-2/12">
                <div className="footer-widget mb-10 mx-3">
                  <h3 className="mb-6 text-gray-800 text-2xl font-bold">
                    About Us
                  </h3>
                  <ul className="links">
                    <li>
                      {" "}
                      <a href="/">Home</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/">Feature</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/">About</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/">Testimonials</a>{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12">
                <div className="footer-widget mb-10 mx-3">
                  <h3 className="mb-6 text-gray-800 text-2xl font-bold">
                    Features
                  </h3>
                  <ul className="links">
                    <li>
                      {" "}
                      <a href="/">How it works</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/">Privacy policy</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/">Terms of service</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/">Refund policy</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12">
                <div className="footer-widget mb-10 mx-3">
                  <h3 className="mb-6 text-gray-800 text-2xl font-bold">
                    Other Products
                  </h3>
                  <ul className="links">
                    <li>
                      {" "}
                      <a href="/">Accounting Software</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/">Billing Software</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/">Booking System</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/">Tracking System</a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="/" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>
    </React.Fragment>
  );
}

export default Footer;
