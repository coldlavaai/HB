'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues with Three.js
const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center">
      <div className="text-gold animate-pulse">Loading Interactive Globe...</div>
    </div>
  ),
});

export default function GlobalFootprint() {
  const globeEl = useRef<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Origin points (suppliers)
  const origins = [
    { lat: 37.0902, lng: -95.7129, name: 'United States', color: '#D4AF37', size: 0.8 },
    { lat: -14.2350, lng: -51.9253, name: 'Brazil', color: '#D4AF37', size: 0.8 },
    { lat: -25.2744, lng: 133.7751, name: 'Australia', color: '#D4AF37', size: 0.7 },
    { lat: 39.0742, lng: 21.8243, name: 'Greece', color: '#D4AF37', size: 0.5 },
    { lat: 9.9456, lng: -9.6966, name: 'West Africa', color: '#D4AF37', size: 0.6 },
  ];

  // Destination points (mills/customers)
  const destinations = [
    { lat: 23.6850, lng: 90.3563, name: 'Bangladesh', color: '#2C7A7B', size: 1.2 },
    { lat: 30.3753, lng: 69.3451, name: 'Pakistan', color: '#2C7A7B', size: 0.9 },
    { lat: 14.0583, lng: 108.2772, name: 'Vietnam', color: '#2C7A7B', size: 0.8 },
    { lat: 39.3999, lng: 35.5018, name: 'Turkey', color: '#2C7A7B', size: 0.8 },
    { lat: 39.3999, lng: -8.2245, name: 'Portugal', color: '#2C7A7B', size: 0.6 },
  ];

  const allPoints = [...origins, ...destinations];

  // Trade routes (arcs between origins and destinations)
  const routes = destinations.flatMap(dest =>
    origins.map(origin => ({
      startLat: origin.lat,
      startLng: origin.lng,
      endLat: dest.lat,
      endLng: dest.lng,
      color: ['#D4AF37', '#2C7A7B'],
    }))
  );

  useEffect(() => {
    if (globeEl.current && mounted) {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;

      // Disable zoom, keep rotation
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().enableRotate = true;

      // Optional: limit vertical rotation to keep it natural
      globeEl.current.controls().minPolarAngle = Math.PI / 3.5;
      globeEl.current.controls().maxPolarAngle = Math.PI - Math.PI / 3.5;
    }
  }, [mounted]);

  return (
    <section id="global-footprint" className="bg-navy py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            Global Footprint
          </h2>
          <p className="font-inter text-lg text-cream/70 max-w-3xl mx-auto">
            Multi-origin sourcing network connecting premium cotton growers with leading mills across Asia and Europe
          </p>
        </motion.div>

        {/* Single Panel with Globe and Lists */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-navy-light/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gold/20"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Globe */}
            <div className="flex items-center justify-center">
              {mounted && (
                <Globe
                  ref={globeEl}
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  backgroundColor="rgba(0,0,0,0)"
                  pointsData={allPoints}
                  pointLabel="name"
                  pointAltitude={0.01}
                  pointRadius="size"
                  pointColor="color"
                  arcsData={routes}
                  arcColor="color"
                  arcDashLength={0.4}
                  arcDashGap={0.2}
                  arcDashAnimateTime={3000}
                  arcStroke={0.5}
                  arcsTransitionDuration={0}
                  height={450}
                  width={450}
                />
              )}
            </div>

            {/* Country Lists */}
            <div className="space-y-6">
              <div className="bg-navy/50 backdrop-blur-sm rounded-xl p-6 border border-gold/30">
                <h3 className="font-playfair text-xl font-bold text-gold mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-gold rounded-full animate-pulse" />
                  Origin Markets
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {origins.map((point) => (
                    <div key={point.name} className="flex items-center gap-2">
                      <span className="text-gold text-xs">●</span>
                      <span className="text-cream/90 text-sm">{point.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy/50 backdrop-blur-sm rounded-xl p-6 border border-teal/30">
                <h3 className="font-playfair text-xl font-bold text-teal mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-teal rounded-full animate-pulse" />
                  Destination Markets
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {destinations.map((point) => (
                    <div key={point.name} className="flex items-center gap-2">
                      <span className="text-teal text-xs">●</span>
                      <span className="text-cream/90 text-sm">{point.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary stats */}
              <div className="bg-gradient-to-r from-gold/10 to-teal/10 rounded-xl p-4 border border-gold/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="font-mono text-2xl font-bold text-gold">5</div>
                    <div className="text-cream/70 text-xs">Origin Countries</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-bold text-teal">5</div>
                    <div className="text-cream/70 text-xs">Destination Markets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
