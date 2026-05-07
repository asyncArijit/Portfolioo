import React from "react";
import "./Resumec.css";
import { IoDocumentSharp } from "react-icons/io5";

const experiences = [
  {
    company: "Aurelion",
    role: "Mobile App Developer Intern",
    period: "May 2025 — Present",
    location: "Chennai, India",
    bullets: [
      "Building KittyMagic from scratch in React Native — a social app for organising women's kitty parties.",
      "Designed responsive UIs and wired complex backend APIs for real-time data sync.",
      "Using Zustand for state, TanStack Query for server data — kept the app smooth as features grew.",
    ],
  },
  {
    company: "CoRider",
    role: "Mobile App Developer Intern",
    period: "Dec 2024 — Apr 2025",
    location: "Bangalore, India",
    bullets: [
      "Shipped intuitive React Native screens that lifted app engagement.",
      "Worked across teams to integrate UI with backend services for a smoother end-to-end experience.",
    ],
  },
  {
    company: "The Investor Diwan",
    role: "Full-Stack Developer Intern",
    period: "Jun 2024 — Sep 2024",
    location: "Doha, Qatar",
    bullets: [
      "Built a responsive student panel in React + Redux + Tailwind across 30+ pages, cutting load time by ~30%.",
      "Integrated Node.js APIs for cleaner data flow and a smoother user experience.",
      "Delivered milestones ahead of schedule and contributed to a maintainable, scalable codebase.",
    ],
  },
  {
    company: "Sehr Technologies",
    role: "Software Developer Intern",
    period: "Aug 2022 — Oct 2022",
    location: "Pune, India",
    bullets: [
      "Optimised React + Node.js performance for ~25% faster load and longer sessions.",
      "Designed responsive Tailwind UIs that improved customer satisfaction.",
    ],
  },
];

const education = [
  {
    school: "IIIT Gwalior",
    degree: "Integrated B.Tech (IT) + MBA",
    period: "2019 — 2025",
  },
];

function Resume() {
  return (
    <div className="resume">
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <article className="job" key={idx}>
            <div className="job-meta">
              <span className="job-period">{exp.period}</span>
            </div>
            <div className="job-body">
              <h3 className="job-title">
                {exp.role}{" "}
                <span className="job-at">
                  &middot; <span className="job-company">{exp.company}</span>
                </span>
              </h3>
              <span className="job-loc">{exp.location}</span>
              <ul className="job-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="edu-block">
        <span className="edu-label">Education</span>
        <div className="edu-list">
          {education.map((e, i) => (
            <div key={i} className="edu-row">
              <div>
                <h4 className="edu-school">{e.school}</h4>
                <span className="edu-degree">{e.degree}</span>
              </div>
              <span className="edu-period">{e.period}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        className="cv-link"
        href="https://drive.google.com/file/d/1n_7TppP_v3DthGZ2F8THRHhgj9MisDF_/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <IoDocumentSharp />
        <span>Download full CV</span>
      </a>
    </div>
  );
}

export default Resume;
