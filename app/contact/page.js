"use client";

import React, { useState } from 'react';
import Footer from '../components/Footer';
import HiddenElements from '../components/HiddenElements';

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! Jacky will get back to you shortly.");
    setFormData({ name: "", company: "", email: "", message: "" });
  };

  return (
    <>
      {/* Banner */}
      <div className="mil-inner-banner mil-p-0-120">
        <div className="mil-banner-content mil-center mil-up">
          <div className="container">
            <ul className="mil-breadcrumbs mil-center mil-mb-60">
              <li><a href="/">Homepage</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <h1 className="mil-mb-60">Let's Connect &amp; Collaborate!</h1>
            <a href="#contact" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Contact details</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Connect Section */}
      <section id="contact" className="mil-p-120-90">
        <div className="container">
          <div className="row justify-content-between">
            {/* Form Column */}
            <div className="col-lg-6 mil-mb-60">
              <h3 className="mil-up mil-mb-30">Send A Message</h3>
              <p className="mil-light-soft mil-up mil-mb-60">
                Whether you're hiring for a Business Analyst role, Data Analyst position, or looking for collaboration opportunities, I'd love to connect.
              </p>
              
              <form onSubmit={handleSubmit} className="row align-items-center">
                <div className="col-lg-6 mil-up mil-mb-30">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ width: "100%", padding: "15px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#fff" }}
                  />
                </div>
                <div className="col-lg-6 mil-up mil-mb-30">
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    style={{ width: "100%", padding: "15px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#fff" }}
                  />
                </div>
                <div className="col-lg-12 mil-up mil-mb-30">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ width: "100%", padding: "15px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#fff" }}
                  />
                </div>
                <div className="col-lg-12 mil-up mil-mb-30">
                  <textarea
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ width: "100%", height: "150px", padding: "15px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#fff", resize: "none" }}
                  ></textarea>
                </div>
                <div className="col-lg-8 mil-mb-30">
                  <p className="mil-up mil-text-sm" style={{ margin: 0 }}><span className="mil-accent">*</span> Your personal information is kept strictly confidential.</p>
                </div>
                <div className="col-lg-4 mil-mb-30">
                  <div className="mil-adaptive-right mil-up">
                    <button type="submit" className="mil-button mil-arrow-place">
                      <span>Submit Form</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Quick Contact & QRs Column */}
            <div className="col-lg-5 mil-mb-60">
              <h3 className="mil-up mil-mb-30">Quick Contact</h3>
              
              <div className="mil-mb-60">
                <div className="mil-up mil-mb-20" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,152,0,0.1)", display: "flex", alignItems: "center", justifyCenter: "center", flexShrink: 0, justifyContent: "center" }}>
                    <i className="far fa-envelope" style={{ color: "var(--accent, #ff9800)" }}></i>
                  </div>
                  <div>
                    <h6 className="mil-muted mil-mb-0">Email Address</h6>
                    <a href="mailto:jacky.kumar@example.com" className="mil-link mil-light-soft mil-text-sm">jacky.kumar@example.com</a>
                  </div>
                </div>

                <div className="mil-up mil-mb-20" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,152,0,0.1)", display: "flex", alignItems: "center", justifyCenter: "center", flexShrink: 0, justifyContent: "center" }}>
                    <i className="fab fa-linkedin-in" style={{ color: "var(--accent, #ff9800)" }}></i>
                  </div>
                  <div>
                    <h6 className="mil-muted mil-mb-0">LinkedIn Profile</h6>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mil-link mil-light-soft mil-text-sm">linkedin.com/in/jackykumar</a>
                  </div>
                </div>

                <div className="mil-up mil-mb-20" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,152,0,0.1)", display: "flex", alignItems: "center", justifyCenter: "center", flexShrink: 0, justifyContent: "center" }}>
                    <i className="fab fa-github" style={{ color: "var(--accent, #ff9800)" }}></i>
                  </div>
                  <div>
                    <h6 className="mil-muted mil-mb-0">GitHub Profile</h6>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mil-link mil-light-soft mil-text-sm">github.com/jackykumar</a>
                  </div>
                </div>

                <div className="mil-up mil-mb-20" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,152,0,0.1)", display: "flex", alignItems: "center", justifyCenter: "center", flexShrink: 0, justifyContent: "center" }}>
                    <i className="fas fa-phone-alt" style={{ color: "var(--accent, #ff9800)" }}></i>
                  </div>
                  <div>
                    <h6 className="mil-muted mil-mb-0">Phone Number</h6>
                    <span className="mil-link mil-light-soft mil-text-sm">+353 87 123 4567</span>
                  </div>
                </div>

                <div className="mil-up mil-mb-20" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,152,0,0.1)", display: "flex", alignItems: "center", justifyCenter: "center", flexShrink: 0, justifyContent: "center" }}>
                    <i className="fas fa-map-marker-alt" style={{ color: "var(--accent, #ff9800)" }}></i>
                  </div>
                  <div>
                    <h6 className="mil-muted mil-mb-0">Location</h6>
                    <span className="mil-link mil-light-soft mil-text-sm">Dublin, Ireland</span>
                  </div>
                </div>
              </div>

              {/* QR Codes Grid */}
              <h4 className="mil-up mil-mb-30">Quick Connections (QR Codes)</h4>
              <div className="row">
                <div className="col-4 text-center mil-up">
                  <div style={{ background: "#fff", padding: "8px", borderRadius: "8px", display: "inline-block", marginBottom: "10px" }}>
                    {/* Simulated SVG QR Code */}
                    <svg width="60" height="60" viewBox="0 0 29 29">
                      <path d="M0 0h7v7H0zm1 1v5h5V1zm1 1h3v3H2zm17-2h7v7h-7zm1 1v5h5V1zm1 1h3v3h-3zM0 19h7v7H0zm1 1v5h5v-5zm1 1h3v3H2zm19-2h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2zm-2-2h4v2h-4zm7-7v2h-2v-2zm-2-4v2h-2V5zm0 14h2v2h-2zm2 2v2h-2v-2zm-7 2h2v2h-2zm-2-12h2v2h-2zm5-3h2v2h-2z" fill="#000"/>
                    </svg>
                  </div>
                  <h6 className="mil-muted mil-text-xs" style={{ fontSize: "10px" }}>LinkedIn QR</h6>
                </div>

                <div className="col-4 text-center mil-up">
                  <div style={{ background: "#fff", padding: "8px", borderRadius: "8px", display: "inline-block", marginBottom: "10px" }}>
                    <svg width="60" height="60" viewBox="0 0 29 29">
                      <path d="M0 0h7v7H0zm1 1v5h5V1zm1 1h3v3H2zm17-2h7v7h-7zm1 1v5h5V1zm1 1h3v3h-3zM0 19h7v7H0zm1 1v5h5v-5zm1 1h3v3H2zm12-9h2v2h-2zm2 2h2v2h-2zm-4 2h2v2h-2zm5-5h2v2h-2zm-2-2h2v2h-2zm5 7h2v2h-2zm-2 2h2v2h-2zm-2-6h2v2h-2zm-3-1h2v2h-2zm7 7h2v2h-2z" fill="#000"/>
                    </svg>
                  </div>
                  <h6 className="mil-muted mil-text-xs" style={{ fontSize: "10px" }}>GitHub QR</h6>
                </div>

                <div className="col-4 text-center mil-up">
                  <div style={{ background: "#fff", padding: "8px", borderRadius: "8px", display: "inline-block", marginBottom: "10px" }}>
                    <svg width="60" height="60" viewBox="0 0 29 29">
                      <path d="M0 0h7v7H0zm1 1v5h5V1zm1 1h3v3H2zm17-2h7v7h-7zm1 1v5h5V1zm1 1h3v3h-3zM0 19h7v7H0zm1 1v5h5v-5zm1 1h3v3H2zm10-5h2v2h-2zm3 3h2v2h-2zm-2 2h2v2h-2zm-2 2h2v2h-2zm7-7h2v2h-2zm-2 2h2v2h-2zm-3-4h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2z" fill="#000"/>
                    </svg>
                  </div>
                  <h6 className="mil-muted mil-text-xs" style={{ fontSize: "10px" }}>Resume QR</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <HiddenElements />
    </>
  );
}
