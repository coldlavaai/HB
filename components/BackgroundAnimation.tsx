'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Cotton fibers: different layers with different parallax speeds
  const cottonFibers = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: Math.random() * 20 + 10,
    opacity: Math.random() * 0.4 + 0.4, // Increased from 0.3 + 0.2 to 0.4 + 0.4
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 5,
    parallaxSpeed: Math.random() * 100 + 50,
  }));

  // Trade routes: diagonal lines pulsing across screen
  const tradeRoutes = [
    { startX: 0, startY: 20, endX: 100, endY: 60, delay: 0 },
    { startX: 0, startY: 40, endX: 100, endY: 80, delay: 2 },
    { startX: 0, startY: 60, endX: 100, endY: 30, delay: 4 },
    { startX: 0, startY: 80, endX: 100, endY: 50, delay: 1 },
  ];

  // Market data ticker
  const tickerData = [
    'ICE CT1: 70.45¢/lb +0.82',
    'Volume: 28.4k',
    'US SJV: 72.25¢',
    'Brazil Mato: 68.90¢',
    'Greek: 75.15¢',
    'AUS: 71.30¢',
    'Bangladesh CFR: 73.20¢',
    'Pakistan: 72.85¢',
    'Vietnam: 73.50¢',
    'Open Interest: 245k',
  ];

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base cotton fiber texture */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="cotton-texture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M50 10 Q60 30 50 50 Q40 30 50 10"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <path
                d="M20 30 Q30 50 20 70 Q10 50 20 30"
                fill="none"
                stroke="#F5F5DC"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <circle cx="70" cy="60" r="8" fill="#2C7A7B" opacity="0.2" />
              <circle cx="30" cy="80" r="6" fill="#D4AF37" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cotton-texture)" />
        </svg>
      </div>

      {/* Floating cotton fibers - Layer 1 (slow) */}
      {mounted && (
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          {cottonFibers.slice(0, 15).map((fiber) => (
            <motion.div
              key={`fiber-1-${fiber.id}`}
              className="absolute rounded-full bg-cream/30 blur-sm"
              style={{
                left: `${fiber.initialX}%`,
                width: `${fiber.size}px`,
                height: `${fiber.size * 0.6}px`,
                opacity: fiber.opacity,
              }}
              initial={{ y: `${fiber.initialY}vh`, rotate: 0 }}
              animate={{
                y: [`${fiber.initialY}vh`, `${fiber.initialY + 100}vh`],
                rotate: [0, 360],
                x: [0, Math.sin(fiber.id) * 30, 0],
              }}
              transition={{
                duration: fiber.duration,
                delay: fiber.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Floating cotton fibers - Layer 2 (medium) */}
      {mounted && (
        <motion.div style={{ y: y2 }} className="absolute inset-0">
          {cottonFibers.slice(15, 30).map((fiber) => (
            <motion.div
              key={`fiber-2-${fiber.id}`}
              className="absolute rounded-full bg-gold/20 blur-md"
              style={{
                left: `${fiber.initialX}%`,
                width: `${fiber.size * 1.5}px`,
                height: `${fiber.size}px`,
                opacity: fiber.opacity * 0.7,
              }}
              initial={{ y: `${fiber.initialY}vh`, rotate: 0 }}
              animate={{
                y: [`${fiber.initialY}vh`, `${fiber.initialY + 100}vh`],
                rotate: [0, -360],
                x: [0, -Math.sin(fiber.id) * 40, 0],
              }}
              transition={{
                duration: fiber.duration * 1.2,
                delay: fiber.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Floating cotton fibers - Layer 3 (fast) */}
      {mounted && (
        <motion.div style={{ y: y3 }} className="absolute inset-0">
          {cottonFibers.slice(30).map((fiber) => (
            <motion.div
              key={`fiber-3-${fiber.id}`}
              className="absolute rounded-full bg-teal/15 blur-lg"
              style={{
                left: `${fiber.initialX}%`,
                width: `${fiber.size * 2}px`,
                height: `${fiber.size * 1.2}px`,
                opacity: fiber.opacity * 0.5,
              }}
              initial={{ y: `${fiber.initialY}vh`, rotate: 0 }}
              animate={{
                y: [`${fiber.initialY}vh`, `${fiber.initialY + 100}vh`],
                rotate: [0, 180],
                x: [0, Math.cos(fiber.id) * 50, 0],
              }}
              transition={{
                duration: fiber.duration * 0.8,
                delay: fiber.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Price chart grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #D4AF37 1px, transparent 1px),
            linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
          `,
          backgroundSize: '80px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '80px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Candlestick patterns */}
      {mounted && (
        <div className="absolute inset-0 opacity-[0.25]">
          <svg width="100%" height="100%" className="mix-blend-overlay">
            {Array.from({ length: 20 }).map((_, i) => {
              const x = (i * 5) % 100;
              const y = 20 + (i * 3) % 60;
              const height = 10 + (i % 15);
              return (
                <motion.g
                  key={`candle-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{
                    duration: 3 + (i % 5),
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <line
                    x1={`${x}%`}
                    y1={`${y - 5}%`}
                    x2={`${x}%`}
                    y2={`${y + height + 5}%`}
                    stroke="#D4AF37"
                    strokeWidth="1"
                  />
                  <rect
                    x={`${x - 0.5}%`}
                    y={`${y}%`}
                    width="1%"
                    height={`${height}%`}
                    fill={i % 2 === 0 ? '#2C7A7B' : '#D4AF37'}
                  />
                </motion.g>
              );
            })}
          </svg>
        </div>
      )}

      {/* Trade route pulses */}
      {mounted && (
        <div className="absolute inset-0">
          <svg width="100%" height="100%">
            <defs>
              <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2C7A7B" stopOpacity="0" />
              </linearGradient>
            </defs>
            {tradeRoutes.map((route, i) => (
              <motion.line
                key={`route-${i}`}
                x1={`${route.startX}%`}
                y1={`${route.startY}%`}
                x2={`${route.endX}%`}
                y2={`${route.endY}%`}
                stroke="url(#route-gradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 8,
                  delay: route.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </svg>
        </div>
      )}

      {/* Market data ticker */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-navy/40 backdrop-blur-sm border-t border-gold/30 overflow-hidden">
        <motion.div
          className="flex items-center h-full font-mono text-xs text-gold/70 whitespace-nowrap"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...tickerData, ...tickerData, ...tickerData].map((item, i) => (
            <span key={i} className="mx-8">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Subtle glow effects that respond to scroll */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.5, 0.2, 0.5, 0.2]),
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal/20 rounded-full blur-3xl"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.2, 0.5, 0.2, 0.5]),
        }}
      />
    </div>
  );
}
