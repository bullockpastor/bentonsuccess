"use client";

import FadeIn from "@/components/FadeIn";

const centered: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
};

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "rgba(0,0,0,0.82)", padding: "5rem 2rem" }}>
      <div style={{ ...centered, maxWidth: "900px", margin: "0 auto" }}>

        <FadeIn delay={0.1} className="w-full">
          <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.4em", fontSize: "0.875rem", fontWeight: 600, marginBottom: "1.5rem", textAlign: "center" }}>
            About
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full">
          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2rem, 7vw, 8rem)", letterSpacing: "0.02em", lineHeight: 1, color: "white", textAlign: "center" }}>
              TIMOTHY <span style={{ color: "rgba(255,255,255,0.3)" }}>&lsquo;BOS&rsquo;</span> BULLOCK
            </h2>
          </div>
        </FadeIn>

        <div style={{ ...centered, maxWidth: "680px", gap: "1.5rem" }}>
          <FadeIn delay={0.3} className="w-full">
            <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.75rem", textAlign: "center", marginBottom: "0.5rem" }}>
              Producer · Composer · Founder, Ivy League Productions
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="w-full">
            <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: "0.95rem", textAlign: "center" }}>
              Timothy &ldquo;Bos&rdquo; Bullock is a multi-platinum, Billboard-charting music producer and composer whose work spans R&B, Pop, Hip-Hop, K-Pop, and film. As the founder of <strong style={{ color: "white" }}>Ivy League Productions</strong>, Bullock has contributed to globally recognized records and chart-dominating projects, establishing himself as a versatile and influential force shaping the sound of contemporary music.
            </p>
          </FadeIn>
          <FadeIn delay={0.5} className="w-full">
            <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: "0.95rem", textAlign: "center" }}>
              A native of Detroit, Michigan and a graduate of Morehouse College, Bullock launched his professional career with the platinum-certified title track from <em>The Inspiration</em> by Young Jeezy — debuting at No. 1 on the Billboard 200 and signaling the arrival of a producer with both commercial precision and cultural depth.
            </p>
          </FadeIn>
          <FadeIn delay={0.6} className="w-full">
            <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: "0.95rem", textAlign: "center" }}>
              His production spans multiple No. 1 Billboard 200 projects, including &ldquo;Womanizer&rdquo; for Britney Spears — a global No. 1 on the Billboard Hot 100 — and score work for <em>Beats</em>, a Netflix film starring Anthony Anderson, demonstrating a refined command of emotional storytelling across both music and cinema.
            </p>
          </FadeIn>
          <FadeIn delay={0.7} className="w-full">
            <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: "0.95rem", textAlign: "center" }}>
              Beyond the studio, Bullock is an active voice in cultural and industry discourse — a featured panelist at the Democratic National Convention — and a partner in two production studios: <a href="https://www.elationent.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline", textUnderlineOffset: "3px" }}>Elation Entertainment</a> (New Orleans) and <a href="https://torchatl.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline", textUnderlineOffset: "3px" }}>Torch</a> (Atlanta), extending his footprint across key creative hubs.
            </p>
          </FadeIn>
          <FadeIn delay={0.8} className="w-full">
            <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: "0.95rem", textAlign: "center" }}>
              Through Ivy League Productions, Bullock continues to develop emerging talent, produce cross-genre records, and expand into film, digital media, and next-generation creative platforms — bridging artistry with global impact.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
