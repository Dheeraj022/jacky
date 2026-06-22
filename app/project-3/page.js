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
              <li><a href="/project-3">Credit Risk Analysis</a></li>
            </ul>
            <h1 className="mil-mb-60">Credit Risk <span className="mil-thin">Analysis</span></h1>
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
            <img src="/img/works/3.jpg" alt="Credit Risk Analysis" />
          </div>
          
          <div className="mil-info mil-up" style={{ display: "flex", flexWrap: "wrap", gap: "30px", marginTop: "30px" }}>
            <div>Role: &nbsp;<span className="mil-dark">Risk Analyst</span></div>
            <div>Tools: &nbsp;<span className="mil-dark">Python, SQL, Matplotlib, Seaborn</span></div>
            <div>Category: &nbsp;<span className="mil-dark">Financial Risk</span></div>
          </div>

          <div className="mil-p-120-0">
            <div className="row justify-content-between mil-mb-60">
              <div className="col-lg-5">
                <h3 className="mil-up mil-mb-30">Case Study Overview</h3>
                <p className="mil-up mil-dark-soft">
                  Analyzing loan applicant profiles and historical defaults to help a credit provider minimize non-performing loans (NPLs) and standardize credit score rules.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-6 mil-mb-30">
                    <h5 className="mil-up mil-mb-15" style={{ color: "var(--accent, #ff9800)" }}>Problem Statement</h5>
                    <p className="mil-up mil-text-sm mil-dark-soft">
                      Identify applicant segments showing high tendencies of defaults, ensuring safer loan approvals.
                    </p>
                  </div>
                  <div className="col-md-6 mil-mb-30">
                    <h5 className="mil-up mil-mb-15" style={{ color: "var(--accent, #ff9800)" }}>Analytical Focus</h5>
                    <p className="mil-up mil-text-sm mil-dark-soft">
                      Structuring relational SQL schemas, filtering client segments, and modeling credit metrics using Python datasets.
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
                  By querying transactional credit history databases, I isolated data for default status indicators. I calculated interest ratios, debt-to-income limits, and repayment delays.
                </p>
                <p className="mil-up">
                  Python was utilized to execute cohort analysis, plotting debt distribution curves and determining default probabilities across customer income groups.
                </p>
              </div>
              <div className="col-lg-6">
                <h4 className="mil-up mil-mb-20">Results &amp; Business Value</h4>
                <div className="mil-up mil-mb-30">
                  <h6 className="mil-mb-5">Key Metric Improvement</h6>
                  <p className="mil-accent" style={{ fontSize: "24px", fontWeight: "700" }}>8% Reduction in Non-Performing Loans</p>
                </div>
                <ul className="mil-service-list mil-mb-30" style={{ paddingLeft: 0 }}>
                  <li>Isolated debt-to-income threshold ratios above which defaults rise exponentially.</li>
                  <li>Enabled credit approval officers to filter applications using a simplified risk matrix.</li>
                  <li>Improved financial auditing turnaround times through automated reporting scripts.</li>
                </ul>
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="mil-works-nav mil-up" style={{ marginTop: "120px" }}>
              <a href="/project-2" className="mil-link mil-dark mil-arrow-place mil-icon-left">
                <span>Prev project</span>
              </a>
              <a href="/projects" className="mil-link mil-dark">
                <span>All projects</span>
              </a>
              <a href="https://github.com/jacky4458?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#ff9800", borderRadius: "30px", color: "#000", fontWeight: 700, fontSize: "13px", textDecoration: "none", letterSpacing: "0.5px" }}>
                <i className="fab fa-github" style={{ fontSize: "16px" }}></i>
                <span>View on GitHub</span>
              </a>
              <a href="/project-4" className="mil-link mil-dark mil-arrow-place">
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
