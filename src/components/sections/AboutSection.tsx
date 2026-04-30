"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-32 bg-[#050505] overflow-hidden"
    >
      {/* Subtle Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#dc2626] rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#ff5500] rounded-full mix-blend-screen filter blur-[120px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, staggerChildren: 0.2 }
              }
            }}
            className="space-y-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h2 className="text-sm font-bold tracking-widest text-[#ff5500] uppercase mb-2">The Ultimate Experience</h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                Elevating Entertainment to the Next Level
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                King of Games isn&apos;t just about renting equipment; it&apos;s about creating unforgettable memories. 
                With a massive inventory ranging from giant inflatable castles to cutting-edge VR simulators, 
                we transform ordinary spaces into world-class entertainment zones.
              </p>
            </motion.div>

            {/* Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <CounterItem end={2000} suffix="+" label="Events Hosted" delay={0.2} isInView={isInView} />
              <CounterItem end={50} suffix="+" label="Game Types" delay={0.4} isInView={isInView} />
              <CounterItem end={100} suffix="K+" label="Happy Visitors" delay={0.6} isInView={isInView} />
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -5 },
              visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: "easeOut" } }
            }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative glass p-2 border-[#ff5500]/30 shadow-[0_0_50px_rgba(255,85,0,0.15)]">
              {/* Fallback image if actual isn't available */}
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#0a0a0a]">
                <img 
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop" 
                  alt="Gaming Event Setup" 
                  className="w-full h-full object-cover opacity-80 mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-40 h-40 glass rounded-full flex items-center justify-center border border-[#facc15]/30 shadow-[0_0_30px_rgba(250,204,21,0.2)]"
            >
              <div className="text-center">
                <span className="block text-3xl font-black text-[#facc15]">#1</span>
                <span className="block text-xs font-bold uppercase tracking-widest text-white mt-1">In India</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function CounterItem({ end, suffix, label, delay, isInView }: { end: number, suffix: string, label: string, delay: number, isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // ms
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      transition={{ delay }}
      className="text-center sm:text-left"
    >
      <div className="text-4xl lg:text-5xl font-black text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm uppercase tracking-wider text-[#dc2626] font-bold">
        {label}
      </div>
    </motion.div>
  );
}
