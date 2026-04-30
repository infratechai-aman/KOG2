import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const Twitter = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Youtube = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 7.1C2.5 7.1 2.4 5.3 3.3 4.4 4.4 3.2 5.7 3.2 6.3 3.1 9 2.9 12 2.9 12 2.9s3 0 5.7.2c.6.1 1.9.1 3 .1.9.9 1 2.7 1 2.7s.2 2.2.2 4.4v1.2c0 2.2-.2 4.4-.2 4.4s-.1 1.8-1 2.7c-1.1 1.2-2.6 1.1-3.3 1.3-3 .3-6 .2-6 .2s-3 0-5.7-.2c-.6-.1-1.9-.1-3-.1-.9-.9-1-2.7-1-2.7s-.2-2.2-.2-4.4V11.5c0-2.2.2-4.4.2-4.4z"></path>
    <polygon points="9.7 15.2 15.6 11.5 9.7 7.8 9.7 15.2"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Top Animated Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff5500] to-transparent opacity-50" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="text-3xl font-black uppercase tracking-tighter">
              <span className="text-white">King Of</span>
              <span className="text-[#ff5500] ml-1">Games</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India&apos;s ultimate gaming and entertainment experience. We bring the thrill to your events with world-class setups and unforgettable interactive zones.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon href="#" icon={<Instagram size={20} />} />
              <SocialIcon href="#" icon={<Facebook size={20} />} />
              <SocialIcon href="#" icon={<Youtube size={20} />} />
              <SocialIcon href="#" icon={<Twitter size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#games">Our Games</FooterLink>
              <FooterLink href="#gallery">Gallery</FooterLink>
              <FooterLink href="#events">Event Types</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#ff5500] shrink-0 mt-0.5" size={18} />
                <span>Sainikwadi, Wadgaon Sheri, Pune 14, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#ff5500] shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#ff5500] shrink-0" size={18} />
                <span>kingofgame.pune@yahoo.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm text-gray-400">
              Subscribe to get special offers and updates on new gaming experiences.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-[#ff5500] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#dc2626] hover:bg-[#ff5500] text-white px-4 py-2 rounded-sm transition-colors text-sm font-bold uppercase"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} King of Games. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#ff5500] hover:text-white transition-all duration-300 hover:scale-110 hover:neon-box"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-[#ff5500] transition-colors flex items-center gap-2 group">
        <span className="w-1 h-1 bg-transparent rounded-full group-hover:bg-[#ff5500] transition-colors" />
        {children}
      </Link>
    </li>
  );
}
