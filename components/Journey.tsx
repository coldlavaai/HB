'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Journey() {
  const milestones = [
    {
      year: '2011-2015',
      title: 'Engineering Foundation',
      location: 'Liverpool & Malaysia',
      description: 'BEng Civil Engineering (2:1) at Liverpool John Moores. Industry placement in Malaysia during Year 3, developing analytical mindset and international exposure.',
      icon: '🎓',
      color: 'gold',
    },
    {
      year: '2016',
      title: 'Hong Kong Finance',
      location: 'ORB Global Wealth Management',
      description: 'Business Development Manager in Asia\'s financial hub. Implemented CRM systems, optimised sales workflows, achieved 40% lead conversion increase. First taste of international markets.',
      icon: '🏙️',
      color: 'teal',
    },
    {
      year: '2017-2020',
      title: 'Derivatives & Investment',
      location: 'Gate Capital Group, London',
      description: 'Consultant in specialist investment firm. Structured options based strategies, managed portfolio exposure, mastered Bloomberg terminal, developed understanding of derivatives markets.',
      icon: '📊',
      color: 'gold',
    },
    {
      year: '2017-Present',
      title: 'Cotton Trading Specialist',
      location: 'Earlam & Partners',
      description: 'Built agency sales network across Bangladesh, Pakistan, Vietnam, Portugal. Managed multi origin logistics (US, Brazil, Australia, Greece). Designed proprietary execution systems. Produced market analysis blending fundamentals and technicals.',
      icon: '🌾',
      logo: '/logos/eap-logo.png',
      color: 'teal',
    },
    {
      year: '2024-Present',
      title: 'Partnership & Leadership',
      location: 'Liverpool Cotton Brokers',
      description: 'Co-owner and Partner. Managing $40-60M annual procurement programs. Develop strategic advisory for mills and merchants, fixation strategies. Drive traceability and sustainability alignment, lead destination sales of organic cotton. Scaling global operations.',
      icon: '⚡',
      logo: '/logos/lcb-logo.png',
      color: 'gold',
    },
  ];

  return (
    <section id="journey" className="py-12 px-6" style={{ backgroundColor: 'rgba(247, 243, 233, 0.8)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            The Journey
          </h2>
          <p className="font-inter text-lg text-navy/70 max-w-4xl mx-auto leading-relaxed">
            From engineering graduate to commodity consulting partner: a deliberate progression through finance, derivatives, and global soft commodities, culminating in partnership-level responsibility for scaled cotton procurement operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative bg-navy rounded-xl p-5 border-2
                ${milestone.color === 'gold' ? 'border-gold/50 hover:border-gold' : 'border-teal/50 hover:border-teal'}
                transition-all duration-300 hover:shadow-2xl group
              `}
            >
              {/* Year badge */}
              <div className={`
                inline-block px-3 py-1 rounded-full text-xs font-bold mb-3
                ${milestone.color === 'gold' ? 'bg-gold/20 text-gold' : 'bg-teal/20 text-teal'}
              `}>
                {milestone.year}
              </div>

              {/* Icon or Logo */}
              {milestone.logo ? (
                <div className="w-24 h-24 mb-3 relative group-hover:scale-110 transition-transform">
                  <Image
                    src={milestone.logo}
                    alt={milestone.location}
                    fill
                    style={{ objectFit: 'contain' }}
                    unoptimized
                  />
                </div>
              ) : (
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {milestone.icon}
                </div>
              )}

              {/* Title */}
              <h3 className="font-playfair text-lg font-bold text-cream mb-2">
                {milestone.title}
              </h3>

              {/* Location */}
              <div className={`
                text-sm font-semibold mb-3
                ${milestone.color === 'gold' ? 'text-gold/80' : 'text-teal/80'}
              `}>
                {milestone.location}
              </div>

              {/* Description */}
              <p className="text-cream/70 text-sm leading-relaxed">
                {milestone.description}
              </p>

              {/* Progress indicator */}
              {index < milestones.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                  <div className={`
                    w-4 h-4 rotate-45
                    ${milestone.color === 'gold' ? 'bg-gold' : 'bg-teal'}
                  `} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-gradient-to-r from-navy via-navy-light to-navy rounded-2xl p-6 md:p-8 border-2 border-gold/30"
        >
          <div className="grid md:grid-cols-3 gap-6 text-cream">
            <div>
              <h4 className="font-playfair text-xl font-bold text-gold mb-3">Unique Combination</h4>
              <p className="text-sm leading-relaxed text-cream/80">
                Combining engineering-level analytical discipline, Asian financial markets experience, derivatives exposure, and eight years of hands-on physical commodity execution to deliver a complete commercial trading skillset.
              </p>
            </div>
            <div>
              <h4 className="font-playfair text-xl font-bold text-teal mb-3">Proven Track Record</h4>
              <p className="text-sm leading-relaxed text-cream/80">
                Built from ground up: agency networks, proprietary systems, multimillion dollar client relationships, partner level credibility.
                Every step earned through results.
              </p>
            </div>
            <div>
              <h4 className="font-playfair text-xl font-bold text-gold mb-3">Future-Focused</h4>
              <p className="text-sm leading-relaxed text-cream/80">
                Driving sustainability integration and organic developments, building scalable trading infrastructure, positioning for next generation commodity flows. Not just trading - building systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
