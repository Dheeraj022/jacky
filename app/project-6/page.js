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
              <li><a href="/project-6">Customer Segmentation</a></li>
            </ul>
            <h1 className="mil-mb-60">Customer <span className="mil-thin">Segmentation Analysis</span></h1>
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
            <img src="/img/works/6.jpg" alt="Customer Segmentation Analysis" />
          </div>
          
          <div className="mil-info mil-up" style={{ display: "flex", flexWrap: "wrap", gap: "30px", marginTop: "30px" }}>
            <div>Role: &nbsp;<span className="mil-dark">Marketing Analytics Consultant</span></div>
            <div>Tools: &nbsp;<span className="mil-dark">Python, K-Means, Tableau</span></div>
            <div>Category: &nbsp;<span className="mil-dark">Market Segmentation</span></div>
          </div>

          <div className="mil-p-120-0">
            <div className="row justify-content-between mil-mb-60">
              <div className="col-lg-5">
                <h3 className="mil-up mil-mb-30">Case Study Overview</h3>
                <p className="mil-up mil-light-soft">
                  Segmenting a retail client's active customer base to target specific cohorts and design optimized, personalized promotional campaigns.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-6 mil-mb-30">
                    <h5 className="mil-up mil-mb-15" style={{ color: "var(--accent, #ff9800)" }}>Problem Statement</h5>
                    <p className="mil-up mil-text-sm mil-light-soft">
                      Group customers using transaction behavior to increase promotional email response rates and customer lifetime value (LTV).
                    </p>
                  </div>
                  <div className="col-md-6 mil-mb-30">
                    <h5 className="mil-up mil-mb-15" style={{ color: "var(--accent, #ff9800)" }}>Analytical Focus</h5>
                    <p className="mil-up mil-text-sm mil-light-soft">
                      Developing RFM (Recency, Frequency, Monetary) analytics models in Python and publishing cluster dashboards in Tableau.
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
                  I pulled active client lists, computed RFM scores, and ran K-Means clustering algorithms in a Jupyter notebook to define distinct shopper cohorts (e.g. VIP Shoppers, Churn-Risk Bargain Buyers, Steady Shoppers).
                </p>
                <p className="mil-up">
                  The data clusters were mapped into Tableau to show cluster trends, purchasing patterns, and preferred product categories, allowing marketing to directly retrieve contact lists.
                </p>
              </div>
              <div className="col-lg-6">
                <h4 className="mil-up mil-mb-20">Results &amp; Business Value</h4>
                <div className="mil-up mil-mb-30">
                  <h6 className="mil-mb-5">Key Metric Improvement</h6>
                  <p className="mil-accent" style={{ fontSize: "24px", fontWeight: "700" }}>18% Lift in Campaign Response Rates</p>
                </div>
                <ul className="mil-service-list mil-mb-30" style={{ paddingLeft: 0 }}>
                  <li>Enabled marketing teams to send custom product offerings tailored to specific clusters.</li>
                  <li>Highlighted an active cohort representing 12% of shoppers that generates 45% of monetary sales.</li>
                  <li>Automated pipeline to refresh customer clusters monthly inside client databases.</li>
                </ul>
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="mil-works-nav mil-up" style={{ marginTop: "120px" }}>
              <a href="/project-5" className="mil-link mil-dark mil-arrow-place mil-icon-left">
                <span>Prev project</span>
              </a>
              <a href="/projects" className="mil-link mil-dark">
                <span>All projects</span>
              </a>
              <a href="https://github.com/jacky4458?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#ff9800", borderRadius: "30px", color: "#000", fontWeight: 700, fontSize: "13px", textDecoration: "none", letterSpacing: "0.5px" }}>
                <i className="fab fa-github" style={{ fontSize: "16px" }}></i>
                <span>View on GitHub</span>
              </a>
              <a href="#." className="mil-link mil-dark mil-arrow-place mil-disabled">
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
