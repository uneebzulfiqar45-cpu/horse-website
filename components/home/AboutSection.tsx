"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, PawPrint } from "lucide-react";
import { motion } from "framer-motion";
import HoverImage from "@/components/ui/HoverImage";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="section-beige overflow-hidden section-padding">
      <div className="container-custom">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Left Column: Overlapping Images */}
          <div className="relative lg:pt-12">
            <div className="relative max-w-[520px] mx-auto lg:mx-0">
              
              {/* 1. Main Background Image */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0 }}
                className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]"
              >
                <HoverImage
                  src="/images/pexels-rdne-8624631.jpg"
                  alt="Professional Care"
                />
              </motion.div>

              {/* 2. Overlapping Small Image */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="absolute -bottom-16 -right-8 lg:-right-16 z-30 w-[60%] rounded-[2rem] overflow-hidden aspect-square border-[10px] border-[var(--bg-beige)] shadow-2xl"
              >
                <HoverImage
                  src="/images/akbar-nemati-CS1mijfq6sE-unsplash.jpg"
                  alt="Elite Training"
                />
              </motion.div>

              {/* Spinning Contact Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute top-1/4 -right-12 lg:-right-24 z-40 hidden lg:block"
              >
                <Link 
                  href="/contact"
                  className="group relative flex items-center justify-center w-36 h-36 transition-transform duration-500 hover:scale-110"
                >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                      <path
                        id="aboutTextPath"
                        d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        fill="none"
                      />
                      <text className="text-[11px] uppercase font-bold tracking-[4px] fill-[var(--text-primary)]">
                        <textPath href="#aboutTextPath" startOffset="0%">
                          • Contact Us • Contact Us • Contact Us • Contact Us
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                  <div className="w-16 h-16 rounded-full bg-[var(--gold)] flex items-center justify-center shadow-2xl group-hover:bg-[var(--gold-light)] transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
                      <path d="M19,5.5C19,10 16,13 13,13C10,13 7,10 7,5.5C7,5.22 7.02,4.95 7.06,4.68C4.5,5.65 3,8.04 3,11C3,15.42 6.58,19 11,19C11,19.33 11,19.67 11,20C11,21.1 10.1,22 9,22H17C15.9,22 15,21.1 15,20C15,19.67 15,19.33 15,19C19.42,19 23,15.42 23,11C23,8.04 21.5,5.65 18.94,4.68C18.98,4.95 19,5.22 19,5.5Z" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="relative pt-16 lg:pt-8 flex flex-col h-full lg:pl-12">
            <div className="flex-grow">
              
              {/* 3. Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              >
                {/* Minimalist White/Gold Pill Badge */}
                <div className="pill-badge">
                  <span className="dot" />
                  About Us
                </div>

                <h2 className="text-[var(--text-primary)] mb-8 leading-[1.1] text-4xl lg:text-[64px] font-bold">
                  Building riders&apos; confidence, <br className="hidden lg:block"/>
                  skill, <span className="italic font-display font-medium text-[var(--gold)]">and connection</span>
                </h2>

                <p className="text-[var(--text-secondary)] text-lg leading-[1.8] mb-12 max-w-2xl font-medium">
                  We are more than just a riding club — we are a vibrant community united by our love for horses. For over 80 years, we&apos;ve welcomed riders of all ages and skill levels to experience the joy.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24 mb-16 relative">
                  <div className="flex-1">
                    <h4 className="text-[var(--text-primary)] text-xl font-bold mb-8">Our Mission:</h4>
                    <ul className="space-y-4">
                      {["Ensures the health and welfare of our animals.", "Pure, Wholesome Dairy Products You Can Trust.", "Deliver fresh, high-quality dairy products by caring."].map((point, index) => (
                        <li key={index} className="flex items-start gap-4 text-[var(--text-secondary)] font-medium text-[15px]">
                          <div className="mt-1 flex-shrink-0 text-[var(--gold)]">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                              <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                            </svg>
                          </div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>


                </div>
              </motion.div>

              {/* 5. Sub-features & Button */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14 border-t border-black/10 pt-14">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[var(--bg-dark-2)] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3" />
                      </svg>
                    </div>
                    <h5 className="text-[var(--text-primary)] font-bold text-[15px] leading-snug pt-1">
                      Limited Access to Well-<br/>Maintained Facilities.
                    </h5>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center flex-shrink-0 text-black shadow-md">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H5V22H19V14M17,20H7V14H17M12,2L14.85,4.85L12,7.7L9.15,4.85L12,2Z" />
                      </svg>
                    </div>
                    <h5 className="text-[var(--text-primary)] font-bold text-[15px] leading-snug pt-1">
                      Inconsistent Horse Care<br/>Standards
                    </h5>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn btn-primary"
                >
                  Learn Contact Us
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
