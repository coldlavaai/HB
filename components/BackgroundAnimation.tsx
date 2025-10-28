'use client';

import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Simplified, performance-optimized background */}

      {/* Static gradient overlays - no animation */}
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
