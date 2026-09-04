"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { assetPath } from "@/lib/assetPath";

export default function ThreeHeroBadge() {
  const mountRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 4D / 3D Multi-dimensional WebGL Scene
    const scene = new THREE.Scene();
    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Gyroscopic Golden Orbit Ring 1
    const ring1Geom = new THREE.TorusGeometry(2.5, 0.03, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xc9a227,
      metalness: 0.95,
      roughness: 0.1,
      emissive: 0x664d00,
      emissiveIntensity: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    scene.add(ring1);

    // 2. Gyroscopic Tech Blue Orbit Ring 2 (Intersecting 4D axis)
    const ring2Geom = new THREE.TorusGeometry(2.8, 0.025, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x0b3d91,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x051a3a,
      emissiveIntensity: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = Math.PI / 2.5;
    scene.add(ring2);

    // 3. Futuristic 4D Outer Cyan Pulse Ring
    const ring3Geom = new THREE.TorusGeometry(3.1, 0.015, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.4,
    });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.y = Math.PI / 3;
    scene.add(ring3);

    // 4. Quantum 4D Particle Swarm
    const particleCount = 100;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xc9a227);
    const blueColor = new THREE.Color(0x0b3d91);
    const cyanColor = new THREE.Color(0x00f0ff);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Golden spiral distribution
      const radius = 2.0 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i + 1] = radius * Math.sin(phi);
      positions[i + 2] = radius * Math.sin(theta) * Math.cos(phi);

      const rand = Math.random();
      const c = rand > 0.6 ? goldColor : rand > 0.3 ? blueColor : cyanColor;
      colors[i] = c.r;
      colors[i + 1] = c.g;
      colors[i + 2] = c.b;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // 5. Dynamic WebGL Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xc9a227, 4, 35);
    goldLight.position.set(5, 5, 4);
    scene.add(goldLight);

    const blueLight = new THREE.PointLight(0x0b3d91, 4, 35);
    blueLight.position.set(-5, -4, 4);
    scene.add(blueLight);

    // Interactive mouse light
    const mouseLight = new THREE.PointLight(0xffffff, 2, 20);
    mouseLight.position.set(0, 0, 5);
    scene.add(mouseLight);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Multi-axis 4D rotation simulation
      ring1.rotation.x = 0.4 * Math.sin(elapsed * 0.45);
      ring1.rotation.y = elapsed * 0.4;

      ring2.rotation.y = -elapsed * 0.35;
      ring2.rotation.z = elapsed * 0.25;

      ring3.rotation.x = elapsed * 0.2;
      ring3.rotation.y = elapsed * 0.25;

      particleSystem.rotation.y = elapsed * 0.06;
      particleSystem.rotation.x = Math.sin(elapsed * 0.1) * 0.1;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 460;
      const newHeight = container.clientHeight || 460;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Smooth 3D tilt
    setRotate({ x: -y * 24, y: x * 24 });
    setGlarePos({ x: (x + 0.5) * 100, y: (y + 0.5) * 100, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[500px] aspect-square flex items-center justify-center cursor-pointer group"
      style={{ perspective: "1200px" }}
    >
      {/* 4D Three.js WebGL Gyroscopic Universe (Canvas Layer) */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* 4D Volumetric Holographic Glow Layer */}
      <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-[#0B3D91]/15 via-[#C9A227]/10 to-transparent blur-3xl -z-10 group-hover:opacity-100 opacity-60 transition-opacity duration-500" />

      {/* Ultra-Sharp 4D 3D Emblem with Realistic Dynamic Multi-Dimensional Tilt Physics */}
      <div
        className="relative z-10 w-[86%] max-w-[420px] transition-transform duration-200 ease-out select-none"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.04, 1.04, 1.04)`,
          transformStyle: "preserve-3d",
          filter: "drop-shadow(0 25px 35px rgba(7, 26, 58, 0.20))",
        }}
      >
        <img
          src={assetPath("/logo-rb-digital.png")}
          alt="RB Digital - Logomarca 4D 3D Oficial"
          className="w-full h-auto object-contain rounded-2xl"
          draggable={false}
        />

        {/* Dynamic Light Sheen / Specular 4D Glare */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.5) 0%, rgba(201, 162, 39, 0.15) 30%, transparent 70%)`,
            opacity: glarePos.opacity,
          }}
        />
      </div>
    </div>
  );
}
