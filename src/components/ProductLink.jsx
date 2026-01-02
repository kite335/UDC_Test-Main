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
        navigateTo: "/sales-management",
        h2:"Contact center",
        p: "Web forms, widgets, live chat, integrations with WhatsApp, Instagram, etc.",
      },
      {
        navigateTo: "/sales-management",
        h2: "Sales team collaboration",
        p: "Chat, online meetings, tasks, calendar, file storage, online documents, and more",
      },
      {
        navigateTo: "/sales-management",
        h2: "Sales enablement",
        p: "Invoices, payments, product catalog, inventory management, e-signature, and more",
      },
      {
        navigateTo: "/sales-management",
        h2: "Analytics & reports	",
        p: "A full set of tools to help you make informed decisions in every department: sales, marketing, etc.",
      },
      {
        navigateTo: "/sales-management",
        h2: "Mobile CRM	",
        p: "Manage your sales and clients on the go	",
      },
      {
        navigateTo: "/sales-management",
        h2: "Marketing",
        p: "Email marketing, social media ads, SMS, telephony, website builder, and more",
      },
      {
        navigateTo: "/sales-management",
        h2: "Automation & integrations",
        p: "Automation rules and triggers, automated funnels, third-party integrations, and more",
      },
      {
        navigateTo: "/sales-management",
        h2: "CoPilot in CRM	",
        p:"AI-generated ideas and texts, phone call transcription, autocompleted fields in deals, and more"
      },
    ],
  },

  {
    h: "Tasks & Projects",
    p: "Get work done easier and faster with a full set of task and project management tools.",
    repeat: [
      {
        navigateTo: "/sales-management",
        h2: "Sales Management",
        p: "Leads,deals,contacts,piplines and more",
      },
      {
        navigateTo: "/sales-management",
        h2: "Sales Management",
        p: "Leads,deals,contacts,piplines and more",
      },
    ],
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
        {structure.map((start, sideIndex) => (
          <div className="container">
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
           </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductLink;
