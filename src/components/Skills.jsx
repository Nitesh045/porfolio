import ScrollReveal from "./Scrollreveal";

export default function Skills() {
    const categories = [
        { label: "Languages", skills: ["JavaScript", "TypeScript", "Python"] },
        { label: "Frontend", skills: ["React.js", "Redux", "Tailwind CSS"] },
        { label: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "Microservices"] },
        { label: "Database", skills: ["MongoDB", "MSSQL"] },
        { label: "DevOps/Cloud", skills: ["Azure", "Docker", "GitHub Actions (CI/CD)", "Kubernetes", "AWS"] },
        { label: "Core", skills: ["System Design", "Authentication", "API Optimization", "Debugging", "Unit testing (jest)"] },
    ];

    return (
        <section id="skills" style={{
            padding: "6rem 3rem", maxWidth: "1100px", margin: "0 auto",
            background: "linear-gradient(180deg, transparent 0%, rgba(13,34,64,0.3) 50%, transparent 100%)"
        }}>
          
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#63B3ED", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>
               
            </p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#fff", marginBottom: "3.5rem" }}>
                My Tech Stack
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>

                {categories.map((cat ,i) => (
                        <ScrollReveal key={cat.label} variant="up" delay={`${i * 0.1}s`} duration="0.75s">
                    <div key={cat.label} style={{
                        background: "rgba(255,255,255,0.02)", border: "1px solid rgba(99,179,237,0.08)",
                        borderRadius: "10px", padding: "1.8rem 1.5rem"
                    }}>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#63B3ED", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.4rem" }}>
                            {cat.label}
                        </div>
                        {cat.skills.map(sk => (
                            <div key={sk} style={{
                                fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "#CBD5E0",
                                padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)",
                                display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.2s"
                            }}
                                onMouseEnter={e => e.currentTarget.style.color = "#63B3ED"}
                                onMouseLeave={e => e.currentTarget.style.color = "#CBD5E0"}
                            >
                                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#63B3ED", display: "inline-block", flexShrink: 0 }} />
                                {sk}
                            </div>
                        ))}

                    </div>
                    </ScrollReveal>
                    
                ))}
          
            </div>
        </section>
    );
}