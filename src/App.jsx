import { useState } from 'react'
import { Routes, Route } from "react-router";
import Home from './Pages/Home.jsx'
import Services from './Pages/Services.jsx';
import Navbar from './Components/Navbar.jsx';

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App

