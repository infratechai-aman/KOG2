"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Games", href: "#games" },
  { name: "Gallery", href: "#gallery" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2 group">
          <div className="text-2xl font-black uppercase tracking-tighter">
            <span className="text-white">King Of</span>
            <span className="text-[#ff5500] group-hover:neon-text transition-all duration-300 ml-1">
              Games
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff5500] transition-all duration-300 group-hover:w-full group-hover:neon-box"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#book"
            className="relative px-6 py-2.5 font-bold uppercase tracking-wider text-white overflow-hidden group bg-[#dc2626] rounded-sm neon-box hover:bg-[#ff5500] transition-colors duration-300"
          >
            <span className="relative z-10">Book Now</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505] glass flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={link.name}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold uppercase text-white hover:text-[#ff5500] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.1 }}
            >
              <Link
                href="#book"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-3 bg-[#dc2626] text-white font-bold uppercase tracking-wider rounded-sm neon-box mt-4 inline-block"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
