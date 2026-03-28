import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;
    let particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.5 + 0.4,
      dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.15
    }));
    let raf;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,179,237,${p.alpha})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh", width: "100%", position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "radial-gradient(ellipse 80% 60% at 50% 40%, #0D2240 0%, #050A12 70%)",
      overflow: "hidden",
    }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "860px", padding: "0 2rem" }}>
        <div style={{
          display: "inline-block", fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
          color: "#63B3ED", letterSpacing: "0.25em", textTransform: "uppercase",
          border: "1px solid rgba(99,179,237,0.3)", padding: "0.35rem 1rem",
          borderRadius: "2px", marginBottom: "2rem", animation: "fadeUp 0.8s ease both"
        }}>
          Full Stack Developer
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 1.0,
          color: "#fff", margin: "0 0 0.3rem", animation: "fadeUp 0.9s ease 0.1s both",
          letterSpacing: "-0.02em"
        }}>
          Nitesh
        </h1>
        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 1.0,
          color: "#63B3ED", margin: "0 0 2rem", animation: "fadeUp 0.9s ease 0.2s both",
          letterSpacing: "-0.02em"
        }}>
          Yadav
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
          color: "#718096", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 3rem",
          animation: "fadeUp 0.9s ease 0.3s both"
        }}>
          I architect scalable backends and craft seamless React interfaces — turning complex problems into elegant, production-ready systems.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", animation: "fadeUp 0.9s ease 0.4s both" }}>
          <a href="#projects" style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.8rem",
            background: "#63B3ED", color: "#050A12", padding: "0.85rem 2.2rem",
            borderRadius: "4px", textDecoration: "none", fontWeight: 700,
            letterSpacing: "0.08em", transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 0 32px rgba(99,179,237,0.35)"
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 0 48px rgba(99,179,237,0.55)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 0 32px rgba(99,179,237,0.35)"; }}
          >View Projects</a>
          <a href="#contact" style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.8rem",
            background: "transparent", color: "#CBD5E0", padding: "0.85rem 2.2rem",
            borderRadius: "4px", textDecoration: "none", fontWeight: 600,
            letterSpacing: "0.08em", border: "1px solid rgba(203,213,224,0.2)",
            transition: "border-color 0.2s, color 0.2s"
          }}
            onMouseEnter={e => { e.target.style.borderColor = "#63B3ED"; e.target.style.color = "#63B3ED"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(203,213,224,0.2)"; e.target.style.color = "#CBD5E0"; }}
          >Let's Talk</a>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", animation: "bounce 2s infinite" }}>
          <div style={{ width: "1px", height: "50px", background: "linear-gradient(#63B3ED, transparent)", margin: "0 auto" }} />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0);} 50%{transform:translateX(-50%) translateY(8px);} }
      `}</style>
    </section>
  );
}