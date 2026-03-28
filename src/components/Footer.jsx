import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const links = [
    { label: "LeetCode", href: "https://leetcode.com/u/Nitesh045/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/niteshyadav045" },
    { label: "GitHub",   href: "https://github.com/Nitesh045" },
  ];

  const linkStyle = {
    fontFamily: "'DM Mono', monospace",
    fontSize: isMobile ? "0.75rem" : "0.68rem",
    color: "#4A5568",
    textDecoration: "none",
    transition: "color 0.2s",
    letterSpacing: "0.1em",
    // min tap target on mobile
    padding: isMobile ? "0.4rem 0" : "0",
    display: "inline-block",
  };

  return (
    <footer style={{
      borderTop: "1px solid rgba(99,179,237,0.08)",
      padding: isMobile ? "2rem 1.25rem" : "2.5rem 3rem",
      maxWidth: "1100px",
      margin: "0 auto",
      // stack vertically on mobile, row on desktop
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: isMobile ? "1.25rem" : "0",
    }}>

      {/* Logo */}
      <span style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 800,
        fontSize: "1rem", color: "#63B3ED",
        // on mobile center everything
        textAlign: isMobile ? "center" : "left",
      }}>NY.</span>

      {/* Social links */}
      <div style={{
        display: "flex",
        gap: isMobile ? "2rem" : "1.5rem",
        // reorder to center on mobile — links before copyright
        order: isMobile ? -1 : 0,
      }}>
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseEnter={e => e.target.style.color = "#63B3ED"}
            onMouseLeave={e => e.target.style.color = "#4A5568"}
            onTouchStart={e => e.currentTarget.style.color = "#63B3ED"}
            onTouchEnd={e => e.currentTarget.style.color = "#4A5568"}
          >{l.label}</a>
        ))}
      </div>

      {/* Copyright */}
      <p style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: isMobile ? "0.65rem" : "0.7rem",
        color: "#4A5568",
        letterSpacing: "0.1em",
        margin: 0,
        textAlign: "center",
      }}>
        © 2026 Nitesh Yadav — Built with React
      </p>

    </footer>
  );
}