'use client';

import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: keyof typeof Icons;
  title: string;
  benefit: string;
  index?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, benefit, index = 0 }) => {
  const Icon = Icons[icon] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/50 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="bg-gold/10 p-3 rounded-lg group-hover:bg-gold/20 transition-colors duration-300 shrink-0">
          <Icon className="w-6 h-6 text-gold" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{benefit}</p>
        </div>
      </div>
    </motion.div>
  );
};

