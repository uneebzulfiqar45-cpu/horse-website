"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Activity, Trees, Fingerprint, Binoculars } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Well-Trained",
    desc: "Our horses are meticulously selected and trained for safety, responsiveness, and all skill levels.",
    icon: Activity
  },
  {
    title: "Beautiful Trails",
    desc: "Explore scenic woodland paths and open fields designed for an immersion in nature.",
    icon: Trees
  },
  {
    title: "Build Confidence",
    desc: "Personalized coaching helps you master the fundamentals and bond deeply with your horse.",
    icon: Fingerprint
  },
  {
    title: "Flexible Packages",
    desc: "Choose from a variety of membership tiers tailored to your riding frequency and goals.",
    icon: Binoculars
  }
];

export default function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1, duration: 1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" as const } }
  };

  return (
    <section className="section-beige overflow-hidden section-padding relative">
      <div className="container-custom">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Column: Content */}
          <div className="relative z-10 flex flex-col items-start text-left">
            <motion.div variants={itemVariants} className="pill-badge">
              <span className="dot" />
              Our Benefits
            </motion.div>

            <motion.h2 
              variants={itemVariants} 
              className="text-[var(--text-primary)] text-4xl lg:text-[56px] font-bold leading-[1.1] !mb-8"
            >
              Why our members love <br />
              <span className="italic font-display font-medium text-[var(--gold)]">every ride they take</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants} 
              className="text-[var(--text-secondary)] text-[16px] leading-[1.8] !mb-10 max-w-lg"
            >
              Enjoy personalized treatments, expert guidance, and natural-looking results that enhance your beauty and boost.
            </motion.p>

            <div className="flex flex-col gap-6 w-full !mb-12">
              {[
                "Certified instructors dedicated to safety, skill-building",
                "A warm and welcoming space for kids."
              ].map((benefit, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[var(--gold)]" strokeWidth={4} />
                  </div>
                  <span className="text-[var(--text-secondary)] text-[15px] font-semibold">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="btn btn-primary group !px-10 !py-5 h-auto text-[15px]"
              >
                Contact Us
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Feature Grid */}
          <div className="relative w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-[#f2efe8] !p-8 lg:!p-10 rounded-[1.5rem] border border-black/5 flex flex-col items-start text-left shadow-sm group hover:shadow-xl hover:bg-white transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center !mb-8 shadow-sm group-hover:bg-[var(--gold)] transition-colors duration-300">
                      <Icon className="w-8 h-8 text-[var(--gold)] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-[var(--text-primary)] text-lg font-bold mb-4">{feature.title}</h4>
                    <p className="text-[var(--text-secondary)] text-[14px] leading-relaxed opacity-80">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Floating Text */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="text-[var(--text-secondary)] text-sm font-medium">Let&apos;s make something great work together</span>
              <Link href="/contact" className="text-[var(--gold)] text-sm font-bold underline underline-offset-4 hover:text-[var(--bg-dark)] transition-colors">
                Get Free Quote
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
