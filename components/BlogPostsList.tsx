import Link from "next/link";
import type { Post } from "@/lib/posts";
import BlogPostsCarousel from "./BlogPostsCarousel";

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

function PostCard({ post }: { post: Post }) {
  return (
    <Link
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
  );
}

export default function BlogPostsList({ posts }: { posts: Post[] }) {
  const pages = chunkArray(posts, CHUNK);

  return (
    <>
      {/* Mobile-only article count */}
      <p
        className="posts-count-mobile"
        style={{
          display: "none",
          fontSize: "0.75rem",
          color: "rgba(17,17,17,0.35)",
          fontWeight: 500,
          margin: "0.75rem 0 0",
        }}
      >
        {posts.length} articles
      </p>

      <BlogPostsCarousel totalPosts={posts.length} totalPages={pages.length}>
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
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ))}
      </BlogPostsCarousel>

      <style>{`
        .blog-card:hover { background: #f2f0ec !important; }
        .page-arrow:hover { border-color: rgba(184,144,58,0.4) !important; color: #b8903a !important; }
        .page-num:hover { color: #b8903a !important; border-color: rgba(184,144,58,0.3) !important; }

        @media (max-width: 900px) {
          .posts-outer {
            border: none !important;
            border-radius: 0 !important;
            overflow: visible !important;
          }
          .posts-scroller {
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 12px !important;
            scrollbar-width: none !important;
          }
          .posts-scroller::-webkit-scrollbar { display: none !important; }

          /* Flatten page groups so cards become direct flex children */
          .posts-page { display: contents !important; }

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

          /* Hide controls bar; show standalone count instead */
          .posts-controls { display: none !important; }
          .posts-count-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
