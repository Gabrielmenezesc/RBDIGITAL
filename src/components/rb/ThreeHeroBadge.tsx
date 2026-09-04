"use client";

import React, { useRef, useState, useEffect } from "react";
import { assetPath } from "@/lib/assetPath";

export default function ThreeHeroBadge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [clickPulse, setClickPulse] = useState(false);

  // Smooth mouse movement tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const handleClick = () => {
    setClickPulse(true);
    setTimeout(() => setClickPulse(false), 800);
  };

  // Touch support for mobile devices
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) / rect.width - 0.5;
    const y = (touch.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: Math.max(-0.5, Math.min(0.5, x)), y: Math.max(-0.5, Math.min(0.5, y)) });
  };

  const rotX = isHovered ? -mousePos.y * 22 : -mousePos.y * 10;
  const rotY = isHovered ? mousePos.x * 22 : mousePos.x * 10;
  const shiftZ = isHovered ? 35 : 10;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
      className="relative w-full max-w-[540px] aspect-square flex items-center justify-center select-none cursor-pointer group"
      style={{ perspective: "1200px" }}
    >
      {/* 1. 4D Volumetric Ambient Energy Aura */}
      <div
        className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-blue-400/20 via-amber-300/15 to-indigo-500/15 blur-3xl pointer-events-none transition-all duration-700 -z-10"
        style={{
          transform: `scale(${isHovered ? 1.15 : 1}) translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
        }}
      />

      {/* 2. 4D Gyroscopic Orbital Rings (3D Transformed Space) */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotX * 0.4}deg) rotateY(${rotY * 0.4}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 500 500" fill="none">
          {/* Outer Cyan 4D Gyro Ring */}
          <circle
            cx="250"
            cy="250"
            r="225"
            stroke="#00D4FF"
            strokeWidth="1.2"
            strokeDasharray="6 12"
            className="opacity-40 animate-spin"
            style={{ animationDuration: "50s" }}
          />

          {/* Golden Orbital Ellipse */}
          <ellipse
            cx="250"
            cy="250"
            rx="200"
            ry="110"
            stroke="#C9A227"
            strokeWidth="1.2"
            strokeDasharray="140 25"
            className="opacity-50"
            style={{
              transformOrigin: "250px 250px",
              transform: `rotate(-25deg) rotateX(${mousePos.y * 30}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          />

          {/* Deep Navy Geometric Outer Bounds */}
          <circle
            cx="250"
            cy="250"
            r="242"
            stroke="#0B3D91"
            strokeWidth="0.8"
            strokeDasharray="90 140"
            className="opacity-30"
          />

          {/* Brasília Monumental Vector Structure */}
          <path
            d="M 45 250 L 250 35 L 455 250"
            stroke="#6F7785"
            strokeWidth="0.8"
            className="opacity-25"
          />

          {/* Floating 4D Energy Nodes / Golden Stars */}
          <circle cx="250" cy="35" r="3" fill="#C9A227" className="opacity-90 animate-pulse" />
          <circle
            cx="465"
            cy="175"
            r="3.5"
            fill="#C9A227"
            className="opacity-90 animate-ping"
            style={{ animationDuration: "3.2s" }}
          />
          <circle cx="430" cy="360" r="2.5" fill="#0B3D91" className="opacity-70" />
          <circle cx="70" cy="220" r="3" fill="#C9A227" className="opacity-75" />
          <circle cx="105" cy="390" r="2.5" fill="#00D4FF" className="opacity-75" />
        </svg>
      </div>

      {/* 3. 4D Click Ripple Wave */}
      {clickPulse && (
        <div className="absolute w-40 h-40 rounded-full border-2 border-amber-400/80 animate-ping pointer-events-none z-20" />
      )}

      {/* 4. Floor Dynamic 3D Depth Shadow */}
      <div
        className="absolute bottom-6 w-[65%] h-8 rounded-full bg-slate-950/20 blur-xl transition-all duration-300 pointer-events-none"
        style={{
          transform: `scale(${isHovered ? 0.9 : 1}) translateY(${isHovered ? 8 : 0}px)`,
          opacity: isHovered ? 0.35 : 0.25,
        }}
      />

      {/* 5. Main 4D Levitation & 3D Interactive Perspective Layer */}
      <div
        className="relative z-10 w-[92%] max-w-[480px] transition-all duration-150 ease-out"
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${shiftZ}px)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Continuous 4D Floating & Breathing Animation Container */}
        <div className="animate-rb-float relative">
          {/* Gleaming 4D Metallic Light Sheen Sweep */}
          <div
            className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${50 + mousePos.x * 60}% ${
                50 + mousePos.y * 60
              }%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 60%)`,
              mixBlendMode: "overlay",
            }}
          />

          {/* High-Resolution Transparent 3D/4D Sculpture Logo */}
          <img
            src={assetPath("/logo-rb-digital.png")}
            alt="RB Digital - Logomarca 4D Oficial"
            className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(7,26,58,0.22)] select-none pointer-events-none transition-transform duration-300"
            style={{
              transform: isHovered ? "scale(1.03)" : "scale(1)",
            }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
