import React from "react";
import auctionx from "../../assets/auctionx.avif";
import caloriemate from "../../assets/caloriemate.avif";
import netflixGPT from "../../assets/netflixGPT.avif";
import "./Portfolio.css";
import { HiArrowUpRight } from "react-icons/hi2";

const projects = [
  {
    title: "AuctionX",
    tagline: "Online auction marketplace",
    description:
      "Real-time bidding marketplace built around Go services with Kafka for event streaming and Redis for hot state. Handles concurrent bids without races.",
    tech: ["React", "Go", "MySQL", "Redis", "Kafka"],
    image: auctionx,
    live: "https://auctionxa.vercel.app/",
  },
  {
    title: "Calybe AI",
    tagline: "AI fitness tracker — live on Play Store",
    description:
      "Mobile app that turns photos of meals into calorie estimates using Google Gemini. Built end-to-end in React Native + Node, currently used by real users.",
    tech: ["React Native", "Node.js", "MongoDB", "Google Gemini"],
    image: caloriemate,
    live: "https://play.google.com/store/apps/details?id=com.caloriemate&pcampaignid=web_share",
  },
  {
    title: "Netflix GPT",
    tagline: "AI movie recommender",
    description:
      "Type what you feel like watching in plain English; OpenAI ranks matching titles from the TMDB catalog. Clean, snappy, single-page React app.",
    tech: ["React", "Tailwind CSS", "OpenAI API"],
    image: netflixGPT,
    live: "https://netflixgpt-new.vercel.app",
  },
];

function Portfolio() {
  return (
    <div className="projects">
      {projects.map((p, idx) => (
        <a
          key={idx}
          href={p.live}
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <div className="project-text">
            <div className="project-head">
              <h3 className="project-title">
                {p.title}
                <HiArrowUpRight className="project-arrow" />
              </h3>
              <span className="project-tag">{p.tagline}</span>
            </div>
            <p className="project-desc">{p.description}</p>
            <ul className="project-tech">
              {p.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="project-image-wrap">
            <img className="project-image" src={p.image} alt={p.title} />
          </div>
        </a>
      ))}
    </div>
  );
}

export default Portfolio;
