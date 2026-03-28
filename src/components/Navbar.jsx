export default function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "1.2rem 3rem",
      background: "rgba(5, 10, 18, 0.7)",
      backdropFilter: "blur(18px)",
      borderBottom: "1px solid rgba(99,179,237,0.08)",
    }}>
      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#63B3ED", letterSpacing: "0.04em" }}>
        NY<span style={{ color: "#fff" }}>.</span>
      </span>
      <div style={{ display: "flex", gap: "2.5rem" }}>
        {["Home","About","Skills","Projects","Contact"].map(l => (
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
      <a href="mailto:niteshyadav604@gmail.com" style={{
        fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#63B3ED",
        border: "1px solid #63B3ED", padding: "0.45rem 1.1rem", borderRadius: "4px",
        textDecoration: "none", letterSpacing: "0.1em", transition: "background 0.2s, color 0.2s"
      }}
        onMouseEnter={e => { e.target.style.background = "#63B3ED"; e.target.style.color = "#050A12"; }}
        onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#63B3ED"; }}
      >Hire Me</a>
    </nav>
  );
}