import { useState, useEffect } from "react";
import ScrollReveal from "./Scrollreveal";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const projects = [
    {
      num: "01", title: "Quora Clone",
      desc: "A full-featured Q&A platform with user auth, rich text answers, upvoting, and comment threads.",
      tech: ["React", "Node.js", "MongoDB", "Express"], live: "#", code: "#"
    },
    {
      num: "02", title: "Chat Application",
      desc: "Real-time messaging app with WebSocket support, rooms, typing indicators, and read receipts.",
      tech: ["React", "Socket.io", "Node.js", "Redis"], live: "#", code: "#"
    },
    {
      num: "03", title: "Expense Tracker",
      desc: "Personal finance dashboard with budgets, category breakdowns, and monthly trend analytics.",
      tech: ["React", "Express", "MongoDB", "Chart.js"], live: "#", code: "#"
    },
  ];

  return (
    <section id="projects" style={{
      padding: isMobile ? "4rem 1.25rem" : "6rem 3rem",
      maxWidth: "1100px", margin: "0 auto"
    }}>

      {/* Heading */}
      <ScrollReveal variant="up" duration="0.7s">
       
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: "clamp(1.8rem, 6vw, 2.5rem)", color: "#fff",
          marginBottom: isMobile ? "2rem" : "3.5rem"
        }}>Selected Work</h2>
      </ScrollReveal>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((p, i) => (
          <ScrollReveal key={i} variant="up" delay={`${i * 0.12}s`} duration="0.8s">

            {isMobile ? (
              /* ── MOBILE CARD ── */
              <div style={{
                padding: "1.75rem 0",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}>
                {/* Top row: number + title + buttons */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
                    <span style={{
                      fontFamily: "'Syne', sans-serif", fontWeight: 800,
                      fontSize: "1.4rem", color: "rgba(99,179,237,0.2)"
                    }}>{p.num}</span>
                    <h3 style={{
                      fontFamily: "'Syne', sans-serif", fontWeight: 700,
                      fontSize: "1.1rem", color: "#fff", margin: 0
                    }}>{p.title}</h3>
                  </div>

                  {/* Inline buttons — icon style on mobile */}
                  <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0, marginLeft: "0.75rem" }}>
                    <a href={p.live} style={{
                      fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#050A12",
                      background: "#63B3ED", padding: "0.4rem 0.75rem", borderRadius: "4px",
                      textDecoration: "none", fontWeight: 700, letterSpacing: "0.05em", whiteSpace: "nowrap"
                    }}>Live ↗</a>
                    <a href={p.code} style={{
                      fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#94A3B8",
                      padding: "0.4rem 0.75rem", borderRadius: "4px", textDecoration: "none",
                      border: "1px solid rgba(148,163,184,0.2)", whiteSpace: "nowrap"
                    }}>Code →</a>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", color: "#718096",
                  fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 0.9rem"
                }}>{p.desc}</p>

                {/* Tech tags */}
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#63B3ED",
                      background: "rgba(99,179,237,0.08)", border: "1px solid rgba(99,179,237,0.2)",
                      padding: "0.2rem 0.55rem", borderRadius: "3px", letterSpacing: "0.06em"
                    }}>{t}</span>
                  ))}
                </div>
              </div>

            ) : (
              /* ── DESKTOP ROW ── */
              <div style={{
                display: "grid", gridTemplateColumns: "80px 1fr auto", gap: "2.5rem", alignItems: "center",
                padding: "2.5rem 0", borderTop: "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer", transition: "background 0.3s, padding-left 0.3s", borderRadius: "6px"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,179,237,0.04)"; e.currentTarget.style.paddingLeft = "1rem"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.paddingLeft = "0"; }}
              >
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem", color: "rgba(99,179,237,0.2)" }}>{p.num}</span>

                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#fff", marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#718096", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "500px", marginBottom: "1rem" }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                    {p.tech.map(t => (
                      <span key={t} style={{
                        fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#63B3ED",
                        background: "rgba(99,179,237,0.08)", border: "1px solid rgba(99,179,237,0.2)",
                        padding: "0.25rem 0.65rem", borderRadius: "3px", letterSpacing: "0.07em"
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", alignItems: "flex-end" }}>
                  <a href={p.live} style={{
                    fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#050A12",
                    background: "#63B3ED", padding: "0.5rem 1.2rem", borderRadius: "4px",
                    textDecoration: "none", fontWeight: 700, letterSpacing: "0.07em", whiteSpace: "nowrap"
                  }}>Live ↗</a>
                  <a href={p.code} style={{
                    fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#94A3B8",
                    padding: "0.5rem 1.2rem", borderRadius: "4px", textDecoration: "none",
                    border: "1px solid rgba(148,163,184,0.2)", whiteSpace: "nowrap"
                  }}>Code →</a>
                </div>
              </div>
            )}

          </ScrollReveal>
        ))}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
      </div>
    </section>
  );
}