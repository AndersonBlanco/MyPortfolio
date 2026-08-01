"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const projects = [
  {
    index: "01",
    title: "Delirio",
    type: "AI product · iOS · Product design",
    description:
      "A conversational fitness experience that turns everyday messages into personal momentum, designed around clarity, trust, and low-friction action.",
    accent: "acid",
  },
  {
    index: "02",
    title: "People Graph",
    type: "Enterprise software · Data systems",
    description:
      "A relationship-first employee directory that makes expertise, mobility, teams, and opportunities easier to discover across a complex organization.",
    accent: "violet",
  },
  {
    index: "03",
    title: "Signal / Noise",
    type: "Editorial interface · AI curation",
    description:
      "A private reading environment for comparing stories, tracing contradictions, and transforming a crowded information stream into deliberate insight.",
    accent: "coral",
  },
];

const capabilities = [
  "Product engineering",
  "Interaction design",
  "Applied AI systems",
  "Creative direction",
  "Data experiences",
  "Rapid prototyping",
];

export default function Home() {
  const [motionReduced, setMotionReduced] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMotionReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (motionReduced) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--pointer-x", x.toFixed(3));
    event.currentTarget.style.setProperty("--pointer-y", y.toFixed(3));
  }

  function resetPointer() {
    heroRef.current?.style.setProperty("--pointer-x", "0");
    heroRef.current?.style.setProperty("--pointer-y", "0");
  }

  return (
    <div className={motionReduced ? "site motion-reduced" : "site"}>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Anderson Blanco, home">
          AB<span aria-hidden="true">®</span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="motion-control"
          type="button"
          aria-pressed={motionReduced}
          onClick={() => setMotionReduced((current) => !current)}
        >
          <span className="motion-dot" aria-hidden="true" />
          {motionReduced ? "Motion off" : "Motion on"}
        </button>
      </header>

      <main id="main-content">
        <section
          id="top"
          className="hero"
          ref={heroRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          aria-labelledby="hero-title"
        >
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow">
              <span>Creative technologist</span>
              <span>New York / Everywhere</span>
            </p>

            <h1 id="hero-title">
              Code with
              <span className="hero-serif"> taste.</span>
              <br />
              Ideas with
              <span className="hero-outline"> voltage.</span>
            </h1>

            <div className="hero-bottom">
              <p>
                I design and build digital products where engineering precision
                meets cultural instinct.
              </p>
              <a className="round-link" href="#work">
                Explore work
                <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          <div className="ladder-stage" aria-hidden="true">
            <div className="ladder-shadow" />
            <div className="ladder">
              <div className="ladder-rail ladder-rail-left" />
              <div className="ladder-rail ladder-rail-right" />
              {Array.from({ length: 18 }, (_, index) => (
                <span
                  className="ladder-rung"
                  key={index}
                  style={{ "--rung": index } as CSSProperties}
                />
              ))}
            </div>
          </div>

          <p className="hero-index" aria-hidden="true">
            Portfolio / 2026
          </p>
        </section>

        <section id="about" className="manifesto section-shell" aria-labelledby="about-title">
          <div className="section-label">
            <span>01</span>
            <span>Perspective</span>
          </div>

          <div className="manifesto-copy">
            <p className="kicker">Not decoration. Direction.</p>
            <h2 id="about-title">
              Technology becomes memorable when it has a point of view.
            </h2>
            <div className="manifesto-notes">
              <p>
                My practice moves between software engineering, product strategy,
                interface design, and visual experimentation.
              </p>
              <p>
                The objective is simple: make ambitious systems feel obvious,
                expressive, and human.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="work section-shell" aria-labelledby="work-title">
          <div className="section-heading">
            <div className="section-label">
              <span>02</span>
              <span>Selected work</span>
            </div>
            <h2 id="work-title">Built to move people.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-topline">
                  <span>{project.index}</span>
                  <span>{project.type}</span>
                </div>

                <div className="project-visual" aria-hidden="true">
                  <div className="project-sphere" />
                  <div className="project-frame project-frame-one" />
                  <div className="project-frame project-frame-two" />
                  <span className="project-monogram">{project.title.charAt(0)}</span>
                </div>

                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href="#contact" aria-label={`Discuss the ${project.title} project`}>
                    View concept <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities section-shell" aria-labelledby="capabilities-title">
          <div className="section-label">
            <span>03</span>
            <span>Capabilities</span>
          </div>

          <div className="capability-panel">
            <h2 id="capabilities-title">From first signal to finished system.</h2>
            <ul>
              {capabilities.map((capability, index) => (
                <li key={capability}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{capability}</span>
                  <span aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="lab section-shell" aria-labelledby="lab-title">
          <div className="lab-copy">
            <div className="section-label light-label">
              <span>04</span>
              <span>Current experiment</span>
            </div>
            <p className="kicker">The infinite ladder</p>
            <h2 id="lab-title">A visual system for ambition without a ceiling.</h2>
            <p>
              A CSS-built spatial illusion: no heavy 3D library, no inaccessible
              canvas dependency, and no sacrifice in performance or meaning.
            </p>
          </div>

          <div className="lab-object" aria-hidden="true">
            <div className="lab-ring ring-one" />
            <div className="lab-ring ring-two" />
            <div className="lab-ring ring-three" />
            <div className="lab-core">∞</div>
          </div>
        </section>

        <section id="contact" className="contact section-shell" aria-labelledby="contact-title">
          <div className="contact-intro">
            <div className="section-label">
              <span>05</span>
              <span>Contact</span>
            </div>
            <p>Open to product, engineering, and creative technology collaborations.</p>
          </div>

          <h2 id="contact-title">
            Let’s make something
            <span> impossible to ignore.</span>
          </h2>

          <div className="contact-actions">
            <a className="contact-primary" href="mailto:hello@example.com">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/AndersonBlanco">GitHub</a>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Anderson Blanco</p>
        <p>Designed in New York. Built with Next.js.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
