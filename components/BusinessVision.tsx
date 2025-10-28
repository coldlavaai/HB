'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BusinessVision() {
  const [activeModel, setActiveModel] = useState<number>(0);

  const tradingFlow = [
    { label: 'Procurement', locations: 'Brazil, US, Greece, Spain, West Africa, Turkey, Australia', icon: '📦' },
    { label: 'Sales', locations: 'Bangladesh, Pakistan, Vietnam, Turkey, India', icon: '🎯' },
    { label: 'Trade Basis', details: 'FOB/FCA purchase → CFR/CIF sale', icon: '📋' },
  ];

  const capitalFramework = [
    { label: 'Pilot Capital', value: '$850k', detail: '500 MT @ 70c/lb + 10-15% margin buffer' },
    { label: 'Working Capital', value: '$5-10M', detail: 'Revolving facility, scaled gradually' },
    { label: 'Turnover', value: '3-5x', detail: 'Capital rotations annually' },
    { label: 'Gross Margin', value: '1.0-2.0c/lb', detail: 'Depending on route + freight conditions' },
  ];

  const scalePlan = [
    { phase: 'Pilot', volume: '500-1,000 MT', focus: 'Proof of concept + execution reliability' },
    { phase: 'Year 1', volume: '5,000-10,000 MT', focus: 'Scale with top-tier origins and clients' },
    { phase: 'Year 2-3', volume: 'Structured Contracts', focus: '5-10 core mills, long-term partnerships' },
  ];

  return (
    <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            Business Vision
          </h2>
          <p className="font-inter text-lg text-cream/70 max-w-4xl mx-auto">
            Building a Cotton Trading Desk leveraging corporate infrastructure and LCB's commercial network to create scalable, high-integrity physical cotton flows
          </p>
        </motion.div>

        {/* Strategic Rationale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-light/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gold/30 mb-8"
        >
          <h3 className="font-playfair text-2xl font-bold text-gold mb-6 text-center md:text-left">
            Strategic Rationale
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '📈', text: 'Diversifies business → softs and fibres' },
              { icon: '🏗️', text: 'Uses existing trade finance & logistics infrastructure' },
              { icon: '🌐', text: 'Immediate origination & sales via LCB network' },
              { icon: '♻️', text: 'Aligns with sustainability & traceability initiatives' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 bg-navy/50 rounded-lg p-4"
              >
                <span className="text-3xl">{item.icon}</span>
                <p className="text-cream/90 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Trading Flow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy-light/40 backdrop-blur-sm rounded-2xl p-6 border border-teal/30"
          >
            <h3 className="font-playfair text-2xl font-bold text-teal mb-6">Trading Flow</h3>
            <div className="space-y-4">
              {tradingFlow.map((flow, i) => (
                <div key={i} className="bg-navy/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{flow.icon}</span>
                    <span className="font-semibold text-cream">{flow.label}</span>
                  </div>
                  <p className="text-cream/70 text-sm pl-11">
                    {flow.locations || flow.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Capital Framework */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy-light/40 backdrop-blur-sm rounded-2xl p-6 border border-gold/30"
          >
            <h3 className="font-playfair text-2xl font-bold text-gold mb-6">Capital & Risk Framework</h3>
            <div className="space-y-3">
              {capitalFramework.map((item, i) => (
                <div key={i} className="bg-navy/50 rounded-lg p-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-cream/80 text-sm">{item.label}</span>
                    <span className="font-mono font-bold text-gold">{item.value}</span>
                  </div>
                  <p className="text-cream/60 text-xs">{item.detail}</p>
                </div>
              ))}
              <div className="bg-teal/10 border border-teal/30 rounded-lg p-4 mt-4">
                <p className="text-cream/90 text-sm">
                  <span className="font-semibold text-teal">Risk Management:</span> ICE futures, FX forwards, verified counterparties, existing shipping desks
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scale Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-light/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gold/30"
        >
          <h3 className="font-playfair text-2xl font-bold text-cream mb-6 text-center">Deployment Strategy</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {scalePlan.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-navy/50 rounded-xl p-6 border-2 border-gold/30 hover:border-gold transition-all"
              >
                <div className="text-center mb-4">
                  <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-bold mb-3">
                    {phase.phase}
                  </div>
                  <div className="font-mono text-2xl font-bold text-cream mb-2">
                    {phase.volume}
                  </div>
                </div>
                <p className="text-cream/70 text-sm text-center">
                  {phase.focus}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-cream/60 text-sm italic">
              Start with top-tier, low-friction origination & mills already known/tested
            </p>
          </div>
        </motion.div>

        {/* Capacity Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-teal/20 to-gold/20 rounded-2xl p-6 border border-gold/20"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-gold font-mono text-3xl font-bold mb-2">3,000-4,000 MT</div>
              <p className="text-cream/70 text-sm">Cotton capacity at any given time</p>
            </div>
            <div>
              <div className="text-teal font-mono text-3xl font-bold mb-2">3-5 Rotations</div>
              <p className="text-cream/70 text-sm">Annual capital turns</p>
            </div>
            <div>
              <div className="text-gold font-mono text-3xl font-bold mb-2">Controlled Ramp</div>
              <p className="text-cream/70 text-sm">Year 1 approach: proof before scale</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
