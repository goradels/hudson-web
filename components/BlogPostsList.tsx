"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { Post } from "@/lib/posts";

const CHUNK = 6; // 3 cols × 2 rows per desktop page

const categoryColors: Record<string, string> = {
  "SEO & Content": "#2d6a4f",
  "Digital Advertising": "#1d4e89",
  "Email Marketing": "#6b3fa0",
  "Web Design": "#b8903a",
  "Bespoke Software": "#c0392b",
  Strategy: "#2c3e50",
};

function chunkArray<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function BlogPostsList({ posts }: { posts: Post[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const pages = chunkArray(posts, CHUNK);
  const total = pages.length;

  function goTo(n: number) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: n * el.offsetWidth, behavior: "smooth" });
    setPage(n);
  }

  return (
    <>
      {/* Scroller shell */}
      <div
        className="posts-outer"
        style={{
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: "12px 12px 0 0",
          overflow: "hidden",
        }}
      >
        <div
          ref={scrollerRef}
          className="posts-scroller"
          style={{ display: "flex", overflow: "hidden" }}
        >
          {pages.map((group, gi) => (
            <div
              key={gi}
              className="posts-page"
              style={{
                flex: "0 0 100%",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "rgba(0,0,0,0.07)",
              }}
            >
              {group.map((post) => (
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
                          background:
                            categoryColors[post.category] ?? "#b8903a",
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
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "rgba(17,17,17,0.3)",
                        }}
                      >
                        {post.date}
                      </span>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "rgba(17,17,17,0.3)",
                        }}
                      >
                        {post.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-only article count */}
      <p className="posts-count-mobile" style={{ display: "none", fontSize: "0.75rem", color: "rgba(17,17,17,0.35)", fontWeight: 500, margin: "0.75rem 0 0" }}>
        {posts.length} articles
      </p>

      {/* Controls bar — desktop only */}
      <div
        className="posts-controls"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 1.75rem",
          background: "#f2f0ec",
          border: "1px solid rgba(0,0,0,0.07)",
          borderTop: "none",
          borderRadius: "0 0 12px 12px",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            color: "rgba(17,17,17,0.4)",
            fontWeight: 500,
          }}
        >
          {posts.length} articles
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Prev */}
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            className={page > 0 ? "page-arrow" : ""}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              border: "1px solid rgba(0,0,0,0.1)",
              background: page === 0 ? "transparent" : "#fafaf8",
              color: page === 0 ? "rgba(17,17,17,0.2)" : "#111111",
              cursor: page === 0 ? "default" : "pointer",
              transition: "all 0.2s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M9 2L4 7L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Page numbers */}
          <div
            style={{
              display: "flex",
              gap: "0.35rem",
              alignItems: "center",
              padding: "0 0.25rem",
            }}
          >
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={i !== page ? "page-num" : ""}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "28px",
                  height: "28px",
                  borderRadius: "6px",
                  fontSize: "0.75rem",
                  fontWeight: i === page ? 700 : 400,
                  background:
                    i === page
                      ? "linear-gradient(135deg, #b8903a 0%, #8a6820 100%)"
                      : "transparent",
                  color: i === page ? "#fff" : "rgba(17,17,17,0.45)",
                  border: i === page ? "none" : "1px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => goTo(page + 1)}
            disabled={page === total - 1}
            className={page < total - 1 ? "page-arrow" : ""}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              border: "1px solid rgba(0,0,0,0.1)",
              background: page === total - 1 ? "transparent" : "#fafaf8",
              color: page === total - 1 ? "rgba(17,17,17,0.2)" : "#111111",
              cursor: page === total - 1 ? "default" : "pointer",
              transition: "all 0.2s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5 2L10 7L5 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .blog-card:hover { background: #f2f0ec !important; }
        .page-arrow:hover { border-color: rgba(184,144,58,0.4) !important; color: #b8903a !important; }
        .page-num:hover { color: #b8903a !important; border-color: rgba(184,144,58,0.3) !important; }

        @media (max-width: 900px) {
          /* Remove desktop shell borders; we'll re-add on controls */
          .posts-outer {
            border: none !important;
            border-radius: 0 !important;
            overflow: visible !important;
          }

          /* Flat horizontal scroll — all cards in one row */
          .posts-scroller {
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 12px !important;
            scrollbar-width: none !important;
          }
          .posts-scroller::-webkit-scrollbar { display: none !important; }

          /* Flatten page groups so cards are direct flex children */
          .posts-page {
            display: contents !important;
          }

          /* Each card: fixed width, snap */
          .posts-page > a {
            flex: 0 0 78% !important;
            border: 1px solid rgba(0,0,0,0.08) !important;
            border-radius: 10px !important;
            overflow: hidden !important;
            scroll-snap-align: start !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .posts-page > a .blog-card { flex: 1 !important; }

          /* Hide controls bar entirely on mobile */
          .posts-controls { display: none !important; }

          /* Show the standalone article count instead */
          .posts-count-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
