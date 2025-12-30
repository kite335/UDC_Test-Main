import React, { useState,useContext } from "react";
import { CommonDataContext } from "../store/CommonData";
import { Link, useLocation } from "react-router-dom";
import DropdownPanel from "./DropdownPanel";
import Sidebar from "./Sidebar";
import logo from "../assets/logo1 .png";

import "./Navbar.css";
import whatsappicon from '../assets/option/whatsapp.png';
import mailIcon from '../assets/option/google.png'
import { SiFacebook } from "react-icons/si";
import b24icon from "../assets/theme/b24Icon.png";
import zicon from "../assets/theme/zIcon.png";
import Odoo from "../assets/theme/Odoo.png";
import Zwcad from "../assets/theme/zwcad.png";

const Navbar = ({ onAuthOpen, onOpenForm ,setMegaData}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Bitrix submenu click toggle[]

  // console.log(panelStatus);

  

  const handleNavClick = () => setIsNavCollapsed(true);
  const {panelStatus,setPanelStatus}=useContext(CommonDataContext)
  return (
    
    <>
      <nav className="navbar custom-navbar navbar-expand-lg px-3 px-lg-4 shadow sticky-top">
        <div className="container-fluid firstContainer">
          {/* Logo and sologon click redirect home page */}
          <div className="navLeft">
            <Link
              className="navbar-brand d-flex align-items-center"
              to="/"
              onClick={handleNavClick}
            >
              <img
                src={logo}
                alt="UDC Logo"
                className="me-3 size"
                style={{ height: "40px" }}
              />
              <span className="custom-text d-none d-sm-inline">24</span>
            </Link>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* HOME */}

              {/* PRODUCTS DROPDOWN (Mega menu) */}
              <li className={`nav-item dropdown custom-dropdown`}>
                <a
                  onClick={() => {
                    panelStatus === false
                      ? setPanelStatus(true)
                      : setPanelStatus(false);
                  }}
                  className={`nav-link px-3 dropdown-toggle ${panelStatus && "rotate"
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
                  className={`nav-link px-3 ${currentPath === "/pricing" ? "active" : ""
                    }`}
                  onClick={handleNavClick}
                >
                  PRICING
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/services"
                  className={`nav-link px-3 ${currentPath === "/services" ? "active" : ""
                    }`}
                  onClick={handleNavClick}
                >
                  SERVICES
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/blog"
                  className={`nav-link px-3 ${currentPath === "/blog" ? "active" : ""
                    }`}
                  onClick={handleNavClick}
                >
                  BLOG
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link px-3 ${currentPath === "/about" ? "active" : ""
                    }`}
                  onClick={handleNavClick}
                >
                  ABOUT
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link px-3 ${currentPath === "/contact" ? "active" : ""
                    }`}
                  onClick={handleNavClick}
                >
                  CONTACT
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/blogpage"
                  className={`nav-link px-3 ${currentPath === "/services" ? "active" : ""
                    }`}
                  onClick={handleNavClick}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* MENU ITEM LOGIC START HERE */}

          <ul className="navRight">
            <li>
              <a href=""><img src={whatsappicon} style={{width:"35px"}}/></a>
            </li>
            <li>
              <a href=""><img src={mailIcon} style={{width:"50px"}}/></a>
            </li>
            <li>
              <a href=""><SiFacebook style={{width:"35px",height:"35px",color:"#1877F2"}}/></a>
            </li>
          </ul>
          {/* MAIN MENU BAR END HERE */}
        </div>
      </nav>

      {/* <div className="importedProducts">
        <Sidebar sidebarStatus={panelStatus}  showDropDown={showDropdown} />
        <DropdownPanel sidebarStatus={panelStatus} setDropdownStatus={setPanelStatus} viewItem={itemtoView} sideId={idStatus} setMegaData={setMegaData} />
      </div> */}
    </>
  );
};

export default Navbar;
