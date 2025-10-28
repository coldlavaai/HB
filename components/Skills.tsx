'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Trading & Procurement',
      icon: '📊',
      color: 'gold',
      skills: [
        'Physical Cotton Trading',
        'Multi-Origin Sourcing',
        'Contract Negotiation',
        'Price Discovery',
        'Merchant Relations',
        'Producer Networks',
      ],
    },
    {
      title: 'Risk Management',
      icon: '🛡️',
      color: 'teal',
      skills: [
        'Futures & Options',
        'Hedge Strategy',
        'Position Management',
        'Market Analysis',
        'On-Call Fixations',
        'Portfolio Optimization',
      ],
    },
    {
      title: 'Operations & Logistics',
      icon: '🚢',
      color: 'gold',
      skills: [
        'Shipment Execution',
        'LC Documentation',
        'Quality Control',
        'Supply Chain Management',
        'Timeline Coordination',
        'Trade Flow Systems',
      ],
    },
    {
      title: 'Strategic Advisory',
      icon: '💡',
      color: 'teal',
      skills: [
        'Mill Relationship Management',
        'Market Intelligence',
        'Strategic Planning',
        'Sustainability Integration',
        'Executive Consultation',
        'Risk Assessment',
      ],
    },
    {
      title: 'Market Expertise',
      icon: '📈',
      color: 'gold',
      skills: [
        'Fundamentals Analysis',
        'Technical Analysis',
        'Macro Positioning',
        'Supply/Demand Modeling',
        'Bloomberg Terminal',
        'ICE Futures',
      ],
    },
    {
      title: 'Global Coverage',
      icon: '🌍',
      color: 'teal',
      skills: [
        'United States',
        'Brazil',
        'Australia',
        'Greece',
        'West Africa',
        'Bangladesh',
        'Pakistan',
        'Vietnam',
        'Turkey',
        'Portugal',
      ],
    },
  ];

  return (
    <section className="py-12 px-6" style={{ backgroundColor: 'rgba(26, 35, 50, 0.9)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            Skills & Expertise
          </h2>
          <p className="font-inter text-lg text-cream/70 max-w-3xl mx-auto">
            Comprehensive capabilities across the cotton trading value chain
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                bg-navy-light rounded-2xl p-6 border-2
                ${category.color === 'gold' ? 'border-gold/30 hover:border-gold/60' : 'border-teal/30 hover:border-teal/60'}
                hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1
                transition-all duration-500 ease-out cursor-default
                group relative overflow-hidden
              `}
            >
              {/* Hover glow effect */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                ${category.color === 'gold' ? 'bg-gradient-to-br from-gold/10 via-transparent to-transparent' : 'bg-gradient-to-br from-teal/10 via-transparent to-transparent'}
              `} />

              {/* Icon */}
              <div className="relative z-10 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className={`
                relative z-10
                font-playfair text-xl font-bold mb-5
                ${category.color === 'gold' ? 'text-gold' : 'text-teal'}
              `}>
                {category.title}
              </h3>

              {/* Skills as tags */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      px-3 py-1.5 rounded-lg text-xs font-medium
                      ${category.color === 'gold'
                        ? 'bg-gold/10 text-gold border border-gold/30'
                        : 'bg-teal/10 text-teal border border-teal/30'}
                      transition-all duration-300
                      hover:scale-105 hover:shadow-lg
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
