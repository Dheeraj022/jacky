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
              <li><a href="/about">About & Resume</a></li>
            </ul>
            <h1 className="mil-mb-60">About My <span className="mil-thin">Professional</span><br /> Journey</h1>
            <a href="#about-me" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Read profile</span>
            </a>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section id="about-me">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div className="mil-mb-90">
                <h2 className="mil-up mil-mb-60">Who I <span className="mil-thin">Am</span></h2>
                <p className="mil-up mil-mb-30 mil-text-lg">
                  I am a Business Analyst with experience in business process analysis, stakeholder management, requirements gathering, and data analytics.
                </p>
                <p className="mil-up mil-mb-30">
                  Over the past three years, I have worked on digital transformation initiatives, reporting solutions, dashboard development, and business improvement projects. Currently pursuing MSc Business Analytics in Ireland while strengthening expertise in SQL, Power BI, Tableau, Python, and Business Analysis methodologies.
                </p>
                <p className="mil-up mil-mb-60">
                  I thrive on solving complex problems, standardizing processes, and creating interactive visualization dashboards that help business leaders make well-informed, data-backed decisions.
                </p>

                <div className="mil-about-quote mil-up">
                  <div className="mil-avatar">
                    <img src="/img/faces/large/jacky.png" alt="Jacky Kumar" />
                  </div>
                  <h6 className="mil-quote">
                    Transforming Business Challenges <span className="mil-thin">into Data-Driven Decisions:</span> Unleashing <span className="mil-thin">Analytical Innovation.</span>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="mil-about-photo mil-mb-90">
                <div className="mil-lines-place"></div>
                <div className="mil-up mil-img-frame" style={{ "paddingBottom": "130%" }}>
                  <img src="/img/photo/1.jpg" alt="Jacky Kumar" className="mil-scale" data-value-1="1" data-value-2="1.2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Introduction Section */}
      <section className="mil-dark-bg mil-p-120-90">
        <div className="mi-invert-fix">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5 mil-mb-60">
                <h2 className="mil-muted mil-up mil-mb-30">Why Should <br />You <span className="mil-thin">Hire Me?</span></h2>
                <p className="mil-light-soft mil-up mil-mb-30">
                  Watch this 60–90 seconds video walkthrough outlining my core capabilities, professional experience, and academic track record.
                </p>
                <ul className="mil-service-list mil-light mil-mb-30">
                  <li className="mil-up"><strong>Introduction:</strong> Brief background & passion for analytics</li>
                  <li className="mil-up"><strong>Professional background:</strong> Real-world consulting & BA experiences</li>
                  <li className="mil-up"><strong>Key strengths:</strong> Requirements elicitation, dashboarding, SQL, Python</li>
                  <li className="mil-up"><strong>Strong Fit:</strong> High collaboration & data skills to solve corporate bottlenecks</li>
                  <li className="mil-up"><strong>Career goals:</strong> Growth pathways as an analyst in Ireland</li>
                </ul>
              </div>

              <div className="col-lg-6 mil-mb-60">
                <div className="mil-up" style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  background: "#1a1a1a",
                  paddingBottom: "56.25%",
                  height: 0
                }}>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/img/photo/2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                    <div className="mil-button mil-icon-button mil-arrow-place" style={{ cursor: "pointer", width: "80px", height: "80px", marginBottom: "15px" }}>
                      <i className="fas fa-play" style={{ color: "#fff", fontSize: "20px", marginLeft: "5px" }}></i>
                    </div>
                    <h5 className="mil-muted">Why Should You Hire Me?</h5>
                    <p className="mil-light-soft mil-text-sm">Video Duration: 90 Seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="mil-p-120-120">
        <div className="container">
          <div className="mil-recruiter-banner mil-up" style={{
            background: "rgba(255, 152, 0, 0.05)",
            border: "1px solid rgba(255, 152, 0, 0.2)",
            borderRadius: "16px",
            padding: "50px 40px",
            textAlign: "center"
          }}>
            <h2 className="mil-mb-20">Download My Resume</h2>
            <p className="mil-light-soft mil-text-lg mil-mb-40" style={{ maxWidth: "600px", margin: "0 auto 40px" }}>
              Get direct access to my comprehensive curriculum vitae, cover letter, or view my up-to-date professional profile on LinkedIn.
            </p>
            <div className="row justify-content-center" style={{ gap: "20px" }}>
              <a href="#." className="mil-button mil-arrow-place">
                <span>📄 PDF Resume</span>
              </a>
              <a href="#." className="mil-button mil-arrow-place mil-dark">
                <span>📄 Cover Letter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mil-button mil-arrow-place mil-dark">
                <span>💼 LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mil-p-120-90 mil-soft-bg">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 mil-mb-60">
              <h2 className="mil-up mil-mb-30">Professional <br />Experience</h2>
              <p className="mil-light-soft mil-up mil-mb-30">
                Over three years of corporate experience driving digital transformation initiatives, managing requirements workflows, and providing insights through reporting.
              </p>
            </div>

            <div className="col-lg-7">
              <div className="mil-timeline">
                <div className="mil-timeline-item mil-up mil-mb-30" style={{ paddingLeft: "30px", borderLeft: "2px solid var(--accent, #ff9800)", position: "relative" }}>
                  <div style={{
                    position: "absolute",
                    left: "-7px",
                    top: "5px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--accent, #ff9800)"
                  }}></div>
                  <h4 className="mil-mb-5">Business Analyst</h4>
                  <h6 className="mil-mb-15" style={{ color: "var(--accent, #ff9800)" }}>Webbyacad Software Solution Pvt Ltd | Oct 2022 – Aug 2024</h6>
                  <p className="mil-mb-20">
                    Collaborated directly with business partners to design specifications and deliver digital improvement modules.
                  </p>
                  <ul className="mil-service-list mil-mb-20" style={{ paddingLeft: 0 }}>
                    <li>Requirements Gathering & BRD/FRD functional writing.</li>
                    <li>Conducting Client Workshops and Stakeholder Management sessions.</li>
                    <li>Process Mapping, BPMN workflows, and technical-business team bridging.</li>
                  </ul>
                  <p className="mil-text-sm" style={{ fontStyle: "italic" }}>
                    <strong>Key Achievement:</strong> Successfully delivered multiple client projects while improving communications between development teams and corporate users.
                  </p>
                </div>

                <div className="mil-timeline-item mil-up mil-mb-30" style={{ paddingLeft: "30px", borderLeft: "2px solid #ccc", position: "relative", marginTop: "40px" }}>
                  <div style={{
                    position: "absolute",
                    left: "-7px",
                    top: "5px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#ccc"
                  }}></div>
                  <h4 className="mil-mb-5">Digital Consultant</h4>
                  <h6 className="mil-mb-15" style={{ color: "#888" }}>4 Square Digital Pvt Ltd | Aug 2021 – Sep 2022</h6>
                  <p className="mil-mb-20">
                    Assisted marketing and campaign administrators with performance metrics auditing and insights extraction.
                  </p>
                  <ul className="mil-service-list mil-mb-20" style={{ paddingLeft: 0 }}>
                    <li>Reporting dashboards formulation & client queries management.</li>
                    <li>Digital campaign performance analysis.</li>
                    <li>Translating raw transaction logs into structural business observations.</li>
                  </ul>
                  <p className="mil-text-sm" style={{ fontStyle: "italic" }}>
                    <strong>Key Achievement:</strong> Helped improve digital performance reporting accuracy and enhanced client satisfaction rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Timeline */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 mil-mb-60">
              <h2 className="mil-up mil-mb-30">Education &amp; <br />Academic Path</h2>
              <p className="mil-light-soft mil-up mil-mb-30">
                Equipped with specialized postgraduate training in analytics from Ireland and foundation management credentials.
              </p>
            </div>

            <div className="col-lg-7">
              <div className="mil-timeline">
                <div className="mil-timeline-item mil-up mil-mb-30" style={{ paddingLeft: "30px", borderLeft: "2px solid var(--accent, #ff9800)", position: "relative" }}>
                  <div style={{
                    position: "absolute",
                    left: "-7px",
                    top: "5px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--accent, #ff9800)"
                  }}></div>
                  <h4 className="mil-mb-5">MSc Business Analytics</h4>
                  <h6 className="mil-mb-15" style={{ color: "var(--accent, #ff9800)" }}>University of Galway | Ireland (Current)</h6>
                  <p className="mil-mb-10">
                    Pursuing intensive graduate coursework on descriptive, predictive, and prescriptive analysis.
                  </p>
                  <p className="mil-text-sm">
                    <strong>Relevant Modules:</strong> Data Analytics, Machine Learning, Data Visualization, Business Intelligence.
                  </p>
                </div>

                <div className="mil-timeline-item mil-up mil-mb-30" style={{ paddingLeft: "30px", borderLeft: "2px solid #ccc", position: "relative", marginTop: "40px" }}>
                  <div style={{
                    position: "absolute",
                    left: "-7px",
                    top: "5px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#ccc"
                  }}></div>
                  <h4 className="mil-mb-5">Bachelor of Business Administration (BBA)</h4>
                  <h6 className="mil-mb-15" style={{ color: "#888" }}>MD University Rohtak | India (Completed)</h6>
                  <p className="mil-mb-0">
                    Established foundational knowledge in corporate operations, finance, marketing, and administration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className="mil-p-120-60 mil-soft-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="mil-up mil-mb-60 mil-center">Core Skills Matrix</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mil-mb-60">
              <div className="mil-service-card-lg mil-up" style={{ height: "100%", padding: "40px 30px" }}>
                <h4 className="mil-mb-30">Business Analysis</h4>
                <ul className="mil-service-list" style={{ paddingLeft: 0 }}>
                  <li>Requirement Gathering</li>
                  <li>User Stories (Agile)</li>
                  <li>BRD / FRD Drafting</li>
                  <li>BPMN Process Mapping</li>
                  <li>Process Improvement</li>
                  <li>Stakeholder Management</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mil-mb-60">
              <div className="mil-service-card-lg mil-up" style={{ height: "100%", padding: "40px 30px" }}>
                <h4 className="mil-mb-30">Data Analytics</h4>
                <ul className="mil-service-list" style={{ paddingLeft: 0 }}>
                  <li>SQL Querying</li>
                  <li>Power BI Dashboarding</li>
                  <li>Tableau Visualization</li>
                  <li>Python Programming</li>
                  <li>Pandas &amp; NumPy</li>
                  <li>Advanced MS Excel</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mil-mb-60">
              <div className="mil-service-card-lg mil-up" style={{ height: "100%", padding: "40px 30px" }}>
                <h4 className="mil-mb-30">Project Management</h4>
                <ul className="mil-service-list" style={{ paddingLeft: 0 }}>
                  <li>Agile Frameworks</li>
                  <li>Scrum Methodologies</li>
                  <li>Jira Workflow Management</li>
                  <li>Confluence Documentation</li>
                  <li>Sprint Planning</li>
                  <li>Task Prioritization</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mil-mb-60">
              <div className="mil-service-card-lg mil-up" style={{ height: "100%", padding: "40px 30px" }}>
                <h4 className="mil-mb-30">Communication</h4>
                <ul className="mil-service-list" style={{ paddingLeft: 0 }}>
                  <li>Client Meetings</li>
                  <li>Presentations</li>
                  <li>Workshop Facilitation</li>
                  <li>Technical Documentation</li>
                  <li>Cross-Functional Alignment</li>
                  <li>Reporting Delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Wall & Learning Journey */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <h2 className="mil-up mil-mb-30">Achievement Wall</h2>
              <p className="mil-light-soft mil-up mil-mb-60">
                Key professional and extracurricular milestones reflecting my dedication, team leadership, and capabilities.
              </p>

              <div className="mil-accordion-group mil-up mil-mb-30">
                <div className="mil-accordion-menu">
                  <p className="mil-link mil-dark mil-upper">🏆 ECBA Certified</p>
                  <div className="mil-symbol"><span className="mil-plus">+</span><span className="mil-minus">-</span></div>
                </div>
                <div className="mil-accordion-content">
                  <p className="mil-light-soft">Received the Entry Certificate in Business Analysis (ECBA) from the International Institute of Business Analysis (IIBA).</p>
                </div>
              </div>

              <div className="mil-accordion-group mil-up mil-mb-30">
                <div className="mil-accordion-menu">
                  <p className="mil-link mil-dark mil-upper">🏆 College Cricket Team Captain</p>
                  <div className="mil-symbol"><span className="mil-plus">+</span><span className="mil-minus">-</span></div>
                </div>
                <div className="mil-accordion-content">
                  <p className="mil-light-soft">Led my collegiate cricket squad in state-level championships, refining skills in leadership, strategy, and team cohesion.</p>
                </div>
              </div>

              <div className="mil-accordion-group mil-up mil-mb-30">
                <div className="mil-accordion-menu">
                  <p className="mil-link mil-dark mil-upper">🏆 Organized GTC-2K19 College Fest</p>
                  <div className="mil-symbol"><span className="mil-plus">+</span><span className="mil-minus">-</span></div>
                </div>
                <div className="mil-accordion-content">
                  <p className="mil-light-soft">Served as the lead coordinator of operations for our college's premier tech festival with over 2000 attendees.</p>
                </div>
              </div>

              <div className="mil-accordion-group mil-up mil-mb-30">
                <div className="mil-accordion-menu">
                  <p className="mil-link mil-dark mil-upper">🏆 Advanced Data Analytics Internship</p>
                  <div className="mil-symbol"><span className="mil-plus">+</span><span className="mil-minus">-</span></div>
                </div>
                <div className="mil-accordion-content">
                  <p className="mil-light-soft">Completed a rigorous internship focusing on building analytical dashboards and querying large relational databases.</p>
                </div>
              </div>

              <div className="mil-accordion-group mil-up mil-mb-30">
                <div className="mil-accordion-menu">
                  <p className="mil-link mil-dark mil-upper">🏆 Multiple Data Analytics Certifications</p>
                  <div className="mil-symbol"><span className="mil-plus">+</span><span className="mil-minus">-</span></div>
                </div>
                <div className="mil-accordion-content">
                  <p className="mil-light-soft">Obtained specialization certificates for Tableau, SQL, Python, and Power BI tools.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mil-mb-60">
              <h2 className="mil-up mil-mb-60">My Learning Journey</h2>
              <div className="mil-timeline">
                <div className="mil-timeline-item mil-up" style={{ paddingLeft: "25px", borderLeft: "2px solid var(--accent, #ff9800)", position: "relative", marginBottom: "20px" }}>
                  <div style={{ position: "absolute", left: "-7px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: "var(--accent, #ff9800)" }}></div>
                  <h5 className="mil-mb-5">2021</h5>
                  <p className="mil-light-soft text-sm">Worked as Digital Consultant, learning analytic toolsets and client servicing.</p>
                </div>

                <div className="mil-timeline-item mil-up" style={{ paddingLeft: "25px", borderLeft: "2px solid var(--accent, #ff9800)", position: "relative", marginBottom: "20px" }}>
                  <div style={{ position: "absolute", left: "-7px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: "var(--accent, #ff9800)" }}></div>
                  <h5 className="mil-mb-5">2022</h5>
                  <p className="mil-light-soft text-sm">Transitioned to Business Analyst role at Webbyacad Software Solutions.</p>
                </div>

                <div className="mil-timeline-item mil-up" style={{ paddingLeft: "25px", borderLeft: "2px solid var(--accent, #ff9800)", position: "relative", marginBottom: "20px" }}>
                  <div style={{ position: "absolute", left: "-7px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: "var(--accent, #ff9800)" }}></div>
                  <h5 className="mil-mb-5">2024</h5>
                  <p className="mil-light-soft text-sm">Moved to Ireland to pursue MSc Business Analytics at the University of Galway.</p>
                </div>

                <div className="mil-timeline-item mil-up" style={{ paddingLeft: "25px", borderLeft: "2px solid var(--accent, #ff9800)", position: "relative", marginBottom: "20px" }}>
                  <div style={{ position: "absolute", left: "-7px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: "var(--accent, #ff9800)" }}></div>
                  <h5 className="mil-mb-5">2025</h5>
                  <p className="mil-light-soft text-sm">Earned the globally recognized ECBA (IIBA) certification.</p>
                </div>

                <div className="mil-timeline-item mil-up" style={{ paddingLeft: "25px", borderLeft: "2px solid var(--accent, #ff9800)", position: "relative" }}>
                  <div style={{ position: "absolute", left: "-7px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: "var(--accent, #ff9800)" }}></div>
                  <h5 className="mil-mb-5">2026 &amp; Beyond</h5>
                  <p className="mil-light-soft text-sm">Seeking full-time Business Analyst / Data Analyst opportunities in Ireland.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Showcase */}
      <section className="mil-p-120-90 mil-soft-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="mil-up mil-mb-60 mil-center">Certification Showcase</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6 mil-mb-30">
              <a href="#." className="mil-service-card-sm mil-up mil-center" style={{ display: "block", textDecoration: "none", padding: "40px" }}>
                <h5 className="mil-mb-10">ECBA (IIBA)</h5>
                <p className="mil-light-soft mil-text-sm mil-mb-0">Entry Certificate in Business Analysis</p>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mil-mb-30">
              <a href="#." className="mil-service-card-sm mil-up mil-center" style={{ display: "block", textDecoration: "none", padding: "40px" }}>
                <h5 className="mil-mb-10">Tableau</h5>
                <p className="mil-light-soft mil-text-sm mil-mb-0">Desktop Specialist &amp; Visual Analytics</p>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mil-mb-30">
              <a href="#." className="mil-service-card-sm mil-up mil-center" style={{ display: "block", textDecoration: "none", padding: "40px" }}>
                <h5 className="mil-mb-10">SQL</h5>
                <p className="mil-light-soft mil-text-sm mil-mb-0">Advanced Querying &amp; Relational Databases</p>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mil-mb-30">
              <a href="#." className="mil-service-card-sm mil-up mil-center" style={{ display: "block", textDecoration: "none", padding: "40px" }}>
                <h5 className="mil-mb-10">Power BI</h5>
                <p className="mil-light-soft mil-text-sm mil-mb-0">Business Intelligence &amp; Dashboard Design</p>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mil-mb-30">
              <a href="#." className="mil-service-card-sm mil-up mil-center" style={{ display: "block", textDecoration: "none", padding: "40px" }}>
                <h5 className="mil-mb-10">Python</h5>
                <p className="mil-light-soft mil-text-sm mil-mb-0">Data Processing, Pandas, &amp; Visualization</p>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mil-mb-30">
              <a href="#." className="mil-service-card-sm mil-up mil-center" style={{ display: "block", textDecoration: "none", padding: "40px" }}>
                <h5 className="mil-mb-10">Data Analytics</h5>
                <p className="mil-light-soft mil-text-sm mil-mb-0">Various Specialized Academic Credentials</p>
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
