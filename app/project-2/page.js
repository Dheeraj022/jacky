"use client";

import React from 'react';
import Footer from '../components/Footer';
import HiddenElements from '../components/HiddenElements';

export default function Page() {
  return (
    <>
      {/* Inner Banner */}
      <div className="mil-inner-banner">
        <div className="mil-banner-content mil-up">
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"></div>
          </div>
          <div className="container">
            <ul className="mil-breadcrumbs mil-mb-60">
              <li><a href="/">Homepage</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/project-2">Healthcare Analytics</a></li>
            </ul>
            <h1 className="mil-mb-60">Healthcare <span className="mil-thin">Analytics Dashboard</span></h1>
            <a href="#project" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Read Case Study</span>
            </a>
          </div>
        </div>
      </div>

      {/* Case Study Details */}
      <section className="mil-p-120-0" id="project">
        <div className="container mil-p-0-120">
          <div className="mil-image-frame mil-horizontal mil-up" style={{ borderRadius: "12px", overflow: "hidden" }}>
            <img src="/img/works/2.jpg" alt="Healthcare Analytics" />
          </div>
          
          <div className="mil-info mil-up" style={{ display: "flex", flexWrap: "wrap", gap: "30px", marginTop: "30px" }}>
            <div>Role: &nbsp;<span className="mil-dark">Business Analyst</span></div>
            <div>Tools: &nbsp;<span className="mil-dark">SQL, Power BI, Excel</span></div>
            <div>Category: &nbsp;<span className="mil-dark">Process Optimization</span></div>
          </div>

          <div className="mil-p-120-0">
            <div className="row justify-content-between mil-mb-60">
              <div className="col-lg-5">
                <h3 className="mil-up mil-mb-30">Case Study Overview</h3>
                <p className="mil-up mil-light-soft">
                  Optimizing patient intake procedures and resource utilization across multiple clinical departments at a regional medical center.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-6 mil-mb-30">
                    <h5 className="mil-up mil-mb-15" style={{ color: "var(--accent, #ff9800)" }}>Problem Statement</h5>
                    <p className="mil-up mil-text-sm mil-light-soft">
                      Evaluate clinical queues to reduce patient waiting times, standardize triage, and streamline shift staffing.
                    </p>
                  </div>
                  <div className="col-md-6 mil-mb-30">
                    <h5 className="mil-up mil-mb-15" style={{ color: "var(--accent, #ff9800)" }}>Analytical Focus</h5>
                    <p className="mil-up mil-text-sm mil-light-soft">
                      Designing SQL queries to pull patient timestamps, clean admission logs, and identify bottlenecks in patient workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Structured details */}
            <div className="row justify-content-between mil-p-90-120 mil-soft-bg" style={{ borderRadius: "12px", padding: "40px" }}>
              <div className="col-lg-5 mil-mb-30 mil-mb-lg-0">
                <h3 className="mil-up mil-mb-30">The Analytical Approach</h3>
                <p className="mil-up mil-mb-20">
                  After facilitating workshops with clinical managers to map patient intake processes, I modeled data queries to trace elapsed times between registration, triage, and physician visits.
                </p>
                <p className="mil-up">
                  The compiled reports were developed into an interactive Power BI dashboard, highlighting department bottlenecks and physician availability in real time.
                </p>
              </div>
              <div className="col-lg-6">
                <h4 className="mil-up mil-mb-20">Results &amp; Business Value</h4>
                <div className="mil-up mil-mb-30">
                  <h6 className="mil-mb-5">Key Metric Improvement</h6>
                  <p className="mil-accent" style={{ fontSize: "24px", fontWeight: "700" }}>14% Decrease in Patient Waiting Times</p>
                </div>
                <ul className="mil-service-list mil-mb-30" style={{ paddingLeft: 0 }}>
                  <li>Standardized the patient registration forms, reducing paperwork delays.</li>
                  <li>Reallocated staffing schedules during peak admission hours (4 PM – 8 PM).</li>
                  <li>Enabled departmental heads to predict bed shortages 24 hours in advance.</li>
                </ul>
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="mil-works-nav mil-up" style={{ marginTop: "120px" }}>
              <a href="/project-1" className="mil-link mil-dark mil-arrow-place mil-icon-left">
                <span>Prev project</span>
              </a>
              <a href="/projects" className="mil-link mil-dark">
                <span>All projects</span>
              </a>
              <a href="https://github.com/jacky4458?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#ff9800", borderRadius: "30px", color: "#000", fontWeight: 700, fontSize: "13px", textDecoration: "none", letterSpacing: "0.5px" }}>
                <i className="fab fa-github" style={{ fontSize: "16px" }}></i>
                <span>View on GitHub</span>
              </a>
              <a href="/project-3" className="mil-link mil-dark mil-arrow-place">
                <span>Next project</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <HiddenElements />
    </>
  );
}
