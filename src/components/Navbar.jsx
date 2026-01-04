import React, { useState, useContext } from "react";
import { CommonDataContext } from "../store/CommonData";
import { Link, useLocation } from "react-router-dom";
import DropdownPanel from "./DropdownPanel";
import Sidebar from "./Sidebar";
import logo from "../assets/udc_logo1.png";

import "./Navbar.css";
import whatsappicon from "../assets/option/whatsapp.png";
import mailIcon from "../assets/option/google.png";
import { FaLinkedin } from "react-icons/fa";

const Navbar = ({ onAuthOpen, onOpenForm, setMegaData }) => {
  const location = useLocation();
  const currentPath = location.pathname;

 

  // Bitrix submenu click toggle[]

  // console.log(panelStatus);

  const handleNavClick = () => setIsNavCollapsed(true);
  const { panelStatus, setPanelStatus ,isNavCollapsed,setIsNavCollapsed} = useContext(CommonDataContext);
  return (
    <>
      <nav className="navbar custom-navbar navbar-expand-xl px-3 px-lg-4 shadow sticky-top">
        <div className="container-fluid firstContainer">
          {/* Logo and sologon click redirect home page */}
          <div className="navLeft">
            <div className='navbar-brand px-0 py-0 m-0'>
            <Link
              className="me-0"
              to="/"
              onClick={handleNavClick}
            >
              <img src={logo} alt="UDC Logo" className="logoImg" />
            </Link>
            </div>

            <button
              className={`navbar-toggler ${!isNavCollapsed ? "open" : ""}`}
              type="button"
              onClick={() => {setIsNavCollapsed(!isNavCollapsed);
                setPanelStatus(false);
              }}
              aria-controls="navbarContent"
              aria-expanded={!isNavCollapsed}
              aria-label="Toggle navigation"
            >
              <span className="hamburger">
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </span>
            </button>
            <div
              className={`collapse navbar-collapse  ${
                !isNavCollapsed ? "show " : ""
              }`}
              id="navbarContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                
                {/* HOME */}

                {/* PRODUCTS DROPDOWN (Mega menu) */}
                <li className={`nav-item dropdown custom-dropdown`}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setPanelStatus(!panelStatus);
                      window.scrollTo({top:0,behavior:"smooth"});
                      
                    }}
                    className={`nav-link px-3 dropdown-toggle ${
                      panelStatus && "rotate"
                    }`}
                    href="#"
                  >
                    PRODUCTS
                  </a>
                </li>

                {/* OTHER LINKS */}
                <li className="nav-item">
                  <Link
                    to="/pricing"
                    className={`nav-link px-3 ${
                      currentPath === "/pricing" ? "active" : ""
                    }`}
                    onClick={handleNavClick}
                  >
                    PRICING
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/services"
                    className={`nav-link px-3 ${
                      currentPath === "/services" ? "active" : ""
                    }`}
                    onClick={handleNavClick}
                  >
                    SERVICES
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/blog"
                    className={`nav-link px-3 ${
                      currentPath === "/blog" ? "active" : ""
                    }`}
                    onClick={handleNavClick}
                  >
                    BLOG
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/about"
                    className={`nav-link px-3 ${
                      currentPath === "/about" ? "active" : ""
                    }`}
                    onClick={handleNavClick}
                  >
                    ABOUT
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* MENU ITEM LOGIC START HERE */}

          <ul className="navRight">
            <li>
              <a href="https://wa.me/918958847686" target="_blank">
                <img src={whatsappicon} className="whtsappImg" />
              </a>
            </li>
            <li>
              <a href="mailto:info@uniquedesignconsultant.in" target="_blank">
                <img src={mailIcon} className="mailImg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/unique-design-consultant/posts/?feedView=all"
                target="_blank"
              >
                <FaLinkedin className="linkdeinIcon" />
              </a>
            </li>
          </ul>
          {/* MAIN MENU BAR END HERE */}
        </div>
        
    
      </nav>
     
    </>
  );
};

export default Navbar;
