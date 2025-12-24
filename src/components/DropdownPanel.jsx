import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Dropdown.css";
import crmIcon from "../assets/SidebarSvg/crm.svg";
import { useState } from "react";

import { useContext } from "react";
import { CommonDataContext } from "../store/CommonData";



const DropdownPanel = () => {
  // console.log("hello",viewItem)
  const navigate = useNavigate();

  const { 
    viewItem, 
    sidebarStatus, 
    setDropdownStatus, 
    sideId, 
    setMegaData,
    side_1 
  } = useContext(CommonDataContext);

    console.log(side_1)
  const { 
    topicIcon, 
    topicHeading, 
    topicTagLine,
     topicContent, 
     navigateTo 
    } =viewItem.panel;
    
    
  // console.log(topicIcon)
  // console.log(topicHeading)

  const handleDropdownStatus = (e, navPath, pageIndex) => {
    if (e && e.preventDefault) e.preventDefault();
    // If CRM panel is active, populate mega menu data for index 0
    if (sideId === "0" && pageIndex === 0) {
      const dataToPass = side_1.page_1;
      setMegaData(dataToPass);
      setDropdownStatus(false);
      if (navPath) navigate(navPath, { state: { megaData: dataToPass } });
      return;
    }

    if (sideId === "0" && pageIndex === 1) {
      const dataToPass = side_1.page_2;
      setMegaData(dataToPass);
      setDropdownStatus(false);
      if (navPath) navigate(navPath, { state: { megaData: dataToPass } });
      return;
    }



    // default behavior: close dropdown and navigate
    setDropdownStatus(false);
    if (navPath) navigate(navPath);
  };
  return (
    <>
      {sidebarStatus && (
        <div className="d-flex w-100  flex-column align-items-stretch flex-shrink-0 bg-white">
          <div className=" px-5 pt-3">
            <Link
              to={navigateTo}
              className="d-flex align-items-center flex-shrink-0 p-0 link-dark text-decoration-none  "
              onClick={(e) => {
                handleDropdownStatus(e, navigateTo, null);
              }}
            >
              <img src={topicIcon} alt={"icon"}></img>
              <svg className="bi me-2" width="4" height="24">
                <use xlink:href="#bootstrap"></use>
              </svg>
              <span className="fs-5 fw-semibold headingPanel">
                {topicHeading}
              </span>
            </Link>
            <p>{topicTagLine}</p>
            <hr />
          </div>

          <div className="  dropdownItems px-5 list-group-flush border-bottom scrollarea">
            {topicContent.map((page, index) => (
              <Link
                to={page.navigateTo}
                id={index}
                className="list-group-item list-group-item-action active py-3 lh-tight"
                aria-current="true"
                onClick={(e) => {
                  handleDropdownStatus(e, page.navigateTo, index);
                }}
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1 headingPanel">
                    {page.contentHeading}
                  </strong>
                </div>
                <div className="col-10 mb-1 small">{page.des}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default DropdownPanel;
