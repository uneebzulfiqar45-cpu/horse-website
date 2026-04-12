"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, TrendingUp, Award, MapPin, Users } from "lucide-react";
import Link from "next/link";
import HoverImage from "@/components/ui/HoverImage";

const stats = [
  { num: 300, suffix: "+", label: "Happy Riders Trained", icon: Users },
  { num: 10, suffix: "K", label: "Trail Ride Kilometers", icon: MapPin },
  { num: 150, suffix: "+", label: "Championships Won", icon: Award },
  { num: 80, suffix: "+", label: "Years of Excellence", icon: TrendingUp },
];

const features = [
  "Certified, Friendly Instructors",
  "All Safety Gear Provided",
  "Personalized Ride Options",
  "Horse Care & Boarding Included",
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" as const } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" as const } }
  };

  return (
    <section className="section-dark overflow-hidden relative section-padding">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--gold)]/5 blur-[120px]" />
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[var(--forest)]/60 blur-[100px]" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left: Image ── */}
          <div className="relative flex items-end justify-center order-2 lg:order-1 min-h-[480px]">
            {/* Glow ring */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-[var(--gold)]/10 blur-3xl" />

            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 w-full max-h-[560px]"
            >
              <HoverImage
                src="/images/man_riding_horse_premium.png"
                alt="Rider with horses"
                className="w-full h-full object-contain object-bottom pointer-events-none drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-20 left-0 bg-[var(--bg-dark-2)]/90 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl z-20"
            >
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedNumber target={300} suffix="+" />
              </div>
              <div className="text-white/60 text-xs uppercase tracking-widest font-bold">Happy Riders</div>
              <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "82%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                  className="h-full bg-[var(--gold)] rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* ── Right: Content ── */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-xl"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] text-[11px] font-black uppercase tracking-[0.25em] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                Our Facts
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-white mb-6 leading-[1.05] text-4xl lg:text-[52px] font-bold">
                Measuring milestones in <br className="hidden lg:block" />
                riders,{" "}
                <span className="italic font-display font-medium text-[var(--gold)]">
                  rides &amp; results
                </span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-lg">
                Discover key highlights of our equestrian club — world-class courses, expert instruction, exclusive member events, and a vibrant community designed to elevate every rider.
              </motion.p>

              {/* Stats grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden mb-8">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="bg-[var(--bg-dark-2)] p-6 flex flex-col gap-1">
                      <Icon className="w-4 h-4 text-[var(--gold)] mb-2 opacity-70" />
                      <div className="text-3xl font-bold text-white tracking-tight">
                        <AnimatedNumber target={stat.num} suffix={stat.suffix} />
                      </div>
                      <div className="text-white/50 text-[10px] uppercase tracking-widest font-bold leading-tight">{stat.label}</div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Feature checklist */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-14">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[var(--gold)] flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-white/80 text-[13px] font-semibold">{f}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={itemVariants} className="mt-10 lg:mt-14">
                <Link
                  href="/contact"
                  className="btn btn-primary w-full md:w-auto"
                >
                  Contact Us Today
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
