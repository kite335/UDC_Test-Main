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

const homeFAQ = [
  {
    query: "What is CRM",
    answer: "CRM is a Customer Relationship Management Software",
    unique_1: "headingOne",
    unique_2: "collapseOne",
  },
  {
    query: "Who uses CRM software?",
    answer:
      "CRM software is used by businesses of all sizes—from small startups to large enterprises—across industries like sales, marketing, real estate, finance, customer service, and more. Sales teams, marketers, support agents, and business owners rely on CRM systems to organize contacts, track interactions, automate workflows, and improve customer relationships.",
    unique_1: "headingTwo",
    unique_2: "collapseTwo",
  },
  {
    query: "What integrations are available with Bitrix24 CRM?",
    answer:
      "Bitrix24 integrates with popular email services (Gmail, Outlook), telephony providers, messengers (WhatsApp, Facebook Messenger), e-commerce platforms, and many third-party apps via REST API and Zapier. You can synchronize calendars, contacts, and automate data flows across tools.",
    unique_1: "headingThree",
    unique_2: "collapseThree",
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
          
            <Route path="/:navigation" element={<MultiOptional/>}/>
          
          
         
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
