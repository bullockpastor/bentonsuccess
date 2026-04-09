"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-full"
        style={{
          y,
          backgroundImage: "url('/assets/bos-photo-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top -5% center",
          backgroundRepeat: "no-repeat",
          top: "-20%",
          bottom: "-20%",
        }}
      />
      {/* Permanent bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #000 80%)" }}
      />
    </div>
  );
}
