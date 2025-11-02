'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';
import { landingData } from '@/data/landing-data';

export const CompetitiveAnalysis: React.FC = () => {
  const { competitive } = landingData;

  const renderIcon = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-gold mx-auto" />;
    } else if (value === false) {
      return <X className="w-5 h-5 text-gray-600 mx-auto" />;
    } else if (value === 'limited') {
      return <Minus className="w-5 h-5 text-gray-500 mx-auto" />;
    }
    return null;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-card/30 to-background">
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
              {competitive.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {competitive.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto overflow-x-auto"
        >
          <div className="min-w-[800px]">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 mb-2">
              <div></div>
              {competitive.competitors.map((competitor, idx) => (
                <div
                  key={idx}
                  className={`text-center p-4 rounded-t-xl ${
                    idx === 0
                      ? 'bg-gradient-to-br from-gold/20 to-purple-accent/20 border-2 border-gold/50'
                      : 'bg-dark-card border border-dark-border'
                  }`}
                >
                  <h3
                    className={`font-bold text-lg ${
                      idx === 0 ? 'text-gold' : 'text-foreground'
                    }`}
                  >
                    {competitor.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{competitor.description}</p>
                </div>
              ))}
            </div>

            {/* Categories and Features */}
            {competitive.categories.map((category, catIdx) => (
              <div key={catIdx} className="mb-6">
                {/* Category Header */}
                <div className="bg-dark-navy border border-dark-border rounded-lg px-4 py-2 mb-2">
                  <h4 className="font-semibold text-gold text-sm tracking-wider">
                    {category.name}
                  </h4>
                </div>

                {/* Features in this category */}
                {category.features.map((feature, featIdx) => (
                  <div
                    key={featIdx}
                    className="grid grid-cols-5 gap-4 mb-2 items-center"
                  >
                    <div className="bg-dark-card border border-dark-border rounded-lg px-4 py-3">
                      <p className="text-gray-300 text-sm">{feature.name}</p>
                    </div>
                    {feature.availability.map((available, idx) => (
                      <div
                        key={idx}
                        className={`rounded-lg p-3 flex items-center justify-center ${
                          idx === 0
                            ? 'bg-gold/10 border-2 border-gold/30'
                            : 'bg-dark-card border border-dark-border'
                        }`}
                      >
                        {renderIcon(available)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA below table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Why juggle multiple tools when you can have it all in one place?
          </p>
          <button className="bg-gold hover:bg-gold-light text-dark-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40">
            Try Viral Free for 14 Days
          </button>
        </motion.div>
      </div>
    </section>
  );
};

