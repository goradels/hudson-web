"use client";

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Bespoke, conversion-focused websites that combine stunning aesthetics with seamless user experience. Every pixel is intentional — built to impress visitors and turn them into customers.",
    tags: ["UI/UX Design", "Development", "CRO"],
  },
  {
    number: "02",
    title: "SEO & Content Strategy",
    description:
      "Long-term organic growth through technical SEO excellence and content that answers what your audience is searching for. We build authority that compounds over time.",
    tags: ["Technical SEO", "Content Creation", "Link Building"],
  },
  {
    number: "03",
    title: "Digital Advertising",
    description:
      "Precision-targeted paid media across Google, Meta, and beyond. We manage every pound of your ad spend with rigorous testing and data-driven optimisation.",
    tags: ["Google Ads", "Meta Ads", "PPC Strategy"],
  },
  {
    number: "04",
    title: "Email Marketing",
    description:
      "High-converting email campaigns and automated flows that nurture leads and drive repeat revenue. Your list is one of your most valuable assets — we help you leverage it.",
    tags: ["Campaigns", "Automation", "Segmentation"],
  },
  {
    number: "05",
    title: "Bespoke Software",
    description:
      "Custom-built digital tools and platforms tailored precisely to your business needs. From internal dashboards to customer-facing applications, we engineer solutions that give you the edge.",
    tags: ["Web Apps", "Integrations", "Automation"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: "#fafaf8", padding: "8rem 2rem", position: "relative" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "5rem",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "1rem" }}>
              Our Services
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1.1,
                color: "#111111",
                margin: 0,
              }}
            >
              Everything you need
              <br />
              to <span style={{ color: "#b8903a" }}>dominate online.</span>
            </h2>
          </div>
          <p style={{ color: "rgba(17,17,17,0.4)", fontSize: "0.9rem", maxWidth: "280px", lineHeight: 1.6, margin: 0 }}>
            A complete suite of digital services designed to work together and accelerate your growth.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <div
              key={service.number}
              className="service-card"
              style={{
                background: "#fafaf8",
                padding: "2.75rem",
                borderBottom: i < 4 ? "1px solid rgba(0,0,0,0.08)" : "none",
                cursor: "default",
                ...(i === 4 ? { gridColumn: "1 / -1" } : {}),
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", color: "rgba(184,144,58,0.6)" }}>
                  {service.number}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.2, transition: "opacity 0.3s" }}>
                  <path d="M3 13L13 3M13 3H5M13 3V11" stroke="#b8903a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: "#111111",
                  margin: "0 0 1rem 0",
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "rgba(17,17,17,0.45)",
                  margin: "0 0 2rem 0",
                  ...(i === 4 ? { maxWidth: "640px" } : {}),
                }}
              >
                {service.description}
              </p>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "100px",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "rgba(17,17,17,0.4)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "3.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "transparent",
              border: "1px solid rgba(184,144,58,0.35)",
              color: "#b8903a",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(184,144,58,0.06)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,144,58,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,144,58,0.35)";
            }}
          >
            Discuss your project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .services-grid > div { border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .services-grid > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
