import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: isMobile ? "1rem 1.25rem" : "1.2rem 3rem",
        background: "rgba(5,10,18,0.85)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(99,179,237,0.08)",
      }}>

        {/* Logo */}
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#63B3ED", letterSpacing: "0.04em" }}>
          NY<span style={{ color: "#fff" }}>.</span>
        </span>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "2.5rem" }}>
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "#94A3B8",
                textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase",
                transition: "color 0.2s"
              }}
                onMouseEnter={e => e.target.style.color = "#63B3ED"}
                onMouseLeave={e => e.target.style.color = "#94A3B8"}
              >{l}</a>
            ))}
          </div>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <a href="mailto:niteshyadav604@gmail.com" style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#63B3ED",
            border: "1px solid #63B3ED", padding: "0.45rem 1.1rem", borderRadius: "4px",
            textDecoration: "none", letterSpacing: "0.1em", transition: "background 0.2s, color 0.2s"
          }}
            onMouseEnter={e => { e.target.style.background = "#63B3ED"; e.target.style.color = "#050A12"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#63B3ED"; }}
          >Hire Me</a>
        )}

        {/* Hamburger button */}
        {isMobile && (
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "6px", display: "flex", flexDirection: "column",
              gap: "5px", zIndex: 102
            }}
          >
            <span style={{
              display: "block", width: "22px", height: "2px", background: "#63B3ED", borderRadius: "2px",
              transition: "transform 0.3s ease",
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: "22px", height: "2px", background: "#63B3ED", borderRadius: "2px",
              transition: "opacity 0.3s ease",
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: "22px", height: "2px", background: "#63B3ED", borderRadius: "2px",
              transition: "transform 0.3s ease",
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }} />
          </button>
        )}
      </nav>

      {/* Mobile full-screen drawer */}
      {isMobile && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 101,
          background: "rgba(5,10,18,0.98)",
          backdropFilter: "blur(24px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.38s cubic-bezier(0.16,1,0.3,1)",
        }}>
          {links.map((l, i) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                fontSize: "2rem", color: "#CBD5E0",
                textDecoration: "none", textTransform: "uppercase",
                padding: "0.9rem 2rem",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s ease ${0.05 + i * 0.06}s, transform 0.4s ease ${0.05 + i * 0.06}s, color 0.2s`,
              }}
              onTouchStart={e => e.currentTarget.style.color = "#63B3ED"}
              onTouchEnd={e => e.currentTarget.style.color = "#CBD5E0"}
            >{l}</a>
          ))}

          <div style={{ width: "40px", height: "1px", background: "rgba(99,179,237,0.2)", margin: "1.5rem 0" }} />

          <a href="mailto:niteshyadav604@gmail.com"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", fontWeight: 700,
              color: "#050A12", background: "#63B3ED",
              padding: "0.85rem 2.5rem", borderRadius: "4px",
              textDecoration: "none", letterSpacing: "0.1em",
              boxShadow: "0 0 32px rgba(99,179,237,0.3)",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.4s ease 0.35s, transform 0.4s ease 0.35s",
            }}
          >Hire Me</a>
        </div>
      )}
    </>
  );
}