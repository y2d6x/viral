'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({ 
  count = 20,
  className = '' 
}) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    endX: Math.random() * 100,
    endY: Math.random() * -50 - 50,
    color: ['cosmic-purple', 'cosmic-magenta', 'cosmic-cyan', 'cosmic-pink'][
      Math.floor(Math.random() * 4)
    ],
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-${particle.color}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.startX}%`,
            top: `${particle.startY}%`,
            filter: 'blur(1px)',
          }}
          animate={{
            x: [(particle.endX - particle.startX) * 10],
            y: [particle.endY * 10],
            opacity: [0, 0.8, 0.6, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Additional glowing particles */}
      {Array.from({ length: Math.floor(count / 2) }).map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 2,
            height: Math.random() * 3 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.8), transparent)',
            filter: 'blur(2px)',
          }}
          animate={{
            y: [0, -200 - Math.random() * 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

