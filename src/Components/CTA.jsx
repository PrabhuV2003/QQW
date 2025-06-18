import React, { useState } from "react";
import { assets } from "../assets/assets";
import { PiPhoneList } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import EnquiryForm from "./EnquiryForm";

const CTA = () => {

  const [enquiryForm, setEnquiryForm] = useState(false);

  return (
    <div className="ctaContainer">
      <img className="ctaBG" src={assets.ctabg} alt="" />
      <img className="ctaBgOverlay" src={assets.cta_overlay} alt="" />

      <div className="ctaContent">
        <div className="leftSide">
          <p>Let's Get In Touch</p>
          <button onClick={() => setEnquiryForm(true)}>Button</button>
        </div>
        <div className="rightSide">
          <div className="ctaContactContainer">
            <a href="#">
              <PiPhoneList />
              <p>+230 - 465 5526</p>
            </a>
            <a href="#">
              <GoMail />
              <p>abced@gmail.com</p>
            </a>
          </div>
        </div>
      </div>

      {enquiryForm &&  <EnquiryForm onClose={() => setEnquiryForm(false)} />}

    </div>
  );
};

export default CTA;
