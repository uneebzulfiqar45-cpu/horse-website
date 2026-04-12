"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import HoverImage from "@/components/ui/HoverImage";

const initiatives = [
  { region: "Kenya", desc: "Equine welfare care for working horses" },
  { region: "Morocco", desc: "Free vet clinics for rural horse owners" },
  { region: "Romania", desc: "Education + vaccination programs" },
];

export default function CharitySection() {
  return (
    <section className="section-light relative w-full overflow-hidden flex items-center font-sans section-padding">
      {/* Background Image & Light Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--bg-light)]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-0 w-full h-full"
        >
          <HoverImage 
            src="/images/charity_light_bg.png" 
            alt="Heartwarming Equine Charity"
            imageClassName="md:object-[60%_30%] opacity-[0.95]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-light)] via-[var(--bg-light)]/90 to-transparent z-10 w-full md:w-[75%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-light)]/60 via-transparent to-transparent z-10 h-32 bottom-0" />
      </div>

      {/* Editorial Corner Accents */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
         <div className="absolute top-10 left-16 text-black/10 font-black text-[22px] tracking-tight flex items-center">
           Equi<span className="font-normal italic ml-0.5 font-serif">Vet</span>
         </div>
         <div className="absolute top-12 right-16 text-[var(--text-primary)]/50 text-[11px] tracking-[0.2em] uppercase font-bold">
           EST. 2019
         </div>
         <div className="absolute right-10 bottom-32 origin-bottom-right rotate-[-90deg] flex items-center gap-8 whitespace-nowrap">
           <span className="text-[var(--text-primary)]/40 text-[10px] tracking-[0.2em] uppercase font-bold flex items-center gap-4">
             CLIENT <span className="text-[var(--text-primary)]/80 font-medium tracking-[0.1em]">EquiVet Foundation</span>
           </span>
           <span className="text-[var(--text-primary)]/40 text-[10px] tracking-[0.2em] uppercase font-bold flex items-center gap-4">
             SERVICE <span className="text-[var(--text-primary)]/80 font-medium tracking-[0.1em]">Global Welfare Initiatives</span>
           </span>
         </div>
      </div>

      {/* Main Content Container */}
      <div className="container-custom relative z-20 w-full px-6 lg:px-16">
        <div className="flex flex-col mt-4 md:ml-4 w-full max-w-4xl">
          
          {/* Header Area */}
          <div className="flex flex-col w-full md:max-w-xl">
            {/* Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="pill-badge"
            >
              <span className="dot" />
              Equine Charity
            </motion.div>

            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1 }}
              className="text-[var(--text-primary)] text-[32px] md:text-[42px] font-bold leading-[1.1] mb-6 tracking-tight"
            >
              Equine Welfare <br className="hidden md:block"/>
              Beyond Borders
            </motion.h2>

            {/* Body Copy */}
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-[var(--text-secondary)] text-[15px] leading-[1.75] max-w-[450px] mb-2 font-medium"
            >
              We believe every horse — regardless of owner wealth or geography — deserves basic veterinary care. Our charity work brings free and subsidized care to underserved equine communities around the world.
            </motion.p>
          </div>

          {/* 2-Column Data Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-10 border-t border-[var(--border)] pt-10 mr-4 md:mr-16">
            
            {/* Column 1: Impact Stats */}
            <div className="flex flex-col gap-6 md:gap-8 justify-center">
              {[
                { num: "500+", label: "Horses Helped" },
                { num: "10+", label: "Countries" },
                { num: "200+", label: "Families Supported" },
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1), duration: 1 }}
                  className="flex flex-col"
                >
                  <span className="text-[var(--text-primary)] font-black text-[28px] tracking-tight">{stat.num}</span>
                  <span className="text-[var(--forest)] text-[10px] tracking-[0.15em] uppercase font-bold mt-1.5">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Column 2: Initiatives List & Action */}
            <div className="flex flex-col justify-center">
              <div className="flex flex-col gap-6 mb-10">
                {initiatives.map((init, idx) => (
                  <motion.div 
                    key={init.region}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (idx * 0.1), duration: 1 }}
                    className="flex flex-col"
                  >
                    <span className="text-[#A27A29] font-bold tracking-widest text-[13px] uppercase mb-1">{init.region}</span>
                    <span className="text-[var(--text-primary)] font-medium text-[13px] leading-relaxed max-w-[280px]">{init.desc}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 1 }}
                className="flex items-center gap-6"
              >
                  <Link 
                    href="/charity" 
                    className="btn btn-primary"
                  >
                    Our Initiatives
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link href="/charity" className="text-[var(--text-primary)] font-bold text-[11px] tracking-wider uppercase hover:text-[var(--gold)] transition-colors">
                    + 5 More Countries
                  </Link>
               </motion.div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
