import React from 'react';
import ReactWOW from 'react-wow';

const OurVision = () => {
    return (
        <div className="our-vision-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
                        <ReactWOW animation='fadeInLeft' delay='0.1s'>
                            <div className="about-img">
                                <img src="/images/vision-img.png" alt="Image" />
                            </div>
                        </ReactWOW>
					</div>

					<div className="col-lg-6">
						<div className="vision-content">
							<span>Our Vision</span>
							<h2>We are Here for You</h2>

							<p>Wisdom Policy being a reliable online insurance provider, offers an extensive range of insurance products, assuring excellent user experience and long-lasting customer relationships.</p>	

							<div className="vision-list">
								<ul>
									<li>
										<i className="bx bx-chevrons-right"></i>
										Lowest Premiums
									</li>
									<li>
										<i className="bx bx-chevrons-right"></i>
										Instant Application
									</li>
									<li>
										<i className="bx bx-chevrons-right"></i>
										Extensive Plans

									</li>
									<li>
										<i className="bx bx-chevrons-right"></i>
										No Agents
									</li>
									<li>
										<i className="bx bx-chevrons-right"></i>
										Investment Options
									</li>
									<li>
										<i className="bx bx-chevrons-right"></i>
										Dedicated Advisors
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default OurVision;