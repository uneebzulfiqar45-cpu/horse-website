"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Calendar, Shield, RotateCcw, Sparkles } from "lucide-react";

const plans = [
  {
    title: "Basic Plan",
    tagline: "Perfect for newcomers",
    description: "Build confidence and start your riding journey with group lessons and essential gear.",
    price: 39,
    features: [
      "4 group riding lessons/month",
      "Helmet rental included",
      "Access to beginner trails",
      "Member discount on events",
    ],
    isPopular: false,
    cta: "Get Started",
  },
  {
    title: "Standard Plan",
    tagline: "Most popular choice",
    description: "The ideal balance of instruction, access, and community for the growing rider.",
    price: 49,
    features: [
      "8 mixed lessons/month",
      "Full gear kit provided",
      "Priority trail booking",
      "Exclusive member events",
      "Monthly progress report",
    ],
    isPopular: true,
    cta: "Start Your Ride",
  },
  {
    title: "Premium Plan",
    tagline: "For serious equestrians",
    description: "Unlimited access, personalized coaching, and elite care for dedicated riders.",
    price: 79,
    features: [
      "Unlimited lessons",
      "Private coaching sessions",
      "Dedicated horse pairing",
      "Competition prep support",
      "VIP event access",
      "24/7 stable updates",
    ],
    isPopular: false,
    cta: "Go Premium",
  },
];

const guarantees = [
  { icon: Calendar, text: "30-day free trial" },
  { icon: Shield, text: "No hidden fees" },
  { icon: RotateCcw, text: "Cancel anytime" },
];

export default function PlanRideSection() {
  return (
    <section className="section-light section-padding overflow-hidden relative">
      {/* Soft background orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[var(--gold)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center !mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="pill-badge mb-6"
          >
            <span className="dot" />
            Pricing Plans
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1 }}
            className="text-[var(--text-primary)] text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight !mb-4 max-w-3xl"
          >
            Every rider&apos;s path starts here —{" "}
            <span className="italic font-display font-medium text-[var(--gold)]">choose your plan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-[var(--text-secondary)] text-[16px] max-w-xl leading-relaxed"
          >
            Flexible memberships built around your ambition — from first-time riders to competitive equestrians.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
              className={`relative !p-4 rounded-[1.75rem] flex flex-col transition-all duration-400 hover:-translate-y-2 ${
                plan.isPopular
                  ? "bg-[var(--bg-dark-2)] shadow-[0_24px_80px_-12px_rgba(15,42,30,0.4)] scale-105 z-10"
                  : "bg-white border border-black/6 shadow-md hover:shadow-xl hover:border-[var(--gold)]/30"
              }`}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[var(--gold)] text-black text-[11px] font-black uppercase tracking-[0.2em] !px-4 !py-1.5 rounded-full shadow-md">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className={`p-8 lg:p-10 flex flex-col flex-1 ${plan.isPopular ? "pt-12" : ""}`}>
                {/* Plan label */}
                <div className={`text-[11px] font-black uppercase tracking-[0.2em] !mb-2 ${plan.isPopular ? "text-[var(--gold)]" : "text-[var(--text-secondary)]"}`}>
                  {plan.tagline}
                </div>

                <h3 className={`text-[22px] font-bold !mb-3 ${plan.isPopular ? "text-white" : "text-[var(--text-primary)]"}`}>
                  {plan.title}
                </h3>

                <p className={`text-[14px] leading-relaxed !mb-6 ${plan.isPopular ? "text-white/60" : "text-[var(--text-secondary)]"}`}>
                  {plan.description}
                </p>

                {/* Divider */}
                <div className={`w-full h-px !mb-6 ${plan.isPopular ? "bg-white/10" : "bg-black/8"}`} />

                {/* Price */}
                <div className="flex items-end gap-2 !mb-8">
                  <span className={`text-[13px] font-bold ${plan.isPopular ? "text-white/50" : "text-[var(--text-secondary)]"}`}>$</span>
                  <span className={`text-[52px] font-bold tracking-tight leading-none ${plan.isPopular ? "text-white" : "text-[var(--text-primary)]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-[13px] font-semibold !pb-2 ${plan.isPopular ? "text-white/50" : "text-[var(--text-secondary)]"}`}>
                    / mo
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`btn btn-primary w-full ${plan.isPopular ? "shadow-2xl" : ""}`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <ul className="flex flex-col gap-3.5 mt-auto">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-[17px] h-[17px] flex-shrink-0 !mt-0.5 ${plan.isPopular ? "text-[var(--gold)]" : "text-[var(--bg-dark-2)]"}`} />
                      <span className={`text-[14px] leading-snug ${plan.isPopular ? "text-white/80" : "text-[var(--text-secondary)]"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="!mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
        >
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[var(--gold)]" />
                </div>
                <span className="text-[13px] font-bold text-[var(--text-secondary)]">{item.text}</span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
