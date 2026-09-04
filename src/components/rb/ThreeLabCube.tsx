"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeLabCube() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 240;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Outer Wireframe Cube
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
    const boxMaterial = new THREE.MeshStandardMaterial({
      color: 0x0b3d91,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    // Inner Golden Icosahedron Core
    const coreGeometry = new THREE.IcosahedronGeometry(0.8, 0);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9a227,
      metalness: 0.9,
      roughness: 0.1,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // Tech Orbital Rings
    const ringGeom = new THREE.RingGeometry(1.6, 1.65, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
    const ring1 = new THREE.Mesh(ringGeom, ringMat);
    ring1.rotation.x = Math.PI / 2;
    scene.add(ring1);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xc9a227, 2, 20);
    pointLight.position.set(2, 2, 3);
    scene.add(pointLight);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      boxMesh.rotation.x = elapsed * 0.4;
      boxMesh.rotation.y = elapsed * 0.6;

      coreMesh.rotation.x = -elapsed * 0.5;
      coreMesh.rotation.y = -elapsed * 0.3;

      ring1.rotation.z = elapsed * 0.5;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 300;
      const h = container.clientHeight || 240;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-44 flex items-center justify-center pointer-events-none" />;
}
