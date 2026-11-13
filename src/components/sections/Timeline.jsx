import React from "react";
import { motion } from "framer-motion";

export default function Timeline() {
  const experiences = [
    {
      year: "2023 - Sekarang",
      title: "Mahasiswa S1 Teknologi Informasi (Semester 7)",
      company: "Universitas Bina Sarana Informatika (UBSI)",
      description:
        "Berfokus pada pengembangan web modern dan arsitektur frontend dengan pendekatan problem solving dan clean code. Mengembangkan proyek berbasis Next.js, React, NestJS, dan database relasional.",
      icon: "bi-mortarboard-fill",
    },
    {
      year: "2025",
      title: "Juara 3 – IT Bootcamp Software Development for Industry",
      company: "Universitas Bina Sarana Informatika (UBSI)",
      description:
        "Merancang platform Jasa Titip (Jastipku) dengan fitur multi-role (Customer, Traveler, Admin) dan perancangan database terstruktur. Meraih Juara 3 dan memperoleh Sertifikat Hak Kekayaan Intelektual (HKI).",
      icon: "bi-trophy-fill",
    },
    {
      year: "2025",
      title: "Frontend Developer – Jakarta Scooter Shop (Team Project)",
      company: "Jakarta Scooter Shop",
      description:
        "Mengembangkan antarmuka e-commerce berbasis Next.js dan Tailwind CSS, terintegrasi dengan backend NestJS melalui RESTful API dan state management terstruktur.",
      icon: "bi-cart-fill",
    },
    {
      year: "2024 - 2025",
      title: "Pelatihan & Sertifikasi Profesional",
      company: "Coding Studio & Cisco Networking Academy",
      description:
        "Menyelesaikan sertifikasi fundamental Front-End Web di Coding Studio serta sertifikasi PCAP Python di Cisco Networking Academy guna memperkuat pondasi algoritma dan logika pemrograman.",
      icon: "bi-award-fill",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 border-t border-white/5 relative z-10 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-neutral-600"></span>
            <span className="text-neutral-400 tracking-[0.25em] text-xs font-bold uppercase font-mono">
              JOURNEY & EXPERIENCE
            </span>
            <span className="w-6 h-[1px] bg-neutral-600"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Perjalanan & Pengalaman
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Rekam jejak akademis, prestasi kompetisi, dan kontribusi pengembangan perangkat lunak.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Bullet Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#121214] border border-white/20 flex items-center justify-center text-white text-xs group-hover:scale-110 group-hover:border-white transition-all shadow-md">
                <i className={`bi ${exp.icon}`}></i>
              </div>

              {/* Year Stamp */}
              <span className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase mb-1 block">
                {exp.year}
              </span>

              {/* Card Container */}
              <div className="bg-[#121214] border border-white/10 hover:border-white/25 rounded-2xl p-6 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mb-3">
                  {exp.company}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
