import React, { useState } from "react";
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
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.services) {
      newErrors.services = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        services: "",
        message: "",
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>

    <Helmet>
      <title>Quantum Quest Wealth - Contact Us</title>
    </Helmet>

      <Banner img={assets.heroBg} />

      <section className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-container">
          <div className="contact-left">
            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small className="error">{errors.name}</small>}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <small className="error">{errors.phone}</small>}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="error">{errors.email}</small>}

              <select
                name="services"
                value={formData.services}
                onChange={handleChange}
              >
                <option value="">Select the services</option>
                <option value="wealth">Wealth Management</option>
                <option value="tokenization">Asset Tokenization</option>
                <option value="consulting">Financial Consulting</option>
              </select>
              {errors.services && (
                <small className="error">{errors.services}</small>
              )}

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <small className="error">{errors.message}</small>
              )}

              <button type="submit" className="submit-button">
                Submit
              </button>
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
          </div>
        </div>
      </section>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294545.42961770087!2d-74.16149598760485!3d40.71886779409207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sin!4v1749118613197!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
