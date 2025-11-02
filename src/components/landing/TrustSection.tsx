'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const TrustSection: React.FC = () => {
  const logos = [
    'Forbes', 'TechCrunch', 'The Verge', 'Product Hunt', 'BetaList'
  ];

  return (
    <section className="py-16 border-b border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">As Seen On</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {logos.map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-gray-400 text-lg md:text-xl font-semibold hover:text-cosmic-purple transition-colors"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Trusted by <span className="text-cosmic-purple font-bold">500,000+</span> Creators Worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-magenta bg-clip-text text-transparent mb-2">
                500K+
              </div>
              <div className="text-sm text-gray-500">Active Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cosmic-magenta to-cosmic-pink bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-sm text-gray-500">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cosmic-cyan to-cosmic-purple bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <div className="text-sm text-gray-500">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

