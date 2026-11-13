import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.desktopImage || project.image, project.mobileImage].filter(
          Boolean
        );

  // Lock scroll background and disable Lenis while modal is open
  useEffect(() => {
    window.__lenis?.stop();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.__lenis?.start();
      document.body.style.overflow = originalOverflow || "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, isZoomed]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const modalMarkup = (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[999] p-3 sm:p-6 md:p-8 overscroll-contain"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22 }}
          data-lenis-prevent="true"
          className="relative bg-[#121214] border border-white/15 rounded-[1.75rem] sm:rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col shadow-[0_25px_80px_rgba(0,0,0,0.95)] overscroll-contain"
          onClick={(e) => e.stopPropagation()}
        >
          {/* STICKY TOP HEADER WITH CLOSE BUTTON */}
          <div className="sticky top-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#121214]/90 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-bold">
                PROJECT DETAIL & CASE STUDY
              </span>
            </div>

            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full w-9 h-9 flex items-center justify-center border border-white/15 text-sm font-mono cursor-pointer"
              aria-label="Tutup modal"
              title="Tutup (Esc)"
            >
              ✕
            </button>
          </div>

          {/* AREA GAMBAR HERO MODAL */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/8] max-h-[46vh] bg-black overflow-hidden flex-shrink-0 group">
            <img
              src={images[currentImageIdx]}
              className="w-full h-full object-cover object-top cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.02]"
              alt={project.title}
              onClick={() => setIsZoomed(true)}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/30 pointer-events-none"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="bg-black/85 text-white px-4 py-2 rounded-full text-xs font-mono backdrop-blur-md border border-white/20 shadow-lg">
                <i className="bi bi-arrows-fullscreen mr-1.5"></i> Klik untuk perbesar gambar
              </span>
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/75 p-3 rounded-full text-white hover:bg-white hover:text-black transition-colors z-20 border border-white/15 text-lg w-10 h-10 flex items-center justify-center font-bold"
                  aria-label="Gambar sebelumnya"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/75 p-3 rounded-full text-white hover:bg-white hover:text-black transition-colors z-20 border border-white/15 text-lg w-10 h-10 flex items-center justify-center font-bold"
                  aria-label="Gambar berikutnya"
                >
                  ›
                </button>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-black/85 text-neutral-300 font-mono text-xs px-3 py-1 rounded-full border border-white/15">
                    {currentImageIdx + 1} / {images.length}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* AREA KONTEN & PENJELASAN */}
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-neutral-400">
                  <span>{project.type || "Web App"}</span>
                  <span>•</span>
                  <span>{project.year || "2025"}</span>
                </div>

                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  {project.title}
                </h3>

                {project.detailedDescription?.achievement && (
                  <div className="bg-white/[0.04] border border-white/15 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <span className="text-xl">🏆</span>
                    <div>
                      <p className="text-white font-bold text-xs uppercase tracking-wider font-mono">
                        Pencapaian Kompetisi
                      </p>
                      <p className="text-neutral-300 text-sm mt-0.5">
                        {project.detailedDescription.achievement}
                      </p>
                    </div>
                  </div>
                )}

                {project.detailedDescription ? (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-neutral-400 font-mono text-xs uppercase tracking-widest mb-2 font-bold">
                        Overview Arsitektur
                      </h4>
                      <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                        {project.detailedDescription.overview}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-neutral-400 font-mono text-xs uppercase tracking-widest mb-2 font-bold">
                        Tanggung Jawab Teknis
                      </h4>
                      <ul className="space-y-2">
                        {project.detailedDescription.responsibilities.map(
                          (r, i) => (
                            <li
                              key={i}
                              className="text-neutral-300 text-sm flex gap-2.5 items-start"
                            >
                              <span className="text-neutral-500 font-mono">▹</span>
                              <span>{r}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p className="text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>

              {/* Sidebar Tech Stack */}
              {project.detailedDescription && (
                <div className="w-full md:w-80 space-y-5 bg-white/[0.03] p-6 rounded-2xl border border-white/10 h-fit">
                  <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wider border-b border-white/10 pb-3">
                    Tech Stack
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(project.detailedDescription.techStack).map(
                      ([key, techs]) => (
                        <div key={key}>
                          <p className="text-[10px] text-neutral-400 uppercase font-mono font-bold mb-2">
                            {key.replace("_", " ")}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {techs.map((t) => (
                              <span
                                key={t}
                                className="text-[11px] font-mono bg-white/[0.06] text-neutral-200 px-2.5 py-1 rounded-md border border-white/10"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ACTION BUTTONS & CLOSE */}
            <div className="flex flex-wrap items-center justify-between gap-3.5 mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-2.5 rounded-xl font-bold font-mono text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-2"
                  >
                    <span>Kunjungi Live Site</span>
                    <i className="bi bi-box-arrow-up-right text-xs"></i>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/[0.05] text-white px-6 py-2.5 rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/[0.1] font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                  >
                    <i className="bi bi-github text-sm"></i>
                    <span>GitHub Repo</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Tutup Pratinjau
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* OVERLAY ZOOM (Lightbox) */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1050] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4 overscroll-contain"
            data-lenis-prevent="true"
            onClick={() => setIsZoomed(false)}
          >
            {/* Tombol Close Zoom */}
            <button
              className="absolute top-6 right-6 text-white text-xl z-[1060] bg-white/10 hover:bg-white/20 rounded-full w-11 h-11 flex items-center justify-center border border-white/20 font-mono transition-colors cursor-pointer"
              onClick={() => setIsZoomed(false)}
              aria-label="Tutup perbesaran"
            >
              ✕
            </button>

            {images.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-5xl transition-colors z-[1060] p-4 cursor-pointer"
              >
                ‹
              </button>
            )}

            <motion.div
              className="relative w-full max-w-5xl h-[82vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentImageIdx]}
                alt="Zoomed Detail"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-5xl transition-colors z-[1060] p-4 cursor-pointer"
              >
                ›
              </button>
            )}

            <div className="mt-4 text-neutral-400 font-mono text-xs tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              {currentImageIdx + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );

  return typeof document !== "undefined"
    ? createPortal(modalMarkup, document.body)
    : modalMarkup;
}