import ScrollReveal from "./Scrollreveal";

export default function About() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "6+", label: "Projects Shipped" },
    { value: "40%", label: "Perf Improvement" },
    { value: "∞", label: "Coffee Consumed" },
  ];

  return (
    <section id="about" style={{ padding: "8rem 3rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

        <ScrollReveal variant="left" duration="0.85s">
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#63B3ED", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", lineHeight: 1.15, marginBottom: "1.5rem" }}>
            Building things<br /><span style={{ color: "#63B3ED" }}>that matter.</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#718096", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1rem" }}>
            I'm a backend-focused full stack developer with a passion for architecting scalable systems, robust APIs, and real-world applications that actually solve problems.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#718096", lineHeight: 1.9, fontSize: "1rem" }}>
            Currently working at Husk Power Systems, where I build subscription platforms, payment integrations, and inventory systems that power thousands of users across Africa and India.
          </p>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} variant="up" delay={`${0.1 + i * 0.12}s`} duration="0.7s">
              <div style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(99,179,237,0.1)",
                borderRadius: "8px", padding: "2rem 1.5rem", textAlign: "center",
                transition: "border-color 0.3s, background 0.3s"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,179,237,0.4)"; e.currentTarget.style.background = "rgba(99,179,237,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(99,179,237,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2.4rem", color: "#63B3ED", marginBottom: "0.4rem" }}>{s.value}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#718096", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}