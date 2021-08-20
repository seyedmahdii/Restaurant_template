import React from "react";
import "./Footer.css";
import FooterImage from "../../assets/images/Footer.svg";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__image-container">
                <div className="footer__image-wrapper">
                    <img
                        src={FooterImage}
                        alt="Footer"
                        className="footer__image"
                    />
                </div>
            </div>
            <div className="container footer-container">
                <div className="footer__links">
                    <a href="#" className="footer__link">
                        About
                    </a>
                    <a href="#" className="footer__link">
                        Services
                    </a>
                    <a href="#" className="footer__link">
                        Support
                    </a>
                    <a href="#" className="footer__link">
                        Gallery
                    </a>
                    <a href="#" className="footer__link">
                        Terms
                    </a>
                    <a href="#" className="footer__link">
                        Locations
                    </a>
                </div>

                <div className="footer__grid">
                    <div className="footer__grid-item">
                        <h5 className="footer__grid-title">Main Menu</h5>
                        <a href="#" className="footer__grid__link">
                            Pickup
                        </a>
                        <a href="#" className="footer__grid__link">
                            Delivery
                        </a>
                    </div>
                    <div className="footer__grid-item">
                        <h5 className="footer__grid-title">Orders</h5>
                        <a href="#" className="footer__grid__link">
                            Upcoming Orders
                        </a>
                        <a href="#" className="footer__grid__link">
                            Recent Orders
                        </a>
                    </div>
                    <div className="footer__grid-item">
                        <h5 className="footer__grid-title">Profile</h5>
                        <a href="#" className="footer__grid__link">
                            Promos & Credits
                        </a>
                        <a href="#" className="footer__grid__link">
                            Rewards
                        </a>
                    </div>
                    <div className="footer__grid-item">
                        <h5 className="footer__grid-title">Support</h5>
                        <a href="#" className="footer__grid__link">
                            Contact Us
                        </a>
                        <a href="#" className="footer__grid__link">
                            Live Chat
                        </a>
                    </div>
                </div>

                <div className="footer__texts">
                    <p className="footer__text footer__text--light">
                        Delight customers everywhere with a branded custom-built
                        native iOS, native Android and Installable Website
                        Application.
                    </p>
                    <p className="footer__text">
                        Opeqe is reliable, fast and commission free all-in-one
                        ordering solutions for multi-location or single location
                        restaurants.
                    </p>
                </div>

                <div className="footer__info">
                    <div>
                        <span className="">&copy;2019 OPEQE INC</span> |&nbsp;
                        <a
                            href="#"
                            className="footer__info-link footer__info-link--dark"
                        >
                            Terms & Conditions
                        </a>{" "}
                        |&nbsp;
                        <a
                            href="#"
                            className="footer__info-link footer__info-link--dark"
                        >
                            Privacy Policy
                        </a>
                    </div>
                    <div>
                        <a href="#" className="footer__info-link">
                            <InstagramIcon className="footer__icon" />
                        </a>
                        <a href="#" className="footer__info-link">
                            <TwitterIcon className="footer__icon" />
                        </a>
                        <a href="#" className="footer__info-link">
                            <FacebookIcon className="footer__icon" />
                        </a>
                        <a href="#" className="footer__info-link">
                            <YouTubeIcon className="footer__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
