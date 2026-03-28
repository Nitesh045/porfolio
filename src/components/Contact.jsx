import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  const inputStyle = {
    width: "100%", padding: "0.9rem 1rem", background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(99,179,237,0.12)", borderRadius: "6px",
    color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
    outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
    cursor: "text"
  };


  return (
    <section id="contact" style={{ padding: "6rem 3rem 4rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#63B3ED", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>
     
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
        <div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", lineHeight: 1.15, marginBottom: "1.5rem" }}>
            Let's build<br /><span style={{ color: "#63B3ED" }}>something great.</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#718096", lineHeight: 1.9, fontSize: "1rem", marginBottom: "2.5rem" }}>
            Open to full-time roles, freelance projects, and interesting collaborations. My inbox is always open.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { label: "Email", value: "niteshyadav604@gmail.com" },
              { label: "Location", value: "India" },
            ].map(c => (
              <div key={c.label} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#63B3ED", letterSpacing: "0.1em", textTransform: "uppercase", minWidth: "60px" }}>{c.label}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#94A3B8", fontSize: "0.9rem" }}>{c.value}</span>
              </div>
            ))}
          </div>
        </div>

        {sent ? (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "320px", gap: "1rem" }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "#63B3ED" }}>✓</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#94A3B8", fontSize: "1rem" }}>Message sent! I'll get back to you soon.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {[
              { key: "name", placeholder: "Your Name", type: "text" },
              { key: "email", placeholder: "Your Email", type: "email" },
            ].map(f => (
              <input
                key={f.key}
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.key]}
                onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(99,179,237,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(99,179,237,0.12)"}
              />
            ))}
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={e => e.target.style.borderColor = "rgba(99,179,237,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(99,179,237,0.12)"}
            />
            <button onClick={handleSubmit} style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", fontWeight: 700,
              background: "#63B3ED", color: "#050A12", padding: "0.9rem 2rem",
              border: "none", borderRadius: "6px", cursor: "pointer",
              letterSpacing: "0.08em", transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 0 32px rgba(99,179,237,0.25)"
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 0 48px rgba(99,179,237,0.45)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 0 32px rgba(99,179,237,0.25)"; }}
            >Send Message →</button>
          </div>
        )}
      </div>
    </section>
  );
}