import "./ProductLink.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CommonDataContext } from "../store/CommonData";

const structure = [
  {
    h: "CRM",
    p: "Manage sales and clients effortlessly with the world's biggest CRM by sheer number of users.",
    repeat: [
      {
        navigateTo: "/sales-management",
        h2: "Sales Management",
        p: "Leads,deals,contacts,piplines and more",
      },
      {
        navigateTo: "/contact-center",
        h2:"Contact center",
        p: "Web forms, widgets, live chat, integrations with WhatsApp, Instagram, etc.",
      },
      {
        navigateTo: "/sales-collaboration",
        h2: "Sales team collaboration",
        p: "Chat, online meetings, tasks, calendar, file storage, online documents, and more",
      },
      {
        navigateTo: "/sales-enablement",
        h2: "Sales enablement",
        p: "Invoices, payments, product catalog, inventory management, e-signature, and more",
      },
      {
        navigateTo: "/analytics-reports",
        h2: "Analytics & reports	",
        p: "A full set of tools to help you make informed decisions in every department: sales, marketing, etc.",
      },
      {
        navigateTo: "/mobile-crm",
        h2: "Mobile CRM	",
        p: "Manage your sales and clients on the go	",
      },
      {
        navigateTo: "/marketing",
        h2: "Marketing",
        p: "Email marketing, social media ads, SMS, telephony, website builder, and more",
      },
      {
        navigateTo: "/automation-integrations",
        h2: "Automation & integrations",
        p: "Automation rules and triggers, automated funnels, third-party integrations, and more",
      },
      {
        navigateTo: "/copilot",
        h2: "CoPilot in CRM	",
        p:"AI-generated ideas and texts, phone call transcription, autocompleted fields in deals, and more"
      },
    ],
    Image:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/bxw_blocks/bxw_block_try_picture/m-right-1.png.webp?1764863685915",
    sh:"Ready to manage your sales and clients with Bitrix24?",
  },

  {
    h: "Tasks & Projects",
    p: "Get work done easier and faster with a full set of task and project management tools.",
    repeat: [
      {
        navigateTo: "/task-management",
        h2: "Task management",
        p: "Kanban board, Gantt chart, full set of Scrum tools, and more",
      },
      {
        navigateTo: "/task-tracking",
        h2: "Task tracking",
        p: "Checklists, subtasks, task time tracking, supervisor mode, and more",
      },
      {
        navigateTo: "/api-integrations",
        h2: "API & integrations",
        p: "Advanced task automation via REST API and webhooks",
      },
      {
        navigateTo:"",
        h2:"",
        p:""
      },
      {
        navigateTo:"",
        h2:"",
        p:""
      },
      {
        navigateTo:"",
        h2:"",
        p:""
      },
      {
        navigateTo:"",
        h2:"",
        p:""
      },
      {
        navigateTo:"",
        h2:"",
        p:""
      },
    ],
    Image:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/bxw_blocks/bxw_block_try_picture/m-right-1.png.webp?1764863685915",
    sh:"Ready to manage your sales and clients with Bitrix24?",
    
  },
];

const ProductLink = () => {
    const {handleDropdownStatus,setItemId}=useContext(CommonDataContext)
    const handleProductLink=(e,navPath,sideIndex,pageIndex)=>{
        setItemId(sideIndex);
        handleDropdownStatus(e,navPath,pageIndex);    
    }

  return (
    <>
    <section>
   <div className='outerContainer '>
    <div className='container'>
      <div className='row '>
        <div className='col-6 mt-5'>
          <div className='row g-4 ' >
            <div className='col-12 '>
              <h1 className='mb-5'>The only business software you will ever need</h1>
              <p className='topParagraph'>Replace a multitude of services and apps with a single, AI-powered solution.</p>
              <Link to='/about' className='freeBtn'>Start for free</Link>
            </div>
            
          </div>
        </div>
        <div className='col-6 mt-5'>
          <div className='row'>
            <div className='col-12 '>
              <img src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/index/img-tools-main.png.webp?1764863685915' className="topImg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
    </section>

      <section>
        {structure.map((start, sideIndex) => (
          <div className="custom-container">
          <div className="container  custom-container">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-center mt-5 mb-2">{start.h}</h2>
              <p className="text-center text-muted mb-4">{start.p}</p>
            </div>
             <div className="row gy-4 ">
                {start.repeat.map((innerStart,pageIndex)=>(
                    
                     <div className="col-12 col-md-4   cardItem">
                     <div className="cardInner">
                     <Link to={innerStart.navigateTo} onClick={(e)=>{handleProductLink(e,innerStart.navigateTo,sideIndex,pageIndex)}}>
                     <h3 className="px-5 pt-4 repeatH3 ">{innerStart.h2}</h3>
                    <p className="px-5 repeatP">{innerStart.p}</p>
                    {/* <span className="navigationArrow">&rarr;</span> */}
                  </Link>
                </div>
              </div>
            
                ))}
                <div className="outerMarginBox">
                  <div className="innerMarginBox col-10 mx-auto">
                   <div> 
                  <h1>{start.sh}</h1>
                  <Link to='/about' className='freeBtn'>Start for free</Link>
                  </div>
                  <img src={start.Image}/>
                  
                  </div>
                  
                </div>
                
           </div>
          </div>
          </div>
        ))}
      </section>
    </>
  )
};

export default ProductLink;
