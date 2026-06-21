import "../public/css/plugins/bootstrap-grid.css";
import "../public/css/plugins/swiper.min.css";
import "../public/css/plugins/fancybox.min.css";
import "../public/css/style.css";

import Script from 'next/script';
import TransitionProvider from './components/TransitionProvider';
import AshleyEffect from './components/AshleyEffect';

export const metadata = {
  title: "Jacky Kumar - Business Analyst & Data Analyst Portfolio",
  description: "Professional portfolio of Jacky Kumar, Business Analyst & Data Analyst, ECBA Certified. Specializing in requirements gathering, process mapping, SQL, Power BI, Tableau, and Python.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* We load jQuery, Swiper, Fancybox, and GSAP beforehand to ensure they are defined in window on hydration */}
        <Script src="/js/plugins/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/swiper.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/fancybox.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/smooth-scroll.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/ScrollTo.min.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </head>
      <body>
        <TransitionProvider>
          <AshleyEffect />
          {/* wrapper */}
          <div className="mil-wrapper" id="top">

            {/* cursor */}
            <div className="mil-ball">
              <span className="mil-icon-1">
                <svg viewBox="0 0 128 128">
                  <path d="M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2	c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2	L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9	z" />
                </svg>
              </span>
              <div className="mil-more-text">More</div>
              <div className="mil-choose-text">Сhoose</div>
            </div>
            {/* cursor end */}

            {/* preloader - hidden */}
            <div className="mil-preloader" style={{ display: 'none' }}>
              <div className="mil-preloader-animation">
                <div className="mil-pos-abs mil-animation-1">
                  <p className="mil-h3 mil-muted mil-thin">Data-Driven</p>
                  <p className="mil-h3 mil-muted">Business</p>
                  <p className="mil-h3 mil-muted mil-thin">Insights</p>
                </div>
                <div className="mil-pos-abs mil-animation-2">
                  <div className="mil-reveal-frame">
                    <p className="mil-reveal-box"></p>
                    <p className="mil-h3 mil-muted mil-thin">jackykumar.com</p>
                  </div>
                </div>
              </div>
            </div>
            {/* preloader end */}

            {/* scrollbar progress */}
            <div className="mil-progress-track">
              <div className="mil-progress"></div>
            </div>
            {/* scrollbar progress end */}

            {/* menu */}
            <div className="mil-menu-frame">
              {/* frame clone */}
              <div className="mil-frame-top">
                <a href="/" className="mil-logo">Jacky.</a>
                <div className="mil-menu-btn">
                  <span></span>
                </div>
              </div>
              {/* frame clone end */}
              <div className="container">
                <div className="mil-menu-content">
                  <div className="row">
                    <div className="col-xl-5">

                      <nav className="mil-main-menu" id="swupMenu">
                        <ul>
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/about">About & Resume</a>
                          </li>
                          <li>
                            <a href="/projects">Projects</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                      </nav>

                    </div>
                    <div className="col-xl-7">

                      <div className="mil-menu-right-frame">
                        <div className="mil-animation-in">
                          <div className="mil-animation-frame">
                            <div className="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2"></div>
                          </div>
                        </div>
                        <div className="mil-menu-right">
                          <div className="row">
                            <div className="col-lg-8 mil-mb-60">

                              <h6 className="mil-muted mil-mb-30">Featured Projects</h6>

                              <ul className="mil-menu-list">
                                <li><a href="/project-1" className="mil-light-soft">COVID-19 Data Analysis</a></li>
                                <li><a href="/project-2" className="mil-light-soft">Healthcare Analytics</a></li>
                                <li><a href="/project-3" className="mil-light-soft">Credit Risk Analysis</a></li>
                                <li><a href="/project-4" className="mil-light-soft">Predictive Analytics</a></li>
                                <li><a href="/project-5" className="mil-light-soft">Sales Dashboard</a></li>
                                <li><a href="/project-6" className="mil-light-soft">Customer Segmentation</a></li>
                              </ul>

                            </div>
                            <div className="col-lg-4 mil-mb-60">

                              <h6 className="mil-muted mil-mb-30">Useful links</h6>

                              <ul className="mil-menu-list">
                                <li><a href="/about#resume" className="mil-light-soft">Download Resume</a></li>
                                <li><a href="/contact" className="mil-light-soft">Contact Details</a></li>
                                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mil-light-soft">LinkedIn Profile</a></li>
                                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mil-light-soft">GitHub Profile</a></li>
                              </ul>

                            </div>
                          </div>
                          <div className="mil-divider mil-mb-60"></div>
                          <div className="row justify-content-between">

                            <div className="col-lg-6 mil-mb-60">

                              <h6 className="mil-muted mil-mb-30">Location</h6>

                              <p className="mil-light-soft mil-up">Dublin, Ireland</p>

                            </div>
                            <div className="col-lg-6 mil-mb-60">

                              <h6 className="mil-muted mil-mb-30">Get in touch</h6>

                              <p className="mil-light-soft">Email: <span className="mil-no-wrap">jackykumar435@gmail.com</span></p>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* menu end */}

            {/* curtain */}
            <div className="mil-curtain"></div>
            {/* curtain end */}

            {/* frame */}
            <div className="mil-frame">
              <div className="mil-frame-top">
                <a href="/" className="mil-logo">Jacky.</a>
                <div className="mil-menu-btn">
                  <span></span>
                </div>
              </div>
              <div className="mil-frame-bottom">
                <div className="mil-current-page"></div>
                <div className="mil-back-to-top">
                  <a href="#top" className="mil-link mil-dark mil-arrow-place">
                    <span>Back to top</span>
                  </a>
                </div>
              </div>
            </div>
            {/* frame end */}

            {/* content */}
            <div className="mil-content">
              <div id="swupMain" className="mil-main-transition">
                {children}
              </div>
            </div>
            {/* content end */}

          </div>
          {/* wrapper end */}
        </TransitionProvider>
      </body>
    </html>
  );
}
