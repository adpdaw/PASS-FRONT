import React,{} from "react";



function FeatureSection() {


  return (
    <React.Fragment>
    
    <section id="features" className="feature-section pt-120">
			<div className="container">
				<div className="row flex justify-center">
					<div className="w-full md:w-8/12 lg:w-4/12">
						<div className="text-center px-3 2xl:px-10 py-8">
							<div className="feature-icon">
							<i className="fa-solid fa-language"></i>
							</div>
							<div className="content">
								<h3 className="mb-5 text-3xl text-gray-800 font-bold" >Language</h3>
								<p className="text-lg">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
							</div>
						</div>
					</div>
					<div className="w-full md:w-8/12 lg:w-4/12">
						<div className="text-center px-3 2xl:px-10 py-8">
							<div className="feature-icon">
								<i className="lni lni-layout"></i>
							</div>
							<div className="content">
								<h3 className="mb-5 text-3xl text-gray-800 font-bold">Clean Design</h3>
								<p className="text-lg">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
							</div>
						</div>
					</div>
					<div className="w-full md:w-8/12 lg:w-4/12">
						<div className="text-center px-3 2xl:px-10 py-8">
							<div className="feature-icon">
								<i className="lni lni-coffee-cup"></i>
							</div>
							<div className="content">
								<h3 className="mb-5 text-3xl text-gray-800 font-bold">Easy to Use</h3>
								<p className="text-lg">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
			
  </React.Fragment>
  );
}

export default FeatureSection;
