"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import HoverImage from "@/components/ui/HoverImage";

const faqs = [
  {
    question: "1. Do I need prior riding experience to join?",
    answer: "No prior experience is necessary! We welcome riders of all levels, from complete beginners to advanced equestrians. Our instructors will match you with the right horse and program."
  },
  {
    question: "2. What age groups do you accept?",
    answer: "We offer riding programs for children aged 5 and up, as well as teen and adult sessions. Our Pony Club is specially designed for kids!"
  },
  {
    question: "3. What should I wear for my first ride?",
    answer: "Please wear long, comfortable pants (like jeans or leggings) and closed-toe shoes with a small heel. We provide riding helmets for all beginners."
  },
  {
    question: "4. Are your instructors certified?",
    answer: "Yes, all our instructors are fully certified professionals with years of experience in both competitive riding and teaching."
  },
  {
    question: "5. Do you offer horse boarding services?",
    answer: "Yes, we offer premium boarding services that include daily turnout, stall cleaning, and customized feeding programs tailored to your horse's needs."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="section-light overflow-hidden section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <div className="pill-badge">
              <span className="dot" />
              FAQ&apos;s
            </div>

            <h2 className="text-[var(--text-primary)] text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight">
              Helpful answers for new and <br className="hidden lg:block"/>
              <span className="italic font-display font-medium text-[var(--gold)]">seasoned riders</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link
              href="/faqs"
              className="btn btn-primary group"
            >
              View All FAQs
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column (Images & Contact Card) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="grid grid-cols-2 gap-4 h-[420px] lg:h-[500px]"
            >
              {/* Left Column - 2 small images */}
              <div className="flex flex-col gap-4 h-full">
                <HoverImage
                  src="/images/valeria-nikitina-fWy26LkwU4U-unsplash.jpg"
                  alt="Riders"
                  className="rounded-[2rem] shadow-md border border-black/5 flex-1"
                />
                <HoverImage
                  src="/images/peter-chirkov-v1BxKkCPabM-unsplash.jpg"
                  alt="Happy Riders"
                  className="rounded-[2rem] shadow-md border border-black/5 flex-1"
                />
              </div>
              {/* Right Column - 1 big image */}
              <HoverImage
                src="/images/joel-heard-WrhuSgRsm54-unsplash.jpg"
                alt="Rider and Horse"
                className="rounded-[2rem] shadow-md border border-black/5 h-full"
              />
            </motion.div>

            {/* Contact Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-5 pl-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center text-black shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--gold-light)]">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[var(--text-secondary)] text-[12px] font-medium mb-0.5 tracking-wider uppercase">any Question?</span>
                <span className="text-[var(--text-primary)] font-extrabold text-[22px] tracking-tight group-hover:text-[var(--gold)] transition-colors">+1.987 965 698</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Accordion) */}
          <div className="lg:col-span-7 flex flex-col lg:pl-6 pt-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  key={index} 
                  className="border-b border-black/10 last:border-0"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-8 lg:py-10 text-left group"
                  >
                    <span className={`text-[17px] lg:text-[19px] font-bold transition-colors pr-8 ${isOpen ? "text-[var(--gold)]" : "text-[var(--text-primary)] group-hover:text-[var(--gold)]"}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-sm ${isOpen ? "bg-[var(--gold)] text-black" : "bg-black/5 text-[var(--text-primary)] group-hover:bg-[var(--gold)] group-hover:text-black"}`}>
                       <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[var(--text-secondary)] text-[16px] leading-[1.8] pb-10 lg:pb-12 pr-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
