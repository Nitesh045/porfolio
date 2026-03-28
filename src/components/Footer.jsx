export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(99,179,237,0.08)",
      padding: "2.5rem 3rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      maxWidth: "1100px", margin: "0 auto"
    }}>
      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#63B3ED" }}>NY.</span>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#4A5568", letterSpacing: "0.1em" }}>
        © 2026 Nitesh Yadav — Built with React
      </p>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href="https://leetcode.com/u/Nitesh045/" target="_blank" rel="noopener noreferrer" style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#4A5568",
          textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.1em"
        }}
          onMouseEnter={e => e.target.style.color = "#63B3ED"}
          onMouseLeave={e => e.target.style.color = "#4A5568"}
        >LeetCode</a>

        <a href="https://www.linkedin.com/in/niteshyadav045" target="_blank" rel="noopener noreferrer" style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#4A5568",
          textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.1em"
        }}
          onMouseEnter={e => e.target.style.color = "#63B3ED"}
          onMouseLeave={e => e.target.style.color = "#4A5568"}
        >LinkedIn</a>

        <a href="https://github.com/Nitesh045" target="_blank" rel="noopener noreferrer" style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#4A5568",
          textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.1em"
        }}
          onMouseEnter={e => e.target.style.color = "#63B3ED"}
          onMouseLeave={e => e.target.style.color = "#4A5568"}
        >GitHub</a>
      </div>
    </footer>
  );
}