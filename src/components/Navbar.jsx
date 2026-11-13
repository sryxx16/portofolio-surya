import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`
          transition-all duration-300 px-5 md:px-7 py-3 rounded-full flex items-center justify-between gap-6 lg:gap-8
          ${
            isScrolled
              ? "bg-[#121214]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.7)] w-full md:w-auto"
              : "bg-[#121214]/50 backdrop-blur-md border border-white/5 w-full md:w-auto"
          }
        `}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-7 h-7 bg-white text-black font-mono font-black text-xs rounded-md flex items-center justify-center transition-transform group-hover:scale-105">
            S
          </div>
          <span className="text-white font-bold tracking-tight text-sm sm:text-base font-mono">
            SURYA<span className="text-neutral-500">.DEV</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-neutral-400 hover:text-white text-xs sm:text-sm font-medium transition-colors relative py-1 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-4 py-2 bg-white hover:bg-neutral-200 text-black rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Get in Touch</span>
            <i className="bi bi-arrow-up-right text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-neutral-300 hover:text-white p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <i
            className={`bi ${isMobileMenuOpen ? "bi-x-lg" : "bi-list"} text-xl`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-4 right-4 bg-[#121214]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 z-50 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-neutral-300 hover:text-white text-sm font-medium py-2 border-b border-white/5 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full text-center py-3 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl mt-2 cursor-pointer"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
