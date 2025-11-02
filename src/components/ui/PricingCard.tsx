'use client';

import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';

interface PricingFeature {
  name: string;
  value?: string;
  included?: boolean;
}

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  billing: string;
  description: string;
  cta: string;
  popular?: boolean;
  features: PricingFeature[];
  index?: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period,
  billing,
  description,
  cta,
  popular = false,
  features,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-dark-card rounded-xl p-8 ${
        popular
          ? 'border-2 border-gold shadow-2xl shadow-gold/20 scale-105'
          : 'border border-dark-border'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-dark-navy px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="mb-2">
          <span className="text-5xl font-bold text-foreground">${price}</span>
          <span className="text-gray-400">/{period}</span>
        </div>
        <p className="text-sm text-gray-500">{billing}</p>
      </div>

      <Button
        variant={popular ? 'primary' : 'outline'}
        className="w-full mb-6"
        size="lg"
      >
        {cta}
      </Button>

      <div className="space-y-3">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            {feature.included === false ? (
              <X className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
            ) : (
              <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <span className={feature.included === false ? 'text-gray-600' : 'text-gray-300'}>
                {feature.name}
              </span>
              {feature.value && (
                <span className="text-gold font-semibold ml-2">{feature.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

