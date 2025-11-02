'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CosmicOrbProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  delay?: number;
}

export const CosmicOrb: React.FC<CosmicOrbProps> = ({ 
  size = 'md', 
  className = '',
  delay = 0 
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
      className={`relative ${sizeClasses[size]} ${className}`}
    >
      {/* Outer glow rings */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(217, 70, 239, 0.3), transparent 60%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Main orb */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(167, 139, 250, 0.8), rgba(139, 92, 246, 0.6) 25%, rgba(124, 58, 237, 0.4) 50%, rgba(217, 70, 239, 0.3))',
          boxShadow: '0 0 60px rgba(139, 92, 246, 0.6), inset 0 0 60px rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Inner bright core */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(167, 139, 250, 0.5), transparent)',
            filter: 'blur(20px)',
          }}
        />
        
        {/* Shimmer overlay */}
        <motion.div
          animate={{
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Floating light particles around orb */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cosmic-purple-light"
          animate={{
            x: [
              Math.cos((i * 60 * Math.PI) / 180) * 100,
              Math.cos((i * 60 * Math.PI) / 180) * 120,
              Math.cos((i * 60 * Math.PI) / 180) * 100,
            ],
            y: [
              Math.sin((i * 60 * Math.PI) / 180) * 100,
              Math.sin((i * 60 * Math.PI) / 180) * 120,
              Math.sin((i * 60 * Math.PI) / 180) * 100,
            ],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: '50%',
            top: '50%',
            filter: 'blur(2px)',
          }}
        />
      ))}
    </motion.div>
  );
};

