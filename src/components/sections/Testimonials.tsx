"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Event Manager",
    content: "King of Games completely transformed our corporate event. The VR setup was incredibly immersive, and the team was highly professional. Best in India!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    name: "Priya Patel",
    role: "Wedding Planner",
    content: "We added their carnival setup for a sangeet night, and it was a massive hit! The aesthetic matched our luxury vibe perfectly.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    name: "Amit Desai",
    role: "School Principal",
    content: "The massive inflatable castles were the highlight of our annual sports day. Safe, clean, and meticulously managed by their staff.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=3"
  },
  {
    name: "Neha Singh",
    role: "Birthday Host",
    content: "My son's 10th birthday was unforgettable thanks to the arcade machines. They brought the real arcade feel straight to our backyard.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=4"
  },
  {
    name: "Vikram Reddy",
    role: "Mall Director",
    content: "Their weekend mall activation drove record footfall. The premium presentation of the games is exactly what luxury brands need.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=5"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-[#0a0a0a] overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#ff5500] mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 mb-16 text-center relative z-10">
        <h2 className="text-sm font-bold tracking-widest text-[#facc15] uppercase mb-2">Word on the Street</h2>
        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
          Client <span className="text-[#dc2626]">Experiences</span>
        </h3>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full flex overflow-x-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-6 px-3 w-max"
        >
          {/* Double the array for seamless looping */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] glass p-8 rounded-2xl border border-white/5 hover:border-[#ff5500]/50 transition-colors relative"
            >
              <Quote className="absolute top-6 right-8 text-white/5" size={64} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#facc15]" fill="#facc15" size={16} />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-[#dc2626]"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-[#ff5500] uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
