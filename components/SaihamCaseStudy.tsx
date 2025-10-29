'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SaihamCaseStudy() {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'impact'>('overview');

  const tabs = [
    { id: 'overview' as const, label: 'Overview' },
    { id: 'services' as const, label: 'Services' },
    { id: 'impact' as const, label: 'Impact' },
  ];

  const services = [
    {
      title: 'Procurement Strategy',
      description: 'Annual program management covering 20-35k MT',
      details: ['Origin selection', 'Contracting structures', 'Price optimization'],
      icon: '📊',
    },
    {
      title: 'Risk Management',
      description: 'Daily hedge/positioning strategy and market advisory',
      details: ['Futures & options', 'On-call fixations', 'Market intelligence'],
      icon: '🛡️',
    },
    {
      title: 'Logistics & Execution',
      description: 'End-to-end shipment and documentation management',
      details: ['LC handling', 'Quality flow', 'Timeline coordination'],
      icon: '🚢',
    },
    {
      title: 'Strategic Advisory',
      description: 'Primary market and risk advisor to senior leadership',
      details: ['Market analysis', 'Trade guidance', 'Risk assessment'],
      icon: '💡',
    },
  ];

  return (
    <section className="py-12 px-6" style={{ backgroundColor: 'rgba(247, 243, 233, 0.9)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            Flagship Partnership
          </h2>
          <p className="font-inter text-lg text-navy/70 max-w-3xl mx-auto">
            Saiham Group (Bangladesh): comprehensive cotton procurement, risk management, and strategic advisory - a case study in full service commodity partnership
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300
                ${activeTab === tab.id
                  ? 'bg-navy text-gold shadow-xl scale-105'
                  : 'bg-navy-light/20 text-navy hover:bg-navy-light/40'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="min-h-[500px]">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-navy rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border-2 border-gold/50"
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                <div>
                  <h3 className="font-playfair text-3xl font-bold text-gold mb-6">
                    About Saiham Group
                  </h3>
                  <p className="text-cream/80 text-lg mb-6 leading-relaxed">
                    One of Bangladesh's leading textile manufacturers, operating significant spinning and
                    contract spinning capacity for Gildan and requiring integrated cotton procurement, pricing,
                    and execution oversight. This is Harry's largest single client partnership and a core
                    demonstration of full spectrum commodity advisory capability.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-gold text-2xl">📍</span>
                      <div>
                        <div className="text-cream font-semibold">Location</div>
                        <div className="text-cream/70">Bangladesh</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gold text-2xl">🏭</span>
                      <div>
                        <div className="text-cream font-semibold">Industry</div>
                        <div className="text-cream/70">Textile Manufacturing & Spinning</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gold text-2xl">🤝</span>
                      <div>
                        <div className="text-cream font-semibold">Partnership Duration</div>
                        <div className="text-cream/70">Ongoing since 2018</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-teal mb-4 md:mb-6">
                    Procurement Volume
                  </h3>
                  <div className="bg-navy-light rounded-xl p-4 sm:p-6 md:p-8 border border-gold/20">
                    <div className="text-center mb-4 md:mb-6">
                      <div className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-gold mb-2">
                        25-40k
                      </div>
                      <div className="text-cream text-base sm:text-lg md:text-xl">Metric Tons Per Annum</div>
                    </div>
                    <div className="text-center text-cream/70">
                      <div className="mb-3 md:mb-4">Equivalent to:</div>
                      <div className="font-mono text-2xl sm:text-3xl text-teal mb-2">$50-70M</div>
                      <div className="text-xs sm:text-sm">Annual contract value</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-navy rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-teal/50 hover:border-teal hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
                  <h4 className="font-playfair text-xl sm:text-2xl font-bold text-cream mb-2 sm:mb-3">
                    {service.title}
                  </h4>
                  <p className="text-cream/80 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-cream/70">
                        <span className="w-1.5 h-1.5 bg-teal rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'impact' && (
            <motion.div
              key="impact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-navy rounded-2xl p-8 md:p-12 border-2 border-gold/50"
            >
              <h3 className="font-playfair text-3xl font-bold text-gold mb-8 text-center">
                Key Achievements & Impact
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="bg-navy-light rounded-xl p-6 mb-4">
                    <div className="font-mono text-4xl font-bold text-gold mb-2">100%</div>
                    <div className="text-cream/70">On-time delivery</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-navy-light rounded-xl p-6 mb-4">
                    <div className="font-mono text-4xl font-bold text-teal mb-2">24/7</div>
                    <div className="text-cream/70">Market advisory</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-navy-light rounded-xl p-6 mb-4">
                    <div className="font-mono text-4xl font-bold text-gold mb-2">5+</div>
                    <div className="text-cream/70">Origin sources</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-cream/80">
                <div className="bg-navy-light rounded-xl p-6">
                  <h4 className="text-gold font-semibold mb-3 flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    Strategic Hedge Management
                  </h4>
                  <p>
                    Daily positioning strategy and on call fixation management protecting against market
                    volatility while optimizing procurement costs
                  </p>
                </div>

                <div className="bg-navy-light rounded-xl p-6">
                  <h4 className="text-teal font-semibold mb-3 flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    Multi-Origin Diversification
                  </h4>
                  <p>
                    Established diversified supply network across US, Brazil, Australia, Greece, and West
                    Africa to ensure consistent quality and supply security
                  </p>
                </div>

                <div className="bg-navy-light rounded-xl p-6">
                  <h4 className="text-gold font-semibold mb-3 flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    Comprehensive Execution
                  </h4>
                  <p>
                    End-to-end management of contracting, shipment timelines, LC handling, quality flow,
                    and logistics coordination
                  </p>
                </div>

                <div className="bg-navy-light rounded-xl p-6">
                  <h4 className="text-teal font-semibold mb-3 flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    Senior Leadership Advisory
                  </h4>
                  <p>
                    Primary market and risk adviser to Saiham's senior leadership team, providing strategic
                    guidance on trade flows and market positioning
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
