import React from "react";
import "./Resumec.css";
import { IoDocumentSharp } from "react-icons/io5";

const experiences = [
  {
    company: "Aurelion",
    role: "Mobile App Developer",
    period: "May 2025 — Present",
    location: "Chennai, India · Remote",
    bullets: [
      "Building KittyMagic and TripSynk in React Native + TypeScript — project setup, architecture decisions, native modules, and feature work.",
      "Designed scalable, feature-based modules with atomic + domain-driven design; state via Zustand, TanStack Query, and MMKV; Supabase and Firebase backends.",
      "Authored a custom Nitro native module for UPI deep-link payments (Android & iOS) and built OCR receipt parsing with a min-cashflow settle-up algorithm.",
      "Optimised rendering with InteractionManager and native caching; validated performance with Firebase and React Native DevTools.",
    ],
  },
  {
    company: "CoRider",
    role: "Mobile App Developer Intern",
    period: "Dec 2024 — Apr 2025",
    location: "Bangalore, India · Remote",
    bullets: [
      "Developed and refined core authentication and ride-sharing features — ride posting, trip discovery — in React Native.",
      "Integrated Firebase Crashlytics, reducing app crashes by ~15% and improving stability across beta users.",
      "Optimised screen rendering and API calls with TanStack Query, improving responsiveness on low-end Android devices.",
    ],
  },
  {
    company: "The Investor Diwan",
    role: "Full-Stack Developer Intern",
    period: "Jun 2024 — Sep 2024",
    location: "Doha, Qatar · Remote",
    bullets: [
      "Implemented a responsive UI in React + Redux + Tailwind CSS, improving accessibility across 30+ pages.",
      "Optimised UI performance, cutting load times by ~30%, and integrated Node.js APIs for efficient data handling.",
    ],
  },
  {
    company: "Sehr Technologies",
    role: "Software Developer Intern",
    period: "Aug 2022 — Oct 2022",
    location: "Pune, India · Remote",
    bullets: [
      "Streamlined web performance in React.js and Node.js — ~25% faster loads and ~20% longer user sessions.",
      "Revamped client UIs in Tailwind CSS for better responsiveness and maintainability.",
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
        href="https://drive.google.com/file/d/1n9hmbeqd64fyVw62C_xlcsCHl8ToGz1o/view?usp=sharing"
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
