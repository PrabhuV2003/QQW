import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { IoIosContact } from "react-icons/io";
import { assets } from '../assets/assets';
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [smNavOpen, setSmNavOpen] = useState(false);

    const openNav = () => {
        setSmNavOpen(true)
    }

    const closeNav = () => {
        setSmNavOpen(false)
    }

  return (
    <div className='NavbarContainer'>
        <div className='left'>
            <NavLink to='/'>
                <img className='logo' src={assets.logo} alt="" />
            </NavLink>
        </div>
        <div className='middle'>
            <div>
                <NavLink to='/'>
                    <p>HOME</p>
                    <div className='navActive'>
                        <span></span>
                        <span></span>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to='/about-us'>
                    <p>ABOUT</p>
                    <div className='navActive'>
                        <span></span>
                        <span></span>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to='/services'>
                    <p>SERVICE</p>
                    <div className='navActive'>
                        <span></span>
                        <span></span>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to='/teams'>
                    <p>TEAMS</p>
                    <div className='navActive'>
                        <span></span>
                        <span></span>
                    </div>
                </NavLink>
            </div>
        </div>
        <div className='right'>
            <NavLink to='/contact-us'>
                <IoIosContact />
                <p>CONTACT</p>
            </NavLink>
            <div className='humburger' onClick={openNav}>
                <span></span>
                <span></span>
            </div>
        </div>

        {/* SMALL DEVICE NAVBAR */}
        <div className={`smNav ${smNavOpen ? 'open' : ''}`}>
            <div className="top">
                <NavLink to='/'>
                        <img className='logo' src={assets.logo} alt="" />
                </NavLink>
                <div className='smNavClose' onClick={closeNav}>
                    <IoClose />
                </div>
            </div>
            <div className='smNavList'>
                <div onClick={closeNav}>
                    <NavLink to='/'>
                        <p>HOME</p>
                        <div className='navActive'>
                            <span></span>
                            <span></span>
                        </div>
                    </NavLink>
                </div>
                <div onClick={closeNav}>
                    <NavLink to='/about-us'>
                        <p>ABOUT</p>
                        <div className='navActive'>
                            <span></span>
                            <span></span>
                        </div>
                    </NavLink>
                </div>
                <div onClick={closeNav}>
                    <NavLink to='/services'>
                        <p>SERVICE</p>
                        <div className='navActive'>
                            <span></span>
                            <span></span>
                        </div>
                    </NavLink>
                </div>
                <div onClick={closeNav}>
                    <NavLink to='/teams'>
                        <p>TEAMS</p>
                        <div className='navActive'>
                            <span></span>
                            <span></span>
                        </div>
                    </NavLink>
                </div>
                <div onClick={closeNav}>
                    <NavLink to='/contact-us'>
                        <p>CONTACT US</p>
                        <div className='navActive'>
                            <span></span>
                            <span></span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar