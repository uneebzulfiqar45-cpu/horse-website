"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const shadow = shadowRef.current;
    if (!dot || !shadow) return;

    let mouseX = 0;
    let mouseY = 0;
    let shadowX = 0;
    let shadowY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot snaps instantly
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    // Smooth shadow lag animation
    const animate = () => {
      shadowX += (mouseX - shadowX) * 0.12;
      shadowY += (mouseY - shadowY) * 0.12;
      shadow.style.left = `${shadowX}px`;
      shadow.style.top = `${shadowY}px`;
      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", onMove);

    // Scale up on hovering clickable elements
    const onEnter = () => {
      dot.style.transform = "translate(-50%, -50%) scale(2.5)";
      shadow.style.transform = "translate(-50%, -50%) scale(2)";
    };
    const onLeave = () => {
      dot.style.transform = "translate(-50%, -50%) scale(1)";
      shadow.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const interactables = document.querySelectorAll("a, button, [role='button']");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* Tiny sharp yellow dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#C8A35F",
          boxShadow: "0 0 6px 2px rgba(200, 163, 95, 0.5)",
          top: 0,
          left: 0,
        }}
      />
      {/* Lagging shadow/glow */}
      <div
        ref={shadowRef}
        className="pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "rgba(200, 163, 95, 0.08)",
          boxShadow: "0 0 20px 8px rgba(200, 163, 95, 0.12)",
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}
