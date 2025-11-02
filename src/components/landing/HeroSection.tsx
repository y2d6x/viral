'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0614] via-[#1a1229] to-[#0a0614]" />
      
      {/* Large cosmic orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cosmic-purple/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-cosmic-magenta/20 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3" style={{ animation: 'floatSlow 15s ease-in-out infinite' }} />
      
      {/* Aurora-like gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cosmic-purple/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cosmic-cyan/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            >
              <span className="text-foreground">Aim for</span>
              <br />
              <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-magenta to-cosmic-pink bg-clip-text text-transparent">
                Viral Growth
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Transform your content strategy with AI-powered insights that predict trends, optimize engagement, and connect you with the right opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button size="lg" variant="primary" className="min-w-[200px]">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px]">
                See How It Works
              </Button>
            </motion.div>

          </motion.div>

          {/* Right: Multi-Phone Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end min-h-[600px]"
          >
            <div className="relative w-full max-w-2xl h-[600px]">
              {/* Stacked phone mockups */}
              <div className="relative w-full h-full" style={{ perspective: '2000px' }}>
                {/* Phone 1 - Center, largest */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotateZ: [-5, -3, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
                  style={{ width: '280px' }}
                >
                  <PhoneMockup />
                </motion.div>

                {/* Phone 2 - Left, smaller, rotated */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotateZ: [-15, -12, -15] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 opacity-80"
                  style={{ width: '240px', transform: 'translateY(-50%) rotateZ(-15deg) scale(0.85)' }}
                >
                  <PhoneMockup />
                </motion.div>

                {/* Phone 3 - Right, smaller, rotated */}
                <motion.div
                  animate={{ y: [0, -12, 0], rotateZ: [15, 12, 15] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 opacity-75"
                  style={{ width: '260px', transform: 'translateY(-50%) rotateZ(15deg) scale(0.9)' }}
                >
                  <PhoneMockup />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

