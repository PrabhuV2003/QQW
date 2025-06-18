import React, { useState } from "react";
import WhatWeDoCards from "./WhatWeDoCards";
import { assets } from "../assets/assets";
import { ServicesData } from "../mockData/Services.js";
import { IoClose } from "react-icons/io5";

const WhatWeDo = () => {

  const [selectedCard, setSelectedCard] = useState(null);
  const [expandedPoint, setExpandedPoint] = useState(null);

  const openPopup = (item) => {
    setSelectedCard(item);
    setExpandedPoint(null);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  const togglePoint = (index) => {
    setExpandedPoint((prev) => (prev === index ? null : index));
  };

  return (
    <div className="WhatWeDoContainer">
      <div className="WhatWeDoContent">
        <div className="parent">
          <div className="div1">
            <h1>What We Do</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit expedita odio delectus ad quidem, ipsa amet nihil asperiores ut, obcaecati maiores aliquam eveniet. Quasi officia doloremque sit ipsam in?</p>
          </div>

          {ServicesData.map((item, index) => (
            <div className={`div${index + 2}`} key={item.id}>
              <WhatWeDoCards bgImg={item.bgImg} title={item.title} description={item.description} onClick={() => openPopup(item)} />
            </div>
          ))}
          
        </div>
      </div>

      <img className="whatWeDoDisplay" src={assets.whatwedo_Display} alt="" />

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

    </div>
  );
};

export default WhatWeDo;