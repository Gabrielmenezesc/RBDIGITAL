"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// We do a simple dynamic import style pattern or just standard leaflet in useEffect
export default function LocationSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    let mapInstance: any = null;

    const initMap = async () => {
      if (typeof window !== "undefined" && !mapLoaded && mapRef.current) {
        // Dynamically import leaflet to avoid SSR issues
        const L = (await import("leaflet")).default;
        await import("leaflet/dist/leaflet.css");

        // Fix leaflet icon paths
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        });

        const lat = -16.068;
        const lng = -47.977;

        mapInstance = L.map(mapRef.current).setView([lat, lng], 15);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20
        }).addTo(mapInstance);

        L.marker([lat, lng]).addTo(mapInstance)
          .bindPopup('<b>RB Digital</b><br>Valparaiso de Goias')
          .openPopup();

        setMapLoaded(true);
      }
    };

    initMap();

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, [mapLoaded]);

  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl text-center font-bold mb-16 text-white uppercase"
        >
          Onde Estamos
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl lg:col-span-1"
          >
            <div className="w-12 h-12 rounded-full bg-[#0B3D91]/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">Sede Administrativa</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Rua 3, S/N, Quadra 03, Casa 09<br/>
              Parque Rio Branco<br/>
              Valparaiso de Goias - GO<br/>
              CEP 72870-055
            </p>

            <a 
              href="https://www.google.com/maps/search/Rua+3+Parque+Rio+Branco+Valparaiso+de+Goias+GO+72870-055" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full justify-center text-sm font-bold tracking-wider"
            >
              ABRIR LOCALIZACAO
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl overflow-hidden glass-card h-[400px] lg:h-full min-h-[400px] border border-white/10"
          >
            <div ref={mapRef} className="w-full h-full z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
