import Link from "next/link";
import { posts } from "@/lib/posts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const categoryColors: Record<string, string> = {
  "SEO & Content": "#2d6a4f",
  "Digital Advertising": "#1d4e89",
  "Email Marketing": "#6b3fa0",
  "Web Design": "#b8903a",
  "Bespoke Software": "#c0392b",
  Strategy: "#2c3e50",
};

export const metadata = {
  title: "Blog | Hudson Web Group",
  description:
    "Practical digital marketing insights, guides, and strategy from the Hudson Web team.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <Nav />
      <main style={{ background: "#fafaf8", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            padding: "10rem 2rem 5rem",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#b8903a",
              fontWeight: 600,
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#b8903a" }} />
            The Hudson Web Blog
          </span>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "#111111",
              margin: "0 0 1.25rem 0",
              maxWidth: "700px",
            }}
          >
            Insights that
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #b8903a 0%, #d4a84e 50%, #b8903a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              drive results.
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(17,17,17,0.45)",
              maxWidth: "480px",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Practical strategy, honest analysis, and actionable advice on digital
            marketing, web design, and growth.
          </p>
        </section>

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem 8rem",
          }}
        >
          {/* Featured post */}
          <Link
            href={`/blog/${featured.id}`}
            style={{ textDecoration: "none", display: "block", marginBottom: "1px" }}
          >
            <article
              style={{
                background: "#f2f0ec",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: "12px 12px 0 0",
                padding: "3.5rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
                alignItems: "center",
                transition: "border-color 0.3s",
                cursor: "pointer",
              }}
              className="featured-card"
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#fff",
                      background: categoryColors[featured.category] ?? "#b8903a",
                      padding: "0.3rem 0.7rem",
                      borderRadius: "4px",
                    }}
                  >
                    {featured.category}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "rgba(17,17,17,0.35)" }}>
                    Featured
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.2,
                    color: "#111111",
                    margin: "0 0 1rem 0",
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "rgba(17,17,17,0.5)",
                    margin: "0 0 1.5rem 0",
                  }}
                >
                  {featured.excerpt}
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#b8903a",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  Read article
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div
                style={{
                  background: "rgba(0,0,0,0.04)",
                  borderRadius: "8px",
                  height: "260px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "0.5rem",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(17,17,17,0.3)",
                    fontWeight: 500,
                  }}
                >
                  {featured.date} · {featured.readTime}
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "3px",
                    background: "linear-gradient(90deg, #b8903a, #d4a84e)",
                    borderRadius: "2px",
                    marginTop: "0.5rem",
                  }}
                />
              </div>
            </article>
          </Link>

          {/* Grid of remaining posts */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "rgba(0,0,0,0.07)",
              border: "1px solid rgba(0,0,0,0.07)",
              borderTop: "none",
              borderRadius: "0 0 12px 12px",
              overflow: "hidden",
            }}
            className="blog-grid"
          >
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  className="blog-card"
                  style={{
                    background: "#fafaf8",
                    padding: "2.25rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "background 0.3s",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ marginBottom: "1.25rem" }}>
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#fff",
                        background: categoryColors[post.category] ?? "#b8903a",
                        padding: "0.25rem 0.6rem",
                        borderRadius: "4px",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.3,
                      color: "#111111",
                      margin: "0 0 0.75rem 0",
                      flex: "none",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.825rem",
                      lineHeight: 1.65,
                      color: "rgba(17,17,17,0.45)",
                      margin: "0 0 1.5rem 0",
                      flex: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "1rem",
                      borderTop: "1px solid rgba(0,0,0,0.07)",
                    }}
                  >
                    <span style={{ fontSize: "0.7rem", color: "rgba(17,17,17,0.3)" }}>
                      {post.date}
                    </span>
                    <span style={{ fontSize: "0.7rem", color: "rgba(17,17,17,0.3)" }}>
                      {post.readTime}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        .featured-card:hover { border-color: rgba(184,144,58,0.35) !important; }
        .blog-card:hover { background: #f2f0ec !important; }
        @media (max-width: 900px) {
          .featured-card { grid-template-columns: 1fr !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
