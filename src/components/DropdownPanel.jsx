import { Link} from "react-router-dom";
import { useContext } from "react";
import { CommonDataContext } from "../store/CommonData";
import "./Dropdown.css";


const DropdownPanel = () => {
  // console.log("hello",viewItem)
  

  const { 
    viewItem, 
    sidebarStatus, 
    handleDropdownStatus,
    setIsNavCollapsed, 
  } = useContext(CommonDataContext);

    
  const { 
    topicIcon, 
    topicHeading, 
    topicTagLine,
     topicContent, 
     navigateTo 
    } =viewItem.panel;
    
    
const ClickDropdownStatus=(e,navPath,pageIndex)=>{
   handleDropdownStatus(e,navPath,pageIndex)
}
  
  return (
    <>
      {sidebarStatus && (
        <div className="d-flex w-100  flex-column align-items-stretch flex-shrink-0 bg-white">
          <div className=" px-5 pt-3">
            <Link
              to={navigateTo}
              className="d-flex align-items-center flex-shrink-0 p-0 link-dark text-decoration-none  "
              onClick={(e) => {
                ClickDropdownStatus(e, navigateTo, null);
                setIsNavCollapsed(true);
              }}
            >
              <img src={topicIcon} alt={"icon"}></img>
              <svg className="bi me-2" width="4" height="24">
                <use xlinkHref="#bootstrap"></use>
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
                key={index}
                className="list-group-item list-group-item-action active py-3 lh-tight"
                aria-current="true"
                onClick={(e) => {
                  ClickDropdownStatus(e, page.navigateTo, index);
                  setIsNavCollapsed(true);
                }}
              >
                <div className="d-flex w-100 align-items-center justify-content-between" key={index}>
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
