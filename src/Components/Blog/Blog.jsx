import React from "react";
import "./Blog.css";
import { HiArrowUpRight } from "react-icons/hi2";

const posts = [
  {
    title: "Google Maps Integration in React Native: Complete Guide",
    blurb:
      "How I actually got Google Maps working in React Native end-to-end — the gotchas nobody warns you about.",
    link: "https://dev.to/asyncarijit/stop-struggling-with-maps-in-react-native-heres-the-complete-guide-28ii",
    date: "2025",
    tag: "react native",
  },
  {
    title: "Understanding React Native Internals",
    blurb:
      "A deep dive into how React Native bridges your JavaScript to native performance — the architecture under the hood.",
    link: "https://dev.to/arijit_das_24c46c6f02b06b/i-used-ai-to-learn-react-native-deeply-so-you-dont-have-to-4jpo",
    date: "2025",
    tag: "react native",
  },
  {
    title: "Building Your Own OTA Update System for React Native",
    blurb:
      "Microsoft sunset App Center; here's a practical alternative for shipping over-the-air updates to React Native apps.",
    link: "https://dev.to/arijit_das_24c46c6f02b06b/building-your-own-ota-update-system-for-react-native-post-app-center-era-5hll",
    date: "2025",
    tag: "react native",
  },
  {
    title: "Implementing Redis Caching in Golang on Windows",
    blurb:
      "Beginner-friendly walkthrough for wiring Redis into a Go project to cut database load on hot read paths.",
    link: "https://dev.to/arijit_das_24c46c6f02b06b/how-to-implement-redis-caching-in-golang-for-beginners-a-step-by-step-guidewindows-edition-1g1a",
    date: "2024",
    tag: "go · redis",
  },
];

function Blog() {
  return (
    <div className="posts">
      {posts.map((p, i) => (
        <a
          key={i}
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="post"
        >
          <div className="post-meta">
            <span className="post-date">{p.date}</span>
            <span className="post-tag">{p.tag}</span>
          </div>
          <div className="post-body">
            <h3 className="post-title">
              {p.title}
              <HiArrowUpRight className="post-arrow" />
            </h3>
            <p className="post-blurb">{p.blurb}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Blog;
