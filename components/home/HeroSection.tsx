"use client";

import Link from "next/link";
import { Phone, Calendar, Shield, ChevronDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e;
      const el = currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const xPct = (clientX - rect.left) / rect.width - 0.5;
      const yPct = (clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--mouse-x", `${xPct * 15}px`);
      hero.style.setProperty("--mouse-y", `${yPct * 10}px`);
    };
    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden section-dark"
    >
      {/* Background Image with Parallax & Tint */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out"
          style={{ 
            backgroundImage: "url('/images/elegant-girl-farm-wiith-horse.jpg')",
            transform: `scale(1.05) translate(calc(var(--mouse-x, 0px) * -1), calc(var(--mouse-y, 0px) * -1))`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)]/90 via-[var(--bg-dark)]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/30 via-transparent to-[var(--bg-dark)]/20" />
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <h1 className="text-white text-5xl md:text-7xl lg:text-[84px] font-bold leading-[1.05] mb-8">
              Exceptional care for <span className="italic font-display font-medium text-[var(--gold)]">elite</span> equine partners
            </h1>
            
            <div className="flex items-start gap-6">
              <div className="w-0.5 h-24 bg-[var(--gold)]/30 mt-2 shrink-0 hidden sm:block" />
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p className="text-[var(--text-on-dark-secondary)] text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                  Join our community of owners, trainers, and sport horse professionals who prioritize precision medical care and performance optimization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="btn btn-primary"
                  >
                    Request Consultation
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Proof & Description */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:pl-12 flex flex-col gap-8 items-start lg:items-end text-left lg:text-right"
          >
            <div className="max-w-md">
              <p className="text-[var(--text-on-dark-secondary)] text-base md:text-lg mb-8 leading-relaxed">
                We bring world-class diagnostic imaging and sports medicine directly to your stable, serving elite horses across Germany.
              </p>
              
              {/* Customer Satisfied Section */}
              <div className="flex flex-col items-start lg:items-end gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-12 h-12 rounded-full border-2 border-[var(--bg-dark)] bg-zinc-200 overflow-hidden shadow-sm"
                    >
                      <img 
                        src={`https://i.pravatar.cc/150?u=equi${i}`} 
                        alt="Customer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-[var(--bg-dark)] bg-[var(--gold)] flex items-center justify-center text-black font-bold text-xs shadow-sm">
                    +50
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Customer Satisfied</div>
                  <div className="text-[var(--gold)] font-bold text-sm">4.9 (500+ Stable Visits)</div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
