"use client";

const stats = [
  {
    value: "10,000+",
    label: "Leads Generated",
    description: "Qualified leads delivered to clients across all verticals",
  },
  {
    value: "$500K",
    label: "Revenue Generated",
    description: "Directly attributable revenue produced for our clients",
  },
  {
    value: "$2.5M",
    label: "In Ad Spend Managed",
    description: "Paid media budget managed with precision and efficiency",
  },
];

export default function About() {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        style={{ background: "#fafaf8", padding: "8rem 2rem", position: "relative" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }}
            className="about-grid"
          >
            {/* Left */}
            <div>
              <span className="section-label">About Us</span>
              <div style={{ width: "40px", height: "1px", background: "rgba(184,144,58,0.3)", marginTop: "1.25rem" }} />
            </div>

            {/* Right */}
            <div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.1,
                  color: "#111111",
                  margin: "0 0 2rem 0",
                }}
              >
                We turn attention into
                <br />
                <span style={{ color: "#b8903a" }}>growth.</span>
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "rgba(17,17,17,0.5)",
                  maxWidth: "580px",
                  margin: 0,
                }}
              >
                We are a results-driven digital marketing agency built for businesses that refuse to
                stand still. From day one, our focus has been simple: deliver strategies that generate
                real, measurable outcomes — not vanity metrics. We combine sharp creative thinking with
                rigorous data analysis to build campaigns that attract the right audience, hold their
                attention, and convert them into loyal customers. Whether you&apos;re scaling a startup or
                modernising an established brand, we bring the expertise, technology, and relentless
                commitment needed to make your digital presence work harder than ever before.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <section
        style={{
          background: "#f2f0ec",
          borderTop: "1px solid rgba(0,0,0,0.07)",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          padding: "5rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}
            className="stats-grid"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-item"
                style={{
                  padding: "2.5rem 3rem",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    background: "linear-gradient(135deg, #b8903a 0%, #d4a84e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#111111", marginBottom: "0.5rem", letterSpacing: "0.01em" }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: "0.8rem", color: "rgba(17,17,17,0.4)", lineHeight: 1.5 }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .stats-grid { grid-template-columns: 1fr !important; }
            .stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.07); padding: 2rem 1.5rem !important; }
            .stats-grid > div:last-child { border-bottom: none; }
          }
        `}</style>
      </section>
    </>
  );
}
