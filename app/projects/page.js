"use client";

import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import HiddenElements from '../components/HiddenElements';

const projectData = [
  {
    id: 1,
    title: "COVID-19 Data Analysis Dashboard",
    categories: ["Python", "Tableau", "All"],
    skills: ["Python", "Tableau", "Analytics"],
    problem: "Analyze global COVID-19 trends.",
    analysis: "Processed and cleaned large datasets using Pandas.",
    solution: "Built interactive dashboards and spatial visualizations.",
    impact: "Generated actionable insights on transmission trends and recovery rates.",
    link: "/project-1",
    github: "https://github.com/jacky4458?tab=repositories",
    img: "/img/works/1.jpg"
  },
  {
    id: 2,
    title: "Healthcare Analytics",
    categories: ["Business Analysis", "SQL", "Power BI", "All"],
    skills: ["SQL", "Power BI", "Business Analysis"],
    problem: "Optimize patient intake flows & hospital resource utilization.",
    analysis: "Elicited workflow requirements & ran SQL patient audits.",
    solution: "Developed integrated admissions dashboards in Power BI.",
    impact: "Reduced patient waiting times by 14% and standardized triage.",
    link: "/project-2",
    github: "https://github.com/jacky4458?tab=repositories",
    img: "/img/works/2.jpg"
  },
  {
    id: 3,
    title: "Credit Risk Analysis",
    categories: ["SQL", "Python", "All"],
    skills: ["Python", "SQL", "Data Analytics"],
    problem: "Identify high-risk loan portfolios for credit division.",
    analysis: "Modeled historical defaults using pandas & structured queries.",
    solution: "Built a credit scoring dashboard using Python.",
    impact: "Decreased non-performing loans by 8% and improved risk profiling.",
    link: "/project-3",
    github: "https://github.com/jacky4458?tab=repositories",
    img: "/img/works/3.jpg"
  },
  {
    id: 4,
    title: "Predictive Analytics",
    categories: ["Python", "All"],
    skills: ["Python", "Machine Learning", "Pandas"],
    problem: "Predict customer churn rates for subscription service.",
    analysis: "Ran exploratory analysis and feature engineering on CRM logs.",
    solution: "Designed random forest prediction models and analytics visualizations.",
    impact: "Enabled marketing to target high-risk clients, saving 12% in churn.",
    link: "/project-4",
    github: "https://github.com/jacky4458?tab=repositories",
    img: "/img/works/4.jpg"
  },
  {
    id: 5,
    title: "Sales Dashboard",
    categories: ["Power BI", "All"],
    skills: ["Power BI", "Excel", "Data Modeling"],
    problem: "Unify sales reporting across multiple retail channels.",
    analysis: "Structured star-schema tables from raw transactional databases.",
    solution: "Formulated dynamic DAX measures and drill-downs in Power BI.",
    impact: "Saved sales managers 8 hours weekly in manual spreadsheet compilation.",
    link: "/project-5",
    github: "https://github.com/jacky4458?tab=repositories",
    img: "/img/works/5.jpg"
  },
  {
    id: 6,
    title: "Customer Segmentation Analysis",
    categories: ["Python", "Tableau", "All"],
    skills: ["Python", "Tableau", "Marketing Analytics"],
    problem: "Group retail customer base to run personalized campaigns.",
    analysis: "Conducted RFM analysis and cluster modeling in Jupyter Notebooks.",
    solution: "Published segmentation dashboards to Tableau Server.",
    impact: "Boosted campaign response rate by 18% through target cohort selection.",
    link: "/project-6",
    github: "https://github.com/jacky4458?tab=repositories",
    img: "/img/works/6.jpg"
  },
  {
    id: 7,
    title: "Market Research Dashboard",
    categories: ["Tableau", "Business Analysis", "All"],
    skills: ["Tableau", "Business Analysis", "Competitor Research"],
    problem: "Evaluate market share shifts in the logistics sector.",
    analysis: "Gathered competitor metrics and market survey data.",
    solution: "Created interactive competitor analysis grids in Tableau.",
    impact: "Provided executive board with insights to pivot marketing budgets.",
    link: "/projects",
    github: "https://github.com/jacky4458?tab=repositories",
    img: "/img/photo/2.jpg"
  }
];

// Simulated dynamic GitHub Repositories
const mockRepos = [
  {
    name: "business-analysis-templates",
    description: "A collection of BRD, FRD, User Stories, and BPMN process mapping templates used in professional Business Analysis workshops.",
    updated: "2 days ago",
    topics: ["Business Analysis", "BPMN", "Agile"],
    link: "https://github.com"
  },
  {
    name: "covid19-tableau-python",
    description: "Data preparation scripts in Python (Pandas) and corresponding Tableau workbook files for global pandemic trend visualization.",
    updated: "1 week ago",
    topics: ["Python", "Tableau", "Pandas"],
    link: "https://github.com"
  },
  {
    name: "sql-healthcare-analytics",
    description: "SQL scripts for hospital admission audits, cohort queries, patient demographics, and resource utilization analysis.",
    updated: "2 weeks ago",
    topics: ["SQL", "Healthcare", "Database"],
    link: "https://github.com"
  },
  {
    name: "credit-risk-scoring",
    description: "Predictive model for credit assessment utilizing Random Forest classifiers in Python and structured banking datasets.",
    updated: "3 weeks ago",
    topics: ["Python", "Machine-Learning", "Risk"],
    link: "https://github.com"
  },
  {
    name: "powerbi-sales-intelligence",
    description: "Power BI templates containing advanced DAX formulas, star-schema data models, and dynamic regional sales reports.",
    updated: "1 month ago",
    topics: ["Power-BI", "DAX", "Data-Modeling"],
    link: "https://github.com"
  },
  {
    name: "customer-rfm-segmentation",
    description: "Jupyter Notebook showcasing RFM customer segmentation analysis and K-Means clustering algorithms for marketing personalization.",
    updated: "1 month ago",
    topics: ["Python", "Clustering", "Analytics"],
    link: "https://github.com"
  }
];

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projectData);
    } else {
      setFilteredProjects(projectData.filter(p => p.categories.includes(activeFilter)));
    }
  }, [activeFilter]);

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
            </ul>
            <h1 className="mil-mb-60">My Analytics &amp; <br /> <span className="mil-thin">Business</span> Case Studies</h1>
            <a href="#projects-grid" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>View works</span>
            </a>
          </div>
        </div>
      </div>

      {/* Projects Grid Section */}
      <section id="projects-grid" style={{ background: "#fff", padding: "0 0 100px" }}>
        <div className="container">

          {/* Filter Buttons */}
          <div className="mil-up" style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "60px", paddingTop: "50px" }}>
            {["All", "Business Analysis", "Power BI", "SQL", "Python", "Tableau"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "10px 22px",
                  borderRadius: "30px",
                  border: activeFilter === cat ? "2px solid #ff9800" : "2px solid rgba(0,0,0,0.12)",
                  background: activeFilter === cat ? "#ff9800" : "transparent",
                  color: activeFilter === cat ? "#000" : "rgba(0,0,0,0.6)",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="row" style={{ rowGap: "32px" }}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div className="mil-up" style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 4px 28px rgba(0,0,0,0.07)",
                  background: "#fff",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}>
                  {/* Image */}
                  <div style={{ position: "relative", height: "210px", overflow: "hidden" }}>
                    <img
                      src={project.img}
                      alt={project.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)"
                    }}></div>
                    {/* Skill badges */}
                    <div style={{ position: "absolute", top: "14px", left: "14px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {project.skills.map((skill, idx) => (
                        <span key={idx} style={{
                          background: "#ff9800", color: "#000",
                          fontSize: "10px", fontWeight: 700,
                          letterSpacing: "1px", textTransform: "uppercase",
                          padding: "3px 9px", borderRadius: "20px"
                        }}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: "26px 26px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h5 style={{ fontSize: "17px", fontWeight: 700, color: "rgba(0,0,0,0.88)", marginBottom: "16px", lineHeight: "1.4" }}>
                      {project.title}
                    </h5>

                    {/* Problem / Solution mini grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                      <div>
                        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "4px" }}>Problem</p>
                        <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.6)", lineHeight: "1.6", margin: 0 }}>{project.problem}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "4px" }}>Solution</p>
                        <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.6)", lineHeight: "1.6", margin: 0 }}>{project.solution}</p>
                      </div>
                    </div>

                    {/* Impact */}
                    <div style={{
                      background: "rgba(255,152,0,0.07)",
                      border: "1px solid rgba(255,152,0,0.2)",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px"
                    }}>
                      <i className="fas fa-chart-line" style={{ color: "#ff9800", fontSize: "13px", marginTop: "2px", flexShrink: 0 }}></i>
                      <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.65)", margin: 0, lineHeight: "1.5" }}>{project.impact}</p>
                    </div>

                    {/* Footer buttons */}
                    <div style={{ marginTop: "auto", display: "flex", gap: "12px", alignItems: "center" }}>
                      <a href={project.link} className="mil-button mil-arrow-place" style={{ padding: "0 18px 0 20px", fontSize: "12px", height: "46px" }}>
                        <span>Case Study</span>
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none", fontWeight: 500 }}>
                        <i className="fab fa-github" style={{ fontSize: "16px" }}></i>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      <Footer />
      <HiddenElements />
    </>
  );
}
