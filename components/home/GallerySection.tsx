"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HoverImage from "@/components/ui/HoverImage";

// Using all pictures from the images directory as requested
const displayImages = [
  "/images/gabriela-fechet-7rRE3BK2gbo-unsplash.jpg",
  "/images/akbar-nemati-CS1mijfq6sE-unsplash.jpg",
  "/images/valeria-nikitina-fWy26LkwU4U-unsplash.jpg",
  "/images/elegant-girl-farm-wiith-horse.jpg",
  "/images/peter-chirkov-v1BxKkCPabM-unsplash.jpg",
  "/images/akbar-nemati-PWLHpr3S2YM-unsplash.jpg",
  "/images/ali-karimiboroujeni-Y5PHMWRuFWo-unsplash.jpg",
  "/images/anton-kotlovskii-2NtnLEO1qSM-unsplash.jpg",
  "/images/colton-jones-3DawTmgicMU-unsplash.jpg",
  "/images/elist-nguyen-Mz8zz7D8iDU-unsplash.jpg",
  "/images/jockey-girl-holding-helmet-before-competition.jpg",
  "/images/joel-heard-WrhuSgRsm54-unsplash.jpg",
  "/images/khphotography-arabian-horse-5249583.jpg",
  "/images/pexels-artempodrez-7986927.jpg",
  "/images/pexels-errich-cross-1349873314-28264214.jpg",
  "/images/pexels-kadiravsarr-15011215.jpg",
  "/images/pexels-rdne-8624631.jpg",
  "/images/pexels-reneterp-18892355.jpg",
  "/images/sergio-kian-G05lJGHxDMw-unsplash.jpg",
  "/images/stocksnap-lawn-2599037.jpg",
  "/images/woman-groomer-washes-horse-s-hooves-after-class-hippodrome-woman-takes-care-horse-washes-horse-after-training.jpg"
];

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const itemWidth = scrollRef.current.children[0].clientWidth;
      scrollRef.current.scrollBy({ left: itemWidth + 16, behavior: "smooth" });
    }
  };

  return (
    <section className="section-light section-padding overflow-hidden">
      <div className="container-custom flex flex-col items-center">
        {/* Header container centered */}
        <div className="flex flex-col items-center text-center !mb-10 lg:!mb-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pill-badge"
          >
            <span className="dot" />
            Our Gallery
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1 }}
            className="text-[var(--text-primary)] text-3xl md:text-4xl lg:text-[46px] font-bold leading-[1.1] max-w-xl !mt-4"
          >
            Captured moments from saddles, <br className="hidden md:block" />
            <span className="italic font-medium text-[var(--forest)] font-display">
              smiles, and trails
            </span>
          </motion.h2>
        </div>

        {/* Gallery Image Row */}
        <div className="relative w-full max-w-[1400px] mx-auto">
          {/* Fading edges for infinite scroll feel */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-var(--bg-primary) to-transparent z-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, var(--bg-light), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-var(--bg-primary) to-transparent z-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to left, var(--bg-light), transparent)' }} />
          
          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex w-full gap-3 lg:gap-4 overflow-x-auto no-scrollbar !pb-4 !px-4 md:!px-8"
          >
            {displayImages.map((img, idx) => {
              return (
                <div
                  key={idx}
                  className="relative flex-shrink-0 rounded-[1.2rem] lg:rounded-[1.5rem] overflow-hidden group border border-black/5 w-[160px] md:w-[220px] lg:w-[250px] aspect-[4/5] lg:aspect-[3/4] shadow-sm hover:shadow-xl transition-shadow duration-300 transform-gpu cursor-pointer"
                >
                  <HoverImage
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="absolute inset-0 w-full h-full"
                  />
                  
                  {/* Arrow overlay on hover for all images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 group-hover:bg-black/20 transition-all duration-300">
                    <button 
                      onClick={scrollRight}
                      className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/50 backdrop-blur-[4px] flex items-center justify-center text-white bg-white/20 hover:bg-[var(--gold)] hover:text-white transition-all shadow-lg scale-90 group-hover:scale-100 duration-300"
                    >
                      <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center !mt-6 lg:!mt-8 text-[var(--text-secondary)] text-[10px] md:text-[12px] uppercase tracking-[0.1em] font-bold"
        >
          Feel the freedom of the open field — <span className="text-[var(--gold)] transition-colors hover:text-[var(--gold-light)] cursor-pointer">start your riding journey with us now!</span>
        </motion.p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
