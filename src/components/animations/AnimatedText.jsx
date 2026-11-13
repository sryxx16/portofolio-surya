import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText({ text = "", className = "", isParagraph = false }) {
  if (!text) return null;

  const words = text.trim().split(/\s+/);
  const isLong = isParagraph || words.length > 14;

  // Untuk paragraf panjang: animasikan keseluruhan block dengan fade-in & slide-up halus
  if (isLong) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {text}
      </motion.p>
    );
  }

  // Untuk judul/heading pendek: efek staggered words yang cepat & presisi
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 140,
      },
    },
    hidden: {
      opacity: 0,
      y: 18,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      className={`inline-flex flex-wrap items-baseline ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

