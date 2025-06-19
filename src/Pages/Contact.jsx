import React from "react";
// import ContactSupport from "../assets/contacy.png";
// import LocationIcon from "../assets/locationIcon.png";
// import MessageIcon from "../assets/messageIcon.png";
// import SendIcon from "../assets/sendIcon.png";
import { MdOutlineCall } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import {
  PiFacebookLogoLight,
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
  PiEnvelopeSimpleOpenLight,
} from "react-icons/pi";
import Banner from "../Components/Banner";
import { assets } from "../assets/assets";

const Contact = () => {
    return (
      <>
        <Banner img={assets.heroBg} />

        <section className="contact-section">
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-container">
            <div className="contact-left">
              <form action="#">
                <input type="text" name="name" id="name" placeholder="Your Name" />
              <input type="tel" name="phone" id="phone" placeholder='Phone Number' />
              <input type="email" name="email" id="email" placeholder='Email Address' />
              <select name="services" id="services">
                <option value="">Select the services</option>
                <option value="">Select the services</option>
                <option value="">Select the services</option>
              </select>
              <textarea textarea name="message" id="message" placeholder='Message'></textarea>
              </form>
            </div>

            <div className="contact-right">
              <div className="info-item">
                <p className="address">
                  QuantumQuest Wealth, C/o Juristax Holdings Ltd, Level.3, Ebene
                  House, Hotel Avenue, Cybercity, Ebene – 72201, Republic of
                  Mauritius.
                </p>
              </div>
              <div className="underline"></div>

              <div className="info-item">
                <a href="#">
                  <MdOutlineCall className="info-icon" />
                  <span>+230 – 465 5526</span>
                </a>
              </div>

              <div className="info-item">
                <a href="#">
                  <PiEnvelopeSimpleOpenLight className="info-icon" />
                  <span>Abced@gmail.com</span>
                </a>
              </div>

              <div className="underline"></div>

              <div className="social-links">
                <p className="social-title">Social links</p>
                <div className="social-icons">
                  <a href="#">
                    <RiTwitterXFill />
                  </a>
                  <a href="#">
                    <PiFacebookLogoLight />
                  </a>
                  <a href="#">
                    <PiInstagramLogoLight />
                  </a>
                  <a href="#">
                    <PiLinkedinLogoLight />
                  </a>
                </div>
              </div>
              <div className="contact-vectors">
                {/* <img
                  src={LocationIcon}
                  alt="location-icon"
                  className="location-icon"
                />
                <img
                  src={MessageIcon}
                  alt="message-con"
                  className="message-icon"
                />
                <img src={SendIcon} alt="send-icon" className="send-icon" /> */}
              </div>
            </div>
          </div>
        </section>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294545.42961770087!2d-74.16149598760485!3d40.71886779409207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sin!4v1749118613197!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </>
    );
};

export default Contact;
