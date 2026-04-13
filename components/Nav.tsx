"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Credits", href: "#credits" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen ? "bg-black/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
        }`}
        style={{ padding: "1rem 2rem" }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Image
              src="/assets/bos-logo-white.png"
              alt="Bos"
              width={70}
              height={35}
              className="object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", fontWeight: 600 }}>
              Bent On Success
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex" style={{ gap: "2.5rem", listStyle: "none" }}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "white"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem", display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <span style={{ display: "block", width: "22px", height: "1px", background: "white", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "1px", background: "white", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "22px", height: "1px", background: "white", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "1rem", paddingTop: "1rem", paddingBottom: "1rem" }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: "block", fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 500, textDecoration: "none", padding: "0.75rem 0" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
