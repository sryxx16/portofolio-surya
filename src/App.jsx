import React, { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Timeline from "./components/sections/Timeline";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/animations/AnimatedBackground";
import Preloader from "./components/Preloader";

function App() {
  // Initialize Lenis Smooth Inertial Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative text-white antialiased bg-[#09090b]">
      {/* 1. Layar Loading Paling Depan */}
      <Preloader />

      {/* Background Animasi Global */}
      <AnimatedBackground />

      {/* Navbar Global */}
      <Navbar />

      <main className="relative">
        {/* Hero Section dengan 3D Scroll Track */}
        <Hero />

        {/* Section yang meluncur naik menutupi Hero saat di-scroll (Curtain Cover Effect) */}
        <div className="relative z-30 -mt-[40vh] sm:-mt-[50vh] bg-[#09090b] rounded-t-[2.5rem] sm:rounded-t-[4rem] border-t border-white/10 shadow-[0_-35px_100px_rgba(0,0,0,0.98)] overflow-hidden">
          <About />
          <Timeline />
          <TechStack />
          <Projects />
          <Certificates />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
