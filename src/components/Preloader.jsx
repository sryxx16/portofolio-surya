import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1200; // 1.2s smooth counter
    const stepTime = 15;
    const totalSteps = duration / stepTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
      setCount(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsFinished(true), 200);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#09090b] flex flex-col justify-between p-8 md:p-14 select-none"
        >
          {/* Top meta */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              SURYA DAFFA
            </span>
            <span>PORTFOLIO © 2026</span>
          </div>

          {/* Center: Big Clean Counter & Label */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-7xl sm:text-8xl md:text-9xl font-black font-mono tracking-tighter text-white"
              >
                {count < 10 ? `0${count}` : count}
                <span className="text-neutral-500 text-4xl sm:text-5xl font-light ml-1">%</span>
              </motion.div>
            </div>

            <p className="mt-4 text-xs font-mono tracking-[0.3em] uppercase text-neutral-400">
              Frontend Specialist & Web Developer
            </p>

            {/* Minimal Progress Line */}
            <div className="w-48 sm:w-64 h-[2px] bg-neutral-800 rounded-full mt-6 overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${count}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          {/* Bottom meta */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-500">
            <span>MODERN WEB ARCHITECTURE</span>
            <span className="hidden sm:inline">JAKARTA / BOGOR, ID</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
