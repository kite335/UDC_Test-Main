import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate,useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FAQ from '../components/FAQ'
import "./AboutUs.css"

const AboutUs = () => {
  const navigate = useNavigate();
  const location=useLocation();

useEffect(() => {
    if(location.hash){
      const element=document.querySelector(location.hash);
      element?.scrollIntoView({behavior:"smooth"})
    }
  }, [location]);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    // Inject Bitrix24 form script directly into the form container
    const script = document.createElement("script");
    script.src = "https://cdn.bitrix24.com/b21918073/crm/form/loader_1.js";
    script.async = true;
    script.setAttribute("data-b24-form", "inline/1/ytigoz");
    script.setAttribute("data-skip-moving", "true");

    const container = document.getElementById("b24form-container");
    if (container) {
      container.innerHTML = ""; // Clear any previous script/form
      container.appendChild(script);
    }
  }, []);

  const brandLogos = [
    'Siemens-expert-partner-logo.png',
    'microsoft.webp',
    'aws-select-consulting-parnter.webp',
    'chatapp.png',
    'Bitrix241.png',
    'zoho.png'
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ]
  };

  const aboutFAQ= [
       {
query:"What services does your company provide?",
answer:"We provide CRM implementation, marketing automation, lead management, task & project workflow setup, communication integrations (WhatsApp, email), and custom business process automation."
},

{
query:"Which industries have you worked with so far?",
answer:"We have completed successful implementations in marketing, real estate, manufacturing, hospitality, education, and immigration sectors."
},

{
query:"Do you offer industry-specific customized workflows?",
answer:"Yes, we design and implement tailored CRM structures, pipelines, and automations based on the unique business flow of each sector."
},

{
query:"Do you integrate WhatsApp and email into CRM systems?",
answer:"Yes, we enable seamless WhatsApp and email integrations for lead communication, notifications, automation, and customer engagement inside the CRM."
},

{
query:"Can you automate lead assignment to staff?",
answer:"Yes, we implement automated lead distribution including round-robin routing, ensuring fair and efficient assignment across teams."
},

{
query:"Do you provide support after implementation?",
answer:"Yes, we provide training, deployment support, monitoring, troubleshooting, and workflow optimization after delivery."
},

{
query:"Is your solution scalable for large businesses?",
answer:"Yes, our implementations are built to scale for businesses of any size, handling high volumes of leads, customers, and automated processes."
},

{
query:"Why should a company choose your implementation services?",
answer:"Because we deliver fast deployment, industry-focused CRM design, deep automation, smooth integrations, reduced manual workload, and long-term system support."
}
    ];

  return (
    <>
      {/* Header Banner */}
      <div>
        <img src={`${import.meta.env.BASE_URL}assets/img/header-banner.jpg`} alt="Header Banner" style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* About Section */}
      <div className="mt-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} data-aos="fade-right" className="mb-5">
              <h3 className="mb-3">About Unique Design Consultant</h3>
              <p><strong>Unique Design Consultant</strong> is one of the leading consulting companies in India, renowned for its products, services, and after-sales support.</p>
              <p>UDC is engaged in bringing new ways of simplifying corporate life. Our team provides consultation to companies with good conduct, right business techniques, and sensible rates. We help reduce running costs by implementing the latest technology.</p>
              <p>Our founder <strong>Mr. Deepak Kumar</strong> started Unique Design Consultant in 2021 and is now an expert in this sector.</p>
            </Col>
            
            <Col lg={4} data-aos="fade-left" className="mt-4 mt-lg-0 text-center goldBorder">
              <Image src={`${import.meta.env.BASE_URL}assets/img/Gold.jpg`} alt="About UDC" fluid rounded />
            </Col>
           <section id="contact">
             <Col md={7} className='mt-5 w-100'>
                          <h2 className="form-headline">Send us a message</h2>
                          <div id="b24form-container" />
                        </Col>
                        </section>
                       
          </Row>
        </Container>
      </div>

      {/* Brand Logos Carousel */}
      <div className="bg-light py-5 mt-5">
        <Container>
          <Slider {...sliderSettings}>
            {brandLogos.map((logo, idx) => (
  <img
    key={idx}
    src={`${import.meta.env.BASE_URL}assets/img/brands/${logo}`}
    alt={`Brand ${idx + 1}`}
    className="img-fluid"
     style={{ maxHeight: '80px', margin: '0 auto', objectFit: 'contain' }}
  />
))}

          </Slider>
        </Container>
      </div>

      {/* Stats Section */}
      <div className="py-5 bg-light">
        <Container>
          <Row className="text-center g-4">
            <Col md={4} data-aos="zoom-in">
              <div style={{ backgroundColor: '#eaf6ff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <img src={`${import.meta.env.BASE_URL}assets/icons/award.svg`} alt="Awards" style={{ height: 50, marginBottom: 10 }} />
                <h3 className="fw-bold text-primary">2+</h3>
                <p className="mb-0">Awards & Recognitions</p>
              </div>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-delay="100">
              <div style={{ backgroundColor: '#fff5e6', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <img src={`${import.meta.env.BASE_URL}assets/icons/location.svg`} alt="Locations" style={{ height: 50, marginBottom: 10 }} />
                <h3 className="fw-bold text-warning">2+</h3>
                <p className="mb-0">Locations</p>
              </div>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-delay="200">
              <div style={{ backgroundColor: '#e6fff2', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <img src={`${import.meta.env.BASE_URL}assets/icons/users.svg`} alt="Customers" style={{ height: 50, marginBottom: 10 }} />
                <h3 className="fw-bold text-success">500+</h3>
                <p className="mb-0">Customers</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: '#222' }} className="py-5 text-white text-center">
        <Container>
          <h2 className="mb-3" data-aos="fade-up">Let’s Work Together</h2>
          <p className="lead" data-aos="fade-up">
            Partner with Unique Design Consultant to transform your business with smart CRM and automation.
          </p>
          
        </Container>
      </div>
      <FAQ faq={aboutFAQ}/>
    </>
  );
};

export default AboutUs;
