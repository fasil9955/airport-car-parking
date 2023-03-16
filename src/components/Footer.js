import React from "react";

const Footer = () => {
    return (
        <section id="footer">
                <div className="container">

                    <div className="row">
                        <div className="col-4 col-lg-2 footer-links text-center text-lg-left">
                            <p>Navigation</p>
                            <ul>
                                <li><a href="/" title="Home">Home</a></li>


                            </ul>
                        </div>

                        <div className="col-4 col-lg-2 footer-links text-center text-lg-left">
                            <p>Get Involved</p>
                            <ul>
                                <li><a href="/register/partner" title="Parking Partners">Parking Partners</a></li>

                            </ul>
                        </div>

                        <div className="col-4 col-lg-2 footer-links text-center text-lg-left">
                            <p>Discover</p>
                            <ul>
                                <li><a href="/help" title="Customer Service">Help</a></li>

                            </ul>
                        </div>

                        <div className="social-media col-md-6 hidden-md-down">
                            <div className="row">
                                <div className="col">
                                    <div className="social-media-icons">
                                        <a href="#top"
                                            title="Facebook" target="_blank">
                                            <div className="fab fa-facebook-f fa-2x"></div>
                                            <span>Facebook</span>
                                        </a>
                                    </div>

                                </div>

                                <div className="col">
                                    <div className="social-media-icons">
                                        <a href="#top" title="Instagram"
                                            target="_blank">
                                            <div className="fab fa-instagram fa-2x"></div>
                                            <span>Instagram</span>
                                        </a>
                                    </div>

                                </div>

                                <div className="col">
                                    <div className="social-media-icons">
                                        <a href="#top"
                                            title="Linkedin" target="_blank">
                                            <div className="fab fa-linkedin-in fa-2x"></div>
                                            <span>Linkedin</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright">
                        © 2000 - 2023 AirportParkingReservations.com, Inc. All Rights Reserved.<br />
                        MAG USA, 100 North Lasalle Street, Chicago, IL, 60602
                    </div>
                </div>
            </section>
    );
}
export default Footer;