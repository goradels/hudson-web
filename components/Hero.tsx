"use client";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#fafaf8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div className="hero-grid" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "600px",
          background: "radial-gradient(ellipse at center, rgba(184,144,58,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to bottom, transparent 0%, #fafaf8 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          paddingTop: "120px",
          paddingBottom: "8rem",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <div className="animate-fade-up" style={{ marginBottom: "2rem" }}>
          <span className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#b8903a" }} />
            Digital Marketing Agency
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up-delay-1"
          style={{
            fontSize: "clamp(3rem, 8vw, 7.5rem)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "#111111",
            maxWidth: "900px",
            margin: "0 0 2rem 0",
          }}
        >
          Digital Marketing
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #b8903a 0%, #d4a84e 50%, #b8903a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            that Converts.
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-up-delay-2"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(17,17,17,0.45)",
            maxWidth: "480px",
            lineHeight: 1.65,
            margin: "0 0 3rem 0",
          }}
        >
          We build high-performance digital strategies that drive qualified leads,
          grow revenue, and deliver measurable results at every stage.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              background: "linear-gradient(135deg, #b8903a 0%, #8a6820 100%)",
              color: "#fff",
              padding: "0.875rem 2rem",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.01em",
              display: "inline-block",
              transition: "opacity 0.2s, transform 0.2s",
              boxShadow: "0 4px 20px rgba(184,144,58,0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.88";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Start a Project
          </a>
          <a
            href="#services"
            style={{
              background: "transparent",
              color: "#111111",
              padding: "0.875rem 2rem",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: 500,
              textDecoration: "none",
              border: "1px solid rgba(17,17,17,0.15)",
              display: "inline-block",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,144,58,0.5)";
              (e.currentTarget as HTMLElement).style.color = "#b8903a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(17,17,17,0.15)";
              (e.currentTarget as HTMLElement).style.color = "#111111";
            }}
          >
            View Our Services
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-in"
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "rgba(17,17,17,0.2)",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, rgba(184,144,58,0.4))" }} />
          Scroll
        </div>
      </div>
    </section>
  );
}
