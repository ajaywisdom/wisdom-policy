import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <React.Fragment>
            <footer className="footer-top-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <Link href="/">
                                    <a>
                                        <img src="/images/logo2.png" alt="Image" />
                                    </a>
                                </Link>

                                <p>Buying Insurance online can be a tricky affair. But not anymore! At Wisdom Policy, we navigate this daunting task to get insurance online by giving you a platform to compare insurance policies.</p>

                                <div className="social-area">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget contact">
                                <h3>Contact Us</h3>

                                <ul>
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <span>Hotline:</span> 
                                        <a href="tel:+822456974">
                                            Phone: +822456974
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <span>Email:</span> 
                                        <a href="mailto:hello@flexa.com">
                                            hello@flexa.com
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <i className="flaticon-maps-and-flags"></i>
                                        <span>Address:</span> 
                                        123, Western Road, Melbourne Australia
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Services</h3>

                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>Health Insurance</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Car Insurance</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Life Insurance</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Investment Plans</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Health Insurance</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Business</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Newsletter</h3>

                                <p className="newsletter-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>

                                <div className="subscribe-wrap">
                                    <form className="newsletter-form">
                                        <input type="email" className="form-control" placeholder="Enter Your Email" name="email" required />
                                        <button className="default-btn" type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
	
            <div className="footer-bottom-area footer-bottom-electronics-area">
                <div className="container">
                    <div className="copy-right">
                        <p>Copyright @{currentYear} Flexa Designed By <a href="https://envytheme.com/" target="blank">EnvyTheme</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;