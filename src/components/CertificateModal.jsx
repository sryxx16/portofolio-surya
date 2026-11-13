import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificateModal({ cert, onClose }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const images = cert.images || [cert.image];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md z-[110] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative bg-[#121214] border border-white/10 rounded-[2rem] shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tombol Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-50 bg-black/60 hover:bg-black/90 border border-white/10 rounded-full w-11 h-11 flex items-center justify-center font-mono text-xl"
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* KIRI: Area Gambar */}
          <div className="relative w-full md:w-3/5 h-[40vh] md:h-auto bg-black flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10">
            <img
              src={images[currentImageIdx]}
              alt={`${cert.title} ${currentImageIdx + 1}`}
              className="max-w-full max-h-full object-contain relative z-10 drop-shadow-2xl rounded-xl"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-white hover:text-black text-white border border-white/10 text-xl w-11 h-11 flex items-center justify-center rounded-full transition-all z-20 font-bold"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-white hover:text-black text-white border border-white/10 text-xl w-11 h-11 flex items-center justify-center rounded-full transition-all z-20 font-bold"
                >
                  ›
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/80 px-3 py-1.5 rounded-full border border-white/10">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIdx(idx)}
                      className={`h-1.5 rounded-full transition-all ${idx === currentImageIdx ? "bg-white w-6" : "bg-neutral-600 w-1.5 hover:bg-neutral-400"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* KANAN: Info & Penjelasan */}
          <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
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
              className="mt-8 py-3 w-full bg-white text-black font-bold font-mono text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-colors"
            >
              Tutup Pratinjau
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
