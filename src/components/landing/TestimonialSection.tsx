'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { landingData } from '@/data/landing-data';

export const TestimonialSection: React.FC = () => {
  const { testimonials } = landingData;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-dark-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">What Our </span>
            <span className="bg-gradient-to-r from-gold to-purple-accent bg-clip-text text-transparent">
              Creators Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of happy creators who have transformed their influence with Viral
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              {...testimonial}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

