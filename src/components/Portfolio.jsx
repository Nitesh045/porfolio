import { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  // Custom cursor
  useEffect(() => {
    const dot = document.createElement("div");
    dot.id = "cursor-dot";
    Object.assign(dot.style, {
      position: "fixed", width: "8px", height: "8px",
      background: "#63B3ED", borderRadius: "50%",
      pointerEvents: "none", zIndex: "9999",
      transform: "translate(-50%, -50%)",
      transition: "transform 0.1s",
      boxShadow: "0 0 16px rgba(99,179,237,0.8)"
    });

    const ring = document.createElement("div");
    ring.id = "cursor-ring";
    Object.assign(ring.style, {
      position: "fixed", width: "36px", height: "36px",
      border: "1px solid rgba(99,179,237,0.4)", borderRadius: "50%",
      pointerEvents: "none", zIndex: "9998",
      transform: "translate(-50%, -50%)",
      transition: "left 0.12s ease, top 0.12s ease"
    });

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    const move = (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      dot.remove();
      ring.remove();
    };
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        /* When we hide the native cursor for the custom cursor, restore
           the expected native cursors for interactive controls so text
           inputs and links still show the proper cursor. */
        .cursor-override input,
        .cursor-override textarea { cursor: text !important; }

        .cursor-override a,
        .cursor-override button { cursor: pointer !important; }

        /* fall back to auto for any other interactive elements */
        .cursor-override [role="button"] { cursor: pointer !important; }
      `}</style>

      <div className="cursor-override" style={{ background: "#050A12", color: "#fff", cursor: "none", overflowX: "hidden" }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}