"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { assetPath } from "@/lib/assetPath";

export default function ThreeHeroBadge() {
  const mountRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Three.js WebGL Scene for ambient 3D lighting, orbiting golden rings & particle galaxy
    const scene = new THREE.Scene();
    const width = container.clientWidth || 440;
    const height = container.clientHeight || 440;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Outer 3D Golden Torus Ring
    const ringGeometry = new THREE.TorusGeometry(2.4, 0.035, 16, 120);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9a227,
      metalness: 0.9,
      roughness: 0.15,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(ringMesh);

    // Secondary 3D Tech Blue Orbital Ring
    const orbitRingGeom = new THREE.TorusGeometry(2.7, 0.02, 16, 120);
    const orbitRingMat = new THREE.MeshStandardMaterial({
      color: 0x0b3d91,
      metalness: 0.95,
      roughness: 0.2,
    });
    const orbitRingMesh = new THREE.Mesh(orbitRingGeom, orbitRingMat);
    orbitRingMesh.rotation.x = Math.PI / 3;
    scene.add(orbitRingMesh);

    // 3D Particles Constellation
    const particleCount = 80;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 9;
      positions[i + 1] = (Math.random() - 0.5) * 9;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x0b3d91,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
    });
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // WebGL Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const goldPoint = new THREE.PointLight(0xc9a227, 4, 30);
    goldPoint.position.set(5, 5, 5);
    scene.add(goldPoint);

    const bluePoint = new THREE.PointLight(0x0b3d91, 3, 30);
    bluePoint.position.set(-5, -5, 4);
    scene.add(bluePoint);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      ringMesh.rotation.x = 0.3 * Math.sin(elapsedTime * 0.4);
      ringMesh.rotation.y = elapsedTime * 0.35;

      orbitRingMesh.rotation.y = -elapsedTime * 0.25;
      orbitRingMesh.rotation.z = elapsedTime * 0.15;

      particleSystem.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 440;
      const newHeight = container.clientHeight || 440;
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
    setRotate({ x: -y * 22, y: x * 22 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] aspect-square flex items-center justify-center cursor-pointer perspective-1000"
    >
      {/* 3D WebGL Canvas Animation (Behind) */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Ultra-Sharp 4K 3D Emblem with Interactive 3D Perspective Physics */}
      <div
        className="relative z-10 w-[84%] max-w-[390px] transition-transform duration-200 ease-out select-none"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.03, 1.03, 1.03)`,
          filter: "drop-shadow(0 20px 30px rgba(7, 26, 58, 0.18))",
        }}
      >
        <img
          src={assetPath("/logo-rb-digital.png")}
          alt="RB Digital - Logomarca 3D Oficial"
          className="w-full h-auto object-contain rounded-2xl"
          draggable={false}
        />
      </div>
    </div>
  );
}
