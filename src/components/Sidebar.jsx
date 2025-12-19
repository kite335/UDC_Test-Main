import {useState,useRef} from 'react';

import crmIcon from "../assets/SidebarSvg/crm.svg";
import collabIcon from "../assets/SidebarSvg/collaboration.svg";
import task_projectIcon from "../assets/SidebarSvg/taskProjects.svg";
import site_storeIcon from "../assets/SidebarSvg/siteStore.svg";
import hr_automationIcon from "../assets/SidebarSvg/hr.svg";
import copilotIcon from "../assets/SidebarSvg/copilot.svg";

const sidebarData=[
  {listItem:"CRM",icon:crmIcon},
  {listItem:"COLLABORATION",icon:collabIcon},
  {listItem:"TASK & PROJECT",icon:task_projectIcon},
  {listItem:"SITE & STORE",icon:site_storeIcon},
  {listItem:"HR & AUTOMATION",icon:hr_automationIcon},
  {listItem:"COPILOT",icon:copilotIcon}
];

 const dropdown={
  crm:{
   panel:{
    topicIcon:crmIcon,
      topicHeading:"CRM",
      topicTagLine:"Manage sales and clients effortlessly",
      topicContent:[
        {contentHeading:"Sales management",des:"Manage leads, deals, contacts, pipelines, access permissions & roles"},
        {contentHeading:"Contact center",des:"Omnichannel communications via CRM forms, website widget, live chat, WhatsApp, Instagram, telephony, email"},
        {contentHeading:"Sales team collaboration",des:"Work with chat, video calls, tasks, calendar, file storage, online documents"},
        {contentHeading:"Sales enablement",des:"Get estimates, invoices, payments, catalog, inventory, e-signature, CRM store"},
        {contentHeading:"Analytics & reports",des:"Analyze sales funnel, employee performance, Sales Intelligence, BI Builder dashboards"},
        {contentHeading:"Mobile CRM",des:"Leads, deals, invoices, payments, telephony, emails, inventory, calendar at your fingertips"},
        {contentHeading:"Marketing",des:"Use email campaigns, social media ads, SMS, telemarketing, landing pages"},
        {contentHeading:"Automation & integrations",des:"Set CRM rules and triggers, workflow automation, automated funnels, API"},
        {contentHeading:"CoPilot in CRM",des:"Call audio-to-text transcription, call summary, field autocompletion in deals"},
        
        
      ]
    }
  },

    collab:{
   panel: {topicIcon:collabIcon,
      topicHeading:"CRM",
      topicTagLine:"Collab more",

      topicContent:[
        {contentHeading:"Main",des:"Desc"},
        {contentHeading:"Main",des:"Desc"},
        {contentHeading:"Main",des:"Desc"}
      ]
    }
  },

    taskProjects:{
   panel: {
      topicIcon:task_projectIcon,
      topicHeading:"CRM",
      topicTagLine:"Look project and task",


      topicContent:[
        {contentHeading:"Main",des:"Desc"},
        {contentHeading:"Main",des:"Desc"},
        {contentHeading:"Main",des:"Desc"}
      ]
    }
  }
  }



const Sidebar=({sidebarStatus,showDropDown})=>{
  
const classActive= useRef(0)
const [activeClass,setactiveClass]=useState(false)
  console.log(classActive)
  const handleDropDown=(e,dropdown)=>{
    if (e.target.id==="0"){
        classActive.current=Number(e.target.id)
        console.log(dropdown.crm)
        showDropDown(dropdown.crm)
        
    }
    else if(e.target.id==="1"){
      classActive.current=Number(e.target.id)
      console.log(dropdown.collab)
showDropDown(dropdown.collab)


    }
   
    else if(e.target.id==="2"){
      classActive.current=Number(e.target.id)
showDropDown(dropdown.taskProjects)
    }
  }

  

    return(
        <>
        {sidebarStatus&&

    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
    <ul class="nav nav-pills flex-column mb-auto">
      {sidebarData.map((sideItem,index)=>(
        <div key={index} >
         <li class="nav-item">
        <a href="#" className={`nav-link ${index===classActive.current?"active":""}` }  aria-current="page" id={index} onClick={(e)=>{handleDropDown(e,dropdown)}}>
         <img src={sideItem.icon}></img>
            
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          {sideItem.listItem}
        </a>
      </li>
      </div>

      ))}
     
      
    </ul>
   
  </div>
}
        </>
    )
}

export default Sidebar;