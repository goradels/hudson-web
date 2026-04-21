import NavClient from "./NavClient";

const links = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const logo = (
    <a
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        textDecoration: "none",
      }}
    >
      <span
        style={{
          width: "32px",
          height: "32px",
          background: "linear-gradient(135deg, #b8903a 0%, #8a6820 100%)",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: "0.85rem",
          color: "#fff",
          flexShrink: 0,
        }}
      >
        H
      </span>
      <span
        style={{
          color: "#111111",
          fontWeight: 700,
          fontSize: "1.05rem",
          letterSpacing: "-0.02em",
        }}
      >
        Hudson Web Group
      </span>
    </a>
  );

  const desktopNav = (
    <nav
      className="hidden-mobile"
      style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}
    >
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="nav-link"
          style={{
            color: "rgba(17,17,17,0.5)",
            fontSize: "0.875rem",
            letterSpacing: "0.01em",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          {l.label}
        </a>
      ))}
      <a
        href="#contact"
        className="nav-cta"
        style={{
          background: "linear-gradient(135deg, #b8903a 0%, #8a6820 100%)",
          color: "#fff",
          padding: "0.5rem 1.25rem",
          borderRadius: "6px",
          fontSize: "0.875rem",
          fontWeight: 600,
          textDecoration: "none",
          transition: "opacity 0.2s",
        }}
      >
        Get in Touch
      </a>
    </nav>
  );

  return (
    <>
      <NavClient logo={logo} desktopNav={desktopNav} links={links} />
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
        .nav-link:hover { color: #111111 !important; }
        .nav-cta:hover { opacity: 0.85 !important; }
      `}</style>
    </>
  );
}
