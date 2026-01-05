import "./App.css";

import { useState, useRef, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import FeatureSlider from "./components/FeatureSlider";
import Technology from "./components/Technology";
import Pricing from "./components/Pricing";

import Testimonial from "./components/Testimonial";
import Services from "./pages/Services";
import BlogPage from "./pages/BlogPage";
import AboutUs from "./pages/AboutUs";


import DepartmentSection from "./components/DepartmentSection";
import BitrixPopupForm from "./components/BitrixPopupForm";
import LeadManagementPage from "./pages/LeadManagementPage"; // This looks correct
import PipelineManagementPage from "./pages/PipelineManagementPage";
import ProjectManagementPage from "./pages/ProjectManagementPage";
import SalesAutomationPage from "./pages/SalesAutomationPage";
import CommunicationsPage from "./pages/CommunicationsPage";

import ScrollToTop from "./ScrollToTop";

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
import DataContextProvider from "./store/CommonData";
import { CommonDataContext } from "./store/CommonData";
import Sidebar from "./components/Sidebar";
import DropdownPanel from "./components/DropdownPanel";
import TermsConditions from "./pages/TermsConditions";
import ProductPage from "./components/ProductPage";
import ProductLink from "./components/ProductLink";

// 1. 🚀 IMPORT YOUR NEW PAGE HERE
// Make sure this path is correct!

function App() {
  const [showAuth, setShowAuth] = useState(false);
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
    <BrowserRouter basename="/UDC_Test-Main">
      <DataContextProvider>
        <div className="font-sans">
                 {" "}
          <Navbar
            onAuthOpen={() => setShowAuth(true)}
            onOpenForm={() => popupFormRef.current.open("Navbar")}
          />
          <div className="importedProducts">
          
          
            <Sidebar />
            <DropdownPanel />
          
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
                  <CommonDataContext.Consumer>
                    {({ homeFaq }) => <FAQ faq={homeFaq} />}
                  </CommonDataContext.Consumer>
                </>
              }
            />
                      <Route path="/pricing" element={<Pricing />} />         {" "}
            <Route
              path="/services"
              element={
                <Services onPopupOpen={() => popupFormRef.current.open()} />
              }
            />
                      <Route path="/about" element={<AboutUs />} />
                     
            <Route path="/blog" element={<BlogPage />} />
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
            <Route path="/termsconditions" element={<TermsConditions />} />
            <Route
              path="/:navigation"
              element={
                <>
                  <MultiOptional />
                </>
              }
            />
            <Route path="/product-link" element={<ProductLink />} />
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
          </Routes>
                        <BitrixPopupForm ref={popupFormRef} />
                  <Footer />     {" "}
        </div>
           {" "}
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
