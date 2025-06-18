import React from 'react'
import { assets } from "../assets/assets";
import { IoClose } from "react-icons/io5";

const EnquiryForm = ({onClose}) => {

  return (
    <div className='enquiryFormContainer'>
      <div className='enquiryForm'>
        <img src={assets.EnquiryFormBG} alt="" />

        <div className='eqform'>
          <h1>Enquiry Form</h1>

          <form action="#" autoComplete='off'>
            <input type="text" name="name" id="name" placeholder='Your Name' />
            <input type="tel" name="phone" id="phone" placeholder='Phone Number' />
            <input type="email" name="email" id="email" placeholder='Email Address' />
            <select name="services" id="services">
              <option value="">Select the services</option>
              <option value="">Select the services</option>
              <option value="">Select the services</option>
            </select>
            <textarea name="message" id="message" placeholder='Message'></textarea>
            <button type='submit'>Enquire Now</button>
          </form>
        </div>

        {/* CLOSE BUTTON */}
        <div className="popupclose" onClick={onClose}>
          <IoClose />
        </div>
      </div>
    </div>
  )
}

export default EnquiryForm