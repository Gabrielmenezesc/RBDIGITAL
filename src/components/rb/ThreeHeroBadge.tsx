"use client";

import React, { useRef, useState } from "react";
import { assetPath } from "@/lib/assetPath";

export default function ThreeHeroBadge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -y * 12, y: x * 12 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] aspect-square flex items-center justify-center select-none cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* 1. Geometric Background Arcs matching exact reference */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 500 500" fill="none">
          {/* Outer Thin Cyan Arc */}
          <circle
            cx="250"
            cy="250"
            r="215"
            stroke="#00D4FF"
            strokeWidth="1.2"
            strokeDasharray="4 8"
            className="opacity-50 animate-spin"
            style={{ animationDuration: "60s" }}
          />
          
          {/* Inner Golden Orbit Arc */}
          <circle
            cx="250"
            cy="250"
            r="180"
            stroke="#C9A227"
            strokeWidth="1"
            strokeDasharray="160 30"
            className="opacity-45"
          />

          {/* Secondary Blue Geometric Ring */}
          <circle
            cx="250"
            cy="250"
            r="240"
            stroke="#0B3D91"
            strokeWidth="0.8"
            strokeDasharray="80 120"
            className="opacity-30"
          />

          {/* Triangular Brasília Architectural Vector Lines */}
          <path
            d="M 40 250 L 250 40 L 460 250"
            stroke="#6F7785"
            strokeWidth="0.75"
            className="opacity-25"
          />
          
          {/* Golden Particle Dots */}
          <circle cx="250" cy="35" r="2.5" fill="#C9A227" className="opacity-80 animate-pulse" />
          <circle cx="465" cy="175" r="3.5" fill="#C9A227" className="opacity-90 animate-ping" style={{ animationDuration: "3.5s" }} />
          <circle cx="430" cy="350" r="2.5" fill="#0B3D91" className="opacity-70" />
          <circle cx="70" cy="220" r="3" fill="#C9A227" className="opacity-75" />
          <circle cx="110" cy="385" r="2" fill="#00D4FF" className="opacity-65" />
        </svg>
      </div>

      {/* 2. Soft Ambient Radial Glow */}
      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200/25 via-amber-200/15 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* 3. The 3D Emblem merging naturally with the studio gray background */}
      <div
        className="relative z-10 w-[94%] max-w-[490px] transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={assetPath("/logo-rb-digital.png")}
          alt="RB Digital - Logomarca 3D Oficial"
          className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(7,26,58,0.12)] mix-blend-multiply"
          draggable={false}
        />
      </div>
    </div>
  );
}
