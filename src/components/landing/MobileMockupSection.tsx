'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { landingData } from '@/data/landing-data';

export const MobileMockupSection: React.FC = () => {
  const { features } = landingData;
  // Floating particles data - predefined values for consistent rendering
  const particles = useMemo(() => {
    const particleData = [
      { size: 3.2, x: 15, y: 20, duration: 5.3, delay: 0.2, xOffset: 4.5 },
      { size: 4.8, x: 45, y: 10, duration: 6.1, delay: 0.8, xOffset: -7.2 },
      { size: 2.5, x: 72, y: 35, duration: 4.7, delay: 1.5, xOffset: 8.1 },
      { size: 3.9, x: 25, y: 60, duration: 5.8, delay: 0.4, xOffset: -5.3 },
      { size: 5.1, x: 85, y: 75, duration: 6.5, delay: 1.2, xOffset: 9.2 },
      { size: 2.8, x: 55, y: 45, duration: 4.9, delay: 0.6, xOffset: -3.7 },
      { size: 4.3, x: 30, y: 85, duration: 5.6, delay: 1.8, xOffset: 6.4 },
      { size: 3.6, x: 68, y: 55, duration: 5.2, delay: 0.9, xOffset: -8.9 },
    ];
    return particleData.map((data, i) => ({
      id: i,
      ...data,
    }));
  }, []);

  return (
    <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
      {/* Enhanced background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-dark-card/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-purple/5 via-transparent to-cosmic-magenta/5" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: ['0%', '20%', '0%'],
          y: ['0%', '30%', '0%'],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-96 h-96 bg-cosmic-purple/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: ['0%', '-15%', '0%'],
          y: ['0%', '-25%', '0%'],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-cosmic-magenta/10 rounded-full blur-3xl"
      />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, rgba(139, 92, 246, 0.6), transparent)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-center lg:text-right space-y-7"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              <span className="text-foreground">{features.intelligence.title.split(':')[0]}</span>
              <br />
              <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-magenta to-cosmic-pink bg-clip-text text-transparent">
                {features.intelligence.title.split(':')[1]}
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0 lg:ml-auto"
            >
              {features.intelligence.subtitle}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="space-y-4 text-left lg:text-right max-w-md mx-auto lg:mx-0 lg:ml-auto"
            >
              {features.intelligence.items.slice(0, 3).map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center gap-3 lg:justify-end group"
                >
                  <motion.span
                    className="text-cosmic-purple text-xl font-bold"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✓
                  </motion.span>
                  <span className="text-gray-200 group-hover:text-foreground transition-colors duration-200">
                    {item.title}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Center Column - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center order-first lg:order-none relative"
          >
            <motion.div
              initial={{ scaleX: 0, scaleY: 0 }}
              animate={{
                y: [0, -8, 0],
                scaleX: 1.4,
                scaleY: 1.1,
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 1,
                  delay: 0.3,
                  type: 'spring',
                  stiffness: 100,
                },
              }}
              className="relative"
              style={{ transformOrigin: 'center center' }}
            >
              <PhoneMockup variant="analytics" />
              
              {/* Enhanced multi-layer glow effects */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full blur-3xl -z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5), rgba(217, 70, 239, 0.3), transparent)',
                }}
              />
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute inset-0 rounded-full blur-[4rem] -z-20"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.2), transparent)',
                }}
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute inset-0 rounded-full blur-2xl -z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4), rgba(217, 70, 239, 0.2), transparent)',
                }}
              />
              
              {/* Additional depth shadow */}
              <div className="absolute inset-0 -z-30 blur-2xl bg-cosmic-purple/20" style={{ transform: 'translateY(20px) scale(1.1)' }} />
            </motion.div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-center lg:text-left space-y-7"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              <span className="text-foreground">{features.content.title.split(':')[0]}</span>
              <br />
              <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-magenta to-cosmic-pink bg-clip-text text-transparent">
                {features.content.title.split(':').slice(1).join(':')}
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              {features.content.subtitle}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="space-y-4 text-left max-w-md mx-auto lg:mx-0"
            >
              {features.content.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <motion.span
                    className="text-cosmic-magenta text-xl font-bold"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✓
                  </motion.span>
                  <span className="text-gray-200 group-hover:text-foreground transition-colors duration-200">
                    {item.title}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

