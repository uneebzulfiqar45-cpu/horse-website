"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import HoverImage from "@/components/ui/HoverImage";

const benefits = [
  {
    title: "Certified Instructors",
    desc: "Learn from qualified experts with years of experience in riding, training, and horse care."
  },
  {
    title: "Well-Trained, Gentle Horses",
    desc: "Our horses are carefully selected and trained to match riders of all ages and confidence levels."
  },
  {
    title: "Top-Class Facilities",
    desc: "Clean stables, secure arenas, and scenic trails create a safe and beautiful environment for all."
  }
];

export default function TrustSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" as const } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" as const } }
  };

  return (
    <section className="section-light overflow-hidden section-padding relative">
      <div className="container-custom">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center"
        >
          {/* Left Column: Text Content */}
          <div className="relative z-10 flex flex-col items-start text-left">
            <motion.div variants={itemVariants} className="pill-badge">
              <span className="dot" />
              Why Choose Us
            </motion.div>

            <motion.h2 
              variants={itemVariants} 
              className="text-[var(--text-primary)] text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8"
            >
              Exceptional benefits that <br className="hidden lg:block"/>
              set our <span className="italic font-display font-medium text-[var(--gold)]">horse club apart</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants} 
              className="text-[var(--text-secondary)] text-[16px] leading-[1.8] mb-12 max-w-lg"
            >
              We’re more than just a riding facility — we’re a trusted partner in your equestrian journey. Every detail of our club is designed to ensure the best possible experience for both horse and rider.
            </motion.p>

            <div className="flex flex-col gap-10 w-full mb-12">
              {benefits.map((benefit, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-[var(--bg-dark)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)] transition-colors duration-300">
                    <Check className="w-6 h-6 text-[var(--bg-dark)] group-hover:text-black transition-colors duration-300" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[var(--text-primary)] text-xl font-bold mb-2">{benefit.title}</h4>
                    <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed max-w-sm">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="btn btn-primary btn-glow btn-shimmer group"
              >
                Discover More
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Image Collage */}
          <div className="relative w-full h-[550px] md:h-[650px] lg:h-[750px]">
            
            {/* Spinning Badge - Top Right */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute -top-10 -right-4 md:-top-16 md:right-0 z-40 w-32 h-32 md:w-40 md:h-40 pointer-events-none"
            >
               <svg viewBox="0 0 100 100" className="w-full h-full fill-[var(--text-primary)] opacity-90 drop-shadow-2xl">
                 <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                 <text className="text-[9px] font-bold uppercase tracking-[0.2em]">
                   <textPath xlinkHref="#circlePath">
                     Contact Us Today • EquiVet Experience • 
                   </textPath>
                 </text>
               </svg>
               {/* Center Horse Icon */}
               <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full h-full bg-[var(--bg-light)] rounded-full flex items-center justify-center border border-black/10 shadow-inner">
                    <svg viewBox="0 0 24 24" className="w-1/2 h-1/2 text-[var(--bg-dark)] fill-current rotate-[-15deg]">
                       <path d="M19,5.5C19,10 16,13 13,13C10,13 7,10 7,5.5C7,5.22 7.02,4.95 7.06,4.68C4.5,5.65 3,8.04 3,11C3,15.42 6.58,19 11,19C11,19.33 11,19.67 11,20C11,21.1 10.1,22 9,22H17C15.9,22 15,21.1 15,20C15,19.67 15,19.33 15,19C19.42,19 23,15.42 23,11C23,8.04 21.5,5.65 18.94,4.68C18.98,4.95 19,5.22 19,5.5Z" />
                    </svg>
                  </div>
               </div>
            </motion.div>

            <div className="relative w-full h-full">
               {/* Main Image 1 - Top Left Staggered */}
                <motion.div 
                  variants={imageVariants}
                  className="absolute top-0 left-0 w-[80%] h-[70%] rounded-[2.5rem] overflow-hidden shadow-2xl z-20"
                >
                  <HoverImage 
                    src="/images/vet_examining_horse.png" 
                    alt="Vet examining horse"
                    className="w-full h-full"
                  />
                 {/* Visual Overlay Card */}
                 <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-[var(--bg-primary)] fill-current" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-white text-sm font-bold">Got questions? we&apos;re</span>
                      <span className="text-white/80 text-[11px] font-medium tracking-wide">here to help!</span>
                   </div>
                 </div>
               </motion.div>

               {/* Main Image 2 - Bottom Right Offset */}
                <motion.div 
                  variants={imageVariants}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-4 right-0 w-[65%] h-[60%] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-8 border-[var(--bg-light)]"
                >
                  <HoverImage 
                    src="/images/woman_with_two_horses.png" 
                    alt="Woman with horses" 
                    className="w-full h-full"
                  />
               </motion.div>

               {/* Stats Card - Bottom Left */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6, duration: 0.8 }}
                 className="absolute bottom-10 left-[-5%] z-30 bg-[var(--bg-dark-2)] p-6 lg:p-8 rounded-[2rem] shadow-2xl border border-white/5 flex flex-col items-center gap-3 min-w-[200px]"
               >
                 <div className="flex items-center justify-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-[var(--gold)] fill-current" />
                    ))}
                 </div>
                 <div className="text-white text-xs font-bold uppercase tracking-widest mb-2">More Than 90+ Trusted Clients</div>
                 <div className="flex -space-x-3 items-center">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--bg-dark-2)] overflow-hidden bg-gray-200">
                        <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-[var(--bg-dark-2)] bg-[var(--gold)] flex items-center justify-center text-black text-xs font-black">
                      +
                    </div>
                 </div>
               </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

