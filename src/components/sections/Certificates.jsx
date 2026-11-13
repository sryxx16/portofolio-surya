import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { portfolioData } from "../../data/portfolio";
import CertificateModal from "../CertificateModal";
import { motion } from "framer-motion";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const displayCerts =
    portfolioData.certificates.length <= 5
      ? [
          ...portfolioData.certificates,
          ...portfolioData.certificates,
          ...portfolioData.certificates,
        ]
      : portfolioData.certificates;

  return (
    <>
      <section id="certificates" className="py-24 relative overflow-hidden bg-transparent">
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-neutral-600"></span>
              <span className="text-neutral-400 tracking-[0.25em] text-xs font-bold uppercase font-mono">
                ACHIEVEMENTS & CREDENTIALS
              </span>
              <span className="w-6 h-[1px] bg-neutral-600"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Sertifikasi & Penghargaan
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              Bukti dedikasi, validasi industri, dan pencapaian kompetisi software development.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="pb-14"
            >
              {displayCerts.map((cert, index) => (
                <SwiperSlide key={`${cert.id}-${index}`}>
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="bg-[#121214] border border-white/10 hover:border-white/25 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 flex flex-col h-full hover:shadow-xl"
                  >
                    {/* Image Thumbnail */}
                    <div className="relative aspect-[16/11] bg-black overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-neutral-300">
                          {cert.year}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                          {cert.issuer}
                        </p>
                        <h3 className="text-base font-bold text-white group-hover:text-neutral-200 transition-colors line-clamp-1 mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                        <span>Lihat Detail Sertifikat</span>
                        <i className="bi bi-arrow-up-right"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </>
  );
}
