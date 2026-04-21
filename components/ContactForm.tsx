"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

type State = { success?: boolean; error?: string } | null;

async function submitContact(_prev: State, formData: FormData): Promise<State> {
  const body = {
    name: formData.get("name"),
    businessName: formData.get("businessName"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) return { error: data.error ?? "Something went wrong." };
    return { success: true };
  } catch {
    return { error: "Network error. Please try again." };
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        width: "100%",
        background: pending
          ? "rgba(184,144,58,0.5)"
          : "linear-gradient(135deg, #b8903a 0%, #8a6820 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "1rem 2rem",
        fontSize: "0.95rem",
        fontWeight: 700,
        letterSpacing: "0.01em",
        cursor: pending ? "not-allowed" : "pointer",
        transition: "opacity 0.2s, transform 0.2s",
        boxShadow: "0 4px 20px rgba(184,144,58,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.6rem",
      }}
      onMouseEnter={(e) => {
        if (!pending) {
          (e.currentTarget as HTMLElement).style.opacity = "0.88";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.opacity = "1";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {pending ? (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            style={{ animation: "spin 0.8s linear infinite" }}
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="31.4"
              strokeDashoffset="10"
              strokeLinecap="round"
            />
          </svg>
          Sending…
        </>
      ) : (
        <>
          Send Message
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7H12M12 7L7 2M12 7L7 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      )}
    </button>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "8px",
  padding: "0.85rem 1rem",
  fontSize: "0.95rem",
  color: "#111111",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.72rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "#b8903a",
  fontWeight: 700,
  marginBottom: "0.5rem",
};

export default function ContactForm() {
  const [state, formAction] = useActionState<State, FormData>(
    submitContact,
    null
  );

  if (state?.success) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(184,144,58,0.2)",
          borderRadius: "12px",
          padding: "3rem 2.5rem",
          textAlign: "center",
          boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            background: "linear-gradient(135deg, #b8903a 0%, #8a6820 100%)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#111111",
            margin: "0 0 0.75rem",
          }}
        >
          Message sent!
        </h3>
        <p style={{ color: "rgba(17,17,17,0.5)", fontSize: "0.95rem", margin: 0, lineHeight: 1.7 }}>
          Check your inbox — we&apos;ve sent you a confirmation. Expect to hear
          from us within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      style={{
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: "12px",
        padding: "2.5rem",
        boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
        textAlign: "left",
      }}
    >
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .contact-input:focus {
          border-color: rgba(184,144,58,0.5) !important;
          box-shadow: 0 0 0 3px rgba(184,144,58,0.1) !important;
        }
      `}</style>

      <div style={{ display: "grid", gap: "1.25rem" }}>
        {/* Row: Name + Business */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label htmlFor="name" style={labelStyle}>Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Smith"
              className="contact-input"
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="businessName" style={labelStyle}>Business Name</label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              required
              placeholder="Acme Co."
              className="contact-input"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" style={labelStyle}>Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@acmeco.com"
            className="contact-input"
            style={inputStyle}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" style={labelStyle}>Your Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your business and what you're looking to achieve…"
            className="contact-input"
            style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }}
          />
        </div>

        {/* Error */}
        {state?.error && (
          <p
            style={{
              margin: 0,
              fontSize: "0.88rem",
              color: "#c0392b",
              background: "rgba(192,57,43,0.06)",
              border: "1px solid rgba(192,57,43,0.15)",
              borderRadius: "6px",
              padding: "0.75rem 1rem",
            }}
          >
            {state.error}
          </p>
        )}

        <SubmitButton />
      </div>
    </form>
  );
}
