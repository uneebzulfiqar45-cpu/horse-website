"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  Users,
  Trophy,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import HoverImage from "@/components/ui/HoverImage";

const benefits = [
  {
    title: "Exclusive Club Events",
    desc: "Join riding camps, horse shows, and community trail rides with fellow equestrians.",
    icon: Star,
    check: "Discounted community access",
  },
  {
    title: "Well-Trained Horses",
    desc: "Safe, gentle horses carefully matched to every rider's skill level and temperament.",
    icon: ShieldCheck,
    check: "Certified, maintained horses",
  },
  {
    title: "Expert Coaching",
    desc: "Learn from certified instructors who tailor every session to your personal goals.",
    icon: Trophy,
    check: "1-on-1 coaching available",
  },
  {
    title: "Priority Booking",
    desc: "Members get first access to lessons, trails, and events before general availability.",
    icon: Zap,
    check: "Skip-the-queue access",
  },
];



export default function MembershipSection() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1, duration: 1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" as const } },
  };

  return (
    <section className="section-dark overflow-hidden section-padding relative">
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--gold)]/4 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--forest)]/50 blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left: Visuals ── */}
          <div className="relative flex justify-center order-2 lg:order-1 min-h-[600px] items-center">
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-[540px] w-[340px] lg:h-[600px] lg:w-[380px] rounded-[5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border-[8px] border-[var(--bg-dark)]"
            >
              <HoverImage
                src="/images/woman_with_two_horses.png"
                alt="Membership Benefits"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/70 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Spinning contact badge */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-10 z-30 hidden lg:block">
              <Link
                href="/contact"
                className="group relative flex items-center justify-center w-36 h-36 transition-transform duration-500 hover:scale-110"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <path id="memberBadgePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                    <text className="text-[11px] uppercase font-bold tracking-[4px] fill-white/60">
                      <textPath href="#memberBadgePath" startOffset="0%">
                        • Join Now • Join Now • Join Now • Join Now
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <div className="w-14 h-14 rounded-full bg-[var(--gold)] flex items-center justify-center shadow-2xl group-hover:bg-white transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6 text-black" />
                </div>
              </Link>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="order-1 lg:order-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] text-[11px] font-black uppercase tracking-[0.25em] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                Club Benefits
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-white mb-6 leading-[1.05] text-4xl lg:text-[52px] font-bold">
                Membership that rewards your{" "}
                <span className="italic font-display font-medium text-[var(--gold)]">
                  passion for riding
                </span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-white/60 text-[15px] leading-relaxed mb-10 max-w-xl">
                Joining our club means more than learning to ride. It&apos;s about becoming part of a secure, supportive community where horses and humans thrive together.
              </motion.p>

              {/* Benefits grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="bg-[var(--bg-dark-2)] border border-white/6 p-6 rounded-2xl flex flex-col gap-3 transition-all duration-300 hover:border-[var(--gold)]/30 hover:shadow-[0_0_0_1px_rgba(200,169,106,0.2)] group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/20 transition-colors">
                          <Icon className="w-4.5 h-4.5 text-[var(--gold)]" style={{ width: 18, height: 18 }} />
                        </div>
                        <h4 className="text-white text-[15px] font-bold leading-tight">{benefit.title}</h4>
                      </div>
                      <p className="text-white/50 text-[13px] leading-relaxed">{benefit.desc}</p>
                      <div className="flex items-center gap-2 pt-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--gold)] flex-shrink-0" />
                        <span className="text-white/60 text-[11px] font-bold uppercase tracking-wide">{benefit.check}</span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
              <motion.div variants={itemVariants} className="mt-10 lg:mt-14">
                <Link
                  href="/contact"
                  className="btn btn-primary w-full md:w-auto"
                >
                  Become a Member
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
