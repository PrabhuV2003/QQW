import React from "react";
import { PiPhoneThin } from "react-icons/pi";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { assets } from '../assets/assets';


const Footer = () => {

  const currentyear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-top">
          <div className="footer-top-right">
            <div className="top-right-section1">
              <div className="right-section1-logo">
                <img
                  src={assets.logo}
                  alt=""
                />
              </div>
              <div className="right-section1-quicklinks">
                <div className="section1-quicklinks-1">
                  <h1>company</h1>
                  <p>home</p>
                  <Link to="/about-us">
                    <p>about us</p>
                  </Link>
                  <p>service</p>
                  <Link to="/team">
                    <p>teams</p>
                  </Link>
                  <Link to="/contact-us">
                    <p>contact us</p>
                  </Link>
                </div>
                <div className="section1-quicklinks-1">
                  <h1>product</h1>
                  <p>terms & conditions</p>
                  <p>privacy policy</p>
                </div>
              </div>
              <div>
                <img
                src={assets.footer}
                alt=""
                className="smFooter"
              />
              </div>
            </div>
            <div className="top-right-section2">
              <h1>lorem ipsum dolor sit</h1>
              <img
                src={assets.footer}
                alt=""
              />
            </div>
          </div>
          <div className="footer-top-left">
            <div className="top-left-content">
              <h1>contact us</h1>
              <p>
                QuantumQuest Wealth, C/o Juristax Holdings Ltd, Level.3, Ebene
                House, Hotel Avenue, Cybercity, Ebene – 72201, Republic of
                Mauritius.
              </p>
              <p>
                <PiPhoneThin size={20} />
                <a href="tel:+2304655526" style={{ marginLeft: "8px" }}>
                  +230 – 465 5526
                </a>
              </p>
              <p>
                <PiEnvelopeSimpleThin size={20} />
                <a href="mailto:abced@gmail.com" style={{ marginLeft: "8px" }}>
                  abced@gmail.com
                </a>
              </p>
              <div className="top-left-content-media">
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={25} className="media-icons" />
                </a>
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={25} className="media-icons" />
                </a>
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiInstagramFill size={25} className="media-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={25} className="media-icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>copyrights© {currentyear}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
