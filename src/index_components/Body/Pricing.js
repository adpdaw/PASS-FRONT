import React, { useState, useRef } from "react";
function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [standardMonthly, setStandardMonthly] = useState("10 €");
  const [premiumMonthly, SetPremiumMonthly] = useState("25 €");
  const yearly = useRef();
  const monthly = useRef();

  const handleYearlyClick = () => {
    setIsYearly(true);
    setStandardMonthly("120 €");
    SetPremiumMonthly("300 €");
  };

  const handleMonthlyClick = () => {
    setIsYearly(false);
    setStandardMonthly("10 €");
    SetPremiumMonthly("25 €");
  };

  return (
    <React.Fragment>
      <section
        id="pricing"
        className="pricing-section relative z-10 pt-120 pb-120"
      >
        <div className="container">
          <div className="row flex justify-center">
            <div className="w-full md:w-9/12 lg:w-8/12 xl:w-6/12">
              <div className="section-title text-center mb-9">
                <h1 className="mb-6 text-4xl text-gray-800 font-bold">
                  Choose a Plan
                </h1>
                <p className="text-lg  text-gray-800 ">
                  Choose the plan that best suits your needs. If you still don't
                  know which plan to choose, you can always start with our free
                  plan.
                </p>
              </div>
            </div>
          </div>

          <div className="pricing-nav-wrapper mb-15">
            <ul className="pricing-nav nav-pills flex justify-center">
              <li className="nav-item">
                <button
                  className={!isYearly ? "active" : ""}
                  onClick={handleMonthlyClick}
                  data-tab-target={monthly}
                >
                  Monthly
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={isYearly ? "active" : ""}
                  onClick={handleYearlyClick}
                  data-tab-target={yearly}
                >
                  Yearly
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content pricing_content">
            <div className="tab-pane active" ref={monthly} data-tab-content>
              <div className="row flex flex-wrap justify-center">
                <div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
                  <div className="single-pricing mx-4">
                    <div className="pricing-header">
                      <h1 className="mb-8 text-theme-color text-4xl font-bold">
                        0 €
                      </h1>
                      <h3 className="package-name text-3xl text-gray-800 font-bold">
                        Free Account
                      </h3>
                    </div>
                    <div className="content mb-8 2xl:pl-13  text-gray-800">
                      <ul className="pricing-feature">
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> Limited
                          Acces
                        </li>
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> Single
                          User{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> Limited
                          Storage
                        </li>
                        <li>
                          {" "}
                          <i className="lni lni-close"></i> 24/7 Support{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="lni lni-close"></i> Free Future Updates
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="/" className="main-btn btn-hover border-btn">
                        Get Start
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
                  <div className="single-pricing mx-4">
                    <div className="pricing-header">
                      <h1 className="mb-8 text-theme-color text-4xl font-bold">
                        {standardMonthly}
                      </h1>
                      <h3 className="package-name text-3xl text-gray-800 font-bold">
                        Standard Account
                      </h3>
                    </div>
                    <div className="content mb-8 2xl:pl-13  text-gray-800">
                      <ul className="pricing-feature">
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> Unlimited
                          Acces
                        </li>
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> 20+ Users{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> Unlimited
                          Storage
                        </li>
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> 24/7
                          Support{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> Free
                          Future Updates
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="/" className="main-btn btn-hover">
                        Get Start
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12  text-gray-800">
                  <div className="single-pricing mx-4">
                    <div className="pricing-header">
                      <h1 className="mb-8 text-theme-color text-4xl font-bold">
                        {premiumMonthly}
                      </h1>
                      <h3 className="package-name text-3xl text-gray-800 font-bold">
                        Premium Account
                      </h3>
                    </div>
                    <div className="content mb-8 2xl:pl-13">
                      <ul className="pricing-feature">
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> Unlimited
                          Acces
                        </li>
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> Unlimited
                          Users{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> Unlimited
                          Storage
                        </li>
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> 24/7
                          Support{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="lni lni-checkmark active"></i> Free
                          Future Updates
                        </li>
                      </ul>
                    </div>

                    <div className="pricing-btn">
                      <a href="/" className="main-btn btn-hover border-btn">
                        Get Start
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Pricing;
