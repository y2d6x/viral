'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from '@/components/ui/PricingCard';
import { landingData } from '@/data/landing-data';

export const PricingSection: React.FC = () => {
  const { pricing } = landingData;

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-dark-card/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold to-purple-accent bg-clip-text text-transparent">
              {pricing.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-start">
          {pricing.tiers.map((tier, idx) => (
            <PricingCard
              key={idx}
              {...tier}
              index={idx}
            />
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Cancel anytime. Prices shown are for annual billing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

