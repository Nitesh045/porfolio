import ScrollReveal from "./Scrollreveal";

export default function Experience() {
  const items = [
    {
      company: "Husk Power Systems",
      role: "Full Stack Developer",
      period: "May 2024 – Present",
      type: "Full-time",
    points: [
        "Built a subscription-based recharge platform (3/6/12 months) with automated CRON workflows that reduced monthly recharge by ~50%",
        "Created Neuron platform for internal operations (recharge, meter allocation, workflows)",
        "Migrated system from .NET to Node.js, improving response time by ~40%",
        "Designed reusable modules, reducing development time across projects by ~30%",
        "Monitored APIs using Azure, improving uptime and simplifying production debugging",
        "Configured and maintained CI/CD pipelines using GitHub Actions (YAML) for automated build and deployment",
        "Built a modern AI-powered chat web application with dynamic UI rendering of graphs, tables, and charts based on user responses",
      ]
    }
  ];

  return (
    <section style={{ padding: "6rem 3rem", maxWidth: "1100px", margin: "0 auto" }}>

      <ScrollReveal variant="up" duration="0.7s">
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#63B3ED", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>02 / Experience</p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#fff", marginBottom: "3rem" }}>Where I've Worked</h2>
      </ScrollReveal>

      {items.map((exp, i) => (
        <ScrollReveal key={i} variant="up" delay="0.15s" duration="0.8s">
          <div style={{
            display: "grid", gridTemplateColumns: "220px 1fr", gap: "3rem",
            borderTop: "1px solid rgba(99,179,237,0.1)", paddingTop: "2.5rem"
          }}>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#63B3ED", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{exp.period}</div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#4A5568", border: "1px solid rgba(74,85,104,0.5)", padding: "0.2rem 0.6rem", borderRadius: "2px" }}>{exp.type}</span>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.35rem", color: "#fff", marginBottom: "0.3rem" }}>{exp.company}</h3>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "#63B3ED", marginBottom: "1.5rem" }}>{exp.role}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {exp.points.map((pt, j) => (
                  <li key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                    <span style={{ color: "#63B3ED", fontFamily: "'DM Mono', monospace", marginTop: "0.1rem", flexShrink: 0 }}>▸</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.7 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}