"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import HoverImage from "@/components/ui/HoverImage";

const testimonials = [
  {
    name: "Wade Warren",
    role: "Beginner Rider",
    rating: 5,
    text: "I had never ridden a horse before, and honestly, I was nervous. But from my very first lesson, I felt supported, understood, and encouraged. The instructors took their time to teach me patiently, and the horses were gentle and responsive. Week after week, I found a sense of peace and confidence I didn't expect.",
    image: "/images/pexels-rdne-8624631.jpg",
    profileImage: "https://i.pravatar.cc/150?u=wade",
    tag: "Beginner Rider",
    stat: "8 weeks training"
  },
  {
    name: "Sarah Jenkins",
    role: "Advanced Equestrian",
    rating: 5,
    text: "The facilities here are simply top-notch. I've boarded my horses at several stables across the country, and the level of care and attention to detail here is unmatched. The trails are beautifully maintained, and the community is wonderfully supportive. It truly feels like a second home for me and my horses.",
    image: "/images/gabriela-fechet-7rRE3BK2gbo-unsplash.jpg",
    profileImage: "https://i.pravatar.cc/150?u=sarah",
    tag: "Pro Equestrian",
    stat: "3 years member"
  },
  {
    name: "Marcus Heidler",
    role: "Trail Ride Enthusiast",
    rating: 5,
    text: "Every trail ride here is an unforgettable experience. The guides know every corner of the landscape and the horses are perfectly matched to each rider's experience level. My family has come back four times now and we always leave refreshed and inspired.",
    image: "/images/akbar-nemati-PWLHpr3S2YM-unsplash.jpg",
    profileImage: "https://i.pravatar.cc/150?u=marcus",
    tag: "Trail Rider",
    stat: "4 family visits"
  }
];

const AUTOPLAY_DURATION = 6000;

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);
    const step = 100 / (AUTOPLAY_DURATION / 50);

    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, AUTOPLAY_DURATION);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  const navigate = (idx: number) => {
    setCurrent(idx);
    startAutoplay();
  };

  const goNext = () => navigate((current + 1) % testimonials.length);
  const goPrev = () => navigate((current - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-beige overflow-hidden section-padding">
      <div className="container-custom">

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center !mb-4"
        >
          <div className="pill-badge">
            <span className="dot" />
            Testimonials
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-center text-[var(--text-primary)] text-4xl lg:text-[56px] font-bold leading-[1.1] !mb-16 max-w-3xl mx-auto"
        >
          Their words, our pride,{" "}
          <span className="italic font-display font-medium text-[var(--gold)]">
            your inspiration
          </span>
        </motion.h2>

        {/* Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_-16px_rgba(15,42,30,0.18)] max-w-6xl mx-auto">

          {/* ── Left: Image Panel ── */}
          <div className="relative min-h-[380px] lg:min-h-[560px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${current}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <HoverImage
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1E]/80 via-[#0F2A1E]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#EAE6DC]/10 lg:to-[#EAE6DC]/30" />
              </motion.div>
            </AnimatePresence>

            {/* Rating badge — bottom left */}
            <motion.div
              key={`badge-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="absolute bottom-6 left-6 bg-[var(--bg-dark-2)]/95 backdrop-blur-md !py-3 !px-5 rounded-2xl flex items-center gap-3 shadow-2xl border border-white/10"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <div className="h-4 w-[1px] bg-white/20" />
              <span className="text-white font-bold text-sm tracking-tight">
                5.0{" "}
                <span className="text-white/50 font-medium !ml-1">{t.tag}</span>
              </span>
            </motion.div>

            {/* Slide counter — top left */}
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full !px-4 !py-1.5 text-white/80 text-xs font-bold tracking-widest">
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </div>
          </div>

          {/* ── Right: Content Panel ── */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-white flex flex-col justify-between !p-10 lg:!p-14"
          >

            {/* Decorative quote icon */}
            <div className="text-[var(--gold-lighter)] !mb-6">
              <Quote className="w-14 h-14 fill-[var(--gold-lighter)] text-[var(--gold-lighter)]" />
            </div>

            {/* Quote text */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`text-${current}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.55 }}
                  className="text-[var(--text-secondary)] text-[17px] lg:text-[19px] leading-[1.85] font-medium"
                >
                  &ldquo;{t.text}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="!my-8 h-[1px] w-full bg-black/6" />

            {/* Author + Navigation row */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${current}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-2xl overflow-hidden border-2 border-[var(--gold-lighter)] shadow-md flex-shrink-0">
                    <img
                      src={t.profileImage}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[var(--text-primary)] font-bold text-lg leading-tight">{t.name}</div>
                    <div className="text-[var(--text-secondary)] text-[13px] !mt-0.5">{t.role}</div>
                    <div className="text-[var(--gold)] text-[12px] font-bold !mt-1 uppercase tracking-wider">{t.stat}</div>
                  </div>
                </div>

                {/* Arrow buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={goPrev}
                    aria-label="Previous Testimonial"
                    className="w-12 h-12 rounded-full border border-black/12 flex items-center justify-center text-[var(--text-primary)] transition-all duration-300 hover:bg-[var(--gold)] hover:text-black hover:border-transparent hover:shadow-lg group"
                  >
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                  </button>
                  <button
                    onClick={goNext}
                    aria-label="Next Testimonial"
                    className="w-12 h-12 rounded-full bg-[var(--bg-dark-2)] border border-[var(--bg-dark-2)] flex items-center justify-center text-white transition-all duration-300 hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:shadow-lg group"
                  >
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar + Dot navigation */}
            <div className="mt-8 space-y-4">
              {/* Autoplay progress */}
              <div className="h-[2px] w-full bg-black/6 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--gold)] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`rounded-full transition-all duration-400 ${
                      i === current
                        ? "w-8 h-2 bg-[var(--gold)]"
                        : "w-2 h-2 bg-black/15 hover:bg-[var(--gold)]/50"
                    }`}
                  />
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="!mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center"
        >
          {[
            { num: "500+", label: "Happy Clients" },
            { num: "4.9★", label: "Average Rating" },

          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-[var(--text-primary)] tracking-tight">{item.num}</span>
              <span className="text-[var(--text-secondary)] text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
