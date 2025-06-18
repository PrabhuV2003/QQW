import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { FaAngleDown } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ scrollToRef  }) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        {
          y: "100%",
        },
        {
          y: "0",
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 0",
            end: "bottom top",
            scrub: 0.5,
            pin: containerRef.current,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="heroSectionContainer">
      <img className="heroBg" src={assets.heroBg} alt="" />

      <div className="heroContent">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <button>Button</button>
      </div>

      <img ref={imgRef} className="heroBuilding" src={assets.building} alt="" />

      <div className="scrollDown" onClick={handleScrollDown}>
        <p>SCROLL</p>
        <FaAngleDown />
      </div>
    </div>
  );
};

export default HeroSection;
