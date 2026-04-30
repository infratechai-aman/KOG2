"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const galleryItems = [
  { id: 1, type: "image", src: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?q=80&w=1974&auto=format&fit=crop", span: "col-span-1 row-span-1" },
  { id: 2, type: "video", src: "https://images.unsplash.com/photo-1622979135240-caa6648190b4?q=80&w=2070&auto=format&fit=crop", span: "col-span-2 row-span-2" },
  { id: 3, type: "image", src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", span: "col-span-1 row-span-1" },
  { id: 4, type: "image", src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop", span: "col-span-1 row-span-2" },
  { id: 5, type: "image", src: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1964&auto=format&fit=crop", span: "col-span-2 row-span-1" },
  { id: 6, type: "image", src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop", span: "col-span-1 row-span-1" },
];

export default function VideoGallery() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <section id="gallery" className="py-32 bg-[#050505] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#ff5500] uppercase mb-2">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Cinematic <span className="text-[#dc2626]">Gallery</span>
          </h3>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden cursor-pointer group glass border border-white/5 ${item.span}`}
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.src} 
                alt="Gallery Item" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#ff5500]/80 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,85,0,0.6)] group-hover:scale-110 transition-transform">
                    <Play fill="white" className="ml-1" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 text-white hover:text-[#ff5500] transition-colors z-50"
            >
              <X size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-white/10"
            >
              <img 
                src={selectedItem.src} 
                alt="Selected item" 
                className="w-full h-full object-contain"
              />
              {/* If we had real videos, we would render a video tag or iframe here based on item.type */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
