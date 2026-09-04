"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { assetPath } from "@/lib/assetPath";

export default function ThreeHeroBadge() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3D Geometry: Outer Rotating Golden Torus Knot & Inner Metallic Icosahedron
    const ringGeometry = new THREE.TorusGeometry(2.3, 0.04, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9a227,
      metalness: 0.85,
      roughness: 0.2,
      wireframe: false,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(ringMesh);

    const orbitRingGeom = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const orbitRingMat = new THREE.MeshStandardMaterial({
      color: 0x0b3d91,
      metalness: 0.9,
      roughness: 0.3,
    });
    const orbitRingMesh = new THREE.Mesh(orbitRingGeom, orbitRingMat);
    orbitRingMesh.rotation.x = Math.PI / 3;
    scene.add(orbitRingMesh);

    // Floating 3D Particles
    const particleCount = 70;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x0b3d91,
      size: 0.06,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xc9a227, 3, 50);
    pointLight.position.set(4, 4, 5);
    scene.add(pointLight);

    const blueLight = new THREE.PointLight(0x0b3d91, 3, 50);
    blueLight.position.set(-4, -4, 4);
    scene.add(blueLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / height) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      ringMesh.rotation.x = 0.5 * Math.sin(elapsedTime * 0.5) + targetY * 0.4;
      ringMesh.rotation.y = elapsedTime * 0.4 + targetX * 0.4;

      orbitRingMesh.rotation.y = -elapsedTime * 0.3 + targetX * 0.3;
      orbitRingMesh.rotation.z = elapsedTime * 0.2;

      particleSystem.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 400;
      const newHeight = container.clientHeight || 400;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
      {/* 3D WebGL Canvas Layer */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* 3D High-Res Emblem Image Centerpiece with Interactive 3D Depth */}
      <div className="relative z-10 w-[78%] max-w-[340px] transition-transform duration-300 hover:scale-105 select-none pointer-events-auto">
        <img
          src={assetPath("/logo-rb-digital.png")}
          alt="RB Digital 3D Emblem"
          className="w-full h-auto object-contain drop-shadow-2xl"
          draggable={false}
        />
      </div>
    </div>
  );
}
