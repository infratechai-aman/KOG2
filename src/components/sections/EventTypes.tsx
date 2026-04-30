"use client";

import { motion } from "framer-motion";
import { Cake, GraduationCap, Building2, Heart, Store, Tent, BookOpen } from "lucide-react";

const events = [
  { name: "Birthday Parties", icon: Cake, color: "#ff5500" },
  { name: "School Events", icon: GraduationCap, color: "#dc2626" },
  { name: "Corporate Events", icon: Building2, color: "#facc15" },
  { name: "Weddings", icon: Heart, color: "#dc2626" },
  { name: "Mall Activations", icon: Store, color: "#ff5500" },
  { name: "Festivals", icon: Tent, color: "#facc15" },
  { name: "College Events", icon: BookOpen, color: "#dc2626" },
];

export default function EventTypes() {
  return (
    <section id="events" className="py-32 bg-[#050505] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-bold tracking-widest text-[#dc2626] uppercase mb-2">Tailored for You</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              Perfect For Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#facc15]">Occasion</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              No matter the scale or type of event, we have the perfect entertainment solution. 
              Our team handles delivery, setup, and supervision so you can focus on enjoying the party.
            </p>
            <button className="px-8 py-4 border-2 border-[#ff5500] text-[#ff5500] font-bold uppercase tracking-wider hover:bg-[#ff5500] hover:text-white transition-colors">
              Get A Custom Quote
            </button>
          </div>

          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {events.map((event, index) => (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-[#0a0a0a] border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 group cursor-pointer hover:border-[#ff5500]/50 transition-colors relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <event.icon size={40} color={event.color} className="group-hover:scale-110 transition-transform relative z-10" />
                  <span className="text-white font-bold text-sm uppercase relative z-10">{event.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
