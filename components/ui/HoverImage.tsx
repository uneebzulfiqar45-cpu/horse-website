"use client";

import React, { useRef, useState } from "react";

interface HoverImageProps {
  src: string;
  alt: string;
  className?: string; // Class applied to the outer wrapper
  imageClassName?: string; // Class applied to the img tag itself if needed
}

export default function HoverImage({ 
  src, 
  alt, 
  className = "", 
  imageClassName = "" 
}: HoverImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseY, setMouseY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouseY(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden group w-full h-full ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 ${imageClassName}`}
      />
      
      {/* Standard shadow/tint to make white glow visible against bright images */}
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
      
      {/* Dynamic White Vertical Fade Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(ellipse 250% 250px at 50% ${mouseY}px, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 100%)`,
        }}
      />
    </div>
  );
}
