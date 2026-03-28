import { useState, useEffect, useRef } from "react";
import ScrollReveal from "./Scrollreveal";

/**
 * EMAIL SETUP — 3 steps (free, no backend needed):
 *
 * 1. Go to https://www.emailjs.com → sign up free
 * 2. Add an Email Service (Gmail) → copy your SERVICE_ID
 * 3. Create an Email Template with these variables:
 *      {{from_name}}  {{from_email}}  {{message}}
 *    → copy your TEMPLATE_ID
 * 4. Go to Account → copy your PUBLIC_KEY
 * 5. Paste all three below ↓
 */
const EMAILJS_SERVICE_ID  = "service_o2smhx8";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_uuajqvg";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY  = "l4koHN4BdfLqWSEf_";   // e.g. "abcDEFghiJKL"

export default function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [status, setStatus]   = useState("idle"); // "idle" | "sending" | "sent" | "error"
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const emailjsLoaded = useRef(false);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Lazy-load EmailJS SDK from CDN
  useEffect(() => {
    if (emailjsLoaded.current) return;
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      emailjsLoaded.current = true;
    };
    document.head.appendChild(script);
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:  form.name,
        from_email: form.email,
        message:    form.message,
        to_email:   "niteshyadav604@gmail.com",
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.9rem 1rem",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(99,179,237,0.12)",
    borderRadius: "6px",
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: isMobile ? "1rem" : "0.9rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    cursor: "text",
    WebkitAppearance: "none",
  };

  const contactInfo = [
    { label: "Email",    value: "niteshyadav604@gmail.com" },
    { label: "Location", value: "India" },
  ];

  return (
    <section id="contact" style={{
      padding: isMobile ? "4rem 1.25rem 3rem" : "6rem 3rem 4rem",
      maxWidth: "1100px", margin: "0 auto",
    }}>

  
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "2.5rem" : "5rem",
        alignItems: "start",
      }}>

        {/* ── Left ── */}
        <div>
          <ScrollReveal variant="up" duration="0.7s">
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: isMobile ? "clamp(1.9rem,8vw,2.5rem)" : "clamp(2rem,4vw,3rem)",
              color: "#fff", lineHeight: 1.15, marginBottom: "1rem"
            }}>
              Let's build<br />
              <span style={{ color: "#63B3ED" }}>something great.</span>
            </h2>
          </ScrollReveal>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", color: "#718096",
            lineHeight: 1.9, fontSize: isMobile ? "0.925rem" : "1rem",
            marginBottom: "2rem"
          }}>
            Open to full-time roles, freelance projects, and interesting collaborations. My inbox is always open.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {contactInfo.map(c => (
              <div key={c.label} style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
                  color: "#63B3ED", letterSpacing: "0.1em", textTransform: "uppercase", minWidth: "60px"
                }}>{c.label}</span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", color: "#94A3B8",
                  fontSize: "0.9rem", wordBreak: "break-all"
                }}>{c.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: form / states ── */}
        <div>

          {/* SUCCESS */}
          {status === "sent" && (
            <div style={{
              display: "flex", flexDirection: "column",
              justifyContent: "center", alignItems: "center",
              height: isMobile ? "200px" : "320px", gap: "1rem",
              background: "rgba(99,179,237,0.04)",
              border: "1px solid rgba(99,179,237,0.12)", borderRadius: "12px",
            }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "#63B3ED" }}>✓</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#94A3B8", fontSize: "1rem", textAlign: "center", padding: "0 1rem" }}>
                Message sent! I'll get back to you soon.
              </p>
              <button onClick={() => setStatus("idle")} style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#63B3ED",
                background: "transparent", border: "1px solid rgba(99,179,237,0.3)",
                padding: "0.5rem 1.2rem", borderRadius: "4px", cursor: "pointer",
                letterSpacing: "0.08em", marginTop: "0.5rem"
              }}>Send another</button>
            </div>
          )}

          {/* ERROR */}
          {status === "error" && (
            <div style={{
              background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)",
              borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem",
              fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#FCA5A5",
              display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>
              <span>Something went wrong. Please try again.</span>
              <button onClick={() => setStatus("idle")} style={{
                background: "none", border: "none", color: "#FCA5A5",
                cursor: "pointer", fontSize: "1rem", padding: "0 0.25rem"
              }}>✕</button>
            </div>
          )}

          {/* FORM */}
          {(status === "idle" || status === "error") && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { key: "name",  placeholder: "Your Name",  type: "text",  autoComplete: "name",  inputMode: "text" },
                { key: "email", placeholder: "Your Email", type: "email", autoComplete: "email", inputMode: "email" },
              ].map(f => (
                <input
                  key={f.key}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  style={inputStyle}
                  autoComplete={f.autoComplete}
                  inputMode={f.inputMode}
                  onFocus={e => e.target.style.borderColor = "rgba(99,179,237,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(99,179,237,0.12)"}
                />
              ))}

              <textarea
                placeholder="Your Message"
                rows={isMobile ? 4 : 5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                onFocus={e => e.target.style.borderColor = "rgba(99,179,237,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(99,179,237,0.12)"}
              />

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", fontWeight: 700,
                  background: status === "sending" ? "rgba(99,179,237,0.6)" : "#63B3ED",
                  color: "#050A12",
                  padding: isMobile ? "1rem" : "0.9rem 2rem",
                  width: isMobile ? "100%" : "auto",
                  border: "none", borderRadius: "6px",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  letterSpacing: "0.08em", transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
                  boxShadow: "0 0 32px rgba(99,179,237,0.25)",
                  minHeight: "44px",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                }}
                onMouseEnter={e => { if (status !== "sending") { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 48px rgba(99,179,237,0.45)"; }}}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(99,179,237,0.25)"; }}
              >
                {status === "sending" ? (
                  <>
                    <span style={{
                      width: "14px", height: "14px",
                      border: "2px solid #050A12", borderTopColor: "transparent",
                      borderRadius: "50%", display: "inline-block",
                      animation: "spin 0.7s linear infinite"
                    }} />
                    Sending...
                  </>
                ) : "Send Message →"}
              </button>
            </div>
          )}

        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}