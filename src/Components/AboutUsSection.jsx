import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { assets } from '../assets/assets';
import { FaAngleDown } from "react-icons/fa6";

const AboutUsSection = () => {
  return (
    <div className='aboutUsSectionContainer'>
        <div className='aboutUsSectionContent'>
            <div className='aboutUsSectionCard'>
                <h1>ABOUT US</h1>
                <p>QuantumQuest Wealth, the company was incorporated in Mauritius in the year 8th Day of May  2025. The company is incorporated as a Private Company Limited by shares.</p>
                <button>
                    EXLPORE ALL <FaArrowRightLong />
                    <img src={assets.btnBg} alt="" />
                </button>
            </div>

            <img className='worldGlobe' src={assets.world_globe} alt="" />
            
        </div>
    </div>
  )
}

export default AboutUsSection