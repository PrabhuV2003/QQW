import React from "react";
import Testimonial from "../Components/Testimonial";
import CTA from "../Components/CTA";
import { assets } from "../assets/assets";
import Banner from "../Components/Banner";

const About = () => {
  return (
    <>
    <Banner img={assets.heroBg} />

    <div className="about-container">
      <div className="about-main">
        <div className="about-section1-main">
          <div className="about-section1">
            <div className="about-section1-head">
              <h1>About us</h1>
            </div>
            <div className="about-section1-content">
              <div className="about-section1-content-r">
                <p>
                  QuantumQuest Wealth, the company was incorporated in Mauritius
                  in the year 8th Day of May 2025. The company is incorporated
                  as a Private Company Limited by shares.
                </p>
                <p>
                  The company has received the Global Business Licence and
                  Investment Adviser (Unrestricted) Licence from the Financial
                  Services Commission (FSC), Mauritius for commencing the
                  business of investment advisory and wealth management as on
                  9th May 2025.
                </p>
              </div>
              <div className="about-section1-content-l">
                <img
                  className="content-l-main-img"
                  src="https://download.havecamerawilltravel.com/sample-images/webp/webp-example.webp"
                  alt=""
                />
                <img className="aboutOverlay" src={assets.cta_overlay} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-section2-main">
          <div className="about-section2">
            <div className="about-section2-content-r">
              <p>
                Investment advisory business involves providing personalized
                financial guidance and support to clients, typically individuals
                or entities seeking to optimize their investment portfolios. The
                Company will maximise on expertise of the management team and
                professional advisers and excels in analysing financial
                situations, assessing risk tolerance, and formulating tailored
                investment strategies for the clients.
              </p>
            </div>
            <div className="about-section2-content-l">
              <img
                src="https://cdn.pixabay.com/photo/2025/06/11/07/18/wildlife-9653797_960_720.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="aboutOrbitContainer">
          <div className="orbit1">
            <div className="orbitCircle orbitCircle1"></div>
            <div className="orbitCircle orbitCircle2"></div>
            <div className="orbitCircle orbitCircle3"></div>
            <div className="orbitCircle orbitCircle4"></div>
          </div>
          <div className="orbit2"></div>
          <div className="orbitContent">
            <p>The team leverages extensive market knowledge and industry expertise to guide clients in making  informed decisions, aiming to enhance their financial well-being.</p>
            <p>The commitment to transparency, ethical practices, and continuous monitoring of market trends  distinguishes the Company as a trusted partner in the realm of financial and investment advisory  services.</p>
          </div>
        </div>
        <Testimonial />
        <CTA />
      </div>
    </div>
    </>
  );
};

export default About;
