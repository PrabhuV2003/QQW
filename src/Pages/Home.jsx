import React, { useRef } from 'react';
import CTA from '../Components/CTA';
import Testimonial from '../Components/Testimonial';
import AboutUsSection from '../Components/AboutUsSection';
import HeroSection from '../Components/HeroSection';
import WhatWeDo from '../Components/WhatWeDo';
import { Helmet } from 'react-helmet';

const Home = () => {
  const aboutUsRef = useRef(null);

  return (
    <>

    <Helmet>
      <title>Quantum Quest Wealth</title>
    </Helmet>

    <div>
      <HeroSection scrollToRef={aboutUsRef} />
      <div ref={aboutUsRef}>
        <WhatWeDo />
      </div>
      <AboutUsSection />
      <Testimonial />
      <CTA />
    </div>
    </>
  );
};

export default Home;