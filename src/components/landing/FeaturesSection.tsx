'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { landingData } from '@/data/landing-data';

export const FeaturesSection: React.FC = () => {
  const { features } = landingData;

  return (
    <section id="features" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intelligence Suite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gold to-purple-accent bg-clip-text text-transparent">
                {features.intelligence.title}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {features.intelligence.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.intelligence.items.map((item, idx) => (
              <FeatureCard
                key={idx}
                icon={item.icon as any}
                title={item.title}
                benefit={item.benefit}
                index={idx}
              />
            ))}
          </div>
        </motion.div>

        {/* Content Automation Engine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-accent to-gold bg-clip-text text-transparent">
                {features.content.title}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {features.content.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.content.items.map((item, idx) => (
              <FeatureCard
                key={idx}
                icon={item.icon as any}
                title={item.title}
                benefit={item.benefit}
                index={idx}
              />
            ))}
          </div>
        </motion.div>

        {/* Business Growth Hub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gold to-purple-accent bg-clip-text text-transparent">
                {features.business.title}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {features.business.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.business.items.map((item, idx) => (
              <FeatureCard
                key={idx}
                icon={item.icon as any}
                title={item.title}
                benefit={item.benefit}
                index={idx}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

