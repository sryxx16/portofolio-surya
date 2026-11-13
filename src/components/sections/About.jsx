import React, { useState, useEffect } from "react";
import { portfolioData } from "../../data/portfolio";
import { motion } from "framer-motion";

export default function About() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("id-ID", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " WIB"
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const corePillars = [
    { title: "Next.js 15 & React 19", tag: "Frontend Standard" },
    { title: "TypeScript & Type Safety", tag: "Strict Code" },
    { title: "NestJS & Microservices", tag: "Scalable API" },
    { title: "PostgreSQL & Prisma ORM", tag: "Relational DB" },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-transparent select-none">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-neutral-600"></span>
              <span className="text-neutral-400 tracking-[0.25em] text-xs font-bold uppercase font-mono">
                ABOUT & PHILOSOPHY
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              Engineering Intuitive Interfaces with <br className="hidden sm:inline" />
              <span className="text-neutral-400">
                Scalable Modern Architecture.
              </span>
            </h2>
          </div>

          <div className="text-xs font-mono text-neutral-400 self-start md:self-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>S1 TI Semester 7 • UBSI</span>
          </div>
        </div>

        {/* THE ENGINEERING BENTO GRID (GAYA APPLE & VERCEL PRO) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* TILE 1: THE CORE MANIFESTO (Besar - 8 Kolom) */}
          <div className="md:col-span-8 bg-[#121214] border border-white/10 hover:border-white/20 rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  // PROFILE MANIFESTO
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  DEVELOPER ETHOS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-5">
                Menghubungkan ketelitian visual antarmuka dengan arsitektur backend yang kokoh.
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {portfolioData.about}
              </p>
            </div>

            {/* Core Capability Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 border-t border-white/10">
              {corePillars.map((item, idx) => (
                <div key={idx} className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-left">
                  <p className="text-[10px] font-mono text-neutral-500 uppercase">{item.tag}</p>
                  <p className="text-xs font-mono font-bold text-neutral-200 mt-0.5 truncate">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TILE 2: LIVE TELEMETRY & WORKSTATION (4 Kolom) */}
          <div className="md:col-span-4 bg-[#121214] border border-white/10 hover:border-white/20 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  // LIVE STATUS
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">Online</span>
                </div>
              </div>

              {/* Live Digital Clock */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 mb-6 text-center">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">
                  LOCAL TIME (JAKARTA / BOGOR)
                </p>
                <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white">
                  {time || "12:00:00 WIB"}
                </div>
              </div>

              {/* Status List */}
              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-neutral-500">STATUS</span>
                  <span className="text-white font-semibold">Available for Projects</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-neutral-500">ACADEMICS</span>
                  <span className="text-white font-semibold">UBSI TI (Semester 7)</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-neutral-500">LOCATION</span>
                  <span className="text-white font-semibold">Bogor & Jakarta, ID</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">EXPERIENCE</span>
                  <span className="text-white font-semibold">10+ Finished Works</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>WORKSTATION</span>
              <span>DEV READY 🟢</span>
            </div>
          </div>

          {/* TILE 3: HONORS & RECOGNITION (4 Kolom) */}
          <div className="md:col-span-4 bg-[#121214] border border-white/10 hover:border-white/20 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-4">
                // HONORS & CERTIFICATIONS
              </span>

              <h4 className="text-lg font-bold text-white mb-6">
                Validasi Industri & Prestasi
              </h4>

              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white text-base flex-shrink-0">
                    🏆
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase font-mono">Juara 3 IT Bootcamp</h5>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Software Dev for Industry (UBSI & HKI)</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white text-base flex-shrink-0">
                    📜
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase font-mono">Sertifikasi HKI Resmi</h5>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Hak Cipta Arsitektur Web Jasa Titip</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white text-base flex-shrink-0">
                    🎖️
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase font-mono">Uji Kompetensi BNSP</h5>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Sertifikasi Okupasi Analis Program</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-[11px] font-mono text-neutral-500">
              VERIFIED CREDENTIALS
            </div>
          </div>

          {/* TILE 4: THE CORE STACK CLOUD (4 Kolom) */}
          <div className="md:col-span-4 bg-[#121214] border border-white/10 hover:border-white/20 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-4">
                // TECH RADAR
              </span>

              <h4 className="text-lg font-bold text-white mb-5">
                Modern Stack Ecosystem
              </h4>

              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 15",
                  "React 19",
                  "TypeScript",
                  "Tailwind CSS",
                  "NestJS",
                  "Prisma ORM",
                  "PostgreSQL",
                  "Laravel",
                  "MySQL",
                  "Flutter",
                  "Docker Dev",
                  "Git & GitHub",
                ].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white text-neutral-300 hover:text-black border border-white/10 hover:border-white text-xs font-mono transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="pt-6 mt-6 border-t border-white/10 text-[11px] font-mono text-neutral-500">
              PRODUCTION-READY TOOLS
            </p>
          </div>

          {/* TILE 5: RESUME & DIRECT CONNECT (4 Kolom) */}
          <div className="md:col-span-4 bg-[#121214] border border-white/10 hover:border-white/20 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-4">
                // CURRICULUM VITAE
              </span>

              <h4 className="text-lg font-bold text-white mb-2">
                Unduh Resume Lengkap
              </h4>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                Dapatkan rincian riwayat pendidikan, rekam jejak proyek klien, dan skill set teknis dalam format PDF resmi.
              </p>

              {/* Direct Download CV Button */}
              <a
                href={portfolioData.resumeUrl || "/CV Surya Daffa Fauzi Khoerudin.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg group"
              >
                <i className="bi bi-file-earmark-pdf-fill text-base"></i>
                <span>Download CV Surya (PDF)</span>
                <i className="bi bi-arrow-down group-hover:translate-y-0.5 transition-transform text-sm"></i>
              </a>
            </div>

            {/* Quick social links */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>CONNECT:</span>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.contacts?.github || "https://github.com/sryxx16"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href={portfolioData.contacts?.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
