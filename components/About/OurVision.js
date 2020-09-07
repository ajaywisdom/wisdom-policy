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
							<h2>Our Mission, Vision & Values</h2>
							<p><b>Our Mission:</b> To generate a holistic safety-net for our customers with access to a unified online platform. We help people compare the best insurance plans and assure a secure payment facility and a stable financial future.</p>	
<p><b>Our Vision:</b> To create a well-protected India by offering accessible, affordable, and suitable insurance plans. From finding an appropriate insurance plan to providing end-to-end claim support, our goal is not just to make profits but also to grow together in the insurance ecosystem.</p>
<p><b>Our Values:</b>To build an equitable financial inclusion platform for our customers with 360 digital services.</p>
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