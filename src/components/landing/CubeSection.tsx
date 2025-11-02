'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { landingData } from '@/data/landing-data';

export const CubeSection: React.FC = () => {
  const { features } = landingData;
  // Generate particle data using deterministic pattern based on index
  // This creates varied but consistent positions without using Math.random()
  const particles = useMemo(() => {
    return [...Array(12)].map((_, i) => {
      // Use index-based calculations for deterministic "random" values
      const angle = (i * 137.508) % 360; // Golden angle approximation for even distribution
      const radius = 30 + (i % 5) * 15; // Varying distances
      const x = 50 + Math.cos((angle * Math.PI) / 180) * radius;
      const y = 50 + Math.sin((angle * Math.PI) / 180) * radius;
      const duration = 4 + (i % 3) * 0.8; // Varying durations
      const delay = (i % 4) * 0.5; // Staggered delays
      
      return {
        id: i,
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
        duration,
        delay,
      };
    });
  }, []);

  return (
    <section className="py-40 lg:py-48 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, #1A0033 70%)',
        }}
      />

      {/* Subtle animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-purple-500"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
            style={{
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Cube Image - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Outer glow effect */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.5) 0%, transparent 70%)',
                filter: 'blur(80px)',
                transform: 'scale(1.8)',
              }}
            />

            {/* Secondary glow */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(ellipse, rgba(217, 70, 239, 0.4) 0%, transparent 70%)',
                filter: 'blur(100px)',
                transform: 'scale(2.2)',
              }}
            />

            <div className="relative w-full max-w-[800px] sm:max-w-[900px] lg:max-w-[1000px]">
              <div className="relative aspect-square w-full">
                {/* Shadow/glow behind image */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: -1,
                  }}
                />
                
                <div className="absolute inset-0">
                  <Image
                    src="/cube-image.png"
                    alt="3D Glowing Cube"
                    fill
                    className="object-contain drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 0 60px rgba(139, 92, 246, 0.6)) drop-shadow(0 0 120px rgba(217, 70, 239, 0.4))',
                    }}
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-7 lg:space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            >
              <span className="text-foreground">{features.business.title.split(':')[0]}</span>
              <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #8b5cf6, #d946ef, #60a5fa, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%',
                }}
              >
                {features.business.title.split(':').slice(1).join(':')}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              {features.business.subtitle}
            </motion.p>

            <div className="space-y-5 mt-8">
              {features.business.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-dark-card/30 border border-purple-500/10 hover:bg-dark-card/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-magenta flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" variant="primary">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

