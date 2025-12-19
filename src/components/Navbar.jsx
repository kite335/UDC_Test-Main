import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DropdownPanel from "./DropdownPanel";
import Sidebar from "./Sidebar"
import logo from "../assets/logo1 .png";
import crmIcon from "../assets/SidebarSvg/crm.svg";
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

  const [itemtoView,setItemToView]=useState({
     panel:{topicIcon:crmIcon,
        topicHeading:"CRM",
        topicTagLine:"Sale more",
        topicContent:[
          {contentHeading:"Main",des:"Desc"},
          {contentHeading:"Main",des:"Desc"},
          {contentHeading:"Main",des:"Desc"}
        ]
      }
    })
  const showDropdown=(dataForItem)=>{
        setItemToView(dataForItem)
  }
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
              className="me-2 size"
              style={{ height: "40px" }}
            />
            <span className="custom-text d-none d-sm-inline">
              UDC24
            </span>
           </Link>
           
             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* HOME */}
             

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
          

          {/* MENU ITEM LOGIC START HERE */}

          <ul className="navRight">
           <li><a href="">Whatsapp</a></li>
           <li><a href="">Email</a></li>
           <li><a href="">Facebook</a></li>
          </ul>
          {/* MAIN MENU BAR END HERE */}
        </div>
      </nav>
      <div className="importedProducts">
      <Sidebar sidebarStatus={panelStatus} showDropDown={showDropdown}/>
      <DropdownPanel   sidebarStatus={panelStatus} viewItem={itemtoView}/>
    </div>
    
    </>
  );
};

export default Navbar;
