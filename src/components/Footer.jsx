import React from "react";
import { portfolioData } from "../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#09090b] py-12 relative overflow-hidden select-none">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-black font-mono text-sm shadow-md">
              S
            </div>
            <div>
              <span className="text-white font-bold text-sm tracking-tight font-mono">
                SURYA<span className="text-neutral-500">.DEV</span>
              </span>
              <p className="text-[11px] text-neutral-400 font-mono">Frontend Specialist</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Journey</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={portfolioData.contacts?.github || "https://github.com/sryxx16"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
            >
              <i className="bi bi-github text-sm"></i>
            </a>
            <a
              href={portfolioData.contacts?.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
            >
              <i className="bi bi-linkedin text-sm"></i>
            </a>
            <a
              href={portfolioData.contacts?.instagram || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
            >
              <i className="bi bi-instagram text-sm"></i>
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-mono gap-4">
          <p>© {currentYear} Surya Daffa Fauzi Khoerudin. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with Next-gen React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
