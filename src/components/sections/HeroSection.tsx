"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Video — direct CDN mp4 files that reliably autoplay */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-full overflow-hidden"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/50 to-[#050505]/90 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop"
        >
          {/* Pexels CDN — arcade / neon / gaming footage (free to use, no hotlink restrictions) */}
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/2795173/2795173-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Floating Particles (CSS Based) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-50">
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-[#ff5500] animate-ping" />
        <div className="absolute top-[60%] left-[80%] w-3 h-3 rounded-full bg-[#dc2626] animate-pulse" />
        <div className="absolute top-[80%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#facc15] animate-bounce" />
        <div className="absolute top-[30%] left-[75%] w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              India&apos;s Ultimate
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#dc2626] drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]">
              Gaming &amp; Entertainment
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Experience
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-12 font-medium"
        >
          Inflatable games, arcade zones, VR experiences, carnival setups, and unforgettable events.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="#book"
            className="px-8 py-4 bg-[#dc2626] text-white font-bold text-lg uppercase tracking-wider rounded-sm neon-box hover:bg-[#ff5500] hover:scale-105 transition-all duration-300"
          >
            Book Your Event
          </Link>
          <Link
            href="#games"
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold text-lg uppercase tracking-wider rounded-sm hover:bg-white/10 glass hover:scale-105 transition-all duration-300"
          >
            Explore Games
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#ff5500]" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

