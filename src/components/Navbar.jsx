import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1 .png";
import "./Navbar.css";
import b24icon from "../assets/theme/b24Icon.png";
import zicon from "../assets/theme/zIcon.png";
import Odoo from "../assets/theme/Odoo.png";
import Zwcad from "../assets/theme/zwcad.png";

const Navbar = ({ onAuthOpen, onOpenForm }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Bitrix submenu click toggle[]
  const [panelStatus, setPanelStatus] = useState(false);
  const [bitrixOpen, setBitrixOpen] = useState(false);
  console.log(panelStatus);

  const toggleBitrix = (e) => {
    e.preventDefault();
    setBitrixOpen((prev) => !prev);
  };

  const bitrixSubmenu = [
    { path: "/bitrix24-crm", content: "CRM" },
    { path: "/task-projects", content: "Task & Projects" },
    { path: "/social-intranet", content: "Social Intranet" },
    
    { path: "/documents", content: "Documents" },
    { path: "/drive", content: "Drive" },
    { path: "/calenders", content: "Calenders" },
    { path: "/mail", content: "Mail" },
    { path: "/clients", content: "Clients" },
    
    { path: "hr", content: "HR" },
    { path: "mobile", content: "Mobile" },
    { path: "sites", content: "Sites" },
  ];

  const handleNavClick = () => setIsNavCollapsed(true);

  return (
    <>
      <nav className="navbar custom-navbar navbar-expand-lg px-3 px-lg-4 shadow sticky-top">
        <div className="container-fluid">
          {/* Logo and sologon click redirect home page */}
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
            onClick={handleNavClick}
          >
            <img
              src={logo}
              alt="UDC Logo"
              className="me-2 size"
              style={{ height: "40px" }}
            />
            <span className="custom-text d-none d-sm-inline">
              Unique Design Consultant
            </span>
          </Link>
          {/* END HERE REDIRECT LOGIC */}

          {/* <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

          {/* MENU ITEM LOGIC START HERE */}

          <div
            // className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* HOME */}
              <li className="nav-item active">
                <Link
                  to="/"
                  className={`nav-link px-3  ${currentPath === "/" ? "highlight" : ""
                    }`}
                  onClick={handleNavClick}
                >
                  HOME
                </Link>
              </li>

              {/* PRODUCTS DROPDOWN (Mega menu) */}
              <li className={`nav-item dropdown custom-dropdown`}>
                <a
                  onClick={() => {
                    panelStatus === false
                      ? setPanelStatus(true)
                      : setPanelStatus(false) 
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
            </ul>
          </div>
          {/* MAIN MENU BAR END HERE */}
        </div>
      </nav>
    {panelStatus && (<div className="panelStatusContainer" style={{position:"absolute", maxWidth:"93%",margin:"auto",zIndex:"1",
  left:"50px",display:"flex",width:"100%",}}>
          
          <ul className={` ${panelStatus && "custom-dropdown-menu"}`}>
            {/* Bitrix24 icon + submenu */}
            <div className={`sideBarMenu`}>
              <li className={`dropdown-submenu  ${bitrixOpen ? "open" : ""} ${currentPath==="/"?"selected":''}`}>
                <a
                  className="dropdown-toggle bitrixToggle bitrixArrowWrapper "
                  href="#"
                  onClick={() => {
                    !bitrixOpen ? setBitrixOpen(true) : setBitrixOpen(false);
                  }}
                >
                  <img src={b24icon} style={{ width: "80px",height:"15px" }} />

                  {/* ▼ Arrow */}
                  
                </a>
              </li>

              {/* Zoho */}
              <li className={`${currentPath==="/zoho-page"?"selected":''}`}>
                <Link
                  to="/zoho-page"
                 
                  onClick={handleNavClick}
                >
                  <img src={zicon} style={{ width: "80px",height:"15px",objectFit:"cover" }} />
                </Link>
              </li>

              {/* Odoo */}
              <li>
                <Link
                  to="/Bitrix24CRM"
                  
                  onClick={handleNavClick}
                >
                  <img src={Odoo} style={{ width: "80px",height:"15px",objectFit:"cover" }} />
                </Link>
              </li>

              {/* ZWCAD */}
              <li>
                <Link
                  to="/Bitrix24CRM"
                  
                  onClick={handleNavClick}
                >
                  <img src={Zwcad} style={{ width: "80px",height:"15px",objectFit:"cover" }} />
                </Link>
              </li>
            </div>
          </ul>
        

        {/* Bitrix submenu */}
        {
          
        <ul className={` Bitrix24Submenu`}>
          <div className="Bitrix24SubmenuGrid">
            {bitrixSubmenu.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="bitrixDropdown" onClick={()=>{panelStatus?setPanelStatus(false):''}}>
                  {item.content}
                </Link>
              </li>
            ))}
          </div>
        </ul>}
      </div>)
}
    </>
  );
};

export default Navbar;
