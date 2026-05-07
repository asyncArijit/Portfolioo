import React from "react";
import "./About.css";

function About() {
  const skillData = [
    {
      category: "Languages",
      items: ["JavaScript / TypeScript", "Go", "C++"],
    },
    {
      category: "Frontend",
      items: ["React", "React Native", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Go (net/http)", "REST APIs"],
    },
    {
      category: "Data & Infra",
      items: ["MongoDB", "MySQL", "Redis", "Kafka", "Firebase", "Docker"],
    },
  ];

  return (
    <div className="about">
      <p className="about-p">
        I&rsquo;m a full-stack developer comfortable across the stack and
        especially happy in React, React Native and Go. Across four internships
        in India and Qatar I&rsquo;ve shipped real product work &mdash; a
        fitness app that&rsquo;s now live on the Play Store, an online auction
        marketplace built on Go and Kafka, and an AI movie recommender wired to
        OpenAI.
      </p>
      <p className="about-p">
        I gravitate toward apps that feel fast and stay readable. Lately
        I&rsquo;ve been going deeper into backend systems &mdash; caching with
        Redis, async work with Kafka, and writing about both on{" "}
        <a
          className="inline-link"
          href="https://dev.to/arijit_das_24c46c6f02b06b"
          target="_blank"
          rel="noreferrer"
        >
          dev.to
        </a>
        .
      </p>

      <div className="skills">
        {skillData.map((group) => (
          <div key={group.category} className="skill-row">
            <span className="skill-label">{group.category}</span>
            <div className="skill-items">
              {group.items.map((item, i) => (
                <span key={i} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
