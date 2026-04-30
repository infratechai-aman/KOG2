"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function ParallaxExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[150vh] w-full overflow-hidden bg-[#050505]"
    >
      {/* Top SVG Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-30 transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] sm:h-[150px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#0a0a0a"></path>
        </svg>
      </div>

      {/* Background Parallax Layer */}
      <motion.div 
        className="absolute inset-0 z-0 h-[120%]"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-[#050505] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop" 
          alt="Gaming Setup Background" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Foreground Elements */}
      <motion.div 
        className="absolute top-1/4 right-10 md:right-32 w-40 md:w-64 h-64 z-20 mix-blend-screen opacity-60"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["-10%", "100%"]) }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#dc2626] to-transparent blur-3xl" />
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 left-10 md:left-32 w-64 h-64 z-20 mix-blend-screen opacity-40"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["50%", "-80%"]) }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#ff5500] to-transparent blur-3xl" />
      </motion.div>

      {/* Center Cinematic Text */}
      <motion.div 
        className="sticky top-0 h-screen flex flex-col items-center justify-center z-30 container mx-auto px-4"
        style={{ opacity }}
      >
        <motion.div style={{ y: textY }} className="text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Beyond</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#dc2626] to-[#ff5500] drop-shadow-[0_0_20px_rgba(255,85,0,0.4)]">Reality</span>
          </h2>
          <p className="text-xl md:text-3xl font-light text-gray-300 max-w-2xl mx-auto mb-10">
            Immerse yourself in experiences that defy expectations.
          </p>
          <Link
            href="#gallery"
            className="inline-block px-10 py-5 bg-transparent border border-[#ff5500] text-[#ff5500] font-bold text-lg uppercase tracking-widest hover:bg-[#ff5500] hover:text-white transition-all duration-300 neon-box"
          >
            See It To Believe It
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom SVG Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] sm:h-[150px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#050505"></path>
        </svg>
      </div>
    </section>
  );
}
