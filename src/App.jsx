import { useState } from 'react'
import { Routes, Route } from "react-router";
import Home from './Pages/Home.jsx'
import Services from './Pages/Services.jsx';
import Teams from './Pages/Teams.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App

