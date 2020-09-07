import React from 'react';
import Link from 'next/link';

const ServicesStyleOne = () => {
    return (
        <div className="services-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Our Services</span>
					<h2>Insurance Devised Keeping You in Mind</h2>
					<p>Looking for a particular type of coverage? Explore our insurance range.</p>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<i className="flaticon-car-insurance"></i>
							<h3>Health Insurance</h3>
							
							<p>Health Insurance provides financial security during medical emergencies, lifestyle diseases, or unexpected illnesses.</p>

                            <Link href="/insurance-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<i className="flaticon-health-care"></i>
							<h3>Car Insurance</h3>
							
							<p>Car insurance protects against monetary losses from accidents or any other damage to the insured car.</p>

							<Link href="/insurance-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<i className="flaticon-life-insurance"></i>
							<h3>Life Insurance</h3>
								
							<p>Life insurance provides financial security in return for the life insurance premium paid during the policy term.</p>

							<Link href="/insurance-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<i className="flaticon-salesman"></i>
							<h3>Term Insurance</h3>
								
							<p>Term Insurance plan prepares you for the uncertainties by providing coverage for a limited period at a fixed premium.</p>

							<Link href="/insurance-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					</div>

					{/* <div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<i className="flaticon-travel-insurance"></i>
							<h3>Business Insurance</h3>
							
							<p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>

							<Link href="/insurance-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
						
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<i className="flaticon-social-care-1"></i>
							<h3>Home Insurance</h3>
								
							<p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>

							<Link href="/insurance-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					</div> */}
				</div>
			</div>

			<div className="services-shape">
				<img src="/images/services-shape-1.png" alt="Image" />
			</div>
		</div>
    )
}

export default ServicesStyleOne;