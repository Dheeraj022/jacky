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
              <li><a href="/project-4">Predictive Analytics</a></li>
            </ul>
            <h1 className="mil-mb-60">Predictive Churn <span className="mil-thin">Analytics</span></h1>
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
            <img src="/img/works/4.jpg" alt="Predictive Analytics" />
          </div>
          
          <div className="mil-info mil-up" style={{ display: "flex", flexWrap: "wrap", gap: "30px", marginTop: "30px" }}>
            <div>Role: &nbsp;<span className="mil-dark">Machine Learning Analyst</span></div>
            <div>Tools: &nbsp;<span className="mil-dark">Python, Pandas, Scikit-Learn</span></div>
            <div>Category: &nbsp;<span className="mil-dark">Predictive Modeling</span></div>
          </div>

          <div className="mil-p-120-0">
            <div className="row justify-content-between mil-mb-60">
              <div className="col-lg-5">
                <h3 className="mil-up mil-mb-30">Case Study Overview</h3>
                <p className="mil-up mil-light-soft">
                  Building automated data pipelines and machine learning classifiers to predict customer cancellations (churn) for a subscription-based digital platform.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-6 mil-mb-30">
                    <h5 className="mil-up mil-mb-15" style={{ color: "var(--accent, #ff9800)" }}>Problem Statement</h5>
                    <p className="mil-up mil-text-sm mil-light-soft">
                      Proactively identify active subscribers who are likely to cancel their membership in the upcoming month.
                    </p>
                  </div>
                  <div className="col-md-6 mil-mb-30">
                    <h5 className="mil-up mil-mb-15" style={{ color: "var(--accent, #ff9800)" }}>Analytical Focus</h5>
                    <p className="mil-up mil-text-sm mil-light-soft">
                      Feature engineering on activity logs, training classification models, and mapping model parameters for business reviews.
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
                  Using Python, I consolidated subscriber usage logs, transaction records, and client support cases. I engineered indicators for engagement degradation, such as decreased login frequency and payment delays.
                </p>
                <p className="mil-up">
                  I evaluated multiple classification algorithms (Logistic Regression, Decision Trees, Random Forest). Random Forest was selected due to higher accuracy and recall metrics.
                </p>
              </div>
              <div className="col-lg-6">
                <h4 className="mil-up mil-mb-20">Results &amp; Business Value</h4>
                <div className="mil-up mil-mb-30">
                  <h6 className="mil-mb-5">Key Metric Improvement</h6>
                  <p className="mil-accent" style={{ fontSize: "24px", fontWeight: "700" }}>12% Churn Reduction Achieved</p>
                </div>
                <ul className="mil-service-list mil-mb-30" style={{ paddingLeft: 0 }}>
                  <li>Enabled marketing teams to automatically target high-risk groups with retention emails.</li>
                  <li>Discovered that support response times above 4 hours increase churn probability by 25%.</li>
                  <li>Automated customer profiling dashboards that update retention indexes daily.</li>
                </ul>
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="mil-works-nav mil-up" style={{ marginTop: "120px" }}>
              <a href="/project-3" className="mil-link mil-dark mil-arrow-place mil-icon-left">
                <span>Prev project</span>
              </a>
              <a href="/projects" className="mil-link mil-dark">
                <span>All projects</span>
              </a>
              <a href="https://github.com/jacky4458?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#ff9800", borderRadius: "30px", color: "#000", fontWeight: 700, fontSize: "13px", textDecoration: "none", letterSpacing: "0.5px" }}>
                <i className="fab fa-github" style={{ fontSize: "16px" }}></i>
                <span>View on GitHub</span>
              </a>
              <a href="/project-5" className="mil-link mil-dark mil-arrow-place">
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
