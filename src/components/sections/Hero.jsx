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
  const charScale = useTransform(scrollYProgress, [0, 0.55], [1.2, 1.45]);
  const charY = useTransform(scrollYProgress, [0, 0.55], [0, -30]);

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
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 pb-3 sm:pb-4 px-4 sm:px-6 [perspective:1400px]">

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
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[650px] lg:w-[750px] h-[380px] sm:h-[650px] lg:h-[750px] bg-white/[0.07] rounded-full blur-[110px] sm:blur-[130px] pointer-events-none" />

          {/* 2. MASSIVE STACKED TYPOGRAPHY BEHIND (3D PARALLAX) */}
          <motion.div
            style={{ y: textY, scale: textScale, opacity: textOpacity }}
            className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 flex flex-col items-center justify-center"
          >
            <span className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] xl:text-[15rem] font-black tracking-tighter uppercase text-white leading-[0.8] select-none">
              SURYA
            </span>
            <span className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] xl:text-[15rem] font-black tracking-tighter uppercase text-white leading-[0.8] select-none">
              DAFFA
            </span>
          </motion.div>

          {/* 3. MAIN HERO CONTENT GRID (RESPONSIVE FIT AT SCROLL = 0) */}
          <div className="container mx-auto max-w-7xl relative z-10 flex-grow flex items-end my-auto">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-end gap-3 sm:gap-6 pt-1 pb-1">

              {/* KOLOM KIRI: HEADLINE & TOMBOL LENGKAP */}
              <motion.div
                style={{ x: leftX, opacity: leftOpacity }}
                className="lg:col-span-4 flex flex-col items-start z-20 pb-1 sm:pb-2 lg:pb-6"
              >
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-2 sm:mb-3.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-wider text-neutral-300 uppercase">
                    Hey, I'm Surya
                  </span>
                </div>

                {/* Bold Headline */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-2 sm:mb-3">
                  Creative Web <br />
                  <span className="text-neutral-400">Developer.</span>
                </h1>

                {/* Description */}
                <p className="text-neutral-400 text-[11px] sm:text-sm leading-relaxed mb-3.5 sm:mb-5 max-w-xs sm:max-w-sm font-normal line-clamp-3 sm:line-clamp-none">
                  Menggabungkan rekayasa kode yang presisi dengan interaksi antarmuka yang halus. Spesialisasi ekosistem React, Next.js 15, dan desain web responsif.
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <a
                    href="#projects"
                    className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-mono font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 sm:gap-2 shadow-lg group"
                  >
                    <span>Lihat Karya</span>
                    <i className="bi bi-arrow-up-right group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs"></i>
                  </a>

                  <a
                    href="#about"
                    className="px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white font-mono text-[11px] sm:text-xs font-semibold transition-all"
                  >
                    Tentang Saya
                  </a>
                </div>

                {/* Mobile Social Links */}
                <div className="flex lg:hidden items-center gap-2 mt-3 pt-2">
                  <a
                    href={portfolioData.contacts?.github || "https://github.com/sryxx16"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-7 h-7 rounded-full bg-white/[0.04] hover:bg-white text-neutral-400 hover:text-black border border-white/10 flex items-center justify-center transition-all text-xs"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href={portfolioData.contacts?.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-7 h-7 rounded-full bg-white/[0.04] hover:bg-white text-neutral-400 hover:text-black border border-white/10 flex items-center justify-center transition-all text-xs"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    href={portfolioData.contacts?.instagram || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-7 h-7 rounded-full bg-white/[0.04] hover:bg-white text-neutral-400 hover:text-black border border-white/10 flex items-center justify-center transition-all text-xs"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <span className="text-[10px] font-mono text-neutral-500 ml-1.5 flex items-center gap-1">
                    <i className="bi bi-geo-alt-fill text-[9px] text-neutral-400"></i>
                    <span>Bogor & Jakarta</span>
                  </span>
                </div>
              </motion.div>

              {/* KOLOM TENGAH: KARAKTER BESAR 3D POP FORWARD (NO BOX, NO CARD) */}
              <div className="lg:col-span-4 flex justify-center items-end relative z-10">
                <div className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] h-[260px] sm:h-[380px] lg:h-[480px] max-h-[36vh] sm:max-h-[46vh] lg:max-h-[52vh] flex items-end justify-center">
                  {/* Halo Ambient */}
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-40 sm:w-64 h-40 sm:h-64 bg-white/[0.1] rounded-full blur-[60px] sm:blur-[70px] pointer-events-none" />

                  {/* Surya Cutout dengan 3D Parallax Pop */}
                  <motion.img
                    style={{ scale: charScale, y: charY }}
                    src={portfolioData.profileImage1}
                    alt={portfolioData.name}
                    className="w-full h-full object-contain object-bottom origin-bottom filter brightness-[100%] contrast-[104%] pointer-events-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]"
                  />
                </div>
              </div>

              {/* KOLOM KANAN: SECONDARY NARRATIVE & SOCIAL (HANYA MUNCUL DI DESKTOP AGAR MOBILE TIDAK PENUH) */}
              <motion.div
                style={{ x: rightX, opacity: rightOpacity }}
                className="hidden lg:flex lg:col-span-4 flex-col items-end text-right z-20 pb-6"
              >
                <h2 className="text-xl font-bold text-white tracking-tight mb-2">
                  Capturing Performance. <br />
                  <span className="text-neutral-400">Architecting Modern Web.</span>
                </h2>

                <p className="text-neutral-400 text-xs leading-relaxed mb-5 max-w-sm font-normal">
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

          {/* 4. BOTTOM TICKER HIGHLIGHTS (RESPONSIVE CHIPS DI MOBILE) */}
          <motion.div
            style={{ y: bottomY, opacity: bottomOpacity }}
            className="container mx-auto max-w-7xl relative z-20 pt-2.5 sm:pt-4 border-t border-white/10 mt-auto flex-shrink-0"
          >
            {/* Desktop 3 Columns */}
            <div className="hidden md:grid grid-cols-3 gap-6">
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

            {/* Mobile Horizontal Scrolling Chips (Hemat ruang) */}
            <div className="flex md:hidden overflow-x-auto no-scrollbar gap-2 py-0.5">
              {highlights.map((item) => (
                <div
                  key={item.num}
                  className="flex-shrink-0 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 flex items-center gap-1.5"
                >
                  <span className="text-[10px] font-mono font-bold text-neutral-400">
                    ^{item.num}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-300 whitespace-nowrap font-medium">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}