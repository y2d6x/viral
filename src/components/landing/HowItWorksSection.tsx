'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { landingData } from '@/data/landing-data';

export const HowItWorksSection: React.FC = () => {
  const { howItWorks } = landingData;

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">{howItWorks.title}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {howItWorks.steps.map((step, idx) => {
            const Icon = Icons[step.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative"
              >
                {/* Connector Line (hidden on last item) */}
                {idx < howItWorks.steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gold via-purple-accent to-transparent" />
                )}

                <div className="relative bg-dark-card border border-dark-border rounded-xl p-8 hover:border-gold/50 transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gold to-purple-accent rounded-full flex items-center justify-center text-dark-navy font-bold text-lg shadow-lg">
                    {idx + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-purple-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-gold" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA below steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Ready to get started?</p>
          <button className="bg-gold hover:bg-gold-light text-dark-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40">
            Start Your 14-Day Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
};

