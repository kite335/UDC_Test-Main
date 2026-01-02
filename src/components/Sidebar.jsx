import { useState, useContext } from "react";
import { CommonDataContext } from "../store/CommonData";
import "./Sidebar.css";

const Sidebar = () => {
  const { sidebarStatus, showDropDown, sidebarData, dropdown } =
    useContext(CommonDataContext);

  const [activeIndex, setActiveIndex] = useState(null);
  // console.log(classActive);

  const handleDropDown = (e, dropdown) => {
    const id = Number(e.currentTarget.id);
    setActiveIndex(id);
    const mapping = [
      dropdown.crm,
      dropdown.collab,
      dropdown.taskProjects,
      dropdown.siteStore,
      dropdown.hrAutomation,
      dropdown.coPilot,
    ];
    const items = mapping[id];
    if (items) showDropDown(items, String(id));
  };

  return (
    <>
      {sidebarStatus && (
        <div class="d-flex flex-column flex-shrink-0 p-3 pt-3 bg-light sidebarContainer">
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
                      index === activeIndex ? "select" : "sideItem"
                    }`}
                    aria-current="page"
                    id={index}
                    // onClick={(e) => {
                    //   handleDropDown(e, dropdown);
                    // }}
                    onMouseOver={(e) => {
                      handleDropDown(e, dropdown);
                    }}
                  >
                    <div>
                      <img
                        src={sideItem.icon}
                        className={`${
                          index === activeIndex ? "svgSelect" : ""
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
