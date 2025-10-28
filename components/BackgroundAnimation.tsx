'use client';

import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* VERY VISIBLE animated background */}

      {/* Large animated cotton fibers */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${40 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 30}px`,
              background: i % 3 === 0 ? 'rgba(212, 175, 55, 0.4)' : i % 3 === 1 ? 'rgba(44, 122, 123, 0.4)' : 'rgba(247, 243, 233, 0.6)',
              filter: 'blur(8px)',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Price chart grid - VERY VISIBLE */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 175, 55, 0.5) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.5) 2px, transparent 2px)
          `,
          backgroundSize: '100px 80px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '100px 80px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Diagonal trade routes - VERY VISIBLE */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.line
            key={i}
            x1="0%"
            y1={`${i * 20}%`}
            x2="100%"
            y2={`${(i * 20 + 40) % 100}%`}
            stroke={i % 2 === 0 ? '#D4AF37' : '#2C7A7B'}
            strokeWidth="3"
            strokeDasharray="20 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Market ticker - VERY VISIBLE */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-navy/60 backdrop-blur-sm border-t-2 border-gold/50 overflow-hidden">
        <motion.div
          className="flex items-center h-full font-mono text-sm text-gold font-bold whitespace-nowrap"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {['ICE CT1: 70.45¢/lb +0.82', 'Volume: 28.4k', 'US SJV: 72.25¢', 'Brazil: 68.90¢', 'Greek: 75.15¢', 'Bangladesh: 73.20¢', 'Pakistan: 72.85¢', 'Vietnam: 73.50¢', 'ICE CT1: 70.45¢/lb +0.82', 'Volume: 28.4k', 'US SJV: 72.25¢', 'Brazil: 68.90¢'].map((item, i) => (
            <span key={i} className="mx-12 text-shadow">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Large glowing orbs - IMPOSSIBLE TO MISS */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-gold/30 rounded-full blur-3xl"
        style={{ top: '10%', left: '10%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-teal/30 rounded-full blur-3xl"
        style={{ bottom: '10%', right: '10%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Candlestick chart patterns - VERY VISIBLE */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
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
              opacity="0.7"
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
