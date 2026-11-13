import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const particles = Array.from({ length: 12 });

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#09090b] pointer-events-none select-none">
      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* Very Soft Monochromatic Ambient Radial Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[150px]" />

      {/* Ambient Floating Dust in Pure Faint White */}
      {particles.map((_, i) => {
        const size = (i % 3) + 1;
        const duration = 18 + (i % 10) * 2;
        const startY = (i * 8.5) % 100;
        const startX = (i * 11.3) % 100;

        return (
          <motion.div
            key={i}
            initial={{ y: `${startY}vh`, x: `${startX}vw`, opacity: 0 }}
            animate={{
              y: [`${startY}vh`, `${startY - 15}vh`],
              opacity: [0, 0.25, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: (i * 1.2) % 6,
            }}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              willChange: "transform, opacity",
            }}
          />
        );
      })}
    </div>
  );
}
