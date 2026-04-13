"use client";

import Link from "next/link";
import { Phone, ArrowUpRight, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function EmergencySection() {
  return (
    <section className="relative overflow-hidden section-padding min-h-[420px] lg:min-h-[500px] flex items-center">
      {/* Premium Background with Silhouette */}
      <div className="absolute inset-0">
        <img 
          src="/images/emergency_bg.png" 
          alt="Emergency background" 
          className="w-full h-full object-cover object-right-top"
        />
        {/* Complex Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)] via-[var(--bg-dark)]/90 to-transparent lg:to-[var(--bg-dark)]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/40 via-transparent to-transparent" />
      </div>
      
      {/* Decorative Golden Ambient Glow */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], x: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--gold)]/5 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Live Badge */}
            <div className="flex items-center gap-2 !mb-6 !px-4 !py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--gold)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--gold)]"></span>
              </span>
              <span className="text-[var(--gold)] font-black text-[10px] uppercase tracking-[0.2em]">Rapid Response Activated</span>
            </div>

            <h2 className="text-white font-bold text-4xl lg:text-[62px] leading-[1.05] !mb-6">
              Equine <span className="italic font-display font-medium text-[var(--gold)]">Emergency?</span>
            </h2>
            
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-lg !mb-0">
              When every second counts, our 24/7 mobile intensive care unit brings the hospital&apos;s advanced capabilities directly to your stable.
            </p>
          </motion.div>

          {/* Right Column: Glassmorphism CTA Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 !p-8 lg:!p-12 rounded-[3rem] shadow-2xl flex flex-col items-center text-center relative overflow-hidden group">
              {/* Internal glow effect */}
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[var(--gold)]/5 rounded-full blur-[80px] pointer-events-none" />
              
              {/* SOS Pulse Visual */}
              <div className="relative !mb-8">
                <motion.div 
                  animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 bg-[#EF4444] rounded-full blur-xl"
                />
                <motion.div 
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
                  className="absolute inset-0 bg-[#EF4444] rounded-full blur-md"
                />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#EF4444] to-[#B91C1C] border border-white/20 shadow-2xl flex items-center justify-center z-10">
                  <Phone className="w-10 h-10 text-white fill-current animate-pulse" />
                </div>
              </div>

              <a
                href="tel:+490000000000"
                className="w-full bg-[var(--gold)] hover:bg-white text-black font-black text-lg lg:text-xl !py-6 rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-4 !mb-6"
              >
                Call +49 000 000 0000
                <ArrowUpRight className="w-6 h-6" />
              </a>

              <Link
                href="/emergency"
                className="text-white/40 hover:text-[var(--gold)] text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center gap-2 !mt-4"
              >
                View Emergency Protocols
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]/30" />
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
