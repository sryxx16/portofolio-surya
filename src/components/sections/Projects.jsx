import React, { useState } from "react";
import { portfolioData } from "../../data/portfolio";
import ProjectModal from "../ProjectModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = portfolioData.projects;
  const activeProject = projects[activeIndex] || projects[0];

  return (
    <>
      <section id="projects" className="py-20 sm:py-28 relative overflow-hidden bg-transparent select-none">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
          
          {/* HEADER SECTION */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-5 sm:w-6 h-[1px] bg-neutral-600"></span>
                <span className="text-neutral-400 tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs font-bold uppercase font-mono">
                  FEATURED WORK & STUDIO
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Selected Works & <br className="hidden sm:inline" />
                <span className="text-neutral-400">
                  Real-World Engineering.
                </span>
              </h2>
            </div>

            <div className="text-xs font-mono text-neutral-400 self-start md:self-auto flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{projects.length} Production & Team Projects</span>
            </div>
          </div>

          {/* MOBILE PROJECT TAB SELECTOR (HANYA MUNCUL DI MOBILE / TABLET AGAR MUDAH SWAP) */}
          <div className="flex lg:hidden overflow-x-auto no-scrollbar gap-2 pb-2 mb-5">
            {projects.map((project, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-white text-black font-bold shadow-md"
                      : "bg-[#18181b] text-neutral-400 border border-white/10 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] opacity-70">0{idx + 1}</span>
                  <span>{project.title.split("—")[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* INTERACTIVE SHOWCASE STAGE */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* SISI KANAN / ATAS PADA MOBILE: DUAL DEVICE MOCKUP STAGE */}
            <div className="order-1 lg:order-2 lg:col-span-7 lg:sticky lg:top-28">
              <div className="bg-[#121214] border border-white/15 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative">
                
                {/* AMBIENT SPOTLIGHT */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-white/[0.05] rounded-full blur-[70px] sm:blur-[90px] pointer-events-none" />

                {/* DUAL DEVICE CONTAINER */}
                <div
                  className="relative w-full pt-2 sm:pt-4 pb-6 sm:pb-8 flex items-center justify-center cursor-pointer group"
                  onClick={() => setSelectedProject(activeProject)}
                >
                  
                  {/* 1. THE MACBOOK LAPTOP MOCKUP */}
                  <div className="relative w-[92%] sm:w-[86%] transition-transform duration-500 group-hover:scale-[1.02]">
                    {/* Screen Frame */}
                    <div className="bg-[#1b1b1e] p-2 sm:p-3 rounded-t-xl sm:rounded-t-3xl border border-white/20 shadow-2xl">
                      {/* Webcam Dot */}
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-neutral-900 border border-white/10 mx-auto mb-1.5 sm:mb-2"></div>
                      
                      {/* Screen Content */}
                      <div className="relative aspect-[16/10] w-full bg-black rounded-md sm:rounded-xl overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={`desktop-${activeProject.id}`}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            src={activeProject.desktopImage || activeProject.image}
                            alt={`${activeProject.title} Desktop`}
                            className="w-full h-full object-cover object-top filter brightness-[97%]"
                          />
                        </AnimatePresence>
                        {/* Screen Glare */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Laptop Aluminum Base */}
                    <div className="relative bg-[#29292d] h-2.5 sm:h-4 w-[106%] -ml-[3%] rounded-b-lg sm:rounded-b-xl border-t border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.9)] flex items-center justify-center">
                      <div className="w-10 sm:w-16 h-0.5 sm:h-1 rounded-b-md bg-[#18181b]"></div>
                    </div>
                  </div>

                  {/* 2. THE SMARTPHONE / IPHONE MOCKUP */}
                  <div className="absolute -bottom-1 sm:bottom-1 right-0.5 sm:right-3 w-[28%] sm:w-[24%] max-w-[105px] sm:max-w-[150px] z-20 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
                    <div className="bg-[#18181b] p-1 sm:p-2 rounded-[1.2rem] sm:rounded-[2.2rem] border-2 sm:border-[3px] border-neutral-700 shadow-[0_20px_45px_rgba(0,0,0,0.95)]">
                      {/* Dynamic Island */}
                      <div className="w-6 sm:w-10 h-1.5 sm:h-2 bg-black rounded-full mx-auto mb-0.5 sm:mb-1 flex items-center justify-center">
                        <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-neutral-800 ml-auto mr-1 sm:mr-1.5"></div>
                      </div>

                      {/* Phone Screen Content */}
                      <div className="relative aspect-[9/19] w-full bg-black rounded-[0.9rem] sm:rounded-[1.6rem] overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={`mobile-${activeProject.id}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            src={activeProject.mobileImage || activeProject.image}
                            alt={`${activeProject.title} Mobile`}
                            className="w-full h-full object-cover object-top filter brightness-[98%]"
                          />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] to-transparent pointer-events-none"></div>
                      </div>

                      {/* Home Indicator Bar */}
                      <div className="w-7 sm:w-12 h-0.5 sm:h-1 bg-white/20 rounded-full mx-auto mt-1 sm:mt-1.5"></div>
                    </div>
                  </div>

                  {/* Hover Hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px] rounded-2xl pointer-events-none z-30">
                    <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-mono font-bold tracking-wide shadow-xl flex items-center gap-2">
                      <i className="bi bi-arrows-fullscreen"></i>
                      <span>Buka Case Study</span>
                    </span>
                  </div>

                </div>

                {/* SPECS & DETAILS AREA */}
                <div className="pt-4 border-t border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 truncate">
                      CLIENT — {activeProject.client}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1.5 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      VERIFIED
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-2xl font-bold text-white mb-2 tracking-tight">
                    {activeProject.title}
                  </h4>

                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-3.5">
                    {activeProject.description}
                  </p>

                  {/* Metric Highlight */}
                  {activeProject.metrics && (
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono text-neutral-300 flex items-start gap-2 mb-4">
                      <i className="bi bi-stars text-white mt-0.5"></i>
                      <span>{activeProject.metrics}</span>
                    </div>
                  )}

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {activeProject.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/[0.06] border border-white/10 text-[10px] sm:text-[11px] font-mono text-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons (Mobile-friendly full width & touchable) */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                    <button
                      onClick={() => setSelectedProject(activeProject)}
                      className="py-3 px-5 rounded-xl bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <span>Lihat Case Study</span>
                      <i className="bi bi-arrow-right"></i>
                    </button>

                    <div className="flex items-center gap-2.5">
                      {activeProject.link && (
                        <a
                          href={activeProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial py-3 px-5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                          title="Live Site"
                        >
                          <i className="bi bi-box-arrow-up-right text-xs"></i>
                          <span>Live Site</span>
                        </a>
                      )}

                      {activeProject.github && (
                        <a
                          href={activeProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 text-white flex items-center justify-center transition-all flex-shrink-0"
                          title="GitHub Repository"
                        >
                          <i className="bi bi-github text-base"></i>
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* SISI KIRI / BAWAH PADA MOBILE: DIRECTORY LIST PROYEK */}
            <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1 block">
                // FULL PROJECTS DIRECTORY
              </span>

              {projects.map((project, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <div
                    key={project.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`p-4 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 border text-left relative ${
                      isActive
                        ? "bg-[#18181b] border-white/25 shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
                        : "bg-[#121214]/60 border-white/5 hover:border-white/15 hover:bg-[#18181b]/50"
                    }`}
                  >
                    {/* Active Indicator Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeProjectIndicator"
                        className="absolute left-0 top-3 bottom-3 w-1 bg-white rounded-r-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                        0{idx + 1} • {project.type}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">
                        {project.year || "2025"}
                      </span>
                    </div>

                    <h3 className={`text-base sm:text-xl font-bold tracking-tight mb-1 transition-colors ${
                      isActive ? "text-white" : "text-neutral-300"
                    }`}>
                      {project.title}
                    </h3>

                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Quick tech preview */}
                    <div className="flex flex-wrap gap-1 mt-2.5 pt-2.5 border-t border-white/5">
                      {project.technologies?.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded ${
                            isActive
                              ? "bg-white/10 text-neutral-200"
                              : "bg-white/[0.03] text-neutral-500"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Modal Detail Project */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}