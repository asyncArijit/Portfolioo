import React from "react";
import "./Home.css";
import About from "../../Components/About/About";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Blog from "../../Components/Blog/Blog";
import Resume from "../../Components/Resume/Resume";
import { ImLinkedin } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoDevTo } from "react-icons/bi";

const sections = [
  { id: "about", num: "01", label: "About" },
  { id: "work", num: "02", label: "Work" },
  { id: "projects", num: "03", label: "Projects" },
  { id: "writing", num: "04", label: "Writing" },
];

function Home() {
  const [active, setActive] = React.useState("about");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#about" className="brand">
            Arijit Das
          </a>
          <nav className="topnav">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`topnav-item ${active === s.id ? "active" : ""}`}
              >
                <span className="topnav-num">{s.num}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        {/* HERO */}
        <section className="hero" id="hero">
          <span className="hero-eyebrow">
            <span className="hero-dot" />
            Available for SWE roles &middot; 2026
          </span>
          <h1 className="hero-name">Arijit Das</h1>
          <p className="hero-line">
            Full-stack developer based in India. I build production web and
            mobile apps &mdash; currently shipping React Native at{" "}
            <span className="hero-em">Aurelion</span>.
          </p>

          <div className="hero-meta">
            <a className="hero-meta-item" href="mailto:arijitme11@gmail.com">
              <span className="hero-meta-label">email</span>
              <span>arijitme11@gmail.com</span>
            </a>
            <div className="hero-meta-item">
              <span className="hero-meta-label">location</span>
              <span>India</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-label">edu</span>
              <span>IIIT Gwalior &rsquo;25</span>
            </div>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/asyncArijit"
              target="_blank"
              rel="noreferrer"
              className="hero-social"
              title="GitHub"
            >
              <VscGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/asyncarijit"
              target="_blank"
              rel="noreferrer"
              className="hero-social"
              title="LinkedIn"
            >
              <ImLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com/AsyncArijit"
              target="_blank"
              rel="noreferrer"
              className="hero-social"
              title="X (Twitter)"
            >
              <FaSquareXTwitter />
              <span>X</span>
            </a>
            <a
              href="https://dev.to/arijit_das_24c46c6f02b06b"
              target="_blank"
              rel="noreferrer"
              className="hero-social"
              title="dev.to"
            >
              <BiLogoDevTo />
              <span>dev.to</span>
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <header className="section-head">
            <span className="section-num">01</span>
            <h2 className="section-title">About</h2>
          </header>
          <About />
        </section>

        <section id="work" className="section">
          <header className="section-head">
            <span className="section-num">02</span>
            <h2 className="section-title">Work</h2>
          </header>
          <Resume />
        </section>

        <section id="projects" className="section">
          <header className="section-head">
            <span className="section-num">03</span>
            <h2 className="section-title">Projects</h2>
          </header>
          <Portfolio />
        </section>

        <section id="writing" className="section">
          <header className="section-head">
            <span className="section-num">04</span>
            <h2 className="section-title">Writing</h2>
          </header>
          <Blog />
        </section>

        <footer className="foot">
          <span>
            &copy; Arijit Das &middot; 2026
          </span>
          <a href="#hero" className="foot-back">
            back to top &uarr;
          </a>
        </footer>
      </main>
    </div>
  );
}

export default Home;
