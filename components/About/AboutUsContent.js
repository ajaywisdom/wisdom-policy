import React from "react";
import ReactWOW from "react-wow";

const AboutUsContent = () => {
  return (
    <div className="about-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content">
              {/* <span>About Us</span> */}
              <h2>Online Insurance - Digitally Innovative</h2>
              <p>
                Wisdom policy is the IRDA approved insurance web aggregator,
                aimed to create a space for our customers with unprecedented
                access to an all-in-one insurance online platform, unlike
                before, where agents put across expert advice regarding any
                policy. At Wisdom Policy, customers actively get informed
                knowledge of different policies online and decide as per their
                preference.{" "}
              </p>

              <p>
                Being an IRDA approved online insurance provider ensures us to
                provide genuine advice, instant quotes, and the best prices to
                buy Insurance Policy Plan Online. We strive to provide you with
                the best insurance online plan that fits your requirements at
                the right price.
              </p>

              <div className="about-list">
                {/* <ul>
									<li>
										<i className="flaticon-checked"></i>
										Save Money
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Fast Application
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Flexible Insurance
									</li>
									<li>
										<i className="flaticon-checked"></i>
										No Brokers, No Upselling
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Investment Planning
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Professional Advisor
									</li>
								</ul> */}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <ReactWOW animation="fadeInRight" delay="0.1s">
              <div className="about-img">
                <img src="/images/about-img.png" alt="Image" />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
