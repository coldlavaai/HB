'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function Counter({ value, suffix = '', prefix = '', duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration });
      return controls.stop;
    }
  }, [isInView, motionValue, value, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [rounded, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function ByTheNumbers() {
  const stats = [
    {
      value: 8,
      label: 'Years Experience',
      sublabel: 'In commodity trading',
      color: 'gold',
    },
    {
      value: 30000,
      label: 'Metric Tons',
      sublabel: 'Annual procurement (avg)',
      suffix: '+',
      color: 'teal',
    },
    {
      value: 10,
      label: 'Countries',
      sublabel: 'Active trading markets',
      suffix: '+',
      color: 'gold',
    },
    {
      value: 50,
      prefix: '$',
      suffix: 'M',
      label: 'Annual Value',
      sublabel: 'Managed procurement',
      color: 'teal',
    },
  ];

  return (
    <section className="min-h-screen bg-cream py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6">
            By The Numbers
          </h2>
          <p className="font-inter text-xl text-navy/70 max-w-3xl mx-auto">
            Quantifying impact across global cotton markets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                relative bg-navy rounded-2xl p-8 border-2
                ${stat.color === 'gold' ? 'border-gold' : 'border-teal'}
                hover:shadow-2xl hover:scale-105 transition-all duration-300
                overflow-hidden group
              `}
            >
              {/* Background gradient */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300
                ${stat.color === 'gold' ? 'bg-gradient-to-br from-gold to-gold-dark' : 'bg-gradient-to-br from-teal to-teal-dark'}
              `} />

              <div className="relative z-10">
                <div className={`
                  font-mono text-5xl md:text-6xl font-bold mb-4
                  ${stat.color === 'gold' ? 'text-gold' : 'text-teal'}
                `}>
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-cream mb-2">
                  {stat.label}
                </h3>
                <p className="text-cream/70 text-sm">
                  {stat.sublabel}
                </p>
              </div>

              {/* Decorative corner */}
              <div className={`
                absolute top-0 right-0 w-20 h-20 opacity-10
                ${stat.color === 'gold' ? 'bg-gold' : 'bg-teal'}
              `} style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
            </motion.div>
          ))}
        </div>

        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-navy-light rounded-2xl p-8 md:p-12 border border-gold/20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-gold font-mono text-3xl font-bold mb-2">
                Multi-Origin
              </div>
              <p className="text-cream/70">
                US, Brazil, Australia, Greece, West Africa sourcing network
              </p>
            </div>
            <div>
              <div className="text-teal font-mono text-3xl font-bold mb-2">
                360° Service
              </div>
              <p className="text-cream/70">
                Procurement, risk management, logistics, & sustainability
              </p>
            </div>
            <div>
              <div className="text-gold font-mono text-3xl font-bold mb-2">
                Partnership Level
              </div>
              <p className="text-cream/70">
                Co-owner of Liverpool Cotton Brokers since 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
