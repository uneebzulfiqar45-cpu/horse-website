"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    { icon: Phone, label: "Phone", value: "+49 000 000 0000", href: "tel:+490000000000", note: "Mon–Fri 8:00–18:00" },
    { icon: MessageCircle, label: "WhatsApp", value: "Send a WhatsApp", href: "https://wa.me/490000000000", note: "Quick questions & photos" },
    { icon: Mail, label: "Email", value: "info@equivet-practice.de", href: "mailto:info@equivet-practice.de", note: "Non-urgent enquiries" },
    { icon: MapPin, label: "Location", value: "Region, Germany", href: "/service-area", note: "Mobile service — we come to you" },
  ];

  return (
    <section className="section-dark section-padding overflow-hidden">
      <div className="container-custom">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="pill-badge"
          >
            <span className="dot" />
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1 }}
            className="text-white text-4xl lg:text-[52px] font-bold leading-[1.15] max-w-3xl"
          >
            Ready to book an <br className="hidden lg:block" />
            <span className="italic font-display font-medium text-[var(--gold)]">appointment?</span>
          </motion.h2>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-6xl mx-auto">

          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col w-full lg:w-1/2"
          >
            <p className="text-white/70 text-[16px] leading-[1.8] mb-24">
              Whether it&apos;s a routine wellness check or an urgent concern, we&apos;re here to help.
              Reach out through any channel — we respond promptly.
            </p>

            <div className="flex flex-col gap-8 lg:gap-10">
              {contacts.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.08 }}
                    className="group flex items-center gap-10 py-10 border-b border-white/10 hover:border-[var(--gold)] transition-colors"
                  >
                    <div className="w-14 h-14 rounded-[1.25rem] bg-[var(--gold)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold-light)] transition-colors shadow-sm">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="text-white font-bold text-[16px] tracking-wide group-hover:text-[var(--gold)] transition-colors">{c.value}</div>
                      <div className="text-white/60 text-[14px]">{c.note}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-[var(--gold)] group-hover:translate-x-1 transition-all duration-200" />
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-12 lg:mt-16 block"
            >
              <Link
                href="/contact"
                className="btn btn-primary inline-flex items-center justify-center gap-2"
              >
                Book Appointment
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center justify-center bg-[var(--bg-dark-2)] rounded-[2rem] lg:rounded-[2.5rem] p-6 md:p-10 lg:p-14 shadow-xl border border-white/5 w-full lg:w-1/2"
          >
            <h3 className="text-white font-bold text-[24px] lg:text-[28px] mb-8 lg:mb-10 tracking-tight text-center w-full">Send Us a Message</h3>
            <form className="flex flex-col items-center justify-center gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="w-full flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex flex-col gap-2.5 w-full">
                  <label className="text-[var(--gold)] text-[12px] lg:text-[13px] font-bold tracking-widest uppercase ml-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-[var(--bg-dark)] border border-white/10 rounded-2xl px-5 py-4 text-[15px] lg:text-[16px] text-white placeholder-white/30 outline-none focus:border-[var(--gold)] transition-all shadow-inner hover:border-white/20"
                  />
                </div>
                <div className="flex flex-col gap-2.5 w-full">
                  <label className="text-[var(--gold)] text-[12px] lg:text-[13px] font-bold tracking-widest uppercase ml-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full bg-[var(--bg-dark)] border border-white/10 rounded-2xl px-5 py-4 text-[15px] lg:text-[16px] text-white placeholder-white/30 outline-none focus:border-[var(--gold)] transition-all shadow-inner hover:border-white/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5 w-full justify-center">
                <label className="text-[var(--gold)] text-[12px] lg:text-[13px] font-bold tracking-widest uppercase ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-[var(--bg-dark)] border border-white/10 rounded-2xl px-5 py-4 text-[15px] lg:text-[16px] text-white placeholder-white/30 outline-none focus:border-[var(--gold)] transition-all shadow-inner hover:border-white/20"
                />
              </div>

              <div className="flex flex-col gap-2.5 w-full justify-center">
                <label className="text-[var(--gold)] text-[12px] lg:text-[13px] font-bold tracking-widest uppercase ml-1">Horse Name & Condition</label>
                <input
                  type="text"
                  placeholder="e.g. Apollo — routine checkup"
                  className="w-full bg-[var(--bg-dark)] border border-white/10 rounded-2xl px-5 py-4 text-[15px] lg:text-[16px] text-white placeholder-white/30 outline-none focus:border-[var(--gold)] transition-all shadow-inner hover:border-white/20"
                />
              </div>

              <div className="flex flex-col gap-2.5 w-full justify-center">
                <label className="text-[var(--gold)] text-[12px] lg:text-[13px] font-bold tracking-widest uppercase ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-[var(--bg-dark)] border border-white/10 rounded-2xl px-5 py-4 text-[15px] lg:text-[16px] text-white placeholder-white/30 outline-none focus:border-[var(--gold)] transition-all shadow-inner hover:border-white/20 resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full mt-4 !py-4 lg:!py-5 !text-[16px] !rounded-2xl flex items-center justify-center gap-2 group shadow-xl"
              >
                Send Message
                <ArrowUpRight className="w-5 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
