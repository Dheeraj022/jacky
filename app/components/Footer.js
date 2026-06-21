"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div className="mil-muted mil-logo mil-up mil-mb-30">Jacky.</div>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      <li className="mil-up mil-active">
                        <a href="/">Home</a>
                      </li>
                      <li className="mil-up">
                        <a href="/about">About</a>
                      </li>
                      <li className="mil-up">
                        <a href="/projects">Projects</a>
                      </li>
                      <li className="mil-up">
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-6 col-lg-5">
                  <ul className="mil-menu-list mil-up mil-mb-60">
                    <li><a href="/about#resume" className="mil-light-soft">Download Resume</a></li>
                    <li><a href="/contact" className="mil-light-soft">Contact Details</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mil-light-soft">LinkedIn Profile</a></li>
                    <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mil-light-soft">GitHub Profile</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">Location</h6>
                  <p className="mil-light-soft mil-up">Dublin, Ireland</p>
                </div>
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">Get in touch</h6>
                  <p className="mil-light-soft mil-up">Email: <span className="mil-no-wrap">jackykumar435@gmail.com</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 mil-mb-60">
              <div className="mil-vert-between">
                <div className="mil-mb-30">
                  <ul className="mil-social-icons mil-up">
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"> <i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon"> <i className="fab fa-github"></i></a></li>
                    <li><a href="mailto:jackykumar435@gmail.com" className="social-icon"> <i className="far fa-envelope"></i></a></li>
                  </ul>
                </div>
                <p className="mil-light-soft mil-up">© Copyright {new Date().getFullYear()} - Jacky Kumar. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
