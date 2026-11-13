import React, { useRef } from "react";
import { portfolioData } from "../../data/portfolio";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const trackRef = useRef(null);

  // Scroll Progress di track 190vh
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end start"],
  });

  // 1. 3D Stage Transformations (Tilting & Scaling the entire Hero)
  const stageScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.88]);
  const stageRotateX = useTransform(scrollYProgress, [0, 0.7], [0, 9]);
  const stageY = useTransform(scrollYProgress, [0, 0.7], ["0%", "8%"]);
  const stageOpacity = useTransform(scrollYProgress, [0.4, 0.75], [1, 0.15]);

  // 2. Character 3D Depth (Karakter Surya melangkah maju di ruang 3D)
  const charScale = useTransform(scrollYProgress, [0, 0.55], [1.15, 1.38]);
  const charY = useTransform(scrollYProgress, [0, 0.55], [0, -35]);

  // 3. Background Text 3D Parallax (Mundur ke belakang dan memudar)
  const textScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [0.06, 0]);

  // 4. Side Columns Fade Out (Kiri meluncur ke kiri, Kanan meluncur ke kanan)
  const leftX = useTransform(scrollYProgress, [0, 0.45], [0, -80]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const rightX = useTransform(scrollYProgress, [0, 0.45], [0, 80]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // 5. Bottom Ticker Fade Out
  const bottomY = useTransform(scrollYProgress, [0, 0.35], [0, 30]);
  const bottomOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const highlights = [
    { num: "01", title: "Frontend Architecture", desc: "Next.js 15, React 19 & TypeScript" },
    { num: "02", title: "Fullstack & Microservices", desc: "NestJS, Prisma ORM & PostgreSQL" },
    { num: "03", title: "Performant UI/UX", desc: "Tailwind CSS & Clean Motion" },
  ];

  return (
    <div id="home" ref={trackRef} className="relative h-[190vh] bg-[#09090b]">
      {/* STICKY 3D VIEWPORT */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-22 pb-4 sm:pb-6 px-6 [perspective:1400px]">
        
        {/* 3D STAGE CONTAINER */}
        <motion.div
          style={{
            scale: stageScale,
            rotateX: stageRotateX,
            y: stageY,
            opacity: stageOpacity,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full flex flex-col justify-between select-none origin-bottom"
        >
          {/* 1. CINEMATIC MONOCHROME SPOTLIGHT */}
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-white/[0.07] rounded-full blur-[130px] pointer-events-none" />

          {/* 2. MASSIVE STACKED TYPOGRAPHY BEHIND (3D PARALLAX) */}
          <motion.div
            style={{ y: textY, scale: textScale, opacity: textOpacity }}
            className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 flex flex-col items-center justify-center"
          >
            <span className="text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] xl:text-[15rem] font-black tracking-tighter uppercase text-white leading-[0.8] select-none">
              SURYA
            </span>
            <span className="text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] xl:text-[15rem] font-black tracking-tighter uppercase text-white leading-[0.8] select-none">
              DAFFA
            </span>
          </motion.div>

          {/* 3. MAIN HERO CONTENT GRID (FIT 100% IN SCREEN AT SCROLL = 0) */}
          <div className="container mx-auto max-w-7xl relative z-10 flex-grow flex items-end my-auto">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-end gap-6 pt-2 pb-1">
              
              {/* KOLOM KIRI: HEADLINE & TOMBOL LENGKAP */}
              <motion.div
                style={{ x: leftX, opacity: leftOpacity }}
                className="lg:col-span-4 flex flex-col items-start z-20 pb-2 lg:pb-6"
              >
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-3.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] font-mono font-medium tracking-wider text-neutral-300 uppercase">
                    Hey, I'm Surya
                  </span>
                </div>

                {/* Bold Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.05] mb-3">
                  Frontend <br />
                  <span className="text-neutral-400">Specialist.</span>
                </h1>

                {/* Description */}
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-5 max-w-xs sm:max-w-sm font-normal">
                  Mahasiswa S1 TI Semester 7 (UBSI) yang berfokus membangun antarmuka web modern, scalable, dan berperforma tinggi dengan Next.js & TypeScript.
                </p>

                {/* CTA Buttons (100% Full Terlihat Jelas) */}
                <div className="flex items-center gap-3">
                  <a
                    href="#projects"
                    className="px-5 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg group"
                  >
                    <span>Lihat Karya</span>
                    <i className="bi bi-arrow-up-right group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs"></i>
                  </a>

                  <a
                    href="#about"
                    className="px-4 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white font-mono text-xs font-semibold transition-all"
                  >
                    Tentang Saya
                  </a>
                </div>
              </motion.div>

              {/* KOLOM TENGAH: KARAKTER BESAR 3D POP FORWARD (NO BOX, NO CARD) */}
              <div className="lg:col-span-4 flex justify-center items-end relative z-10">
                <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] h-[400px] sm:h-[480px] lg:h-[530px] flex items-end justify-center">
                  
                  {/* Halo Ambient */}
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-white/[0.1] rounded-full blur-[70px] pointer-events-none" />

                  {/* Surya Cutout dengan 3D Parallax Pop */}
                  <motion.img
                    style={{ scale: charScale, y: charY }}
                    src={portfolioData.profileImage1}
                    alt={portfolioData.name}
                    className="w-full h-full object-contain object-bottom origin-bottom filter brightness-[100%] contrast-[104%] pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                  />
                </div>
              </div>

              {/* KOLOM KANAN: SECONDARY NARRATIVE & SOCIAL */}
              <motion.div
                style={{ x: rightX, opacity: rightOpacity }}
                className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right z-20 pb-2 lg:pb-6"
              >
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                  Capturing Performance. <br />
                  <span className="text-neutral-400">Architecting Modern Web.</span>
                </h2>

                <p className="text-neutral-400 text-xs leading-relaxed mb-5 max-w-xs sm:max-w-sm font-normal">
                  Dari pemodelan database relasional PostgreSQL & NestJS, hingga pengalaman pengguna interaktif di Next.js & React 19.
                </p>

                {/* Social Icons Round */}
                <div className="flex items-center gap-2 mb-4">
                  <a
                    href={portfolioData.contacts?.github || "https://github.com/sryxx16"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white text-neutral-400 hover:text-black border border-white/10 hover:border-white flex items-center justify-center transition-all duration-200"
                  >
                    <i className="bi bi-github text-sm"></i>
                  </a>
                  <a
                    href={portfolioData.contacts?.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white text-neutral-400 hover:text-black border border-white/10 hover:border-white flex items-center justify-center transition-all duration-200"
                  >
                    <i className="bi bi-linkedin text-sm"></i>
                  </a>
                  <a
                    href={portfolioData.contacts?.instagram || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white text-neutral-400 hover:text-black border border-white/10 hover:border-white flex items-center justify-center transition-all duration-200"
                  >
                    <i className="bi bi-instagram text-sm"></i>
                  </a>
                </div>

                <div className="text-[11px] font-mono text-neutral-500 flex items-center gap-1.5">
                  <i className="bi bi-geo-alt-fill text-neutral-400"></i>
                  <span>Bogor & Jakarta, Indonesia</span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* 4. BOTTOM TICKER HIGHLIGHTS (100% TERLIHAT DI LAYAR AT SCROLL = 0) */}
          <motion.div
            style={{ y: bottomY, opacity: bottomOpacity }}
            className="container mx-auto max-w-7xl relative z-20 pt-4 border-t border-white/10 mt-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {highlights.map((item) => (
                <div key={item.num} className="flex items-start gap-3.5 group">
                  <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-white transition-colors">
                    ^{item.num}
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase font-mono mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-neutral-400 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
