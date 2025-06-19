import { useState } from 'react'
import { Routes, Route } from "react-router";
import Home from './Pages/Home.jsx'
import Services from './Pages/Services.jsx';
import Teams from './Pages/Teams.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import About from './Pages/About.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App

