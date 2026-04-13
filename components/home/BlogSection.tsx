"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import HoverImage from "@/components/ui/HoverImage";

const articles = [
  {
    title: "5 Key Tips for Beginner Riders to Build Confidence in the Saddle",
    excerpt: "Understanding horse behavior is the foundation of building a respectful and trusting [...]",
    slug: "5-key-tips-beginner-riders",
    image: "/images/valeria-nikitina-fWy26LkwU4U-unsplash.jpg"
  },
  {
    title: "Beginner's Guide to Understanding Horse Behavior",
    excerpt: "Understanding horse behavior is the foundation of building a respectful and trusting [...]",
    slug: "beginners-guide-horse-behavior",
    image: "/images/gabriela-fechet-7rRE3BK2gbo-unsplash.jpg"
  },
  {
    title: "Preparing Your Horse for Competition: Essential Tips",
    excerpt: "Understanding horse behavior is the foundation of building a respectful and trusting [...]",
    slug: "preparing-horse-for-competition",
    image: "/images/peter-chirkov-v1BxKkCPabM-unsplash.jpg"
  }
];

export default function BlogSection() {
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.15, duration: 1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <section className="section-light overflow-hidden section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col items-center text-center !mb-14 lg:!mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="pill-badge"
          >
            <span className="dot" />
            Latest Blog
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1 }}
            className="text-[var(--text-primary)] text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-bold leading-[1.15] max-w-3xl !mt-5"
          >
            Explore tips, stories, and insights from <br className="hidden md:block"/>
            the <span className="italic font-display font-medium text-[var(--bg-dark)]">equestrian world</span>
          </motion.h2>
        </div>

        {/* Article Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        >
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
            >
              <Link
                href={`/blog/${article.slug}`}
                className="group flex flex-col h-full bg-transparent"
              >
                {/* Image */}
                <div className="w-full aspect-[4/3] rounded-[1.2rem] overflow-hidden !mb-5 relative bg-black/5">
                  <HoverImage
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-500 pointer-events-none" />
                </div>

                <div className="flex-grow flex flex-col !px-1">
                  <h3 className="text-[var(--text-primary)] font-extrabold text-[16px] lg:text-[18px] leading-[1.3] !mb-2.5 group-hover:text-[var(--gold)] transition-colors !pr-2 tracking-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-[var(--text-secondary)] text-[13px] leading-[1.65] !mb-5">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto w-full !pt-4 border-t border-black/10 flex items-center justify-start text-[var(--text-primary)] font-bold text-[13px] group-hover:text-[var(--gold)] transition-colors">
                    Read More 
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 stroke-[2.5]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
