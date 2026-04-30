"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-[#ff5500] uppercase mb-2">Get in touch</h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                Ready to Level Up <br />
                <span className="text-[#dc2626]">Your Event?</span>
              </h3>
              <p className="text-gray-400">
                Contact us today to book our premium games and attractions. 
                Our team is ready to help you plan an unforgettable experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl border border-white/5">
                <Phone className="text-[#ff5500] mb-4" size={32} />
                <h4 className="text-white font-bold uppercase mb-2">Call Us</h4>
                <p className="text-gray-400">+91 98765 43210</p>
                <p className="text-gray-400">+91 98765 43211</p>
              </div>
              <div className="glass p-6 rounded-xl border border-white/5">
                <Mail className="text-[#dc2626] mb-4" size={32} />
                <h4 className="text-white font-bold uppercase mb-2">Email Us</h4>
                <p className="text-gray-400">kingofgame.pune@yahoo.com</p>
              </div>
            </div>

            {/* Embedded Map Container */}
            <div className="w-full h-64 bg-white/5 rounded-xl border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-[#050505]/50 group-hover:bg-transparent transition-colors z-10 pointer-events-none">
                <MapPin size={48} className="text-[#ff5500] animate-bounce" />
              </div>
              {/* Note: Replace src with actual Google Maps embed URL */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.880496843603!2d73.918804!3d18.552467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1404179e8e5%3A0xcda8d7e0d37e6f8b!2sSainikwadi%2C%20Wadgaon%20Sheri%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%) grayscale(80%)" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-2xl border border-white/10 relative"
            id="book"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626] blur-[100px] rounded-full opacity-50" />
            
            <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-8">Send an Inquiry</h4>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                  <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ff5500] transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                  <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ff5500] transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-[#050505] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ff5500] transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input type="tel" className="w-full bg-[#050505] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ff5500] transition-colors" placeholder="+91" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Event Type</label>
                <select className="w-full bg-[#050505] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ff5500] transition-colors appearance-none">
                  <option value="">Select Event Type</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="school">School/College Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-[#050505] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ff5500] transition-colors resize-none" placeholder="Tell us about your event details, required games, date, etc."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-[#dc2626] text-white font-bold uppercase tracking-wider rounded-sm neon-box hover:bg-[#ff5500] transition-colors flex items-center justify-center gap-2 group">
                Submit Inquiry <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all duration-300 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-[#0a0a0a] border border-white/10 text-white text-sm font-bold uppercase px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </section>
  );
}
