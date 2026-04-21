import Link from "next/link";
import { posts } from "@/lib/posts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogPostsList from "@/components/BlogPostsList";

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
            <span
              style={{
                display: "inline-block",
                width: "32px",
                height: "1px",
                background: "#b8903a",
              }}
            />
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
                background:
                  "linear-gradient(135deg, #b8903a 0%, #d4a84e 50%, #b8903a 100%)",
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
            Practical strategy, honest analysis, and actionable advice on
            digital marketing, web design, and growth.
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
            style={{
              textDecoration: "none",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            <article
              className="featured-card"
              style={{
                background: "#f2f0ec",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: "12px",
                padding: "3.5rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
                alignItems: "center",
                transition: "border-color 0.3s",
                cursor: "pointer",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#fff",
                      background:
                        categoryColors[featured.category] ?? "#b8903a",
                      padding: "0.3rem 0.7rem",
                      borderRadius: "4px",
                    }}
                  >
                    {featured.category}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(17,17,17,0.35)",
                    }}
                  >
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
                    <path
                      d="M2 7H12M12 7L7 2M12 7L7 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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

          {/* All posts */}
          <BlogPostsList posts={rest} />
        </div>
      </main>
      <Footer />

      <style>{`
        .featured-card:hover { border-color: rgba(184,144,58,0.35) !important; }
        .blog-card:hover { background: #f2f0ec !important; }

        @media (max-width: 900px) {
          /* Featured card: single column */
          .featured-card { grid-template-columns: 1fr !important; }

          /* Posts grid: horizontal scroll row */
          .blog-grid {
            display: flex !important;
            flex-wrap: nowrap !important;
            align-items: stretch !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 12px !important;
            background: transparent !important;
            border: none !important;
            border-radius: 0 !important;
            padding-bottom: 4px !important;
            scrollbar-width: none !important;
          }
          .blog-grid::-webkit-scrollbar { display: none !important; }

          /* Each card: fixed width so next card peeks in */
          .blog-grid > a {
            flex: 0 0 78% !important;
            border: 1px solid rgba(0,0,0,0.08) !important;
            border-radius: 10px !important;
            overflow: hidden !important;
            scroll-snap-align: start !important;
            display: flex !important;
            flex-direction: column !important;
          }

          /* Article fills the full card height for equal sizing */
          .blog-grid > a .blog-card {
            flex: 1 !important;
          }
        }
      `}</style>
    </>
  );
}
