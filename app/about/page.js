"use client";

import React, { useRef, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import HiddenElements from '../components/HiddenElements';

export default function Page() {
  const videoRef = useRef(null);
  const hideTimerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  const toggleFullscreen = () => {
    const el = wrapperRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      (el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen).call(el);
      setIsFullscreen(true);
    } else {
      (document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen).call(document);
      setIsFullscreen(false);
    }
    resetHideTimer();
  };

  const resetHideTimer = () => {
    setShowControls(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setShowControls(false), 5000);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) { videoRef.current.pause(); setIsPlaying(false); }
    else { videoRef.current.play(); setIsPlaying(true); }
    resetHideTimer();
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
    resetHideTimer();
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 0;
    setCurrentTime(cur);
    setDuration(dur);
    setProgress(dur ? (cur / dur) * 100 : 0);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = ratio * (videoRef.current.duration || 0);
    resetHideTimer();
  };

  const formatTime = (s) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

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
                  <div className="mil-avatar" style={{ border: "2px solid #ff9800", borderRadius: "50%", overflow: "hidden" }}>
                    <img src="/jacky1.png" alt="Jacky Kumar" />
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
                <div className="mil-up mil-img-frame" style={{ "paddingBottom": "130%", borderRadius: "16px", overflow: "hidden", border: "2px solid #ff9800" }}>
                  <img src="/jacky1.png" alt="Jacky Kumar" className="mil-scale" data-value-1="1" data-value-2="1.2" />
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
                <div
                  ref={wrapperRef}
                  className="mil-up"
                  onMouseMove={resetHideTimer}
                  onMouseEnter={resetHideTimer}
                  onMouseLeave={() => { if (hideTimerRef.current) clearTimeout(hideTimerRef.current); setShowControls(false); }}
                  onClick={resetHideTimer}
                  style={{
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                    background: "#1a1a1a",
                    paddingBottom: "56.25%",
                    height: 0,
                    cursor: showControls ? "default" : "none"
                  }}>
                  <video
                    ref={videoRef}
                    src="/video1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.85
                    }}
                  />

                  {/* Video Controls Bar — auto-hide */}
                  <div style={{
                    position: "absolute",
                    bottom: 0, left: 0, right: 0,
                    padding: "10px 18px 14px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                    opacity: showControls ? 1 : 0,
                    pointerEvents: showControls ? "auto" : "none",
                    transition: "opacity 0.4s ease"
                  }}>
                    {/* Timeline scrubber */}
                    <div
                      onClick={handleSeek}
                      title="Seek"
                      style={{
                        width: "100%", height: "4px",
                        background: "rgba(255,255,255,0.2)",
                        borderRadius: "4px",
                        marginBottom: "12px",
                        cursor: "pointer",
                        position: "relative"
                      }}
                    >
                      {/* Filled portion */}
                      <div style={{
                        height: "100%",
                        width: `${progress}%`,
                        background: "linear-gradient(to right, #ff9800, #f57c00)",
                        borderRadius: "4px",
                        transition: "width 0.1s linear",
                        position: "relative"
                      }}>
                        {/* Scrubber dot */}
                        <div style={{
                          position: "absolute", right: "-6px", top: "50%",
                          transform: "translateY(-50%)",
                          width: "12px", height: "12px",
                          borderRadius: "50%",
                          background: "#ff9800",
                          boxShadow: "0 0 0 3px rgba(255,152,0,0.3)"
                        }}></div>
                      </div>
                    </div>

                    {/* Buttons row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      {/* Play / Pause */}
                      <button
                        onClick={togglePlay}
                        title={isPlaying ? "Pause" : "Play"}
                        style={{
                          width: "34px", height: "34px", borderRadius: "50%",
                          background: "rgba(255,152,0,0.9)",
                          border: "none", cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0, transition: "transform 0.2s",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      >
                        <i className={isPlaying ? "fas fa-pause" : "fas fa-play"}
                          style={{ color: "#000", fontSize: "11px", marginLeft: isPlaying ? "0" : "2px" }}></i>
                      </button>

                      {/* Time display */}
                      <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.8)", fontVariantNumeric: "tabular-nums", flexShrink: 0 }}>
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>

                      {/* Spacer */}
                      <div style={{ flex: 1 }}></div>

                      {/* Mute / Unmute */}
                      <button
                        onClick={toggleMute}
                        title={isMuted ? "Unmute" : "Mute"}
                        style={{
                          width: "34px", height: "34px", borderRadius: "50%",
                          background: isMuted ? "rgba(255,255,255,0.12)" : "rgba(255,152,0,0.9)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0, transition: "transform 0.2s, background 0.2s",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      >
                        <i className={isMuted ? "fas fa-volume-mute" : "fas fa-volume-up"}
                          style={{ color: isMuted ? "rgba(255,255,255,0.7)" : "#000", fontSize: "12px" }}></i>
                      </button>

                      {/* Fullscreen */}
                      <button
                        onClick={toggleFullscreen}
                        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                        style={{
                          width: "34px", height: "34px", borderRadius: "50%",
                          background: "rgba(255,255,255,0.12)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0, transition: "transform 0.2s, background 0.2s",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.background = "rgba(255,152,0,0.9)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
                      >
                        <i className={isFullscreen ? "fas fa-compress" : "fas fa-expand"}
                          style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px" }}></i>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="mil-p-120-120">
        <style>{`
          .resume-btn-group {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 16px;
            margin-top: 30px;
          }
          .custom-resume-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 14px 28px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 30px;
            text-decoration: none !important;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
            cursor: pointer;
          }
          .btn-pdf-resume {
            background: #ff9800;
            color: #ffffff !important;
            border: 1px solid #ff9800;
          }
          .btn-pdf-resume:hover {
            background: #f57c00;
            border-color: #f57c00;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(255, 152, 0, 0.25);
          }
          .btn-cover-letter {
            background: rgba(255, 152, 0, 0.05);
            color: #ff9800 !important;
            border: 1px solid rgba(255, 152, 0, 0.25);
          }
          .btn-cover-letter:hover {
            background: rgba(255, 152, 0, 0.1);
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(255, 152, 0, 0.08);
          }
          .btn-linkedin-profile {
            background: #0a66c2;
            color: #ffffff !important;
            border: 1px solid #0a66c2;
          }
          .btn-linkedin-profile:hover {
            background: #004182;
            border-color: #004182;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(10, 102, 194, 0.25);
          }
        `}</style>
        <div className="container">
          <div className="mil-recruiter-banner mil-up" style={{
            background: "rgba(255, 152, 0, 0.05)",
            border: "1px solid rgba(255, 152, 0, 0.2)",
            borderRadius: "16px",
            padding: "50px 40px",
            textAlign: "center"
          }}>
            <h2 className="mil-mb-20">Download My Resume</h2>
            <p className="mil-dark-soft mil-text-lg mil-mb-40" style={{ maxWidth: "600px", margin: "0 auto 40px" }}>
              Get direct access to my comprehensive curriculum vitae, cover letter, or view my up-to-date professional profile on LinkedIn.
            </p>
            <div className="resume-btn-group">
              <a href="#." className="custom-resume-btn btn-pdf-resume">
                <i className="fas fa-file-pdf" style={{ marginRight: "8px", fontSize: "15px" }}></i>
                PDF Resume
              </a>
              <a href="#." className="custom-resume-btn btn-cover-letter">
                <i className="fas fa-file-alt" style={{ marginRight: "8px", fontSize: "15px" }}></i>
                Cover Letter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="custom-resume-btn btn-linkedin-profile">
                <i className="fab fa-linkedin-in" style={{ marginRight: "8px", fontSize: "15px" }}></i>
                LinkedIn Profile
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
      <section className="mil-p-120-60 custom-accordion-timeline-section" style={{ position: "relative" }}>
        <style>{`
          .custom-accordion-timeline-section .mil-accordion-group {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 12px;
            padding: 24px 28px;
            margin-bottom: 20px !important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.01);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .custom-accordion-timeline-section .mil-accordion-group:hover {
            border-color: rgba(255, 152, 0, 0.3);
            box-shadow: 0 10px 30px rgba(255, 152, 0, 0.06);
            transform: translateY(-2px);
          }
          .custom-accordion-timeline-section .mil-accordion-menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            user-select: none;
            padding: 0;
            margin: 0;
            background: transparent !important;
          }
          .custom-accordion-timeline-section .mil-accordion-menu p {
            font-size: 14px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 0;
            display: flex;
            align-items: center;
            gap: 10px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .custom-accordion-timeline-section .mil-symbol {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(255, 152, 0, 0.08);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: all 0.3s ease;
          }
          .custom-accordion-timeline-section .mil-symbol span {
            font-size: 16px;
            color: #ff9800;
            font-weight: 600;
            line-height: 1;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .custom-accordion-timeline-section .mil-accordion-content p {
            padding-top: 16px;
            font-size: 14px;
            color: #555;
            line-height: 1.6;
            margin-bottom: 0;
          }

          /* Timeline */
          .custom-timeline {
            position: relative;
            padding-left: 35px;
          }
          .custom-timeline::before {
            content: "";
            position: absolute;
            left: 15px;
            top: 10px;
            bottom: 10px;
            width: 2px;
            background: linear-gradient(to bottom, #ff9800 0%, rgba(255, 152, 0, 0.15) 100%);
          }
          .custom-timeline-item {
            position: relative;
            margin-bottom: 25px;
          }
          .custom-timeline-item:last-child {
            margin-bottom: 0;
          }
          .custom-timeline-dot {
            position: absolute;
            left: -30px;
            top: 20px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #ffffff;
            border: 3px solid #ff9800;
            z-index: 1;
            transition: all 0.3s ease;
            box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.12);
          }
          .custom-timeline-item:hover .custom-timeline-dot {
            background: #ff9800;
            transform: scale(1.2);
            box-shadow: 0 0 0 5px rgba(255, 152, 0, 0.2);
          }
          .custom-timeline-card {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 12px;
            padding: 16px 20px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.015);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .custom-timeline-card:hover {
            border-color: rgba(255, 152, 0, 0.3);
            box-shadow: 0 10px 25px rgba(255, 152, 0, 0.06);
            transform: translateX(4px);
          }
          .custom-timeline-year {
            font-size: 12px;
            font-weight: 700;
            color: #ff9800;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 4px;
          }
          .custom-timeline-title {
            font-size: 15px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 0;
          }
        `}</style>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <h2 className="mil-up mil-mb-30">Achievement Wall</h2>

              <div className="mil-accordion-group mil-up mil-mb-30">
                <div className="mil-accordion-menu">
                  <p className="mil-link mil-dark mil-upper">🏆 ECBA Certified</p>
                  <div className="mil-symbol"><span className="mil-plus">+</span><span className="mil-minus">-</span></div>
                </div>
                <div className="mil-accordion-content">
                  <p className="mil-dark-soft">Received the Entry Certificate in Business Analysis (ECBA) from the International Institute of Business Analysis (IIBA).</p>
                </div>
              </div>

              <div className="mil-accordion-group mil-up mil-mb-30">
                <div className="mil-accordion-menu">
                  <p className="mil-link mil-dark mil-upper">🏆 College Cricket Team Captain</p>
                  <div className="mil-symbol"><span className="mil-plus">+</span><span className="mil-minus">-</span></div>
                </div>
                <div className="mil-accordion-content">
                  <p className="mil-dark-soft">Led my collegiate cricket squad in state-level championships, refining skills in leadership, strategy, and team cohesion.</p>
                </div>
              </div>

              <div className="mil-accordion-group mil-up mil-mb-30">
                <div className="mil-accordion-menu">
                  <p className="mil-link mil-dark mil-upper">🏆 Organized GTC-2K19 College Fest</p>
                  <div className="mil-symbol"><span className="mil-plus">+</span><span className="mil-minus">-</span></div>
                </div>
                <div className="mil-accordion-content">
                  <p className="mil-dark-soft">Served as the lead coordinator of operations for our college's premier tech festival with over 2000 attendees.</p>
                </div>
              </div>

              <div className="mil-accordion-group mil-up mil-mb-30">
                <div className="mil-accordion-menu">
                  <p className="mil-link mil-dark mil-upper">🏆 Advanced Data Analytics Internship</p>
                  <div className="mil-symbol"><span className="mil-plus">+</span><span className="mil-minus">-</span></div>
                </div>
                <div className="mil-accordion-content">
                  <p className="mil-dark-soft">Completed a rigorous internship focusing on building analytical dashboards and querying large relational databases.</p>
                </div>
              </div>

              <div className="mil-accordion-group mil-up mil-mb-30">
                <div className="mil-accordion-menu">
                  <p className="mil-link mil-dark mil-upper">🏆 Multiple Data Analytics Certifications</p>
                  <div className="mil-symbol"><span className="mil-plus">+</span><span className="mil-minus">-</span></div>
                </div>
                <div className="mil-accordion-content">
                  <p className="mil-dark-soft">Obtained specialization certificates for Tableau, SQL, Python, and Power BI tools.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mil-mb-60">
              <h2 className="mil-up mil-mb-60">My Learning Journey</h2>
              <div className="custom-timeline">
                <div className="custom-timeline-item mil-up">
                  <div className="custom-timeline-dot"></div>
                  <div className="custom-timeline-card">
                    <div className="custom-timeline-year">2021</div>
                    <h5 className="custom-timeline-title">Digital Consultant</h5>
                  </div>
                </div>

                <div className="custom-timeline-item mil-up">
                  <div className="custom-timeline-dot"></div>
                  <div className="custom-timeline-card">
                    <div className="custom-timeline-year">2022</div>
                    <h5 className="custom-timeline-title">Business Analyst</h5>
                  </div>
                </div>

                <div className="custom-timeline-item mil-up">
                  <div className="custom-timeline-dot"></div>
                  <div className="custom-timeline-card">
                    <div className="custom-timeline-year">2024</div>
                    <h5 className="custom-timeline-title">MSc Business Analytics</h5>
                  </div>
                </div>

                <div className="custom-timeline-item mil-up">
                  <div className="custom-timeline-dot"></div>
                  <div className="custom-timeline-card">
                    <div className="custom-timeline-year">2025</div>
                    <h5 className="custom-timeline-title">ECBA Certification</h5>
                  </div>
                </div>

                <div className="custom-timeline-item mil-up">
                  <div className="custom-timeline-dot"></div>
                  <div className="custom-timeline-card">
                    <div className="custom-timeline-year">2026</div>
                    <h5 className="custom-timeline-title">Business Analyst Opportunities in Ireland</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Showcase */}
      <section className="mil-p-120-90 mil-soft-bg" style={{ position: "relative" }}>
        <style>{`
          .custom-cert-card {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 16px;
            padding: 40px 30px;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none !important;
          }
          .custom-cert-card:hover {
            transform: translateY(-8px);
            border-color: #ff9800;
            box-shadow: 0 20px 40px rgba(255, 152, 0, 0.12);
          }
          .custom-cert-icon {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: rgba(255, 152, 0, 0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            color: #ff9800;
            font-size: 24px;
            transition: all 0.4s ease;
          }
          .custom-cert-card:hover .custom-cert-icon {
            background: #ff9800;
            color: #ffffff;
            transform: scale(1.1);
          }
          .custom-cert-title {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 12px;
            text-transform: none;
          }
          .custom-cert-desc {
            font-size: 13px;
            color: #666;
            margin-bottom: 0;
            line-height: 1.5;
          }
        `}</style>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="mil-up mil-mb-20 mil-center">Certification Showcase</h2>
              <p className="mil-dark-soft mil-up mil-mb-60 mil-center" style={{ maxWidth: "600px", margin: "0 auto 60px" }}>
                A collection of my professional credentials and academic specializations in business analysis, data visualization, and analytics.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6 mil-mb-30">
              <a href="#." className="custom-cert-card mil-up">
                <div className="custom-cert-icon">
                  <i className="fas fa-award"></i>
                </div>
                <h5 className="custom-cert-title">ECBA (IIBA)</h5>
                <p className="custom-cert-desc">Entry Certificate in Business Analysis</p>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mil-mb-30">
              <a href="#." className="custom-cert-card mil-up">
                <div className="custom-cert-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h5 className="custom-cert-title">Tableau</h5>
                <p className="custom-cert-desc">Desktop Specialist &amp; Visual Analytics</p>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mil-mb-30">
              <a href="#." className="custom-cert-card mil-up">
                <div className="custom-cert-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h5 className="custom-cert-title">SQL</h5>
                <p className="custom-cert-desc">Advanced Querying &amp; Relational Databases</p>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mil-mb-30">
              <a href="#." className="custom-cert-card mil-up">
                <div className="custom-cert-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h5 className="custom-cert-title">Power BI</h5>
                <p className="custom-cert-desc">Business Intelligence &amp; Dashboard Design</p>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mil-mb-30">
              <a href="#." className="custom-cert-card mil-up">
                <div className="custom-cert-icon">
                  <i className="fab fa-python"></i>
                </div>
                <h5 className="custom-cert-title">Python</h5>
                <p className="custom-cert-desc">Data Processing, Pandas, &amp; Visualization</p>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mil-mb-30">
              <a href="#." className="custom-cert-card mil-up">
                <div className="custom-cert-icon">
                  <i className="fas fa-calculator"></i>
                </div>
                <h5 className="custom-cert-title">Data Analytics</h5>
                <p className="custom-cert-desc">Various Specialized Academic Credentials</p>
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
