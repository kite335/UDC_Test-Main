import './Dropdown.css'
import crmIcon from "../assets/SidebarSvg/crm.svg";
import {useState} from 'react';
 
const DropdownPanel=({viewItem,sidebarStatus})=>{
console.log("hello",viewItem)
 const {topicIcon,topicHeading,topicTagLine,topicContent}=viewItem.panel;
console.log(topicIcon)
// console.log(topicHeading)
return (
    <>
    {
   sidebarStatus&&   
    <div className="d-flex w-100  flex-column align-items-stretch flex-shrink-0 bg-white">
      <div className=" px-5" py-5>
    <a href="/" className="d-flex align-items-center flex-shrink-0 p-0 link-dark text-decoration-none ">
              <img src={topicIcon}alt={"icon"}></img>
      <svg className="bi me-2" width="4" height="24"><use xlink:href="#bootstrap"></use></svg>
      <span className="fs-5 fw-semibold">{topicHeading}</span>
    </a>
    <p>{topicTagLine}</p>
    <hr/>
    </div>

    <div className="  dropdownItems px-5 list-group-flush border-bottom scrollarea" >
      {topicContent.map((page)=>(
      <a href="#" className="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">{page.contentHeading}</strong>
          
        </div>
        <div className="col-10 mb-1 small">{page.des}</div>
      </a>
))}
      {/* <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-muted">Tues</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-muted">Mon</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>

      <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-muted">Wed</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-muted">Tues</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-muted">Mon</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-muted">Wed</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-muted">Tues</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-muted">Mon</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-muted">Wed</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-muted">Tues</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-muted">Mon</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a> */}
    </div>
  </div>
}
    </>
)
}
export default DropdownPanel;