import React, { useRef } from 'react';
import CTA from '../Components/CTA';
import Testimonial from '../Components/Testimonial';
import AboutUsSection from '../Components/AboutUsSection';
import HeroSection from '../Components/HeroSection';
import WhatWeDo from '../Components/WhatWeDo';

const Home = () => {
  const aboutUsRef = useRef(null);

  return (
    <div>
      <HeroSection scrollToRef={aboutUsRef} />
      <div ref={aboutUsRef}>
        <WhatWeDo />
      </div>
      <AboutUsSection />
      <Testimonial />
      <CTA />
    </div>
  );
};

export default Home;