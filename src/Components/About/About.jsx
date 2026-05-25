import React from "react";
import "./About.css";

function About() {
  const skillData = [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Go", "SQL", "C++"],
    },
    {
      category: "Frameworks",
      items: [
        "React",
        "React Native",
        "Next.js",
        "Node.js",
        "Express",
        "Hono",
        "Redux",
        "Tailwind CSS",
      ],
    },
    {
      category: "Databases & Backend",
      items: [
        "MongoDB",
        "MySQL",
        "Postgres",
        "Redis",
        "Kafka",
        "Supabase",
        "Firebase",
        "REST APIs",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "Cloudflare Workers",
        "Vercel",
        "AWS",
        "Docker",
        "GitHub Actions",
        "Sentry",
      ],
    },
  ];

  return (
    <div className="about">
      <p className="about-p">
        I&rsquo;m a full-stack developer who lives mostly in React Native and
        TypeScript these days. I currently build mobile apps at{" "}
        <span className="about-em">Aurelion</span> &mdash; shipping
        <span className="about-em"> TripSynk</span> and{" "}
        <span className="about-em">KittyMagic</span>, writing native modules
        when the platform makes me, and keeping the architecture honest as
        features grow.
      </p>
      <p className="about-p">
        On the side I built{" "}
        <a
          className="inline-link"
          href="https://rn-pushdeck.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          RN-Pushdeck
        </a>{" "}
        &mdash; a self-hosted OTA update platform for React Native, replacing
        Microsoft CodePush. Two packages live on npm, edge backend on Cloudflare
        Workers + Hono, Postgres, and R2. I&rsquo;m most at home where mobile
        meets distributed systems &mdash; caching, queues, async work &mdash;
        and I write about it occasionally on{" "}
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
