"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    num: "01",
    title: "Beat Production",
    description: "Custom beats crafted to your vision. From concept to final instrumental, built with the same process behind platinum records.",
  },
  {
    num: "02",
    title: "Full Production",
    description: "End-to-end production — arrangement, instrumentation, and sonic direction to bring your record to life at the highest level.",
  },
  {
    num: "03",
    title: "Mixing & Mastering",
    description: "Professional mix and master that translates across every platform. Your music polished to industry standard.",
  },
  {
    num: "04",
    title: "Artist Consulting",
    description: "Strategic guidance on your sound, brand, and career. Leverage decades of industry experience to accelerate your trajectory.",
  },
  {
    num: "05",
    title: "Film & TV Scoring",
    description: "Original compositions and licensing for film, television, and media. Cinematic scores that move audiences.",
  },
  {
    num: "06",
    title: "A&R Development",
    description: "Artist and repertoire development for emerging talent. From identifying sound to securing placement.",
  },
];

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.07}>
      <div
        style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: hovered ? "1rem 0 1.2rem" : "0.8rem 0", cursor: "default", textAlign: "center", transition: "padding 0.3s" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h3
          className="text-white transition-all duration-300"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            letterSpacing: "0.04em",
            opacity: hovered ? 1 : 0.7,
          }}
        >
          {service.title}
        </h3>

        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: hovered ? "50px" : "0", opacity: hovered ? 1 : 0 }}
        >
          <p
            style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", lineHeight: 1.4, maxWidth: "500px", margin: "0.4rem auto 0", textAlign: "center", display: "block" }}
          >
            {service.description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: "rgba(0,0,0,0.78)", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <FadeIn className="w-full">
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.4em", fontSize: "0.875rem", fontWeight: 600, marginBottom: "1.5rem" }}>
              What I Do
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "7rem" }}>
              <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2rem, 7vw, 8rem)", letterSpacing: "0.02em", lineHeight: 1, color: "white" }}>
                SERVICES
              </h2>
            </div>
          </div>
        </FadeIn>

        <div style={{ width: "100%", maxWidth: "700px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {services.map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} />
          ))}
        </div>

        <FadeIn delay={0.4} className="w-full">
          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "5rem", textAlign: "center" }}>
            <a
              href="#contact"
              style={{ fontFamily: "var(--font-inter)", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.25em", fontSize: "0.75rem", padding: "1.25rem 2rem", textDecoration: "none", transition: "all 0.3s", display: "inline-block", textAlign: "center" }}
            >
              Inquire About a Project
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
