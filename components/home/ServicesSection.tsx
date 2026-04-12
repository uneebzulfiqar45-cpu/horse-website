"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import HoverImage from "@/components/ui/HoverImage";

export default function ServicesSection() {
  const serviceCards = [
    {
      line1: "General Practice &",
      line2: "Wellness Care",
      img: "/images/pexels-rdne-8624631.jpg",
      href: "/services/general-practice",
    },
    {
      line1: "Sports Medicine &",
      line2: "Performance",
      img: "/images/jockey-girl-holding-helmet-before-competition.jpg",
      href: "/services/sports-medicine",
    },
    {
      line1: "Equine Therapy",
      line2: "Sessions Calm",
      img: "/images/akbar-nemati-PWLHpr3S2YM-unsplash.jpg",
      href: "/services/therapy",
    },
    {
      line1: "Horse Leasing and",
      line2: "Boarding",
      img: "/images/valeria-nikitina-fWy26LkwU4U-unsplash.jpg",
      href: "/services/emergency-ambulatory",
    },
  ];

  return (
    <section className="section-light section-padding">
      <div className="container-custom">
        
        {/* Header content matching screenshot layout exactly */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            {/* Minimalist White/Gold Pill Badge */}
            <div className="pill-badge">
              <span className="dot" />
              Services
            </div>

            <h2 className="text-[var(--text-primary)] text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight">
              Discover services that <br className="hidden md:block" />
              elevate your <span className="italic font-display font-medium text-[var(--gold)]">riding journey</span>
            </h2>
          </motion.div>

          {/* Button on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link
              href="/services"
              className="btn btn-primary"
            >
              View All Services
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {serviceCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
            >
              <Link
                href={card.href}
                className="group relative block w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-black/5"
                style={{ height: "420px" }}
              >
                {/* Photo */}
                <HoverImage
                  src={card.img}
                  alt={card.line1}
                  className="absolute inset-0 w-full h-full"
                />

                {/* Sweeping White Sheen Effect on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out z-20 pointer-events-none" />

                {/* Dark gradient overlay starting exactly from middle */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Text content flex split */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-row items-end justify-between gap-4 z-30">
                  <div className="flex-1">
                    {/* Changed h3 to div to prevent user's global CSS from making font massive */}
                    <div className="text-white !text-[16px] lg:!text-[18px] font-bold leading-[1.3] drop-shadow-md tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>
                      {card.line1}<br />{card.line2}
                    </div>
                  </div>
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[var(--gold)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold-light)] transition-colors duration-300 shadow-md">
                    <ArrowUpRight className="w-5 h-5 lg:w-5 lg:h-5 text-black transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center w-full clear-both"
          style={{ marginTop: "120px", paddingBottom: "20px" }}
        >
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-full bg-[var(--forest)] text-white text-[13px] font-bold uppercase tracking-wide shadow-sm">
              Free
            </span>
            <p className="text-[var(--text-secondary)] text-[15px] font-medium">
              Let&apos;s make something great work together{" "}
              <Link
                href="/contact"
                className="italic text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors ml-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get Free Quote
              </Link>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
