import React, { useState } from 'react';
import { assets } from "../assets/assets";
import { IoClose } from "react-icons/io5";

const EnquiryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{7,15}$/.test(formData.phone)) newErrors.phone = "Enter valid phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter valid email";
    if (!formData.services) newErrors.services = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setErrors({...errors, [e.target.name]: ''});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully!");
      // reset or submit logic
    }
  };

  return (
    <div className='enquiryFormContainer'>
      <div className='enquiryForm'>
        <img src={assets.EnquiryFormBG} alt="" />

        <div className='eqform'>
          <h1>Enquiry Form</h1>
          <form onSubmit={handleSubmit} autoComplete='off'>
            <input
              type="text"
              name="name"
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="tel"
              name="phone"
              placeholder='Phone Number'
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <input
              type="email"
              name="email"
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <select
              name="services"
              value={formData.services}
              onChange={handleChange}
            >
              <option value="">Select the services</option>
              <option value="consulting">Consulting</option>
              <option value="advisory">Advisory</option>
              <option value="management">Management</option>
            </select>
            {errors.services && <p className="error">{errors.services}</p>}

            <textarea
              name="message"
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}

            <button type='submit'>Enquire Now</button>
          </form>
        </div>

        <div className="popupclose" onClick={onClose}>
          <IoClose />
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
