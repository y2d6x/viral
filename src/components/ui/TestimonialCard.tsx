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
      className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-cosmic-purple/50 hover:bg-dark-card-hover hover:shadow-lg hover:shadow-cosmic-purple/10 transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-purple/30 to-cosmic-magenta/30 flex items-center justify-center shrink-0 ring-2 ring-cosmic-purple/20">
          <span className="text-2xl font-bold text-cosmic-purple-light">{name.charAt(0)}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div>
              <h4 className="text-lg font-bold text-foreground">{name}</h4>
              <p className="text-gray-400 text-sm">{handle}</p>
            </div>
            {/* Verified Badge */}
            <div className="flex items-center gap-1 bg-cosmic-purple/10 px-2 py-1 rounded-full">
              <svg className="w-3 h-3 text-cosmic-purple" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex gap-1 mt-2">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-cosmic-purple-light font-bold text-lg">{stat}</p>
      </div>
      
      <blockquote className="text-gray-300 leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </motion.div>
  );
};

