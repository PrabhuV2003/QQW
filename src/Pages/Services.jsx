import React, { useState } from 'react'
import Banner from '../Components/Banner'
import { assets } from '../assets/assets'
import { ServicesData } from '../mockData/Services'
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import EnquiryForm from "../Components/EnquiryForm";

const Services = () => {

  const [selectedCard, setSelectedCard] = useState(null);
  const [expandedPoint, setExpandedPoint] = useState(null);
  const [enquiryForm, setEnquiryForm] = useState(false);

  const openPopup = (item) => {
    setSelectedCard(item);
    setExpandedPoint(null);
  }

  const closePopup = () => {
    setSelectedCard(null);
  }

    const togglePoint = (index) => {
    setExpandedPoint((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <Banner img={assets.heroBg} />

      <div className='ServiesContainer'>
        <h1>Services</h1>

        <div className='services'>
          {ServicesData.map((item, index) => (
            <div className='servicesCard'>
              <img src={item.bgImg} alt="" />

              <div className='serviceTitle'>
                <h1>{item.title}</h1>
                <div className='seervicesHoverContent'>
                  <p>The company business activities shall comprise of three mai++n segments which, inter alia, include the following:</p>
                  <button onClick={() => openPopup(item)}>View More</button>
                  <button onClick={() => setEnquiryForm(true)}>Enquiry More</button>
                </div>
              </div>

              <div className='servicesArrow'>
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="popupOverlay" onClick={closePopup}>
          <div className="popupContent" onClick={(e) => e.stopPropagation()}>

            <div className="popupTitle">
              <div className="round"></div>
              <h1>{selectedCard.title}</h1>
            </div>

            <p className="topPara">The offering of securities to potential client’s advisory will adhere to the following  methodology:</p>

            {selectedCard.servicesList?.map((point, index) => (
              <div key={index}>
                <div className={`points ${expandedPoint === index ? 'open' : ''}`}onClick={() => togglePoint(index)}>
                  <div>
                    <img src={point.img} alt="" />
                  </div>
                  <h2>{point.name}</h2>
                </div>

                <div className={`pointsContent ${expandedPoint === index ? 'open' : ''}`}>
                  {Array.isArray(point.desc) ? (
                    <ul>
                      {point.desc.map((line, i) => (
                        <li key={i}>• {line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{point.desc}</p>
                  )}
                </div>
              </div>
            ))}

            {/* CLOSE BUTTON */}
            <div className="popupclose" onClick={closePopup}>
              <IoClose />
            </div>

          </div>
        </div>
      )}

      {enquiryForm &&  <EnquiryForm onClose={() => setEnquiryForm(false)} />}

    </div>
  )
}

export default Services