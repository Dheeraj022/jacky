"use client";

import React, { useState } from 'react';
import Footer from '../components/Footer';
import HiddenElements from '../components/HiddenElements';

export default function Page() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", message: "" });
  const [focused, setFocused] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", company: "", email: "", message: "" });
    }, 3000);
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "16px 18px",
    background: focused[field] ? "rgba(255,152,0,0.04)" : "#f8f8f8",
    border: focused[field] ? "1.5px solid #ff9800" : "1.5px solid rgba(0,0,0,0.1)",
    borderRadius: "12px",
    fontSize: "14px",
    color: "rgba(0,0,0,0.85)",
    outline: "none",
    transition: "all 0.25s ease",
    boxShadow: focused[field] ? "0 0 0 4px rgba(255,152,0,0.08)" : "none"
  });

  return (
    <>
      {/* Banner */}
      <div className="mil-inner-banner mil-p-0-120">
        <div className="mil-banner-content mil-center mil-up">
          <div className="container">
            <ul className="mil-breadcrumbs mil-center mil-mb-60">
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <h1 className="mil-mb-60">Let's Connect &amp; Collaborate!</h1>
            <a href="#contact" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Contact details</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section id="contact" style={{ background: "#f5f5f5", padding: "80px 0 100px" }}>
        <div className="container">
          <div className="row" style={{ rowGap: "40px", alignItems: "stretch" }}>

            {/* LEFT — Dark Info Panel */}
            <div className="col-lg-5">
              <div className="mil-up" style={{
                background: "#0f0f0f",
                borderRadius: "24px",
                padding: "52px 44px",
                height: "100%",
                position: "relative",
                overflow: "hidden"
              }}>
                {/* Decorative glow */}
                <div style={{
                  position: "absolute", bottom: "-80px", right: "-80px",
                  width: "300px", height: "300px",
                  background: "radial-gradient(circle, rgba(255,152,0,0.12) 0%, transparent 70%)",
                  pointerEvents: "none"
                }}></div>

                {/* Label */}
                <p style={{ color: "#ff9800", fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>
                  Get In Touch
                </p>

                <h2 style={{ color: "#ffffff", fontWeight: 700, fontSize: "32px", lineHeight: "1.2", marginBottom: "14px" }}>
                  Let's build something <span style={{ color: "#ff9800" }}>great</span> together
                </h2>

                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: "1.8", marginBottom: "44px" }}>
                  Whether you're hiring for a Business Analyst role, Data Analyst position, or looking for collaboration opportunities — I'd love to connect.
                </p>

                {/* Contact Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    { icon: "far fa-envelope", label: "Email", value: "jacky.kumar@example.com", href: "mailto:jacky.kumar@example.com", color: "#ff9800" },
                    { icon: "fab fa-linkedin-in", label: "LinkedIn", value: "linkedin.com/in/jackykumar", href: "https://linkedin.com", color: "#0077b5" },
                    { icon: "fab fa-github", label: "GitHub", value: "github.com/jackykumar", href: "https://github.com", color: "#ffffff" },
                    { icon: "fas fa-phone-alt", label: "Phone", value: "+353 87 123 4567", href: "tel:+353871234567", color: "#4caf50" },
                    { icon: "fas fa-map-marker-alt", label: "Location", value: "Dublin, Ireland", href: null, color: "#e91e63" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{
                        width: "46px", height: "46px", borderRadius: "12px", flexShrink: 0,
                        background: `${item.color}18`,
                        border: `1px solid ${item.color}30`,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        <i className={item.icon} style={{ color: item.color, fontSize: "16px" }}></i>
                      </div>
                      <div>
                        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 2px" }}>{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                            style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.75)", textDecoration: "none", transition: "color 0.2s" }}
                            onMouseEnter={e => e.target.style.color = "#ff9800"}
                            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}
                          >{item.value}</a>
                        ) : (
                          <span style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.75)" }}>{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Availability badge */}
                <div style={{
                  marginTop: "44px",
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "rgba(76,175,80,0.1)", border: "1px solid rgba(76,175,80,0.25)",
                  borderRadius: "50px", padding: "10px 18px"
                }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4caf50", display: "inline-block", boxShadow: "0 0 0 3px rgba(76,175,80,0.3)" }}></span>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>Available for new opportunities</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Form Panel */}
            <div className="col-lg-7">
              <div className="mil-up" style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "52px 48px",
                height: "100%",
                boxShadow: "0 8px 40px rgba(0,0,0,0.08)"
              }}>
                <p style={{ color: "#ff9800", fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                  Send a Message
                </p>
                <h3 style={{ fontWeight: 700, fontSize: "28px", color: "rgba(0,0,0,0.88)", marginBottom: "8px" }}>
                  Drop me a line
                </h3>
                <p style={{ color: "rgba(0,0,0,0.45)", fontSize: "14px", lineHeight: "1.7", marginBottom: "40px" }}>
                  Fill in the form below and I'll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div style={{
                    textAlign: "center", padding: "60px 20px",
                    background: "rgba(76,175,80,0.05)", borderRadius: "16px",
                    border: "1px solid rgba(76,175,80,0.2)"
                  }}>
                    <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(76,175,80,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                      <i className="fas fa-check" style={{ color: "#4caf50", fontSize: "26px" }}></i>
                    </div>
                    <h4 style={{ color: "rgba(0,0,0,0.85)", marginBottom: "10px" }}>Message Sent!</h4>
                    <p style={{ color: "rgba(0,0,0,0.5)", fontSize: "14px" }}>Thank you! Jacky will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Row 1 */}
                    <div className="row" style={{ marginBottom: "20px" }}>
                      <div className="col-md-6" style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "rgba(0,0,0,0.55)", letterSpacing: "0.5px", marginBottom: "8px" }}>YOUR NAME *</label>
                        <input
                          type="text" placeholder="e.g. John Smith" required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setFocused({ ...focused, name: true })}
                          onBlur={() => setFocused({ ...focused, name: false })}
                          style={inputStyle("name")}
                        />
                      </div>
                      <div className="col-md-6" style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "rgba(0,0,0,0.55)", letterSpacing: "0.5px", marginBottom: "8px" }}>COMPANY NAME</label>
                        <input
                          type="text" placeholder="Your Company (optional)"
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          onFocus={() => setFocused({ ...focused, company: true })}
                          onBlur={() => setFocused({ ...focused, company: false })}
                          style={inputStyle("company")}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "rgba(0,0,0,0.55)", letterSpacing: "0.5px", marginBottom: "8px" }}>EMAIL ADDRESS *</label>
                      <input
                        type="email" placeholder="you@example.com" required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocused({ ...focused, email: true })}
                        onBlur={() => setFocused({ ...focused, email: false })}
                        style={inputStyle("email")}
                      />
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: "32px" }}>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "rgba(0,0,0,0.55)", letterSpacing: "0.5px", marginBottom: "8px" }}>YOUR MESSAGE *</label>
                      <textarea
                        placeholder="Tell me about your project or opportunity..." required
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocused({ ...focused, message: true })}
                        onBlur={() => setFocused({ ...focused, message: false })}
                        style={{ ...inputStyle("message"), height: "140px", resize: "none" }}
                      ></textarea>
                    </div>

                    {/* Footer row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                      <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.4)", margin: 0 }}>
                        <i className="fas fa-lock" style={{ marginRight: "6px", color: "#ff9800" }}></i>
                        Your information is kept strictly confidential.
                      </p>
                      <button type="submit" style={{
                        display: "inline-flex", alignItems: "center", gap: "12px",
                        background: "linear-gradient(135deg, #ff9800, #f57c00)",
                        color: "#000", fontWeight: 700, fontSize: "13px", letterSpacing: "1.5px",
                        textTransform: "uppercase", border: "none", borderRadius: "50px",
                        padding: "16px 32px", cursor: "pointer",
                        boxShadow: "0 8px 24px rgba(255,152,0,0.35)",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease"
                      }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(255,152,0,0.45)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,152,0,0.35)"; }}
                      >
                        Send Message
                        <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <i className="fas fa-arrow-right" style={{ color: "#ff9800", fontSize: "12px" }}></i>
                        </span>
                      </button>
                    </div>
                  </form>
                )}
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
