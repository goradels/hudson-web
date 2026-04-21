import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost } from "@/lib/posts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return posts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPost(id);
  if (!post) return {};
  return {
    title: `${post.title} | Hudson Web Group`,
    description: post.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  "SEO & Content": "#2d6a4f",
  "Digital Advertising": "#1d4e89",
  "Email Marketing": "#6b3fa0",
  "Web Design": "#b8903a",
  "Bespoke Software": "#c0392b",
  Strategy: "#2c3e50",
};

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPost(id);
  if (!post) notFound();

  const related = posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Nav />
      <main style={{ background: "#fafaf8", minHeight: "100vh" }}>
        {/* Article header */}
        <header
          style={{
            background: "#f2f0ec",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
            padding: "9rem 2rem 4rem",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.8rem",
                color: "rgba(17,17,17,0.4)",
                textDecoration: "none",
                marginBottom: "2rem",
                transition: "color 0.2s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M2 7L7 2M2 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Blog
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: categoryColors[post.category] ?? "#b8903a",
                  padding: "0.3rem 0.7rem",
                  borderRadius: "4px",
                }}
              >
                {post.category}
              </span>
              <span style={{ fontSize: "0.75rem", color: "rgba(17,17,17,0.35)" }}>
                {post.date}
              </span>
              <span style={{ fontSize: "0.75rem", color: "rgba(17,17,17,0.35)" }}>
                {post.readTime}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "#111111",
                margin: "0 0 1.5rem 0",
              }}
            >
              {post.title}
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "rgba(17,17,17,0.5)",
                margin: 0,
                maxWidth: "640px",
              }}
            >
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Article body */}
        <article style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem" }}>
          <div style={{ maxWidth: "680px" }}>
            {post.body.map((section, i) => {
              if (section.type === "paragraph") {
                return (
                  <p
                    key={i}
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      color: "rgba(17,17,17,0.7)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {section.text}
                  </p>
                );
              }
              if (section.type === "heading") {
                return (
                  <h2
                    key={i}
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      letterSpacing: "-0.025em",
                      color: "#111111",
                      margin: "3rem 0 1rem 0",
                      lineHeight: 1.3,
                    }}
                  >
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "list") {
                return (
                  <ul
                    key={i}
                    style={{
                      margin: "0 0 1.5rem 0",
                      padding: 0,
                      listStyle: "none",
                    }}
                  >
                    {section.items?.map((item, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                          fontSize: "1rem",
                          lineHeight: 1.7,
                          color: "rgba(17,17,17,0.65)",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#b8903a",
                            flexShrink: 0,
                            marginTop: "0.6rem",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              margin: "4rem 0",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.08)" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#b8903a" }} />
            <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.08)" }} />
          </div>

          {/* CTA */}
          <div
            style={{
              background: "#f2f0ec",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "12px",
              padding: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p style={{ fontWeight: 700, fontSize: "1.1rem", color: "#111111", margin: "0 0 0.4rem 0", letterSpacing: "-0.02em" }}>
                Ready to put this into practice?
              </p>
              <p style={{ fontSize: "0.875rem", color: "rgba(17,17,17,0.45)", margin: 0 }}>
                Our team helps businesses turn strategy into results.
              </p>
            </div>
            <a
              href="/#contact"
              style={{
                background: "linear-gradient(135deg, #b8903a 0%, #8a6820 100%)",
                color: "#fff",
                padding: "0.875rem 1.75rem",
                borderRadius: "8px",
                fontSize: "0.875rem",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(184,144,58,0.2)",
              }}
            >
              Get in Touch
            </a>
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section
            style={{
              borderTop: "1px solid rgba(0,0,0,0.07)",
              background: "#f2f0ec",
              padding: "5rem 2rem",
            }}
          >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#111111",
                  margin: "0 0 2.5rem 0",
                }}
              >
                More from the blog
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1px",
                  background: "rgba(0,0,0,0.07)",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
                className="related-grid"
              >
                {related.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/blog/${rp.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <article
                      className="blog-card"
                      style={{
                        background: "#fafaf8",
                        padding: "2rem",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "background 0.3s",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "#fff",
                          background: categoryColors[rp.category] ?? "#b8903a",
                          padding: "0.25rem 0.6rem",
                          borderRadius: "4px",
                          alignSelf: "flex-start",
                          marginBottom: "1rem",
                        }}
                      >
                        {rp.category}
                      </span>
                      <h3
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          lineHeight: 1.3,
                          color: "#111111",
                          margin: "0 0 0.75rem 0",
                          flex: 1,
                        }}
                      >
                        {rp.title}
                      </h3>
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
                          {rp.date}
                        </span>
                        <span style={{ fontSize: "0.7rem", color: "rgba(17,17,17,0.3)" }}>
                          {rp.readTime}
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />

      <style>{`
        .blog-card:hover { background: #f2f0ec !important; }
        @media (max-width: 900px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
