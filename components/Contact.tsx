'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hwbconsultingltd@outlook.com',
      href: 'mailto:hwbconsultingltd@outlook.com?subject=Inquiry from Interactive CV',
    },
    {
      icon: '📱',
      label: 'Mobile',
      value: '+44 7380 946 591',
      href: 'tel:+447380946591',
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: 'Chat Now',
      href: 'https://wa.me/447380946591',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Heswall, UK',
    },
  ];

  return (
    <section className="py-12 px-6" style={{ backgroundColor: 'rgba(247, 243, 233, 0.9)' }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            Let's Connect
          </h2>
          <p className="font-inter text-lg text-navy/70 max-w-3xl mx-auto">
            Open to discussing opportunities in commodity trading, strategic partnerships, and senior commercial roles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {info.href ? (
                <a
                  href={info.href}
                  className="block bg-navy rounded-2xl p-8 border-2 border-gold/50 hover:border-gold hover:shadow-2xl hover:shadow-gold/30 hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group text-center relative overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />

                  <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10">
                    {info.icon}
                  </div>
                  <div className="text-gold font-semibold mb-2 relative z-10">{info.label}</div>
                  <div className="text-cream font-mono text-xs break-all relative z-10 group-hover:text-cream/100 transition-colors duration-300">{info.value}</div>
                </a>
              ) : (
                <div className="bg-navy rounded-2xl p-8 border-2 border-gold/50 text-center relative overflow-hidden">
                  <div className="text-5xl mb-4">{info.icon}</div>
                  <div className="text-gold font-semibold mb-2">{info.label}</div>
                  <div className="text-cream font-mono text-xs break-all">{info.value}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <a
            href="/pdf"
            target="_blank"
            className="px-8 py-4 bg-navy hover:bg-navy-light text-gold border-2 border-gold font-semibold rounded-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/30 flex items-center gap-3 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">📄</span>
            <span className="relative z-10">Download PDF Version</span>
          </a>
        </motion.div>

        {/* Company Affiliations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="text-navy/50 text-sm mb-6">Current Affiliations</div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 relative">
                <Image
                  src="/logos/lcb-logo.png"
                  alt="Liverpool Cotton Brokers"
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-navy">Liverpool Cotton Brokers</div>
                <div className="text-navy/60 text-sm">Partner</div>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-navy/20" />

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 relative">
                <Image
                  src="/logos/eap-logo.png"
                  alt="Earlam & Partners"
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-navy">Earlam & Partners</div>
                <div className="text-navy/60 text-sm">Commodity Consultant</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center text-navy/50 text-sm"
        >
          <p>© 2025 Harry Bennett. Built with Next.js & Framer Motion.</p>
          <p className="mt-2">Interactive CV • Commodity Trading Specialist</p>
        </motion.div>
      </div>
    </section>
  );
}
