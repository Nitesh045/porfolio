import ScrollReveal from "./Scrollreveal";

export default function Experience() {
  const items = [
    {
      company: "Husk Power Systems",
      role: "Full Stack Developer",
      period: "May 2024 – Present",
      type: "Full-time",
      points: [
        "Built a subscription-based recharge platform (3/6/12 months) with automated CRON workflows that reduced manual recharge by ~50%",
        "Created Neuron platform for internal operations (recharge, meter allocation, workflows)",
        "Migrated system from .NET to Node.js, improving response time by ~40%",
        "Designed reusable modules, reducing development time across projects by ~30%",
        "Monitored APIs using Azure, improving uptime and simplifying production debugging",
        "Configured and maintained CI/CD pipelines using GitHub Actions (YAML)",
        "Built an AI-powered chat web app with dynamic UI (graphs, tables, charts)",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24 overflow-hidden">

      {/* Heading */}
      <ScrollReveal variant="up" duration="0.7s">
        <p className="font-mono text-xs text-blue-400 tracking-[0.25em] uppercase mb-4">
         
        </p>

        <h2 className="text-white font-extrabold text-2xl md:text-4xl mb-12">
          Where I've Worked
        </h2>
      </ScrollReveal>

      {/* Experience Items */}
      {items.map((exp, i) => (
        <ScrollReveal key={i} variant="up" delay="0.15s" duration="0.8s">
          
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 border-t border-blue-400/10 pt-10">

            {/* LEFT SIDE */}
            <div>
              <div className="font-mono text-[10px] text-blue-400 tracking-wider uppercase mb-2">
                {exp.period}
              </div>

              <span className="font-mono text-[10px] text-gray-500 border border-gray-600/50 px-2 py-1 rounded">
                {exp.type}
              </span>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <h3 className="text-white font-bold text-xl mb-1">
                {exp.company}
              </h3>

              <p className="font-mono text-xs text-blue-400 mb-6">
                {exp.role}
              </p>

              <ul className="space-y-3">
                {exp.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 items-start">
                    
                    <span className="text-blue-400 mt-1 shrink-0">
                      ▸
                    </span>

                    <span className="text-gray-400 text-sm leading-relaxed">
                      {pt}
                    </span>

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