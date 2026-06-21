"use client";

import React, { useRef, useState, useEffect } from 'react';
import Footer from './components/Footer';
import HiddenElements from './components/HiddenElements';

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

              {/* Middle: Centered Video Player */}
              <div className="row justify-content-center mil-mb-50">
                <div className="col-lg-10">
                  <div
                    ref={wrapperRef}
                    className="mil-up"
                    onMouseMove={resetHideTimer}
                    onMouseEnter={resetHideTimer}
                    onMouseLeave={() => { if (hideTimerRef.current) clearTimeout(hideTimerRef.current); setShowControls(false); }}
                    onClick={resetHideTimer}
                    style={{
                      position: "relative",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
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

              {/* Bottom: Description & Buttons */}
              <div className="row justify-content-center mil-mb-40" style={{ marginTop: "20px" }}>
                <div className="col-lg-8">
                  <p className="mil-light-soft mil-text-lg mil-mb-0" style={{ fontSize: "16px", lineHeight: "1.7", color: "rgba(255,255,255,0.6)" }}>
                    Transforming Business Challenges into Data-Driven Decisions Through Analytics, Stakeholder Collaboration, and Process Improvement.
                  </p>
                </div>
              </div>

              {/* Custom Hero Button styles & layout */}
              <style>{`
                .home-btn-group {
                  display: flex;
                  justify-content: center;
                  flex-wrap: wrap;
                  gap: 16px;
                  margin-top: 35px;
                  margin-bottom: 50px;
                }
                .custom-home-btn {
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
                  cursor: pointer;
                }
                .home-btn-primary {
                  background: #ff9800;
                  color: #000000 !important;
                  border: 1px solid #ff9800;
                }
                .home-btn-primary:hover {
                  background: #f57c00;
                  border-color: #f57c00;
                  transform: translateY(-3px);
                  box-shadow: 0 8px 25px rgba(255, 152, 0, 0.35);
                }
                .home-btn-secondary {
                  background: transparent;
                  color: #ff9800 !important;
                  border: 1px solid rgba(255, 152, 0, 0.4);
                }
                .home-btn-secondary:hover {
                  background: rgba(255, 152, 0, 0.08);
                  border-color: #ff9800;
                  transform: translateY(-3px);
                  box-shadow: 0 8px 25px rgba(255, 152, 0, 0.15);
                }
                .home-btn-tertiary {
                  background: rgba(255, 255, 255, 0.06);
                  color: #ffffff !important;
                  border: 1px solid rgba(255, 255, 255, 0.12);
                }
                .home-btn-tertiary:hover {
                  background: rgba(255, 255, 255, 0.12);
                  border-color: rgba(255, 255, 255, 0.3);
                  transform: translateY(-3px);
                  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
                }
              `}</style>
              <div className="home-btn-group mil-up">
                <a href="/about#resume" className="custom-home-btn home-btn-primary">
                  <i className="far fa-file-alt" style={{ marginRight: "8px", fontSize: "14px" }}></i>
                  Download Resume
                </a>
                <a href="/projects" className="custom-home-btn home-btn-secondary">
                  <i className="fas fa-chart-bar" style={{ marginRight: "8px", fontSize: "14px" }}></i>
                  View Projects
                </a>
                <a href="/contact" className="custom-home-btn home-btn-tertiary">
                  <i className="fas fa-envelope" style={{ marginRight: "8px", fontSize: "14px" }}></i>
                  Contact Me
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


      {/* Why You Need Me Section */}
      <section style={{ background: "#f7f7f7", padding: "90px 0 100px" }}>
        <div className="container">

          {/* Section Header */}
          <div className="row align-items-center" style={{ marginBottom: "50px" }}>
            <div className="col-lg-7">
              <h2 className="mil-up" style={{ marginBottom: "10px" }}>
                <strong>Why</strong> <span className="mil-thin">You Need Me?</span>
              </h2>
              <p className="mil-up" style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", marginBottom: 0, maxWidth: "420px" }}>
                A unique blend of skills that drives real business outcomes
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="mil-up" style={{ height: "1px", background: "rgba(0,0,0,0.08)", marginBottom: "50px" }}></div>

          {/* Cards */}
          <div className="row" style={{ rowGap: "24px" }}>
            {[
              {
                icon: "fas fa-industry",
                title: "Industry Knowledge",
                desc: "Deep understanding of business domains — from finance to healthcare — enabling me to ask the right questions and deliver contextually relevant insights.",
                color: "#ff9800",
                bg: "rgba(255,152,0,0.1)"
              },
              {
                icon: "fas fa-briefcase",
                title: "Business & Data Expertise",
                desc: "Bridging the gap between business stakeholders and data — translating complex requirements into actionable analytical solutions.",
                color: "#2196f3",
                bg: "rgba(33,150,243,0.1)"
              },
              {
                icon: "fas fa-chart-line",
                title: "Analytics Expertise",
                desc: "Proficient in SQL, Power BI, Tableau, and Python — delivering dashboards and reports that turn raw data into clear, confident decisions.",
                color: "#9c27b0",
                bg: "rgba(156,39,176,0.1)"
              },
              {
                icon: "fas fa-comments",
                title: "Strong Communication",
                desc: "Exceptional ability to present complex data stories to non-technical audiences, ensuring stakeholder alignment and buy-in at every project stage.",
                color: "#4caf50",
                bg: "rgba(76,175,80,0.1)"
              },
              {
                icon: "fas fa-lightbulb",
                title: "Problem Solver",
                desc: "A structured, analytical approach to every challenge — breaking down ambiguity, identifying root causes, and delivering pragmatic, data-backed solutions.",
                color: "#e91e63",
                bg: "rgba(233,30,99,0.1)"
              },
              {
                icon: "fas fa-bullseye",
                title: "Results-Oriented",
                desc: "Focused on delivering measurable impact — from reducing costs to improving efficiency — every recommendation is backed by data and tied to business goals.",
                color: "#ff5722",
                bg: "rgba(255,87,34,0.1)"
              },
              {
                icon: "fas fa-sync-alt",
                title: "Continuous Learner",
                desc: "Consistently upskilling through certifications, academic study, and hands-on projects — staying ahead of evolving tools, methodologies, and industry trends.",
                color: "#00bcd4",
                bg: "rgba(0,188,212,0.1)"
              },
              {
                icon: "fas fa-users",
                title: "Collaborative Team Player",
                desc: "Proven ability to work cross-functionally with developers, designers, and business leads — building trust and driving alignment across diverse stakeholder groups.",
                color: "#8bc34a",
                bg: "rgba(139,195,74,0.1)"
              },
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
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.13)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
                  }}
                >
                  {/* Icon Box */}
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "14px",
                    background: item.bg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "22px"
                  }}>
                    <i className={item.icon} style={{ color: item.color, fontSize: "22px" }}></i>
                  </div>

                  {/* Title */}
                  <h6 style={{
                    fontWeight: 700, fontSize: "15px",
                    color: "rgba(0,0,0,0.88)", marginBottom: "10px", lineHeight: "1.4"
                  }}>{item.title}</h6>

                  {/* Description */}
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

      {/* About Me Section */}
      <section id="about-me" style={{ background: "#ffffff", padding: "100px 0 100px" }}>
        <div className="container">
          <div className="row justify-content-between align-items-center" style={{ rowGap: "60px" }}>

            {/* Text Column */}
            <div className="col-lg-6 col-xl-5">
              <p className="mil-up" style={{ color: "#ff9800", fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
                About Me
              </p>
              <h2 className="mil-up" style={{ marginBottom: "28px" }}>
                <strong>About</strong> <span className="mil-thin">Me</span>
              </h2>
              <h6 className="mil-up" style={{ color: "#ff9800", letterSpacing: "1px", marginBottom: "20px", fontSize: "14px", fontWeight: 600 }}>
                Professional Summary:
              </h6>
              <p className="mil-up mil-text-lg" style={{ lineHeight: "1.8", color: "rgba(0,0,0,0.7)", marginBottom: "20px" }}>
                I am a Business Analyst with experience in business process analysis, stakeholder management, requirements gathering, and data analytics.
              </p>
              <p className="mil-up" style={{ lineHeight: "1.8", color: "rgba(0,0,0,0.55)", marginBottom: "40px" }}>
                Over the past three years, I have worked on digital transformation initiatives, reporting solutions, dashboard development, and business improvement projects. Currently pursuing MSc Business Analytics in Ireland while strengthening expertise in SQL, Power BI, Tableau, Python, and Business Analysis methodologies.
              </p>
              <div className="mil-up">
                <a href="/about" className="mil-button mil-arrow-place">
                  <span>Read Full Profile</span>
                </a>
              </div>
            </div>

            {/* Image Column */}
            <div className="col-lg-5">
              <div className="mil-about-photo" style={{ position: "relative" }}>
                <div className="mil-lines-place"></div>
                <div className="mil-up mil-img-frame" style={{ paddingBottom: "115%", borderRadius: "16px", overflow: "hidden" }}>
                  <img src="/img/photo/1.jpg" alt="Jacky Kumar" className="mil-scale" data-value-1="1" data-value-2="1.15" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* My Experience Section */}
      <section style={{ background: "#f7f7f7", padding: "90px 0 100px" }}>
        <div className="container">

          {/* Section Header */}
          <div className="row align-items-center" style={{ marginBottom: "50px" }}>
            <div className="col-lg-7">
              <p className="mil-up" style={{ color: "#ff9800", fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                Career
              </p>
              <h2 className="mil-up" style={{ marginBottom: "10px" }}>
                My <span className="mil-thin">Experience</span>
              </h2>
              <p className="mil-up" style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", marginBottom: 0, maxWidth: "420px" }}>
                Professional journey that shaped my analytical expertise
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="mil-up" style={{ height: "1px", background: "rgba(0,0,0,0.08)", marginBottom: "50px" }}></div>

          {/* Three Company Cards */}
          <div className="row" style={{ rowGap: "30px" }}>

            {/* Company 1 */}
            <div className="col-lg-4">
              <div className="mil-up" style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "40px 36px",
                height: "100%",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                border: "1px solid rgba(0,0,0,0.06)"
              }}>
                {/* Company Header */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "18px", marginBottom: "28px" }}>
                  <div style={{
                    width: "54px", height: "54px", borderRadius: "14px", flexShrink: 0,
                    background: "rgba(255,152,0,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <i className="fas fa-building" style={{ color: "#ff9800", fontSize: "22px" }}></i>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 700, fontSize: "17px", color: "rgba(0,0,0,0.88)", marginBottom: "4px" }}>
                      Webbyacad Software Solutions
                    </h5>
                    <p style={{ fontSize: "13px", color: "#ff9800", fontWeight: 600, marginBottom: "2px" }}>
                      Business Analyst
                    </p>
                    <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.4)", margin: 0 }}>
                      <i className="fas fa-calendar-alt" style={{ marginRight: "5px" }}></i>Jan 2021 – Dec 2023
                      &nbsp;&nbsp;<i className="fas fa-map-marker-alt" style={{ marginRight: "5px" }}></i>India
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", marginBottom: "24px" }}></div>

                {/* Bullet Points */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    "Led requirements gathering sessions with 10+ business stakeholders across departments.",
                    "Developed and maintained process flow diagrams and BRDs for 5+ digital transformation projects.",
                    "Built Power BI dashboards reducing manual reporting time by 40%.",
                    "Collaborated with development teams to translate business needs into technical specifications.",
                    "Conducted gap analysis and delivered actionable recommendations to senior management.",
                  ].map((point, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{
                        minWidth: "24px", height: "24px", borderRadius: "50%",
                        background: "rgba(255,152,0,0.12)",
                        color: "#ff9800", fontSize: "11px", fontWeight: 700,
                        display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px"
                      }}>{i + 1}</span>
                      <p style={{ fontSize: "13.5px", lineHeight: "1.7", color: "rgba(0,0,0,0.6)", margin: 0 }}>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Company 2 */}
            <div className="col-lg-4">
              <div className="mil-up" style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "40px 36px",
                height: "100%",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                border: "1px solid rgba(0,0,0,0.06)"
              }}>
                {/* Company Header */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "18px", marginBottom: "28px" }}>
                  <div style={{
                    width: "54px", height: "54px", borderRadius: "14px", flexShrink: 0,
                    background: "rgba(33,150,243,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <i className="fas fa-graduation-cap" style={{ color: "#2196f3", fontSize: "22px" }}></i>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 700, fontSize: "17px", color: "rgba(0,0,0,0.88)", marginBottom: "4px" }}>
                      University of Galway
                    </h5>
                    <p style={{ fontSize: "13px", color: "#2196f3", fontWeight: 600, marginBottom: "2px" }}>
                      MSc Business Analytics (Student)
                    </p>
                    <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.4)", margin: 0 }}>
                      <i className="fas fa-calendar-alt" style={{ marginRight: "5px" }}></i>Sep 2024 – Present
                      &nbsp;&nbsp;<i className="fas fa-map-marker-alt" style={{ marginRight: "5px" }}></i>Ireland
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", marginBottom: "24px" }}></div>

                {/* Bullet Points */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    "Studying advanced modules in Data Mining, Machine Learning, and Business Intelligence.",
                    "Completed hands-on projects using SQL, Python, Tableau, and Power BI.",
                    "Applied statistical modelling techniques to real-world business datasets.",
                    "Achieved ECBA certification from IIBA — globally recognised BA credential.",
                    "Developed strong expertise in Agile, BPMN, and stakeholder management frameworks.",
                  ].map((point, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{
                        minWidth: "24px", height: "24px", borderRadius: "50%",
                        background: "rgba(33,150,243,0.12)",
                        color: "#2196f3", fontSize: "11px", fontWeight: 700,
                        display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px"
                      }}>{i + 1}</span>
                      <p style={{ fontSize: "13.5px", lineHeight: "1.7", color: "rgba(0,0,0,0.6)", margin: 0 }}>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Company 3 */}
            <div className="col-lg-4">
              <div className="mil-up" style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "40px 36px",
                height: "100%",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                border: "1px solid rgba(0,0,0,0.06)"
              }}>
                {/* Company Header */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "18px", marginBottom: "28px" }}>
                  <div style={{
                    width: "54px", height: "54px", borderRadius: "14px", flexShrink: 0,
                    background: "rgba(156,39,176,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <i className="fas fa-laptop-code" style={{ color: "#9c27b0", fontSize: "22px" }}></i>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 700, fontSize: "17px", color: "rgba(0,0,0,0.88)", marginBottom: "4px" }}>
                      4 Square Digital Pvt Ltd
                    </h5>
                    <p style={{ fontSize: "13px", color: "#9c27b0", fontWeight: 600, marginBottom: "2px" }}>
                      Digital Consultant
                    </p>
                    <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.4)", margin: 0 }}>
                      <i className="fas fa-calendar-alt" style={{ marginRight: "5px" }}></i>Aug 2021 – Sep 2022
                      &nbsp;&nbsp;<i className="fas fa-map-marker-alt" style={{ marginRight: "5px" }}></i>India
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", marginBottom: "16px" }}></div>

                {/* Description */}
                <p style={{ fontSize: "13.5px", lineHeight: "1.7", color: "rgba(0,0,0,0.6)", marginBottom: "20px" }}>
                  Assisted marketing and campaign administrators with performance metrics auditing and insights extraction.
                </p>

                {/* Bullet Points */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    "Reporting dashboards formulation & client queries management.",
                    "Digital campaign performance analysis.",
                    "Translating raw transaction logs into structural business observations.",
                  ].map((point, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{
                        minWidth: "24px", height: "24px", borderRadius: "50%",
                        background: "rgba(156,39,176,0.12)",
                        color: "#9c27b0", fontSize: "11px", fontWeight: 700,
                        display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px"
                      }}>{i + 1}</span>
                      <p style={{ fontSize: "13.5px", lineHeight: "1.7", color: "rgba(0,0,0,0.6)", margin: 0 }}>{point}</p>
                    </li>
                  ))}
                </ul>

                {/* Key Achievement */}
                <div style={{
                  marginTop: "24px",
                  padding: "14px 16px",
                  background: "rgba(156,39,176,0.05)",
                  borderLeft: "3px solid #9c27b0",
                  borderRadius: "0 8px 8px 0"
                }}>
                  <p style={{ fontSize: "13px", lineHeight: "1.7", color: "rgba(0,0,0,0.65)", margin: 0 }}>
                    <strong style={{ color: "#9c27b0" }}>Key Achievement:</strong> Helped improve digital performance reporting accuracy and enhanced client satisfaction rates.
                  </p>
                </div>
              </div>
            </div>

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
