import React from "react";
import calybe from "../../assets/calybe.png";
import rnPushdeck from "../../assets/rn-pushdeck.png";
import tripsynk from "../../assets/tripsynk.png";
import "./Portfolio.css";
import { HiArrowUpRight } from "react-icons/hi2";

const projects = [
  {
    title: "RN-Pushdeck",
    tagline: "Self-hosted OTA platform for React Native",
    description:
      "A from-scratch replacement for Microsoft CodePush (retired Mar 2025). End-to-end TypeScript across SDK, CLI, edge API, and dashboard, with two packages live on npm. Cloudflare Workers + Hono, Neon Postgres via Drizzle, and R2 for bundle storage — 22 REST endpoints behind Clerk auth, running on $0/mo infra. A native Kotlin override hooks React Native's getJSBundleFile() to swap JS bundles at runtime.",
    tech: [
      "TypeScript",
      "Kotlin",
      "Cloudflare Workers",
      "Hono",
      "Postgres",
      "Drizzle",
      "Next.js 16",
    ],
    image: rnPushdeck,
    live: "https://rn-pushdeck.vercel.app",
  },
  {
    title: "TripSynk",
    tagline: "Group trips, expenses, settle-up — building at Aurelion",
    description:
      "Cross-platform RN app for trip planning, expense splitting, and group payments. I built a custom Nitro native module for UPI deep-link payments (Android & iOS), OCR receipt parsing, and a min-cashflow settle-up algorithm. Feature-based modules with atomic + domain-driven design, Zustand + TanStack Query + MMKV for state, Supabase and Firebase on the backend.",
    tech: [
      "React Native",
      "TypeScript",
      "Nitro Modules",
      "Supabase",
      "Firebase",
      "Zustand",
      "TanStack Query",
    ],
    image: tripsynk,
     status: "in development",

    live: "https://www.tripsynk.in",
  },
  {
    title: "Calybe AI",
    tagline: "AI fitness tracker — live on Google Play",
    description:
      "Cross-platform fitness app with 150+ installs on Google Play. React Native + TypeScript with offline-first sync via WatermelonDB, Redux Toolkit, and TanStack Query. Node.js + Express backend on MongoDB with Redis caching and BullMQ job queues; a primary–fallback Gemini AI pipeline with retry-with-backoff handles rate limits and transient failures. Google/OTP auth, Firebase Crashlytics, push notifications, Sentry observability, and an OTA pipeline via Firebase Hosting.",
    tech: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Gemini AI",
      "Firebase",
    ],
    image: calybe,
    live: "https://play.google.com/store/apps/details?id=com.caloriemate&pcampaignid=web_share",
  },
];

function Portfolio() {
  return (
    <div className="projects">
      {projects.map((p, idx) => {
        const Wrapper = p.live ? "a" : "div";
        const wrapperProps = p.live
          ? { href: p.live, target: "_blank", rel: "noreferrer" }
          : {};
        return (
          <Wrapper
            key={idx}
            className={`project ${p.live ? "" : "project-static"}`}
            {...wrapperProps}
          >
            <div className="project-text">
              <div className="project-head">
                <h3 className="project-title">
                  {p.title}
                  {p.live ? (
                    <HiArrowUpRight className="project-arrow" />
                  ) : (
                    <span className="project-status">{p.status}</span>
                  )}
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
          </Wrapper>
        );
      })}
    </div>
  );
}

export default Portfolio;
