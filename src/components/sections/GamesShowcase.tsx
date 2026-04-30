"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const gamesData = [
  {
    id: "vr",
    title: "VR Games",
    description: "Immersive virtual reality setups for all ages. Race cars, fight zombies, or explore new worlds.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop"
    ]
  },
  {
    id: "inflatable",
    title: "Inflatable Castles",
    description: "Massive bouncy castles, obstacle courses, and slides that guarantee hours of fun.",
    image: "https://images.unsplash.com/photo-1574513685415-18861937dfa8?q=80&w=2070&auto=format&fit=crop",
    gallery: []
  },
  {
    id: "carnival",
    title: "Carnival Games",
    description: "Classic ring toss, shooting galleries, and lucky wheels with an upscale modern twist.",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1964&auto=format&fit=crop",
    gallery: []
  },
  {
    id: "arcade",
    title: "Arcade Machines",
    description: "Retro and modern arcade cabinets featuring classic fighting games, pac-man, and racing simulators.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    gallery: []
  },
  {
    id: "kids",
    title: "Kids Activities",
    description: "Safe, engaging, and colorful play zones specifically designed for younger children.",
    image: "https://images.unsplash.com/photo-1566579090262-51cde5ebe92e?q=80&w=2070&auto=format&fit=crop",
    gallery: []
  },
  {
    id: "event",
    title: "Event Attractions",
    description: "Mechanical bulls, 360 photo booths, and premium setups to elevate your main event.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    gallery: []
  }
];

export default function GamesShowcase() {
  const [selectedGame, setSelectedGame] = useState<typeof gamesData[0] | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="games" className="py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-[#dc2626] uppercase mb-2">Our Offerings</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Premium <span className="text-[#ff5500]">Attractions</span>
          </h3>
        </div>
        <div className="hidden md:flex gap-4">
          <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#ff5500] hover:border-[#ff5500] transition-colors group">
            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#ff5500] hover:border-[#ff5500] transition-colors group">
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto gap-8 px-4 md:px-6 pb-16 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {gamesData.map((game, index) => (
          <TiltCard key={game.id} game={game} index={index} onClick={() => setSelectedGame(game)} />
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedGame && (
          <Modal game={selectedGame} onClose={() => setSelectedGame(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function TiltCard({ game, index, onClick }: { game: any, index: number, onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="min-w-[300px] md:min-w-[400px] aspect-[3/4] snap-center shrink-0 cursor-pointer relative group rounded-xl overflow-hidden glass border border-white/5 bg-[#050505]"
    >
      <div className="absolute inset-0 z-0">
        <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
      </div>

      <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#ff5500]/20 pointer-events-none mix-blend-overlay" />
      
      <div className="relative z-20 h-full p-8 flex flex-col justify-end">
        <h4 className="text-3xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-[#facc15] transition-colors">{game.title}</h4>
        <p className="text-gray-400 text-sm mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {game.description}
        </p>
        <div className="flex items-center gap-2 text-[#ff5500] font-bold uppercase tracking-wider text-xs group-hover:neon-text">
          <ImageIcon size={16} /> View Gallery
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-[#dc2626] to-[#ff5500] opacity-0 group-hover:opacity-100 blur-sm -z-10 transition-opacity duration-500" />
    </motion.div>
  );
}

function Modal({ game, onClose }: { game: any, onClose: () => void }) {
  // Simple slider state if there are gallery images
  const [currentImg, setCurrentImg] = useState(0);
  const images = [game.image, ...(game.gallery || [])];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <div className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md" onClick={onClose} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row z-10"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#dc2626] transition-colors">
          <X size={20} />
        </button>

        {/* Image Viewer */}
        <div className="relative w-full lg:w-2/3 aspect-video lg:aspect-auto h-[40vh] lg:h-auto bg-black flex items-center justify-center group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              src={images[currentImg]}
              alt={game.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentImg(prev => (prev === 0 ? images.length - 1 : prev - 1)); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff5500] hover:border-[#ff5500] transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentImg(prev => (prev === images.length - 1 ? 0 : prev + 1)); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff5500] hover:border-[#ff5500] transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/3 p-8 flex flex-col overflow-y-auto">
          <h3 className="text-sm font-bold tracking-widest text-[#ff5500] uppercase mb-2">Category</h3>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-6">{game.title}</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            {game.description}
          </p>
          
          <div className="mt-auto pt-8 border-t border-white/10">
            <h4 className="text-white font-bold uppercase mb-4">Perfect For</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Birthday Parties', 'Corporate Events', 'Festivals', 'School Fetes'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                  {tag}
                </span>
              ))}
            </div>

            <button className="w-full py-4 bg-[#dc2626] text-white font-bold uppercase tracking-wider rounded-sm neon-box hover:bg-[#ff5500] transition-colors">
              Inquire About {game.title}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
