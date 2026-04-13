"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full flex items-center justify-center overflow-hidden" style={{ height: "100svh" }}
    >
      {/* Background video with parallax */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: videoY }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src="/assets/hero.mov" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 flex flex-col items-center"
        style={{ y: contentY, opacity }}
      >
        <motion.p
          className="text-white/60 uppercase tracking-[0.5em] text-base"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 600, marginBottom: "6rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Ivy League Productions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/assets/bos-logo-white.png"
            alt="BOS"
            width={380}
            height={190}
            className="object-contain mx-auto"
            priority
          />
        </motion.div>

        <motion.p
          className="text-white/60 text-base tracking-[0.35em] uppercase"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 600, marginTop: "6rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Bent On Success
        </motion.p>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        style={{ opacity }}
      >
        <motion.div
          className="w-px h-12 bg-white/25 mx-auto origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
