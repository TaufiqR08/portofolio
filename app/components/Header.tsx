import React, { type CSSProperties } from "react";

type AnimationStyle = CSSProperties & {
  "--delay": string;
};

export default function Header() {
  return (
    <header className="site-header container">
      <div className="logo">Taufiqurrohman</div>
      <nav className="nav-links" aria-label="Main navigation">
        <a
          href="#about"
          className="fade-in"
          style={{ "--delay": "80ms" } as AnimationStyle}
        >
          About
        </a>
        <a
          href="#work"
          className="fade-in"
          style={{ "--delay": "140ms" } as AnimationStyle}
        >
          Work
        </a>
        <a
          href="#contact"
          className="cta fade-in"
          style={{ "--delay": "200ms" } as AnimationStyle}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
