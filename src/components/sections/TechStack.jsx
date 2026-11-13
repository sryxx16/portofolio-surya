import React from "react";
import { portfolioData } from "../../data/portfolio";
import { motion } from "framer-motion";

export default function TechStack() {
  const duplicatedSkills = [
    ...portfolioData.skills,
    ...portfolioData.skills,
  ];

  return (
    <section
      id="skills"
      className="py-24 border-y border-white/5 relative overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-6 mb-12 relative z-10 max-w-7xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-neutral-600"></span>
            <span className="text-neutral-400 tracking-[0.25em] text-xs font-bold uppercase font-mono">
              TECH STACK & TOOLS
            </span>
            <span className="w-6 h-[1px] bg-neutral-600"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Teknologi & Keahlian Utama
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Stack modern yang aktif saya gunakan untuk membangun antarmuka frontend responsif dan sistem handal.
          </p>
        </div>
      </div>

      {/* Marquee Berjalan */}
      <div className="relative w-full flex overflow-hidden select-none">
        {/* Gradient Fade Mask */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-4 w-max px-4 py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="bg-[#121214] border border-white/10 hover:border-white/30 rounded-2xl py-3 px-5 flex items-center gap-3.5 min-w-[190px] hover:bg-white/[0.06] transition-all duration-300 group cursor-default"
            >
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center p-2.5 border border-white/10 group-hover:scale-105 transition-transform">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="text-white text-xs font-bold font-mono tracking-wide">
                  {skill.name}
                </h4>
                <p className="text-[10px] text-neutral-500 font-mono uppercase">
                  {skill.category || "Skill"}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
