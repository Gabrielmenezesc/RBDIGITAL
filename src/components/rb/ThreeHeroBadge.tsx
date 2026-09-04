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
    setRotate({ x: -y * 14, y: x * 14 });
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
      {/* 1. Geometric Background Arcs & Constellation Lines matching reference */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 500 500" fill="none">
          {/* Outer Thin Cyan/Blue Arc */}
          <circle
            cx="250"
            cy="250"
            r="210"
            stroke="#00D4FF"
            strokeWidth="1.2"
            strokeDasharray="4 8"
            className="opacity-40 animate-spin"
            style={{ animationDuration: "60s" }}
          />
          
          {/* Inner Golden Orbit Arc */}
          <circle
            cx="250"
            cy="250"
            r="175"
            stroke="#C9A227"
            strokeWidth="1"
            strokeDasharray="160 30"
            className="opacity-35"
          />

          {/* Secondary Blue Geometric Ring */}
          <circle
            cx="250"
            cy="250"
            r="235"
            stroke="#0B3D91"
            strokeWidth="0.8"
            strokeDasharray="80 120"
            className="opacity-25"
          />

          {/* Triangular Brasília Architectural Vector Lines */}
          <path
            d="M 50 250 L 250 50 L 450 250"
            stroke="#C8CDD5"
            strokeWidth="0.75"
            className="opacity-20"
          />
          
          {/* Golden Particle Dots */}
          <circle cx="250" cy="40" r="2.5" fill="#C9A227" className="opacity-70 animate-pulse" />
          <circle cx="460" cy="180" r="3.5" fill="#C9A227" className="opacity-80 animate-ping" style={{ animationDuration: "3s" }} />
          <circle cx="420" cy="350" r="2" fill="#0B3D91" className="opacity-60" />
          <circle cx="80" cy="220" r="3" fill="#C9A227" className="opacity-70" />
          <circle cx="120" cy="380" r="2" fill="#00D4FF" className="opacity-60" />
        </svg>
      </div>

      {/* 2. Soft Background Radial Blend */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-blue-100/30 via-amber-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* 3. The 3D/4D Logo Emblem blending seamlessly into the white page */}
      <div
        className="relative z-10 w-[92%] max-w-[480px] transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={assetPath("/logo-rb-digital.png")}
          alt="RB Digital - Logomarca 3D Oficial"
          className="w-full h-auto object-contain mix-blend-multiply drop-shadow-sm"
          draggable={false}
        />
      </div>
    </div>
  );
}
