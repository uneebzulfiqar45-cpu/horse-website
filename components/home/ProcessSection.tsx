"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const processes = [
  {
    num: "01",
    title: "Riding Lessons",
    desc: "Personalized riding instruction for kids, teens, and adults — beginner to advanced levels."
  },
  {
    num: "02",
    title: "Horse Boarding & Care",
    desc: "Top-quality stabling, nutrition, and daily horse care you can unconditionally trust."
  },
  {
    num: "03",
    title: "Trail Rides & Nature Tours",
    desc: "Scenic, guided trail rides for a peaceful equestrian escape in beautiful nature."
  }
];

export default function ProcessSection() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.15, duration: 1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <section className="section-dark overflow-hidden section-padding text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column (Content & Stats) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col max-w-xl"
          >
            <motion.div variants={itemVariants} className="self-start !mb-6">
              <div className="pill-badge pill-badge-dark">
                <span className="dot" />
                Our Process
              </div>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-white text-4xl lg:text-[50px] xl:text-[56px] font-bold leading-[1.05] !mb-6">
              Inspiring every rider to build trust, <br className="hidden xl:block"/>
              <span className="italic font-display font-medium text-white/90">skill & lifelong passion</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-white/70 text-[15px] lg:text-[16px] leading-[1.8] !mb-10 max-w-lg">
              We&apos;re more than just a place to ride — we&apos;re a destination where passion meets purpose. From beginners learning to mount a horse to competitive riders.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-row flex-wrap sm:flex-nowrap items-start !pt-8 !pb-10 !mb-10 border-t border-white/10 w-full gap-8 sm:gap-0">
              <div className="flex flex-col flex-1">
                <div className="text-3xl lg:text-4xl font-bold text-white !mb-2 tracking-tight">300+</div>
                <div className="text-[var(--text-on-dark-secondary)] text-[10px] md:text-[11px] uppercase tracking-wider font-bold">Happy Riders Trained</div>
              </div>
              
              <div className="hidden sm:block w-[1px] h-12 bg-white/10 self-center !mx-4 lg:!mx-8"></div>
              
              <div className="flex flex-col flex-1 !pl-0">
                <div className="text-3xl lg:text-4xl font-bold text-white !mb-2 tracking-tight">10k</div>
                <div className="text-[var(--text-on-dark-secondary)] text-[10px] md:text-[11px] uppercase tracking-wider font-bold">Trail Ride Kilometers</div>
              </div>

              <div className="hidden sm:block w-[1px] h-12 bg-white/10 self-center !mx-4 lg:!mx-8"></div>

              <div className="flex flex-col flex-1 !pl-0">
                <div className="text-3xl lg:text-4xl font-bold text-white !mb-2 tracking-tight">150+</div>
                <div className="text-[var(--text-on-dark-secondary)] text-[10px] md:text-[11px] uppercase tracking-wider font-bold">Championships Won</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="btn btn-primary inline-flex h-fit"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column (Staggered Cards) */}
          <div className="flex flex-col gap-6 lg:gap-8 !pt-10 lg:!pt-0 w-full relative">
            {processes.map((proc, idx) => {
              const isCenter = idx === 1;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.2 }}
                  className={`bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rounded-[1.2rem] lg:rounded-[1.5rem] !p-6 lg:!p-8 flex items-start sm:items-center gap-5 lg:gap-6 shadow-2xl transition-transform hover:-translate-y-1 relative z-10 w-full lg:w-[420px] xl:w-[480px] ${
                    isCenter ? "lg:mr-auto lg:!-ml-4 xl:!-ml-12" : "lg:ml-auto"
                  }`}
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[var(--gold)] flex items-center justify-center text-[var(--bg-dark)] font-bold text-lg lg:text-[19px] flex-shrink-0 shadow-lg !mt-1 sm:!mt-0">
                    {proc.num}
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-[20px] font-bold text-white !mb-1.5 leading-tight tracking-wide">{proc.title}</h4>
                    <p className="text-white/60 text-[13px] lg:text-[14px] leading-relaxed !pr-2">
                      {proc.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
