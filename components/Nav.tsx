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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/95 backdrop-blur-sm py-4 border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
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
        <ul className="flex gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/50 hover:text-white text-xs uppercase tracking-[0.2em] transition-colors duration-200 font-medium"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
