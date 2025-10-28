'use client';

import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Performance-optimized background with static commodity elements */}

      {/* Static gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />

      {/* Subtle static grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 175, 55, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Static candlestick chart patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <g key={i}>
            <line
              x1={`${i * 6 + 5}%`}
              y1={`${30 + (i % 3) * 10}%`}
              x2={`${i * 6 + 5}%`}
              y2={`${50 + (i % 4) * 8}%`}
              stroke="#D4AF37"
              strokeWidth="2"
            />
            <rect
              x={`${i * 6 + 4}%`}
              y={`${35 + (i % 3) * 10}%`}
              width="2%"
              height={`${10 + (i % 3) * 5}%`}
              fill={i % 2 === 0 ? '#2C7A7B' : '#D4AF37'}
              opacity="0.6"
            />
          </g>
        ))}
      </svg>

      {/* Static market ticker */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-navy/50 backdrop-blur-sm border-t-2 border-gold/30 overflow-hidden">
        <div className="flex items-center h-full font-mono text-xs text-gold/80 whitespace-nowrap px-6">
          {['ICE CT1: 70.45¢/lb +0.82', 'Volume: 28.4k', 'US SJV: 72.25¢', 'Brazil: 68.90¢', 'Greek: 75.15¢', 'Bangladesh: 73.20¢', 'Pakistan: 72.85¢', 'Vietnam: 73.50¢', 'Turkey: 72.90¢'].map((item, i) => (
            <span key={i} className="mx-8">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Two subtle glowing orbs - slow animation only */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gold/20 rounded-full blur-3xl"
        style={{ top: '5%', left: '5%', willChange: 'transform' }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-teal/20 rounded-full blur-3xl"
        style={{ bottom: '5%', right: '5%', willChange: 'transform' }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
    </div>
  );
}
