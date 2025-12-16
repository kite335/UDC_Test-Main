 // Zoho.jsx (FULL WORKING PAGE)

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "./Zoho.css";

const Zoho =()=>{
    return(
        <>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Zoho Authorized Partner</span>
          <h1>
            Run Your Entire Business with <span>Zoho</span>
          </h1>
          <p>
            Manage CRM, Finance, HR, Marketing & Analytics from one powerful
            platform.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Get Free Demo</button>
            <button className="btn-outline">Talk to Expert</button>
          </div>
        </div>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <h3><CountUp end={1000000} duration={3} />+</h3>
          <p>Users</p>
        </div>
        <div className="stat">
          <h3><CountUp end={45} duration={2} />+</h3>
          <p>Apps</p>
        </div>
        <div className="stat">
          <h3><CountUp end={150} duration={2} />+</h3>
          <p>Countries</p>
        </div>
        <div className="stat">
          <h3>99.9%</h3>
          <p>Uptime</p>
        </div>
      </section>

      {/* APPS */}
      <section className="apps">
        {["CRM", "Books", "People", "Desk", "Analytics"].map((a, i) => (
          <div className="app" key={i}>Zoho {a}</div>
        ))}
      </section>

      {/* CLIENTS */}
      <section className="clients">
        <div className="track">
          {["Client A", "Client B", "Client C", "Client D"].map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
      </section>

      {/* CTA FORM */}
      <section className="lead" id="lead">
        <h2>Request Free Consultation</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Requirement" />
          <button className="btn-primary">Submit</button>
        </form>
      </section>

      {/* WHATSAPP */}
      <a
        className="whatsapp"
        href="https://wa.me/919999999999"
        target="_blank"
      >
        💬
      </a>
    </motion.div>
  

        </>
    );
}

export default Zoho;