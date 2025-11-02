'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { landingData } from '@/data/landing-data';

export const TrustBar: React.FC = () => {
  const { trustBar } = landingData;

  return (
    <section className="py-12 border-y border-dark-border bg-dark-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm font-semibold tracking-wider mb-8">
            {trustBar.title}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {trustBar.logos.map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
              >
                <span className="text-xl font-bold text-gray-400 hover:text-foreground transition-colors">
                  {logo}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

