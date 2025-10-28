'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Trading & Procurement',
      color: 'gold',
      skills: [
        { name: 'Physical Cotton Trading', level: 95 },
        { name: 'Multi-Origin Sourcing', level: 90 },
        { name: 'Contract Negotiation', level: 92 },
        { name: 'Price Discovery', level: 88 },
      ],
    },
    {
      title: 'Risk Management',
      color: 'teal',
      skills: [
        { name: 'Futures & Options', level: 90 },
        { name: 'Hedge Strategy', level: 93 },
        { name: 'Position Management', level: 91 },
        { name: 'Market Analysis', level: 89 },
      ],
    },
    {
      title: 'Operations & Logistics',
      color: 'gold',
      skills: [
        { name: 'Shipment Execution', level: 94 },
        { name: 'LC Documentation', level: 87 },
        { name: 'Quality Control', level: 85 },
        { name: 'Supply Chain Management', level: 88 },
      ],
    },
    {
      title: 'Client Relations',
      color: 'teal',
      skills: [
        { name: 'Mill Relationship Management', level: 95 },
        { name: 'Strategic Advisory', level: 92 },
        { name: 'Market Intelligence', level: 90 },
        { name: 'Sustainability Integration', level: 86 },
      ],
    },
  ];

  const expertise = [
    { icon: '🌍', title: 'Geographic Coverage', items: ['US', 'Brazil', 'Australia', 'Greece', 'West Africa', 'Bangladesh', 'Pakistan', 'Vietnam', 'Turkey', 'Portugal'] },
    { icon: '🏛️', title: 'Platforms & Tools', items: ['ICE Futures', 'Bloomberg Terminal', 'TradeFlow Systems', 'FiberTrace', 'TextileGenesis'] },
    { icon: '📈', title: 'Market Expertise', items: ['Fundamentals Analysis', 'Technical Analysis', 'Macro Positioning', 'Supply/Demand Modeling'] },
    { icon: '🤝', title: 'Partnership Model', items: ['Direct Mill Contracting', 'Merchant Relationships', 'Producer Networks', 'Agency Sales'] },
  ];

  return (
    <section className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6">
            Skills & Expertise
          </h2>
          <p className="font-inter text-xl text-cream/70 max-w-3xl mx-auto">
            Comprehensive capabilities across the cotton trading value chain
          </p>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className={`
                bg-navy-light rounded-2xl p-8 border-2
                ${category.color === 'gold' ? 'border-gold/30' : 'border-teal/30'}
              `}
            >
              <h3 className={`
                font-playfair text-2xl font-bold mb-6
                ${category.color === 'gold' ? 'text-gold' : 'text-teal'}
              `}>
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-cream/90 font-medium">{skill.name}</span>
                      <span className="text-cream/60 font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-navy-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 + 0.2 }}
                        className={`
                          h-full rounded-full
                          ${category.color === 'gold' ? 'bg-gradient-to-r from-gold-dark to-gold' : 'bg-gradient-to-r from-teal-dark to-teal'}
                        `}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertise.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy-light rounded-xl p-6 border border-gold/20 hover:border-gold/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h4 className="font-playfair text-lg font-bold text-cream mb-4">
                {area.title}
              </h4>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li key={item} className="text-cream/70 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
