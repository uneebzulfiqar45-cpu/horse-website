"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] !pt-20 !pb-10 border-t border-white/10 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 !mb-16 border-b border-white/10 !pb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center shadow-lg">
                <span className="text-[var(--bg-dark)] font-bold text-xl" style={{ fontFamily: "Georgia, serif" }}>E</span>
              </div>
              <div>
                <div className="font-bold text-2xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>EquiVet</div>
                <div className="text-[var(--gold)] text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-accent)" }}>Practice</div>
              </div>
            </Link>
            <p className="text-white/60 text-[15px] leading-relaxed !pr-4">
              Providing elite veterinary care and performance optimization for sport and companion horses across Germany since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[18px] font-bold tracking-wide">Quick Links</h3>
            <div className="flex flex-col gap-4">
              {['Home', 'About Us', 'Our Services', 'Charity', 'Contact'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-[var(--gold)] transition-colors text-[15px] w-fit">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[18px] font-bold tracking-wide">Contact Us</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4 text-white/60">
                <Phone className="w-5 h-5 text-[var(--gold)] flex-shrink-0 !mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+490000000000" className="hover:text-[var(--gold)] text-[15px] transition-colors">+49 000 000 0000</a>
                  <span className="text-xs text-white/40 uppercase tracking-wider">24/7 Emergency Line</span>
                </div>
              </div>
              <div className="flex items-start gap-4 text-white/60">
                <Mail className="w-5 h-5 text-[var(--gold)] flex-shrink-0 !mt-0.5" />
                <a href="mailto:info@equivet.de" className="hover:text-[var(--gold)] text-[15px] transition-colors">info@equivet.de</a>
              </div>
              <div className="flex items-start gap-4 text-white/60">
                <MapPin className="w-5 h-5 text-[var(--gold)] flex-shrink-0 !mt-0.5" />
                <span className="text-[15px] leading-relaxed">Pferdeallee 21<br />80331 München, Germany</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-[18px] font-bold tracking-wide">Stay Updated</h3>
            <p className="text-white/60 text-[15px] leading-relaxed">Subscribe to our newsletter for insights on equine health and performance.</p>

            <form className="flex !mt-2 w-full h-[52px]" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address..." 
                className="flex-grow bg-white/5 text-white placeholder-white/30 !px-5 outline-none rounded-l-xl border border-white/10 focus:border-[var(--gold)] text-[14px] transition-colors" 
                required
              />
              <button 
                type="submit"
                className="bg-[var(--gold)] text-black !px-5 rounded-r-xl font-bold hover:bg-white transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 !pt-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} EquiVet Practice. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy-policy" className="text-white/40 hover:text-[var(--gold)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/imprint" className="text-white/40 hover:text-[var(--gold)] transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
