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
   panel:{topicIcon:collabIcon,
      topicHeading:"Collaboration",
      topicTagLine:"Power up your teamwork",

      topicContent:[
        {contentHeading:"Online workspace",des:"Use chat, activity feed, comments, reactions, company-wide video announcements"},
        {contentHeading:"Online documents & file storage",des:"Store, share and edit documents online easily with co-workers using company drive"},
        {contentHeading:"Workgroups",des:"Create workgroups, invite external users, set access permissions and work on tasks and projects"},
        {contentHeading:"Online meetings",des:"Do more with video calls, video conferencing, screen sharing, call recording and custom backgrounds"},
        {contentHeading:"Shared Calenders",des:"Plan with company & personal calendar, open time slots, meeting room booking, calendar sync"},
        {contentHeading:"Mobile communications",des:"Team messenger, video calls, comments, calendar, notifications anywhere"},
        {contentHeading:"CoPilot in Chat",des:"Unlimited source of ideas, AI-generated texts, brainstorming, and more"},
       

      ]
    }
  },

    taskProjects:{
   panel: {
      topicIcon:task_projectIcon,
      topicHeading:"Tasks & Projects",
      topicTagLine:"Get work done easier & faster",

      topicContent:[
        {contentHeading:"Task management",des:"Choose between Kanban board, Gantt chart, Scrum, task list"},
        {contentHeading:"Task tracking",des:"Take advantage of checklists & sub-tasks, task summary, time tracking, focus & supervisor mode"},
        {contentHeading:"API & integrations",des:"Connect your tasks to other services via API integration for advanced task automation"},
        {contentHeading:"Project management",des:"Use projects, workgroups, project planning, roles, access permissions"},
        {contentHeading:"Employee performance",des:"Get productive with task reports, workload management, task efficiency & KPI"},
        {contentHeading:"Mobile tasks",des:"Task creation, task tracking, notifications, comments, chat on the go"},
        {contentHeading:"Project collaboration",des:"Work faster with chat, video calls, comments, file storage, documents, external users, task templates"},
        {contentHeading:"Automation",des:"Save time with automatic task creation and workflow automation"},
        {contentHeading:"CoPilot in Tasks",des:"AI-generated task descriptions, task summaries, checklists, comments"}
      ]
    }

  },

   siteStore:{
   panel: {
      topicIcon:site_storeIcon,
      topicHeading:"Sites & Stores",
      topicTagLine:"Create websites that sell",

      topicContent:[
        {contentHeading:"Website builder",des:"Use our free CMS, templates, hosting, AI-generated images and texts to create awesome sites"},
        {contentHeading:"Social selling",des:"Sell your products directly via Facebook, Instagram, WhatsApp or Telegram"},
        {contentHeading:"Website forms",des:"Capture leads with custom order forms, registration & feedback forms, and forms with conditional fields"},
        {contentHeading:"Landing pages",des:"Generate leads with capture forms, automated funnels and Google Analytics integration"},
        {contentHeading:"Online store",des:"Maximize ecommerce with inventory management, order processing, delivery and online payments"},
        {contentHeading:"Mobile sites & online stores",des:"Responsive design, online orders, client management in your pocket"},
        {contentHeading:"Website widget",des:"Enable widget to chat with site visitors, use popular messengers and accept callback requests"},
        {contentHeading:"Online marketing tools",des:"Increase sales with email marketing, Facebook or Google Ads, marketing automation, CRM integration"},
        {contentHeading:"CoPilot in Sites & Stores",des:"Compelling copy on demand, AI-generated images, detailed prompts, text translation"}
      ]
    }

  },

   hrAutomation:{
   panel: {
      topicIcon:hr_automationIcon,
      topicHeading:"HR & Automation",
      topicTagLine:"Optimize workflows & manage HR data",

      topicContent:[
        {contentHeading:"Employee management",des:"Use employee profiles, company structure, access permissions, Active Directory"},
        {contentHeading:"Cuktural & engagement",des:"Get company news, polls, appreciation badges, tags, personal notifications"},
        {contentHeading:"Mobile HR",des:"Chat, video calls, employee profiles, approvals, notifications on the go"},
        {contentHeading:"Work management",des:"Track employee performance with KPI, work reports, supervisor view"},
        {contentHeading:"Internal communications",des:"Communicate via video announcements, memos, public and private chats"},
        {contentHeading:"CoPilot in Feed",des:"Thread summaries, AI-generated ideas, text editing & creation, AI-written responses, text translation"},
        {contentHeading:"Information management",des:"Work with knowledge bases, online documents, file storage, access permissions"},
        {contentHeading:"Automation",des:"Streamline operations with requests, approvals, expense reports, RPA, workflow automation"}
        
      ]
    }

  },

   coPilot:{
   panel: {
      topicIcon:copilotIcon,
      topicHeading:"CoPilot",
      topicTagLine:"Your AI-powered assistant in Bitrix24",

      topicContent:[
        {contentHeading:"CoPilot in CRM",des:"Call audio-to-text transcription, call summary, field autocompletion in deals"},
        {contentHeading:"CoPilot in Tasks",des:"AI-generated task descriptions, task summaries, checklists, comments"},
        {contentHeading:"CoPilot in Chat",des:"Unlimited source of ideas, AI-generated texts, brainstorming, and more"},
        {contentHeading:"CoPilot in Sites & Stores",des:"Compelling copy on demand, AI-generated images, detailed prompts, text translation"},
        {contentHeading:"CoPilot in Feed",des:"Thread summaries, AI-generated ideas, text editing & creation, AI-written responses, text translation"},
        {contentHeading:"CoPilot in Video Calls",des:"Streamline operations with requests, approvals, expense reports, RPA, workflow automation"},
       
      ]
    }

  }
  }



const Sidebar=({sidebarStatus,showDropDown})=>{
  
const classActive= useRef(0)
const [activeClass,setactiveClass]=useState(false)
  console.log(classActive)
  const handleDropDown=(e,dropdown)=>{
       
    // CRM
    if (e.target.id==="0"){
        classActive.current=Number(e.target.id)
        console.log(dropdown.crm)
        showDropDown(dropdown.crm)      
    }
       
    // Collaboration
    else if(e.target.id==="1"){
      classActive.current=Number(e.target.id)
      console.log(dropdown.collab)
      showDropDown(dropdown.collab)
    }
        
    // Task and Projects
    else if(e.target.id==="2"){
      classActive.current=Number(e.target.id)
      showDropDown(dropdown.taskProjects)
    }
  
      //  Site and Store
  else if(e.target.id==="3"){
      classActive.current=Number(e.target.id)
      showDropDown(dropdown.siteStore)
    }
  
        //Hr and Automation
  else if(e.target.id==="4"){
      classActive.current=Number(e.target.id)
      showDropDown(dropdown.hrAutomation)
    }
  
     // CoPilot
  else if(e.target.id==="5"){
      classActive.current=Number(e.target.id)
      showDropDown(dropdown.coPilot)
    }
  }

  

    return(
        <>
        {sidebarStatus&&

    <div class="d-flex flex-column flex-shrink-0 p-3 pt-3 bg-light" style={{width: "350px"}}>
    <ul class="nav nav-pills flex-column mb-auto" style={{rowGap:"3px"}}>
      {sidebarData.map((sideItem,index)=>(
        <div key={index} >
         <li class="nav-item">
        <a href="#" className={`nav-link fw-bold fs-5 py-3 ${index===classActive.current?"active":""}` }  aria-current="page" id={index} onClick={(e)=>{handleDropDown(e,dropdown)}}>
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