import "./App.css";

import { useState, useRef, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BitrixShowcase from "./components/BitrixShowcase";
import FeatureSlider from "./components/FeatureSlider";
import Technology from "./components/Technology";
import Pricing from "./components/Pricing";
import Bitrix24CRM from "./pages/Bitrix24CRM";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonial from "./components/Testimonial";
import Services from "./pages/Services";
import BlogPage from "./pages/BlogPage";
import AboutUs from "./pages/AboutUs";
import IndustryVertical from "./components/IndustryVertical";
import Contact from "./pages/ContactUs";
import DepartmentSection from "./components/DepartmentSection";
import BitrixPopupForm from "./components/BitrixPopupForm";
import LeadManagementPage from "./pages/LeadManagementPage"; // This looks correct
import PipelineManagementPage from "./pages/PipelineManagementPage";
import ProjectManagementPage from "./pages/ProjectManagementPage";
import SalesAutomationPage from "./pages/SalesAutomationPage";
import CommunicationsPage from "./pages/CommunicationsPage";
import CoPilotAIPage from "./pages/CoPilotAIPage";
import ScrollToTop from "./ScrollToTop";
import FeaturesSection from "./components/FeaturesSection";
import Bitrix24IndustrySolutions from "./pages/Bitrix24IndustrySolutions";
import TaskProjects from "./pages/TaskProJects";
import CRM from "./pages/CRM";
import HrAutomation from "./pages/HrAutomation";
import SiteStore from "./pages/SiteStore";
import Social from "./pages/Social";
import Document from "./pages/Document";
import Drive from "./pages/Drive";
import Mail from "./pages/Mail";
import Mobile from "./pages/Mobile";
import Telephony from "./pages/Telephony";
import Cleint from "./pages/Cleint";
import Calender from "./pages/Calender";
import Landing from "./pages/Landing";
import FAQ from "./components/FAQ";
import ZohoPage from "./pages/Zoho";
import MultiOptional from "./components/MultiOptional";
import DataContextProvider from './store/CommonData'
import { CommonDataContext } from "./store/CommonData";
import Sidebar from "./components/Sidebar";
import DropdownPanel from "./components/DropdownPanel";

import { Button } from "react-bootstrap";
import ProductPage from "./components/ProductPage";

// 1. 🚀 IMPORT YOUR NEW PAGE HERE
// Make sure this path is correct!

const str1=<li>"Small & medium businesses"</li>
	const str2=	<li>Sales & service teams"</li>
	const str3=	<li>Real estate, clinics, IT & consulting firms"</li>
	const str4=	<li>"Companies looking for CRM + project management"</li>

const homeFAQ = [
  {
    query: "What is Bitrix24 CRM?",
    answer: ` 
Bitrix24 CRM is an all-in-one customer relationship management platform that helps businesses manage leads, customers, deals, communication, tasks, and automation in one place.
At Unique Design Consultant, we implement Bitrix24 to improve sales performance and operational efficiency.`
  },
  {
    query: "Who should use Bitrix24 CRM?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Bitrix24 CRM is suitable for:</div><br/>
       <li style={{marginLeft:"20px"}}>Small & medium businesses</li>
       <li style={{marginLeft:"20px"}}>Sales & service teams</li>
       <li style={{marginLeft:"20px"}}>Real estate, clinics, IT & consulting firms</li>
       <li style={{marginLeft:"20px"}}>Companies looking for CRM + project management</li>
       <div style={{fontWeight:"bold",marginTop:"10px"}}>Unique Design Consultant customizes Bitrix24 based on your industry and workflow.</div>
       </>
    )
    
    
  },
  {
    query: "Is Bitrix24 cloud-based or on-premise?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Bitrix24 is available in two options:</div><br/>
       <li style={{marginLeft:"20px"}}>Cloud Version – Fast deployment with no server management</li>
       <li style={{marginLeft:"20px"}}>On-Premise Version – Installed on your own server for complete control
</li>
       <div style={{fontWeight:"bold",marginTop:"10px"}}>We at Unique Design Consultant help you choose the right model.</div>
       </>
    )
      
    
  },

  {
    query: "Who should use Bitrix24 CRM?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>What key features does Bitrix24 CRM offer?</div><br/>
       <li style={{marginLeft:"20px"}}>Lead & deal management</li>
       <li style={{marginLeft:"20px"}}>Sales pipeline automation</li>
       <li style={{marginLeft:"20px"}}>Task & project management</li>
       <li style={{marginLeft:"20px"}}>Email, WhatsApp & call tracking</li>
       <li style={{marginLeft:"20px"}}>Calendar & appointment booking</li>
       <li style={{marginLeft:"20px"}}>Reports & analytics</li>

       <div style={{fontWeight:"bold",marginTop:"10px"}}>All features are configured by Unique Design Consultant as per your business needs.</div>
       </>
    )     
  },

  {
    query: "Can Bitrix24 be customized for my business?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Yes. Bitrix24 is highly customizable.
Unique Design Consultant customizes:</div><br/>
       <li style={{marginLeft:"20px"}}>CRM pipelines & stages</li>
       <li style={{marginLeft:"20px"}}>Custom fields & forms</li>
       <li style={{marginLeft:"20px"}}>Automation rules</li>
       <li style={{marginLeft:"20px"}}>User roles & permissions</li>
       <li style={{marginLeft:"20px"}}>Dashboards & workflows</li>
       <div style={{fontWeight:"bold",marginTop:"10px"}}>Your CRM will follow your exact process.</div>
       </>
    )     
  },

  {
    query: "Does Bitrix24 support automation?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Yes. Bitrix24 supports powerful automation such as:</div><br/>
       <li style={{marginLeft:"20px"}}>Auto lead assignment</li>
       <li style={{marginLeft:"20px"}}>Follow-up reminders</li>
       <li style={{marginLeft:"20px"}}>Deal stage actions</li>
       <li style={{marginLeft:"20px"}}>Task auto-creation</li>
       <li style={{marginLeft:"20px"}}>Approval workflows</li>
       <div style={{fontWeight:"bold",marginTop:"10px"}}>We design smart automation to reduce manual work.</div>
       </>
    )     
  },

  {
    query: "Can Bitrix24 integrate with other software?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Email & WhatsApp</div><br/>
       <li style={{marginLeft:"20px"}}>Telephony systems</li>
       <li style={{marginLeft:"20px"}}>Payment gateways</li>
       <li style={{marginLeft:"20px"}}>Accounting software</li>
       <li style={{marginLeft:"20px"}}>Third-party tools via API</li>
       
       <div style={{fontWeight:"bold",marginTop:"10px"}}>
Unique Design Consultant also develops custom integrations when required.</div>
       </>
    )     
  },

  {
    query: "Is Bitrix24 mobile-friendly?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Yes. Bitrix24 offers Android & iOS mobile apps allowing users to:</div><br/>
       <li style={{marginLeft:"20px"}}>Manage leads & deals</li>
       <li style={{marginLeft:"20px"}}>Update tasks</li>
       <li style={{marginLeft:"20px"}}>Log calls & activities</li>
       <li style={{marginLeft:"20px"}}>Collaborate with teams</li>
      
       <div style={{fontWeight:"bold",marginTop:"10px"}}>Ideal for field sales and remote teams.</div>
       </>
    )     
  },


  {
    query: "Is data secure in Bitrix24 CRM?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Data encryption</div><br/>
       <li style={{marginLeft:"20px"}}>Role-based access</li>
       <li style={{marginLeft:"20px"}}>Secure cloud infrastructure</li>
       <li style={{marginLeft:"20px"}}>GDPR compliance (cloud version)</li>
       
       <div style={{fontWeight:"bold",marginTop:"10px"}}>We further configure security as per your organization’s policies.</div>
       </>
    )     
  },


  {
    query: "Does Unique Design Consultant provide Bitrix24 implementation?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>
Yes. Unique Design Consultant provides complete Bitrix24 services including:</div><br/>
       <li style={{marginLeft:"20px"}}>Requirement analysis</li>
       <li style={{marginLeft:"20px"}}>CRM setup & customization</li>
       <li style={{marginLeft:"20px"}}>Automation & integrations</li>
       <li style={{marginLeft:"20px"}}>User training</li>
       <li style={{marginLeft:"20px"}}>Go-live & post-implementation support</li>
       <div style={{fontWeight:"bold",marginTop:"10px"}}>We ensure smooth adoption across your team.</div>
       </>
    )     
  },


  {
    query: "How long does Bitrix24 implementation take?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Implementation timelines vary:</div><br/>
       <li style={{marginLeft:"20px"}}>Basic CRM setup: 3–5 days</li>
       <li style={{marginLeft:"20px"}}>Customized workflows: 1–3 weeks</li>
       <li style={{marginLeft:"20px"}}>Advanced automation & integrations: 3–4 weeks</li>
       
       <div style={{fontWeight:"bold",marginTop:"10px"}}>A clear project plan is shared before execution.</div>
       </>
    )     
  },

  {
    query: "Why choose Unique Design Consultant for Bitrix24?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Clients choose Unique Design Consultant because we offer:</div><br/>
       <li style={{marginLeft:"20px"}}>Business-focused CRM design</li>
       <li style={{marginLeft:"20px"}}>Industry-specific customization</li>
       <li style={{marginLeft:"20px"}}>Clean & scalable setup</li>
       <li style={{marginLeft:"20px"}}>Reliable ongoing support</li>
       <div style={{fontWeight:"bold",marginTop:"10px"}}>We don’t just implement CRM — we design solutions that work.</div>
       </>
    )     
  },
];

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const {megaDataStatus}=useContext(CommonDataContext);
  const popupFormRef = useRef();
  useEffect(() => {
    // Prevent browser restoring previous scroll and jump to anchors
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    } // Remove any hash (e.g. #contact) or trailing /contact on initial load

    const { hash, pathname, search } = window.location;
    const base = "/UDC_Test-Main";
    if (hash === "#contact" || pathname.endsWith("/contact")) {
      const newUrl = base + (search || "");
      window.history.replaceState(null, "", newUrl);
    } // Ensure page is at top on first render (fixes mobile jump-to-footer)

    window.scrollTo(0, 0);
  }, []);
  const [mountStatus, setMountStatus] = useState(false);
  
  
 
  
  return (
    <DataContextProvider>
    <BrowserRouter basename="/UDC_Test-Main">
           {" "}
      <div className="font-sans">
               {" "}
        <Navbar
          onAuthOpen={() => setShowAuth(true)}
          onOpenForm={() => popupFormRef.current.open("Navbar")}
          
          
        />
        <div className="importedProducts">
        <Sidebar/>
        <DropdownPanel/>
      </div>

        <ScrollToTop />
        <Routes>
          {/* Landing is now the default page on site open */}
          <Route
            path="/"
            element={
              <>
                <Landing />
                <FeatureSlider />
                <DepartmentSection
                  onPopupOpen={() => popupFormRef.current.open()}
                />
                <Testimonial />
                <Technology />
                <Pricing status={mountStatus} />
                <FAQ faq={homeFAQ} />
              </>
            }
          />
          
                    <Route path="/pricing" element={<Pricing />} />
                   {" "}
          <Route
            path="/services"
            element={
              <Services onPopupOpen={() => popupFormRef.current.open()} />
            }
          />
                     <Route path="/blog" element={<BlogPage />} />  
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/bitrix24-crm" element={<CRM />} />
          <Route path="/task-projects" element={<TaskProjects />} />
          <Route path="/sites" element={<SiteStore />} />
          <Route path="/social-intranet" element={<Social />} />
          <Route path="/hr" element={<HrAutomation />} />
          <Route path="/documents" element={<Document />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/calenders" element={<Calender />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/clients" element={<Cleint />} />
          <Route path="/telephony" element={<Telephony />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/zoho-page" element={<ZohoPage />} />
          
            <Route path="/:navigation" element={<>
            <MultiOptional/>
            <FAQ faq={homeFAQ} />
            </>}/>
         
            
          
          
         
          <Route path="/crm-sales" element={<LeadManagementPage />} />
          <Route
            path="/pipeline-management"
            element={<PipelineManagementPage />}
          />
          <Route
            path="/project-management"
            element={<ProjectManagementPage />}
          />
          <Route path="/sales-automation" element={<SalesAutomationPage />} />
          <Route path="/communications" element={<CommunicationsPage />} />
          <Route path="/copilot" element={<CoPilotAIPage />} /> 
        </Routes>
                      <BitrixPopupForm ref={popupFormRef} />
                <Footer />     {" "}
      </div>
         {" "}
    </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
