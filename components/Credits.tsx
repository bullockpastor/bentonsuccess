"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

function CreditRow({ credit, index }: { credit: { artist: string; work: string; detail: string }; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn key={credit.artist} delay={index * 0.04} className="w-full">
      <div
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0.5rem 0", textAlign: "center", cursor: "default" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "0.04em", color: hovered ? "white" : "rgba(255,255,255,0.75)", transition: "color 0.3s" }}>
          {credit.artist}
        </p>
        <div style={{ overflow: "hidden", maxHeight: hovered ? "60px" : "0", opacity: hovered ? 1 : 0, transition: "max-height 0.4s ease, opacity 0.4s ease" }}>
          <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: "0.5rem" }}>
            {credit.work}{credit.detail ? ` — ${credit.detail}` : ""}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

const credits = [
  { artist: "Twice", work: "ATM", detail: "K-Pop" },
  { artist: "Beyoncé", work: "Sandcastles", detail: "Lemonade" },
  { artist: "Britney Spears", work: "Womanizer", detail: "#1 Billboard Hot 100" },
  { artist: "Justin Bieber", work: "Selected Works", detail: "" },
  { artist: "Chris Brown", work: "Selected Works", detail: "" },
  { artist: "Red Velvet", work: "Really Bad Boy", detail: "#1 Worldwide" },
  { artist: "NCT Dream", work: "Yogurt Shake", detail: "ISTJ" },
  { artist: "NCT U", work: "Selected Works", detail: "" },
  { artist: "Aespa", work: "Selected Works", detail: "" },
  { artist: "EXO", work: "Ex'Act", detail: "#1 Album Worldwide" },
  { artist: "Ledisi", work: "Let Love Rule", detail: "Grammy Nominated" },
  { artist: "Young Jeezy", work: "The Inspiration", detail: "Platinum" },
];

const highlights = [
  { stat: "Multi-Platinum", label: "Producer" },
  { stat: "#1", label: "Billboard Hot 100" },
  { stat: "#1", label: "Billboard 200" },
  { stat: "Netflix", label: "Original Film Composer" },
];

export default function Credits() {
  return (
    <section id="credits" style={{ backgroundColor: "rgba(0,0,0,0.88)", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%" }}>

        <FadeIn className="w-full">
          <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.4em", fontSize: "0.875rem", fontWeight: 600, marginBottom: "1.5rem", textAlign: "center" }}>
            Discography
          </p>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(4rem, 9vw, 8rem)", letterSpacing: "0.02em", lineHeight: 1, color: "white", marginBottom: "3rem", textAlign: "center", width: "100%" }}>
            NOTABLE CREDITS
          </h2>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.1} className="w-full">
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            {highlights.map((h) => (
              <div key={h.label} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(1.2rem, 2vw, 1.8rem)", letterSpacing: "0.06em", color: "white", lineHeight: 1 }}>
                  {h.stat}
                </p>
                <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.35)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "0.4rem" }}>
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Credits list */}
        <div style={{ width: "100%", maxWidth: "700px" }}>
          {credits.map((credit, i) => (
            <CreditRow key={credit.artist} credit={credit} index={i} />
          ))}
        </div>

        <FadeIn delay={0.5} className="w-full">
          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "3rem" }}>
            <a
              href="https://credits.muso.ai/profile/6d850e12-97ba-4bfe-9fb5-4c44a3d95909/credits"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-inter)", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.25em", fontSize: "0.75rem", padding: "1.25rem 2rem", textDecoration: "none", transition: "all 0.3s", display: "inline-block", textAlign: "center" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "white";
                (e.currentTarget as HTMLAnchorElement).style.color = "white";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
              }}
            >
              Full Discography
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
