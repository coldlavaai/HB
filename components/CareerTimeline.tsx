'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CareerTimeline() {
  const timeline = [
    {
      period: 'January 2024 — Present',
      role: 'Partner',
      company: 'Liverpool Cotton Brokers Ltd (LCB)',
      location: 'Hoylake (Global Coverage)',
      logo: '/logos/lcb-logo.png',
      highlights: [
        'Co-owner managing market intelligence, origination, and direct sales strategy',
        'Lead strategic advisory for futures, options, and hedge strategy for mill clients',
        'Responsible for 20-35k MT annual procurement program with Saiham Group (Bangladesh)',
        'Developing structured supply chains from Brazil, Australia, Greece to Asia & Europe',
        'Driving traceability and sustainability alignment (FiberTrace, TextileGenesis)',
      ],
      color: 'gold',
    },
    {
      period: 'November 2017 — Present',
      role: 'Commodity Consultant',
      company: 'Earlam & Partners / EH&W Ltd',
      location: 'Hoylake (Overseas & Remote)',
      logo: '/logos/eap-logo.png',
      highlights: [
        'Developed agency sales network across Bangladesh, Pakistan, Vietnam, Portugal',
        'Managed logistics for U.S., Brazilian, Australian, and Greek cotton shipments',
        'Designed shipment & position sheet systems for execution and risk visibility',
        'Lead training and mentoring of execution staff',
        'Produced regular market analysis covering fundamentals and technical drivers',
      ],
      color: 'teal',
    },
    {
      period: 'November 2017 — April 2020',
      role: 'Consultant',
      company: 'Gate Capital Group',
      location: 'London',
      highlights: [
        'Structured options-based investment and hedge strategies',
        'Gained practical experience in derivatives and portfolio exposure management',
        'P/L reporting and Bloomberg-led research',
      ],
      color: 'gold',
    },
    {
      period: 'August 2016 — December 2016',
      role: 'Business Development Manager',
      company: 'ORB Global Wealth Management',
      location: 'Hong Kong',
      highlights: [
        'Implemented CRM adoption and sales workflow optimization',
        'Increased lead conversion by 40%',
        'Built relationships with international private clients and advisory groups',
      ],
      color: 'teal',
    },
    {
      period: '2011 — 2015',
      role: 'BEng Civil Engineering (2:1)',
      company: 'Liverpool John Moores University',
      location: 'Liverpool, UK',
      highlights: [
        'Advanced Structural Engineering, Risk Management & Economic Analysis',
        'Offshore/Coastal Design',
        'Year Three Industry Placement in Malaysia',
      ],
      color: 'gold',
      isEducation: true,
    },
  ];

  return (
    <section className="bg-navy py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            Career Journey
          </h2>
          <p className="font-inter text-lg text-cream/70 max-w-3xl mx-auto">
            From engineering foundations to engineering global supply chains
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-teal to-gold" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                relative mb-12 md:mb-20
                ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}
              `}
            >
              {/* Timeline dot */}
              <div className={`
                absolute left-8 md:left-1/2 transform md:-translate-x-1/2
                w-4 h-4 rounded-full border-4 border-navy z-10
                ${item.color === 'gold' ? 'bg-gold' : 'bg-teal'}
              `} />

              {/* Content card */}
              <div className={`
                ml-20 md:ml-0 md:w-5/12
                ${index % 2 === 0 ? '' : 'md:ml-auto'}
              `}>
                <div className={`
                  bg-navy-light rounded-2xl p-6 md:p-8 border-2
                  ${item.color === 'gold' ? 'border-gold/50' : 'border-teal/50'}
                  hover:border-${item.color} hover:shadow-2xl transition-all duration-300
                  group
                `}>
                  {/* Logo */}
                  {item.logo && (
                    <div className="mb-4 flex justify-start">
                      <div className="w-32 h-12 relative bg-white rounded-lg p-2 overflow-hidden">
                        <Image
                          src={item.logo}
                          alt={item.company}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    </div>
                  )}

                  {/* Period */}
                  <div className={`
                    font-mono text-sm font-semibold mb-2
                    ${item.color === 'gold' ? 'text-gold' : 'text-teal'}
                  `}>
                    {item.period}
                  </div>

                  {/* Role */}
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-cream mb-2">
                    {item.role}
                  </h3>

                  {/* Company */}
                  <div className="text-cream/80 font-semibold mb-1">
                    {item.company}
                  </div>

                  {/* Location */}
                  <div className="text-cream/60 text-sm mb-4">
                    {item.location}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 text-cream/70 text-sm md:text-left">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`
                          mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0
                          ${item.color === 'gold' ? 'bg-gold' : 'bg-teal'}
                        `} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badge for education */}
                  {item.isEducation && (
                    <div className="mt-4 inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-semibold">
                      Education
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
