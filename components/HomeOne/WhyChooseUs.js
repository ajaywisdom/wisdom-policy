import React from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

const WhyChooseUs = () => {
    return (
        <div className="choose-us-area mt-50 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Compare & Buy Online Insurance Plan - Wisdom Policy</span>
					<h2>Multiple Policy Discount | Free Online Quotes | 24/7 Services & Claims | State Minimum Rates| Fast & Easy Payments</h2>
					<p>At Wisdom Policy, we ensure a smooth online insurance journey by understanding your insurance needs.</p>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6">
                        <ReactWOW animation='fadeInUp' delay='0.1s'>
                            <div className="single-choose">
                                <span className="flaticon-kindness"></span>
                                <h3>More than 4000+ plans</h3>
                                <p>At Wisdom Policy, we intend to provide every household with a secured and well-informed insurance plan so that you can buy easy insurance online.</p>
                                
                                <Link href="/insurance-details">
                                    <a><i className="flaticon-right"></i></a>
                                </Link>

                                <span className="choose-icon flaticon-kindness"></span>
                            </div>
                        </ReactWOW>
					</div>

					<div className="col-lg-3 col-sm-6">
                        <ReactWOW animation='fadeInUp' delay='0.2s'>
                            <div className="single-choose">
                                <span className="flaticon-target"></span>
                                <h3>Objective Expert Advice</h3>
                                <p>We ensure transparency by simplifying the complicated online insurance policies.</p>
                                <Link href="/insurance-details">
                                    <a><i className="flaticon-right"></i></a>
                                </Link>
                                <span className="choose-icon flaticon-target"></span>
                            </div>
                        </ReactWOW>
					</div>

					<div className="col-lg-3 col-sm-6">
                        <ReactWOW animation='fadeInUp' delay='0.3s'>
                            <div className="single-choose">
                                <span className="flaticon-support"></span>
                                <h3>Secure Digital Journey</h3>
                                <p>Our analytics ensure that no fraudsters can affect your digital insurance ride.</p>
                                <Link href="/insurance-details">
                                    <a><i className="flaticon-right"></i></a>
                                </Link>
                                <span className="choose-icon flaticon-support"></span>
                            </div>
                        </ReactWOW>
					</div>
                    <div className="col-lg-3 col-sm-6">
                        <ReactWOW animation='fadeInUp' delay='0.1s'>
                            <div className="single-choose">
                                <span className="flaticon-kindness"></span>
                                <h3>100% Secure and Transparent</h3>
                                <p> Our team ensures transparency and safety at every step.</p>
                                <Link href="/insurance-details">
                                    <a><i className="flaticon-right"></i></a>
                                </Link>
                                <span className="choose-icon flaticon-kindness"></span>
                            </div>
                        </ReactWOW>
					</div>

				</div>
			</div>
		</div>
    )
}

export default WhyChooseUs;