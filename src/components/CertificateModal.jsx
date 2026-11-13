import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificateModal({ cert, onClose }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const images = cert.images || [cert.image];

  useEffect(() => {
    window.__lenis?.stop();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.__lenis?.start();
      document.body.style.overflow = originalOverflow || "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

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
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[999] flex items-center justify-center p-3 sm:p-6 md:p-8 overscroll-contain"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22 }}
          data-lenis-prevent="true"
          className="relative bg-[#121214] border border-white/15 rounded-[1.75rem] sm:rounded-[2rem] shadow-[0_25px_80px_rgba(0,0,0,0.95)] w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row overscroll-contain"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tombol Close Utama */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-50 bg-black/70 hover:bg-black/95 border border-white/15 rounded-full w-10 h-10 flex items-center justify-center font-mono text-sm cursor-pointer shadow-lg"
            aria-label="Tutup modal"
            title="Tutup (Esc)"
          >
            ✕
          </button>

          {/* KIRI: Area Gambar Sertifikat */}
          <div className="relative w-full md:w-3/5 h-[42vh] md:h-auto bg-black flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10 flex-shrink-0">
            <img
              src={images[currentImageIdx]}
              alt={`${cert.title} ${currentImageIdx + 1}`}
              className="max-w-full max-h-full object-contain relative z-10 drop-shadow-2xl rounded-xl"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-white hover:text-black text-white border border-white/15 text-xl w-10 h-10 flex items-center justify-center rounded-full transition-all z-20 font-bold"
                  aria-label="Sertifikat sebelumnya"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-white hover:text-black text-white border border-white/15 text-xl w-10 h-10 flex items-center justify-center rounded-full transition-all z-20 font-bold"
                  aria-label="Sertifikat berikutnya"
                >
                  ›
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/85 px-3 py-1.5 rounded-full border border-white/15">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIdx(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentImageIdx
                          ? "bg-white w-6"
                          : "bg-neutral-600 w-1.5 hover:bg-neutral-400"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* KANAN: Info & Penjelasan */}
          <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-white/[0.06] border border-white/10 text-neutral-300 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest w-max mb-5">
                Tahun: {cert.year}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight tracking-tight">
                {cert.title}
              </h3>

              <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <i className="bi bi-award-fill text-lg"></i>
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase font-mono tracking-wider">
                    Diterbitkan Oleh
                  </p>
                  <p className="text-white text-sm font-semibold">{cert.issuer}</p>
                </div>
              </div>

              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                Detail Pencapaian
              </h4>
              <p className="text-neutral-300 leading-relaxed text-sm">
                {cert.description ||
                  "Deskripsi sertifikat belum tersedia. Penghargaan ini merupakan bukti dedikasi dan pengembangan keahlian di bidang teknologi."}
              </p>
            </div>

            <button
              onClick={onClose}
              className="mt-8 py-3 w-full bg-white text-black font-bold font-mono text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Tutup Pratinjau
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return typeof document !== "undefined"
    ? createPortal(modalMarkup, document.body)
    : modalMarkup;
}