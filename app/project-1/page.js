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
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/project-1">COVID-19 Analysis</a></li>
            </ul>
            <h1 className="mil-mb-60">COVID-19 Data <span className="mil-thin">Analysis Dashboard</span></h1>
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
            <img src="/img/works/1.jpg" alt="COVID-19 Analytics" />
          </div>
          
          <div className="mil-info mil-up" style={{ display: "flex", flexWrap: "wrap", gap: "30px", marginTop: "30px" }}>
            <div>Role: &nbsp;<span className="mil-dark">Data Analyst</span></div>
            <div>Tools: &nbsp;<span className="mil-dark">Python, Pandas, Tableau</span></div>
            <div>Category: &nbsp;<span className="mil-dark">Healthcare Dashboard</span></div>
          </div>

          <div className="mil-p-120-0">
            <div className="row justify-content-between mil-mb-60">
              <div className="col-lg-5">
                <h3 className="mil-up mil-mb-30">Case Study Overview</h3>
                <p className="mil-up mil-dark-soft">
                  Exploring global transmission rates, recovery rates, and regional hotspots during different waves of the COVID-19 pandemic to assist policy analysis and health research.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-6 mil-mb-30">
                    <h5 className="mil-up mil-mb-15" style={{ color: "var(--accent, #ff9800)" }}>Problem Statement</h5>
                    <p className="mil-up mil-text-sm mil-dark-soft">
                      Analyze global COVID-19 trends to understand infection spreads and identify critical zones requiring medical aid or containment.
                    </p>
                  </div>
                  <div className="col-md-6 mil-mb-30">
                    <h5 className="mil-up mil-mb-15" style={{ color: "var(--accent, #ff9800)" }}>Analytical Focus</h5>
                    <p className="mil-up mil-text-sm mil-dark-soft">
                      Processing, merging, and cleaning massive CSV and JSON transactional datasets containing infection records and hospital charts.
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
                  Using Python libraries like Pandas and NumPy, I consolidated global data from John Hopkins University, fixed formatting anomalies, and structured tables for efficient database load.
                </p>
                <p className="mil-up">
                  The cleansed tables were then imported to Tableau, establishing data relationships and producing spatial layouts to observe changes over time.
                </p>
              </div>
              <div className="col-lg-6">
                <h4 className="mil-up mil-mb-20">Results &amp; Business Value</h4>
                <div className="mil-up mil-mb-30">
                  <h6 className="mil-mb-5">Key Metric Improvement</h6>
                  <p className="mil-accent" style={{ fontSize: "24px", fontWeight: "700" }}>Actionable Global Insights Generated</p>
                </div>
                <ul className="mil-service-list mil-mb-30" style={{ paddingLeft: 0 }}>
                  <li>Delivered a central portal showing recovery rates by country and demographic group.</li>
                  <li>Highlighted regression charts tracking vaccine delivery against hospital admissions.</li>
                  <li>Created dynamic heatmaps mapping positive rate surges in real time.</li>
                </ul>
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="mil-works-nav mil-up" style={{ marginTop: "120px" }}>
              <a href="#none" className="mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled">
                <span>Prev project</span>
              </a>
              <a href="/projects" className="mil-link mil-dark">
                <span>All projects</span>
              </a>
              <a href="https://github.com/jacky4458?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#ff9800", borderRadius: "30px", color: "#000", fontWeight: 700, fontSize: "13px", textDecoration: "none", letterSpacing: "0.5px" }}>
                <i className="fab fa-github" style={{ fontSize: "16px" }}></i>
                <span>View on GitHub</span>
              </a>
              <a href="/project-2" className="mil-link mil-dark mil-arrow-place">
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
