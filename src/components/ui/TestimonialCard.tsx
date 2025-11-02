'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  handle: string;
  avatar: string;
  stat: string;
  quote: string;
  rating: number;
  index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  handle,
  avatar,
  stat,
  quote,
  rating,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/50 transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-purple-accent/20 flex items-center justify-center shrink-0">
          <span className="text-2xl font-bold text-gold">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="text-lg font-bold text-foreground">{name}</h4>
          <p className="text-gray-400 text-sm">{handle}</p>
          <div className="flex gap-1 mt-2">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-gold font-bold text-lg">{stat}</p>
      </div>
      
      <blockquote className="text-gray-300 leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </motion.div>
  );
};

