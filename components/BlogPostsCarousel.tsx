"use client";

import { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  totalPosts: number;
  totalPages: number;
}

export default function BlogPostsCarousel({
  children,
  totalPosts,
  totalPages,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  function goTo(n: number) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: n * el.offsetWidth, behavior: "smooth" });
    setPage(n);
  }

  return (
    <>
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
          {children}
        </div>
      </div>

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
          {totalPosts} articles
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
            {Array.from({ length: totalPages }, (_, i) => (
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
            disabled={page === totalPages - 1}
            className={page < totalPages - 1 ? "page-arrow" : ""}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              border: "1px solid rgba(0,0,0,0.1)",
              background: page === totalPages - 1 ? "transparent" : "#fafaf8",
              color:
                page === totalPages - 1 ? "rgba(17,17,17,0.2)" : "#111111",
              cursor: page === totalPages - 1 ? "default" : "pointer",
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
    </>
  );
}
