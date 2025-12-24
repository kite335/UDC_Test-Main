import { useState, useRef,useContext } from "react";
import { CommonDataContext } from "../store/CommonData";
import "./Sidebar.css";







const Sidebar = () => {
  const {sidebarStatus, showDropDown,sidebarData,dropdown}=useContext(CommonDataContext)

  const classActive = useRef(0);
  const [activeClass, setactiveClass] = useState(false);
  // console.log(classActive);

  const handleDropDown = (e, dropdown) => {
    // CRM
    if (e.target.id === "0") {
      classActive.current = Number(e.target.id);
      // console.log(dropdown.crm);
      showDropDown(dropdown.crm,e.target.id);
    }

    // Collaboration
    else if (e.target.id === "1") {
      classActive.current = Number(e.target.id);
      // console.log(dropdown.collab);
      showDropDown(dropdown.collab,e.target.id);
    }

    // Task and Projects
    else if (e.target.id === "2") {
      classActive.current = Number(e.target.id);
      showDropDown(dropdown.taskProjects,e.target.id);
    }

    //  Site and Store
    else if (e.target.id === "3") {
      classActive.current = Number(e.target.id);
      showDropDown(dropdown.siteStore,e.target.id);
    }

    //Hr and Automation
    else if (e.target.id === "4") {
      classActive.current = Number(e.target.id);
      showDropDown(dropdown.hrAutomation,e.target.id);
    }

    // CoPilot
    else if (e.target.id === "5") {
      classActive.current = Number(e.target.id);
      showDropDown(dropdown.coPilot,e.target.id);
    }
  };

  

  return (
    
    <>
      {sidebarStatus && (
        <div
          class="d-flex flex-column flex-shrink-0 p-3 pt-3 bg-light"
          style={{ width: "350px" }}
        >
          <ul
            class="nav nav-pills flex-column mb-auto"
            style={{ rowGap: "3px" }}
          >
            {sidebarData.map((sideItem, index) => (
              <div key={index}>
                <li class="nav-item">
                  
                  <a
                    href="#"
                    className={`nav-link fw-bold fs-5 py-3 sideItemClick  ${
                      index === classActive.current ? "select":"sideItem"
                    }`}
                    aria-current="page"
                    id={index}
                    onClick={(e) => {
                      handleDropDown(e, dropdown);
                    }}
                    onMouseOver={(e)=>{handleDropDown(e,dropdown)}}
                  >
                    <div>
                    <img
                      src={sideItem.icon}
                      className={`${
                        index === classActive.current ? "svgSelect" : ""
                      }`}
                    ></img>

                    <svg class="bi me-2" width="16" height="16">
                      <use xlink:href="#home"></use>
                    </svg>
                    {sideItem.listItem}
                    </div>
                    <div className="dropdown-toggle rotateArrow"></div>
                    
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
