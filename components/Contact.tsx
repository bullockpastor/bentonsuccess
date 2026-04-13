"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ContactModal from "@/components/ContactModal";

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: "rgba(0,0,0,0.82)", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>

        <FadeIn className="w-full">
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.4em", fontSize: "0.875rem", fontWeight: 600, marginBottom: "1.5rem" }}>
              Get In Touch
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2rem, 7vw, 9rem)", letterSpacing: "0.02em", lineHeight: 1, color: "white", whiteSpace: "nowrap" }}>
                LET&apos;S <span style={{ color: "rgba(255,255,255,0.2)" }}>CREATE.</span>
              </h2>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full">
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.4)", fontSize: "1.1rem", marginBottom: "2.5rem", textAlign: "center", maxWidth: "500px" }}>
              Ready to work on something extraordinary? Reach out to discuss your project.
            </p>
            <ContactModal />
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="w-full">
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "8rem", paddingTop: "3rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <Image
              src="/assets/bos-logo-white.png"
              alt="Bos"
              width={80}
              height={40}
              style={{ objectFit: "contain", opacity: 0.3 }}
            />
            <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.2)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em" }}>
              © {new Date().getFullYear()} Ivy League Productions · Bent On Success
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
