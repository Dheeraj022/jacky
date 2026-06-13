"use client";

import React from 'react';
import Footer from './components/Footer';
import HiddenElements from './components/HiddenElements';

export default function Page() {
  return (
    <>
      {/* Banner */}
      <section className="mil-banner mil-dark-bg" style={{ position: "relative", padding: "160px 0 100px", minHeight: "100vh", height: "auto", display: "flex", alignItems: "center" }}>
        <div className="mi-invert-fix" style={{ width: "100%", height: "auto" }}>
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6"></div>
            <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1"></div>
            <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1"></div>
          </div>

          <div className="mil-gradient"></div>

          <div className="container">
            <div className="mil-banner-content mil-center mil-up" style={{ padding: "0 0" }}>
              
              {/* Top: Header Titles */}
              <div className="row justify-content-center mil-mb-40">
                <div className="col-lg-8">
                  <h1 className="mil-mb-20 mil-muted" style={{ lineHeight: "1.1" }}>Jacky <span className="mil-thin">Kumar</span></h1>
                  <span className="mil-suptitle mil-suptitle-light mil-mb-0" style={{ display: "block", fontSize: "16px", color: "rgba(255, 255, 255, 0.75)" }}>
                    Business Analyst | Data Analyst | ECBA Certified | MSc Business Analytics
                  </span>
                </div>
              </div>

              {/* Middle: Centered Video Player (Wider col-lg-10 to cover left & right space) */}
              <div className="row justify-content-center mil-mb-50">
                <div className="col-lg-10">
                  <div className="mil-up" style={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    background: "#1a1a1a",
                    paddingBottom: "56.25%", // 16:9 ratio
                    height: 0
                  }}>
                    <video
                      src="https://assets.mixkit.co/videos/preview/mixkit-financial-charts-on-a-computer-monitor-close-up-34289-large.mp4"
                      poster="/img/photo/2.jpg"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: 0.7
                      }}
                    />
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
                      background: "rgba(0, 0, 0, 0.25)"
                    }}>
                      <div className="mil-button mil-icon-button" style={{ cursor: "pointer", width: "70px", height: "70px", padding: 0 }}>
                        <i className="fas fa-play" style={{ color: "#000", fontSize: "16px", marginLeft: "4px" }}></i>
                      </div>
                      <span className="mil-muted mt-3" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "1px" }}>WATCH WALKTHROUGH</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom: Description & Buttons */}
              <div className="row justify-content-center mil-mb-40" style={{ marginTop: "20px" }}>
                <div className="col-lg-8">
                  <p className="mil-light-soft mil-text-lg mil-mb-0" style={{ fontSize: "16px", lineHeight: "1.7", color: "rgba(255,255,255,0.6)" }}>
                    Transforming Business Challenges into Data-Driven Decisions Through Analytics, Stakeholder Collaboration, and Process Improvement.
                  </p>
                </div>
              </div>

              {/* Centered Buttons with proper gap and black icons */}
              <div className="mil-buttons-row mil-up mil-mb-50" style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center", alignItems: "center" }}>
                <a href="/about#resume" className="mil-button mil-arrow-place" style={{ padding: "0 20px 0 25px", display: "inline-flex", alignItems: "center" }}>
                  <i className="far fa-file-alt" style={{ marginRight: "10px", fontSize: "14px", color: "#000", display: "inline-flex", alignItems: "center", justifyContent: "center" }}></i>
                  <span>Download Resume</span>
                </a>
                <a href="/projects" className="mil-button mil-arrow-place" style={{ padding: "0 20px 0 25px", display: "inline-flex", alignItems: "center" }}>
                  <i className="fas fa-chart-bar" style={{ marginRight: "10px", fontSize: "14px", color: "#000", display: "inline-flex", alignItems: "center", justifyContent: "center" }}></i>
                  <span>View Projects</span>
                </a>
                <a href="/contact" className="mil-button mil-arrow-place" style={{ padding: "0 20px 0 25px", display: "inline-flex", alignItems: "center" }}>
                  <i className="fas fa-envelope" style={{ marginRight: "10px", fontSize: "14px", color: "#000", display: "inline-flex", alignItems: "center", justifyContent: "center" }}></i>
                  <span>Contact Me</span>
                </a>
              </div>

              {/* Recruiter Banner */}
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="mil-recruiter-banner mil-up" style={{
                    background: "rgba(255, 152, 0, 0.05)",
                    border: "1px solid rgba(255, 152, 0, 0.15)",
                    borderRadius: "12px",
                    padding: "15px 20px",
                    backdropFilter: "blur(10px)",
                    textAlign: "center"
                  }}>
                    <p className="mil-light-soft mil-mb-0" style={{ fontSize: "14px" }}>
                      Currently seeking <strong>Business Analyst / Data Analyst</strong> opportunities in Ireland.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Scroll Down Badge */}
          <div className="mil-circle-text mil-mobile-hidden" style={{ position: "absolute", bottom: "30px", right: "30px", zIndex: 9 }}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve" className="mil-ct-svg mil-rotate" data-value="360" style={{ width: "100px", height: "100px" }}>
              <defs>
                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
              </defs>
              <circle cx="150" cy="100" r="75" fill="none" />
              <g>
                <use xlinkHref="#circlePath" fill="none" />
                <text style={{ letterSpacing: "6.5px" }}>
                  <textPath xlinkHref="#circlePath">Scroll down - Scroll down - </textPath>
                </text>
              </g>
            </svg>
            <a href="#stats" className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"></a>
          </div>

        </div>
      </section>

      {/* Quick Stats Section */}
      <section id="stats" className="mil-p-120-60">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 mil-mb-60">
              <div className="mil-stat-item mil-up">
                <h2 className="mil-stat-number mil-thin mil-mb-15" style={{ fontSize: "56px" }}>3+</h2>
                <p className="mil-link mil-light-soft mil-upper">Years Experience</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mil-mb-60">
              <div className="mil-stat-item mil-up">
                <h2 className="mil-stat-number mil-thin mil-mb-15" style={{ fontSize: "56px" }}>10+</h2>
                <p className="mil-link mil-light-soft mil-upper">Analytics Projects</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mil-mb-60">
              <div className="mil-stat-item mil-up">
                <h2 className="mil-stat-number mil-thin mil-mb-15" style={{ fontSize: "56px" }}>ECBA</h2>
                <p className="mil-link mil-light-soft mil-upper">IIBA Certified</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mil-mb-60">
              <div className="mil-stat-item mil-up">
                <h2 className="mil-stat-number mil-thin mil-mb-15" style={{ fontSize: "56px" }}>MSc</h2>
                <p className="mil-link mil-light-soft mil-upper">Business Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="mil-p-60-90">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div className="mil-mb-60">
                <h2 className="mil-up mil-mb-30">About <span className="mil-thin">Me</span></h2>
                <h6 className="mil-up mil-mb-30" style={{ color: "var(--accent, #ff9800)", letterSpacing: "1px" }}>
                  Professional Summary:
                </h6>
                <p className="mil-up mil-mb-30 mil-text-lg" style={{ lineHeight: "1.7", color: "rgba(0,0,0,0.7)" }}>
                  I am a Business Analyst with experience in business process analysis, stakeholder management, requirements gathering, and data analytics.
                </p>
                <p className="mil-up mil-mb-40" style={{ lineHeight: "1.6", color: "rgba(0,0,0,0.6)" }}>
                  Over the past three years, I have worked on digital transformation initiatives, reporting solutions, dashboard development, and business improvement projects. Currently pursuing MSc Business Analytics in Ireland while strengthening expertise in SQL, Power BI, Tableau, Python, and Business Analysis methodologies.
                </p>
                <div className="mil-up">
                  <a href="/about" className="mil-button mil-arrow-place">
                    <span>Read Full Profile</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-5">
              <div className="mil-about-photo mil-mb-60">
                <div className="mil-lines-place"></div>
                <div className="mil-up mil-img-frame" style={{ paddingBottom: "120%" }}>
                  <img src="/img/photo/1.jpg" alt="Jacky Kumar" className="mil-scale" data-value-1="1" data-value-2="1.15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section style={{ background: "#f7f7f7", padding: "90px 0 100px" }}>
        <div className="container">

          {/* Section Header */}
          <div className="row align-items-center" style={{ marginBottom: "50px" }}>
            <div className="col-lg-7">
              <p className="mil-up" style={{ color: "#ff9800", fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                Highlights
              </p>
              <h2 className="mil-up" style={{ marginBottom: "10px" }}>Key <span className="mil-thin">Achievements</span></h2>
              <p className="mil-up" style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", marginBottom: 0, maxWidth: "420px" }}>
                Milestones that define my professional journey
              </p>
            </div>
            <div className="col-lg-5 mil-up" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <a href="/about" className="mil-button mil-arrow-place" style={{ padding: "0 20px 0 28px" }}>
                <span>View Full Profile</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mil-up" style={{ height: "1px", background: "rgba(0,0,0,0.08)", marginBottom: "50px" }}></div>

          {/* Achievement Cards */}
          <div className="row" style={{ rowGap: "24px" }}>
            {[
              { icon: "fas fa-certificate", color: "#ff9800", bg: "rgba(255,152,0,0.1)", title: "ECBA Certified (IIBA)", desc: "Entry Certificate in Business Analysis — globally recognized BA credential from IIBA." },
              { icon: "fas fa-graduation-cap", color: "#2196f3", bg: "rgba(33,150,243,0.1)", title: "MSc Business Analytics", desc: "Currently pursuing postgraduate degree at University of Galway, Ireland." },
              { icon: "fas fa-trophy", color: "#9c27b0", bg: "rgba(156,39,176,0.1)", title: "College Cricket Captain", desc: "Led team in state-level championships — building leadership & team strategy." },
              { icon: "fas fa-chart-bar", color: "#4caf50", bg: "rgba(76,175,80,0.1)", title: "10+ Analytics Projects", desc: "Delivered reporting dashboards, process improvement & digital transformation projects." },
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="mil-up" style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "36px 28px 32px",
                  height: "100%",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}>
                  {/* Icon */}
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "14px",
                    background: item.bg, display: "flex", alignItems: "center",
                    justifyContent: "center", marginBottom: "22px"
                  }}>
                    <i className={item.icon} style={{ color: item.color, fontSize: "22px" }}></i>
                  </div>
                  {/* Title */}
                  <h6 style={{
                    fontWeight: 700, fontSize: "15px",
                    color: "rgba(0,0,0,0.88)", marginBottom: "10px", lineHeight: "1.4"
                  }}>{item.title}</h6>
                  {/* Desc */}
                  <p style={{
                    fontSize: "13px", lineHeight: "1.7",
                    color: "rgba(0,0,0,0.52)", margin: 0
                  }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* My Projects Section */}
      <section style={{ background: "#fff", padding: "90px 0 100px" }}>
        <div className="container">

          {/* Header */}
          <div className="row align-items-center" style={{ marginBottom: "50px" }}>
            <div className="col-lg-7">
              <p className="mil-up" style={{ color: "#ff9800", fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                Portfolio
              </p>
              <h2 className="mil-up" style={{ marginBottom: "10px" }}>My <span className="mil-thin">Projects</span></h2>
              <p className="mil-up" style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", marginBottom: 0, maxWidth: "460px" }}>
                Analytics & business case studies delivering measurable impact
              </p>
            </div>
            <div className="col-lg-5 mil-up" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <a href="/projects" className="mil-button mil-arrow-place" style={{ padding: "0 20px 0 28px" }}>
                <span>View All Projects</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mil-up" style={{ height: "1px", background: "rgba(0,0,0,0.08)", marginBottom: "50px" }}></div>

          {/* Project Cards Grid */}
          <div className="row" style={{ rowGap: "30px" }}>
            {[
              { title: "COVID-19 Data Analysis", tags: ["Python", "Tableau"], impact: "Insights on global transmission & recovery trends", img: "/img/works/1.jpg", link: "/project-1" },
              { title: "Healthcare Analytics", tags: ["SQL", "Power BI"], impact: "Reduced patient waiting times by 14%", img: "/img/works/2.jpg", link: "/project-2" },
              { title: "Credit Risk Analysis", tags: ["Python", "SQL"], impact: "Decreased non-performing loans by 8%", img: "/img/works/3.jpg", link: "/project-3" },
            ].map((project, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <a href={project.link} className="mil-up" style={{ display: "block", textDecoration: "none" }}>
                  <div style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.07)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                    background: "#fff",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    height: "100%"
                  }}>
                    {/* Thumbnail */}
                    <div style={{ position: "relative", overflow: "hidden", height: "200px" }}>
                      <img
                        src={project.img}
                        alt={project.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                      />
                      {/* Overlay on hover */}
                      <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)"
                      }}></div>
                      {/* Tags over image */}
                      <div style={{ position: "absolute", top: "14px", left: "14px", display: "flex", gap: "6px" }}>
                        {project.tags.map((tag, j) => (
                          <span key={j} style={{
                            background: "#ff9800", color: "#000",
                            fontSize: "10px", fontWeight: 700,
                            letterSpacing: "1px", textTransform: "uppercase",
                            padding: "3px 9px", borderRadius: "20px"
                          }}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div style={{ padding: "24px 24px 26px" }}>
                      <h5 style={{ fontSize: "16px", fontWeight: 700, color: "rgba(0,0,0,0.88)", marginBottom: "10px", lineHeight: "1.4" }}>
                        {project.title}
                      </h5>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <i className="fas fa-chart-line" style={{ color: "#ff9800", fontSize: "13px", marginTop: "3px", flexShrink: 0 }}></i>
                        <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", margin: 0, lineHeight: "1.6" }}>
                          {project.impact}
                        </p>
                      </div>
                      <div style={{ marginTop: "18px", display: "flex", alignItems: "center", color: "#ff9800", fontSize: "13px", fontWeight: 600, letterSpacing: "0.5px" }}>
                        <span>View Case Study</span>
                        <i className="fas fa-arrow-right" style={{ fontSize: "11px", marginLeft: "7px" }}></i>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="mil-up" style={{ textAlign: "center", marginTop: "56px" }}>
            <a href="/projects" className="mil-button mil-arrow-place" style={{ padding: "0 30px 0 30px" }}>
              <span>See More Projects</span>
            </a>
            <p style={{ marginTop: "16px", fontSize: "13px", color: "rgba(0,0,0,0.4)", letterSpacing: "0.5px" }}>
              Showing 3 of 6 projects
            </p>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mil-soft-bg mil-p-120-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
                Professional endorsements and academic feedback.
              </span>
            </div>
          </div>

          <h2 className="mil-center mil-up mil-mb-60">Professional <span className="mil-thin">Endorsements:</span> <br />Hear What <span className="mil-thin">They Say!</span></h2>

          <div className="mil-revi-pagination mil-up mil-mb-60"></div>

          <div className="row mil-relative justify-content-center">
            <div className="col-lg-8">
              <div className="mil-slider-nav mil-soft mil-reviews-nav mil-up">
                <div className="mil-slider-arrow mil-prev mil-revi-prev mil-arrow-place"></div>
                <div className="mil-slider-arrow mil-revi-next mil-arrow-place"></div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="mil-quote-icon mil-up">
                <path d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z" fill="#000000" />
              </svg>

              <div className="swiper-container mil-reviews-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="mil-review-frame mil-center" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                      <h5 className="mil-up mil-mb-10">Manager Recommendation</h5>
                      <p className="mil-mb-5 mil-upper mil-up mil-mb-30">Webbyacad Software Solutions</p>
                      <p className="mil-text-xl mil-up">Jacky consistently demonstrated excellent analytical thinking and stakeholder communication skills. He worked diligently on digital transformation and process analysis projects, bridging the gap between technical and business teams.</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mil-review-frame mil-center" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                      <h5 className="mil-up mil-mb-10">Client Recommendation</h5>
                      <p className="mil-mb-5 mil-upper mil-up mil-mb-30">Digital Campaign Projects</p>
                      <p className="mil-text-xl mil-up">Professional, reliable, and highly effective in understanding business requirements. He delivered reports and analysis dashboards that enabled us to gain clearer insight into our marketing efficiency.</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mil-review-frame mil-center" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                      <h5 className="mil-up mil-mb-10">Academic Recommendation</h5>
                      <p className="mil-mb-5 mil-upper mil-up mil-mb-30">University of Galway</p>
                      <p className="mil-text-xl mil-up">Strong analytical mindset with a practical approach to problem-solving. Demonstrated outstanding competence in database management, data mining, and analytical toolsets during coursework.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mil-p-120-120">
        <div className="container mil-center">
          <h2 className="mil-up mil-mb-60">Ready to transform business challenges <br />into <span className="mil-thin">data-driven</span> decisions?</h2>
          <div className="mil-up">
            <a href="/contact" className="mil-button mil-arrow-place">
              <span>Let's Connect</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <HiddenElements />
    </>
  );
}
