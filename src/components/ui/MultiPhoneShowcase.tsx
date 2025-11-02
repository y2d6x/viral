'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CosmicOrb } from './CosmicOrb';

export const MultiPhoneShowcase: React.FC = () => {
  const phones = [
    {
      id: 1,
      rotation: -15,
      translateX: -100,
      translateY: 50,
      scale: 0.85,
      delay: 0,
      zIndex: 10,
    },
    {
      id: 2,
      rotation: -5,
      translateX: -30,
      translateY: -20,
      scale: 1,
      delay: 0.2,
      zIndex: 30,
    },
    {
      id: 3,
      rotation: 5,
      translateX: 30,
      translateY: -10,
      scale: 0.95,
      delay: 0.4,
      zIndex: 20,
    },
    {
      id: 4,
      rotation: 15,
      translateX: 100,
      translateY: 60,
      scale: 0.8,
      delay: 0.6,
      zIndex: 5,
    },
  ];

  return (
    <div className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
      {/* Cosmic background orbs */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <CosmicOrb size="xl" delay={0} />
      </div>
      <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
        <CosmicOrb size="lg" delay={0.5} />
      </div>

      {/* Phone mockups */}
      <div className="relative w-full max-w-6xl mx-auto" style={{ perspective: '2000px' }}>
        {phones.map((phone) => (
          <motion.div
            key={phone.id}
            initial={{ opacity: 0, y: 100, rotateY: phone.rotation * 2 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: phone.delay }}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%, -50%) translateX(${phone.translateX}px) translateY(${phone.translateY}px) scale(${phone.scale})`,
              zIndex: phone.zIndex,
            }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateZ: [phone.rotation, phone.rotation + 2, phone.rotation],
              }}
              transition={{
                duration: 4 + phone.id * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Phone Frame */}
              <div className="relative bg-dark-navy rounded-[3rem] p-3 shadow-2xl border-2 border-cosmic-purple/30 w-[280px]">
                {/* Screen */}
                <div className="bg-gradient-to-b from-dark-card to-dark-navy rounded-[2.5rem] overflow-hidden relative h-[580px]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-dark-navy rounded-b-3xl z-10" />
                  
                  {/* App Content - Different for each phone */}
                  <div className="relative pt-10 pb-8 px-4 h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h1 className="text-lg font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-magenta bg-clip-text text-transparent">
                        Viral
                      </h1>
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cosmic-purple/40 to-cosmic-magenta/40 cosmic-pulse" />
                    </div>

                    {/* Content varies by phone */}
                    {phone.id === 1 && (
                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-cosmic-purple/20 to-cosmic-magenta/20 rounded-2xl p-4 border border-cosmic-purple/30">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-cosmic-magenta rounded-full animate-pulse" />
                            <span className="text-xs text-gray-400">Trending</span>
                          </div>
                          <h3 className="text-white font-semibold mb-1 text-sm">#CosmicVibes</h3>
                          <p className="text-cosmic-purple text-xs">+247% growth</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-dark-navy/50 rounded-xl p-3 border border-cosmic-purple/20 h-20" />
                          ))}
                        </div>
                      </div>
                    )}

                    {phone.id === 2 && (
                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-cosmic-purple/20 to-cosmic-cyan/20 rounded-2xl p-4 border border-cosmic-cyan/30">
                          <h3 className="text-white font-semibold mb-3 text-sm">Analytics</h3>
                          <div className="flex items-end gap-1 h-20">
                            {[60, 80, 65, 90, 70, 95].map((height, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-cosmic-purple to-cosmic-cyan rounded-t"
                                style={{ height: `${height}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {phone.id === 3 && (
                      <div className="flex items-center justify-center h-[400px]">
                        <div className="relative w-48 h-48">
                          <div className="absolute inset-0 rounded-full border-4 border-cosmic-purple/30">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cosmic-purple/40 to-cosmic-magenta/40 cosmic-glow flex items-center justify-center">
                              <span className="text-4xl">✨</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {phone.id === 4 && (
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-cosmic-magenta/20 to-cosmic-pink/20 rounded-xl p-3 border border-cosmic-magenta/30 h-16" />
                        <div className="bg-gradient-to-r from-cosmic-purple/20 to-cosmic-cyan/20 rounded-xl p-3 border border-cosmic-purple/30 h-16" />
                        <div className="bg-gradient-to-r from-cosmic-cyan/20 to-cosmic-purple/20 rounded-xl p-3 border border-cosmic-cyan/30 h-16" />
                      </div>
                    )}

                    {/* Bottom nav */}
                    <div className="absolute bottom-4 left-4 right-4 bg-dark-navy/80 backdrop-blur-lg rounded-2xl p-2 border border-cosmic-purple/20">
                      <div className="flex items-center justify-around">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-6 h-6 rounded-lg bg-cosmic-purple/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-cosmic-purple/60" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone buttons */}
                <div className="absolute -right-1 top-20 w-1 h-10 bg-dark-border rounded-l" />
                <div className="absolute -left-1 top-20 w-1 h-6 bg-dark-border rounded-r" />
                <div className="absolute -left-1 top-32 w-1 h-6 bg-dark-border rounded-r" />
              </div>

              {/* Glow effect around phone */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-2 rounded-[3.5rem] opacity-50 blur-xl"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%)',
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

