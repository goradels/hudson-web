"use client";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <>
      {/* Contact CTA */}
      <section
        id="contact"
        style={{
          background: "#f2f0ec",
          borderTop: "1px solid rgba(0,0,0,0.07)",
          padding: "8rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, rgba(184,144,58,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "640px",
            margin: "0 auto",
          }}
        >
          <span
            className="section-label"
            style={{ display: "block", marginBottom: "1.5rem" }}
          >
            Get in Touch
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "#111111",
              margin: "0 0 1.5rem 0",
            }}
          >
            Ready to grow?
            <br />
            <span style={{ color: "#b8903a" }}>Let&apos;s talk.</span>
          </h2>
          <p
            style={{
              color: "rgba(17,17,17,0.45)",
              fontSize: "1rem",
              lineHeight: 1.7,
              margin: "0 0 2.5rem 0",
            }}
          >
            Tell us about your business and goals. We&apos;ll put together a
            tailored strategy and show you exactly how we can help you grow.
          </p>
          <a
            href="mailto:hello@gadelson1126@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "linear-gradient(135deg, #b8903a 0%, #8a6820 100%)",
              color: "#fff",
              padding: "1rem 2.25rem",
              borderRadius: "8px",
              fontSize: "0.95rem",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "opacity 0.2s, transform 0.2s",
              boxShadow: "0 4px 20px rgba(184,144,58,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.88";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            hello@hudsonwebgroup.com
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7H12M12 7L7 2M12 7L7 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#fafaf8",
          borderTop: "1px solid rgba(0,0,0,0.07)",
          padding: "2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span style={{ fontSize: "0.8rem", color: "rgba(17,17,17,0.3)" }}>
            © {new Date().getFullYear()} Hudson Web Group. All rights reserved.
          </span>
          <nav style={{ display: "flex", gap: "2rem" }}>
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(17,17,17,0.35)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#b8903a")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(17,17,17,0.35)")
                }
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
