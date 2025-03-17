import React from 'react'
import { useState } from 'react';
import {  MdLogout, MdPostAdd } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaHospital } from "react-icons/fa";
import '../User-components/navbar.css'
import image from '../Images/BedPortal1.png'
const UserNavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
            <img src={image} ></img>
            </a>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
                {/* hamburger svg code... */}
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="/userViewHospital"><FaHospital/> Hospitals</a>
                    </li>
                    <li>
                        <a href="/" onClick={()=>sessionStorage.clear()}><MdLogout/> Log out</a>
                    </li>
                </ul>
            </div>
        </nav>
  );
}

export default UserNavBar;