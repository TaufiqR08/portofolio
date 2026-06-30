import React from "react";

export default function Footer() {
  return (
    <footer className="container" style={{ padding: "1.5rem 1.25rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Taufiqurrohman
        </div>
        <div style={{ color: "var(--muted)" }}>
          Built with Next.js • Designed with care
        </div>
      </div>
    </footer>
  );
}
