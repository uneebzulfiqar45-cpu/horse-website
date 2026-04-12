"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const removeTimer = setTimeout(() => setVisible(false), 2700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#091413]"
      style={{
        transition: "opacity 0.7s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Horse Logo */}
        <div className="relative">
          <svg viewBox="0 0 60 60" className="w-16 h-16 fill-[#C8A35F]" style={{ animation: "loaderPulse 1.5s ease-in-out infinite" }}>
            <path d="M47.5,13.75C47.5,25 40,32.5 32.5,32.5C25,32.5 17.5,25 17.5,13.75C17.5,13.05 17.55,12.37 17.65,11.7C11.25,14.12 7.5,20.1 7.5,27.5C7.5,38.55 16.45,47.5 27.5,47.5C27.5,48.32 27.5,49.17 27.5,50C27.5,52.75 25.25,55 22.5,55H42.5C39.75,55 37.5,52.75 37.5,50C37.5,49.17 37.5,48.32 37.5,47.5C48.55,47.5 57.5,38.55 57.5,27.5C57.5,20.1 53.75,14.12 47.35,11.7C47.45,12.37 47.5,13.05 47.5,13.75Z" />
          </svg>
          <div
            className="absolute inset-0 rounded-full bg-[#C8A35F]/20"
            style={{ animation: "loaderRing 1.5s ease-in-out infinite" }}
          />
        </div>

        {/* Brand Name */}
        <div className="text-white font-bold text-2xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Equi<span className="italic font-normal text-[#C8A35F]">Vet</span>
        </div>

        {/* Loading bar */}
        <div className="w-40 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C8A35F] rounded-full"
            style={{ animation: "loaderBar 2s ease-in-out forwards" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loaderPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.85; }
        }
        @keyframes loaderRing {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes loaderBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
