import ScrollReveal from "./Scrollreveal";

export default function About() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "6+", label: "Projects Shipped" },
    { value: "40%", label: "Perf Improvement" },
    { value: "∞", label: "Coffee Consumed" },
  ];

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-32 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

        {/* LEFT */}
        <ScrollReveal variant="left" duration="0.85s">
          <p className="font-mono text-[10px] text-blue-400 tracking-[0.25em] uppercase mb-4"></p>

          <h2 className="font-bold text-3xl md:text-5xl text-white leading-tight mb-6">
            Building things <br />
            <span className="text-blue-400">that matter.</span>
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-4">
            I'm a backend-focused full stack developer with a passion for architecting scalable systems, robust APIs, and real-world applications that actually solve problems.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Currently working at Husk Power Systems, where I build subscription platforms, payment integrations, and inventory systems.
          </p>
        </ScrollReveal>

        {/* RIGHT - STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <ScrollReveal
              key={s.label}
              variant="up"
              delay={`${0.1 + i * 0.12}s`}
              duration="0.7s"
            >
              <div className="bg-white/5 border border-blue-400/10 rounded-xl p-6 text-center transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-400/10">

                <div className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-1">
                  {s.value}
                </div>

                <div className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
                  {s.label}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}